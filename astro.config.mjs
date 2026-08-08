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
  
  // Añade esta sección para eliminar el bloqueo de renderizado
  build: {
    inlineStylesheets: 'always', 
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