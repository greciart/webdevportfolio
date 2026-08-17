---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Formulario de contacto en Netlify: cómo recibir los correos"
author: Grecia V.
description: "El HTML exacto que Netlify Forms necesita, por qué los envíos nunca llegan a tu bandeja por defecto, y cómo activar las notificaciones por correo."
image:
  url: "/images/posts/netlify-contact-form-email-notifications.webp"
  alt: "Una profesional revisando correos entrantes en una computadora de escritorio en una oficina luminosa, representando los envíos de un formulario de contacto llegando a la bandeja de entrada."
pubDate: 2026-07-22
tags:
  [
    "Web Development",
    "Tutorials & Guides"
  ]
languages: ["netlify", "html", "javascript"]
---

Construiste la página de contacto. El formulario se ve bien. Publicas el sitio, te mandas un mensaje de prueba, ves la pantalla de éxito y luego esperas un correo que nunca llega.

Este es el problema más común de Netlify Forms, y casi nunca es un fallo en tu código. **Netlify Forms no te envía correos por defecto.** Guarda los envíos en el panel de tu sitio y se queda callado hasta que le digas explícitamente lo contrario.

En esta guía vas a configurar un formulario de contacto en Netlify correctamente desde cero: el marcado exacto que Netlify busca, los errores que hacen que tu formulario sea invisible para la plataforma, cómo activar las notificaciones por correo, y cómo enviar con JavaScript sin perder nada por el camino.

![Una pantalla de laptop mostrando una interfaz web con campos de entrada, representando un formulario de contacto HTML construido para un sitio estático](/images/posts/html-contact-form-netlify-data-attributes.webp)

## Cómo funciona realmente Netlify Forms

Entender el mecanismo te ahorra horas de depuración. Hay dos fases separadas:

1. **Durante el build**, los bots de Netlify rastrean los archivos HTML que publicaste y buscan formularios marcados con un atributo concreto. Cada formulario que encuentra queda registrado, junto con sus campos.
2. **En tiempo de ejecución**, cuando alguien hace POST a cualquier ruta de tu sitio, Netlify intercepta la petición, la asocia a un formulario registrado por su nombre, y guarda el envío.

De ahí salen dos consecuencias que explican la mayoría de los problemas:

* **Tu formulario debe existir en el HTML estático al momento de publicar.** Si un framework de JavaScript lo renderiza solo en el navegador, el rastreador de Netlify nunca lo ve y el formulario jamás queda registrado.
* **El registro ocurre al publicar, no sobre la marcha.** Si añades un campo, tienes que volver a desplegar para que Netlify lo conozca.

## Paso 1. Escribe el marcado que Netlify espera

Aquí tienes un formulario completo y funcional. Cada atributo cumple una función:

```html
<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />

  <p class="hidden">
    <label>No completes esto si eres humano: <input name="bot-field" /></label>
  </p>

  <label for="name">Nombre</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Correo</label>
  <input type="email" id="email" name="email" required />

  <label for="message">Mensaje</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Enviar mensaje</button>
</form>
```

Lo que importa, punto por punto:

* **`data-netlify="true"`** es la bandera que busca el rastreador del build. Sin esto, nada más funciona.
* **`name="contact"`** identifica el formulario. Si tienes varios en un sitio, cada uno necesita un nombre único.
* **`<input type="hidden" name="form-name" value="contact" />`** debe coincidir exactamente con el atributo `name` del formulario. Netlify usa este campo para enrutar el envío. Si no coincide, verás un 404 al enviar.
* **`method="POST"`** es obligatorio. Un formulario con GET no se captura.
* **Cada campo que quieras recibir necesita un atributo `name`.** Un campo que solo tenga `id` es invisible para Netlify.
* **`data-netlify-honeypot="bot-field"`** activa la trampa antispam integrada, que explico abajo.

### El campo honeypot

El honeypot es un campo señuelo oculto para las personas mediante CSS. Los visitantes reales nunca lo ven, así que nunca lo llenan. Los bots automatizados llenan todos los campos que encuentran, así que un honeypot lleno es una señal fiable de spam, y Netlify descarta esos envíos en el servidor antes de que te lleguen.

No cuesta nada, no añade JavaScript, y bloquea una parte considerable del tráfico de bots. No hay razón para saltárselo.

Ojo: la clase `hidden` tiene que ocultar el campo de verdad en tu CSS. Si usas Tailwind, `class="hidden"` ya funciona. Con CSS plano, añade:

```css
.hidden {
  display: none;
}
```

## Paso 2. Publica y confirma que el formulario fue detectado

Este es el punto de control que casi todos se saltan, y es la forma más rápida de diagnosticar un formulario roto.

Después de publicar, entra a tu panel de Netlify y abre **Site configuration → Forms**. Tu formulario debería aparecer en la lista por su nombre.

* **Si está ahí**, el marcado es correcto y el problema está en otra parte.
* **Si no aparece**, Netlify nunca vio tu formulario. Las causas habituales son un `data-netlify="true"` ausente, un formulario renderizado solo en el cliente, o la detección de formularios desactivada en la configuración de tu build.

No sigas adelante hasta que el formulario aparezca aquí.

## Paso 3. Activa las notificaciones por correo

Aquí viene la parte que nadie te cuenta.

Un formulario registrado que recibe envíos los va a recopilar tan tranquilo **sin enviarte jamás un correo**. Se quedan en el panel bajo **Forms → nombre de tu formulario**, esperando a que alguien los mire.

Para que te avisen de verdad:

1. Ve a **Site configuration → Forms → Form notifications**
2. Haz clic en **Add notification → Email notification**
3. Elige el formulario al que aplica la notificación
4. Escribe la dirección de correo que debe recibir los envíos
5. Guarda

A partir de ese momento, cada envío nuevo llega a tu bandeja. Los envíos que ya existían no se reenvían, así que mándate una prueba nueva.

> Si los mensajes de prueba siguen sin llegar, revisa primero la carpeta de spam. Los correos de notificación de Netlify salen de su dominio, no del tuyo, lo que a veces activa filtros agresivos. Marcar uno como "no es spam" suele resolverlo de forma permanente.

![Un buzón abierto lleno de cartas sin leer, representando los envíos de formulario que se quedan guardados en el panel de Netlify cuando las notificaciones por correo están desactivadas](/images/posts/netlify-form-submissions-mailbox.webp)

## Paso 4. Enviar con JavaScript (opcional pero recomendable)

El formulario simple de arriba funciona, pero te lleva a una página de éxito genérica. Para un portafolio o un sitio de cliente normalmente quieres quedarte en la página y mostrar tu propia confirmación.

Puedes hacerlo con `fetch`, siempre que sigas enviando el mismo cuerpo codificado que Netlify espera:

```javascript
const form = document.getElementById("contact-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    });

    if (!response.ok) throw new Error(`Falló la petición: ${response.status}`);

    // Aquí sustituyes el formulario por tu propio mensaje de éxito.
  } catch {
    // Da siempre una alternativa, como un enlace mailto.
  }
});
```

Tres detalles hacen que esto funcione o falle:

* **Haz POST a `/`**, no a un endpoint propio. El manejador de formularios de Netlify escucha en todo el sitio.
* **El `Content-Type` debe ser `application/x-www-form-urlencoded`.** Enviar JSON falla en silencio.
* **`new FormData(form)` tiene que incluir el campo oculto `form-name`**, y lo hará mientras ese input viva dentro del elemento `<form>`.

Mantén siempre una ruta de error que muestre tu correo. Si el fetch falla, una persona que quería contactarte no debería quedarse sin salida.

## Errores comunes y cómo detectarlos

**El envío devuelve un 404.** El input oculto `form-name` no coincide con el atributo `name` del formulario, o el formulario nunca se registró durante el build.

**El formulario no aparece en el panel.** No está en el HTML estático publicado. Mira el código fuente de la página en vivo, no de tu servidor de desarrollo, y busca `data-netlify`. Si no está en el fuente, Netlify tampoco puede verlo.

**Llegan los envíos pero los campos están vacíos.** A esos inputs les falta el atributo `name`, o añadiste campos sin volver a publicar.

**Todo funciona pero no llega ningún correo.** Las notificaciones no están configuradas. Vuelve al paso 3.

**Funciona en producción pero falla en local.** Es lo esperado. Netlify Forms lo gestiona la infraestructura de Netlify, así que un servidor de desarrollo local devolverá un error al enviar. Pruébalo en un deploy preview.

## Límites que conviene conocer

El plan gratuito incluye **100 envíos al mes**. A partir de ahí, los formularios dejan de aceptar envíos hasta el siguiente ciclo o hasta que mejores el plan. Para un portafolio o el sitio de un negocio pequeño suele sobrar, pero vale la pena vigilarlo si alguna vez te cae una oleada de spam, porque en algunos planes el spam bloqueado también consume cuota de detección.

Esta es otra razón para configurar el honeypot desde el primer día, y para plantearte añadir un captcha si tu formulario empieza a atraer bots.

## Si el correo sigue sin llegar

Ve hacia atrás, porque cada paso te dice dónde se rompió la cadena.

Abre la pestaña Forms en tu panel de Netlify. Si el envío no aparece ahí, el
problema está en el marcado o en el despliegue: Netlify nunca vio un
formulario, así que no capturó nada. Si el envío **sí** aparece y no llegó
ningún correo, el formulario estaba bien y lo que falta es la notificación.
Revisa la carpeta de spam una vez, y después comprueba que la notificación esté
puesta en el formulario correcto y no en uno con el mismo nombre de otro sitio.

El caso que despista a todo el mundo: un envío que llega con todos los campos
vacíos. Eso es un formulario cuyos campos no tienen atributo `name`. El
navegador solo manda los campos con nombre, así que Netlify registró un envío
real que no contenía absolutamente nada.
