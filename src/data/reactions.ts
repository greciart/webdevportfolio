// Reaction bar at the foot of every post.
//
// The counts are decorative: there is no backend on this site, so nothing is
// aggregated across visitors. What each reader sees is a number derived from the
// post slug and the reaction id, which means it is stable — the same post shows
// the same numbers on every visit and on both language versions — while looking
// arbitrary. Their own reaction is added on top, and is kept in localStorage.

import type { ui, defaultLang } from "../i18n/ui";

type UiKey = keyof (typeof ui)[typeof defaultLang];

export type Reaction = {
  id: string;
  /** Name of the SVG in src/icons, all five from Tabler Icons (MIT). */
  icon: string;
  labelKey: UiKey;
};

export const reactions: Reaction[] = [
  { id: "love", icon: "reaction-heart", labelKey: "reaction.love" },
  { id: "like", icon: "reaction-thumb", labelKey: "reaction.like" },
  { id: "useful", icon: "reaction-star", labelKey: "reaction.useful" },
  { id: "amazing", icon: "reaction-surprised", labelKey: "reaction.amazing" },
  { id: "interesting", icon: "reaction-bulb", labelKey: "reaction.interesting" },
];

/** How much the topic gets searched for. Drives the size of the numbers. */
type Demand = "low" | "medium" | "high";

// Ranges follow the brief: under 20 for a topic nobody searches, 20 to 50 for a
// middling one, and up to 50 for a topic in real demand.
const RANGES: Record<Demand, [number, number]> = {
  low: [4, 19],
  medium: [20, 34],
  high: [35, 49],
};

// My read of the search demand per topic, not measured data. Move a slug between
// tiers here and its five numbers move with it.
const DEMAND: Record<string, Demand> = {
  // Evergreen developer questions people actively search for.
  "markdown-tutorial": "high",
  "use-pnpm": "high",
  "create-robots-txt-block-ai-crawlers": "high",

  // Real demand, narrower audience.
  "how-to-create-an-animated-border-with-tailwind": "medium",
  "google-recaptcha-netlify-forms-setup": "medium",
  "netlify-contact-form-email-notifications": "medium",
  "protect-artwork-from-ai-training": "medium",
  "vibe-coding-trap": "medium",

  // New tooling and opinion pieces: read once found, rarely searched for.
  "restrict-claude-code-access": "low",
  "figma-cli-free-mcp-no-rate-limit": "low",
  "biggest-lie-web-design-ai": "low",
  "why-quality-makes-people-irreplaceable-ai": "low",
  "blog-post-commonplace": "low",
};

/** FNV-1a. Small, and spreads adjacent strings apart well enough here. */
function hash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * The slug on its own, with no language prefix and no surrounding path, so
 * /blog/posts/use-pnpm/ and /es/blog/posts/use-pnpm/ agree on their numbers.
 */
export function slugFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  return segments[segments.length - 1] ?? "";
}

/**
 * All five counts for one post, keyed by reaction id.
 *
 * Computed together rather than one at a time so they can be kept distinct: two
 * reactions landing on the same number looks like a bug even though the hash was
 * behaving. On a clash the value walks up through the range until it finds a
 * free slot, which stays stable because the walk is deterministic too. Each tier
 * has at least 15 values for 5 reactions, so it always terminates.
 */
export function reactionCounts(slug: string): Record<string, number> {
  const [min, max] = RANGES[DEMAND[slug] ?? "medium"];
  const span = max - min + 1;
  const taken = new Set<number>();
  const counts: Record<string, number> = {};

  for (const reaction of reactions) {
    let value = min + (hash(`${slug}:${reaction.id}`) % span);
    while (taken.has(value)) value = min + ((value - min + 1) % span);
    taken.add(value);
    counts[reaction.id] = value;
  }

  return counts;
}
