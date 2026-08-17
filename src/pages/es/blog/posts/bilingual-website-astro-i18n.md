---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Cómo hacer un sitio bilingüe en Astro sin duplicarlo"
author: Grecia V.
description: "Rutas, archivos de traducción, hreflang y URLs canónicas para un sitio en dos idiomas con Astro. Lo que funcionó y las tres cosas que rompieron el SEO en silencio."
image:
  url: "/images/posts/bilingual-website-two-languages-world-map.webp"
  alt: "Primer plano de un atlas impreso con dos regiones vecinas en colores distintos, como imagen de un mismo sitio web que atiende a dos idiomas."
pubDate: 2026-08-06
tags:
  [
    "Web Development",
    "SEO & Content",
    "Tutorials & Guides"
  ]
languages: ["astro", "javascript"]
---

Traduje este sitio al español hace unas semanas, y la parte que esperaba difícil, traducir de verdad, resultó ser la mitad fácil. La difícil fue todo lo que la rodea: en qué URL vive cada versión, cómo se le dice a Google que son la misma página, y la docena de textos pequeños que se quedan tercamente en inglés porque nunca estuvieron en un archivo de traducción.

Si estás por hacerle esto a un sitio que ya está indexado, este es el orden en el que yo lo haría, y las partes en las que iría despacio.

## Decide la forma de las URLs antes de escribir código

Hay tres maneras de partir un sitio bilingüe, y la decisión es muy difícil de revertir una vez que los buscadores te rastrearon.

| Forma | Ejemplo | Costo |
|---|---|---|
| **Subcarpeta** | `sitio.com/es/` | Un dominio, una autoridad, lo más simple de alojar |
| **Subdominio** | `es.sitio.com` | Separación limpia, divide la autoridad de tus enlaces |
| **Dominio aparte** | `sitio.es` | La señal local más fuerte, la más cara de mantener |

Para un portafolio o un sitio de negocio pequeño, la subcarpeta gana casi siempre. Todo lo que ya te ganaste en el dominio sigue contando para las dos versiones, y un hosting estático lo sirve sin configuración extra.

La segunda decisión dentro de esa: ¿el idioma por defecto lleva prefijo? Yo dejé el inglés en la raíz y puse el español en `/es/`, porque así cada URL en inglés que ya tenía se quedó exactamente donde estaba. Mover `sitio.com/blog/` a `sitio.com/en/blog/` habría significado redirigir todas las páginas indexadas del sitio para no ganar nada.

## La configuración i18n de Astro, y qué hace en realidad

```js
// astro.config.mjs
export default defineConfig({
  site: "https://grevaleart.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: false },
  },
});
```

`prefixDefaultLocale: false` es la línea que mantiene el inglés en la raíz. Astro no traduce nada por ti aquí. Lo que te da esta configuración es saber qué idiomas existen, para que los helpers y las integraciones se comporten de forma consistente.

El enrutado en sí siguen siendo carpetas. `src/pages/contact.astro` se convierte en `/contact/`, y `src/pages/es/contact.astro` en `/es/contact/`. No hay detección de idioma en tiempo de ejecución, ni redirección en la primera visita, ni cookie. Cada página se compila una vez en el build, así que el segundo idioma no le cuesta nada a quien te visita.

## Un diccionario, no cincuenta ediciones de componentes

Traducir duplicando componentes es la forma de terminar con dos sitios que se van separando entre sí. En vez de eso, cada texto visible vive en un solo objeto, con nombres por espacios:

```ts
// src/i18n/ui.ts
export const ui = {
  en: {
    "nav.blog": "Blog",
    "home.available": "Available for work",
  },
  es: {
    "nav.blog": "Blog",
    "home.available": "Disponible para trabajar",
  },
} as const;
```

Después un helper pequeño lee el idioma directo de la URL, así no hay que pasar estado a ningún lado:

```ts
export function getLangFromUrl(url: URL) {
  const [, first] = url.pathname.split("/");
  if (first in languages) return first;
  return defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
```

Ese `??` importa más de lo que parece. Una clave que todavía no tradujiste cae de vuelta al inglés en lugar de imprimir una cadena vacía, así que una traducción a medias se degrada a texto legible y no a una página rota.

Dentro de un componente se lee así:

```astro
---
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
<span>{t("home.available")}</span>
```

## La trampa: textos que nunca fueron textos

Esta es la que más tiempo me costó. Esto se veía bien:

```astro
<span>{t("home.role")}</span> with <span>{t("home.years")}</span>
```

Las dos variables están traducidas. La palabra `with` que hay en medio no, porque nunca fue una variable. En la página en español esa frase decía *"…desarrolladora frontend with más de 5 años…"*, y no me di cuenta en días porque estaba leyendo las partes que sí había traducido, no las que no.

Sal a buscarlas a propósito. Se esconden en tres sitios:

* **Palabras de unión** escritas directo en el marcado entre dos variables
* **Atributos `aria-label` y `alt`**, que son invisibles hasta que alguien usa un lector de pantalla
* **Textos de placeholder y de botón** dentro de formularios

Cuando el orden de las palabras cambia entre idiomas, concatenar deja de funcionar del todo. `"Blender icon"` es `"Icono de Blender"`, así que no puedes traducir un prefijo y pegarle la variable al final. Usa un marcador:

```ts
"aria.techIcon": "{name} icon",       // en
"aria.techIcon": "Icono de {name}",   // es
```

y rellénalo al renderizar. Dos minutos de trabajo, y te quita una categoría entera de errores.

## Decirle a Google que son la misma página

Aquí es donde un sitio bilingüe se gana o se pierde su tráfico, y las tres cosas tienen que coincidir entre sí.

**hreflang en cada página**, apuntando a todas las versiones de esa página, incluida ella misma:

```html
<link rel="alternate" hreflang="en" href="https://grevaleart.com/contact/" />
<link rel="alternate" hreflang="es" href="https://grevaleart.com/es/contact/" />
<link rel="alternate" hreflang="x-default" href="https://grevaleart.com/contact/" />
```

`x-default` es la versión que quieres mostrarle a alguien cuyo idioma no atiendes. En la práctica no es opcional; sin ella, Google elige por ti.

**Una canónica que coincida con la URL que el servidor devuelve de verdad.** Si tu hosting sirve `/contact/` con barra final, la canónica tiene que llevar la barra final. La mía no la llevaba durante un tiempo, y el resultado fue un montón de entradas de "página con redirección" y "página alternativa con etiqueta canónica adecuada" en Search Console: dos direcciones, una página, y Google sin saber cuál contaba.

**Un título y una descripción distintos por idioma.** Esta es la que se salta todo el mundo. Si `/` y `/es/` mandan el mismo `<title>` y la misma meta descripción en inglés, le acabas de dar a Google dos páginas que se ven idénticas salvo por el cuerpo del texto, y va a indexar una y descartar la otra en silencio. Pon los metadatos de página en el archivo de traducción con todo lo demás.

## Lo que hay que separar, no traducir

Algunas piezas de un sitio son por idioma por naturaleza, y tratarlas como un recurso compartido crea duplicados.

**Los feeds RSS.** Mi primer feed usaba un glob `./**/*.md`, que se metía también en la carpeta en español y mandaba cada artículo dos veces en el mismo archivo. Cada idioma necesita su feed, y el `<link rel="alternate">` del head debe apuntar al feed del idioma en el que está la persona.

**`<html lang>` y `og:locale`.** Los dos tienen que reflejar la página real. Los navegadores usan `lang` para elegir la partición de palabras y para decirle al lector de pantalla qué reglas de pronunciación aplicar, así que una página en español marcada como `lang="en"` se lee en voz alta con acento inglés.

**Las fechas.** `toLocaleDateString` recibe un locale. Pásale el idioma de la página y deja de pensar en ello.

## Contenido que solo existe en un idioma

No vas a traducir todo el primer día, y no deberías bloquear el lanzamiento por eso. Para los casos de estudio mantengo dos colecciones con los mismos slugs, y cuando una entrada en español todavía no existe se sirve la inglesa en su lugar. Quien visita recibe contenido real en vez de un 404, y el día que escriba la traducción aparece sin ningún otro cambio.

La única cosa con la que hay que tener cuidado: una página de respaldo no es una traducción, así que no debería decir que lo es. Si `/es/portfolio/projects/algun-slug/` es en realidad el texto en inglés, necesita una canónica apuntando a la URL en inglés en vez de un par de hreflang dando a entender que existen dos versiones distintas.

## Lo que revisaría antes de darlo por terminado

Abre las dos versiones lado a lado y léelas como visitante, no como quien las escribió. Después revisa la mitad que leen las máquinas:

* Mira el código fuente de tres páginas por idioma y confirma que hreflang, canónica y `<html lang>` coinciden
* Busca inglés perdido dentro del árbol en español, sobre todo en `aria-label`
* Descarga los dos feeds RSS y confirma que cada uno trae solo sus artículos
* Manda el sitemap y observa Search Console un par de semanas

Lo último no es opcional. Casi todos los errores de este artículo son invisibles en el navegador y evidentes en un informe de rastreo, que es una combinación frustrante hasta que te acostumbras a leerlo.
