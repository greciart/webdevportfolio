import type { ImageMetadata } from "astro";
import { defaultLang, type Lang } from "../i18n/ui";

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

// Hand-inked line art, from gvpv12.github.io/biblioteca/dibujos/lineart
import illoCharacter from "../assets/services/illustration/lineart-character-design-fantasy.webp";
import illoMoonCat from "../assets/services/illustration/lineart-moon-cat-brand-asset.webp";
import illoCake from "../assets/services/illustration/lineart-melting-cake-surreal-ink.webp";
import illoEye from "../assets/services/illustration/charcoal-cosmic-eye-eclipse.webp";
import illoJelly from "../assets/services/illustration/charcoal-jellyfish-bioluminescent.webp";
import illoPainting from "../assets/services/illustration/acrylic-jellyfish-moon-painting.webp";
import illoWatch from "../assets/services/illustration/pastel-shattered-pocket-watch.webp";

export type GalleryItem = {
  url: ImageMetadata;
  alt: string;
  title: string;
  /** External case study (Behance, itch.io, …). Optional. */
  href?: string;
  tags?: string[];
};

/** Caption text per language; the image and the link are shared. */
type Caption = { title: string; alt: string; tags?: string[] };
type Entry = { url: ImageMetadata; href?: string } & Record<Lang, Caption>;

const BEHANCE = "https://www.behance.net/gallery";

const branding: Entry[] = [
  {
    url: brandingCotizaGuate,
    href: `${BEHANCE}/250822737/CotizaGuate-Logo-Design-3D-Brand-Mascot-Character`,
    en: {
      title: "CotizaGuate · Logo & 3D Brand Mascot",
      alt: "CotizaGuate logo design and 3D quetzal brand mascot character",
      tags: ["Logo", "Mascot", "3D"],
    },
    es: {
      title: "CotizaGuate · Logo y mascota de marca 3D",
      alt: "Diseño de logo de CotizaGuate y personaje mascota de marca en 3D con forma de quetzal",
      tags: ["Logo", "Mascota", "3D"],
    },
  },
  {
    url: brandingApidevs,
    href: `${BEHANCE}/250668627/Apidevs-Logo-and-3D-Brand-Mascot-design-for-Developer`,
    en: {
      title: "Apidevs · Logo & 3D Brand Mascot",
      alt: "Apidevs logo and 3D brand mascot design for a developer platform",
      tags: ["Logo", "Mascot", "3D"],
    },
    es: {
      title: "Apidevs · Logo y mascota de marca 3D",
      alt: "Logo de Apidevs y diseño de mascota de marca en 3D para una plataforma de desarrollo",
      tags: ["Logo", "Mascota", "3D"],
    },
  },
  {
    url: brandingNeurosurgery,
    href: `${BEHANCE}/250579449/Medical-Neurosurgery-Brand-Visual-Identity`,
    en: {
      title: "Medical Neurosurgery · Visual Identity",
      alt: "Visual identity system for a medical neurosurgery brand",
      tags: ["Full Branding", "Identity"],
    },
    es: {
      title: "Neurocirugía médica · Identidad visual",
      alt: "Sistema de identidad visual para una marca médica de neurocirugía",
      tags: ["Branding completo", "Identidad"],
    },
  },
  {
    url: brandingMariaValentina,
    href: `${BEHANCE}/250704587/Diseno-de-Logo-para-Maria-Valentina-Swimwear`,
    en: {
      title: "Maria Valentina Swimwear · Logo Design",
      alt: "Logo design for Maria Valentina swimwear brand",
      tags: ["Logo"],
    },
    es: {
      title: "Maria Valentina Swimwear · Diseño de logo",
      alt: "Diseño de logo para la marca de trajes de baño Maria Valentina",
      tags: ["Logo"],
    },
  },
  {
    url: branding3dtRobot,
    href: `${BEHANCE}/164998227/3dt-robot-rebranding-project`,
    en: {
      title: "3DT Robot · Rebranding",
      alt: "Rebranding project featuring a 3D robot character for 3DT",
      tags: ["Rebranding", "3D"],
    },
    es: {
      title: "Robot 3DT · Rediseño de marca",
      alt: "Proyecto de rediseño de marca con un personaje robot en 3D para 3DT",
      tags: ["Rediseño de marca", "3D"],
    },
  },
];

const threeD: Entry[] = [
  {
    url: threeDPhoneCase,
    href: `${BEHANCE}/151827409/Phone-case-Ad-Made-in-Blender-3D`,
    en: {
      title: "Phone Case Ad · Blender 3D",
      alt: "Product advertising render of a phone case modeled in Blender 3D",
      tags: ["Product", "High poly"],
    },
    es: {
      title: "Anuncio de funda de móvil · Blender 3D",
      alt: "Render publicitario de producto de una funda de móvil modelada en Blender 3D",
      tags: ["Producto", "High poly"],
    },
  },
  {
    url: threeDCoin,
    href: `${BEHANCE}/218781515/App-project-3D-coin-animation-and-assets`,
    en: {
      title: "App Project · 3D Coin Animation & Assets",
      alt: "3D coin animation and in-app assets modeled and animated in Blender",
      tags: ["Animation", "Assets"],
    },
    es: {
      title: "Proyecto de app · Animación y recursos 3D de moneda",
      alt: "Animación de moneda en 3D y recursos para aplicación modelados y animados en Blender",
      tags: ["Animación", "Recursos"],
    },
  },
  {
    url: threeDTunnel,
    href: `${BEHANCE}/168153607/3D-neon-vaporwave-triangular-and-circular-tunnel`,
    en: {
      title: "Neon Vaporwave Tunnel",
      alt: "3D neon vaporwave triangular and circular tunnel animation",
      tags: ["Animation", "Environment"],
    },
    es: {
      title: "Túnel vaporwave de neón",
      alt: "Animación 3D de un túnel triangular y circular vaporwave de neón",
      tags: ["Animación", "Entorno"],
    },
  },
  {
    url: threeDSun,
    href: `${BEHANCE}/168156215/Retro-vaporwave-style-3D-sun`,
    en: {
      title: "Retro Vaporwave 3D Sun",
      alt: "Retro vaporwave style 3D sun render made in Blender",
      tags: ["Environment"],
    },
    es: {
      title: "Sol 3D vaporwave retro",
      alt: "Render de un sol en 3D de estilo vaporwave retro hecho en Blender",
      tags: ["Entorno"],
    },
  },
  {
    url: threeDMoon,
    href: `${BEHANCE}/175342487/Purple-retro-Synthwave-Moon-(Short-Loop-Animation)`,
    en: {
      title: "Purple Synthwave Moon · Loop Animation",
      alt: "Purple retro synthwave moon short loop animation",
      tags: ["Animation", "Loop"],
    },
    es: {
      title: "Luna synthwave morada · Animación en bucle",
      alt: "Animación corta en bucle de una luna synthwave retro en morado",
      tags: ["Animación", "Bucle"],
    },
  },
  {
    url: threeDCommissioned,
    href: `${BEHANCE}/149059437/3D-commissioned-work`,
    en: {
      title: "3D Commissioned Work",
      alt: "Collection of commissioned 3D models and renders",
      tags: ["Commission", "Objects"],
    },
    es: {
      title: "Trabajos 3D por encargo",
      alt: "Colección de modelos y renders en 3D realizados por encargo",
      tags: ["Encargo", "Objetos"],
    },
  },
  {
    url: threeDObjects,
    href: `${BEHANCE}/149057049/3D-objects-collection-part-2`,
    en: {
      title: "3D Objects Collection · Part 2",
      alt: "Collection of stylized 3D objects modeled in Blender",
      tags: ["Objects", "Low poly"],
    },
    es: {
      title: "Colección de objetos 3D · Parte 2",
      alt: "Colección de objetos 3D estilizados modelados en Blender",
      tags: ["Objetos", "Low poly"],
    },
  },
  {
    url: branding3dtRobot,
    href: `${BEHANCE}/164998227/3dt-robot-rebranding-project`,
    en: {
      title: "3DT Robot · Character Model",
      alt: "3D robot character modeled for the 3DT rebranding project",
      tags: ["Character", "Mid poly"],
    },
    es: {
      title: "Robot 3DT · Modelo de personaje",
      alt: "Personaje robot en 3D modelado para el proyecto de rediseño de marca de 3DT",
      tags: ["Personaje", "Mid poly"],
    },
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
const immersiveMeta: Record<string, Record<Lang, Caption>> = {
  "el-peso-del-si-isometric-room": {
    en: {
      title: "El Peso del Sí · Isometric Room",
      alt: "El Peso del Sí visual novel: an isometric pixel art bedroom full of boxes to sort, with Ari, a task checklist and a dialogue box",
      tags: ["Visual novel", "Pixel art", "Game UI"],
    },
    es: {
      title: "El Peso del Sí · Cuarto isométrico",
      alt: "Novela visual El Peso del Sí: un cuarto isométrico en pixel art lleno de cajas por ordenar, con Ari, una lista de tareas y un cuadro de diálogo",
      tags: ["Novela visual", "Pixel art", "UI de juego"],
    },
  },
  "el-peso-del-si-multitask-central": {
    en: {
      title: "El Peso del Sí · Multitask Central",
      alt: "El Peso del Sí retro desktop: Ari's browser open on Multitask Central, a parody productivity site claiming tiredness is a myth, with articles like how to do 47 things at once without ever getting tired",
      tags: ["UI/UX", "Retro web", "Satire"],
    },
    es: {
      title: "El Peso del Sí · Multitask Central",
      alt: "Escritorio retro de El Peso del Sí: el navegador de Ari abierto en Multitask Central, una web de productividad paródica que dice que el cansancio es mental, con artículos como cómo hacer 47 cosas a la vez sin cansarte jamás",
      tags: ["UI/UX", "Web retro", "Sátira"],
    },
  },
  "el-peso-del-si-desktop-chat": {
    en: {
      title: "El Peso del Sí · Desktop & Chat UI",
      alt: "El Peso del Sí retro desktop: a chat window where people ask Ari for favors, three reply options and a sticky note with her to-do list",
      tags: ["UI/UX", "Retro OS", "Choices"],
    },
    es: {
      title: "El Peso del Sí · Escritorio y chat",
      alt: "Escritorio retro de El Peso del Sí: una ventana de chat donde le piden favores a Ari, tres opciones de respuesta y una nota adhesiva con sus pendientes",
      tags: ["UI/UX", "OS retro", "Decisiones"],
    },
  },
  "unspoken-words-aquarium": {
    en: {
      title: "Unspoken Words · Glowing Aquarium",
      alt: "Unspoken Words: Maia in a glowing underwater aquarium world, with a floating starry book, a ghostly figure and a dialogue box",
      tags: ["3D exploration", "Visual novel", "Game UI"],
    },
    es: {
      title: "Unspoken Words · Acuario luminoso",
      alt: "Unspoken Words: Maia en un mundo de acuario submarino luminoso, con un libro estrellado flotando, una figura fantasmal y un cuadro de diálogo",
      tags: ["Exploración 3D", "Novela visual", "UI de juego"],
    },
  },
  "unspoken-words-library-hall": {
    en: {
      title: "Unspoken Words · Library of Whispers",
      alt: "Unspoken Words: a long library corridor lined with tall bookshelves and light at the end, with Maia and a dialogue box",
      tags: ["3D exploration", "Environment"],
    },
    es: {
      title: "Unspoken Words · Biblioteca de susurros",
      alt: "Unspoken Words: un pasillo largo de biblioteca con estanterías altas y luz al fondo, con Maia y un cuadro de diálogo",
      tags: ["Exploración 3D", "Entorno"],
    },
  },
  "unspoken-words-starry-bedroom": {
    en: {
      title: "Unspoken Words · Starry Bedroom",
      alt: "Unspoken Words: Maia's dark blue starry bedroom with a crescent moon, a telescope and her broken music box glowing in the middle",
      tags: ["3D exploration", "Narrative"],
    },
    es: {
      title: "Unspoken Words · Cuarto estrellado",
      alt: "Unspoken Words: el cuarto azul estrellado de Maia con una luna creciente, un telescopio y su caja de música rota brillando en el centro",
      tags: ["Exploración 3D", "Narrativa"],
    },
  },
  "unspoken-words-planetarium": {
    en: {
      title: "Unspoken Words · Planetarium",
      alt: "Unspoken Words final world: a planetarium dome with a brass telescope and a ring of smiling stars around Maia",
      tags: ["3D exploration", "Ending"],
    },
    es: {
      title: "Unspoken Words · Planetario",
      alt: "Último mundo de Unspoken Words: la cúpula de un planetario con un telescopio de bronce y un círculo de estrellas sonrientes alrededor de Maia",
      tags: ["Exploración 3D", "Final"],
    },
  },
  "balam-ball-arena-round-ui": {
    en: {
      title: "Balam Ball · Arena & Round UI",
      alt: "Balam Ball gameplay arena: a Mesoamerican ball court in the jungle with player masks, score counters and the round banner",
      tags: ["Game art", "Environment", "Score UI"],
    },
    es: {
      title: "Balam Ball · Arena e interfaz de ronda",
      alt: "Arena de juego de Balam Ball: un juego de pelota mesoamericano en la selva con máscaras de jugador, marcadores y el cartel de ronda",
      tags: ["Arte de juego", "Entorno", "UI de marcador"],
    },
  },
  "starmoon-boot-sequence": {
    en: {
      title: "Starmoon · Boot Sequence",
      alt: "Starmoon retro OS simulator boot screen with pixel art mascot, loading bars and system init log",
      tags: ["Nekoweb", "Vaporwave", "Interactive"],
    },
    es: {
      title: "Starmoon · Secuencia de arranque",
      alt: "Pantalla de arranque del simulador de sistema operativo retro Starmoon, con mascota en pixel art, barras de carga y registro de inicio del sistema",
      tags: ["Nekoweb", "Vaporwave", "Interactivo"],
    },
  },
  "starmoon-welcome-menu": {
    en: {
      title: "Starmoon · Landing & Menu",
      alt: "Starmoon landing window listing the site sections over a starfield background",
      tags: ["Nekoweb", "Retro 00s"],
    },
    es: {
      title: "Starmoon · Portada y menú",
      alt: "Ventana de bienvenida de Starmoon listando las secciones del sitio sobre un fondo de campo de estrellas",
      tags: ["Nekoweb", "Retro de los 2000"],
    },
  },
  "starmoon-desktop-character-sheet": {
    en: {
      title: "Starmoon · Desktop & Character Sheet",
      alt: "Starmoon desktop environment with draggable windows, an RPG style character sheet, mascot panel and vaporwave radio player",
      tags: ["Nekoweb", "OS simulator", "Window UI"],
    },
    es: {
      title: "Starmoon · Escritorio y ficha de personaje",
      alt: "Entorno de escritorio de Starmoon con ventanas arrastrables, una ficha de personaje estilo rol, panel de mascotas y reproductor de radio vaporwave",
      tags: ["Nekoweb", "Simulador de OS", "UI de ventanas"],
    },
  },
  "starmoon-desktop-windows": {
    en: {
      title: "Starmoon · Multi-Window Desktop",
      alt: "Starmoon desktop showing the welcome note, navigation helper, collections window and taskbar",
      tags: ["Nekoweb", "Window UI"],
    },
    es: {
      title: "Starmoon · Escritorio multiventana",
      alt: "Escritorio de Starmoon mostrando la nota de bienvenida, el asistente de navegación, la ventana de colecciones y la barra de tareas",
      tags: ["Nekoweb", "UI de ventanas"],
    },
  },
  "starmoon-file-explorer": {
    en: {
      title: "Starmoon · File Explorer",
      alt: "Starmoon file explorer application with sidebar navigation, breadcrumb path and folder grid, styled as a retro operating system",
      tags: ["Nekoweb", "App UI"],
    },
    es: {
      title: "Starmoon · Explorador de archivos",
      alt: "Aplicación de explorador de archivos de Starmoon con navegación lateral, ruta de migas y rejilla de carpetas, con estética de sistema operativo retro",
      tags: ["Nekoweb", "UI de app"],
    },
  },
};

/** Shown first, in this order (best screens first); everything else follows alphabetically. */
const immersiveFirst = [
  "el-peso-del-si-isometric-room",
  "unspoken-words-aquarium",
  "el-peso-del-si-multitask-central",
  "unspoken-words-starry-bedroom",
  "el-peso-del-si-desktop-chat",
  "unspoken-words-library-hall",
  "unspoken-words-planetarium",
];
const immersiveRank = (slug: string) => {
  const i = immersiveFirst.indexOf(slug);
  return i === -1 ? immersiveFirst.length : i;
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

const illustration: Entry[] = [
  {
    url: illoEye,
    en: {
      title: "Cosmic eye · white charcoal",
      alt: "White charcoal drawing on black paper of a large eye surrounded by lashes, with eclipsing rings above and below it in a starfield",
      tags: ["Charcoal","Surreal","Black paper"],
    },
    es: {
      title: "Ojo cósmico · carboncillo blanco",
      alt: "Dibujo a carboncillo blanco sobre papel negro de un ojo grande rodeado de pestañas, con anillos en eclipse arriba y abajo sobre un campo de estrellas",
      tags: ["Carboncillo","Surrealista","Papel negro"],
    },
  },
  {
    url: illoJelly,
    en: {
      title: "Jellyfish · light study",
      alt: "White charcoal jellyfish on black paper, with trailing tentacles and bubbles rendered as points of light",
      tags: ["Charcoal","Light study","Nature"],
    },
    es: {
      title: "Medusa · estudio de luz",
      alt: "Medusa a carboncillo blanco sobre papel negro, con tentáculos y burbujas trabajados como puntos de luz",
      tags: ["Carboncillo","Estudio de luz","Naturaleza"],
    },
  },
  {
    url: illoPainting,
    en: {
      title: "Jellyfish moon · acrylic",
      alt: "Acrylic painting on canvas of a seated figure silhouetted against a blue moon, surrounded by glowing green jellyfish",
      tags: ["Acrylic","Colour","Canvas"],
    },
    es: {
      title: "Luna de medusas · acrílico",
      alt: "Pintura acrílica sobre lienzo de una figura sentada en contraluz frente a una luna azul, rodeada de medusas verdes luminosas",
      tags: ["Acrílico","Color","Lienzo"],
    },
  },
  {
    url: illoWatch,
    en: {
      title: "Shattered pocket watch · pastel",
      alt: "Pastel drawing on black paper of a pocket watch breaking apart, its shards suspended around it and catching coloured light",
      tags: ["Pastel","Conceptual","Black paper"],
    },
    es: {
      title: "Reloj de bolsillo roto · pastel",
      alt: "Dibujo a pastel sobre papel negro de un reloj de bolsillo rompiéndose, con las esquirlas suspendidas alrededor atrapando luz de color",
      tags: ["Pastel","Conceptual","Papel negro"],
    },
  },
  {
    url: illoCharacter,
    en: {
      title: "Character design · original concept",
      alt: "Hand inked original character illustration with braided hair, layered robes and patterned detailing",
      tags: ["Character", "Concept", "Ink"],
    },
    es: {
      title: "Diseño de personaje · concepto original",
      alt: "Ilustración a tinta de un personaje original con trenzas, túnicas superpuestas y detalles de estampado",
      tags: ["Personaje", "Concepto", "Tinta"],
    },
  },
  {
    url: illoCake,
    en: {
      title: "Melting cake · surreal ink",
      alt: "Surreal hand inked illustration of a melting cake with candles and flowing ribbons, filled with texture line work",
      tags: ["Ink", "Surreal", "Texture"],
    },
    es: {
      title: "Pastel derretido · tinta surrealista",
      alt: "Ilustración surrealista a tinta de un pastel derritiéndose con velas y cintas onduladas, rellena de trabajo de línea texturizado",
      tags: ["Tinta", "Surrealista", "Textura"],
    },
  },
  {
    url: illoMoonCat,
    en: {
      title: "Moon cat · brand asset",
      alt: "Clean hand drawn line art of a cat sitting inside a crescent moon with crystals and stars, sized for use as a web asset",
      tags: ["Asset", "Mascot", "Line art"],
    },
    es: {
      title: "Gato lunar · recurso de marca",
      alt: "Line art limpio hecho a mano de un gato sentado dentro de una luna creciente con cristales y estrellas, pensado como recurso web",
      tags: ["Recurso", "Mascota", "Line art"],
    },
  },
];

const pick = (entry: Entry, lang: Lang): GalleryItem => {
  const caption = entry[lang] ?? entry[defaultLang];
  return { url: entry.url, href: entry.href, ...caption };
};

export function getBrandingGallery(lang: Lang): GalleryItem[] {
  return branding.map((entry) => pick(entry, lang));
}

export function getIllustrationGallery(lang: Lang): GalleryItem[] {
  return illustration.map((entry) => pick(entry, lang));
}

export function getThreeDGallery(lang: Lang): GalleryItem[] {
  return threeD.map((entry) => pick(entry, lang));
}

export function getImmersiveGallery(lang: Lang): GalleryItem[] {
  const slugOf = (p: string) => p.split("/").pop()!.replace(/\.\w+$/, "");
  return Object.entries(immersiveFiles)
    .sort(([a], [b]) => immersiveRank(slugOf(a)) - immersiveRank(slugOf(b)) || a.localeCompare(b))
    .map(([path, mod]) => {
      const slug = path.split("/").pop()!.replace(/\.\w+$/, "");
      const meta = immersiveMeta[slug];
      if (meta) return { url: mod.default, ...(meta[lang] ?? meta[defaultLang]) };

      // Untitled drop-ins fall back to the filename, which reads the same
      // in both languages.
      const title = titleFromFilename(slug);
      return {
        url: mod.default,
        title,
        alt: `${title} · interactive experience and game design work by Grecia V.`,
      };
    });
}
