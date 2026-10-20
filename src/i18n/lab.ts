import type { Lang } from "./ui";

/**
 * The Lab: open source and personal projects, mirrored from the GitHub profile
 * README. Client work lives in the home page projects; this is what I build
 * when nobody is paying for it.
 */
const GITHUB = "https://github.com/GVPV12";
const ITCH = "https://grecia-v.itch.io";

type GroupId = "games" | "retroWeb" | "tools" | "desktop";

type ProjectBase = {
  id: string;
  group: GroupId;
  /** Shown as chips. Language first, then the main library if any. */
  stack: string[];
  repos: { label: string; url: string }[];
  demo?: string;
  /** Its page on itch.io, where it can be played or downloaded. */
  itch?: string;
  /** A post on this site about the project, if there is one. */
  post?: string;
};

type ProjectCopy = { name: string; description: string };

const projects: ProjectBase[] = [
  { id: "serperwave", group: "games", stack: ["TypeScript", "Phaser 3"], repos: [{ label: "serperwave", url: `${GITHUB}/serperwave` }], itch: `${ITCH}/serperwave` },
  { id: "peso-del-si", group: "games", stack: ["Phaser", "HTML5"], repos: [], itch: `${ITCH}/el-peso-del-si` },
  { id: "aqua-blog", group: "retroWeb", stack: ["HTML", "CSS", "JavaScript"], repos: [{ label: "aqua-frutiger-aero-blog", url: `${GITHUB}/aqua-frutiger-aero-blog` }], demo: "https://aquafrutiger.netlify.app/" },
  { id: "purple-aero", group: "retroWeb", stack: ["HTML", "CSS"], repos: [{ label: "purple-frutigeraero", url: `${GITHUB}/purple-frutigeraero` }] },
  { id: "focus-time", group: "tools", stack: ["TypeScript"], repos: [{ label: "focus-time", url: `${GITHUB}/focus-time` }], demo: "https://focustimeisnow.netlify.app/" },
  { id: "commonplace", group: "tools", stack: ["HTML", "CSS", "JavaScript"], repos: [{ label: "commonplacebook", url: `${GITHUB}/commonplacebook` }], demo: "https://starmoon.nekoweb.org/commonplace_book.html", post: "/blog/posts/blog-post-commonplace" },
  { id: "starplayer", group: "tools", stack: ["TypeScript", "Desktop"], repos: [{ label: "STARPLAYER", url: `${GITHUB}/STARPLAYER` }] },
  { id: "bwm", group: "desktop", stack: ["Python"], repos: [{ label: "BWM (CLI)", url: `${GITHUB}/BWM` }, { label: "BWM-GUI", url: `${GITHUB}/BWM-GUI` }], itch: `${ITCH}/bulk-watermark-maker` },
  { id: "commission", group: "desktop", stack: ["Python"], repos: [{ label: "commissioncalculador", url: `${GITHUB}/commissioncalculador` }] },
  { id: "usdtoves", group: "desktop", stack: ["Python"], repos: [{ label: "usdtoves", url: `${GITHUB}/usdtoves` }] },
];

const projectCopy: Record<Lang, Record<string, ProjectCopy>> = {
  en: {
    serperwave: {
      name: "SERPERWAVE",
      description:
        "A vaporwave snake arcade with 13 levels, mystery-box loot and its own CRT and bloom shaders. There isn't a single external asset in it: the graphics are procedural and the audio is synthesized while you play.",
    },
    "peso-del-si": {
      name: "El Peso del Sí",
      description:
        "A short, emotional visual novel I made with Zim Yi in Phaser. It's finished and released, and it plays right in your browser.",
    },
    "aqua-blog": {
      name: "Aqua Blog",
      description:
        "A Frutiger Aero / Y2K blog template in plain HTML, CSS and JavaScript, made for Nekoweb and Neocities. It's also a free download in my shop.",
    },
    "purple-aero": {
      name: "Purple Frutiger Aero",
      description:
        "A purple Frutiger Aero static site template, with the same indie web spirit as Aqua Blog and nothing generic about it.",
    },
    "focus-time": {
      name: "Focus Time",
      description:
        "A pixel-art productivity app built around focused work sessions, with a bit of game in it so you actually want to come back.",
    },
    commonplace: {
      name: "Commonplace Book",
      description:
        "A digital notebook and tracker for the books, games and movies I consume, so I do it on purpose instead of on autopilot.",
    },
    starplayer: {
      name: "STARPLAYER",
      description:
        "An ad-free, privacy-first desktop music player with its own tagging system and several skins to choose from.",
    },
    bwm: {
      name: "BWM",
      description:
        "Batch text watermarks for your images. There's a command line version and a desktop app, for when you have a whole folder to protect.",
    },
    commission: {
      name: "Commission Calculator",
      description:
        "A small desktop app for working out commissions and percentages in seconds. Handy if you freelance and quote often.",
    },
    usdtoves: {
      name: "USD to VES",
      description:
        "A desktop converter between US dollars and Venezuelan bolívars using the official BCV rate. Very local, very useful if you live here.",
    },
  },
  es: {
    serperwave: {
      name: "SERPERWAVE",
      description:
        "Un arcade de la viborita en estética vaporwave, con 13 niveles, cajas misteriosas y shaders propios de CRT y bloom. No tiene ni un solo asset externo: los gráficos son procedurales y el audio se sintetiza mientras juegas.",
    },
    "peso-del-si": {
      name: "El Peso del Sí",
      description:
        "Una novela visual corta y emotiva que hice junto a Zim Yi en Phaser. Está terminada y publicada, y se juega directo en el navegador.",
    },
    "aqua-blog": {
      name: "Aqua Blog",
      description:
        "Una plantilla de blog Frutiger Aero / Y2K en HTML, CSS y JavaScript puros, hecha para Nekoweb y Neocities. También la puedes descargar gratis en mi tienda.",
    },
    "purple-aero": {
      name: "Purple Frutiger Aero",
      description:
        "Una plantilla de sitio estático Frutiger Aero en morado, con el mismo espíritu de web indie que Aqua Blog y nada de genérica.",
    },
    "focus-time": {
      name: "Focus Time",
      description:
        "Una app de productividad en pixel art construida alrededor de sesiones de trabajo enfocado, con un toque de juego para que de verdad quieras volver.",
    },
    commonplace: {
      name: "Commonplace Book",
      description:
        "Un cuaderno digital y tracker de los libros, juegos y películas que consumo, para hacerlo a conciencia y no en piloto automático.",
    },
    starplayer: {
      name: "STARPLAYER",
      description:
        "Un reproductor de música de escritorio sin anuncios y que respeta tu privacidad, con su propio sistema de etiquetas y varias skins para elegir.",
    },
    bwm: {
      name: "BWM",
      description:
        "Marcas de agua de texto en lote para tus imágenes. Tiene versión de línea de comandos y app de escritorio, para cuando tienes una carpeta entera que proteger.",
    },
    commission: {
      name: "Calculadora de comisiones",
      description:
        "Una pequeña app de escritorio para sacar comisiones y porcentajes en segundos. Muy práctica si trabajas por tu cuenta y cotizas seguido.",
    },
    usdtoves: {
      name: "USD a VES",
      description:
        "Un convertidor de escritorio entre dólares y bolívares con la tasa oficial del BCV. Muy local, y muy útil si vives aquí.",
    },
  },
};

export type LabProject = ProjectBase & ProjectCopy;

export type LabGroup = {
  id: GroupId;
  icon: string;
  title: string;
  intro: string;
  projects: LabProject[];
};

type LabCopy = {
  pageTitle: string;
  description: string;
  heroEyebrow: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroIntro: string;
  githubButton: string;
  groups: Record<GroupId, { title: string; intro: string }>;
  codeLink: string;
  demoLink: string;
  playLink: string;
  itchLink: string;
  postLink: string;
  workbenchTitle: string;
  workbenchTitleAccent: string;
  workbenchIntro: string;
  workbench: { name: string; description: string }[];
  ctaTitle: string;
  ctaTitleAccent: string;
  ctaCopy: string;
  ctaButton: string;
  ctaSecondary: string;
};

const groupIcons: Record<GroupId, string> = {
  games: "rocket",
  retroWeb: "palette",
  tools: "code",
  desktop: "devices",
};

const en: LabCopy = {
  pageTitle: "Lab: Open Source Projects & Games | Grecia V.",
  description:
    "Open source games, retro web templates and small tools I build in my own time, with Phaser, TypeScript, Python and plain HTML and CSS.",
  heroEyebrow: "Open source & games",
  heroTitle: "The",
  heroTitleAccent: "Lab",
  heroIntro:
    "This is what I build when nobody is paying for it. Games, retro web templates and small tools that solve problems I actually had. Most of it is open source, so you can read the code, fork it or borrow the bits you like.",
  githubButton: "See everything on GitHub",
  groups: {
    games: { title: "Games", intro: "Arcade and narrative games built with Phaser." },
    retroWeb: { title: "Retro web & templates", intro: "Y2K and Frutiger Aero sites for the indie web." },
    tools: { title: "Productivity & tools", intro: "Apps I made for myself first." },
    desktop: { title: "Desktop apps", intro: "Small Python utilities that do one job well." },
  },
  codeLink: "Code",
  demoLink: "Live demo",
  playLink: "Play on itch.io",
  itchLink: "Get it on itch.io",
  postLink: "Read the story",
  workbenchTitle: "On the",
  workbenchTitleAccent: "workbench",
  workbenchIntro: "Things I'm building right now. No links yet, they'll show up here when they're ready.",
  workbench: [
    { name: "More SERPERWAVE games", description: "A couple of pixel-art arcade games set in the same universe." },
    { name: "NutriShare", description: "A community app for people who want to eat healthy together." },
    { name: "Interactive recipe book", description: "Build your own recipe collection by importing a PDF, a video link, plain text or images." },
    { name: "Retro dress-up game", description: "A pixel-art dress-up game with a Y2K soul." },
  ],
  ctaTitle: "Want something like this",
  ctaTitleAccent: "for your brand?",
  ctaCopy: "Games, interactive pages and odd little tools are my favourite kind of project. Tell me what you have in mind.",
  ctaButton: "Let's talk",
  ctaSecondary: "Browse the shop",
};

const es: LabCopy = {
  pageTitle: "Lab: proyectos open source y juegos | Grecia V.",
  description:
    "Juegos open source, plantillas web retro y pequeñas herramientas que hago en mi tiempo libre, con Phaser, TypeScript, Python y HTML y CSS puros.",
  heroEyebrow: "Open source y juegos",
  heroTitle: "El",
  heroTitleAccent: "Lab",
  heroIntro:
    "Esto es lo que construyo cuando nadie me está pagando. Juegos, plantillas web retro y pequeñas herramientas que resuelven problemas que de verdad tuve. Casi todo es open source, así que puedes leer el código, hacerle fork o llevarte lo que te sirva.",
  githubButton: "Ver todo en GitHub",
  groups: {
    games: { title: "Juegos", intro: "Juegos arcade y narrativos hechos con Phaser." },
    retroWeb: { title: "Web retro y plantillas", intro: "Sitios Y2K y Frutiger Aero para la web indie." },
    tools: { title: "Productividad y herramientas", intro: "Apps que primero hice para mí." },
    desktop: { title: "Apps de escritorio", intro: "Pequeñas utilidades en Python que hacen una sola cosa bien." },
  },
  codeLink: "Código",
  demoLink: "Demo en vivo",
  playLink: "Jugar en itch.io",
  itchLink: "Descargar en itch.io",
  postLink: "Leer la historia",
  workbenchTitle: "En el",
  workbenchTitleAccent: "taller",
  workbenchIntro: "Cosas que estoy construyendo ahora mismo. Todavía sin enlaces, aparecerán aquí cuando estén listas.",
  workbench: [
    { name: "Más juegos de SERPERWAVE", description: "Un par de juegos arcade en pixel art en el mismo universo." },
    { name: "NutriShare", description: "Una app de comunidad para quienes quieren comer sano en compañía." },
    { name: "Recetario interactivo", description: "Arma tu propia colección de recetas importando un PDF, un enlace de video, texto o imágenes." },
    { name: "Juego retro de vestir", description: "Un juego de vestir muñecas en pixel art con alma Y2K." },
  ],
  ctaTitle: "¿Quieres algo así",
  ctaTitleAccent: "para tu marca?",
  ctaCopy: "Los juegos, las páginas interactivas y las herramientas raritas son mi tipo de proyecto favorito. Cuéntame qué tienes en mente.",
  ctaButton: "Hablemos",
  ctaSecondary: "Ver la tienda",
};

export const labCopy: Record<Lang, LabCopy> = { en, es };

export function getLabGroups(lang: Lang): LabGroup[] {
  const c = labCopy[lang];
  return (Object.keys(groupIcons) as GroupId[]).map((id) => ({
    id,
    icon: groupIcons[id],
    ...c.groups[id],
    projects: projects
      .filter((p) => p.group === id)
      .map((p) => ({ ...p, ...projectCopy[lang][p.id] })),
  }));
}

export const githubProfile = GITHUB;
