---
layout: /src/layouts/MarkdownPostLayout.astro
title: La trampa del vibe coding. Desarrollo rápido, errores caros
author: Grecia V.
description: "Por qué el vibe coding puede ser peligroso en el desarrollo moderno. Los riesgos de confiar a ciegas en el código generado por IA, vulnerabilidades de seguridad, deuda técnica y cómo usar la IA de forma segura."
image:
  url: "/images/posts/vibecoding.webp"
  alt: "Persona desarrollando con código generado por IA en un editor, representando los riesgos del vibe coding, los problemas de seguridad del software y los flujos de trabajo modernos de programación asistida por IA."
pubDate: 2026-05-31
tags:
  [
    "AI Tools & Coding",
    "Career & Craft"
  ]
languages: ["AI", "LLM"]
---



## El problema de construir cosas que no entiendes

Usar IA para programar es inteligente. Depender de ella, no.

Programar toma mucho tiempo de aprender, y eso está bien.

Es completamente razonable querer acelerar el proceso. Para mucha gente (¿para todo el mundo?) programar puede ser tedioso, frustrante y abrumador. Pero querer acelerar el desarrollo es muy distinto de querer construir una app, venderla y sacarle provecho sin entender qué estás vendiendo realmente.

Últimamente, el concepto de vibe coding se ha vuelto increíblemente popular.

Mucha gente lo usa como forma de presumir. Quieren mostrar que construyeron un SaaS en un fin de semana, que lanzaron una app en unas horas, o que generaron miles de líneas de código con IA. Algunos ni siquiera saben qué lenguaje de programación usó la IA.

Esto no es un ataque a la IA.

Yo uso IA todos los días. La IA puede eliminar trabajo repetitivo, acelerar la depuración, generar código repetitivo, explicar conceptos complejos y ayudar a avanzar más rápido que nunca.

El problema empieza cuando la gente deja de tratar a la IA como una herramienta y empieza a tratarla como un sustituto del entendimiento.

Dejar todas las decisiones técnicas en manos de la IA y asumir que siempre va a elegir bien es un error serio.

Es exactamente por eso que hemos visto varios casos de aplicaciones generadas por IA siendo atacadas, filtrando información sensible, exponiendo APIs, publicándose con fallos de autenticación o conteniendo vulnerabilidades de seguridad graves.

Como dije, no estoy en contra de usar IA para programar.

Estoy en contra de usar IA sin supervisión.

Y estoy especialmente en contra de usar IA sin supervisión cuando la persona que construye el producto no tiene idea de cómo funciona la tecnología por debajo.

![Meme de vibe coding contra vibe debugging](/images/posts/vibecodingmeme.webp)

Por eso muchos sitios y aplicaciones construidos enteramente con vibe coding acaban fallando en una de dos áreas:

* Diseño
* Ingeniería

No porque la IA sea incapaz.

Sino porque hay huecos de conocimiento que la gente se niega a llenar porque lo quiere todo de inmediato.

La belleza del proceso también importa.

Ya sea que estés construyendo un sitio web, una app móvil, un videojuego o un producto SaaS, todo proyecto exitoso empieza entendiendo un problema real que solo una persona puede reconocer de verdad.

La IA puede ayudar a ejecutar la solución.

Pero la ejecución debe ser supervisada.

Y sobre todo, quien construye el proyecto debería estar dispuesta a aprender las tecnologías que está usando, para que cuando algo se rompa (que se romperá) sepa cómo arreglarlo.

Porque tarde o temprano, algo siempre se rompe.

![Usar IA para programar no es lo mismo que hacer vibe coding](/images/posts/aicode.webp)

## ¿Qué es el vibe coding?

El vibe coding es la práctica de construir software principalmente a través de prompts a una IA, minimizando la participación directa en la arquitectura, la depuración, las revisiones de seguridad y los detalles de implementación.

En vez de entender el sistema, quien lo crea le pide repetidamente a la IA que:

* Añada funcionalidades
* Arregle errores
* Cree integraciones
* Despliegue aplicaciones
* Configure bases de datos
* Configure la autenticación

Sin entender del todo qué cambios se están haciendo.

El resultado suele verse impresionante desde fuera.

Hasta que llegan los usuarios.

## Los riesgos ocultos del vibe coding

### 1. Vulnerabilidades de seguridad

La seguridad es donde el vibe coding se vuelve realmente peligroso.

La IA puede generar código que funciona.

Eso no significa que genere código seguro.

Los problemas habituales incluyen:

* Claves de API expuestas
* Comprobaciones de autorización ausentes
* Consultas a base de datos inseguras
* Sistemas de autenticación vulnerables
* Infraestructura en la nube mal configurada
* Permisos demasiado amplios

Mucha gente principiante confía en el código generado por IA simplemente porque funciona.

A quien ataca no le importa si el código funciona.

Le importa si puede explotarlo.

### 2. Deuda técnica a escala

Cuando quien desarrolla no entiende el código, cada actualización futura se vuelve más difícil.

Una petición sencilla de funcionalidad puede generar:

* Lógica duplicada
* Dependencias en conflicto
* Problemas de rendimiento
* Pesadillas de mantenimiento

Al final el proyecto se convierte en una colección de parches generados por IA en vez de un sistema coherente.

### 3. Malas decisiones de arquitectura

La IA puede sugerir arquitectura.

No puede entender tus objetivos de negocio tan a fondo como tú.

No conoce:

* Tus limitaciones de presupuesto
* Tus expectativas de crecimiento
* Tu hoja de ruta futura
* El nivel de tu equipo

Sin guía humana, la IA suele producir soluciones que funcionan hoy pero salen caras mañana.

### 4. Falsa confianza

Este quizá sea el problema más peligroso.

La gente empieza a creer que sabe desarrollo de software porque logró publicar algo.

Construir una aplicación no es lo mismo que entender ingeniería de software.

La brecha se vuelve obvia la primera vez que:

* La base de datos se cae
* El servidor deja de responder
* Los usuarios reportan pérdida de datos
* Ocurre un incidente de seguridad
* Falla una integración

Ahí es donde empieza la ingeniería de verdad.

## Cómo usar la IA correctamente

Quienes mejor desarrollan no están evitando la IA.

La están usando estratégicamente.

La IA debería funcionar como una asistente senior, no como una empleada autónoma.

Usa la IA para:

* Generar código repetitivo
* Documentación
* Crear pruebas unitarias
* Sugerencias de refactorización
* Aprender frameworks nuevos
* Ayuda con la depuración
* Revisiones de código
* Análisis de rendimiento

No uses la IA como:

* Tu equipo de seguridad
* Tu arquitecta
* Tu departamento de QA
* Tu revisora de producción
* Tu única fuente de verdad

Verifica siempre lo que genera.

## Recomendaciones de seguridad para sitios y apps asistidos por IA

Si estás construyendo con IA, estas prácticas no son negociables.

### Nunca le des permisos ilimitados a la IA

Muchas herramientas de programación con IA pueden:

* Acceder a repositorios
* Modificar archivos
* Ejecutar comandos
* Desplegar aplicaciones

Aplica el principio de mínimo privilegio.

Concede solo los permisos mínimos necesarios.

### Revisa cada pull request

Nunca hagas merge de código generado por IA a ciegas.

Revisa:

* La lógica de negocio
* Las consultas a base de datos
* Los flujos de autenticación
* Las integraciones de API
* El manejo de errores

Todas y cada una de las veces.

### Mantén los secretos fuera de los prompts

Nunca pegues:

* Claves de API
* Tokens
* Credenciales
* Contraseñas de base de datos
* Certificados privados

Dentro de herramientas de IA.

Trata los prompts como información potencialmente pública.

### Implementa una autenticación correcta

La autenticación es uno de los puntos de fallo más comunes.

Verifica siempre:

* La gestión de sesiones
* Las comprobaciones de autorización
* Los permisos por rol
* Las políticas de contraseñas
* La expiración de tokens

No asumas que la IA lo hizo bien.

### Ejecuta análisis de seguridad

Usa herramientas como:

* npm audit
* pnpm audit
* Snyk
* Dependabot
* Semgrep
* OWASP ZAP

Antes de cada despliegue a producción.

### Valida la entrada del usuario

Nunca confíes en lo que escribe el usuario.

Sanea y valida siempre:

* Formularios
* Parámetros de consulta
* Subidas de archivos
* Peticiones a la API

La IA suele olvidar los casos límite que quienes atacan buscan activamente.

## Recomendaciones de rendimiento

### Evita la inflación de dependencias

A la IA le encanta instalar paquetes.

A veces docenas de ellos.

Pregúntate:

"¿De verdad necesito esta dependencia?"

Cada paquete aumenta:

* El tamaño del bundle
* La superficie de ataque
* La carga de mantenimiento

### Mide antes de optimizar

Usa:

* Lighthouse
* WebPageTest
* Chrome DevTools

No optimices con base en suposiciones.

Optimiza con base en métricas.

### Entiende tu stack

Aprende los fundamentos.

No necesitas volverte experta de la noche a la mañana.

Pero deberías entender lo suficiente para depurar problemas por tu cuenta.

## El futuro no es la IA contra quienes desarrollan

La conversación suele plantearse mal.

El futuro no es:

"La IA reemplazando a quienes programan".

El futuro viene de combinar el criterio humano con la velocidad de la máquina.

Las personas aportan:

* Contexto
* Creatividad
* Visión de producto
* Toma de decisiones
* Responsabilidad

La IA aporta:

* Velocidad
* Automatización
* Reconocimiento de patrones
* Productividad

Juntos son potentes.

Por separado están incompletos.

## Reflexión final

Como puedes ver, mi postura no es blanco o negro. Ni soy otra persona obsesionada con la IA que la convierte en su personalidad entera, ni una detractora intensa que vive con miedo por culpa de ella. Creo que la IA no va de eso. Para un contexto tan complejo, me parece importante conocer las limitaciones y la línea peligrosa entre la IA y los derechos de autor. Y por supuesto, como mencioné antes, el problema está en la seguridad y en la falta de alma y creatividad.

El objetivo nunca debería ser sacarte a ti del proceso.

El objetivo debería ser sacar la fricción innecesaria del proceso.

La IA es una de las mayores herramientas de productividad que ha visto el desarrollo de software.

Pero productividad sin entendimiento es un riesgo.

Si estás construyendo un sitio web, una app, un producto SaaS, lo que sea, aprende lo suficiente de la tecnología para entender qué está pasando por detrás.

Usa la IA como palanca.

Usa la IA como asistente.

Usa la IA como multiplicador.

Pero no le subcontrates tu pensamiento.

Porque cuando las cosas salgan mal, la IA no va a ser la responsable de arreglar el problema.

Vas a ser tú.

Así que es mejor saber cuándo usarla y cómo usarla para acelerar tareas repetitivas, no tareas creativas y con alma.

Dicho de otro modo: la idea y el alma TIENEN que ser creadas por la persona, y la ejecución por la IA (en términos de código). Claro que en otras áreas como la ilustración, la música o la fotografía, la cosa cambia.

Mi reflexión final es que hay que saber de verdad cuándo usarla, porque no en todos los escenarios es seguro, y es muy importante que la gente se eduque más sobre este tema, porque no veo a mucha gente hablando de ello.
