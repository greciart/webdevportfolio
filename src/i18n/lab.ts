import type { Lang } from "./ui";

/**
 * Side projects (formerly "the Lab", still lab.ts inside the code): open source and personal projects, mirrored from the GitHub profile
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
  /** Preview file name in src/assets/lab, without extension. Descriptive, because it ends up in the image URL. */
  file: string;
};

/** `alt` describes the cover image; the carousel extras reuse it as "view 2", "view 3". */
type ProjectCopy = { name: string; description: string; alt: string };

const projects: ProjectBase[] = [
  { id: "peso-del-si", file: "el-peso-del-si-visual-novel-phaser", group: "games", stack: ["Phaser", "HTML5"], repos: [], itch: `${ITCH}/el-peso-del-si` },
  { id: "serperwave", file: "serperwave-vaporwave-snake-game", group: "games", stack: ["TypeScript", "Phaser 3"], repos: [{ label: "serperwave", url: `${GITHUB}/serperwave` }], itch: `${ITCH}/serperwave`, post: "/blog/posts/serperwave-vaporwave-snake-game-phaser" },
  { id: "aqua-blog", file: "aqua-frutiger-aero-blog-template", group: "retroWeb", stack: ["HTML", "CSS", "JavaScript"], repos: [{ label: "aqua-frutiger-aero-blog", url: `${GITHUB}/aqua-frutiger-aero-blog` }], demo: "https://aquafrutiger.netlify.app/" },
  { id: "purple-aero", file: "purple-frutiger-aero-website-template", group: "retroWeb", stack: ["HTML", "CSS"], repos: [{ label: "purple-frutigeraero", url: `${GITHUB}/purple-frutigeraero` }] },
  { id: "focus-time", file: "focus-time-adhd-productivity-app", group: "tools", stack: ["TypeScript"], repos: [{ label: "focus-time", url: `${GITHUB}/focus-time` }], demo: "https://focustimeisnow.netlify.app/", post: "/blog/posts/focus-time-gamified-adhd-productivity-app" },
  { id: "commonplace", file: "digital-commonplace-book-tracker", group: "tools", stack: ["HTML", "CSS", "JavaScript"], repos: [{ label: "commonplacebook", url: `${GITHUB}/commonplacebook` }], demo: "https://starmoon.nekoweb.org/commonplace_book.html", post: "/blog/posts/blog-post-commonplace" },
  { id: "starplayer", file: "starplayer-ad-free-music-player", group: "tools", stack: ["TypeScript", "Desktop"], repos: [{ label: "STARPLAYER", url: `${GITHUB}/STARPLAYER` }], post: "/blog/posts/starplayer-ad-free-music-player-desktop" },
  { id: "bwm", file: "bwm-bulk-watermark-maker", group: "desktop", stack: ["Python"], repos: [{ label: "BWM (CLI)", url: `${GITHUB}/BWM` }, { label: "BWM-GUI", url: `${GITHUB}/BWM-GUI` }], itch: `${ITCH}/bulk-watermark-maker` },
  { id: "commission", file: "commission-calculator-desktop-app", group: "desktop", stack: ["Python"], repos: [{ label: "commissioncalculador", url: `${GITHUB}/commissioncalculador` }] },
  { id: "usdtoves", file: "usd-to-ves-bcv-converter", group: "desktop", stack: ["Python"], repos: [{ label: "usdtoves", url: `${GITHUB}/usdtoves` }] },
];

const projectCopy: Record<Lang, Record<string, ProjectCopy>> = {
  en: {
    serperwave: {
      name: "SERPERWAVE",
      description:
        "The snake game you grew up with, reimagined as a nostalgic 90s vaporwave arcade: 13 neon levels, mystery-box loot, CRT glow and two retro soundtracks. Free to play in your browser.",
      alt: "SERPERWAVE title screen: a vaporwave snake game with a neon synthwave sun, pink glitch logo and screenshots of its neon levels",
    },
    "peso-del-si": {
      name: "El Peso del Sí",
      description:
        "A short, emotional visual novel I made with Zim Yi in Phaser. It's finished and released, and it plays right in your browser.",
      alt: "El Peso del Sí cover art: a tired curly-haired girl surrounded by to-do lists, files and chat notifications, a visual novel about learning to say no",
    },
    "aqua-blog": {
      name: "Aqua Blog",
      description:
        "A Frutiger Aero / Y2K blog template in plain HTML, CSS and JavaScript, made for Nekoweb and Neocities. It's also a free download in my shop.",
      alt: "Aqua Blog, a free blue Frutiger Aero Y2K blog template with glossy tabs, bubble backgrounds, post cards and an about me sidebar",
    },
    "purple-aero": {
      name: "Purple Frutiger Aero",
      description:
        "A purple Frutiger Aero static site template, with the same indie web spirit as Aqua Blog and nothing generic about it.",
      alt: "Purple Frutiger Aero retro blog template with a glossy violet header, MSN-style avatar, blog post cards and a now playing widget",
    },
    "focus-time": {
      name: "Focus Time",
      description:
        "A pixel-art productivity app built around focused work sessions, with a bit of game in it so you actually want to come back.",
      alt: "FOCUS TIME welcome window in a pink retro pixel style, the start of a free gamified productivity app for ADHD",
    },
    commonplace: {
      name: "Commonplace Book",
      description:
        "A digital notebook and tracker for the books, games and movies I consume, so I do it on purpose instead of on autopilot.",
      alt: "Digital commonplace book library in a retro vaporwave interface, with a grid of read book covers, star ratings and page counts",
    },
    starplayer: {
      name: "STARPLAYER",
      description:
        "An ad-free, privacy-first desktop music player with its own tagging system and several skins to choose from.",
      alt: "STARPLAYER ad-free desktop music player in three skins: a purple glass song list, a retro pixel album grid and a soft glass now playing screen",
    },
    bwm: {
      name: "BWM",
      description:
        "Batch text watermarks for your images. There's a command line version and a desktop app, for when you have a whole folder to protect.",
      alt: "BWM free bulk image watermark maker: the desktop app settings, a process completed dialog and the command line version",
    },
    commission: {
      name: "Commission Calculator",
      description:
        "A small desktop app for working out commissions and percentages in seconds. Handy if you freelance and quote often.",
      alt: "Commission and percentage calculator desktop app calculating 20% of 1500 and showing the amount to subtract and the final value",
    },
    usdtoves: {
      name: "USD to VES",
      description:
        "A desktop converter between US dollars and Venezuelan bolívars using the official BCV rate. Very local, very useful if you live here.",
      alt: "USD to VES currency converter desktop app with buttons to convert dollars to bolívars and check today's BCV rate",
    },
  },
  es: {
    serperwave: {
      name: "SERPERWAVE",
      description:
        "El juego de la viborita con el que crecimos, reimaginado como un arcade vaporwave nostálgico de los 90: 13 niveles neón, cajas misteriosas, brillo CRT y dos bandas sonoras retro. Gratis en el navegador.",
      alt: "Pantalla de título de SERPERWAVE: un juego de la viborita vaporwave con un sol synthwave neón, logo rosa con glitch y capturas de sus niveles neón",
    },
    "peso-del-si": {
      name: "El Peso del Sí",
      description:
        "Una novela visual corta y emotiva que hice junto a Zim Yi en Phaser. Está terminada y publicada, y se juega directo en el navegador.",
      alt: "Portada de El Peso del Sí: una chica cansada de pelo rizado rodeada de listas de pendientes, archivos y notificaciones, una novela visual sobre aprender a decir que no",
    },
    "aqua-blog": {
      name: "Aqua Blog",
      description:
        "Una plantilla de blog Frutiger Aero / Y2K en HTML, CSS y JavaScript puros, hecha para Nekoweb y Neocities. También la puedes descargar gratis en mi tienda.",
      alt: "Aqua Blog, plantilla gratis de blog Frutiger Aero Y2K en azul con pestañas brillantes, fondo de burbujas, tarjetas de posts y barra lateral de perfil",
    },
    "purple-aero": {
      name: "Purple Frutiger Aero",
      description:
        "Una plantilla de sitio estático Frutiger Aero en morado, con el mismo espíritu de web indie que Aqua Blog y nada de genérica.",
      alt: "Plantilla de blog retro Purple Frutiger Aero con cabecera violeta brillante, avatar estilo MSN, tarjetas de posts y widget de música",
    },
    "focus-time": {
      name: "Focus Time",
      description:
        "Una app de productividad en pixel art construida alrededor de sesiones de trabajo enfocado, con un toque de juego para que de verdad quieras volver.",
      alt: "Ventana de bienvenida de FOCUS TIME en estilo pixel retro rosa, el inicio de una app de productividad gamificada y gratis para TDAH",
    },
    commonplace: {
      name: "Commonplace Book",
      description:
        "Un cuaderno digital y tracker de los libros, juegos y películas que consumo, para hacerlo a conciencia y no en piloto automático.",
      alt: "Biblioteca de un commonplace book digital con interfaz retro vaporwave, con una cuadrícula de portadas de libros leídos, estrellas y número de páginas",
    },
    starplayer: {
      name: "STARPLAYER",
      description:
        "Un reproductor de música de escritorio sin anuncios y que respeta tu privacidad, con su propio sistema de etiquetas y varias skins para elegir.",
      alt: "Reproductor de música de escritorio STARPLAYER, sin anuncios, en tres skins: lista de canciones en cristal morado, cuadrícula de portadas en pixel retro y pantalla de reproducción en cristal suave",
    },
    bwm: {
      name: "BWM",
      description:
        "Marcas de agua de texto en lote para tus imágenes. Tiene versión de línea de comandos y app de escritorio, para cuando tienes una carpeta entera que proteger.",
      alt: "BWM, generador gratis de marcas de agua en lote: ajustes de la app de escritorio, aviso de proceso completado y la versión de línea de comandos",
    },
    commission: {
      name: "Calculadora de comisiones",
      description:
        "Una pequeña app de escritorio para sacar comisiones y porcentajes en segundos. Muy práctica si trabajas por tu cuenta y cotizas seguido.",
      alt: "App de escritorio calculadora de comisiones y porcentajes calculando el 20% de 1500, con el valor a restar y el valor final",
    },
    usdtoves: {
      name: "USD a VES",
      description:
        "Un convertidor de escritorio entre dólares y bolívares con la tasa oficial del BCV. Muy local, y muy útil si vives aquí.",
      alt: "App de escritorio convertidor de USD a VES con botones para convertir dólares a bolívares y ver la tasa BCV del día",
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

// Key order is the order the groups show up on the page.
const groupIcons: Record<GroupId, string> = {
  tools: "code",
  games: "rocket",
  retroWeb: "palette",
  desktop: "devices",
};

const en: LabCopy = {
  pageTitle: "Side Projects: Open Source Apps, Games & Tools | Grecia V.",
  description:
    "My side projects: open source games, apps, retro web templates and small tools I build in my own time, with Phaser, TypeScript, Python and plain HTML and CSS.",
  heroEyebrow: "Open source & games",
  heroTitle: "Open source apps, games & tools:",
  heroTitleAccent: "my side projects",
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
  pageTitle: "Proyectos personales: apps y juegos open source | Grecia V.",
  description:
    "Mis proyectos personales: juegos, apps, plantillas web retro y pequeñas herramientas open source que hago en mi tiempo libre, con Phaser, TypeScript, Python y HTML y CSS puros.",
  heroEyebrow: "Open source y juegos",
  heroTitle: "Apps, juegos y herramientas open source:",
  heroTitleAccent: "mis proyectos personales",
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
