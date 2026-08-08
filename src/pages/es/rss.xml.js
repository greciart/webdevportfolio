import rss, { pagesGlobToRssItems } from '@astrojs/rss';

// Spanish feed. Mirrors src/pages/rss.xml.js; the glob is relative to this
// file, so it only picks up the posts under src/pages/es/blog/posts/.
export async function GET(context) {
  return rss({
    title: 'Blog de diseño y desarrollo web | Grecia V.',
    description: 'Apuntes sobre desarrollo frontend, diseño web y las herramientas que uso de verdad en el día a día, escritos sobre la marcha.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./blog/posts/*.md')),
    customData: `<language>es</language>`,
  });
}
