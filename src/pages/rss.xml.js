import rss, { pagesGlobToRssItems } from '@astrojs/rss';

// English feed. The glob used to be './**/*.md', which reached into
// src/pages/es/ as well and shipped every post twice in one feed. Each language
// gets its own feed now; the Spanish one lives at src/pages/es/rss.xml.js.
export async function GET(context) {
  return rss({
    title: 'Web Design and Development Blog | Grecia V.',
    description: 'Notes on frontend development, web design and the tools I actually use day to day, written up as I go.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./blog/posts/*.md')),
    customData: `<language>en</language>`,
  });
}
