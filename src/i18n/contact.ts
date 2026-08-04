import type { Lang } from "./ui";

export type ContactCopy = {
  pageTitle: string;
  description: string;

  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  availability: string;

  formTitle: string;
  requiredNote: [string, string];
  labelName: string;
  labelEmail: string;
  labelService: string;
  labelBudget: string;
  labelMessage: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderMessage: string;
  servicePlaceholder: string;
  budgetPlaceholder: string;
  services: string[];
  budgets: string[];
  submit: string;
  submitting: string;
  orWrite: string;
  honeypot: string;

  errorTooFast: string;
  errorCaptcha: string;
  errorGeneric: string;

  successTitle: string;
  successCopy: string;
  bookCall: string;

  callTitle: string;
  callCopy: string;
  elsewhere: string;

  facts: { title: string; text: string }[];
};

const en: ContactCopy = {
  pageTitle: "Contact | Grecia V. - Web Designer & Frontend Developer",
  description:
    "Tell me about your project: web design and development, branding, 3D modeling and animation, or interactive experiences. Send me a message and I'll get back to you within 24 hours.",

  eyebrow: "Let's work together",
  title: "Get in",
  titleAccent: "Touch",
  intro:
    "Tell me what you're building and what you need it to do. I read every message personally and usually reply within 24 hours.",
  availability: "Currently available for new projects",

  formTitle: "Send me a message",
  requiredNote: ["Fields marked with ", " are required."],
  labelName: "Name",
  labelEmail: "Email",
  labelService: "What do you need?",
  labelBudget: "Estimated budget",
  labelMessage: "Project details",
  placeholderName: "Your name",
  placeholderEmail: "you@company.com",
  placeholderMessage:
    "What are you building, who is it for, and when do you need it? Links to references are very welcome.",
  servicePlaceholder: "Select a service…",
  budgetPlaceholder: "Prefer not to say",
  services: [
    "Web design & development",
    "Branding (logo, full branding, brand manual)",
    "3D modeling & animation",
    "Immersive interactive experiences / game UI",
    "Something else",
  ],
  budgets: ["$500 – $1,000", "$1,000 – $3,000", "$3,000+", "Not defined yet"],
  submit: "Send message",
  submitting: "Sending…",
  orWrite: "Or write directly to",
  honeypot: "Don't fill this out if you're human:",

  errorTooFast: "That was a little too quick — please review your message and send it again.",
  errorCaptcha: "Please complete the “I'm not a robot” check before sending.",
  errorGeneric:
    "Something went wrong sending your message. Please email me directly at greciavalentinapv@gmail.com and I'll reply right away.",

  successTitle: "Message sent!",
  successCopy:
    "Thanks for reaching out. I'll get back to you within 24 hours — if it's urgent, you can also book a call directly.",
  bookCall: "Book a free call",

  callTitle: "Prefer a quick call?",
  callCopy:
    "Book a free 30-minute call and we'll go through your idea, scope and timeline together.",
  elsewhere: "Find me elsewhere",

  facts: [
    { title: "Response time", text: "Usually under 24 hours, Monday to Friday." },
    { title: "Working remotely", text: "With clients across LATAM, the US, Canada and Europe." },
    { title: "Languages", text: "Spanish (native) & English." },
  ],
};

const es: ContactCopy = {
  pageTitle: "Contacto | Grecia V. - Diseñadora web y desarrolladora frontend",
  description:
    "Cuéntame sobre tu proyecto: diseño y desarrollo web, branding, modelado y animación 3D, o experiencias interactivas. Escríbeme y te respondo en menos de 24 horas.",

  eyebrow: "Trabajemos juntos",
  title: "Hablemos",
  titleAccent: "ahora",
  intro:
    "Cuéntame qué estás construyendo y qué necesitas que haga. Leo cada mensaje personalmente y normalmente respondo en menos de 24 horas.",
  availability: "Disponible para nuevos proyectos",

  formTitle: "Escríbeme un mensaje",
  requiredNote: ["Los campos marcados con ", " son obligatorios."],
  labelName: "Nombre",
  labelEmail: "Correo",
  labelService: "¿Qué necesitas?",
  labelBudget: "Presupuesto estimado",
  labelMessage: "Detalles del proyecto",
  placeholderName: "Tu nombre",
  placeholderEmail: "tu@empresa.com",
  placeholderMessage:
    "¿Qué estás construyendo, para quién es y para cuándo lo necesitas? Los enlaces de referencia son muy bienvenidos.",
  servicePlaceholder: "Elige un servicio…",
  budgetPlaceholder: "Prefiero no decirlo",
  services: [
    "Diseño y desarrollo web",
    "Branding (logo, branding completo, manual de marca)",
    "Modelado y animación 3D",
    "Experiencias interactivas inmersivas / UI de videojuegos",
    "Otra cosa",
  ],
  budgets: ["$500 – $1.000", "$1.000 – $3.000", "$3.000+", "Aún sin definir"],
  submit: "Enviar mensaje",
  submitting: "Enviando…",
  orWrite: "O escríbeme directamente a",
  honeypot: "No completes esto si eres humano:",

  errorTooFast: "Eso fue demasiado rápido — revisa tu mensaje y vuelve a enviarlo.",
  errorCaptcha: "Completa la verificación «No soy un robot» antes de enviar.",
  errorGeneric:
    "Algo salió mal al enviar tu mensaje. Escríbeme directamente a greciavalentinapv@gmail.com y te respondo enseguida.",

  successTitle: "¡Mensaje enviado!",
  successCopy:
    "Gracias por escribirme. Te respondo en menos de 24 horas — si es urgente, también puedes agendar una llamada directamente.",
  bookCall: "Agenda una llamada gratis",

  callTitle: "¿Prefieres una llamada rápida?",
  callCopy:
    "Agenda una llamada gratuita de 30 minutos y repasamos juntos tu idea, el alcance y los tiempos.",
  elsewhere: "Encuéntrame en otros sitios",

  facts: [
    { title: "Tiempo de respuesta", text: "Normalmente en menos de 24 horas, de lunes a viernes." },
    { title: "Trabajo en remoto", text: "Con clientes de LATAM, Estados Unidos, Canadá y Europa." },
    { title: "Idiomas", text: "Español (nativo) e inglés." },
  ],
};

export const contactCopy: Record<Lang, ContactCopy> = { en, es };
