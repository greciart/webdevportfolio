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

// How high the *top* reaction on a post can go: under 20 for a topic nobody
// searches, the thirties for a middling one, up to 50 for one in real demand.
// The other four fall away from that peak rather than sitting beside it.
const PEAKS: Record<Demand, [number, number]> = {
  low: [14, 19],
  medium: [29, 39],
  high: [43, 50],
};

// Share of the peak for each place in the ranking. Drawing five independent
// numbers out of one band gave things like 47 46 48 44 49, which reads as fake;
// a real reaction bar has one clear winner and a tail trailing off behind it.
const FALLOFF = [1, 0.66, 0.44, 0.27, 0.15];

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
 * Shaped rather than sampled: one peak per post, then each reaction placed at a
 * rank below it. Which reaction takes the peak is itself derived from the slug,
 * so the winner changes from post to post instead of the heart always leading.
 * The ranking only decides which number each reaction gets — they still render
 * in their fixed order, so the row does not read as a sorted list.
 */
export function reactionCounts(slug: string): Record<string, number> {
  const [peakMin, peakMax] = PEAKS[DEMAND[slug] ?? "medium"];
  const peak = peakMin + (hash(`${slug}:peak`) % (peakMax - peakMin + 1));

  const ranked = [...reactions]
    .map((reaction) => ({ reaction, key: hash(`${slug}:rank:${reaction.id}`) }))
    .sort((a, b) => a.key - b.key)
    .map((entry) => entry.reaction);

  const counts: Record<string, number> = {};
  let previous = Infinity;

  ranked.forEach((reaction, rank) => {
    // A couple either way, so the gaps are uneven instead of a clean curve.
    const jitter = (hash(`${slug}:jitter:${reaction.id}`) % 5) - 2;
    let value = Math.round(peak * FALLOFF[rank]) + jitter;
    // Strictly descending, and never under one per remaining rank, which keeps
    // every number distinct without the two constraints fighting each other.
    value = Math.min(value, previous - 1);
    value = Math.max(value, ranked.length - rank);
    previous = value;
    counts[reaction.id] = value;
  });

  return counts;
}
