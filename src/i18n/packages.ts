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

/** `icon` is a name from src/icons. Optional: the pricing factors go without. */
type Item = { name: string; description: string; icon?: string };
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

  needTitle: string;
  needTitleAccent: string;
  needIntro: string;
  needFromYou: Item[];
  needMustHaveLabel: string;
  needMustHave: string[];
  needNote: string;

  ctaTitle: string;
  ctaTitleAccent: string;
  ctaCopy: string;
  ctaButton: string;
  ctaSecondary: string;
};

const en: PackagesCopy = {
  pageTitle: "Packages & Pricing | Grecia V. - Web Design and Development Tiers",
  description:
    "Web design tiers from WordPress and Shopify stores to coded sites with GSAP and Three.js. What is included, what raises the price, what counts as extra.",

  heroEyebrow: "How I price web projects",
  heroTitle: "Packages &",
  heroTitleAccent: "Pricing",
  heroIntro:
    "Four ways of building a site, from a CMS store you manage yourself to a coded build with scroll animation and 3D. This page is here so you can work out roughly where your project sits before we ever talk numbers.",
  heroNote:
    "I don't publish fixed prices, because two sites with the same page count can take very different amounts of work. What I can tell you is what moves the number.",

  tiersTitle: "The four",
  tiersTitleAccent: "tiers",
  tiersIntro:
    "These are not rigid boxes, and they are not ordered by price. They describe how a build is put together, which is what actually decides the timeline. Startups mostly begin at the first one because it is the fastest way to a working store. Larger companies, and anyone with room to invest more, pick the other three just as often, and for them the choice is about what the site has to do rather than about cost.",
  tierLabel: "Tier",
  bestForLabel: "Best for",
  includesLabel: "What you get",
  ribbon: "Most chosen",
  tiers: [
    {
      step: "01",
      name: "CMS ecommerce website",
      stack: "WordPress · Elementor · WooCommerce · Shopify",
      tagline: "Where most startups begin, and where most stores stay.",
      description:
        "WordPress with Elementor or Shopify, depending on whether the site is a business with a shop attached or a shop first. Either way I lay out a template against your brand rather than adapting a purchased theme. It is the quickest route to a finished store, and the reason it costs less is honest: the platform handles the plumbing, so my time goes into design decisions instead.",
      bestFor:
        "Startups and established stores that want to add pages and products themselves, without a developer on call.",
      includes: [
        "Custom layout built to your brand, not a bought theme",
        "You edit pages and products yourself from the dashboard",
        "WooCommerce or Shopify set up around your catalogue",
        "Payment methods your customers actually use, local transfer included",
        "Contact and lead forms wired to your inbox",
      ],
    },
    {
      step: "02",
      name: "Visual & motion first",
      stack: "Framer",
      tagline: "For when the look is the argument.",
      description:
        "Framer, for sites whose job is to hold attention rather than to run a catalogue. Finer typography, transitions and scroll motion than a page builder allows, and you still edit the content yourself afterwards. On price, this tier can land above tiers 3 and 4: the more motion and bespoke sections you want, the closer it gets, and it often passes them. Tier numbers here describe how a site is built, not what it costs.",
      bestFor:
        "Brands, launches and portfolios where the aesthetic does the selling and there is no large catalogue behind it.",
      includes: [
        "Design led layout with real typographic control",
        "Scroll and hover motion built into the page",
        "Editable by you, no code required",
        "Fast to launch when the deadline is tight",
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
      icon: "seo-search",
      description:
        "Titles, meta descriptions, headings, alt text, sitemap and structured data set up properly from the start, so search engines can read the site the way people do.",
    },
    {
      name: "Speed optimisation",
      icon: "speed-gauge",
      description:
        "Images compressed and served in modern formats, fonts and scripts loaded so they never block the first paint, and layouts that hold their shape while they load.",
    },
    {
      name: "Responsive on every screen",
      icon: "devices",
      description:
        "Designed for the phone as its own layout, not shrunk down from desktop. Checked at real widths, from small Android phones through to large monitors.",
    },
    {
      name: "Ecommerce integration",
      icon: "cart",
      description:
        "If you sell, the store is part of the build: products, categories, checkout and the payment methods your customers actually use, including local transfer where cards are not the norm.",
    },
    {
      name: "Customer support widget",
      icon: "chat-bubble",
      description:
        "A floating button pinned to the bottom left of every page that opens a WhatsApp chat with you. Visitors ask from wherever they are instead of hunting for a contact page, which is where most enquiries are lost.",
    },
    {
      name: "Contact and lead capture",
      icon: "envelope",
      description:
        "Forms that reach your inbox reliably, with spam handling, so an enquiry never quietly disappears.",
    },
    {
      name: "Accessibility basics",
      icon: "accessibility",
      description:
        "Contrast checked against WCAG thresholds, keyboard navigation that works, and semantic markup that screen readers can follow.",
    },
    {
      name: "Two rounds of revisions",
      icon: "pen-nib",
      description:
        "Two rounds free in every project, whatever the tier. You gather your notes, we go through them in one session, and I apply them in a single pass.",
    },
    {
      name: "Handover",
      icon: "handover-key",
      description:
        "You get the accounts, the files and a wireflow: a diagram showing how every page and action connects. Not a tutorial on using WordPress, Shopify or Framer, since learning the tool is your side of it. Nothing is held hostage.",
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
        "Two rounds are included. Any round after those is charged by difficulty, $5 to $20. No complete redesigns after delivery.",
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

  needTitle: "What I need",
  needTitleAccent: "from you",
  needIntro:
    "Every project that ran late did so for the same reason: it started before this was ready. You don't have to write the brief yourself or work out what to send me. I hand you a short document with the questions already in it, covering what the site is for, the references, the colours and the rest, and you fill it in. What follows is what that document asks for, so you know what is coming. None of it is difficult, but the more of it you bring on day one, the faster and cheaper the build goes.",
  needFromYou: [
    {
      name: "What the site is for",
      icon: "target",
      description:
        "A few sentences on the business: what you sell, what you want this site to achieve, who you are talking to, who your competitors are and what makes you different from them.",
    },
    {
      name: "The look you want",
      icon: "palette",
      description:
        "Be specific about style. Photography only, 2D illustration, 3D, video, motion or none of it. Send between two and five reference sites so we are talking about the same thing rather than about adjectives.",
    },
    {
      name: "Main colours",
      icon: "droplet",
      description:
        "Two or three is the useful number. More than that and the palette stops being a palette. If you have a brand manual, that covers it.",
    },
    {
      name: "Your logo",
      icon: "shapes",
      description:
        "In vector if you have it. If you don't have one yet, I can design it as an extra, and it is better to settle that before the site than after.",
    },
    {
      name: "Copy and content",
      icon: "document",
      description:
        "Text, product data and images, as a document or a spreadsheet. If the copy is not ready I will lay out with placeholder text, but the design always lands better against real words.",
    },
    {
      name: "Hosting and domain access",
      icon: "server",
      description:
        "Needed to publish. You can send it over chat rather than by email if you prefer, and I will tell you exactly which credentials are required and which are not.",
    },
    {
      name: "Plugin preferences",
      icon: "puzzle",
      description:
        "For WordPress builds, tell me if you already rely on specific plugins. If you have no preference, I install the set I consider necessary for security, performance and SEO.",
    },
  ],
  needMustHaveLabel: "Before we start, you need to have",
  needMustHave: [
    "Your own hosting and domain purchased, or the budget set aside for them",
    "Read through this page, so the scope we agree on is the scope you expect",
  ],
  needNote:
    "I don't design from nothing. Without direction the result is a guess, and guesses cost revisions. Two rounds of revisions are free in every project, and anything asked for outside those two sessions counts as an additional round, so it pays to fill the brief in properly up front.",

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
    "Paquetes de diseño web, desde tiendas WordPress y Shopify hasta sitios en código con GSAP y Three.js. Qué incluye, qué sube el precio y qué es extra.",

  heroEyebrow: "Cómo cotizo los proyectos web",
  heroTitle: "Paquetes y",
  heroTitleAccent: "precios",
  heroIntro:
    "Cuatro maneras de construir un sitio, desde una tienda con CMS que gestionas tú misma hasta un desarrollo en código con animaciones por scroll y 3D. Esta página está para que sepas más o menos dónde cae tu proyecto antes de que hablemos de números.",
  heroNote:
    "No publico precios fijos, porque dos sitios con la misma cantidad de páginas pueden implicar cargas de trabajo muy distintas. Lo que sí puedo decirte es qué mueve la cifra.",

  tiersTitle: "Los cuatro",
  tiersTitleAccent: "niveles",
  tiersIntro:
    "No son cajas rígidas, ni están ordenados por precio. Describen cómo se construye cada sitio, que es lo que de verdad decide el tiempo. Las startups suelen empezar por el primero porque es la vía más rápida a una tienda funcionando. Las empresas más grandes, y quien tenga margen para invertir más, eligen los otros tres con la misma frecuencia, y ahí la decisión va de qué tiene que hacer el sitio y no de cuánto cuesta.",
  tierLabel: "Nivel",
  bestForLabel: "Ideal para",
  includesLabel: "Qué obtienes",
  ribbon: "El más elegido",
  tiers: [
    {
      step: "01",
      name: "Ecommerce con CMS",
      stack: "WordPress · Elementor · WooCommerce · Shopify",
      tagline: "Donde empiezan casi todas las startups, y donde se quedan casi todas las tiendas.",
      description:
        "WordPress con Elementor o Shopify, según si el sitio es un negocio con tienda al lado o una tienda ante todo. En cualquiera de los dos maqueto una plantilla contra tu marca en vez de adaptar un tema comprado. Es la ruta más rápida a una tienda terminada, y la razón de que cueste menos es honesta: la plataforma se encarga de la fontanería, así que mi tiempo se va en decisiones de diseño.",
      bestFor:
        "Startups y tiendas ya asentadas que quieren añadir páginas y productos por su cuenta, sin depender de desarrollo.",
      includes: [
        "Maquetado a medida de tu marca, sin tema comprado",
        "Editas páginas y productos tú misma desde el panel",
        "WooCommerce o Shopify montados alrededor de tu catálogo",
        "Métodos de pago que tus clientes usan de verdad, transferencia local incluida",
        "Formularios de contacto conectados a tu correo",
      ],
    },
    {
      step: "02",
      name: "Visual y movimiento primero",
      stack: "Framer",
      tagline: "Para cuando el aspecto es el argumento.",
      description:
        "Framer, para sitios cuyo trabajo es retener la atención y no gestionar un catálogo. Mejor tipografía, transiciones y movimiento por scroll del que permite un maquetador visual, y sigues editando el contenido tú después. Sobre el precio: este nivel puede quedar por encima de los niveles 3 y 4. Cuanto más movimiento y más secciones a medida quieras, más se acerca, y con frecuencia los supera. Los números de nivel describen cómo se construye el sitio, no lo que cuesta.",
      bestFor:
        "Marcas, lanzamientos y portafolios donde la estética es la que vende y no hay un catálogo grande detrás.",
      includes: [
        "Maquetado guiado por diseño, con control tipográfico real",
        "Movimiento por scroll y hover integrado en la página",
        "Editable por ti, sin tocar código",
        "Rápido de lanzar cuando la fecha aprieta",
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
      icon: "seo-search",
      description:
        "Títulos, meta descripciones, encabezados, textos alternativos, sitemap y datos estructurados bien puestos desde el inicio, para que los buscadores lean el sitio como lo lee una persona.",
    },
    {
      name: "Optimización de velocidad",
      icon: "speed-gauge",
      description:
        "Imágenes comprimidas y servidas en formatos modernos, fuentes y scripts cargados sin bloquear el primer pintado, y maquetados que no dan saltos mientras cargan.",
    },
    {
      name: "Responsive en toda pantalla",
      icon: "devices",
      description:
        "Diseñado para el teléfono como maquetado propio, no encogido desde escritorio. Revisado a anchos reales, desde móviles Android pequeños hasta monitores grandes.",
    },
    {
      name: "Integración de ecommerce",
      icon: "cart",
      description:
        "Si vendes, la tienda es parte del desarrollo: productos, categorías, checkout y los métodos de pago que tus clientes usan de verdad, incluida la transferencia local donde la tarjeta no es lo habitual.",
    },
    {
      name: "Widget de atención al cliente",
      icon: "chat-bubble",
      description:
        "Un botón flotante anclado abajo a la izquierda en todas las páginas que abre un chat de WhatsApp contigo. La gente pregunta desde donde esté en vez de ir a buscar la página de contacto, que es donde se pierden la mayoría de las consultas.",
    },
    {
      name: "Contacto y captación",
      icon: "envelope",
      description:
        "Formularios que llegan a tu correo de forma fiable, con manejo de spam, para que una consulta no se pierda en silencio.",
    },
    {
      name: "Accesibilidad básica",
      icon: "accessibility",
      description:
        "Contraste verificado contra los umbrales de WCAG, navegación por teclado que funciona y marcado semántico que un lector de pantalla puede seguir.",
    },
    {
      name: "Dos rondas de revisión",
      icon: "pen-nib",
      description:
        "Dos rondas gratis en todo proyecto, sea cual sea el nivel. Juntas tus observaciones, las repasamos en una sesión y las aplico de una sola vez.",
    },
    {
      name: "Entrega",
      icon: "handover-key",
      description:
        "Te quedas con las cuentas, los archivos y un wireflow: un diagrama que muestra cómo se conecta cada página y cada acción. No un tutorial de cómo usar WordPress, Shopify o Framer, porque aprender la herramienta te toca a ti. Aquí no se secuestra nada.",
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
        "Dos rondas incluidas. Cada ronda extra se cobra por dificultad, de 5 a 20 USD. No se hacen rediseños completos después de entregar.",
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

  needTitle: "Qué necesito",
  needTitleAccent: "de ti",
  needIntro:
    "Todos los proyectos que se me han alargado fue por el mismo motivo: empezaron antes de tener esto listo. No tienes que armar el brief por tu cuenta ni adivinar qué mandarme: te paso un documento breve con las preguntas ya hechas, sobre para qué es el sitio, las referencias, los colores y lo demás, y tú lo llenas. Lo que viene abajo es justo lo que ese documento pregunta, para que sepas qué esperar. Nada de esto es difícil, pero cuanto más traigas el primer día, más rápido y más barato sale el desarrollo.",
  needFromYou: [
    {
      name: "Para qué es el sitio",
      icon: "target",
      description:
        "Unas frases sobre el negocio: qué vendes, qué quieres lograr con esta web, a quién le hablas, quiénes son tus competidores y qué te diferencia de ellos.",
    },
    {
      name: "El estilo que quieres",
      icon: "palette",
      description:
        "Sé específica con el estilo. Solo fotografía, ilustración 2D, 3D, video, animaciones o nada de eso. Manda entre dos y cinco sitios de referencia, así hablamos de lo mismo y no de adjetivos.",
    },
    {
      name: "Colores principales",
      icon: "droplet",
      description:
        "Dos o tres es el número útil. Más que eso y la paleta deja de ser una paleta. Si tienes manual de marca, con eso está resuelto.",
    },
    {
      name: "Tu logo",
      icon: "shapes",
      description:
        "En vectorial si lo tienes. Si aún no tienes, puedo diseñarlo como extra, y conviene resolverlo antes del sitio y no después.",
    },
    {
      name: "Textos y contenido",
      icon: "document",
      description:
        "Textos, datos de producto e imágenes, en un documento o una hoja de cálculo. Si los textos no están listos maqueto con texto de relleno, pero el diseño siempre queda mejor contra palabras reales.",
    },
    {
      name: "Acceso a hosting y dominio",
      icon: "server",
      description:
        "Hace falta para publicar. Si prefieres, me lo pasas por chat en vez de por correo, y te digo exactamente qué credenciales se necesitan y cuáles no.",
    },
    {
      name: "Preferencias de plugins",
      icon: "puzzle",
      description:
        "En desarrollos con WordPress, dime si ya dependes de plugins concretos. Si no tienes preferencia, instalo el conjunto que considero necesario para seguridad, rendimiento y SEO.",
    },
  ],
  needMustHaveLabel: "Antes de empezar necesitas tener",
  needMustHave: [
    "Tu hosting y dominio comprados, o el presupuesto reservado para ellos",
    "Esta página leída, para que el alcance que acordemos sea el que esperas",
  ],
  needNote:
    "No diseño desde cero sin especificaciones. Sin dirección el resultado es una adivinanza, y las adivinanzas se pagan en revisiones. Todo proyecto incluye dos rondas de revisión gratis, y lo que pidas fuera de esas dos sesiones cuenta como una ronda adicional, así que conviene llenar bien el brief desde el principio.",

  ctaTitle: "¿Quieres una cifra",
  ctaTitleAccent: "para tu proyecto?",
  ctaCopy:
    "No doy cotizaciones generales, porque casi siempre se equivocan en una dirección o en la otra. Cuéntame qué vas a construir, cuántas páginas y productos, y si quieres movimiento dentro. Te devuelvo una cifra real y un plazo real.",
  ctaButton: "Pedir cotización",
  ctaSecondary: "Ver mi trabajo",
};

export const packagesCopy: Record<Lang, PackagesCopy> = { en, es };
