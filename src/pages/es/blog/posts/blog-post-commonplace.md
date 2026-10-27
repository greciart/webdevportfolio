---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Commonplace book digital: mi tracker gratis y open source para libros, juegos y notas"
author: Grecia V.
description: "Una plantilla de commonplace book digital, gratis y open source, para registrar libros, juegos, series y estudios en archivos JSON. Estética retro vaporwave, sin frameworks, lista para Neocities o Nekoweb."
image:
  url: "/images/posts/digital-commonplace-book-library-book-reviews.webp"
  alt: "Pestaña de biblioteca de un commonplace book digital con interfaz retro vaporwave, mostrando una cuadrícula de portadas de libros leídos con estrellas, género, año y páginas."
pubDate: 2026-05-07
tags:
  [
    "Creative Coding",
    "Web Development",
    "Tutorials & Guides"
  ]
languages: ["html", "css", "javascript", "nodejs"]
---

Se me olvida constantemente que estaba leyendo algo, viendo algo o incluso jugando algo. O encuentro algo que quiero guardar para después, lo anoto *en alguna parte*, y cuando lo quiero recuperar ya no recuerdo en qué app, documento o carpeta lo había puesto.

Así terminé construyendo mi propio **commonplace book digital** (no encontré una traducción oficial, yo le digo cuaderno de bitácora): un tracker de lecturas y contenido que vive en mi web personal, funciona con archivos JSON y es totalmente open source para que tú también lo uses.

- **Demo en vivo:** [starmoon.nekoweb.org/commonplace_book.html](https://starmoon.nekoweb.org/commonplace_book.html)
- **Código fuente:** [github.com/GVPV12/commonplacebook](https://github.com/GVPV12/commonplacebook)
- **Substack:** [la historia completa en mi Substack](https://greciart.substack.com/p/digital-commonplace-book-tracker)

---

## ¿Qué es un commonplace book?

Es un concepto que me encanta desde hace mucho. Antes de que existiera internet, la gente llevaba cuadernos escritos a mano donde copiaba citas, poemas, ideas y observaciones: cosas que valía la pena recordar. Un archivo personal de todo lo que les movía algo por dentro, para poder volver a consultarlo.

Yo quería uno. Pero digital, y mío en todos los sentidos de la palabra. No una página de Notion, no una app de hábitos, no un dashboard corporativo. Algo que pareciera parte de mi pequeño rincón de internet.

![Tracklist de un commonplace book digital: una tabla con los libros, juegos, series, manga y música en curso, con etiquetas de estado y barras de progreso](/images/posts/digital-commonplace-book-reading-tracker.webp)

## Qué registra mi commonplace book digital

[**STARMOON Commonplace Book**](https://starmoon.nekoweb.org/commonplace_book.html) es una aplicación web de una sola página: sin frameworks, sin bases de datos, sin cuentas. Está diseñada como un sistema operativo retro con paleta vaporwave, cian y magenta sobre casi negro, tipografías de píxeles y líneas de escaneo.

Tiene nueve pestañas:

- **Tracklist**: todo lo que estoy leyendo, jugando, viendo o escuchando ahora mismo, con barras de progreso y etiquetas de estado
- **Recent Books**: se obtiene automáticamente de mi cuenta de Goodreads vía RSS, extrayendo la valoración y buscando la sinopsis en OpenLibrary
- **Biblioteca**: cada libro que terminé, con una vista de reseña que se abre como un pliego de dos páginas: portada, cuadrícula de valoración y resumen a la izquierda; citas y reflexiones a la derecha
- **Writings**: mis poemas y reflexiones
- **Microblogs**: entradas cortas de diario con una barra de ánimo y estadísticas de actividad, como un registro diario
- **Short Thoughts**: estados traídos de [status.cafe](https://status.cafe), mi plataforma social lo-fi favorita
- **Songs**: canciones que amo, con traducciones y significado
- **Study Log**: un seguimiento de mis sesiones de estudio de japonés con valoraciones, notas y una galería de imágenes
- **日本語**: el registro de estudio filtrado solo a japonés, con barras de progreso

O sea, es mitad commonplace book, mitad tracker personal y mitad pequeña base de datos visual. (Sí, son tres mitades. Así es el TDAH.)

---

## Por qué archivos JSON y no una app

Estoy cansada de las apps tipo tracker que dependen de una cuenta, de una conexión o de guardar tus datos en servidores ajenos. No quiero que todo lo que registro sobre mis libros, videojuegos y estudios viva en una plataforma que puede cambiar sus condiciones, desaparecer algún día o robarte los datos en secreto.

Como paso mucho más tiempo en la PC que en el celular, elegí lo más sencillo que me funciona: **cada sección lee de un archivo `.json`**. ¿Quiero saber qué estoy leyendo o estudiando? Abro el archivo. No necesito una app específica, ni internet para mantenerlo organizado. Puedes publicarlo en un hosting o tenerlo totalmente en local.

Los archivos son míos. Puedo leerlos en un editor de texto, respaldarlos y llevármelos a donde quiera. Si algún día dejo Nekoweb, simplemente muevo los archivos.

![Tabla del README del commonplace book que relaciona cada pestaña, como Tracklist, Biblioteca, Songs y Study Log, con el archivo JSON o el servicio del que salen sus datos](/images/posts/digital-commonplace-book-json-data-files.webp)

 (Con la misma regla hice [FOCUS TIME](/es/blog/posts/focus-time-gamified-adhd-productivity-app/) y [STARPLAYER](/es/blog/posts/starplayer-ad-free-music-player-desktop/): tus datos son tuyos.)

## Goodreads, status.cafe y Backloggd: traer datos automáticamente

Parte del contenido viene de servicios que ya uso. Un par de scripts de Node.js que corro en local traen mis reseñas y lecturas recientes de Goodreads y mis estados de status.cafe, y los convierten en JSON que la página puede leer. El flujo es:

**Goodreads / status.cafe → script → JSON → Commonplace Book**

Así los datos quedan separados de la presentación. A la página no le importa de dónde vino la información; solo lee el JSON y la muestra.

Hay una integración que intenté y que **todavía no funciona: Backloggd**. La idea era hacer lo mismo que con Goodreads y generar un JSON de mis juegos, pero no logré que funcionara bien. Si conoces Backloggd y quieres intentar un generador para el proyecto, te lo agradecería un montón. Esa es justamente una de las razones por las que es open source: no tengo que construirlo todo yo sola.

---

## Por qué sin framework

Construyo sobre [Nekoweb](https://nekoweb.org), que solo sirve archivos estáticos. Esa restricción resultó ser una ventaja: me obligó a pensar con cuidado qué tenía que hacer cada pieza de información y a mantenerlo todo simple. (Si vas a empezar tu propio sitio en Nekoweb o Neocities, mi [plantilla de blog Aqua Frutiger Aero](/es/shop/freebies/) es gratis y está hecha justo para eso.)

El proyecto entero es un archivo HTML, un puñado de archivos JSON y esos scripts. Carga desde cero en menos de dos segundos con la caché tibia. No necesitas una arquitectura gigantesca para hacer una página personal, y puedes abrir el código y entender qué está pasando, que es gran parte de por qué amo la web retro.

## El diseño

La estética vaporwave no fue solo una decisión de estilo: refleja cómo me siento respecto a la web. La internet antigua tenía personalidad. Cada sitio se parecía a la persona que lo hizo. Yo quería eso.

La ventana de reseña de Biblioteca se abre como un "libro": dos columnas maquetadas como páginas enfrentadas, con líneas rayadas y un interruptor de modo claro y oscuro. El registro de estudio se abre igual. La tracklist es una tabla de datos completa con columnas para estado, progreso y un texto gancho, y en monitores de más de 1440px aparecen columnas extra. Es responsivo entre laptop y monitor, con CSS propio para tamaños de fuente, columnas y maquetado.

![Detalle de una sesión de estudio en un commonplace book digital, abierta como un pliego de dos páginas con el tema de gramática japonesa, el recurso, las valoraciones, el resumen y las imágenes adjuntas](/images/posts/digital-commonplace-book-study-log-japanese.webp)

![Página de registro de estudio de un commonplace book digital con una barra lateral neón cian, que lista sesiones recientes de japonés sobre gramática y kanji con fechas, recursos e imágenes adjuntas](/images/posts/digital-commonplace-book-study-log-sessions.webp)

---

## Cómo usarlo en Neocities, Nekoweb o cualquier hosting estático

Si ya trabajaste un poco con archivos web, se configura rápido:

1. Clona o descarga el repositorio desde [GitHub](https://github.com/GVPV12/commonplacebook)
2. Reemplaza mis datos en los archivos JSON por los tuyos (el README documenta cada campo, qué es obligatorio y qué es opcional)
3. Cambia tu ID de usuario de Goodreads (una línea en el script) y tu usuario de status.cafe (una línea en el generador), corre los scripts en local y sube el JSON que generan
4. Cambia las variables de color del CSS si quieres otra paleta
5. Sube todo a Neocities, Nekoweb, GitHub Pages o cualquier hosting que sirva HTML, CSS, JavaScript y JSON

Sin paso de build, sin `npm install` para la página, sin archivo de configuración.

## ¿Y si no sabes programar?

Para lo básico, sí puedes usarlo. Sé que un repositorio de GitHub lleno de archivos `.html`, `.css`, `.js` y `.json` asusta si nunca tocaste código, pero no necesitas entenderlo todo.

Lo importante es encontrar qué archivo JSON tiene la información que quieres cambiar. Después es simplemente: **editas el `.json` → guardas → subes el archivo**. Casi siempre estás cambiando texto dentro de una estructura que ya existe.

Si quieres rediseñarlo por completo, crear páginas nuevas o conectar otros servicios, ahí sí vas a necesitar HTML, CSS y JavaScript. Pero para usarlo como tracker personal no tienes que convertirte en desarrolladora web.

## ¿Es mejor que Notion?

¿Honestamente? No necesariamente. Simplemente funciona mejor para cómo organizo *yo* las cosas. Me gusta tener mis propios archivos, abrirlos directamente, ver mis datos de forma visual y saber que puedo cambiar el código cuando quiera.

Y creo que eso es lo que más le hace falta a internet: webs propias, como antes, que reflejen el alma de quien las hizo, en lugar de que todos vivamos dentro de una red corporativa gigantesca porque es gratis, y a cambio terminemos dando todo lo demás.

---

## Qué sigue

El commonplace book es una pieza de un sistema más grande. Estoy trabajando en una app de React llamada **Dopamint**, una capa de gamificación para todos mis proyectos, con un tamagotchi que se muere si no estoy activa. El plan es que Dopamint y el commonplace book compartan datos mediante URLs raw de GitHub, para que ambas lean de los mismos archivos JSON.

Voy a seguir sumando secciones e integraciones cuando las necesite, y arreglar Backloggd está arriba en la lista. Pero no quiero que se vuelva una app enorme. Parte de su encanto es que sigue siendo simple, fácil de editar y fácil de alojar.

Si te interesa tener un commonplace book digital, self-hosted y open source, úsalo, hazle un fork o simplemente llévate ideas de cómo está construido.

---

*Hecho con HTML, CSS, JS y demasiado cian. Código en [GitHub](https://github.com/GVPV12/commonplacebook). En vivo en [starmoon.nekoweb.org](https://starmoon.nekoweb.org/commonplace_book.html). Más proyectos open source en mis [proyectos personales](/es/side-projects/).*
