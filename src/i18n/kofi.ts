import type { ImageMetadata } from "astro";
import type { Lang } from "./ui";

// Covers live in src/assets so <Image> resizes them and serves webp under a
// descriptive, crawlable filename on this domain.
import y2kBlogNoCode from "../assets/shop/y2k-retro-blog-template-no-code.png";
import aquaBlog from "../assets/shop/aqua-frutiger-aero-blog-template-free.png";
import purpleBlog from "../assets/shop/purple-kawaii-y2k-blog-template-free.png";
import bioLink from "../assets/shop/frutiger-aero-bio-link-template.png";
import xpLinks from "../assets/shop/windows-xp-y2k-links-page-template.png";
import neonOrb from "../assets/shop/glowing-neon-orb-free-3d-model-blender.jpg";
import magicSpheres from "../assets/shop/floating-magic-spheres-galaxy-free-3d-model.jpg";
import pinkGem from "../assets/shop/pink-crystal-gem-low-poly-free-3d-model.jpg";
import smartphoneUi from "../assets/shop/stylized-smartphone-social-media-ui-free-3d-model.jpg";

/**
 * Templates sold (and given away) on Ko-fi, plus the free 3D models on
 * RenderHub. Payment and download happen on those stores; `price: 0` marks a
 * freebie, which lands on the Freebies page instead of Templates.
 */
type Store = "kofi" | "renderhub";

const storeUrl: Record<Store, (ref: string) => string> = {
  kofi: (ref) => `https://ko-fi.com/s/${ref}`,
  renderhub: (ref) => `https://www.renderhub.com/gvart/${ref}`,
};

type KofiBase = {
  id: string;
  store: Store;
  kind: "template" | "model";
  /** The item's id on its store: the Ko-fi shop id or the RenderHub slug. */
  ref: string;
  price: number;
  image: ImageMetadata;
  demo?: string;
  /** Id of the paid or free sibling, when one is the other's easier version. */
  sibling?: string;
};

type KofiCopy = {
  name: string;
  blurb: string;
  alt: string;
  features: string[];
  bestFor: string;
};

const items: KofiBase[] = [
  { id: "y2k-blog-nocode", store: "kofi", kind: "template", ref: "c85b39c455", price: 12.99, image: y2kBlogNoCode, sibling: "purple-blog" },
  { id: "bio-link", store: "kofi", kind: "template", ref: "c50cd32930", price: 14.99, image: bioLink },
  { id: "xp-links", store: "kofi", kind: "template", ref: "9368c014f7", price: 10, image: xpLinks },
  { id: "aqua-blog", store: "kofi", kind: "template", ref: "df52250b4a", price: 0, image: aquaBlog, demo: "https://aquafrutiger.netlify.app/" },
  { id: "purple-blog", store: "kofi", kind: "template", ref: "85c0e669bc", price: 0, image: purpleBlog, sibling: "y2k-blog-nocode" },
  { id: "neon-orb", store: "renderhub", kind: "model", ref: "abstract-floating-sphere", price: 0, image: neonOrb },
  { id: "magic-spheres", store: "renderhub", kind: "model", ref: "floating-magic-spheres-galaxy-and-stars-reflected", price: 0, image: magicSpheres },
  { id: "pink-gem", store: "renderhub", kind: "model", ref: "pink-crystal-gem-rpg-style-low-poly-3d-model", price: 0, image: pinkGem },
  { id: "smartphone-ui", store: "renderhub", kind: "model", ref: "youtube-interface-user-mobile-ui-ux-model", price: 0, image: smartphoneUi },
];

const copy: Record<Lang, Record<string, KofiCopy>> = {
  en: {
    "y2k-blog-nocode": {
      name: "Y2K Retro Blog, No-Code Edition",
      blurb:
        "The beginner-friendly version of my purple Y2K blog. No scripts to set up and no tools to install: swap the text and images, upload, and you have a cute blog that works.",
      alt: "Purple kawaii Y2K retro blog template with tabs and a sidebar, inspired by early 2000s Windows",
      features: [
        "Tabs for blog, art, diary, music and links",
        "Pagination that builds itself as you add posts",
        "Step-by-step guides included",
      ],
      bestFor: "Total beginners who want a working blog today",
    },
    "bio-link": {
      name: "Frutiger Aero Personal Site",
      blurb:
        "A dreamy personal site with soft glassmorphism, glossy gradients and floating bubbles. Think of it as a Carrd-style page with a lot more personality.",
      alt: "Frutiger Aero personal website template with glassmorphism panels and floating bubbles",
      features: [
        "Multiple tabs, music support and image popups",
        "Social links and two languages built in",
        "Easy customization guide for non-coders",
      ],
      bestFor: "Artists, streamers, VTubers and musicians",
    },
    "xp-links": {
      name: "Windows XP Y2K Links Page",
      blurb:
        "A links page dressed as a Windows XP window, for when Linktree feels too plain. One .html file, no frameworks and no build tools.",
      alt: "Retro Y2K links page template styled like a Windows XP browser window with a profile card",
      features: [
        "Profile card with avatar, tags and online badge",
        "Customizable stats bar",
        "Works on Neocities, Nekoweb, GitHub Pages or Carrd",
      ],
      bestFor: "Creators who want a cute alternative to Linktree",
    },
    "aqua-blog": {
      name: "Aqua Blog, Frutiger Aero Template",
      blurb:
        "The blue-green glass of Windows Vista and MSN Messenger, as a blog. Tabs, music player, lightbox and floating bubbles all work out of the box.",
      alt: "Aqua Frutiger Aero Y2K blog template with blue-green glassmorphism and floating bubbles",
      features: [
        "Plain HTML, CSS and JavaScript",
        "Guide for posts, Nekoweb .shtml and RSS",
        "Mobile layout included",
      ],
      bestFor: "Nekoweb and Neocities sites",
    },
    "purple-blog": {
      name: "Purple Kawaii Y2K Blog Template",
      blurb:
        "The purple, kawaii side of the same idea, inspired by early 2000s Windows and MSN. The shell works out of the box and the included guide walks you through adding posts.",
      alt: "Purple kawaii Y2K blog template inspired by early 2000s Windows and MSN Messenger",
      features: [
        "Tabs, music player and image lightbox",
        "Automation scripts and RSS guide",
        "Mobile layout included",
      ],
      bestFor: "People who don't mind editing a bit of code",
    },
    "neon-orb": {
      name: "Glowing Neon Orb",
      blurb:
        "An abstract sci-fi orb that glows like it's plugged into something. A quick way to add a focal point to a futuristic scene.",
      alt: "Glowing neon orb free 3D model, an abstract sci-fi prop for Blender",
      features: ["Free Blender 3D model", "Glowing neon look"],
      bestFor: "Sci-fi and abstract scenes",
    },
    "magic-spheres": {
      name: "Floating Magic Spheres",
      blurb:
        "Floating spheres with a galaxy and stars reflected on their surface. Dreamy, a little magical, and free.",
      alt: "Free 3D model of floating magic spheres reflecting a galaxy and stars",
      features: ["Free 3D model", "Galaxy and stars in the reflections"],
      bestFor: "Fantasy, space and dreamy renders",
    },
    "pink-gem": {
      name: "Pink Crystal Gem",
      blurb:
        "A stylized pink crystal in low poly, the kind you'd pick up in an RPG. Light enough to drop into any scene.",
      alt: "Pink crystal gem free 3D model in low poly, stylized fantasy RPG style",
      features: ["Free low poly 3D model", "Stylized fantasy RPG look"],
      bestFor: "Games, loot icons and fantasy props",
    },
    "smartphone-ui": {
      name: "Stylized Smartphone & Social Media UI",
      blurb:
        "A stylized phone with a social media interface on screen. Handy for tech scenes, app promos and social media mockups.",
      alt: "Free 3D model of a stylized smartphone showing a social media user interface",
      features: ["Free 3D tech prop for Blender", "Phone and app UI in one model"],
      bestFor: "Tech, app and social media scenes",
    },
  },
  es: {
    "y2k-blog-nocode": {
      name: "Blog retro Y2K, edición sin código",
      blurb:
        "La versión para principiantes de mi blog Y2K morado. Sin scripts que configurar ni programas que instalar: cambias los textos y las imágenes, lo subes y ya tienes un blog bonito que funciona.",
      alt: "Plantilla de blog retro Y2K morada y kawaii con pestañas y barra lateral, inspirada en el Windows de principios de los 2000",
      features: [
        "Pestañas para blog, arte, diario, música y enlaces",
        "Paginación que se arma sola a medida que publicas",
        "Guías paso a paso incluidas",
      ],
      bestFor: "Principiantes que quieren un blog funcionando hoy mismo",
    },
    "bio-link": {
      name: "Sitio personal Frutiger Aero",
      blurb:
        "Un sitio personal soñador, con glassmorphism suave, degradados brillantes y burbujas flotando. Piensa en una página tipo Carrd, pero con mucha más personalidad.",
      alt: "Plantilla de sitio web personal Frutiger Aero con paneles de glassmorphism y burbujas flotantes",
      features: [
        "Varias pestañas, música y ventanas de imagen",
        "Enlaces a redes y dos idiomas incluidos",
        "Guía de personalización para quien no programa",
      ],
      bestFor: "Artistas, streamers, VTubers y músicos",
    },
    "xp-links": {
      name: "Página de enlaces Y2K estilo Windows XP",
      blurb:
        "Una página de enlaces vestida de ventana de Windows XP, para cuando Linktree se queda corto. Un solo archivo .html, sin frameworks ni herramientas de build.",
      alt: "Plantilla de página de enlaces retro Y2K con estilo de ventana de Windows XP y tarjeta de perfil",
      features: [
        "Tarjeta de perfil con avatar, etiquetas e indicador en línea",
        "Barra de estadísticas personalizable",
        "Funciona en Neocities, Nekoweb, GitHub Pages o Carrd",
      ],
      bestFor: "Creadores que quieren una alternativa bonita a Linktree",
    },
    "aqua-blog": {
      name: "Aqua Blog, plantilla Frutiger Aero",
      blurb:
        "El vidrio azul verdoso de Windows Vista y MSN Messenger, convertido en blog. Las pestañas, el reproductor, el lightbox y las burbujas funcionan desde el primer momento.",
      alt: "Plantilla de blog Aqua Frutiger Aero Y2K con glassmorphism azul verdoso y burbujas flotantes",
      features: [
        "HTML, CSS y JavaScript puros",
        "Guía para posts, .shtml de Nekoweb y RSS",
        "Diseño adaptado a móvil",
      ],
      bestFor: "Sitios en Nekoweb y Neocities",
    },
    "purple-blog": {
      name: "Plantilla de blog Y2K morada y kawaii",
      blurb:
        "El lado morado y kawaii de la misma idea, inspirado en el Windows y el MSN de principios de los 2000. La estructura funciona de entrada y la guía incluida te enseña a añadir posts.",
      alt: "Plantilla de blog Y2K morada y kawaii inspirada en Windows y MSN Messenger de principios de los 2000",
      features: [
        "Pestañas, reproductor de música y lightbox",
        "Guía de scripts de automatización y RSS",
        "Diseño adaptado a móvil",
      ],
      bestFor: "Quien no tiene problema en editar un poco de código",
    },
    "neon-orb": {
      name: "Orbe de neón brillante",
      blurb:
        "Un orbe abstracto sci-fi que brilla como si estuviera enchufado a algo. Una forma rápida de darle un punto focal a una escena futurista.",
      alt: "Modelo 3D gratis de un orbe de neón brillante, prop abstracto sci-fi para Blender",
      features: ["Modelo 3D gratis para Blender", "Acabado de neón brillante"],
      bestFor: "Escenas sci-fi y abstractas",
    },
    "magic-spheres": {
      name: "Esferas mágicas flotantes",
      blurb:
        "Esferas flotando con una galaxia y estrellas reflejadas en su superficie. Soñadoras, un poco mágicas y gratis.",
      alt: "Modelo 3D gratis de esferas mágicas flotantes que reflejan una galaxia y estrellas",
      features: ["Modelo 3D gratis", "Galaxia y estrellas en los reflejos"],
      bestFor: "Renders de fantasía, espacio y ambientes soñadores",
    },
    "pink-gem": {
      name: "Gema de cristal rosa",
      blurb:
        "Un cristal rosa estilizado en low poly, de esos que recoges en un RPG. Lo bastante ligero para meterlo en cualquier escena.",
      alt: "Modelo 3D gratis de una gema de cristal rosa low poly, estilo RPG de fantasía",
      features: ["Modelo 3D low poly gratis", "Estilo RPG de fantasía"],
      bestFor: "Juegos, íconos de botín y props de fantasía",
    },
    "smartphone-ui": {
      name: "Smartphone estilizado con interfaz de redes",
      blurb:
        "Un teléfono estilizado con una interfaz de red social en pantalla. Útil para escenas tech, promos de apps y mockups de redes sociales.",
      alt: "Modelo 3D gratis de un smartphone estilizado con interfaz de red social",
      features: ["Prop 3D tech gratis para Blender", "Teléfono e interfaz en un solo modelo"],
      bestFor: "Escenas de tecnología, apps y redes sociales",
    },
  },
};

export type KofiItem = KofiBase & KofiCopy & { url: string; siblingItem?: { name: string; url: string; free: boolean } };

function build(lang: Lang): KofiItem[] {
  return items.map((item) => {
    const sibling = item.sibling ? items.find((i) => i.id === item.sibling) : undefined;
    return {
      ...item,
      ...copy[lang][item.id],
      url: storeUrl[item.store](item.ref),
      siblingItem: sibling && {
        name: copy[lang][sibling.id].name,
        url: storeUrl[sibling.store](sibling.ref),
        free: sibling.price === 0,
      },
    };
  });
}

export const getPaidTemplates = (lang: Lang) => build(lang).filter((i) => i.price > 0);
export const getFreebies = (lang: Lang) => build(lang).filter((i) => i.price === 0);

/** Labels shared by the Templates and Freebies pages and the product card. */
export const kofiLabels: Record<
  Lang,
  {
    free: string;
    buy: string;
    buyAria: string;
    download: string;
    downloadAria: string;
    downloadRenderhub: string;
    downloadRenderhubAria: string;
    kind: Record<"template" | "model", string>;
    demo: string;
    bestFor: string;
    siblingPaid: string;
    siblingFree: string;
    backToShop: string;
  }
> = {
  en: {
    free: "Free",
    buy: "Buy on Ko-fi",
    buyAria: "Buy {name} on Ko-fi",
    download: "Download on Ko-fi",
    downloadAria: "Download {name} for free on Ko-fi",
    downloadRenderhub: "Download on RenderHub",
    downloadRenderhubAria: "Download the free 3D model {name} on RenderHub",
    kind: { template: "Template", model: "3D model" },
    demo: "Live demo",
    bestFor: "Best for",
    siblingPaid: "Want it ready with zero setup? Get the no-code edition",
    siblingFree: "Comfortable with a bit of code? There's a free version",
    backToShop: "Back to the shop",
  },
  es: {
    free: "Gratis",
    buy: "Comprar en Ko-fi",
    buyAria: "Comprar {name} en Ko-fi",
    download: "Descargar en Ko-fi",
    downloadAria: "Descargar {name} gratis en Ko-fi",
    downloadRenderhub: "Descargar en RenderHub",
    downloadRenderhubAria: "Descargar gratis el modelo 3D {name} en RenderHub",
    kind: { template: "Plantilla", model: "Modelo 3D" },
    demo: "Demo en vivo",
    bestFor: "Ideal para",
    siblingPaid: "¿La quieres lista sin configurar nada? Llévate la edición sin código",
    siblingFree: "¿Te manejas con un poco de código? Hay una versión gratis",
    backToShop: "Volver a la tienda",
  },
};

type PageCopy = {
  pageTitle: string;
  description: string;
  heroEyebrow: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroIntro: string;
  heroNote: string;
  faq: { question: string; answer: string }[];
  faqTitle: string;
  faqTitleAccent: string;
};

export const templatesCopy: Record<Lang, PageCopy> = {
  en: {
    pageTitle: "Y2K & Frutiger Aero Website Templates | Grecia V.",
    description:
      "Ready-to-use Y2K, Frutiger Aero and Windows XP website templates in plain HTML, CSS and JavaScript. Edit the text, upload, done.",
    heroEyebrow: "Shop · Templates",
    heroTitle: "Website",
    heroTitleAccent: "templates",
    heroIntro:
      "Nostalgic, non-generic sites for the indie web: blogs, personal pages and link pages with a Y2K and Frutiger Aero soul. Plain HTML, CSS and JavaScript, so they run anywhere and you're never locked into a platform.",
    heroNote:
      "Checkout happens on Ko-fi. Each button takes you to the template there, where you pay and download the files. More templates are on the way.",
    faqTitle: "Before you",
    faqTitleAccent: "buy",
    faq: [
      {
        question: "Do I need to know how to code?",
        answer:
          "No. Every paid template comes with a plain-text guide, and the no-code edition of the Y2K blog is made exactly for people who have never opened an HTML file.",
      },
      {
        question: "Where can I host them?",
        answer:
          "Anywhere that serves static files: Neocities, Nekoweb, GitHub Pages, Netlify, Carrd or your own hosting. There's no build step and no database.",
      },
      {
        question: "Can you customize one for me?",
        answer:
          "Yes. If you want extras, like taking payments or showing the song you're listening to, write to me and I'll tell you what it takes.",
      },
    ],
  },
  es: {
    pageTitle: "Plantillas web Y2K y Frutiger Aero | Grecia V.",
    description:
      "Plantillas web Y2K, Frutiger Aero y estilo Windows XP listas para usar, en HTML, CSS y JavaScript puros. Cambias el texto, subes y listo.",
    heroEyebrow: "Tienda · Plantillas",
    heroTitle: "Plantillas",
    heroTitleAccent: "web",
    heroIntro:
      "Sitios nostálgicos y nada genéricos para la web indie: blogs, páginas personales y páginas de enlaces con alma Y2K y Frutiger Aero. En HTML, CSS y JavaScript puros, así que corren en cualquier lado y nunca dependes de una plataforma.",
    heroNote:
      "El pago se hace en Ko-fi. Cada botón te lleva a la plantilla allí, donde pagas y descargas los archivos. Vienen más plantillas en camino.",
    faqTitle: "Antes de",
    faqTitleAccent: "comprar",
    faq: [
      {
        question: "¿Necesito saber programar?",
        answer:
          "No. Todas las plantillas de pago traen una guía en texto plano, y la edición sin código del blog Y2K está hecha justo para quien nunca ha abierto un archivo HTML.",
      },
      {
        question: "¿Dónde las puedo alojar?",
        answer:
          "En cualquier sitio que sirva archivos estáticos: Neocities, Nekoweb, GitHub Pages, Netlify, Carrd o tu propio hosting. No hay paso de build ni base de datos.",
      },
      {
        question: "¿Me puedes personalizar una?",
        answer:
          "Sí. Si quieres extras, como cobrar pagos o mostrar la canción que estás escuchando, escríbeme y te digo lo que implica.",
      },
    ],
  },
};

export const freebiesCopy: Record<Lang, PageCopy> = {
  en: {
    pageTitle: "Free Y2K Templates & Free 3D Models | Grecia V.",
    description:
      "Free Frutiger Aero and Y2K blog templates in plain HTML, CSS and JavaScript, plus free 3D models for Blender. Made by hand, free to download.",
    heroEyebrow: "Shop · Freebies",
    heroTitle: "Free",
    heroTitleAccent: "downloads",
    heroIntro:
      "Blog templates and 3D models I made and want people to use. They're complete and they work, not watered-down demos. Download them, edit them, make them yours.",
    heroNote:
      "Templates download from Ko-fi and 3D models from RenderHub. Both are free, and if one saves you a weekend, a tip on Ko-fi is always appreciated.",
    faqTitle: "Good to",
    faqTitleAccent: "know",
    faq: [
      {
        question: "Are they really free?",
        answer:
          "Yes. Ko-fi lets you add a tip if you want to, but you don't have to pay anything to download. RenderHub may ask you to sign in before the download starts.",
      },
      {
        question: "What's the difference with the paid templates?",
        answer:
          "The free ones expect you to edit a little code to start posting, following the included guide. The paid no-code edition does that part for you.",
      },
    ],
  },
  es: {
    pageTitle: "Plantillas Y2K y modelos 3D gratis | Grecia V.",
    description:
      "Plantillas de blog Frutiger Aero y Y2K gratis en HTML, CSS y JavaScript puros, más modelos 3D gratis para Blender. Hechos a mano, gratis para descargar.",
    heroEyebrow: "Tienda · Gratis",
    heroTitle: "Descargas",
    heroTitleAccent: "gratis",
    heroIntro:
      "Plantillas de blog y modelos 3D que hice y quiero que la gente use. Están completos y funcionan, no son demos recortadas. Descárgalos, edítalos y hazlos tuyos.",
    heroNote:
      "Las plantillas se descargan en Ko-fi y los modelos 3D en RenderHub. Las dos cosas son gratis, y si alguna te ahorra un fin de semana, una propina en Ko-fi siempre se agradece.",
    faqTitle: "Bueno",
    faqTitleAccent: "saberlo",
    faq: [
      {
        question: "¿De verdad son gratis?",
        answer:
          "Sí. Ko-fi te deja dejar una propina si quieres, pero no tienes que pagar nada para descargarlas. RenderHub puede pedirte que inicies sesión antes de la descarga.",
      },
      {
        question: "¿Qué diferencia hay con las plantillas de pago?",
        answer:
          "Las gratis esperan que edites un poco de código para empezar a publicar, siguiendo la guía incluida. La edición de pago sin código hace esa parte por ti.",
      },
    ],
  },
};
