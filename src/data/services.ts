import type { ImageMetadata } from "astro";

// Branding covers pulled from behance.net/greciavalero
import brandingCotizaGuate from "../assets/services/branding/cotizaguate-logo-3d-brand-mascot.webp";
import brandingMariaValentina from "../assets/services/branding/maria-valentina-swimwear-logo.webp";
import brandingApidevs from "../assets/services/branding/apidevs-logo-3d-brand-mascot.webp";
import brandingNeurosurgery from "../assets/services/branding/medical-neurosurgery-visual-identity.webp";
import branding3dtRobot from "../assets/services/branding/3dt-robot-rebranding.webp";

// 3D covers pulled from behance.net/greciavalero
import threeDCoin from "../assets/services/3d/app-3d-coin-animation.webp";
import threeDMoon from "../assets/services/3d/synthwave-moon-loop-animation.webp";
import threeDSun from "../assets/services/3d/retro-vaporwave-3d-sun.webp";
import threeDTunnel from "../assets/services/3d/neon-vaporwave-3d-tunnel.webp";
import threeDPhoneCase from "../assets/services/3d/phone-case-ad-blender-3d.webp";
import threeDCommissioned from "../assets/services/3d/3d-commissioned-work.webp";
import threeDObjects from "../assets/services/3d/3d-objects-collection-part-2.webp";

export type GalleryItem = {
  url: ImageMetadata;
  alt: string;
  title: string;
  /** External case study (Behance, itch.io, …). Optional. */
  href?: string;
  tags?: string[];
};

const BEHANCE = "https://www.behance.net/gallery";

export const brandingGallery: GalleryItem[] = [
  {
    url: brandingCotizaGuate,
    title: "CotizaGuate — Logo & 3D Brand Mascot",
    alt: "CotizaGuate logo design and 3D quetzal brand mascot character",
    href: `${BEHANCE}/250822737/CotizaGuate-Logo-Design-3D-Brand-Mascot-Character`,
    tags: ["Logo", "Mascot", "3D"],
  },
  {
    url: brandingApidevs,
    title: "Apidevs — Logo & 3D Brand Mascot",
    alt: "Apidevs logo and 3D brand mascot design for a developer platform",
    href: `${BEHANCE}/250668627/Apidevs-Logo-and-3D-Brand-Mascot-design-for-Developer`,
    tags: ["Logo", "Mascot", "3D"],
  },
  {
    url: brandingNeurosurgery,
    title: "Medical Neurosurgery — Visual Identity",
    alt: "Visual identity system for a medical neurosurgery brand",
    href: `${BEHANCE}/250579449/Medical-Neurosurgery-Brand-Visual-Identity`,
    tags: ["Full Branding", "Identity"],
  },
  {
    url: brandingMariaValentina,
    title: "Maria Valentina Swimwear — Logo Design",
    alt: "Logo design for Maria Valentina swimwear brand",
    href: `${BEHANCE}/250704587/Diseno-de-Logo-para-Maria-Valentina-Swimwear`,
    tags: ["Logo"],
  },
  {
    url: branding3dtRobot,
    title: "3DT Robot — Rebranding",
    alt: "Rebranding project featuring a 3D robot character for 3DT",
    href: `${BEHANCE}/164998227/3dt-robot-rebranding-project`,
    tags: ["Rebranding", "3D"],
  },
];

export const threeDGallery: GalleryItem[] = [
  {
    url: threeDPhoneCase,
    title: "Phone Case Ad — Blender 3D",
    alt: "Product advertising render of a phone case modeled in Blender 3D",
    href: `${BEHANCE}/151827409/Phone-case-Ad-Made-in-Blender-3D`,
    tags: ["Product", "High poly"],
  },
  {
    url: threeDCoin,
    title: "App Project — 3D Coin Animation & Assets",
    alt: "3D coin animation and in-app assets modeled and animated in Blender",
    href: `${BEHANCE}/218781515/App-project-3D-coin-animation-and-assets`,
    tags: ["Animation", "Assets"],
  },
  {
    url: threeDTunnel,
    title: "Neon Vaporwave Tunnel",
    alt: "3D neon vaporwave triangular and circular tunnel animation",
    href: `${BEHANCE}/168153607/3D-neon-vaporwave-triangular-and-circular-tunnel`,
    tags: ["Animation", "Environment"],
  },
  {
    url: threeDSun,
    title: "Retro Vaporwave 3D Sun",
    alt: "Retro vaporwave style 3D sun render made in Blender",
    href: `${BEHANCE}/168156215/Retro-vaporwave-style-3D-sun`,
    tags: ["Environment"],
  },
  {
    url: threeDMoon,
    title: "Purple Synthwave Moon — Loop Animation",
    alt: "Purple retro synthwave moon short loop animation",
    href: `${BEHANCE}/175342487/Purple-retro-Synthwave-Moon-(Short-Loop-Animation)`,
    tags: ["Animation", "Loop"],
  },
  {
    url: threeDCommissioned,
    title: "3D Commissioned Work",
    alt: "Collection of commissioned 3D models and renders",
    href: `${BEHANCE}/149059437/3D-commissioned-work`,
    tags: ["Commission", "Objects"],
  },
  {
    url: threeDObjects,
    title: "3D Objects Collection — Part 2",
    alt: "Collection of stylized 3D objects modeled in Blender",
    href: `${BEHANCE}/149057049/3D-objects-collection-part-2`,
    tags: ["Objects", "Low poly"],
  },
  {
    url: branding3dtRobot,
    title: "3DT Robot — Character Model",
    alt: "3D robot character modeled for the 3DT rebranding project",
    href: `${BEHANCE}/164998227/3dt-robot-rebranding-project`,
    tags: ["Character", "Mid poly"],
  },
];

/**
 * Immersive / game work.
 *
 * Zero-config: drop any .webp/.png/.jpg into `src/assets/services/immersive/`
 * and it shows up here automatically. The filename becomes the caption, so
 * name files descriptively, e.g. `neon-runner-game-jam-ui.webp`
 * -> "Neon Runner Game Jam UI".
 */
const immersiveFiles = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/services/immersive/*.{png,jpg,jpeg,webp,avif}",
  { eager: true },
);

/**
 * Hand-written captions win over the filename. Add an entry here when a piece
 * deserves a proper title; anything without one still shows up automatically.
 */
const immersiveMeta: Record<string, Omit<GalleryItem, "url">> = {
  "balam-ball-title-screen-logo": {
    title: "Balam Ball — Title Screen & Logo",
    alt: "Balam Ball title screen with the pixel art game logo, jaguar deity masks and the main menu",
    tags: ["Game art", "Logo", "Menu UI"],
  },
  "balam-ball-arena-round-ui": {
    title: "Balam Ball — Arena & Round UI",
    alt: "Balam Ball gameplay arena: a Mesoamerican ball court in the jungle with player masks, score counters and the round banner",
    tags: ["Game art", "Environment", "Score UI"],
  },
  "balam-ball-victory-screen": {
    title: "Balam Ball — Victory State",
    alt: "Balam Ball victory screen showing the game logo, the player record and the replay options",
    tags: ["Game UI", "End state"],
  },
  "balam-ball-credits-pixel-art": {
    title: "Balam Ball — Credits & Pixel Art",
    alt: "Balam Ball credits screen with a pixel art jaguar mask crediting programming, art and music",
    tags: ["Game art", "Credits"],
  },
  "game-jam-isometric-map-hud-tutorial": {
    title: "Isometric City Map — HUD & Tutorial",
    alt: "Game jam UI: isometric city map with a stats HUD, location markers and a tutorial dialog box",
    tags: ["Game UI", "HUD", "Onboarding"],
  },
  "starmoon-boot-sequence": {
    title: "Starmoon — Boot Sequence",
    alt: "Starmoon retro OS simulator boot screen with pixel art mascot, loading bars and system init log",
    tags: ["Nekoweb", "Vaporwave", "Interactive"],
  },
  "starmoon-welcome-menu": {
    title: "Starmoon — Landing & Menu",
    alt: "Starmoon landing window listing the site sections over a starfield background",
    tags: ["Nekoweb", "Retro 00s"],
  },
  "starmoon-desktop-character-sheet": {
    title: "Starmoon — Desktop & Character Sheet",
    alt: "Starmoon desktop environment with draggable windows, an RPG style character sheet, mascot panel and vaporwave radio player",
    tags: ["Nekoweb", "OS simulator", "Window UI"],
  },
  "starmoon-desktop-windows": {
    title: "Starmoon — Multi-Window Desktop",
    alt: "Starmoon desktop showing the welcome note, navigation helper, collections window and taskbar",
    tags: ["Nekoweb", "Window UI"],
  },
  "starmoon-file-explorer": {
    title: "Starmoon — File Explorer",
    alt: "Starmoon file explorer application with sidebar navigation, breadcrumb path and folder grid, styled as a retro operating system",
    tags: ["Nekoweb", "App UI"],
  },
  "game-jam-venue-open-air-stage": {
    title: "Open-Air Venue & Crowd Traits",
    alt: "Game jam UI: lit open-air plaza stage showing the audience type label and the crowd trait selector",
    tags: ["Game UI", "Environment"],
  },
  "game-jam-location-stats-panel": {
    title: "Location Panel & Progression Gates",
    alt: "Game jam UI: isometric map with a side panel showing venue capacity, reputation and charisma requirements",
    tags: ["Game UI", "Data display"],
  },
  "game-jam-narrative-modal-dialog": {
    title: "Narrative Modal & Reward Dialog",
    alt: "Game jam UI: bartender character scene with a modal card showing stat rewards and an accept action",
    tags: ["Game UI", "Narrative"],
  },
  "game-jam-credits-art-direction": {
    title: "Credits Screen & Art Direction",
    alt: "Game jam credits screen with rubber hose style cartoon illustrations crediting the team",
    tags: ["Art direction", "Credits"],
  },
};

const titleFromFilename = (slug: string) =>
  slug
    .split("-")
    .map((word) =>
      /^(ui|ux|hud|3d|2d|vr|ar|npc)$/i.test(word)
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");

export const immersiveGallery: GalleryItem[] = Object.entries(immersiveFiles)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => {
    const slug = path.split("/").pop()!.replace(/\.\w+$/, "");
    const meta = immersiveMeta[slug];
    if (meta) return { url: mod.default, ...meta };

    const title = titleFromFilename(slug);
    return {
      url: mod.default,
      title,
      alt: `${title} — interactive experience and game design work by Grecia V.`,
    };
  });
