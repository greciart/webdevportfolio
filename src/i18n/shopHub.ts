import type { Lang } from "./ui";

type Section = { title: string; description: string; cta: string; countLabel: string };

type ShopHubCopy = {
  pageTitle: string;
  description: string;
  heroEyebrow: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroIntro: string;
  heroNote: string;
  sections: { models: Section; templates: Section; freebies: Section };
  ctaTitle: string;
  ctaTitleAccent: string;
  ctaCopy: string;
  ctaButton: string;
  ctaSecondary: string;
};

const en: ShopHubCopy = {
  pageTitle: "Shop: 3D Models, Website Templates & Freebies | Grecia V.",
  description:
    "Hand-made 3D models for Blender, Y2K and Frutiger Aero website templates, and free downloads, all made by a web designer and 3D artist.",
  heroEyebrow: "Shop",
  heroTitle: "3D models, website templates &",
  heroTitleAccent: "freebies, made by hand",
  heroIntro:
    "The same craft I put into client work, packed so you can use it today. 3D models, website templates and a few things I give away for free. Everything here is made by me, by hand.",
  heroNote:
    "I don't run a checkout on this site. Each product links to where it's sold, Contra for 3D models and Ko-fi for templates, and you pay and download there.",
  sections: {
    models: {
      title: "3D models",
      description:
        "Animated neon loops, cute stylized props and everyday objects. Native Blender files, ready for Cycles and Eevee.",
      cta: "Browse 3D models",
      countLabel: "models & bundles",
    },
    templates: {
      title: "Website templates",
      description:
        "Y2K, Frutiger Aero and Windows XP sites in plain HTML, CSS and JavaScript. Edit the text, upload, done.",
      cta: "See templates",
      countLabel: "templates",
    },
    freebies: {
      title: "Freebies",
      description:
        "Blog templates and 3D models I give away. Not demos, the real thing, ready to download and use.",
      cta: "Get freebies",
      countLabel: "free downloads",
    },
  },
  ctaTitle: "Need something",
  ctaTitleAccent: "made for you?",
  ctaCopy:
    "If what you need isn't in the shop, I can build it: a 3D model for your brand, a custom site or a template with the features you're missing.",
  ctaButton: "Let's talk",
  ctaSecondary: "See packages",
};

const es: ShopHubCopy = {
  pageTitle: "Tienda: modelos 3D, plantillas web y gratis | Grecia V.",
  description:
    "Modelos 3D para Blender hechos a mano, plantillas web Y2K y Frutiger Aero, y descargas gratis, de una diseñadora web y artista 3D.",
  heroEyebrow: "Tienda",
  heroTitle: "Modelos 3D, plantillas web y",
  heroTitleAccent: "descargas gratis, hechos a mano",
  heroIntro:
    "El mismo cuidado que pongo en el trabajo con clientes, empaquetado para que lo uses hoy. Modelos 3D, plantillas web y algunas cosas que regalo. Todo lo que ves aquí lo hice yo, a mano.",
  heroNote:
    "En este sitio no hay carrito de compra. Cada producto enlaza a donde se vende, Contra para los modelos 3D y Ko-fi para las plantillas, y allí pagas y descargas.",
  sections: {
    models: {
      title: "Modelos 3D",
      description:
        "Loops de neón animados, props tiernos y estilizados y objetos cotidianos. Archivos nativos de Blender, listos para Cycles y Eevee.",
      cta: "Ver modelos 3D",
      countLabel: "modelos y packs",
    },
    templates: {
      title: "Plantillas web",
      description:
        "Sitios Y2K, Frutiger Aero y estilo Windows XP en HTML, CSS y JavaScript puros. Cambias el texto, subes y listo.",
      cta: "Ver plantillas",
      countLabel: "plantillas",
    },
    freebies: {
      title: "Gratis",
      description:
        "Plantillas de blog y modelos 3D que regalo. No son demos, son los de verdad, listos para descargar y usar.",
      cta: "Descargar gratis",
      countLabel: "descargas gratis",
    },
  },
  ctaTitle: "¿Necesitas algo",
  ctaTitleAccent: "hecho para ti?",
  ctaCopy:
    "Si lo que buscas no está en la tienda, lo puedo construir: un modelo 3D para tu marca, un sitio a medida o una plantilla con las funciones que te faltan.",
  ctaButton: "Hablemos",
  ctaSecondary: "Ver paquetes",
};

export const shopHubCopy: Record<Lang, ShopHubCopy> = { en, es };
