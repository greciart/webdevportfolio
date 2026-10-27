---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Construí una app de productividad gamificada para TDAH, gratis y open source"
author: Grecia V.
description: "FOCUS TIME es una app de productividad gratuita y de código abierto pensada para el TDAH: moodboards, Pomodoro, body doubling, registro de ánimo y un sistema RPG que no premia el burnout."
image:
  url: "/images/posts/focus-time-adhd-productivity-app.webp"
  alt: "Demo animada de la app de productividad para TDAH FOCUS TIME abriéndose en el navegador: una ventana retro en pixel art que dice Welcome to FOCUS TIME sobre un patrón de píxeles que se desvanece."
pubDate: 2026-08-31
tags:
  [
    "Web Design & UX",
    "AI Tools & Coding",
    "Creative Coding"
  ]
languages: ["figma", "typescript", "tailwind", "claude"]
---

No voy a venderte nada acá. Genuinamente, no. Es gratis, el código es público y no hay ninguna versión premium esperándote tres pantallas más adelante.

Probé Habitica, Forest, todos los temporizadores Pomodoro del planeta y todo lo que me apareció como anuncio en Instagram. Nada me duró más de una semana. Así que construí **FOCUS TIME**, la app de productividad que yo necesitaba, pensada principalmente para personas con TDAH, y después la abrí para todo el mundo.

- **Pruébala:** [focustimeisnow.netlify.app](https://focustimeisnow.netlify.app/)
- **Código fuente:** [github.com/GVPV12/focus-time](https://github.com/GVPV12/focus-time)

---

## Por qué la mayoría de las apps de productividad no funcionan con TDAH

Durante mucho tiempo la productividad digital tuvo una regla bastante simple: si haces más cosas en menos tiempo, estás siendo más productivo. Más tareas completadas. Más horas concentrada. Más Pomodoros. Más rachas que te da terror romper.

Eso le funciona a algunas personas. Pero empecé a preguntarme qué pasa cuando el problema no es que alguien no *quiera* ser productivo, sino que el sistema que usa no se adapta a cómo funciona su cerebro.

A veces sabes exactamente qué tienes que hacer y lo difícil es empezar. A veces 25 minutos funcionan y a veces no. Hay gente que se concentra perfecto sola y gente que se concentra mucho mejor cuando siente que alguien más también está trabajando.

Así que la pregunta detrás de FOCUS TIME fue la contraria a la de siempre: **¿y si una app de productividad se adaptara a la persona, en lugar de intentar convertir a la persona en una máquina de productividad?**

![Reloj de arena con arena azul semienterrado entre piedras, un recordatorio de que la productividad sin presión empieza por cómo se siente el tiempo](../../../../assets/blog/focus-time-productivity-without-pressure.webp)

## Las funciones, y la razón TDAH detrás de cada una

No quería ponerle una etiqueta de "ADHD-friendly" a una interfaz normal. Quería que esas necesidades realmente le dieran forma al diseño.

![Escritorio minimalista con un bolígrafo durazno, lentes, el teclado de una laptop y una agenda con columnas Big Picture, Projects y Notes, el tipo de planificación que FOCUS TIME ayuda a sostener a cerebros con TDAH](../../../../assets/blog/focus-time-designing-for-adhd-brains.webp)

- **Moodboards.** El corazón de la app. Un tablero de corcho totalmente personalizable con stickers, imágenes, notas tipo recordatorio y to-dos, para que la meta que persigues sea algo que puedes *ver*. Está pensado para metas puntuales: lo armas, lo usas y no te exige mantenimiento constante.
- **Un temporizador que se siente.** El time blindness existe. El tiempo se vuelve muy abstracto cuando estás metida en algo, así que el temporizador no es solo un número que baja. Vinculas la sesión a una tarea concreta y se vuelve algo tangible.
- **Pomodoro y body doubling.** Pomodoro está porque le funciona a mucha gente. Body doubling está porque, para muchos cerebros con TDAH, trabajar "al lado" de alguien es la diferencia entre empezar y no empezar.
- **Registro de ánimo y audio ambiental.** Cómo te sientes cambia cómo trabajas. Registrarlo es lo que hace útil el historial después.
- **Recordatorios que puedes silenciar.** Justamente para no romper el hiperfoco, si eres de las personas a las que les cuesta recuperarlo una vez que lo pierden.
- **Sonidos pensados para la dopamina.** No solo de fondo: pequeños sonidos en notificaciones y logros. Dopamina moderada a propósito, lo suficiente para atraer la atención sin volverse otra distracción.

![Pantalla principal de FOCUS TIME: un cuarto isométrico acogedor con corazones en pixel art para la salud, barras de ánimo, botones para cambiar de cuarto, abrir el moodboard, iniciar el temporizador y ver registros, y un pequeño reproductor de música retro](../../../../assets/blog/focus-time-isometric-room-home-screen.webp)

![Editor de moodboard de FOCUS TIME: un tablero de corcho con fotos de viaje, stickers de Keep Shining y Good Work y una checklist en nota adhesiva, junto a un reloj de arena en pixel art con opciones de body doubling y Pomodoro](../../../../assets/blog/focus-time-moodboard-cork-board-editor.webp)

![Una sesión de concentración en FOCUS TIME: el moodboard sigue en pantalla mientras corre el reloj de arena y la checklist marca dos de tres tareas hechas, con botones de Stop, Pause y Done](../../../../assets/blog/focus-time-moodboard-checklist-stickers.webp)

## Un sistema RPG donde descansar también cuenta

Esta es la decisión de la que estoy más orgullosa.

FOCUS TIME usa un sistema inspirado en los RPG: HP, MP, estadísticas, power-ups y progreso. Pero no quería que la gamificación terminara siendo otra versión de la cultura del "haz más". Así que el descanso es parte de la lógica. Tu energía importa. Tu estado de ánimo importa. Recuperarte importa.

El puntaje final de cada sesión **no premia el burnout, pero tampoco premia la prisa**. Balancea salud (HP) y equilibrio entre trabajo y descanso (MP) con qué tan bien te concentraste, no con cuántas tareas tachaste ni qué tan rápido lo hiciste. Las redes sociales nos hicieron creer que cantidad es lo mismo que calidad. No quería que la app reforzara eso.

Terminó sintiéndose menos como una competencia contra ti misma y más como un juego de gestión de recursos: no se trata de sumar puntos, se trata de mantener suficiente energía para seguir.

![Pantalla de puntaje final de FOCUS TIME en pixel art: balance de HP y MP, barras de ánimo, estadísticas RPG como STR, MOT, WIS y DET, insignias y power-ups ganados, con el mensaje "Small steps still move you forward"](../../../../assets/blog/focus-time-session-score-hp-mp.webp)

## Tu historial debería enseñarte algo

Los registros no existen para mostrar números bonitos. Existen para que puedas mirar atrás y descubrir patrones. ¿Cuándo trabajas mejor? ¿Qué tipo de sesiones repites? ¿Cómo estaba tu ánimo? ¿Estás intentando hacer demasiado?

Eso es más útil que saber que completaste 17 tareas esta semana. Una app de productividad no debería solo decirte qué hiciste. También puede ayudarte a entender *cómo* trabajas.

Y como todo eso es información personal, FOCUS TIME tiene **exportación e importación de datos**. Tus sesiones y tus hábitos no deberían sentirse atrapados dentro de una app. Es un detalle técnico, pero también es una decisión de producto. (Por la misma razón mi [commonplace book digital](/es/blog/posts/blog-post-commonplace/) vive en archivos JSON.)

![Primer plano de la esfera de un reloj cronógrafo, para una app de productividad donde tu tiempo y tus datos siguen siendo tuyos gracias a la exportación e importación](../../../../assets/blog/focus-time-your-data-stays-yours.webp)

---

## De Figma a una app funcionando, con IA

Construí FOCUS TIME para el Figma Makeathon de Contra de 2026, y el proceso empezó en Figma: estructura, pantallas, estados e interacciones. Después vino la parte que considero incluso más importante que las pantallas bonitas: convertir todo eso en una especificación que realmente se pudiera implementar.

Ahí entró la IA. Usé Claude Code durante el desarrollo, pero nunca le pedí que "hiciera una app de productividad". Había demasiadas reglas, estados e interacciones para trabajar así. Primero tenía que tener clarísimo qué estaba construyendo, y *después* la IA podía acelerar la implementación:

**Figma → especificación → IA → código → iteración → app funcionando.**

Está hecha con React, TypeScript, Tailwind y Zustand, pero para mí lo más interesante no fue la tecnología. Fue descubrir cuánto del trabajo pasa antes de escribir una sola línea de código. Por eso desconfío del desarrollo de "solo pídeselo a la IA", del que hablé en [la trampa del vibe coding](/es/blog/posts/vibe-coding-trap/). Y si quieres que la IA construya directamente en tu archivo de Figma, [figma-cli](/es/blog/posts/figma-cli-free-mcp-no-rate-limit/) es lo que uso.

## Mira el desglose completo

Hice un video que va mecánica por mecánica: cuáles apuntan a cerebros con TDAH y cuáles a neurotípicos.

<iframe style="width:100%;aspect-ratio:16/9;border:0;border-radius:12px" src="https://www.youtube-nocookie.com/embed/pKM_wpzLSVk" title="Cómo diseñé una app de productividad que funciona para cerebros con y sin TDAH" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

¿Poco tiempo? (Cero juicio, es muy TDAH de tu parte.) [Aquí está la versión corta](https://www.youtube.com/watch?v=H1q0V8ISxkE).

## Ya no es solo cosa del TDAH

Como persona con TDAH, mantener vivo un hobby o un proyecto que necesita actualizarse constantemente no es nada fácil. Mi jardín digital es el ejemplo perfecto: lo abandono, vuelvo, lo abandono de nuevo.

Pero ya no soy la única con este problema. Las redes sociales y los estímulos constantes que piden atención todo el día le hicieron esto al cerebro de casi todo el mundo. La diferencia es que quien tiene TDAH lo tiene desde siempre; el resto lo está adquiriendo ahora, gracias al celular.

Por eso FOCUS TIME no es solo para neurodivergentes. Por eso incluí Pomodoro, y por eso la dopamina es moderada y no una máquina tragamonedas.

Si te interesa el diseño para usuarios neurodivergentes más allá de esta app, profundicé en el apoyo a las funciones ejecutivas en mi [caso de estudio del dashboard EdTech gamificado](/es/portfolio/projects/edtech-dashboard-gamified-ux-design/).

---

## Gratis, open source y abierta a contribuciones

- **App en vivo:** [focustimeisnow.netlify.app](https://focustimeisnow.netlify.app/)
- **Repositorio en GitHub:** [github.com/GVPV12/focus-time](https://github.com/GVPV12/focus-time)
- **Substack:** [la historia completa en mi Substack](https://greciart.substack.com/p/construi-focus-time-app-tdah)

El repo está abierto a contribuciones si quieres mejorarla. También está entre mis [proyectos personales](/es/side-projects/), junto a las otras herramientas y juegos que hago cuando nadie me está pagando.

No necesitas hacer más para demostrar que tu día fue productivo. A veces avanzar es terminar una tarea. A veces es concentrarte 20 minutos. A veces es parar antes de agotarte. Y a veces es simplemente encontrar una forma de volver a empezar.

Si tienes TDAH, o nunca te duró una app de productividad más de una semana, cuéntame: ¿qué es lo único que te haría seguir usando una de verdad?
