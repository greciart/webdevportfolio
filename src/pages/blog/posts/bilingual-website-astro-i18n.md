---
layout: /src/layouts/MarkdownPostLayout.astro
title: "How to Build a Bilingual Website in Astro Without Duplicating It"
author: Grecia V.
description: "Routing, translation files, hreflang and canonical URLs for a two-language Astro site. What worked, and the three things that quietly broke SEO."
image:
  url: "/images/posts/bilingual-website-two-languages-world-map.webp"
  alt: "Close-up of a printed atlas showing two neighbouring regions in different colours, representing one website serving two language audiences."
pubDate: 2026-08-06
tags:
  [
    "Web Development",
    "SEO & Content",
    "Tutorials & Guides"
  ]
languages: ["astro", "javascript"]
---

I translated this site into Spanish a few weeks ago, and the part I expected to be hard, the actual translating, turned out to be the easy half. The hard half was everything around it: which URL each version lives at, how Google is told they are the same page, and the dozen small strings that stay stubbornly in English because they were never in a translation file to begin with.

If you are about to do the same thing to a site you already have indexed, this is the order I would do it in, and the parts I would slow down for.

## Decide the URL shape before you write any code

There are three ways to split a bilingual site, and the decision is very hard to reverse once search engines have crawled you.

| Shape | Example | Trade-off |
|---|---|---|
| **Subdirectory** | `site.com/es/` | One domain, one authority, simplest to host |
| **Subdomain** | `es.site.com` | Clean separation, splits your link authority |
| **Separate domain** | `site.es` | Strongest local signal, most expensive to run |

For a portfolio or a small business site, subdirectories win almost every time. Everything you have already earned on the domain keeps counting for both versions, and a static host serves it without any extra configuration.

The second decision inside that: does the default language get a prefix? I kept English at the root and put Spanish under `/es/`, because every English URL I already had stayed exactly where it was. Moving `site.com/blog/` to `site.com/en/blog/` would have meant redirecting every indexed page on the site to buy myself nothing.

## Astro's i18n config, and what it actually does

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

`prefixDefaultLocale: false` is the line that keeps English at the root. Astro does not translate anything for you here. What this config gives you is the awareness of which locales exist, so helpers and integrations behave consistently.

The routing itself is still just folders. `src/pages/contact.astro` becomes `/contact/`, and `src/pages/es/contact.astro` becomes `/es/contact/`. There is no runtime language detection anywhere, no redirect on first visit, and no cookie. Every page is built once at build time, which means the second language costs your visitor nothing.

## One dictionary, not fifty component edits

Translating by duplicating components is how you end up with two sites that drift apart. Instead every visible string lives in one object, keyed by a dotted name:

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

Then a small helper reads the language straight off the URL, so no state has to be passed anywhere:

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

That `??` matters more than it looks. A key you have not translated yet falls back to English instead of rendering an empty string, so a half-finished translation degrades into readable text rather than a broken page.

Inside a component it reads like this:

```astro
---
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
<span>{t("home.available")}</span>
```

## The trap: strings that were never strings

Here is the one that cost me the most time. This looked fine:

```astro
<span>{t("home.role")}</span> with <span>{t("home.years")}</span>
```

Both variables are translated. The word `with` between them is not, because it was never a variable. On the Spanish page that sentence read *"…desarrolladora frontend with más de 5 años…"*, and I did not notice for days because I was reading the parts I had translated, not the parts I had not.

Go looking for these deliberately. They hide in three places:

* **Joining words** typed directly into markup between two variables
* **`aria-label` and `alt` attributes**, which are invisible until someone uses a screen reader
* **Placeholder and button text** inside forms

When word order changes between languages, concatenation stops working entirely. `"Blender icon"` is `"Icono de Blender"`, so you cannot translate a prefix and paste the variable on the end. Use a placeholder instead:

```ts
"aria.techIcon": "{name} icon",       // en
"aria.techIcon": "Icono de {name}",   // es
```

and fill it in at render time. Two minutes of work, and it removes an entire category of bug.

## Telling Google they are the same page

This is where a bilingual site earns or loses its traffic, and all three of these have to agree with each other.

**hreflang on every page**, pointing at every version of that page including itself:

```html
<link rel="alternate" hreflang="en" href="https://grevaleart.com/contact/" />
<link rel="alternate" hreflang="es" href="https://grevaleart.com/es/contact/" />
<link rel="alternate" hreflang="x-default" href="https://grevaleart.com/contact/" />
```

`x-default` is the version you want shown to somebody whose language you do not serve. It is not optional in practice; without it Google picks for you.

**A canonical that matches the URL the server actually returns.** If your host serves `/contact/` with a trailing slash, the canonical has to have the trailing slash. Mine did not for a while, and the result was a pile of "page with redirect" and "alternate page with proper canonical tag" entries in Search Console: two addresses, one page, and Google unsure which one counted.

**A different title and description per language.** This is the one people skip. If `/` and `/es/` ship the same English `<title>` and meta description, you have handed Google two pages that look identical apart from the body copy, and it will quietly index one and drop the other. Put your page metadata in the translation file with everything else.

## The things that need splitting, not translating

A few pieces of a site are per-language by nature, and treating them as one shared resource creates duplicates.

**RSS feeds.** My first feed used a glob of `./**/*.md`, which reached into the Spanish folder as well and shipped every post twice in one file. Each language needs its own feed, and the `<link rel="alternate">` in the head should point at the feed for the language the reader is currently on.

**`<html lang>` and `og:locale`.** Both have to reflect the actual page. Browsers use `lang` to pick hyphenation and to tell screen readers which pronunciation rules to apply, so a Spanish page marked `lang="en"` gets read aloud with an English accent.

**Dates.** `toLocaleDateString` takes a locale. Pass it the page's language and stop thinking about it.

## Content that only exists in one language

You will not translate everything on day one, and you should not block the launch on it. For case studies I keep two collections with matching slugs, and when a Spanish entry does not exist yet the English one is served in its place. Visitors get the real content instead of a 404, and the day I write the translation it appears with no other change.

The one thing to be careful about: a fallback page is not a translation, so it should not claim to be one. If `/es/portfolio/projects/some-slug/` is really the English text, it needs a canonical pointing at the English URL rather than an hreflang pair implying two distinct versions exist.

## What I would check before calling it done

Open both versions side by side and read them as a visitor, not as the person who wrote them. Then check the machine-readable half:

* View source on three pages per language and confirm hreflang, canonical and `<html lang>` all agree
* Search your own repo for stray English inside the Spanish tree, especially in `aria-label`
* Fetch both RSS feeds and confirm each contains only its own posts
* Submit the sitemap and watch Search Console for a couple of weeks

The last one is not optional. Almost every mistake in this article is invisible in a browser and obvious in a crawl report, which is a frustrating combination until you get used to reading it.
