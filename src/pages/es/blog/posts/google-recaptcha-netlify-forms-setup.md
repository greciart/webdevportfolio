---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Google reCAPTCHA en Netlify Forms: las API keys paso a paso"
author: Grecia V.
description: "Crea las API keys de reCAPTCHA v2, añádelas como variables de entorno en Netlify, y carga el widget sin perjudicar tu puntuación de PageSpeed."
image:
  url: "/images/posts/google-recaptcha-netlify-forms-bot-protection.webp"
  alt: "Una mano robótica alcanzando una red digital luminosa, representando los bots automatizados que atacan los formularios de contacto y la necesidad de protección contra spam."
pubDate: 2026-07-29
tags:
  [
    "Web Development",
    "Security & Privacy",
    "Tutorials & Guides"
  ]
languages: ["netlify", "html", "javascript"]
---

Un formulario de contacto sin protección acaba recogiendo basura tarde o temprano. No porque alguien te haya elegido a ti, sino porque hay bots rastreando la web en busca de cualquier formulario expuesto para enviar a todos.

El campo honeypot de Netlify frena a los más torpes. Para el resto necesitas un captcha de verdad. La buena noticia es que Netlify verifica Google reCAPTCHA **en el servidor**, así que un bot no puede saltárselo enviando directamente al endpoint.

La mala noticia, y la razón por la que mucha gente evita los captchas, es que reCAPTCHA carga un script pesado de Google. Si lo añades de forma ingenua, tu puntuación de Lighthouse cae. Esta guía cubre las dos mitades: generar las llaves correctamente, y cargar el widget de forma que no cueste nada al abrir la página.

![Teclas de teclado y una llave de seguridad física junto a una laptop, representando las credenciales de sitio y secreta de una API](/images/posts/recaptcha-site-key-secret-key-credentials.webp)

## Antes de empezar: necesitas v2, no v3

Esto hace tropezar a casi todo el mundo, porque Google preselecciona la opción equivocada.

Cuando creas un sitio de reCAPTCHA, Google elige por defecto **v3 (basado en puntuación)**. Netlify Forms **no** admite v3. Solo admite **reCAPTCHA v2 con la casilla "No soy un robot"**.

Si generas llaves v3, todo parecerá configurado y todos los envíos serán rechazados. Elige v2 desde el principio y te ahorras la depuración.

## Paso 1. Genera las API keys de reCAPTCHA

Entra a [google.com/recaptcha/admin/create](https://www.google.com/recaptcha/admin/create) e inicia sesión con tu cuenta de Google.

**Etiqueta** — un nombre interno para identificar el sitio después. Tu dominio o el nombre del proyecto sirven: `misitio-contacto`.

**Tipo de reCAPTCHA** — cámbialo de "Basado en una puntuación (v3)" a **"Desafío (v2)"**. Aparecerá una subopción. Elige **Casilla de verificación "No soy un robot"**.

**Dominios** — añade el dominio donde vive el formulario, sin `https://` y sin barra al final:

```text
misitio.netlify.app
```

Añade también tu dominio propio si lo tienes. Cada dominio va en su propia línea. No agregues `localhost`: reCAPTCHA no va a funcionar en un servidor de desarrollo local con Netlify Forms de todos modos, porque la gestión de formularios solo corre en la infraestructura de Netlify.

**Proyecto de Google Cloud** — reCAPTCHA ahora forma parte de Google Cloud, así que te pedirá elegir o crear un proyecto. Cualquiera sirve; no afecta al comportamiento del captcha.

Acepta los términos y envía.

## Paso 2. Copia las dos llaves

La pantalla de confirmación te da dos valores. Se parecen, **no** son intercambiables, y confundirlos es el segundo fallo más común:

| Llave | Qué es | Dónde va |
|---|---|---|
| **Clave de sitio** | Pública. Se imprime en tu HTML para que aparezca el widget. | En el marcado de tu página, más una variable de Netlify |
| **Clave secreta** | Privada. Se usa en el servidor para verificar el token que emite Google. | Solo en una variable de Netlify |

Las dos empiezan por `6L`. Que la clave de sitio sea pública es por diseño, no es una filtración. La clave secreta no debe aparecer nunca en tu repositorio, en tu HTML ni en una captura de pantalla.

Copia ambas en algún sitio temporal. Las vas a pegar en el paso siguiente.

## Paso 3. Añade las llaves como variables de entorno en Netlify

En tu panel de Netlify, ve a **Site configuration → Environment variables → Add a variable**.

Vas a crear **tres** variables. La integración de Netlify lee dos de ellas, y tu propio código de frontend lee la tercera:

| Key (el nombre de la variable) | Value (pega lo de Google) | Contains secret values |
|---|---|---|
| `SITE_RECAPTCHA_KEY` | Tu clave de **sitio** (`6L...`) | Déjalo sin marcar |
| `SITE_RECAPTCHA_SECRET` | Tu clave **secreta** (`6L...`) | Márcalo |
| `PUBLIC_RECAPTCHA_SITE_KEY` | Tu clave de **sitio** otra vez, el mismo valor | Déjalo sin marcar |

Para las tres, deja **Scopes** en *All scopes* y **Values** en *Same value for all deploy contexts*.

Aquí hay dos cosas que conviene cuidar:

* **El campo "Key" lleva el nombre de la variable. El campo "Value" lleva la cadena larga de Google.** Suena obvio, pero pegar el nombre de la variable en la casilla del valor es un error facilísimo de cometer, y Netlify no te va a avisar.
* **Dos de las tres comparten el mismo valor.** `SITE_RECAPTCHA_KEY` y `PUBLIC_RECAPTCHA_SITE_KEY` llevan las dos la clave de sitio. Solo `SITE_RECAPTCHA_SECRET` es distinta.

¿Por qué tres? `SITE_RECAPTCHA_KEY` y `SITE_RECAPTCHA_SECRET` son los nombres que busca la integración propia de Netlify. La que empieza por `PUBLIC_` es la que lee el código cliente de tu sitio para dibujar el widget. Si dejas que Netlify inyecte el widget automáticamente puedes saltarte la tercera, pero entonces pierdes el control sobre cuándo se carga el script, que es justamente de lo que trata la sección siguiente.

**Las variables de entorno solo se aplican a builds nuevos.** Después de añadirlas, lanza un redeploy o no cambiará nada.

## Paso 4. Marca el formulario y reserva el espacio del widget

Añade `data-netlify-recaptcha="true"` al formulario, y un contenedor donde se montará el widget:

```html
<form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  data-netlify-recaptcha="true"
>
  <input type="hidden" name="form-name" value="contact" />

  <!-- tus campos -->

  <div id="recaptcha-slot" data-sitekey="TU_CLAVE_DE_SITIO" class="min-h-[78px]"></div>

  <button type="submit">Enviar mensaje</button>
</form>
```

Ese `min-h-[78px]` importa más de lo que parece. El widget de casilla de reCAPTCHA mide exactamente 78px de alto. Reservar el espacio de antemano significa que, cuando el widget aparezca, nada de lo que hay debajo dará un salto. Eso mantiene tu **Cumulative Layout Shift en cero**, que es una Core Web Vital que Google mide directamente.

En un framework, lee la clave de sitio desde el entorno en vez de escribirla a mano:

```javascript
const recaptchaSiteKey = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY ?? "";
```

Condicionar todo el bloque a que ese valor exista es una buena costumbre: el formulario sigue funcionando con normalidad antes de que hayas configurado las llaves, en lugar de romperse.

## Paso 5. Carga reCAPTCHA de forma diferida para no perder PageSpeed

Esta es la parte que separa un captcha del que te arrepientes de uno que olvidas que está.

El script de reCAPTCHA de Google arrastra varios cientos de kilobytes de JavaScript. Cargado de forma normal, compite con tu página durante la carga y aparece en Lighthouse como JavaScript sin usar y trabajo extra en el hilo principal.

Pero nadie necesita el captcha hasta que interactúa con el formulario. Así que no lo cargues hasta que lo hagan:

```javascript
const form = document.getElementById("contact-form");
const slot = document.getElementById("recaptcha-slot");
let requested = false;

function loadCaptcha() {
  if (requested || !slot) return;
  requested = true;

  window.onCaptchaReady = () => {
    window.grecaptcha.render(slot, { sitekey: slot.dataset.sitekey });
  };

  const script = document.createElement("script");
  script.src =
    "https://www.google.com/recaptcha/api.js?onload=onCaptchaReady&render=explicit";
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

["focusin", "pointerdown", "keydown"].forEach((event) =>
  form.addEventListener(event, loadCaptcha, { once: true, passive: true }),
);
```

El truco es `render=explicit` combinado con una función de `onload`. Le dice a Google que no rastree la página automáticamente, y que llame a tu función cuando esté listo para que montes el widget exactamente donde quieres.

El resultado: **cero bytes descargados al cargar la página**. PageSpeed Insights mide la carga inicial de una página en frío, y un visitante que nunca toca el formulario nunca descarga el script. Tu puntuación se queda exactamente donde estaba.

Verifica que funcionó mirando el código fuente de la página publicada y buscando `recaptcha`. Solo debería aparecer dentro de tu JavaScript en línea como una cadena de texto, nunca como una etiqueta `<script src>`.

![Un puesto de trabajo de programación con teclado iluminado y varias pantallas mostrando código, representando el script del cliente que carga el captcha bajo demanda](/images/posts/spam-bots-blocked-contact-form.webp)

## Paso 6. Comprueba el token antes de enviar

Si envías con `fetch`, verifica que la persona completó el desafío antes de mandar nada. De lo contrario Netlify lo rechaza y tu visitante ve un error genérico:

```javascript
if (slot && !window.grecaptcha?.getResponse?.()) {
  showError("Completa la verificación «No soy un robot» antes de enviar.");
  return;
}
```

El token viaja solo. Google inyecta un campo oculto `g-recaptcha-response` dentro del contenedor del widget, y como ese contenedor está dentro de tu `<form>`, `new FormData(form)` lo recoge sin trabajo adicional.

Un detalle que conviene manejar: el token es de un solo uso. Si el envío falla y la persona lo reintenta, resetea el widget primero:

```javascript
window.grecaptcha?.reset?.();
```

Sin esto, el segundo intento falla con un token caducado y parece que tu formulario está roto.

## Resolución de problemas

**Todos los envíos son rechazados.** Casi con seguridad generaste llaves v3. Vuelve a Google, crea un sitio nuevo con **Desafío (v2) → Casilla**, y reemplaza las dos variables.

**"Dominio no válido para la clave de sitio".** El dominio en la configuración de reCAPTCHA no coincide con donde se sirve el formulario. Los deploy previews usan un subdominio distinto, así que añádelo o prueba en producción.

**El widget nunca aparece.** Comprueba que `PUBLIC_RECAPTCHA_SITE_KEY` está configurada y que volviste a desplegar. Después abre la consola del navegador y busca un error de script de Google.

**Funciona en local pero no publicado, o al revés.** Netlify Forms y su verificación de captcha solo corren en Netlify. Los servidores de desarrollo local siempre fallarán al enviar; eso es lo esperado, no un error de configuración.

## ¿Es un captcha la herramienta adecuada?

Vale la pena preguntárselo con honestidad. Combina tus defensas y entiende qué hace cada una realmente:

* **Honeypot** — gratis, invisible, verificado por Netlify en el servidor. Bloquea bots poco sofisticados. Úsalo siempre.
* **reCAPTCHA v2** — verificado por Netlify en el servidor. Bloquea casi todo, a cambio de pedirle a personas reales que marquen una casilla.
* **Comprobaciones de tiempo y trampas de JavaScript** — gratis, pero solo del lado del cliente, así que no detienen a un bot que envía directamente al endpoint. Útiles como señal extra, no como defensa principal.

Si tu formulario recibe un par de mensajes de spam al mes, puede que el honeypot solo sea suficiente y les ahorres la fricción a tus visitantes. Si estás ahogándote en ellos, añade el captcha. Y si prefieres no pasar a tus visitantes por Google, Cloudflare Turnstile es una alternativa más ligera y privada, aunque necesita una función serverless para verificar los tokens, ya que Netlify no lo comprueba de forma nativa.

## Para cerrar

Hacer esto bien se reduce a cinco cosas:

1. Genera llaves **v2 con casilla**, nunca v3
2. Ten claras cuál es la clave de sitio y cuál la secreta, y nunca subas la secreta al repositorio
3. Crea las tres variables de entorno, y después vuelve a desplegar
4. Reserva 78px para que el widget no desplace tu maquetado
5. Carga el script de Google solo al primer contacto, para que tu puntuación de rendimiento quede intacta

Hecho así, el spam se acaba y nadie, incluido Lighthouse, se entera de que el captcha está ahí.
