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

/** Newest first. */
export async function getSortedProjects(lang: Lang): Promise<AnyProject[]> {
  return (await getProjects(lang)).sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
  );
}
