import type { Lang } from "./ui";

type Pack = {
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  featured?: boolean;
};
type Capability = { name: string; description: string };
type Level = { name: string; description: string };

export type ServicesCopy = {
  pageTitle: string;
  description: string;
  sections: { branding: string; threeD: string; illustration: string; immersive: string };

  heroEyebrow: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroIntro: string;
  heroWebLead: string;
  heroWebLink: string;

  serviceLabel: (n: string) => string;
  toolsLabel: string;
  pipelineLabel: string;
  detailLabel: string;
  behanceLink: string;
  ribbon: string;

  brandingTitle: string;
  brandingTitleAccent: string;
  brandingIntro: string;
  brandingIntroStrong: [string, string, string];
  brandingTools: string[];
  brandingGalleryTitle: string;
  brandingPackages: Pack[];

  threeDTitle: string;
  threeDTitleAccent: string;
  threeDIntro: string;
  threeDIntroStrong: [string, string];
  threeDCapabilities: Capability[];
  polyLevels: Level[];
  pipeline: string[];
  threeDGalleryTitle: string;

  immersiveTitle: string;
  immersiveTitleAccent: string;
  immersiveIntro: string;
  immersiveIntroStrong: [string, string, string, string, string];
  immersiveCapabilities: Capability[];
  immersiveTools: string[];
  immersiveGalleryTitle: string;
  immersiveEmptyTitle: string;
  immersiveEmptyText: string;

  illustrationTitle: string;
  illustrationTitleAccent: string;
  illustrationIntro: string;
  illustrationIntroStrong: [string, string, string];
  illustrationCapabilities: Capability[];
  illustrationTools: string[];
  illustrationGalleryTitle: string;

  ctaTitle: string;
  ctaTitleAccent: string;
  ctaCopy: string;
  ctaButton: string;
};

const en: ServicesCopy = {
  pageTitle: "Extras | Grecia V. - Branding, 3D, Hand Drawn Illustration & Interactive Design",
  description:
    "Branding and logo design, 3D modelling and animation in Blender, hand drawn ink illustration for web and brand assets, and immersive interactive experiences. See the work behind each one.",
  sections: {
    branding: "Branding",
    threeD: "3D & Animation",
    illustration: "Illustration",
    immersive: "Interactive & Games",
  },

  heroEyebrow: "What I can build for you",
  heroTitle: "Creative",
  heroTitleAccent: "Extras",
  heroIntro:
    "Beyond websites, I help brands build the visual world around them: the identity they are recognised by, the 3D pieces that make them stand out, the hand drawn illustration nobody else has, and the interactive experiences that make people stay.",
  heroWebLead: "Looking for web design & development?",
  heroWebLink: "See my web projects →",

  serviceLabel: (n) => `Service ${n}`,
  toolsLabel: "Tools",
  pipelineLabel: "Pipeline",
  detailLabel: "Level of detail",
  behanceLink: "See it all on Behance ↗",
  ribbon: "Popular",

  brandingTitle: "Brand",
  brandingTitleAccent: "Identity",
  brandingIntro:
    "I design brand systems that hold up everywhere, from a favicon to a billboard. Depending on what you actually need, we can work on the {0}, a {1} package, or a full {2} with the rules to keep it consistent over time.",
  brandingIntroStrong: ["logo only", "complete branding", "brand manual"],
  brandingTools: ["Illustrator", "Photoshop", "Figma", "Inkscape", "Blender (3D mockups)"],
  brandingGalleryTitle: "Branding work",
  brandingPackages: [
    {
      name: "Logo Design",
      tagline: "Just the mark, done right.",
      description:
        "For brands that already know who they are and only need a memorable symbol.",
      includes: [
        "Primary logo + secondary variations",
        "Isotype / icon version",
        "Base color palette & typography",
        "Files in SVG, AI, PNG & JPG",
      ],
    },
    {
      name: "Full Branding",
      tagline: "The complete visual system.",
      featured: true,
      description:
        "Everything you need to look consistent across your website, packaging and social media.",
      includes: [
        "Everything in Logo Design",
        "Extended palette & typographic scale",
        "Patterns, textures & iconography",
        "Social media & stationery templates",
        "Presentation mockups",
      ],
    },
    {
      name: "Brand Manual",
      tagline: "The rulebook for your identity.",
      description:
        "A guidelines document so any designer, agency or printer applies your brand correctly.",
      includes: [
        "Logo usage, safe area & minimum size",
        "Correct & incorrect applications",
        "Color specs in HEX, RGB, CMYK & Pantone",
        "Typography hierarchy & tone of voice",
        "Real-world application examples",
      ],
    },
  ],

  threeDTitle: "3D Modeling &",
  threeDTitleAccent: "Animation",
  threeDIntro:
    "I model and animate everything in {0}, and finish the edit in {1}, so what you get is not a raw render, but a piece ready to publish. I model products, objects and brand mascots, in low, mid or high poly depending on where the asset needs to live.",
  threeDIntroStrong: ["Blender", "Premiere Pro or CapCut"],
  threeDCapabilities: [
    {
      name: "Products & Objects",
      description:
        "Packaging, devices, props and product shots modeled and rendered for ads, e-commerce or landing pages.",
    },
    {
      name: "Brand Mascots & Characters",
      description:
        "3D mascots that give your brand a face, modeled, textured, rigged and posed for any channel.",
    },
    {
      name: "Animation & Motion",
      description:
        "Short loops, product animations and in-app assets, rendered in Blender and edited into final deliverables.",
    },
  ],
  polyLevels: [
    {
      name: "Low poly",
      description: "Light, stylized meshes ready for the web, real-time engines and games.",
    },
    {
      name: "Mid poly",
      description: "The balance point: enough detail for marketing, still fast to load and render.",
    },
    {
      name: "High poly",
      description: "Photorealistic detail for hero renders, close-up product shots and print.",
    },
  ],
  pipeline: ["Blender · modeling", "Blender · animation & render", "Premiere Pro / CapCut · edit"],
  threeDGalleryTitle: "3D work",

  immersiveTitle: "Immersive Interactive",
  immersiveTitleAccent: "Experiences",
  immersiveIntro:
    "Mostly {0}, interfaces that are part of the world instead of a layer on top of it, but the same thinking carries into {1} and fully themed {2}. I've built {3}, a productivity app based on methods that actually work and made accessible for neurodivergent users, especially people with ADHD, not just neurotypical ones. And on {4} I build sites that behave like small games: a bootable OS simulator with draggable windows, custom-built down to the pixel for a single aesthetic, retro 00s and vaporwave.",
  immersiveIntroStrong: [
    "game design",
    "web apps",
    "interactive sites",
    "Focus Time",
    "Nekoweb",
  ],
  immersiveCapabilities: [
    {
      name: "Game UI & UX",
      description:
        "HUDs, menus, inventories and onboarding flows designed for real-time feedback and readability under pressure. Built through game jams, where a tight deadline forces every screen to be understood at a glance.",
    },
    {
      name: "Web Apps That Fit Real Brains",
      description:
        "Products like Focus Time, a productivity app built on methods that genuinely work, and designed so they work for neurodivergent people too, especially users with ADHD, instead of assuming a neurotypical default.",
    },
    {
      name: "Fully Themed Interactive Sites",
      description:
        "My Nekoweb projects behave more like small games than websites: an OS simulator you boot up, drag windows around and explore. Every pixel is custom-built for one specific aesthetic, in this case retro 00s and vaporwave.",
    },
    {
      name: "Playable Prototypes",
      description:
        "Fast, jam-style concepts built to test a mechanic or an interaction before committing to production, plus scroll-driven storytelling and micro-interactions for the web.",
    },
  ],
  immersiveTools: ["Figma", "HTML / CSS / JS", "GSAP", "Blender", "Nekoweb"],
  immersiveGalleryTitle: "Games, apps & interactive sites",
  immersiveEmptyTitle: "Game jam gallery coming soon",
  immersiveEmptyText:
    "Screens and prototypes from my game jam entries are being prepared. In the meantime, you can read about my interactive and experimental projects on the About Me page.",

  illustrationTitle: "Hand Drawn",
  illustrationTitleAccent: "Illustration",
  illustrationIntro:
    "Everything here is inked by hand on paper, then cleaned up and vectorised for the web. I draw {0} for websites, plus {1} like mascots, icon sets and section dividers, and {2} when a brand needs a face nobody else has. The reason clients keep asking for this one is simple: generated illustration all converges on the same look, so a site that leans on it ends up looking like every other site. A drawing carries a hand, and that is the part people remember.",
  illustrationIntroStrong: ["editorial pieces", "brand assets", "original characters"],
  illustrationCapabilities: [
    {
      name: "Web illustration",
      description:
        "Hero art, section headers and empty states drawn to fit your layout, then exported as SVG so they stay sharp at any size and weigh almost nothing.",
    },
    {
      name: "Brand assets",
      description:
        "Mascots, icon sets, patterns and dividers built as one family, so everything on the site reads as the same hand instead of a pile of stock.",
    },
    {
      name: "Character design",
      description:
        "Original characters from first sketch through final ink, with turnarounds and expression sheets so you can reuse them without commissioning again.",
    },
    {
      name: "Ink and shading",
      description:
        "Crosshatching, stippling and brush work for pieces that need weight and texture, the kind of detail flat generated art cannot fake.",
    },
  ],
  illustrationTools: ["Ink on paper", "Illustrator", "Photoshop", "SVG export"],
  illustrationGalleryTitle: "Selected line art",

  ctaTitle: "Not sure which one",
  ctaTitleAccent: "you need?",
  ctaCopy: "Tell me about your project and I'll recommend the right scope, no commitment.",
  ctaButton: "Start a project",
};

const es: ServicesCopy = {
  pageTitle: "Extras | Grecia V. - Branding, 3D, ilustración a mano y diseño interactivo",
  description:
    "Branding y diseño de logos, modelado y animación 3D en Blender, ilustración a tinta hecha a mano para web y recursos de marca, y experiencias interactivas inmersivas. Mira el trabajo detrás de cada uno.",
  sections: {
    branding: "Branding",
    threeD: "3D y animación",
    illustration: "Ilustración",
    immersive: "Interactivo y juegos",
  },

  heroEyebrow: "Lo que puedo construir para ti",
  heroTitle: "Extras",
  heroTitleAccent: "creativos",
  heroIntro:
    "Más allá de los sitios web, ayudo a las marcas a construir el mundo visual que las rodea: la identidad por la que se les reconoce, las piezas 3D que las hacen destacar, la ilustración hecha a mano que no se parece a la de nadie más y las experiencias interactivas que hacen que la gente se quede.",
  heroWebLead: "¿Buscas diseño y desarrollo web?",
  heroWebLink: "Mira mis proyectos web →",

  serviceLabel: (n) => `Servicio ${n}`,
  toolsLabel: "Herramientas",
  pipelineLabel: "Flujo de trabajo",
  detailLabel: "Nivel de detalle",
  behanceLink: "Ver todo en Behance ↗",
  ribbon: "Popular",

  brandingTitle: "Identidad",
  brandingTitleAccent: "de marca",
  brandingIntro:
    "Diseño sistemas de marca que funcionan en todas partes, desde un favicon hasta una valla publicitaria. Según lo que realmente necesites, podemos trabajar {0}, un paquete de {1}, o un {2} completo con las reglas para mantenerla consistente en el tiempo.",
  brandingIntroStrong: ["solo el logo", "branding completo", "manual de marca"],
  brandingTools: ["Illustrator", "Photoshop", "Figma", "Inkscape", "Blender (mockups 3D)"],
  brandingGalleryTitle: "Trabajos de branding",
  brandingPackages: [
    {
      name: "Diseño de logo",
      tagline: "Solo la marca, bien hecha.",
      description:
        "Para marcas que ya saben quiénes son y solo necesitan un símbolo memorable.",
      includes: [
        "Logo principal + variaciones secundarias",
        "Versión isotipo / ícono",
        "Paleta de color y tipografía base",
        "Archivos en SVG, AI, PNG y JPG",
      ],
    },
    {
      name: "Branding completo",
      tagline: "El sistema visual completo.",
      featured: true,
      description:
        "Todo lo que necesitas para verte consistente en tu web, tu packaging y tus redes sociales.",
      includes: [
        "Todo lo del diseño de logo",
        "Paleta ampliada y escala tipográfica",
        "Patrones, texturas e iconografía",
        "Plantillas para redes sociales y papelería",
        "Mockups de presentación",
      ],
    },
    {
      name: "Manual de marca",
      tagline: "El reglamento de tu identidad.",
      description:
        "Un documento de normas para que cualquier diseñador, agencia o imprenta aplique tu marca correctamente.",
      includes: [
        "Uso del logo, área de seguridad y tamaño mínimo",
        "Aplicaciones correctas e incorrectas",
        "Especificación de color en HEX, RGB, CMYK y Pantone",
        "Jerarquía tipográfica y tono de voz",
        "Ejemplos de aplicación en contextos reales",
      ],
    },
  ],

  threeDTitle: "Modelado y",
  threeDTitleAccent: "animación 3D",
  threeDIntro:
    "Modelo y animo todo en {0}, y termino la edición en {1}, así que lo que recibes no es un render en bruto, sino una pieza lista para publicar. Modelo productos, objetos y mascotas de marca, en low, mid o high poly según dónde tenga que vivir el recurso.",
  threeDIntroStrong: ["Blender", "Premiere Pro o CapCut"],
  threeDCapabilities: [
    {
      name: "Productos y objetos",
      description:
        "Packaging, dispositivos, props y tomas de producto modelados y renderizados para anuncios, comercio electrónico o landing pages.",
    },
    {
      name: "Mascotas y personajes de marca",
      description:
        "Mascotas 3D que le dan una cara a tu marca, modeladas, texturizadas, riggeadas y posadas para cualquier canal.",
    },
    {
      name: "Animación y motion",
      description:
        "Loops cortos, animaciones de producto y recursos para apps, renderizados en Blender y editados hasta el entregable final.",
    },
  ],
  polyLevels: [
    {
      name: "Low poly",
      description: "Mallas ligeras y estilizadas, listas para la web, motores en tiempo real y videojuegos.",
    },
    {
      name: "Mid poly",
      description: "El punto de equilibrio: suficiente detalle para marketing, y aún rápido de cargar y renderizar.",
    },
    {
      name: "High poly",
      description: "Detalle fotorrealista para renders protagonistas, primeros planos de producto e impresión.",
    },
  ],
  pipeline: ["Blender · modelado", "Blender · animación y render", "Premiere Pro / CapCut · edición"],
  threeDGalleryTitle: "Trabajos en 3D",

  immersiveTitle: "Experiencias interactivas",
  immersiveTitleAccent: "inmersivas",
  immersiveIntro:
    "Sobre todo {0}, interfaces que forman parte del mundo en vez de ser una capa encima, pero el mismo enfoque se traslada a {1} y a {2} totalmente tematizados. He construido {3}, una app de productividad basada en métodos que sí funcionan y pensada para que funcionen también para personas neurodivergentes, especialmente con TDAH, no solo para las neurotípicas. Y en {4} construyo sitios que se comportan como pequeños videojuegos: un simulador de sistema operativo que arrancas, con ventanas arrastrables, hecho al pixel para una sola estética, retro de los 2000 y vaporwave.",
  immersiveIntroStrong: [
    "diseño de videojuegos",
    "aplicaciones web",
    "sitios interactivos",
    "Focus Time",
    "Nekoweb",
  ],
  immersiveCapabilities: [
    {
      name: "UI y UX para videojuegos",
      description:
        "HUDs, menús, inventarios y flujos de onboarding diseñados para dar retroalimentación en tiempo real y leerse con claridad bajo presión. Construidos en game jams, donde el plazo ajustado obliga a que cada pantalla se entienda de un vistazo.",
    },
    {
      name: "Apps web que encajan con cerebros reales",
      description:
        "Productos como Focus Time, una app de productividad construida sobre métodos que de verdad funcionan, y diseñada para que también funcionen para personas neurodivergentes, sobre todo con TDAH, en lugar de asumir un usuario neurotípico por defecto.",
    },
    {
      name: "Sitios interactivos totalmente tematizados",
      description:
        "Mis proyectos en Nekoweb se comportan más como pequeños videojuegos que como sitios web: un simulador de sistema operativo que arrancas, con ventanas que arrastras y exploras. Cada pixel está hecho a medida para una estética concreta, en este caso retro de los 2000 y vaporwave.",
    },
    {
      name: "Prototipos jugables",
      description:
        "Conceptos rápidos, al estilo de una game jam, para probar una mecánica o una interacción antes de comprometerse con la producción, además de narrativa guiada por scroll y microinteracciones para la web.",
    },
  ],
  immersiveTools: ["Figma", "HTML / CSS / JS", "GSAP", "Blender", "Nekoweb"],
  immersiveGalleryTitle: "Juegos, apps y sitios interactivos",
  immersiveEmptyTitle: "Galería de game jams en camino",
  immersiveEmptyText:
    "Estoy preparando pantallas y prototipos de mis participaciones en game jams. Mientras tanto, puedes leer sobre mis proyectos interactivos y experimentales en la página Sobre mí.",

  illustrationTitle: "Ilustración",
  illustrationTitleAccent: "a mano",
  illustrationIntro:
    "Todo esto está entintado a mano sobre papel y después limpiado y vectorizado para web. Dibujo {0} para sitios, {1} como mascotas, sets de iconos y separadores de sección, y {2} cuando una marca necesita una cara que no tenga nadie más. El motivo por el que este servicio se pide tanto es simple: la ilustración generada converge toda en el mismo aspecto, así que una web que se apoya en ella termina pareciéndose a todas las demás. Un dibujo lleva una mano detrás, y eso es lo que la gente recuerda.",
  illustrationIntroStrong: ["piezas editoriales", "recursos de marca", "personajes originales"],
  illustrationCapabilities: [
    {
      name: "Ilustración web",
      description:
        "Piezas principales, cabeceras de sección y estados vacíos dibujados a la medida de tu maquetado, exportados en SVG para que se vean nítidos a cualquier tamaño y no pesen casi nada.",
    },
    {
      name: "Recursos de marca",
      description:
        "Mascotas, sets de iconos, patrones y separadores construidos como una misma familia, para que todo lo que pongas en el sitio se lea como la misma mano y no como un montón de banco de imágenes.",
    },
    {
      name: "Diseño de personajes",
      description:
        "Personajes originales desde el primer boceto hasta la tinta final, con turnaround y hoja de expresiones para que puedas reutilizarlos sin volver a encargar ilustración.",
    },
    {
      name: "Tinta y sombreado",
      description:
        "Tramado cruzado, puntillismo y trabajo de pincel para piezas que necesitan peso y textura, ese tipo de detalle que la ilustración generada plana no consigue fingir.",
    },
  ],
  illustrationTools: ["Tinta sobre papel", "Illustrator", "Photoshop", "Exportación SVG"],
  illustrationGalleryTitle: "Line art seleccionado",

  ctaTitle: "¿No sabes cuál",
  ctaTitleAccent: "necesitas?",
  ctaCopy: "Cuéntame sobre tu proyecto y te recomiendo el alcance adecuado, sin compromiso.",
  ctaButton: "Empezar un proyecto",
};

export const servicesCopy: Record<Lang, ServicesCopy> = { en, es };
