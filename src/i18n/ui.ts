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
    "nav.services": "Extras",
    "nav.services.desc": "Branding · 3D · Illustration",
    "nav.packages": "Packages",
    "nav.packages.desc": "Tiers, pricing & what is included",
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

    // --- Screen reader labels ---
    // Nothing here is visible, which is exactly why it went untranslated for so
    // long. `{name}`/`{title}` are filled in by `useLabels`.
    "aria.footer": "Site footer",
    "aria.footerCredit": "About the website development",
    "aria.mainNav": "Main navigation",
    "aria.themeToggle": "Switch between light and dark mode",
    "aria.hero": "Professional profile and introduction",
    "aria.aboutPage": "View about me page",
    "aria.repo": "View this site's code repository on GitHub",
    "aria.projectsSection": "View projects section",
    "aria.services": "Services",
    "aria.share": "Share on social media",
    "aria.shareOn": "Share on {name}",
    "aria.langs": "Programming languages",
    "aria.tags": "Article tags",
    "aria.readArticle": "Read article: {title}",
    "aria.openFullSize": "Open {title} in full size",
    "aria.openImage": "View full image",
    "aria.viewArticlesAbout": "View articles about {name}",
    "aria.techIcon": "{name} icon",
    "aria.lightbox": "Image viewer",
    "aria.lightboxClose": "Close viewer",
    "aria.prevImage": "Previous image",
    "aria.nextImage": "Next image",
    "aria.close": "Close",
    "share.label": "Share",
    "share.replyEmail": "Reply by email",
    "gallery.viewCase": "View full case study",

    // --- Post reactions ---
    "reaction.title": "What did you make of it?",
    "reaction.love": "Love it",
    "reaction.like": "Like",
    "reaction.useful": "Useful",
    "reaction.amazing": "Amazing",
    "reaction.interesting": "Interesting",

    // --- RSS ---
    "rss.follow": "Follow by RSS",
    "rss.copied": "Feed URL copied",
    "rss.open": "Go to the RSS",
    "rss.email": "Follow RSS by email",

    // --- Home hero ---
    "home.available": "Available for work",
    "home.greeting": "Hello, I'm",
    "home.role": "Web Designer & Frontend Developer",
    // Joins role and years in the hero sentence. Lived in the markup, so the
    // Spanish page read "…desarrolladora frontend with más de 5 años…".
    "home.with": "with",
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
    "home.allServices": "All my extras",
    "projects.packagesLead": "Wondering what a build like these costs?",
    "projects.packagesLink": "See packages & what is included",
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
    "footer.rights": "All rights reserved.",
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

    // --- Page metadata ---
    // Per language, or Google reads /es/… as a duplicate of /… and drops it.
    "seo.home.title": "Grecia V. | Web Designer & Frontend Developer Portfolio",
    "seo.home.description":
      "Portfolio of Grecia V., a web designer and frontend developer specializing in UX/UI design, modern websites, and e-commerce experiences. Explore projects built with WordPress, Shopify, and Astro.",
    "post.previous": "Previous Post",
    "post.next": "Next Post",

    "seo.blog.title": "Web Design and Development Blog | Grecia V.",
    "seo.blog.description":
      "Notes on frontend development, web design and the tools I actually use day to day, written up as I go.",
    "seo.allPosts.title":
      "Web Design, Frontend Development & UI/UX Blog | Grecia V.",
    "seo.allPosts.description":
      "A blog about UI design, web design, frontend development, and UI/UX, where I share insights, projects, and ideas on building modern websites and digital experiences.",
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
    "nav.services": "Extras",
    "nav.services.desc": "Branding · 3D · Ilustración",
    "nav.packages": "Paquetes",
    "nav.packages.desc": "Niveles, precios y qué incluye",
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

    // --- Etiquetas para lectores de pantalla ---
    "aria.footer": "Pie de página",
    "aria.footerCredit": "Sobre el desarrollo del sitio",
    "aria.mainNav": "Navegación principal",
    "aria.themeToggle": "Alternar entre modo claro y oscuro",
    "aria.hero": "Perfil profesional y presentación",
    "aria.aboutPage": "Ver la página sobre mí",
    "aria.repo": "Ver el repositorio de código de este sitio en GitHub",
    "aria.projectsSection": "Ver la sección de proyectos",
    "aria.services": "Servicios",
    "aria.share": "Compartir en redes sociales",
    "aria.shareOn": "Compartir en {name}",
    "aria.langs": "Lenguajes de programación",
    "aria.tags": "Etiquetas del artículo",
    "aria.readArticle": "Leer el artículo: {title}",
    "aria.openFullSize": "Abrir {title} a tamaño completo",
    "aria.openImage": "Ver la imagen completa",
    "aria.viewArticlesAbout": "Ver artículos sobre {name}",
    "aria.techIcon": "Icono de {name}",
    "aria.lightbox": "Visor de imágenes",
    "aria.lightboxClose": "Cerrar el visor",
    "aria.prevImage": "Imagen anterior",
    "aria.nextImage": "Imagen siguiente",
    "aria.close": "Cerrar",
    "share.label": "Compartir",
    "share.replyEmail": "Responder por email",
    "gallery.viewCase": "Ver el caso completo",

    // --- Reacciones de los artículos ---
    "reaction.title": "¿Qué te pareció?",
    "reaction.love": "Me encanta",
    "reaction.like": "Me gusta",
    "reaction.useful": "Útil",
    "reaction.amazing": "Increíble",
    "reaction.interesting": "Interesante",

    // --- RSS ---
    "rss.follow": "Seguir por RSS",
    "rss.copied": "URL del feed copiada",
    "rss.open": "Ir al RSS",
    "rss.email": "Seguir RSS by email",

    // --- Hero del inicio ---
    "home.available": "Disponible para trabajar",
    "home.greeting": "Hola, soy",
    "home.role": "Diseñadora web y desarrolladora frontend",
    "home.with": "con",
    "home.years": "más de 5 años de experiencia",
    "home.intro": "creando experiencias digitales modernas y centradas en el usuario.",
    "home.intro2":
      "Ayudo a las marcas a convertir ideas en sitios web efectivos, con diseño UX pensado, interfaces limpias y desarrollo frontend confiable.",
    "home.aboutBtn": "Sobre mí",
    "home.beyondCode": "Más allá del código",
    "home.visitGithub": "Visita mi GitHub",
    "home.techStack": "Stack",
    "home.techStackAccent": "técnico",
    "home.allServices": "Todos mis extras",
    "projects.packagesLead": "¿Te preguntas cuánto cuesta un sitio así?",
    "projects.packagesLink": "Ver paquetes y qué incluye",
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
    "footer.rights": "Todos los derechos reservados.",
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

    // --- Metadatos de página ---
    "seo.home.title":
      "Grecia V. | Diseñadora web y desarrolladora frontend",
    "seo.home.description":
      "Portafolio de Grecia V., diseñadora web y desarrolladora frontend especializada en diseño UX/UI, sitios modernos y tiendas online. Proyectos hechos con WordPress, Shopify y Astro.",
    "post.previous": "Artículo anterior",
    "post.next": "Artículo siguiente",

    "seo.blog.title": "Blog de diseño y desarrollo web | Grecia V.",
    "seo.blog.description":
      "Apuntes sobre desarrollo frontend, diseño web y las herramientas que uso de verdad en el día a día, escritos sobre la marcha.",
    "seo.allPosts.title":
      "Blog de diseño web, frontend y UI/UX | Grecia V.",
    "seo.allPosts.description":
      "Un blog sobre diseño UI, diseño web, desarrollo frontend y UX, donde comparto ideas, proyectos y lo que aprendo construyendo sitios modernos.",
  },
} as const;
