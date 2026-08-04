---
layout: /src/layouts/MarkdownPostLayout.astro
title: Construí un commonplace book digital y es totalmente open source
author: Grecia V.
description: "Un proyecto de commonplace book digital de código abierto. Construido con HTML, CSS y JavaScript, con estética retro vaporwave, datos en JSON y un flujo de trabajo pensado para sitios estáticos."
image:
  url: "/images/posts/commonplacebook.webp"
  alt: "Captura de la interfaz de una aplicación web de commonplace book digital de inspiración vaporwave, con estética de sistema operativo retro y detalles de pixel art."
pubDate: 2026-05-07
tags:
  [
    "Creative Coding",
    "Web Development"
  ]
languages: ["html", "css", "javascript"]
---

Hay un concepto que me encanta desde hace mucho: el **commonplace book**. Antes de que existiera internet, la gente llevaba cuadernos escritos a mano donde copiaba citas, poemas, ideas, observaciones: cosas que valía la pena recordar. Un archivo personal de todo lo que les movía algo por dentro.

Yo quería uno. Pero digital, y mío en todos los sentidos de la palabra.

---

![Registro de estudio del commonplace book digital para mantener la motivación](/images/posts/studylog.webp)

## Qué construí

[**STARMOON Commonplace Book**](https://starmoon.nekoweb.org/commonplace_book.html) es una aplicación web de una sola página, sin frameworks, sin bases de datos, sin cuentas, que vive en mi sitio personal. Está diseñada como un sistema operativo retro con paleta vaporwave: cian y magenta sobre casi negro, tipografías de píxeles y efectos de líneas de escaneo.

Tiene nueve pestañas:

- **Tracklist**: todo lo que estoy leyendo, jugando, viendo o escuchando ahora mismo, con barras de progreso y etiquetas de estado
- **Recent Books**: se obtiene automáticamente de mi cuenta de Goodreads vía RSS, extrayendo la valoración y buscando la sinopsis en OpenLibrary
- **Biblioteca**: cada libro que he terminado, con una interfaz de reseña completa que se abre como un pliego de dos páginas: portada, cuadrícula de valoración y resumen a la izquierda; citas y reflexiones a la derecha
- **Writings**: mis poemas y reflexiones
- **Microblogs**: entradas cortas de diario con una barra de ánimo y estadísticas de actividad, como un registro diario
- **Short Thoughts**: estados traídos de [status.cafe](https://status.cafe), mi plataforma social lo-fi favorita
- **Songs**: canciones que amo, con traducciones y significado
- **Study Log**: un seguimiento de mis sesiones de estudio de japonés con valoraciones, notas y una galería de imágenes
- **日本語**: el registro de estudio filtrado solo a japonés, con barras de progreso

Todo se alimenta de archivos JSON que edito en local y subo a mi sitio. Sin CMS, sin panel de administración. Solo archivos de texto.

---

## Por qué sin framework

Construyo sobre [Nekoweb](https://nekoweb.org), que solo sirve archivos estáticos. Esa restricción resultó ser una ventaja: me obligó a pensar con cuidado qué tenía que hacer cada pieza de información y a mantenerlo todo simple.

El proyecto entero es un archivo HTML, un puñado de archivos JSON y un par de scripts de Node.js que ejecuto en local para extraer datos de Goodreads y status.cafe antes de desplegar. El commonplace book completo carga desde cero en menos de dos segundos con la caché tibia.

También hay algo que se siente bien en ser dueña del formato. Los archivos JSON son míos. Puedo leerlos en un editor de texto. Puedo respaldarlos. Puedo llevármelos a donde quiera.

---

## El diseño

La estética vaporwave no fue solo una decisión de estilo: refleja cómo me siento respecto a la web. La internet antigua tenía personalidad. Cada sitio se parecía a la persona que lo hizo. Yo quería eso.

La ventana de reseña de Biblioteca se abre como un "libro": dos columnas maquetadas como páginas enfrentadas, con fondos de líneas rayadas y un interruptor de modo claro y oscuro. El registro de estudio se abre igual. La tracklist es una tabla de datos completa con columnas para estado, progreso y un texto gancho. En monitores más anchos de 1440px aparecen columnas adicionales.

Todo es responsivo entre tamaños de laptop y monitor, con CSS propio manejando las diferencias de tamaño de fuente, columnas de la cuadrícula y maquetado.

---

![Diseño de interfaz de la biblioteca digital del commonplace book, para tener todos los libros que lees en un solo lugar](/images/posts/library.webp)

## Es de código abierto

El código completo está en GitHub: **[github.com/gvpv12/commonplacebook](https://github.com/GVPV12/commonplacebook)**

El README documenta cada campo del JSON, con ejemplos y tablas que explican qué es obligatorio y qué es opcional. La idea era ponérselo fácil a quien quiera hacer un fork y reemplazar mis datos por los suyos.

Para adaptarlo a tu propio sitio necesitas:

1. Cambiar tu ID de usuario de Goodreads (una línea en el script)
2. Cambiar tu nombre de usuario de status.cafe (una línea en el generador)
3. Reemplazar los archivos JSON con tus propios datos
4. Actualizar las variables de color del CSS si quieres otra paleta

Eso es todo. Sin paso de build, sin `npm install`, sin archivo de configuración.

---

## Qué sigue

El commonplace book es una pieza de un sistema más grande que estoy construyendo. Estoy trabajando en una aplicación de React llamada **Dopamint**, una capa de gamificación para todos mis proyectos, con un tamagotchi que se muere si no estoy activa. El plan es compartir datos entre Dopamint y el commonplace book mediante URLs raw de GitHub, para que ambas apps lean de los mismos archivos JSON.

Por ahora, el commonplace book está terminado y se siente exactamente como lo quería: un espacio tranquilo y personal en la web que se parece a mí y guarda las cosas que me importan.

---

*Hecho con HTML, CSS, JS y demasiado cian. Código en [GitHub](https://github.com/GVPV12/commonplacebook). En vivo en [starmoon.nekoweb.org](https://starmoon.nekoweb.org/commonplace_book.html).*
