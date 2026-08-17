// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon";
import mdx from '@astrojs/mdx';

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