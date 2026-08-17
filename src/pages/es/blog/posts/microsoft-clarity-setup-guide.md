---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Microsoft Clarity: mapas de calor y grabaciones gratis, instalados bien"
author: Grecia V.
description: "Cómo añadir Microsoft Clarity a un sitio sin dañar tu puntuación de PageSpeed, qué te dicen de verdad sus mapas de calor y grabaciones, y qué ajustes de privacidad revisar antes."
image:
  url: "/images/posts/microsoft-clarity-website-analytics-heatmaps.webp"
  alt: "Un portátil y un teléfono sobre un escritorio oscuro, con el teléfono mostrando un panel de tráfico web con gráficos de visitas, como imagen de la analítica de comportamiento."
pubDate: 2026-08-16
tags:
  [
    "Web Design & UX",
    "SEO & Content",
    "Tutorials & Guides"
  ]
languages: ["javascript", "html"]
---

La analítica te dice que cuatrocientas personas abrieron tu página de precios y dos te escribieron. No te dice que las otras trescientas noventa y ocho bajaron hasta el segundo plan, dudaron, y se fueron.

Esa segunda cosa es para lo que sirven las herramientas de comportamiento, y Microsoft Clarity la hace gratis. No gratis con plan limitado. Tráfico ilimitado, sin muestreo, sin tarjeta.

Lo instalé en este sitio la semana pasada. Aquí va la configuración, las partes que sirven de verdad, y lo que revisaría antes de activarlo en el sitio de un cliente.

## Qué te da

**Mapas de calor** de clics y de profundidad de scroll, por página. El de scroll es el que más uso: muestra el porcentaje de gente que sigue en la página en cada punto hacia abajo, así que ves exactamente dónde deja de retener la atención.

**Grabaciones de sesión.** Una repetición anonimizada de una visita real: recorrido del cursor, scroll, clics, cambios de página. Ver cinco de estas te enseña más sobre tu navegación que una semana de suponer.

**Señales automáticas de frustración**, que es la parte que no esperaba que me gustara y ahora reviso primero:

* **Clics de rabia** — clics repetidos en el mismo punto, casi siempre porque algo parece interactivo y no lo es
* **Clics muertos** — un clic que no produce ninguna respuesta
* **Scroll excesivo** — buscar algo que debería haber sido fácil de encontrar
* **Vueltas rápidas** — llegar a una página y volver atrás de inmediato, la señal más clara que existe de "esto no era lo que me prometieron"

Puedes filtrar las grabaciones por cualquiera de esas, lo que convierte horas de material en una lista corta de sesiones donde algo salió mal de verdad.

## Instalarlo sin frenar la página

El fragmento que te da Clarity se ve así:

```html
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "TU_ID_DE_PROYECTO");
</script>
```

Lo pegas en el `<head>` y funciona. También empieza a descargar un script de terceros mientras el navegador todavía intenta renderizar tu página, y el `async` no te salva aquí: la petición se encola de inmediato y compite por ancho de banda con tu propio contenido.

Nada de una etiqueta de analítica hace falta para que la página se dibuje, así que no debería pedir nada hasta que la página esté dibujada. Envuélvelo en un listener de `load`:

```html
<script is:inline>
  window.addEventListener("load", function () {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "TU_ID_DE_PROYECTO");
  });
</script>
```

Una línea más, y la etiqueta ahora carga después de tu contenido en lugar de junto a él. Tu Largest Contentful Paint ni se entera de que existe.

Lo de `c[a].q` en el original es una cola de comandos, así que cualquier cosa que llames antes de que llegue el script se guarda y se reproduce cuando llega. Eso sigue funcionando dentro del listener de `load`, que es la razón por la que envolverlo así es seguro y no un truco.

Si estás en Astro, `is:inline` es obligatorio. Sin eso Astro intenta procesar y empaquetar el script, y este necesita quedarse exactamente como está escrito.

## Revisa los ajustes de privacidad antes de mandarle tráfico

Clarity enmascara el contenido de texto por defecto, que es el valor correcto y no uno que convenga dar por hecho.

Ve a **Configuración → Enmascaramiento** y confirma el nivel. Hay tres:

| Nivel | Qué se graba |
|---|---|
| **Estricto** | Todo el texto enmascarado |
| **Equilibrado** | El valor por defecto. Enmascara campos de formulario y lo marcado como sensible |
| **Relajado** | Texto visible en las grabaciones |

Equilibrado está bien para la mayoría de los sitios. Relajado es una decisión que se toma a conciencia y probablemente no en nada que tenga inicio de sesión o pasarela de pago.

Para cualquier cosa que quieras enmascarada sin importar el nivel, márcala en el marcado:

```html
<div data-clarity-mask="true">Contenido sensible</div>
```

Dos cosas más que conviene hacer desde el primer día:

**Dilo.** Una línea en tu política de privacidad nombrando a Microsoft Clarity y qué recoge. Si operas en la Unión Europea o en el Reino Unido, esto es una cookie que requiere consentimiento, y la implementación honesta es cargar la etiqueta solo después de que la persona acepte, no mencionarla en una política que nadie abre.

**Pregúntate si de verdad necesitas grabaciones.** En un portafolio, los mapas de calor y las señales de frustración hacen casi todo el trabajo. Grabar sesiones completas en un sitio con formulario de contacto es un compromiso de privacidad más pesado que un mapa de scroll, y deberías poder explicar por qué lo asumiste.

## Qué miraría primero

Datos sin una pregunta detrás son solo un panel que visitas una vez. Unas cuantas que suelen dar fruto:

**¿Dónde pierde gente tu página más larga?** Abre el mapa de calor de scroll de esa página. Si la mitad de tus visitantes nunca llega a la sección que tú consideras el punto de la página, el arreglo es estructural, no un párrafo más largo.

**¿Hay algo recibiendo clics de rabia?** Casi siempre es algo que parece un botón y no lo es: una tarjeta con estilos, un titular en negrita, una imagen con borde. Barato de arreglar, y es una persona diciéndote exactamente qué esperaba.

**¿Qué hace la gente justo antes de irse?** Filtra grabaciones por vueltas rápidas en tu página de entrada con más tráfico. Si la respuesta es "leyó dos líneas y se fue", tu meta descripción está prometiendo algo con lo que la página no abre.

**¿El móvil se comporta como el escritorio?** Filtra por dispositivo y compara el mismo mapa de calor. Mis propios maquetados no se han comportado ni una sola vez como yo suponía en un teléfono.

## Lo que no te va a decir

Clarity es una herramienta de comportamiento, no una suite de analítica. No hace atribución, ni ingresos, ni embudos entre sesiones. Sí se conecta con Google Analytics, y vale la pena emparejarlos si ya usas GA: GA te dice qué página tiene un problema, Clarity te enseña cuál es el problema.

Y no te va a decir *por qué*. Una grabación te muestra a una persona dudando ante tu tabla de precios. Si dudó porque los planes confunden, o porque el precio está mal, o porque estaba almorzando, sigue siendo un juicio tuyo. La herramienta acota dónde mirar. No mira por ti.

## La razón honesta para instalarlo hoy

Es gratis, toma diez minutos, y los datos de comportamiento solo sirven mirando hacia atrás. El mapa de calor que quieres es el de los tres meses anteriores a que rediseñaras algo, y no puedes volver a recogerlo.

Ponlo ahora, déjalo tranquilo, y ten datos reales la próxima vez que estés a punto de cambiar una página por una corazonada.
