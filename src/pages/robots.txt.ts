import type { APIRoute } from 'astro';

// This route and public/robots.txt both wrote to dist/robots.txt, and this one
// won, so the AI crawler blocks that lived in the public copy were never
// actually served. Merged here; the public copy is gone.
const getRobotsTxt = (sitemapURL: URL) => `# Blocking AI crawlers
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Omgilibot
Disallow: /

User-agent: FacebookBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: PetalBot
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: cohere-ai
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: YouBot
Disallow: /

User-agent: img2dataset
Disallow: /

# Allow search engines
User-agent: *
Allow: /

# The clips under /videos/previews/ are decorative: silent three-second loops
# that sit inside a project card, next to the real link. They are not the
# subject of any page, which is precisely what Search Console means by "video is
# not on a watch page". Blocking the files is Google's own documented way of
# saying "this is not a video worth indexing", and it leaves the actual
# walkthroughs in /videos/ free to be indexed.
Disallow: /videos/previews/

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  return new Response(getRobotsTxt(sitemapURL), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
