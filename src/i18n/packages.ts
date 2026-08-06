import type { Lang } from "./ui";

type Tier = {
  step: string;
  name: string;
  stack: string;
  tagline: string;
  description: string;
  bestFor: string;
  includes: string[];
  featured?: boolean;
};

type Item = { name: string; description: string };
type Extra = { name: string; description: string; price: string; days: string };

export type PackagesCopy = {
  pageTitle: string;
  description: string;

  heroEyebrow: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroIntro: string;
  heroNote: string;

  tiersTitle: string;
  tiersTitleAccent: string;
  tiersIntro: string;
  tierLabel: string;
  bestForLabel: string;
  includesLabel: string;
  ribbon: string;
  tiers: Tier[];

  includedTitle: string;
  includedTitleAccent: string;
  includedIntro: string;
  included: Item[];

  scaleTitle: string;
  scaleTitleAccent: string;
  scaleIntro: string;
  scaleFactors: Item[];

  extrasTitle: string;
  extrasTitleAccent: string;
  extrasIntro: string;
  extrasNameLabel: string;
  extrasWhatLabel: string;
  extrasPriceLabel: string;
  extrasDaysLabel: string;
  extras: Extra[];
  extrasFootnote: string;

  ctaTitle: string;
  ctaTitleAccent: string;
  ctaCopy: string;
  ctaButton: string;
  ctaSecondary: string;
};

const en: PackagesCopy = {
  pageTitle: "Packages & Pricing | Grecia V. - Web Design and Development Tiers",
  description:
    "How my web design packages work, from a WordPress and Elementor build to fully animated sites with GSAP scroll animations and Three.js 3D. What every project includes, what raises the price, and what counts as an extra.",

  heroEyebrow: "How I price web projects",
  heroTitle: "Packages &",
  heroTitleAccent: "Pricing",
  heroIntro:
    "Every site I build sits somewhere on a scale. At one end there is WordPress with Elementor, which is the fastest to produce and the most affordable. At the other there are coded sites with scroll driven animation and 3D running in the browser, which take far longer and cost accordingly. Most people land somewhere in the middle, and this page exists so you can work out roughly where before we ever talk numbers.",
  heroNote:
    "I don't publish fixed prices, because two sites with the same page count can take very different amounts of work. What I can tell you is what moves the number.",

  tiersTitle: "The four",
  tiersTitleAccent: "tiers",
  tiersIntro:
    "These are not rigid boxes. They describe how a build is put together, and that is what actually decides the timeline and the cost.",
  tierLabel: "Tier",
  bestForLabel: "Best for",
  includesLabel: "What you get",
  ribbon: "Most chosen",
  tiers: [
    {
      step: "01",
      name: "WordPress build",
      stack: "WordPress · Elementor · WooCommerce",
      tagline: "The most accessible option, and the one most people pick.",
      description:
        "Built on WordPress with Elementor, using a template I lay out against your brand rather than a purchased theme. It is the quickest route to a finished site, and the reason it costs less is honest: the tooling does a lot of the heavy lifting, so I spend my time on the design decisions instead of on the plumbing.",
      bestFor:
        "Businesses that want to add pages and products themselves, without a developer on call.",
      includes: [
        "Custom layout built to your brand, not a bought theme",
        "You edit pages and products yourself from the dashboard",
        "WooCommerce set up if you sell",
        "Contact and lead forms wired to your inbox",
        "Light and dark themes if you want both",
      ],
      featured: true,
    },
    {
      step: "02",
      name: "No code, high polish",
      stack: "Framer · Shopify",
      tagline: "For when the design matters more than the CMS.",
      description:
        "Framer for marketing sites that need finer typography and motion than a page builder gives you, Shopify when the store is the whole point. Both keep you in control of the content afterwards, with a tighter design ceiling than WordPress and without stepping into full custom code.",
      bestFor: "Brands and stores where the visual bar is high and launch dates are tight.",
      includes: [
        "Design led layout with real typographic control",
        "Built in transitions and interactions",
        "Product and collection structure for Shopify builds",
        "Editable by you, no code required",
      ],
    },
    {
      step: "03",
      name: "Coded site",
      stack: "Astro · React · Tailwind · TypeScript",
      tagline: "Written from scratch, so nothing is fighting the design.",
      description:
        "Hand written code with no page builder in the way. This is where performance scores stop being an afterthought and become something I design for. Every component is built for your content instead of your content being squeezed into someone else's template. This portfolio is built this way.",
      bestFor:
        "Sites where speed, search visibility and long term maintenance actually matter to the business.",
      includes: [
        "Components built for your content",
        "Top tier performance and Core Web Vitals",
        "Structured data and clean semantic markup",
        "Blog or case study system if you publish",
        "Multilingual setup if you need more than one language",
      ],
    },
    {
      step: "04",
      name: "Animated & 3D",
      stack: "GSAP · Three.js · Blender · Spline",
      tagline: "The full build, and the one that takes the longest.",
      description:
        "Scroll driven sequences, pinned sections, transitions that carry meaning, and real 3D running in the browser. Every one of these has to be built, tuned and then made to perform on a mid range phone, which is the part that takes the time. The price reflects that, and so does the result: this is the tier people remember after they close the tab.",
      bestFor: "Launches, portfolios and brands that need to be talked about, not just found.",
      includes: [
        "Scroll driven animation timelines",
        "3D models and scenes running live in the browser",
        "Motion tuned so it never costs you performance",
        "Reduced motion support for accessibility",
        "Everything from the coded tier",
      ],
    },
  ],

  includedTitle: "In every",
  includedTitleAccent: "project",
  includedIntro:
    "These are not upsells. Whichever tier you land on, the following is part of the build, because a site without them is a site that does not work.",
  included: [
    {
      name: "SEO optimisation",
      description:
        "Titles, meta descriptions, headings, alt text, sitemap and structured data set up properly from the start, so search engines can read the site the way people do.",
    },
    {
      name: "Speed optimisation",
      description:
        "Images compressed and served in modern formats, fonts and scripts loaded so they never block the first paint, and layouts that hold their shape while they load.",
    },
    {
      name: "Responsive on every screen",
      description:
        "Designed for the phone as its own layout, not shrunk down from desktop. Checked at real widths, from small Android phones through to large monitors.",
    },
    {
      name: "Ecommerce integration",
      description:
        "If you sell, the store is part of the build: products, categories, checkout and the payment methods your customers actually use, including local transfer where cards are not the norm.",
    },
    {
      name: "Contact and lead capture",
      description:
        "Forms that reach your inbox reliably, with spam handling, so an enquiry never quietly disappears.",
    },
    {
      name: "Accessibility basics",
      description:
        "Contrast checked against WCAG thresholds, keyboard navigation that works, and semantic markup that screen readers can follow.",
    },
    {
      name: "Handover",
      description:
        "You get the accounts, the files and a walkthrough of how to edit your own content. Nothing is held hostage.",
    },
  ],

  scaleTitle: "What moves",
  scaleTitleAccent: "the price",
  scaleIntro:
    "A WordPress site is the most accessible starting point, but that is a starting point and not a ceiling. The same tier can land anywhere depending on scope. These are the things that move it, and I would rather you know them now than be surprised by a quote later.",
  scaleFactors: [
    {
      name: "Number of pages",
      description:
        "A five page site and a thirty page site are not the same job, even on the same platform. Every page needs a layout, content and testing.",
    },
    {
      name: "Catalogue size",
      description:
        "Ten products is setup. A thousand products is data structure, filtering, search and a category system that still makes sense at that scale.",
    },
    {
      name: "Detailed or complex animation",
      description:
        "Simple hover and entrance effects are quick. Scroll driven sequences, pinned sections and 3D each need building, tuning and then optimising so they stay smooth.",
    },
    {
      name: "Volume of content",
      description:
        "If the copy, photography and product data are not ready, producing or restructuring them is real work and it belongs in the estimate.",
    },
    {
      name: "Custom functionality",
      description:
        "Bookings, memberships, calculators, dashboards or anything connected to an external service goes beyond a standard build.",
    },
    {
      name: "Revision rounds",
      description:
        "A couple of rounds are built into every project. Repeated changes of direction after a stage is signed off are not, and I will always flag it before it becomes a cost.",
    },
  ],

  extrasTitle: "Not included:",
  extrasTitleAccent: "the extras",
  extrasIntro:
    "These sit outside a standard build. None of them are required for a site to launch and work well, which is exactly why they are optional rather than quietly folded into the price. Add any of them and the timeline moves by the days shown.",
  extrasNameLabel: "Extra",
  extrasWhatLabel: "What it covers",
  extrasPriceLabel: "Cost",
  extrasDaysLabel: "Extra days",
  extras: [
    {
      name: "Simple animations",
      description:
        "Light visual effects across the site: a section easing in, a hover state, an icon that nudges for attention. Not parallax or complex scroll work.",
      price: "$150",
      days: "+5",
    },
    {
      name: "SSL / HTTPS setup",
      description:
        "Manual install of an SSL certificate so the site runs over HTTPS and the browser shows a closed padlock beside your domain.",
      price: "$100",
      days: "+4",
    },
    {
      name: "Email design",
      description:
        "Full design for up to 8 emails, promotional and automated alike, using your logo, palette and a layout that holds up on a phone.",
      price: "$250",
      days: "+10",
    },
    {
      name: "Anti theft protection",
      description:
        "Measures against content being lifted, including copying by AI: right click and text selection disabled. Legal copyright registration is not included.",
      price: "$100",
      days: "+3",
    },
    {
      name: "5 newsletter emails",
      description:
        "Five promotional or newsletter emails written and set up, ready to send to your list.",
      price: "$170",
      days: "+7",
    },
    {
      name: "reCAPTCHA",
      description:
        "Google reCAPTCHA on your forms so bots cannot fill them, with the familiar “I'm not a robot” check before sending.",
      price: "$150",
      days: "+3",
    },
    {
      name: "Manual hosting setup",
      description:
        "Pointing a domain to hosting and doing the initial server configuration, when the two are bought from different providers. Not needed for WordPress with Elementor.",
      price: "$50 – $70",
      days: "+5",
    },
    {
      name: "5 autoresponder emails",
      description:
        "Five emails that fire automatically on a user action: a new subscriber, a completed form, an abandoned cart.",
      price: "$180",
      days: "+8",
    },
  ],
  extrasFootnote:
    "Prices are in USD and cover the work described. If you want several of these, tell me at the start and I'll fold them into one timeline rather than bolting them on afterwards.",

  ctaTitle: "Want a number",
  ctaTitleAccent: "for your project?",
  ctaCopy:
    "I don't give blanket quotes, because they are almost always wrong in one direction or the other. Tell me what you are building, how many pages and products, and whether you want motion in it. You'll get a real figure and a real timeline back.",
  ctaButton: "Request a quote",
  ctaSecondary: "See my work",
};

const es: PackagesCopy = {
  pageTitle: "Paquetes y precios | Grecia V. - Niveles de diseño y desarrollo web",
  description:
    "Cómo funcionan mis paquetes de diseño web, desde un sitio en WordPress con Elementor hasta webs completamente animadas con GSAP e integración 3D con Three.js. Qué incluye cada proyecto, qué sube el precio y qué cuenta como extra.",

  heroEyebrow: "Cómo cotizo los proyectos web",
  heroTitle: "Paquetes y",
  heroTitleAccent: "precios",
  heroIntro:
    "Cada sitio que hago cae en algún punto de una escala. En un extremo está WordPress con Elementor, el más rápido de producir y el más accesible. En el otro están los sitios en código con animaciones por scroll y 3D corriendo en el navegador, que llevan muchísimo más tiempo y cuestan en consecuencia. La mayoría de la gente aterriza en el medio, y esta página existe para que sepas más o menos dónde antes de que hablemos de números.",
  heroNote:
    "No publico precios fijos, porque dos sitios con la misma cantidad de páginas pueden implicar cargas de trabajo muy distintas. Lo que sí puedo decirte es qué mueve la cifra.",

  tiersTitle: "Los cuatro",
  tiersTitleAccent: "niveles",
  tiersIntro:
    "No son cajas rígidas. Describen cómo se construye el sitio, y eso es lo que de verdad decide el tiempo y el costo.",
  tierLabel: "Nivel",
  bestForLabel: "Ideal para",
  includesLabel: "Qué obtienes",
  ribbon: "El más elegido",
  tiers: [
    {
      step: "01",
      name: "Sitio en WordPress",
      stack: "WordPress · Elementor · WooCommerce",
      tagline: "La opción más accesible, y la que elige la mayoría.",
      description:
        "Hecho en WordPress con Elementor, con una plantilla que maqueto contra tu marca en vez de un tema comprado. Es la ruta más rápida a un sitio terminado, y la razón de que cueste menos es honesta: las herramientas hacen buena parte del trabajo pesado, así que dedico mi tiempo a las decisiones de diseño y no a la fontanería.",
      bestFor:
        "Negocios que quieren añadir páginas y productos por su cuenta, sin depender de desarrollo.",
      includes: [
        "Maquetado a medida de tu marca, sin tema comprado",
        "Editas páginas y productos tú misma desde el panel",
        "WooCommerce configurado si vendes",
        "Formularios de contacto conectados a tu correo",
        "Tema claro y oscuro si quieres los dos",
      ],
      featured: true,
    },
    {
      step: "02",
      name: "Sin código, muy pulido",
      stack: "Framer · Shopify",
      tagline: "Para cuando el diseño pesa más que el gestor de contenidos.",
      description:
        "Framer para sitios de marketing que necesitan mejor tipografía y movimiento del que da un maquetador visual, Shopify cuando la tienda es el objetivo entero. Los dos te dejan el control del contenido después, con un techo de diseño más alto que WordPress y sin entrar en código a medida.",
      bestFor: "Marcas y tiendas con el listón visual alto y fechas de lanzamiento ajustadas.",
      includes: [
        "Maquetado guiado por diseño, con control tipográfico real",
        "Transiciones e interacciones integradas",
        "Estructura de productos y colecciones en Shopify",
        "Editable por ti, sin tocar código",
      ],
    },
    {
      step: "03",
      name: "Sitio en código",
      stack: "Astro · React · Tailwind · TypeScript",
      tagline: "Escrito desde cero, para que nada le pelee al diseño.",
      description:
        "Código escrito a mano, sin maquetador visual de por medio. Aquí es donde las métricas de rendimiento dejan de ser una ocurrencia tardía y pasan a ser algo que diseño a propósito. Cada componente se construye para tu contenido, en lugar de meter tu contenido a la fuerza en la plantilla de otro. Este portafolio está hecho así.",
      bestFor:
        "Sitios donde la velocidad, la visibilidad en buscadores y el mantenimiento a largo plazo le importan de verdad al negocio.",
      includes: [
        "Componentes construidos para tu contenido",
        "Rendimiento y Core Web Vitals en lo más alto",
        "Datos estructurados y marcado semántico limpio",
        "Sistema de blog o casos de estudio si publicas",
        "Configuración multiidioma si necesitas más de uno",
      ],
    },
    {
      step: "04",
      name: "Animado y 3D",
      stack: "GSAP · Three.js · Blender · Spline",
      tagline: "El desarrollo completo, y el que más tiempo lleva.",
      description:
        "Secuencias guiadas por scroll, secciones ancladas, transiciones que significan algo y 3D real corriendo en el navegador. Cada una de esas cosas hay que construirla, afinarla y después lograr que rinda en un teléfono de gama media, que es la parte que se lleva el tiempo. El precio refleja eso, y el resultado también: este es el nivel que la gente recuerda después de cerrar la pestaña.",
      bestFor: "Lanzamientos, portafolios y marcas que necesitan que hablen de ellas, no solo que las encuentren.",
      includes: [
        "Líneas de tiempo de animación guiadas por scroll",
        "Modelos y escenas 3D corriendo en vivo en el navegador",
        "Movimiento afinado para que nunca te cueste rendimiento",
        "Soporte de movimiento reducido por accesibilidad",
        "Todo lo del nivel en código",
      ],
    },
  ],

  includedTitle: "En todos los",
  includedTitleAccent: "proyectos",
  includedIntro:
    "Esto no son añadidos que te vendo aparte. Caigas en el nivel que caigas, lo siguiente va incluido, porque un sitio sin esto es un sitio que no funciona.",
  included: [
    {
      name: "Optimización SEO",
      description:
        "Títulos, meta descripciones, encabezados, textos alternativos, sitemap y datos estructurados bien puestos desde el inicio, para que los buscadores lean el sitio como lo lee una persona.",
    },
    {
      name: "Optimización de velocidad",
      description:
        "Imágenes comprimidas y servidas en formatos modernos, fuentes y scripts cargados sin bloquear el primer pintado, y maquetados que no dan saltos mientras cargan.",
    },
    {
      name: "Responsive en toda pantalla",
      description:
        "Diseñado para el teléfono como maquetado propio, no encogido desde escritorio. Revisado a anchos reales, desde móviles Android pequeños hasta monitores grandes.",
    },
    {
      name: "Integración de ecommerce",
      description:
        "Si vendes, la tienda es parte del desarrollo: productos, categorías, checkout y los métodos de pago que tus clientes usan de verdad, incluida la transferencia local donde la tarjeta no es lo habitual.",
    },
    {
      name: "Contacto y captación",
      description:
        "Formularios que llegan a tu correo de forma fiable, con manejo de spam, para que una consulta no se pierda en silencio.",
    },
    {
      name: "Accesibilidad básica",
      description:
        "Contraste verificado contra los umbrales de WCAG, navegación por teclado que funciona y marcado semántico que un lector de pantalla puede seguir.",
    },
    {
      name: "Entrega",
      description:
        "Te quedas con las cuentas, los archivos y una explicación de cómo editar tu propio contenido. Aquí no se secuestra nada.",
    },
  ],

  scaleTitle: "Qué mueve",
  scaleTitleAccent: "el precio",
  scaleIntro:
    "Un sitio en WordPress es el punto de partida más accesible, pero es un punto de partida y no un techo. El mismo nivel puede aterrizar en cualquier lado según el alcance. Estas son las cosas que lo mueven, y prefiero que las sepas ahora a que te sorprendan en una cotización.",
  scaleFactors: [
    {
      name: "Cantidad de páginas",
      description:
        "Un sitio de cinco páginas y uno de treinta no son el mismo trabajo, aunque sean la misma plataforma. Cada página lleva maquetado, contenido y pruebas.",
    },
    {
      name: "Tamaño del catálogo",
      description:
        "Diez productos es configuración. Mil productos es estructura de datos, filtrado, búsqueda y un sistema de categorías que siga teniendo sentido a esa escala.",
    },
    {
      name: "Animaciones detalladas o complejas",
      description:
        "Los efectos simples de hover y entrada son rápidos. Las secuencias por scroll, las secciones ancladas y el 3D hay que construirlos, afinarlos y después optimizarlos para que sigan yendo suaves.",
    },
    {
      name: "Volumen de contenido",
      description:
        "Si los textos, la fotografía y los datos de producto no están listos, producirlos o reestructurarlos es trabajo real y va en la estimación.",
    },
    {
      name: "Funcionalidad a medida",
      description:
        "Reservas, membresías, calculadoras, paneles o cualquier cosa conectada a un servicio externo se sale de un desarrollo estándar.",
    },
    {
      name: "Rondas de revisión",
      description:
        "Un par de rondas van incluidas en todo proyecto. Los cambios de rumbo repetidos después de aprobar una etapa no, y siempre te lo aviso antes de que se convierta en un costo.",
    },
  ],

  extrasTitle: "No incluido:",
  extrasTitleAccent: "los extras",
  extrasIntro:
    "Esto queda fuera de un desarrollo estándar. Ninguno hace falta para que un sitio salga y funcione bien, y por eso son opcionales en lugar de ir metidos en el precio sin decírtelo. Si añades alguno, el plazo se mueve los días que se indican.",
  extrasNameLabel: "Extra",
  extrasWhatLabel: "Qué cubre",
  extrasPriceLabel: "Costo",
  extrasDaysLabel: "Días extra",
  extras: [
    {
      name: "Animaciones simples",
      description:
        "Efectos visuales ligeros por el sitio: una sección que entra suave, un estado hover, un icono que rebota para llamar la atención. No incluye parallax ni scroll complejo.",
      price: "150 USD",
      days: "+5",
    },
    {
      name: "Configuración SSL / HTTPS",
      description:
        "Instalación manual del certificado SSL para que el sitio vaya por HTTPS y el navegador muestre el candado cerrado junto a tu dominio.",
      price: "100 USD",
      days: "+4",
    },
    {
      name: "Diseño de correos",
      description:
        "Diseño completo de hasta 8 correos, de promoción y automáticos, con tu logo, tu paleta y un formato que aguanta en el teléfono.",
      price: "250 USD",
      days: "+10",
    },
    {
      name: "Protección contra robo",
      description:
        "Medidas contra el plagio del contenido, incluido el copiado por IA: clic derecho y selección de texto desactivados. No incluye el registro legal de derechos de autor.",
      price: "100 USD",
      days: "+3",
    },
    {
      name: "5 correos de newsletter",
      description:
        "Cinco correos de promoción o boletín redactados y configurados, listos para enviar a tu lista.",
      price: "170 USD",
      days: "+7",
    },
    {
      name: "reCAPTCHA",
      description:
        "reCAPTCHA de Google en tus formularios para que los bots no los llenen, con la casilla de “No soy un robot” antes de enviar.",
      price: "150 USD",
      days: "+3",
    },
    {
      name: "Configuración manual de hosting",
      description:
        "Apuntar el dominio al hosting y hacer la configuración inicial del servidor, cuando se compran en proveedores distintos. No hace falta en WordPress con Elementor.",
      price: "50 – 70 USD",
      days: "+5",
    },
    {
      name: "5 correos de autorespuesta",
      description:
        "Cinco correos que se disparan automáticamente ante una acción del usuario: un suscriptor nuevo, un formulario completado, un carrito abandonado.",
      price: "180 USD",
      days: "+8",
    },
  ],
  extrasFootnote:
    "Los precios están en dólares y cubren el trabajo descrito. Si quieres varios, dímelo al inicio y los meto en un mismo plazo en vez de irlos añadiendo después.",

  ctaTitle: "¿Quieres una cifra",
  ctaTitleAccent: "para tu proyecto?",
  ctaCopy:
    "No doy cotizaciones generales, porque casi siempre se equivocan en una dirección o en la otra. Cuéntame qué vas a construir, cuántas páginas y productos, y si quieres movimiento dentro. Te devuelvo una cifra real y un plazo real.",
  ctaButton: "Pedir cotización",
  ctaSecondary: "Ver mi trabajo",
};

export const packagesCopy: Record<Lang, PackagesCopy> = { en, es };
