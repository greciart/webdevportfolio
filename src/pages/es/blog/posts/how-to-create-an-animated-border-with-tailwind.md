---
layout: /src/layouts/MarkdownPostLayout.astro
title: Crea un borde animado con Tailwind CSS
author: Grecia V.
description: "Añade un toque dinámico a tus diseños con un borde animado en Tailwind CSS. Aprende a usar conic-gradient y animaciones para lograr un efecto visual impresionante. 🚀✨"
image:
  url: "/images/posts/animated-borders-tailwind.webp"
  alt: "Ejemplo de bordes animados con Tailwind CSS sobre un diseño oscuro, con un fondo de degradado de colores vivos."
pubDate: 2025-03-27
tags:
  [
    "Web Development",
    "Web Design & UX",
    "Creative Coding",
    "Tutorials & Guides"
  ]
languages: ["tailwind", "html", ]
---

La propiedad `border` de CSS no se puede animar de forma nativa. Sin embargo, podemos simular ese efecto usando un `div` con un fondo animado y colocando el contenido dentro de un elemento hijo con `padding`, que hará las veces del "grosor" del borde.

Este método puede parecer complejo si no trabajas seguido con CSS o con frameworks como Tailwind CSS, pero vas a ver que no es tan difícil y que el resultado final es bastante satisfactorio.

## Tipos de degradados en CSS

Para lograr nuestro borde animado necesitamos conocer los distintos tipos de degradado que hay en CSS:

- **Degradado lineal:** avanza en una dirección concreta.
  - [Documentación](https://developer.mozilla.org/es/docs/Web/CSS/gradient/linear-gradient)
- **Degradado radial:** se expande desde un punto central hacia fuera.
  - [Documentación](https://developer.mozilla.org/es/docs/Web/CSS/gradient/radial-gradient)
- **Degradado cónico:** gira alrededor de un punto central, creando un efecto de "rueda".
  - [Documentación](https://developer.mozilla.org/es/docs/Web/CSS/gradient/conic-gradient)

Para nuestro borde animado vamos a usar el **degradado cónico**, porque es el que nos permite crear el efecto de giro.

## Implementando el borde animado

```html
<div
  class="w-full max-w-lg bg-conic/[from_0deg] from-white to-white dark:from-black via-green-400 dark:to-black  rounded-2xl p-px"
>
  <div class="p-10 rounded-2xl bg-transparent">
    <p class="text-white text-center font-semibold ">
      Fondo del contenedor padre
    </p>
  </div>
</div>
```

<div class="w-full max-w-lg bg-conic/[from_0deg] from-white to-white dark:from-black via-green-400 dark:to-black rounded-2xl p-px">
  <div class="p-10 rounded-2xl bg-transparent">
    <p class="text-white text-center font-semibold mt-8">
      Fondo del contenedor padre
    </p>
  </div>
</div>

<br>
<hr>
<br>

Si le añadimos un fondo al contenedor hijo, conseguimos el efecto de borde:

```html
<div
  class="w-full max-w-lg bg-conic/[from_0deg] from-white to-white dark:from-black via-green-400 dark:to-black rounded-2xl p-px"
>
  <!-- Contenedor padre -->
  <div class="p-10 rounded-2xl dark:dark:bg-zinc-900 bg-mint-50">
    <!-- Contenedor hijo -->
    <p class="text-white text-center font-semibold">
      Al añadir un fondo al contenedor hijo conseguimos el efecto de borde
    </p>
  </div>
</div>
```

<div class="w-full max-w-lg bg-conic/[from_0deg] from-white to-white dark:from-black via-green-400 dark:to-black rounded-2xl p-px">
  <div class="p-10 rounded-2xl dark:bg-zinc-900 bg-zinc-50">
    <p class="text-white text-center font-semibold mt-8">
      Al añadir un fondo al contenedor hijo conseguimos el efecto de borde
    </p>
    
  </div>
</div>

## Añadiendo la animación con `@property`

Vamos a usar `@property` para definir una propiedad personalizada que nos permita animar el borde:

```css
@property --border-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}
```

Después creamos la animación con `@keyframes` y la añadimos al tema de Tailwind CSS:

```css
@theme {
  --animate-rotate-border: border-rotate 3s linear infinite;
  @keyframes border-rotate {
    to {
      --border-angle: 360deg;
    }
  }
}
```

Ahora la implementamos en las clases del contenedor padre:

```html
<div
  class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-white to-white dark:from-black via-green-400 dark:to-black animate-rotate-border rounded-2xl p-px"
>
  <div class="p-10 rounded-2xl bg-transparent">
    <p class="text-white text-center font-semibold">
      Fondo animado del contenedor padre
    </p>
  </div>
</div>
```

<div
      class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-white to-white dark:from-black via-green-400 dark:to-black animate-rotate-border rounded-2xl p-px">
      <div class="p-10 rounded-2xl bg-transparent">
        <p class="text-white text-center font-semibold mt-8">
          Fondo animado del contenedor padre
        </p>
      </div>
    </div>

<br>

<div
      class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-white to-white dark:from-black via-green-400 dark:to-black animate-rotate-border rounded-2xl p-px"
    >
      <div class="p-10 rounded-2xl dark:bg-zinc-900 bg-zinc-50">
        <p class="text-white text-center font-semibold mt-8">
          Así se ve con un fondo en nuestro contenido
        </p>
      </div>
    </div>

## Ajustando el grosor del borde

Modificando el `padding` podemos controlar el grosor del borde:

```html
<div
  class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-white to-white dark:from-black via-green-400 dark:to-black animate-rotate-border rounded-2xl p-[3px]"
>
  <div class="p-10 rounded-2xl dark:bg-zinc-900 bg-zinc-50">
    <p class="text-white text-center font-semibold">
      Ajustando el padding podemos "aumentar el grosor del borde"
      <br />
      <code>p-[3px]</code>
    </p>
  </div>
</div>
```

<div
  class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-white to-white dark:from-black via-green-400 dark:to-black animate-rotate-border rounded-2xl p-[3px]"
>
  <div class="p-10 rounded-2xl dark:bg-zinc-900 bg-zinc-50">
    <p class="text-white text-center font-semibold mt-8">
      Ajustando el padding podemos "aumentar el grosor del borde"
      <br>
      <code>p-[3px]</code>
    </p>
  </div>
</div>

## Personalizando el degradado

En Tailwind CSS podemos controlar la posición de los colores del degradado:

- `from-*` → color inicial del degradado.
- `via-*` → color intermedio.
- `to-*` → color final del degradado.

También podemos ajustar las posiciones de los colores, por ejemplo:

```html
<div
  class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-white to-white dark:from-black via-green-400 dark:to-black from-30% to-60% animate-rotate-border rounded-2xl p-px"
>
  <div class="p-10 rounded-2xl bg-transparent">
    <p class="text-white text-center font-semibold">
      Ajustando las posiciones de los colores conseguimos un efecto distinto
      <br />
      <code>from-30% to-60%</code>
    </p>
  </div>
</div>
```

<div
  class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-white to-white dark:from-black via-green-400 dark:to-black from-30% to-60% animate-rotate-border rounded-2xl p-px"
>
  <div class="p-10 rounded-2xl bg-transparent">
    <p class="text-white text-center font-semibold mt-8">
      Ajustando las posiciones de los colores conseguimos un efecto distinto
      <br />
      <code>from-30% to-60%</code>
    </p>
  </div>
</div>

## Resultado final

Voy a hacer algunos ajustes pequeños, cambiando los colores de `from` y `to` para lograr un efecto más natural. Además usaré un padding de 1px.

```html
<div
  class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-green-200/20 via-green-400 to-green-200/20 from-30% to-60% animate-rotate-border rounded-2xl p-px"
>
  <div class="p-10 rounded-2xl dark:bg-zinc-900 bg-zinc-50">
    <p class="text-white text-center font-semibold">
      Este es el resultado final
    </p>
  </div>
</div>
```

 <div
      class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-green-200/20 via-green-400 to-green-200/20 from-30% to-60% animate-rotate-border rounded-2xl p-px"
    >
      <div class="p-10 rounded-2xl dark:bg-zinc-900 bg-zinc-50">
        <p class="text-white text-center font-semibold mt-8">
          Este es el resultado final
        </p>
      </div>
    </div>

## Conclusión

Espero que esta guía te haya servido para entender cómo crear un borde animado con Tailwind CSS y que puedas implementarlo en tus proyectos. ¡Experimenta con degradados y animaciones para conseguir efectos únicos! 🎨✨
