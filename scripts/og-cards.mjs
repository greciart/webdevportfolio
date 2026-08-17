/**
 * Builds one 1200x630 share card per post image.
 *
 * The article images are whatever shape suited the article: some are 3:2, some
 * are 1200x1800 portraits. X and LinkedIn both want roughly 2:1, and X quietly
 * downgrades a large card to the small square one when the image is far off
 * that, which turns a full-width preview into a thumbnail beside two lines of
 * text. So the post keeps its own image, and the card gets a 1200x630 crop of
 * it written to /images/og/.
 *
 * The crop window sits a third of the way down rather than dead centre, because
 * on a portrait photograph the subject almost always sits above the middle.
 * sharp's "attention" strategy was the first thing I tried and it is too easy to
 * fool: on a photo of a desk it locked onto the bottom edge of a monitor and
 * produced a card of a white wall.
 *
 * This runs from `npm run build`, before astro, so a new post cannot ship with
 * a card that was never generated.
 *
 * No automatic crop is right for every photo. When one comes out badly, drop a
 * hand-made 1200x630 file over the generated one in public/images/og/ — a card
 * newer than its source is left alone, so the replacement survives every build
 * until the source image itself changes.
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "public/images/posts";
const OUT = "public/images/og";

const WIDTH = 1200;
const HEIGHT = 630;

await fs.mkdir(OUT, { recursive: true });

const sources = (await fs.readdir(SRC)).filter((f) => /\.(webp|png|jpe?g)$/i.test(f));

let written = 0;
let skipped = 0;

for (const file of sources) {
  const name = file.replace(/\.[^.]+$/, ".webp");
  const from = path.join(SRC, file);
  const to = path.join(OUT, name);

  // Only redo the crop when the source is newer than the card, so a build that
  // changes nothing costs nothing.
  const [srcStat, outStat] = await Promise.all([
    fs.stat(from),
    fs.stat(to).catch(() => null),
  ]);
  if (outStat && outStat.mtimeMs >= srcStat.mtimeMs) {
    skipped++;
    continue;
  }

  const input = await fs.readFile(from);
  const { width, height } = await sharp(input).metadata();

  // Widest 1200x630-shaped window the source can give, placed a third of the
  // way down. On a source that is already about 2:1 this is the whole image.
  const cropW = Math.min(width, Math.round(height * (WIDTH / HEIGHT)));
  const cropH = Math.round(cropW * (HEIGHT / WIDTH));
  const top = Math.max(0, Math.min(height - cropH, Math.round((height - cropH) / 3)));
  const left = Math.round((width - cropW) / 2);

  await sharp(input)
    .extract({ left, top, width: cropW, height: cropH })
    .resize(WIDTH, HEIGHT)
    .webp({ quality: 80, effort: 5 })
    .toFile(to);
  written++;
}

console.log(`og-cards: ${written} written, ${skipped} up to date`);
