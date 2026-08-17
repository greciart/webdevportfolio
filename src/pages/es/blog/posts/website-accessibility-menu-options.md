---
layout: /src/layouts/MarkdownPostLayout.astro
title: "El menú de accesibilidad de este sitio, y cómo está hecha cada opción"
author: Grecia V.
description: "Tamaño de texto, contraste, espaciado, tipografía simple, foco visible y menos movimiento, en un sitio real. El CSS detrás de cada opción y por qué es CSS."
image:
  url: "/images/posts/keyboard-navigation-web-accessibility.webp"
  alt: "Vista cenital de dos manos apoyadas en el teclado de un portátil sobre un escritorio blanco, como imagen de navegar una web sin ratón."
pubDate: 2026-08-13
tags:
  [
    "Web Design & UX",
    "Web Development",
    "Tutorials & Guides"
  ]
languages: ["css", "html", "javascript"]
---

Hay una versión del trabajo de accesibilidad que es sobre todo una lista de verificación: pasas una auditoría, arreglas lo que marca, sigues. Vale la pena hacerla y no es de lo que va este artículo.

Este va de la otra mitad. No de "¿mi página pasa un test automático?", sino de "¿puede alguien ajustar esta página a cómo lee de verdad?". Son preguntas distintas, y la segunda no tiene casi nada que ver con tu puntuación de Lighthouse.

Este sitio tiene un menú pequeño en la cabecera con seis interruptores. Esto es lo que hace cada uno, de qué está hecho, y la decisión que hay detrás.

## La regla que hizo simple todo lo demás

Cada preferencia es un atributo de datos en `<html>`, y cada efecto es CSS a secas leyendo ese atributo.

```js
document.documentElement.dataset.a11yContrast = "on";
```

```css
html[data-a11y-contrast="on"] p { color: #111827; }
```

Esa es toda la arquitectura. JavaScript escribe un atributo, el CSS hace el trabajo. No se vuelve a renderizar nada, no se calculan estilos en el script, y añadir la séptima opción más adelante es un bloque de CSS y una línea en un array.

La alternativa, recorrer el DOM poniendo estilos en línea, es como se suelen construir estos menús y es peor en todas las direcciones: más lento, más difícil de deshacer, y pisa estilos que la página necesita.

## Las preferencias tienen que sobrevivir a la recarga, y al primer pintado

Guardar en `localStorage` es lo obvio. Lo que no es tan obvio es que leerlo de vuelta en un script normal ya es tarde.

Si la preferencia la aplica un script al final de la página, quien visita ve la página renderizarse en el tamaño por defecto y después dar un salto visible cuando entra su ajuste. Para alguien que aumentó el texto porque lo necesita aumentado, ese parpadeo es el sitio diciéndole que su preferencia es una ocurrencia tardía.

Así que la reposición corre en línea dentro del `<head>`, antes de que se pinte nada:

```html
<script is:inline>
  try {
    var a11y = JSON.parse(localStorage.getItem("a11y-prefs") || "{}");
    var el = document.documentElement;
    if (a11y.text) el.style.setProperty("--a11y-text-scale", a11y.text);
    el.dataset.a11yContrast = a11y.contrast ? "on" : "off";
    el.dataset.a11yMotion = a11y.motion ? "off" : "on";
  } catch (e) {}
</script>
```

Es un script que bloquea el render, algo que normalmente pelearía, pero son un puñado de bytes y corre antes del primer frame. El `try/catch` importa: `localStorage` lanza excepción directamente en algunos modos de privacidad, y un error aquí se llevaría por delante todo lo que viene después.

## Tamaño del texto

Una propiedad personalizada, una línea de CSS, y toda la página escala:

```css
html {
  font-size: calc(14px * var(--a11y-text-scale, 1));
}
```

Esto solo funciona si todos los tamaños del sitio están en `rem`. Si la mitad de tu tipografía está en `px`, la mitad de la página ignora el ajuste y el maquetado se rompe. Vale la pena revisarlo antes de construir el control, porque cambiar las unidades es el trabajo de verdad aquí.

Tres pasos, en 1, 1.15 y 1.3. No un deslizador. Un deslizador parece más generoso y se usa peor: invita a juguetear, es incómodo en pantalla táctil, y nadie tiene una opinión sobre el 1,07.

## Más contraste

La paleta de este sitio es menta y turquesa sobre casi blanco, con resplandores suaves y desenfocados detrás de todo. Es el aspecto que quiero y no es lo más fácil de leer.

El interruptor de contraste hace tres cosas, y ninguna cambia el maquetado:

```css
html[data-a11y-contrast="on"] :is(p, li, span, td, label) {
  color: #111827;
}
html[data-a11y-contrast="on"] .markdown :is(strong, em) {
  background: none !important;
  -webkit-text-fill-color: currentColor !important;
  color: var(--color-mint-800);
}
html[data-a11y-contrast="on"] *::before,
html[data-a11y-contrast="on"] *::after {
  opacity: 0.12;
}
```

El texto de cuerpo se va a los extremos de la escala. La negrita, que normalmente lleva un degradado recortado encima, vuelve a un color sólido, porque el texto con degradado tiene un ratio de contraste distinto en cada letra y el que cuenta es el más bajo. Y los resplandores decorativos bajan a casi invisibles, ya que un lavado verde suave detrás de un párrafo te está costando contraste todo el rato.

Lo que no hace es invertir nada ni tirar el diseño. Mueve ratios de contraste, no roles de color.

## Texto más espaciado

```css
html[data-a11y-spacing="on"] :is(p, li, h1, h2, h3) {
  line-height: 1.75 !important;
  letter-spacing: 0.06em !important;
  word-spacing: 0.14em !important;
}
```

Esos tres números no son inventados. Son los mínimos del criterio WCAG 1.4.12, que pide que una página siga funcionando cuando quien lee los aplica. Los mando como algo que se activa a voluntad y no por defecto, para que la tipografía conserve el ritmo que quise darle para quien no necesita la ayuda, y esté a un clic para quien sí.

Usar `em` en lugar de `px` hace que el espaciado siga al tamaño de texto que esté seleccionado, así los dos controles se combinan en vez de pelearse.

## Una tipografía más simple

```css
html[data-a11y-font="readable"] {
  font-family: Verdana, Tahoma, "DejaVu Sans", sans-serif !important;
  font-variant-ligatures: none;
}
```

Verdana y Tahoma vienen con prácticamente cualquier escritorio y cualquier teléfono, lo que significa que esta opción no descarga nada. Ese fue el factor que decidió. Existen tipografías diseñadas específicamente para lectores con dislexia, y la investigación sobre si superan a una sans ancha y bien espaciada está genuinamente dividida, así que pagar ochenta kilobytes por una es un mal trato frente a una fuente que ya está en el dispositivo.

En este modo también se apagan las ligaduras. `fi` y `fl` fundidas en un solo glifo son justo el tipo de cosa que hace una palabra más difícil de descifrar letra por letra.

## Un foco que no se puede pasar por alto

```css
html[data-a11y-focus="on"] :is(a, button, input):focus-visible {
  outline: 3px solid #111827 !important;
  outline-offset: 3px !important;
  box-shadow: 0 0 0 6px #6ce9b7 !important;
}
```

Una banda sólida más un halo claro, para que se vea sobre una tarjeta blanca, sobre un degradado menta y sobre un pie casi negro sin necesitar tres variantes.

`:focus-visible` en lugar de `:focus` es a propósito. `:focus` también se dispara con el clic del ratón, que es la razón por la que tantos sitios quitan los estilos de foco del todo y rompen la navegación por teclado para todo el mundo. `:focus-visible` muestra el anillo cuando el navegador cree que hace falta, que en la práctica significa uso de teclado.

Si te llevas una sola cosa de este artículo, llévate esta: nunca escribas `outline: none` sin escribir el reemplazo en el mismo commit.

## Reducir el movimiento

```css
html[data-a11y-motion="off"] *,
html[data-a11y-motion="off"] *::before,
html[data-a11y-motion="off"] *::after {
  animation-duration: 0.001ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.001ms !important;
  scroll-behavior: auto !important;
}
```

`prefers-reduced-motion` ya existe y este sitio lo respeta. Este interruptor está aquí porque un ajuste a nivel de sistema es un ajuste que casi nadie sabe que tiene. Alguien a quien una página en movimiento le provoca mareo no va a ponerse a buscar en el panel de accesibilidad de su sistema operativo; va a cerrar la pestaña.

Poner la duración en `0.001ms` en lugar de `none` es el truco que mantiene vivos los manejadores de `animationend`, así que cualquier código esperando a que una animación termine sigue recibiendo su evento.

Un sitio por donde esto se me escapó al principio: las vistas previas en bucle de mi cuadrícula de proyectos son elementos `<video>`, y el CSS no puede pausar un vídeo. Reducir el movimiento tiene que alcanzarlos también desde el script, o la cosa más animada de la página sigue animándose después de que pediste que parara.

## Dos cosas que no están en el menú

**Un enlace para saltar al contenido.** Lo primero que alcanza un Tab desde la barra de direcciones, fuera de pantalla hasta que recibe el foco:

```css
.skip-link { position: absolute; top: -6rem; transition: top 160ms; }
.skip-link:focus { top: 0; }
```

Sin él, cada visitante que usa teclado recorre la cabecera entera en cada página antes de llegar a nada de lo que vino a ver.

**Un `<main>` de verdad.** El mío fue un `<div>` durante más tiempo del que me gustaría admitir, lo que significaba que la página no tenía ninguna región principal, que el enlace de salto no tenía a dónde apuntar, y que quien usa lector de pantalla no tenía forma de saltarse la navegación. Cambiar una etiqueta arregló las tres cosas.

Ya que estás ahí, revisa el orden de tus encabezados. Mi página de inicio iba de `h1` directo a cuatro `h3`, porque las piezas del bento son pequeñas y elegí la etiqueta por lo grande que quería el texto. La solución es separar el rango del tamaño: las etiquetas pasan a `h2` porque ese es su lugar en el esquema, y una propiedad de tamaño las deja viéndose exactamente igual.

## Un menú no sustituye nada

Vale la pena decirlo claro, porque hay una industria entera vendiendo lo contrario.

Un widget atornillado encima de un sitio inaccesible no lo vuelve accesible. Si tu contraste falla, arregla el contraste. Si tus imágenes no tienen texto alternativo, escríbelo. Si tus campos de formulario no tienen etiqueta, etiquétalos. Eso no son preferencias, son defectos, y ningún interruptor los repara.

Para lo que sirve un menú como este es para la parte que va por encima de esa base: alguien que quiere el texto un poco más grande, alguien a quien la negrita con degradado le cuesta leer, alguien que quiere que la página se quede quieta. El sitio ya debería funcionar sin nada de esto. Esto va de dejar que alguien lo haga funcionar mejor para sí, en la página, sin tener que ir a cazar entre los ajustes de su dispositivo.
