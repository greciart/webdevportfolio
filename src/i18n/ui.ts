export const languages = {
  en: { label: "English", short: "EN", htmlLang: "en", ogLocale: "en_US" },
  es: { label: "Español", short: "ES", htmlLang: "es", ogLocale: "es_ES" },
} as const;

export const defaultLang = "en";

export type Lang = keyof typeof languages;

/**
 * Every visible string on the site, keyed by a dotted namespace.
 * `en` is the source of truth: a key missing from `es` falls back to English
 * rather than rendering blank (see `useTranslations`).
 */
export const ui = {
  en: {
    // --- Navigation ---
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.experience.desc": "Career & background",
    "nav.projects": "Projects",
    "nav.projects.desc": "Selected case studies",
    "nav.about": "About",
    "nav.aboutMe": "About Me",
    "nav.aboutMe.desc": "My story, stack & process",
    "nav.services": "Services",
    "nav.services.desc": "Branding · 3D · Interactive",
    "nav.blog": "Blog",
    "nav.allPosts": "All Posts",
    "nav.allPosts.desc": "Everything I've written",
    "nav.reviews": "Testimonials",
    "nav.contact": "Contact",
    "nav.openMenu": "Open menu",
    "nav.main": "Main Navigation",
    "nav.social": "Social Media Links",

    // --- Language switcher ---
    "lang.switch": "Change language",
    "lang.current": "Current language",
    "a11y.title": "Accessibility",
    "a11y.open": "Accessibility options",
    "a11y.textSize": "Text size",
    "a11y.textNormal": "Normal",
    "a11y.textLarge": "Large",
    "a11y.textLarger": "Larger",
    "a11y.underline": "Underline links",
    "a11y.motion": "Reduce motion",
    "a11y.reset": "Reset",

    // --- Home hero ---
    "home.available": "Available for work",
    "home.greeting": "Hello, I'm",
    "home.role": "Web Designer & Frontend Developer",
    "home.years": "5+ years of experience",
    "home.intro":
      "creating modern, user-focused digital experiences.",
    "home.intro2":
      "I help brands turn ideas into effective websites through thoughtful UX design, clean UI, and reliable frontend development.",
    "home.aboutBtn": "About Me",
    "home.beyondCode": "Beyond the Code",
    "home.visitGithub": "Visit my GitHub",
    "home.techStack": "Tech",
    "home.techStackAccent": "Stack",
    "home.allServices": "All my services",
    "home.projects": "Projects",
    "home.projectsCopy":
      "Compilation of my projects as a freelancer. I have had the opportunity to work on a variety of projects, collaborating with clients from all over the world in different industries and backgrounds.",
    "home.freelancer": "freelancer",

    // --- Experience ---
    "experience.title": "Work",
    "experience.titleAccent": "Experience",
    "experience.aria": "Professional experience",

    // --- Projects ---
    "projects.title": "Projects",
    "projects.titleAccent": "Completed",
    "projects.copy":
      "A curated collection of high-performance web design and development projects, including e-commerce websites, landing pages, and scalable digital platforms built to enhance user experience, increase engagement, and drive business growth.",
    "projects.highlight": "web design and development",
    "projects.viewMore": "View More Projects...",

    // --- Contact band ---
    "contactBand.title": "Have a project in mind?",
    "contactBand.subtitle": "Let's work together.",
    "contactBand.button": "Contact Me",

    // --- Footer ---
    "footer.developedBy": "Developed by",
    "footer.with": "with Astro",
    "footer.home": "Go to home",
    "footer.nav": "Footer navigation",
    "footer.social": "Social media links",

    // --- Sidebar ---
    "sidebar.languages": "Languages",
    "sidebar.softSkills": "Soft Skills",
    "sidebar.labProgress": "Lab Progress",
    "sidebar.toc": "Table of Contents",

    // --- Blog ---
    "blog.allPosts": "All",
    "blog.allPostsAccent": "Posts",
    "blog.viewAll": "View all posts...",
    "blog.techs": "TECHS",
    "blog.readMore": "Read more",
    "blog.share": "Share",
    "blog.publishedOn": "Published on",

    // --- About page ---
    "about.title": "About",
    "about.titleAccent": "me",
    "about.role": "Web developer and designer",
    "about.years": "5+ years of experience",
    "about.intro":
      ", passionate about design, development, user interfaces and user experience (UI/UX). I love bringing digital projects to life.",
    "about.stack": "Technological",
    "about.stackAccent": "Stack",

    // --- Sidebar values ---
    "sidebar.langSpanish": "Spanish (native)",
    "sidebar.langEnglish": "English (fluent)",
    "sidebar.skill1": "Clear communication",
    "sidebar.skill2": "Problem solving",
    "sidebar.skill3": "Attention to detail",
    "sidebar.skill4": "Reliability & deadlines",
    "sidebar.skill5": "Adaptability",
    "sidebar.skill6": "Client & user empathy",
    "sidebar.labPersonal": "Personal projects",
    "sidebar.labGames": "Game projects",

    // --- Reviews ---
    "reviews.eyebrow": "What clients say",
    "reviews.title": "Client",
    "reviews.titleAccent": "Reviews",
    "reviews.intro":
      "Real reviews from clients and professional recommendations. I've worked with across multiple platforms. See what they say about my web design and development work.",
    "reviews.pageTitle": "Client Reviews | Grecia V. - Web Designer & Developer",
    "reviews.description":
      "Real testimonials from clients and professional recommendations across multiple platforms. See what they say about my web design and development work.",
    "reviews.statProjects": "Projects Completed",
    "reviews.statRating": "Average Rating",
    "reviews.statPlatforms": "Platforms",
    "reviews.statSatisfaction": "Client Satisfaction",
    "reviews.viewOn": "View on",
    "reviews.viewProject": "View project",

    // --- 404 ---
    "404.title": "Page not found",
    "404.copy": "The page you're looking for doesn't exist or has moved.",
    "404.back": "Back to home",
  },

  es: {
    // --- Navegación ---
    "nav.home": "Inicio",
    "nav.experience": "Experiencia",
    "nav.experience.desc": "Trayectoria y formación",
    "nav.projects": "Proyectos",
    "nav.projects.desc": "Casos de estudio seleccionados",
    "nav.about": "Sobre mí",
    "nav.aboutMe": "Quién soy",
    "nav.aboutMe.desc": "Mi historia, stack y proceso",
    "nav.services": "Servicios",
    "nav.services.desc": "Branding · 3D · Interactivo",
    "nav.blog": "Blog",
    "nav.allPosts": "Todos los artículos",
    "nav.allPosts.desc": "Todo lo que he escrito",
    "nav.reviews": "Testimonios",
    "nav.contact": "Contacto",
    "nav.openMenu": "Abrir menú",
    "nav.main": "Navegación principal",
    "nav.social": "Redes sociales",

    // --- Selector de idioma ---
    "lang.switch": "Cambiar idioma",
    "lang.current": "Idioma actual",
    "a11y.title": "Accesibilidad",
    "a11y.open": "Opciones de accesibilidad",
    "a11y.textSize": "Tamaño del texto",
    "a11y.textNormal": "Normal",
    "a11y.textLarge": "Grande",
    "a11y.textLarger": "Más grande",
    "a11y.underline": "Subrayar enlaces",
    "a11y.motion": "Reducir movimiento",
    "a11y.reset": "Restablecer",

    // --- Hero del inicio ---
    "home.available": "Disponible para trabajar",
    "home.greeting": "Hola, soy",
    "home.role": "Diseñadora web y desarrolladora frontend",
    "home.years": "más de 5 años de experiencia",
    "home.intro": "creando experiencias digitales modernas y centradas en el usuario.",
    "home.intro2":
      "Ayudo a las marcas a convertir ideas en sitios web efectivos, con diseño UX pensado, interfaces limpias y desarrollo frontend confiable.",
    "home.aboutBtn": "Sobre mí",
    "home.beyondCode": "Más allá del código",
    "home.visitGithub": "Visita mi GitHub",
    "home.techStack": "Stack",
    "home.techStackAccent": "técnico",
    "home.allServices": "Todos mis servicios",
    "home.projects": "Proyectos",
    "home.projectsCopy":
      "Recopilación de mis proyectos como freelance. He tenido la oportunidad de trabajar en proyectos muy variados, colaborando con clientes de todo el mundo en distintos sectores y contextos.",
    "home.freelancer": "freelance",

    // --- Experiencia ---
    "experience.title": "Experiencia",
    "experience.titleAccent": "laboral",
    "experience.aria": "Experiencia profesional",

    // --- Proyectos ---
    "projects.title": "Proyectos",
    "projects.titleAccent": "completados",
    "projects.copy":
      "Una selección de proyectos de diseño y desarrollo web de alto rendimiento: tiendas en línea, landing pages y plataformas digitales escalables, construidos para mejorar la experiencia de usuario, aumentar la interacción e impulsar el negocio.",
    "projects.highlight": "diseño y desarrollo web",
    "projects.viewMore": "Ver más proyectos...",

    // --- Franja de contacto ---
    "contactBand.title": "¿Tienes un proyecto en mente?",
    "contactBand.subtitle": "Trabajemos juntos.",
    "contactBand.button": "Contáctame",

    // --- Pie de página ---
    "footer.developedBy": "Desarrollado por",
    "footer.with": "con Astro",
    "footer.home": "Ir al inicio",
    "footer.nav": "Navegación del pie de página",
    "footer.social": "Redes sociales",

    // --- Barra lateral ---
    "sidebar.languages": "Idiomas",
    "sidebar.softSkills": "Habilidades blandas",
    "sidebar.labProgress": "Progreso del laboratorio",
    "sidebar.toc": "Tabla de contenidos",

    // --- Blog ---
    "blog.allPosts": "Todos los",
    "blog.allPostsAccent": "artículos",
    "blog.viewAll": "Ver todos los artículos...",
    "blog.techs": "TECNOLOGÍAS",
    "blog.readMore": "Leer más",
    "blog.share": "Compartir",
    "blog.publishedOn": "Publicado el",

    // --- Página Sobre mí ---
    "about.title": "Sobre",
    "about.titleAccent": "mí",
    "about.role": "Diseñadora y desarrolladora web",
    "about.years": "más de 5 años de experiencia",
    "about.intro":
      ", apasionada por el diseño, el desarrollo, las interfaces y la experiencia de usuario (UI/UX). Me encanta dar vida a proyectos digitales.",
    "about.stack": "Stack",
    "about.stackAccent": "tecnológico",

    // --- Valores de la barra lateral ---
    "sidebar.langSpanish": "Español (nativo)",
    "sidebar.langEnglish": "Inglés (fluido)",
    "sidebar.skill1": "Comunicación clara",
    "sidebar.skill2": "Resolución de problemas",
    "sidebar.skill3": "Atención al detalle",
    "sidebar.skill4": "Cumplimiento de plazos",
    "sidebar.skill5": "Adaptabilidad",
    "sidebar.skill6": "Empatía con cliente y usuario",
    "sidebar.labPersonal": "Proyectos personales",
    "sidebar.labGames": "Proyectos de videojuegos",

    // --- Testimonios ---
    "reviews.eyebrow": "Lo que dicen mis clientes",
    "reviews.title": "Testimonios",
    "reviews.titleAccent": "de clientes",
    "reviews.intro":
      "Reseñas reales de clientes y recomendaciones profesionales en distintas plataformas. Mira lo que dicen sobre mi trabajo de diseño y desarrollo web.",
    "reviews.pageTitle": "Testimonios | Grecia V. - Diseñadora y desarrolladora web",
    "reviews.description":
      "Testimonios reales de clientes y recomendaciones profesionales en distintas plataformas. Mira lo que dicen sobre mi trabajo de diseño y desarrollo web.",
    "reviews.statProjects": "Proyectos completados",
    "reviews.statRating": "Valoración media",
    "reviews.statPlatforms": "Plataformas",
    "reviews.statSatisfaction": "Satisfacción del cliente",
    "reviews.viewOn": "Ver en",
    "reviews.viewProject": "Ver proyecto",

    // --- 404 ---
    "404.title": "Página no encontrada",
    "404.copy": "La página que buscas no existe o fue movida.",
    "404.back": "Volver al inicio",
  },
} as const;
