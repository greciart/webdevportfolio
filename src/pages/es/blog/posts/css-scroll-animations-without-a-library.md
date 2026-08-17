---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Animaciones al hacer scroll con CSS puro y un observador diminuto"
author: Grecia V.
description: "Cómo funcionan las animaciones de este sitio: keyframes de CSS en pausa hasta que el elemento entra en pantalla, sin librería de animación y sin JavaScript por frame."
image:
  url: "/images/posts/css-scroll-animations-fluid-motion.webp"
  alt: "Tinta turquesa y coral dispersándose en agua en estelas lentas, como imagen del movimiento fluido en una página web."
pubDate: 2026-08-09
tags:
  [
    "Web Design & UX",
    "Creative Coding",
    "Tutorials & Guides"
  ]
languages: ["css", "javascript", "tailwind"]
---

Cada tanto alguien me pregunta qué librería uso para las animaciones de este sitio. La respuesta honesta es ninguna. Todo el sistema de aparición al hacer scroll son keyframes de CSS más unas veinte líneas de JavaScript cuyo único trabajo es decidir *cuándo* arrancan.

Esa distinción es todo el truco, así que conviene decirla clara antes de cualquier código: **JavaScript no debería estar ejecutando la animación. Solo debería estar accionando un interruptor.** En cuanto una librería empieza a calcular posiciones en cada evento de scroll, te apuntaste a trabajo en el hilo principal durante todo el tiempo que la página esté abierta. En cuanto el navegador está corriendo una animación de CSS, no le pide nada a tu código.

## La forma del sistema

Tres piezas:

1. Los elementos empiezan con la animación ya puesta, pero **en pausa**, así el navegador los mantiene en el primer frame.
2. Un `IntersectionObserver` los vigila y cambia `animation-play-state` a `running` cuando entran en la ventana.
3. Cuando la animación termina, se quita entera para que el elemento vuelva a ser un elemento normal.

No se lee ninguna posición, no se mide nada, y no hay ningún listener de scroll.

## Paso 1. Armar la animación antes de que pueda correr

```css
[data-reveal] {
  animation-duration: 700ms;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
  animation-fill-mode: both;
  animation-play-state: paused;
}

@keyframes reveal-up {
  from { opacity: 0; translate: 0 28px; }
  to   { opacity: 1; translate: 0 0; }
}

[data-reveal="up"] { animation-name: reveal-up; }
```

`animation-fill-mode: both` es lo que mantiene al elemento en su estado `from` mientras está en pausa. Sin eso, una animación pausada muestra el elemento con sus estilos normales y todo se ve antes de que le toque.

Fíjate en lo que tocan los keyframes: `opacity` y `translate`, nada más. Esas dos las maneja el compositor, en su propio hilo, así que no pueden provocar layout ni mover nada en la página. No es un detalle menor. Una animación que desplaza un elemento con `top` o `margin` vuelve a calcular el layout en cada frame, que en un teléfono de gama media es exactamente la forma de terminar con una página que se traba y un Cumulative Layout Shift que no te explicas.

## Paso 2. Quitarle la pausa cuando aparece

```js
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      entry.target.classList.add("reveal-in");
    }
  },
  { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
);

document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
```

```css
[data-reveal].reveal-in { animation-play-state: running; }
```

Eso es todo lo que corre en tiempo de ejecución. El `unobserve` justo después de disparar significa que cada elemento se vigila exactamente una vez y después se suelta, así que la lista del observador se encoge conforme la persona baja, en vez de crecer.

El `rootMargin` de `-8%` abajo sube un poco la línea de disparo. Sin eso, un elemento empieza a animarse en cuanto su primer píxel cruza el borde, lo que se lee como cosas apareciendo justo debajo del borde de la pantalla, donde nadie está mirando. Encoger un poco el área de disparo hace que la aparición ocurra donde el ojo ya está.

## Paso 3. Devolver el elemento

```js
window.setTimeout(() => el.classList.add("reveal-done"), 1600);
```

```css
[data-reveal].reveal-done { animation: none; }
```

Este es fácil de saltarse y vale la pena hacerlo. Un elemento con una animación terminada todavía encima conserva la capa de composición que esa animación necesitaba, y en una página con cincuenta de ellos eso es memoria real. Además estorba: un `hover:scale-105` en una tarjeta pelea con una animación sobrante que se adueñó de `transform`. Quitar la animación cuando ya cumplió su función le devuelve al elemento sus estilos normales.

## Escalonar, sin escribir un escalonado

Un grupo de tarjetas que aparecen todas de golpe parece una página cargando. Las mismas tarjetas apareciendo con 70ms de diferencia parecen intencionales. Para eso tampoco hace falta JavaScript:

```css
[data-reveal-stagger] > *:nth-child(1) { animation-delay: 0ms; }
[data-reveal-stagger] > *:nth-child(2) { animation-delay: 70ms; }
[data-reveal-stagger] > *:nth-child(3) { animation-delay: 140ms; }
[data-reveal-stagger] > *:nth-child(n + 9) { animation-delay: 500ms; }
```

El observador vigila el contenedor, los hijos heredan la animación, y `nth-child` hace la secuencia. Poner un tope en el noveno hijo importa: sin ese tope, la tarjeta veinte de una cuadrícula espera 1,4 segundos después de la primera, y eso deja de leerse como escalonado y empieza a leerse como un error.

Una cosa que me agarró desprevenida. En una cuadrícula bento el orden del DOM no es el orden visual, porque las piezas se colocan con `col-start` y `row-start`. La secuencia por defecto de `nth-child` revelaba primero la pieza de abajo a la derecha. Si tu maquetado reordena cosas, los retrasos hay que reescribirlos para que coincidan con lo que ve el ojo, y por breakpoint.

## Las dos reglas que sigo arriba del pliegue

**Nunca animes desde `opacity: 0` tu elemento visible más grande.** Chrome ignora los elementos completamente transparentes al elegir el candidato a Largest Contentful Paint. Un elemento que aparece desde cero no cuenta como pintado hasta que la aparición empieza, así que una animación decorativa te retrasa el LCP exactamente lo que hayas demorado. Empieza en `0.01`. Es idéntico a la vista y el elemento cuenta como pintado en el primer frame.

**No hagas que el hero dependa de JavaScript para verse.** Todo lo que está arriba del pliegue lleva una animación de CSS a secas que corre al cargar, sin observador de por medio:

```css
[data-reveal-now] {
  animation: reveal-enter 1600ms cubic-bezier(0.4, 0, 0.2, 1) backwards;
}
```

Si el observador es lo que hace aparecer el contenido, entonces un error de JavaScript, un script bloqueado o una conexión lenta significan un hero en blanco. Ese es un mal trato a cambio de un fundido.

## El problema del desenfoque

`filter: blur()` en una aparición se ve precioso. También es la única propiedad de mi set que el navegador no le pasa al compositor, así que cada frame se vuelve a rasterizar en el hilo principal. Lighthouse marca justo esto bajo "evita las animaciones no compuestas".

La mantuve, porque es parte de cómo se ve el sitio, pero con una pista que limita el daño:

```css
[data-reveal].reveal-in { will-change: filter, opacity, transform; }
[data-reveal].reveal-done { will-change: auto; }
```

`will-change` promueve el elemento a su propia capa, así el repintado se queda dentro de esa capa en lugar de arrastrar todo lo que hay detrás. La mitad importante es la segunda línea. Un `will-change` permanente es una fuga de memoria con buenas intenciones; darlo solo mientras la animación corre, y retirarlo en cuanto termina, te da el beneficio sin el costo.

## Apagarlo todo

Dos interruptores, y ninguno es negociable.

El del sistema:

```css
@media (prefers-reduced-motion: reduce) {
  [data-reveal] { animation: none !important; }
}
```

Y un control dentro de la interfaz, porque muchísima gente que quiere menos movimiento en una web jamás ha abierto los ajustes de accesibilidad de su sistema operativo. En este sitio eso es un interruptor en el menú de accesibilidad que escribe un atributo en `<html>`, que después lee el CSS. El mismo efecto, encontrable por alguien que no es ya experto en su propio dispositivo.

Hay un tercer caso que también vale la pena resolver: `[data-reveal]` solo debe esconder cosas cuando el script que las revela es capaz de correr. Una clase que pone un script diminuto en el head condiciona todo el sistema, así que con JavaScript desactivado nunca se esconde nada.

## ¿Alguna vez toca usar una librería?

Sí, cuando necesitas control de línea de tiempo: secuencias encadenadas, animaciones atadas a la posición del scroll, transformación de trazados. GSAP se gana sus bytes en ese tipo de trabajo y yo no intentaría escribirlo a mano.

Pero una aparición con desplazamiento cuando algo entra en pantalla no es eso. Son cuatro keyframes y un cambio de clase, y hacerlo tú significa que la animación corre a los frames que el compositor pueda dar, y no a los que tu JavaScript alcance a seguir.
