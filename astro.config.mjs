// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon";
import mdx from '@astrojs/mdx';
import { readFileSync, readdirSync } from "node:fs";

// Fecha de cada post para el <lastmod> del sitemap. Sin lastmod Google no tiene
// forma de saber que algo cambio y recrawlea "cuando le toca"; con el, los posts
// que se actualizan (poniendo `updatedDate:` en el frontmatter) vuelven a la cola
// antes. Si no hay updatedDate se usa pubDate.
const postDates = new Map();
for (const [dir, prefix] of [
  ["src/pages/blog/posts/", "/blog/posts/"],
  ["src/pages/es/blog/posts/", "/es/blog/posts/"],
]) {
  for (const file of readdirSync(new URL(`./${dir}`, import.meta.url))) {
    if (!file.endsWith(".md")) continue;
    const src = readFileSync(new URL(`./${dir}${file}`, import.meta.url), "utf8");
    const pick = (key) =>
      src.match(new RegExp(`^${key}:\\s*["']?(\\d{4}-\\d{2}-\\d{2})`, "m"))?.[1];
    const date = pick("updatedDate") ?? pick("pubDate");
    if (date) postDates.set(`${prefix}${file.replace(/\.md$/, "")}/`, date);
  }
}

// https://astro.build/config
export default defineConfig({
  site: "https://grevaleart.com",

  // Every page has exactly one address, and it ends in a slash. Astro builds to
  // directories, so `/packages` only ever existed as a 301 to `/packages/`;
  // with this set, a link written without the slash is a build error instead of
  // a redirect Google has to follow and file under "page with redirect".
  trailingSlash: "always",

  // English stays at the root so no existing URL changes; Spanish lives under
  // /es/. Everything is generated at build time, so translation costs the
  // visitor nothing at runtime.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: false },
  },

  integrations: [preact(), icon(), mdx(),sitemap({
    // Tag and tech listings are thin index pages, and a 404 has no business
    // being submitted for indexing at all.
    filter: (page) =>
      !page.includes("/blog/tags") &&
      !page.includes("/blog/techs") &&
      !page.includes("/404"),
    serialize(item) {
      const date = postDates.get(new URL(item.url).pathname);
      if (date) item.lastmod = new Date(date).toISOString();
      return item;
    },
  }),],
  
  // The stylesheet is ~130 KB. Inlined into every page it was re-downloaded on
  // every single navigation and pushed each HTML file past 350 KB, which is
  // what "HTML is large" and the long parse task on mobile were both about.
  // As one hashed file it is fetched once and then served from cache for the
  // rest of the visit. Astro still inlines anything small enough to be worth it.
  build: {
    inlineStylesheets: 'auto',
  },

  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
  },
});