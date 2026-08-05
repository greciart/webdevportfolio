import { getCollection, type CollectionEntry } from "astro:content";
import { defaultLang, type Lang } from "./ui";

type AnyProject = CollectionEntry<"projects"> | CollectionEntry<"projectsEs">;

/**
 * Case studies for a language. English is the source of truth: a slug without a
 * Spanish translation still shows up, rendered from the English entry, so the
 * portfolio grid is never missing a project mid-migration.
 */
export async function getProjects(lang: Lang): Promise<AnyProject[]> {
  const english = await getCollection("projects");
  if (lang === defaultLang) return english;

  // Astro throws instead of returning [] when a collection folder is empty,
  // so the whole site would fail on the first build after adding the folder.
  let spanish: CollectionEntry<"projectsEs">[] = [];
  try {
    spanish = await getCollection("projectsEs");
  } catch {
    spanish = [];
  }

  const translated = new Map(spanish.map((entry) => [entry.slug, entry]));

  return english.map((entry) => translated.get(entry.slug) ?? entry);
}

/**
 * Older work that should close the grid regardless of its publication date,
 * in the order listed. Everything else stays newest first.
 */
const PINNED_LAST = [
  "hot-dog-seattle-ecommerce-wordpress",
  "bambu-artesanias-ecommerce-wordpress",
  "eco-friendly-landing-page-design",
  "tech-agency-ui-ux-design",
];

/** Newest first, with the pinned slugs pushed to the end. */
export async function getSortedProjects(lang: Lang): Promise<AnyProject[]> {
  const rank = (slug: string) => {
    const pinned = PINNED_LAST.indexOf(slug);
    return pinned === -1 ? -1 : pinned;
  };

  // Copied before sorting: getCollection hands back a cached array, and sorting
  // it in place would reorder it for every other caller too.
  return [...(await getProjects(lang))].sort((a, b) => {
    const rankA = rank(a.slug);
    const rankB = rank(b.slug);
    if (rankA !== rankB) return rankA - rankB;
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });
}
