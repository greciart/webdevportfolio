import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";
import type { Lang } from "../i18n/ui";

export type CarouselSlide = {
  image: ImageMetadata | string;
  alt: string;
  /** Full-size URL for the lightbox. */
  full?: string;
  /** Intrinsic size, needed only for string sources (files in /public). */
  width?: number;
  height?: number;
  /** Overrides the carousel's object-fit classes for this slide only. */
  fit?: string;
};

/**
 * Extra carousel images are found by name, never listed by hand: a product
 * whose cover is "aqua-blog-template.png" picks up "aqua-blog-template-2.png"
 * and "-3" from the same family of folders. Dropping a file in is the whole
 * workflow.
 */
const shopExtras = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/shop/gallery/*.{png,jpg,jpeg,webp}",
  { eager: true },
);
const labFiles = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/lab/*.{png,jpg,jpeg,webp}",
  { eager: true },
);

const byStem = (files: Record<string, { default: ImageMetadata }>) =>
  new Map(
    Object.entries(files).map(([path, mod]) => [
      path.split("/").pop()!.replace(/\.\w+$/, ""),
      mod.default,
    ]),
  );

const shopByStem = byStem(shopExtras);
const labByStem = byStem(labFiles);

const extrasFrom = (pool: Map<string, ImageMetadata>, base: string) =>
  [2, 3].map((n) => pool.get(`${base}-${n}`)).filter((img): img is ImageMetadata => !!img);

export const shopExtrasFor = (base: string) => extrasFrom(shopByStem, base);
export const labCoverFor = (id: string) => labByStem.get(id);
export const labExtrasFor = (id: string) => extrasFrom(labByStem, id);

/** "Pink cupcake 3D model, view 2": distinct alt text per image, same subject. */
const viewLabel: Record<Lang, string> = { en: "view", es: "vista" };
export const viewAlt = (alt: string, n: number, lang: Lang) => `${alt}, ${viewLabel[lang]} ${n}`;

/** Big enough to inspect in the lightbox, compressed enough not to hurt. */
export const fullSize = async (image: ImageMetadata) =>
  (await getImage({ src: image, format: "webp", width: Math.min(image.width, 1600), quality: 75 })).src;

/**
 * Cover plus whatever extras exist, as carousel slides. The cover can be an
 * optimized asset or a file already sized in /public.
 */
export async function buildSlides(
  cover: { image: ImageMetadata | string; alt: string; full?: string; width?: number; height?: number },
  extras: ImageMetadata[],
  lang: Lang,
): Promise<CarouselSlide[]> {
  const first: CarouselSlide = {
    ...cover,
    full: cover.full ?? (typeof cover.image === "string" ? cover.image : await fullSize(cover.image)),
  };
  const rest = await Promise.all(
    extras.map(async (image, i) => ({
      image,
      alt: viewAlt(cover.alt, i + 2, lang),
      full: await fullSize(image),
    })),
  );
  return [first, ...rest];
}
