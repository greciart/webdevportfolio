import type { Lang } from "./ui";

export type Job = {
  date: string;
  title: string;
  company: string;
  description: string;
};

const en: Job[] = [
  {
    date: "Jan 2021 - Present",
    title: "Freelance Visual Designer and Web Developer",
    company: "Self Employed",
    description:
      "Currently working as a freelance web designer and frontend developer, building high-performance websites using WordPress, Shopify, and Astro, with a strong focus on user experience, scalability, and conversion optimization.",
  },
  {
    date: "Jun 2019 - Jan 2020",
    title: "Web developer",
    company: "Global Consulting Factory",
    description:
      "For this internship, I created a restful API with nodejs, angular, express and used MongoDB as a database manager. It is a MEAN CRUD API, which describes its acronym: creating, reading, updating, and deleting data from the database. The project was made functionally without working on the design, using only angular and bootstrap in the front end.",
  },
  {
    date: "Feb 2019 - Sept 2019",
    title: "Web and social media designer Internship",
    company: "Salud y Familia AC",
    description:
      "I designed and developed a website for medical consultations. The user could pay for their consultation either online or in person (with different payment methods ranging from bank transfer to PayPal and others) and choose the calendar date (if available). I also designed the social media promotion posts for the organization.",
  },
];

const es: Job[] = [
  {
    date: "Ene 2021 - Actualidad",
    title: "Diseñadora visual y desarrolladora web freelance",
    company: "Por cuenta propia",
    description:
      "Actualmente trabajo como diseñadora web y desarrolladora frontend freelance, construyendo sitios de alto rendimiento con WordPress, Shopify y Astro, con foco en la experiencia de usuario, la escalabilidad y la optimización de la conversión.",
  },
  {
    date: "Jun 2019 - Ene 2020",
    title: "Desarrolladora web",
    company: "Global Consulting Factory",
    description:
      "En estas prácticas creé una API REST con Node.js, Angular y Express, usando MongoDB como gestor de base de datos. Es una API CRUD sobre el stack MEAN, es decir: crear, leer, actualizar y eliminar datos de la base. El proyecto se hizo a nivel funcional, sin trabajar el diseño, usando solo Angular y Bootstrap en el frontend.",
  },
  {
    date: "Feb 2019 - Sept 2019",
    title: "Prácticas de diseño web y redes sociales",
    company: "Salud y Familia AC",
    description:
      "Diseñé y desarrollé un sitio web para consultas médicas. La persona podía pagar su consulta en línea o de forma presencial (con distintos métodos, desde transferencia bancaria hasta PayPal, entre otros) y elegir la fecha en el calendario si había disponibilidad. También diseñé las publicaciones de promoción para las redes sociales de la organización.",
  },
];

export const experience: Record<Lang, Job[]> = { en, es };
