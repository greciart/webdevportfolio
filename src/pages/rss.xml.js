import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Web Design and Development Blog | Grecia V.',
    description: 'Notes on frontend development, web design and the tools I actually use day to day, written up as I go.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en</language>`,
    // NOTE: the glob picks up src/pages/es/**/*.md too, so every post appears
    // twice in one feed, once per language. Left as-is; splitting it into two
    // feeds is a call about what subscribers should get, not a rename.
  });
}