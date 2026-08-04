import type { Lang } from "./ui";
import { defaultLang } from "./ui";

/**
 * Both post trees are globbed at build time. Vite needs literal patterns, so
 * they are declared explicitly rather than built from a variable.
 * A Spanish post that has not been translated yet simply falls back to its
 * English original, so the listing is never missing an entry.
 */
const enModules = import.meta.glob<any>("../pages/blog/posts/*.md", { eager: true });
const esModules = import.meta.glob<any>("../pages/es/blog/posts/*.md", { eager: true });

const slugOf = (path: string) => path.split("/").pop()!.replace(/\.md$/, "");

export function getPosts(lang: Lang): any[] {
  const english = Object.entries(enModules);
  if (lang === defaultLang) return english.map(([, mod]) => mod);

  const translated = new Map(
    Object.entries(esModules).map(([path, mod]) => [slugOf(path), mod]),
  );

  return english.map(([path, mod]) => translated.get(slugOf(path)) ?? mod);
}

/** Newest first, which is what every listing wants. */
export function getSortedPosts(lang: Lang): any[] {
  return getPosts(lang).sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).getTime() -
      new Date(a.frontmatter.pubDate).getTime(),
  );
}
