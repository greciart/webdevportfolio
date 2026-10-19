import type { Lang } from "./ui";

/**
 * The shop lists the 3D models sold on Contra. Checkout and delivery stay
 * there; this page is the storefront that ranks and links out.
 *
 * Media lives on Contra's Cloudinary, which resizes on the fly, so the grid
 * asks for exactly the size it draws instead of the 2000px originals.
 */
const MEDIA = "https://media.contra.com";

type Category = "neon" | "cute" | "props";

type ProductBase = {
  id: string;
  /** Contra product slug, the part after /products/. */
  slug: string;
  price: number;
  category: Category;
  animated?: boolean;
  bundle?: boolean;
  /** Cloudinary public id of the cover. Videos get a still frame as poster. */
  media: { type: "image" | "video"; id: string };
};

type ProductCopy = { name: string; blurb: string; alt: string };

const products: ProductBase[] = [
  { id: "triangle-tunnel", slug: "Dgq2kgWf-3-d-retro-futuristic-neon-triangle-tunnel-animated-blender-file", price: 20, category: "neon", animated: true, media: { type: "video", id: "qttpdjek85cbtvwd2ytn" } },
  { id: "rainbow-jelly", slug: "1ipn250G-3-d-model-rainbow-jelly-cube-v2-animated-stylized-blender", price: 20, category: "cute", animated: true, media: { type: "video", id: "luktlvavky282mfughku" } },
  { id: "energy-sphere", slug: "OsuuVLIr-blue-energy-sphere-bundle-with-animation-blender-3-d-model", price: 35, category: "neon", animated: true, bundle: true, media: { type: "video", id: "z0rdgxdrukvvtyge6yqj" } },
  { id: "retro-sun", slug: "kek6q5kb-retro-sun-retrowave-synthwave-3-d-scene-animated-blender", price: 30, category: "neon", animated: true, media: { type: "video", id: "y1yh1h5ir7do7pljficn" } },
  { id: "ice-cube", slug: "fb5W5g5y-neon-energy-ice-cube-animated-sci-fi-vfx-blender-3-d-model", price: 30, category: "neon", animated: true, media: { type: "image", id: "hxhdxlilai3i7r8vdyye" } },
  { id: "cupcake", slug: "tebfcPd9-stylized-pink-cupcake-3-d-model", price: 35, category: "cute", media: { type: "image", id: "ok2cydjzp1cdebmtyoki" } },
  { id: "panda-donut", slug: "Td9oXM2f-cute-panda-donut-restaurant-bundle-3-d-blender-model-animation", price: 45, category: "cute", animated: true, bundle: true, media: { type: "image", id: "gnyagbje8zgfkor5ghbd" } },
  { id: "breakfast", slug: "YsDGFXpb-cute-breakfast-food-collection-7-stylized-3-d-props-bundle", price: 35, category: "cute", bundle: true, media: { type: "image", id: "taqay54uoaeilpmgaq47" } },
  { id: "mug", slug: "VAFOjAak-modern-square-ceramic-mug-3-d-model-glossy-coffee-cup", price: 15.5, category: "props", media: { type: "image", id: "ca7nroyfkig89ofint8p" } },
  { id: "circular-tunnel", slug: "BCGhQNUv-circular-shiny-tunnel-neon-with-animation-3-d-model", price: 20, category: "neon", animated: true, media: { type: "image", id: "jgk6j0trmeqnyjaoekpr" } },
  { id: "particle-ball", slug: "n6TZuRi7-dynamic-particle-emission-animated-ball-effect-3-d-model", price: 20, category: "neon", animated: true, media: { type: "video", id: "w085gli2tjwr9djlooli" } },
  { id: "crystal-bear", slug: "QSIwSkCN-crystal-pink-baby-bear-with-fluid-animation-3-d-model", price: 30, category: "cute", animated: true, media: { type: "image", id: "u5okblotockov0qzv4p3" } },
  { id: "handheld-console", slug: "ZF9x1Uim-pink-cute-retro-gameboy-console-stylized-3-d-prop", price: 35, category: "cute", media: { type: "image", id: "lnd0rhphycl6yqrr2ydi" } },
  { id: "jellyfish", slug: "Zw5zCB3E-bioluminescent-jellyfish-animated-glowing-underwater-3-d-model", price: 12, category: "neon", animated: true, media: { type: "image", id: "sj9yhz0vzthqsbvtgipc" } },
  { id: "green-gem", slug: "F658KQs5-stylized-green-diamond-gemstone-asset-3-d-model-animation", price: 10, category: "props", animated: true, media: { type: "image", id: "yuji2gyyu7hgvvcuhhyw" } },
  { id: "cube-scrambled", slug: "ZER9hVs1-rubiks-cube-unresolved-3-d-model-blender-puzzle-prop", price: 20, category: "props", media: { type: "image", id: "ycsl1jupref2lrex0n6j" } },
  { id: "cube-solved", slug: "sR9V3Ift-rubiks-cube-resolved-blender-3-d-model", price: 20, category: "props", media: { type: "image", id: "akk3gfjq26otok9whw52" } },
];

const productCopy: Record<Lang, Record<string, ProductCopy>> = {
  en: {
    "triangle-tunnel": {
      name: "Neon Triangle Tunnel",
      blurb: "An endless synthwave tunnel that loops without a stutter. It comes with glow and without, so it works as a loud music visualizer or as a quiet background.",
      alt: "Animated neon triangle tunnel 3D model in pink and blue, with a retro synthwave look",
    },
    "rainbow-jelly": {
      name: "Rainbow Jelly Cube V2",
      blurb: "The second, more realistic take on my jelly cube. Translucent, wobbly, and lit with the HDRI that ships in the file, so it looks right the moment you render.",
      alt: "Translucent rainbow jelly cube 3D model wobbling on a light background",
    },
    "energy-sphere": {
      name: "Blue Energy Sphere Bundle",
      blurb: "Four variations of a glowing energy sphere, each with its own looping animation. Good for sci-fi interfaces, loaders, or anything that needs to look switched on.",
      alt: "Glowing blue energy sphere 3D model with electric light around it",
    },
    "retro-sun": {
      name: "Retro Sun Retrowave Scene",
      blurb: "A full retrowave scene: striped sun, neon grid and that 80s glow, already animated. Open it, render it, and put it behind your track or your title card.",
      alt: "Animated retrowave scene with a striped neon sun over a glowing grid",
    },
    "ice-cube": {
      name: "Neon Energy Ice Cube",
      blurb: "A block of ice with energy running through it. The previews are rendered in both Cycles and Eevee, so you can see how it holds up in each engine before buying.",
      alt: "Sci-fi ice cube 3D model glowing with blue neon energy inside",
    },
    cupcake: {
      name: "Stylized Pink Cupcake",
      blurb: "A pink cupcake modeled and shaded by hand. It holds its own as a hero prop and fits right into a bakery or kawaii scene.",
      alt: "Stylized pink cupcake 3D model with frosting and sprinkles",
    },
    "panda-donut": {
      name: "Panda Donut Restaurant Bundle",
      blurb: "A cute panda-themed donut shop, with the kitchen props and scene lighting already in place. It includes animation, so the scene moves from the first frame.",
      alt: "Cute panda donut restaurant 3D scene with kitchen props and soft lighting",
    },
    breakfast: {
      name: "Cute Breakfast Collection",
      blurb: "Seven stylized breakfast props: a cookie, a cup, a donut, a toaster, two bread slices and a sugar cube. Everything you need for a soft, cartoon morning scene.",
      alt: "Collection of seven cute stylized breakfast 3D props including a toaster and a donut",
    },
    mug: {
      name: "Square Ceramic Mug",
      blurb: "A glossy square mug with clean topology and real proportions. Useful for product shots, branding mockups and kitchen renders.",
      alt: "Glossy square ceramic coffee mug 3D model",
    },
    "circular-tunnel": {
      name: "Circular Neon Tunnel",
      blurb: "A shiny round tunnel with procedural materials and no external textures, so the file stays light. It loops cleanly for intros and motion graphics.",
      alt: "Shiny circular neon tunnel 3D model with glowing rings",
    },
    "particle-ball": {
      name: "Particle Emission Ball",
      blurb: "A sphere that throws off particles in a seamless loop. The particle system is set up by hand, so you can tweak the emission instead of building it from zero.",
      alt: "Animated ball emitting glowing particles in a seamless loop",
    },
    "crystal-bear": {
      name: "Crystal Pink Baby Bear",
      blurb: "A little crystal bear with fluid moving inside it. Rendered in Cycles and Eevee for the previews, so you know what each engine gives you.",
      alt: "Pink crystal baby bear 3D model with fluid animation inside",
    },
    "handheld-console": {
      name: "Retro Pink Handheld Console",
      blurb: "A pink retro handheld console in a clean, stylized style. A nice prop for a gaming room, a desk scene or a nostalgia post.",
      alt: "Stylized pink retro handheld game console 3D prop",
    },
    jellyfish: {
      name: "Bioluminescent Jellyfish",
      blurb: "A glowing jellyfish built on only 449 vertices with procedural materials and no textures. Tiny on disk, still soft and luminous in the render.",
      alt: "Glowing bioluminescent jellyfish 3D model floating underwater",
    },
    "green-gem": {
      name: "Green Diamond Gemstone",
      blurb: "A faceted green gem with animation. Light and easy to drop into game interfaces, reward screens or a jewelry scene.",
      alt: "Faceted green diamond gemstone 3D model",
    },
    "cube-scrambled": {
      name: "Rubik's Cube, Scrambled",
      blurb: "A scrambled puzzle cube, modeled by hand in Blender. If you need it solved, that version is in the shop too.",
      alt: "Scrambled Rubik's cube 3D model with mixed colored faces",
    },
    "cube-solved": {
      name: "Rubik's Cube, Solved",
      blurb: "The puzzle cube with every face matching. If you'd rather have it scrambled, that one is right next to it.",
      alt: "Solved Rubik's cube 3D model with every face in one color",
    },
  },
  es: {
    "triangle-tunnel": {
      name: "Túnel triangular de neón",
      blurb: "Un túnel synthwave infinito que hace loop sin saltos. Viene con glow y sin él, así que sirve para un visualizador de música intenso o para un fondo tranquilo.",
      alt: "Modelo 3D animado de un túnel triangular de neón en rosa y azul, con estética synthwave retro",
    },
    "rainbow-jelly": {
      name: "Cubo de gelatina arcoíris V2",
      blurb: "La segunda versión, más realista, de mi cubo de gelatina. Translúcido, gelatinoso e iluminado con el HDRI que viene en el archivo, así que se ve bien desde el primer render.",
      alt: "Modelo 3D de un cubo de gelatina arcoíris translúcido sobre fondo claro",
    },
    "energy-sphere": {
      name: "Pack de esferas de energía azul",
      blurb: "Cuatro variaciones de una esfera de energía brillante, cada una con su propia animación en loop. Perfectas para interfaces sci-fi, loaders o cualquier cosa que tenga que verse encendida.",
      alt: "Modelo 3D de una esfera de energía azul brillante con luz eléctrica alrededor",
    },
    "retro-sun": {
      name: "Escena retrowave con sol retro",
      blurb: "Una escena retrowave completa: sol a rayas, cuadrícula de neón y ese brillo ochentero, ya animada. La abres, renderizas y la pones detrás de tu canción o tu cortinilla.",
      alt: "Escena retrowave animada con un sol de neón a rayas sobre una cuadrícula brillante",
    },
    "ice-cube": {
      name: "Cubo de hielo con energía neón",
      blurb: "Un bloque de hielo con energía corriendo por dentro. Las vistas previas están renderizadas en Cycles y en Eevee, para que veas cómo queda en cada motor antes de comprar.",
      alt: "Modelo 3D sci-fi de un cubo de hielo con energía neón azul por dentro",
    },
    cupcake: {
      name: "Cupcake rosa estilizado",
      blurb: "Un cupcake rosa modelado y sombreado a mano. Funciona solo, como protagonista, y encaja perfecto en una escena de pastelería o kawaii.",
      alt: "Modelo 3D de un cupcake rosa estilizado con glaseado y chispas",
    },
    "panda-donut": {
      name: "Pack restaurante de donas del panda",
      blurb: "Una tiendita de donas con temática de panda, con los props de cocina y la iluminación de la escena ya listos. Incluye animación, así que la escena se mueve desde el primer fotograma.",
      alt: "Escena 3D de un restaurante de donas con panda, props de cocina y luz suave",
    },
    breakfast: {
      name: "Colección de desayuno cute",
      blurb: "Siete props de desayuno estilizados: una galleta, una taza, una dona, una tostadora, dos rebanadas de pan y un cubito de azúcar. Todo lo que necesitas para una mañana tierna y caricaturesca.",
      alt: "Colección de siete props 3D de desayuno estilizados, con tostadora y dona",
    },
    mug: {
      name: "Taza cuadrada de cerámica",
      blurb: "Una taza cuadrada brillante, con topología limpia y proporciones reales. Útil para fotos de producto, mockups de marca y renders de cocina.",
      alt: "Modelo 3D de una taza de café cuadrada de cerámica brillante",
    },
    "circular-tunnel": {
      name: "Túnel circular de neón",
      blurb: "Un túnel redondo y brillante con materiales procedurales y sin texturas externas, así que el archivo pesa poco. Hace loop limpio para intros y motion graphics.",
      alt: "Modelo 3D de un túnel circular de neón con anillos brillantes",
    },
    "particle-ball": {
      name: "Esfera con emisión de partículas",
      blurb: "Una esfera que suelta partículas en un loop continuo. El sistema de partículas está armado a mano, así que puedes ajustar la emisión en lugar de empezar de cero.",
      alt: "Esfera animada que emite partículas brillantes en loop",
    },
    "crystal-bear": {
      name: "Osito bebé de cristal rosa",
      blurb: "Un osito de cristal con fluido moviéndose por dentro. Las vistas previas están en Cycles y en Eevee, para que sepas qué te da cada motor.",
      alt: "Modelo 3D de un osito bebé de cristal rosa con fluido animado por dentro",
    },
    "handheld-console": {
      name: "Consola portátil retro rosa",
      blurb: "Una consola portátil retro en rosa, con un estilo limpio y estilizado. Un buen prop para un cuarto gamer, un escritorio o un post nostálgico.",
      alt: "Prop 3D estilizado de una consola de videojuegos portátil retro rosa",
    },
    jellyfish: {
      name: "Medusa bioluminiscente",
      blurb: "Una medusa que brilla, hecha con solo 449 vértices, materiales procedurales y cero texturas. Pesa casi nada y aun así se ve suave y luminosa en el render.",
      alt: "Modelo 3D de una medusa bioluminiscente brillando bajo el agua",
    },
    "green-gem": {
      name: "Gema de diamante verde",
      blurb: "Una gema verde facetada, con animación. Ligera y fácil de meter en interfaces de juego, pantallas de recompensa o una escena de joyería.",
      alt: "Modelo 3D de una gema de diamante verde facetada",
    },
    "cube-scrambled": {
      name: "Cubo de Rubik desordenado",
      blurb: "Un cubo de Rubik mezclado, modelado a mano en Blender. Si lo necesitas resuelto, esa versión también está en la tienda.",
      alt: "Modelo 3D de un cubo de Rubik desordenado con caras de colores mezclados",
    },
    "cube-solved": {
      name: "Cubo de Rubik resuelto",
      blurb: "El cubo con todas las caras del mismo color. Si lo prefieres desordenado, lo tienes justo al lado.",
      alt: "Modelo 3D de un cubo de Rubik resuelto con cada cara de un solo color",
    },
  },
};

export type ShopProduct = ProductBase &
  ProductCopy & { url: string; poster: string; posterSmall: string; preview?: string };

export function getShopProducts(lang: Lang): ShopProduct[] {
  return products.map((product) => {
    const { type, id } = product.media;
    // A video's public id also serves stills: `so_1` grabs the frame at 1s.
    const still = (w: number, h: number) =>
      type === "video"
        ? `${MEDIA}/video/upload/so_1,c_fill,w_${w},h_${h},q_auto/${id}.webp`
        : `${MEDIA}/image/upload/c_fill,w_${w},h_${h},q_auto/${id}.webp`;
    return {
      ...product,
      ...productCopy[lang][product.id],
      url: `https://contra.com/products/${product.slug}`,
      poster: still(800, 450),
      posterSmall: still(480, 270),
      preview:
        type === "video"
          ? `${MEDIA}/video/upload/c_fill,w_640,h_360,q_auto/${id}.mp4`
          : undefined,
    };
  });
}

type Item = { name: string; description: string; icon: string };
type Faq = { question: string; answer: string };

export type ShopCopy = {
  pageTitle: string;
  description: string;

  heroEyebrow: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroIntro: string;
  heroNote: string;
  stats: { value: string; label: string }[];

  gridTitle: string;
  gridTitleAccent: string;
  filtersLabel: string;
  filters: Record<"all" | Category, string>;
  categoryLabel: Record<Category, string>;
  animatedBadge: string;
  bundleBadge: string;
  buyButton: string;
  /** `{name}` is filled in per card, so the link says which product it buys. */
  buyAria: string;
  checkoutNote: string;

  whyTitle: string;
  whyTitleAccent: string;
  whyIntro: string;
  why: Item[];

  faqTitle: string;
  faqTitleAccent: string;
  faq: Faq[];

  ctaTitle: string;
  ctaTitleAccent: string;
  ctaCopy: string;
  ctaButton: string;
  ctaSecondary: string;
};

const en: ShopCopy = {
  pageTitle: "3D Models for Blender | Shop by Grecia V.",
  description:
    "Hand-made 3D models for Blender: animated neon loops, cute stylized props and everyday objects. Native .blend files, ready for Cycles and Eevee.",

  heroEyebrow: "3D shop",
  heroTitle: "3D models,",
  heroTitleAccent: "made by hand",
  heroIntro:
    "Everything here started as an empty Blender scene. Neon loops, cute stylized props and a few everyday objects, all modeled, shaded and animated by me. You get the native .blend file, ready to render.",
  heroNote:
    "Checkout happens on Contra. Each Buy button takes you to the product there, where you pay and download the file.",
  stats: [
    { value: "17", label: "models & bundles" },
    { value: ".blend", label: "native files" },
    { value: "Cycles + Eevee", label: "ready to render" },
  ],

  gridTitle: "Browse the",
  gridTitleAccent: "models",
  filtersLabel: "Filter by style",
  filters: { all: "All", neon: "Neon & sci-fi", cute: "Cute & stylized", props: "Props & objects" },
  categoryLabel: { neon: "Neon & sci-fi", cute: "Cute & stylized", props: "Props & objects" },
  animatedBadge: "Animated",
  bundleBadge: "Bundle",
  buyButton: "Buy on Contra",
  buyAria: "Buy {name} on Contra",
  checkoutNote: "Prices in USD. Hover an animated model to see it move.",

  whyTitle: "What you're",
  whyTitleAccent: "paying for",
  whyIntro:
    "There are millions of 3D models online, and a growing pile of them are AI renders that fall apart the second you open the file. These don't.",
  why: [
    {
      name: "Made by a person",
      description:
        "No AI renders and no resold assets. Every polygon, shader node and keyframe was made by me in Blender, so what you see in the preview is what's in the file.",
      icon: "pen-nib",
    },
    {
      name: "Clean topology",
      description:
        "Tidy meshes you can edit, subdivide or rig without fighting them. Handy when the model has to fit your scene and not the other way around.",
      icon: "shapes",
    },
    {
      name: "Ready to render",
      description:
        "Materials, lighting and animation are already set up. Most files open, render and loop without you touching a single node.",
      icon: "rocket",
    },
  ],

  faqTitle: "Before you",
  faqTitleAccent: "buy",
  faq: [
    {
      question: "What file format do I get?",
      answer:
        ".blend, Blender's native format. Blender is free, and from there you can export to FBX, OBJ or glTF for Unity, Unreal or any other 3D tool. Procedural materials don't always travel one to one outside Blender, so expect to touch up a shader or two if you export.",
    },
    {
      question: "Do they work in Cycles and Eevee?",
      answer:
        "Yes. Several product pages on Contra even show the same model rendered in both, so you can compare. On the neon pieces the glow comes from Blender's compositor, so if it doesn't show up, open the Compositing tab and check that Use Nodes is on.",
    },
    {
      question: "How do I pay and download?",
      answer:
        "On Contra. You click Buy, pay there, and Contra gives you the download. Your payment details go to Contra, never to me.",
    },
    {
      question: "Can you make a custom model?",
      answer:
        "Yes. Products, mascots and brand objects, in low, mid or high poly depending on where they need to live. Tell me what you have in mind and I'll tell you what it takes.",
    },
  ],

  ctaTitle: "Need something",
  ctaTitleAccent: "custom?",
  ctaCopy:
    "If the model you need isn't here, I can make it for your brand, your game or your next campaign.",
  ctaButton: "Let's talk",
  ctaSecondary: "See my 3D work",
};

const es: ShopCopy = {
  pageTitle: "Modelos 3D para Blender | Tienda de Grecia V.",
  description:
    "Modelos 3D hechos a mano para Blender: loops de neón animados, props estilizados y objetos cotidianos. Archivos .blend nativos, listos para Cycles y Eevee.",

  heroEyebrow: "Tienda 3D",
  heroTitle: "Modelos 3D,",
  heroTitleAccent: "hechos a mano",
  heroIntro:
    "Todo lo que ves aquí empezó como una escena vacía en Blender. Loops de neón, props tiernos y estilizados y algunos objetos cotidianos, todos modelados, sombreados y animados por mí. Te llevas el archivo .blend nativo, listo para renderizar.",
  heroNote:
    "El pago se hace en Contra. Cada botón de compra te lleva al producto allí, donde pagas y descargas el archivo.",
  stats: [
    { value: "17", label: "modelos y packs" },
    { value: ".blend", label: "archivos nativos" },
    { value: "Cycles + Eevee", label: "listos para renderizar" },
  ],

  gridTitle: "Explora los",
  gridTitleAccent: "modelos",
  filtersLabel: "Filtrar por estilo",
  filters: { all: "Todos", neon: "Neón y sci-fi", cute: "Tiernos y estilizados", props: "Props y objetos" },
  categoryLabel: { neon: "Neón y sci-fi", cute: "Tiernos y estilizados", props: "Props y objetos" },
  animatedBadge: "Animado",
  bundleBadge: "Pack",
  buyButton: "Comprar en Contra",
  buyAria: "Comprar {name} en Contra",
  checkoutNote: "Precios en USD. Pasa el cursor sobre un modelo animado para verlo en movimiento.",

  whyTitle: "Qué estás",
  whyTitleAccent: "pagando",
  whyIntro:
    "Hay millones de modelos 3D en internet, y cada vez más son renders hechos con IA que se desarman apenas abres el archivo. Estos no.",
  why: [
    {
      name: "Hechos por una persona",
      description:
        "Nada de renders con IA ni assets revendidos. Cada polígono, nodo de shader y keyframe lo hice yo en Blender, así que lo que ves en la vista previa es lo que trae el archivo.",
      icon: "pen-nib",
    },
    {
      name: "Topología limpia",
      description:
        "Mallas ordenadas que puedes editar, subdividir o riggear sin pelearte con ellas. Muy útil cuando el modelo tiene que adaptarse a tu escena y no al revés.",
      icon: "shapes",
    },
    {
      name: "Listos para renderizar",
      description:
        "Materiales, iluminación y animación ya vienen configurados. La mayoría de los archivos se abren, se renderizan y hacen loop sin que toques un solo nodo.",
      icon: "rocket",
    },
  ],

  faqTitle: "Antes de",
  faqTitleAccent: "comprar",
  faq: [
    {
      question: "¿En qué formato viene el archivo?",
      answer:
        "En .blend, el formato nativo de Blender. Blender es gratis, y desde ahí puedes exportar a FBX, OBJ o glTF para Unity, Unreal o cualquier otro programa 3D. Los materiales procedurales no siempre pasan igualitos fuera de Blender, así que cuenta con retocar algún shader si exportas.",
    },
    {
      question: "¿Funcionan en Cycles y en Eevee?",
      answer:
        "Sí. En varias páginas de producto en Contra incluso verás el mismo modelo renderizado en los dos, para que compares. En las piezas de neón el glow sale del compositor de Blender, así que si no aparece, abre la pestaña Compositing y revisa que Use Nodes esté activado.",
    },
    {
      question: "¿Cómo pago y descargo?",
      answer:
        "En Contra. Le das a comprar, pagas allí y Contra te da la descarga. Tus datos de pago van a Contra, nunca a mí.",
    },
    {
      question: "¿Puedes hacerme un modelo a medida?",
      answer:
        "Sí. Productos, mascotas y objetos de marca, en low, mid o high poly según dónde vayan a vivir. Cuéntame qué tienes en mente y te digo lo que implica.",
    },
  ],

  ctaTitle: "¿Necesitas algo",
  ctaTitleAccent: "a medida?",
  ctaCopy:
    "Si el modelo que buscas no está aquí, puedo hacerlo para tu marca, tu juego o tu próxima campaña.",
  ctaButton: "Hablemos",
  ctaSecondary: "Ver mi trabajo 3D",
};

export const shopCopy: Record<Lang, ShopCopy> = { en, es };
