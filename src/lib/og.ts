import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

/**
 * A share card made from one of the page's own images, so a shop or Lab link
 * previews what is on the page instead of the generic portfolio card.
 * 1200px wide is what Facebook, X and LinkedIn all display at.
 */
export async function ogFrom(image: ImageMetadata, alt: string) {
  const width = Math.min(image.width, 1200);
  const height = Math.round((image.height * width) / image.width);
  const { src } = await getImage({ src: image, format: "webp", width, quality: 80 });
  return { url: src, alt, width, height };
}
