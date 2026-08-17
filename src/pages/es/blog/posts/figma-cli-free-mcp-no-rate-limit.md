---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Usa el MCP de Figma sin límites: guía de figma-cli"
author: Grecia V.
description: "figma-cli permite a Claude Code o Cursor construir diseños directamente en Figma Desktop. Código abierto, sin API keys y sin límites de uso. Guía completa."
image:
  url: "/images/posts/figma-cli-free-mcp-no-rate-limit.webp"
  alt: "Un escritorio moderno de oficina en casa con un monitor grande mostrando diseños de interfaz de usuario, representando un flujo de trabajo de diseño en Figma asistido por IA."
pubDate: 2026-08-03
tags:
  [
    "AI Tools & Coding",
    "Web Design & UX",
    "Developer Tools",
    "Tutorials & Guides"
  ]
languages: ["figma", "AI", "nodejs"]
---

Si has intentado conectar un asistente de IA a Figma, ya conoces el muro: el servidor MCP oficial de Dev Mode está detrás de una licencia de pago, y los conectores de terceros que pasan por la API REST de Figma chocan rápido con los límites de uso. Metes unos cuantos prompts buenos y luego toca esperar.

**figma-cli** toma otro camino. Es una herramienta de código abierto, con licencia MIT, que conecta tu asistente de IA directamente con **Figma Desktop en tu propia máquina**. Sin API keys, sin viaje a la nube, y como nada pasa por la API pública de Figma, no hay límite de uso con el que chocar.

Describes lo que quieres en lenguaje natural, y el diseño aparece en tu lienzo mientras lo miras.

![Un cuaderno con bocetos de wireframes hechos a mano junto a un teléfono y un teclado sobre un escritorio de madera, representando la etapa temprana de diseño antes de construir pantallas en Figma](/images/posts/figma-design-workflow-wireframes.webp)

## Qué hace realmente figma-cli

Es una herramienta de línea de comandos que abre un puente local entre un asistente de programación con IA y la aplicación de escritorio de Figma. El asistente envía instrucciones y figma-cli las traduce en nodos reales sobre tu lienzo.

Lo que trae de fábrica:

* **Más de 40 componentes de shadcn/ui** listos para colocar
* **Importación de sistemas de diseño** y gestión de design tokens
* Soporte de **movimiento y animación**
* **Validación de accesibilidad**, incluidos ratios de contraste WCAG y tamaños de área táctil
* **Exportación** a PNG, SVG, JSX y JSON de design tokens
* **Validación determinista** con snapshot testing, para que ejecuciones repetidas den el mismo resultado

Esto último importa más de lo que suena. Buena parte de las herramientas de diseño con IA son encantadoramente impredecibles. El snapshot testing significa que puedes confiar de verdad en ella dentro de un flujo de trabajo real.

## Lo que necesitas primero

Tres cosas, y la primera es la que hace tropezar a la gente:

* **Figma Desktop**, no la versión de navegador. El puente habla con la aplicación local, así que una pestaña del navegador no sirve.
* **Node.js 18 o superior.** Comprueba el tuyo con `node -v` en una terminal. Si es más antiguo, actualiza antes de continuar.
* **Claude Code o Cursor.** Cualquiera de los dos funciona.

## Paso 1. Instálalo (deja que lo haga la IA)

Esta es la parte que se siente al revés hasta que la pruebas. El propio README del proyecto lo dice sin rodeos: *"No instalas esto a mano. Usas un asistente de programación con IA."*

Abre Claude Code o Cursor y dale esto:

```text
Clona https://github.com/silships/figma-cli.git en una carpeta de mi
directorio personal, entra en ella y ejecuta npm install. Después lee
CLAUDE.md y README.md del repositorio para saber cómo manejarlo.
```

Esa última frase hace el trabajo pesado. El repositorio incluye documentación escrita específicamente para que la lean asistentes de IA, así que una vez tu asistente haya procesado esos archivos conoce todos los comandos disponibles sin que tú tengas que aprender la API.

Si prefieres hacerlo a mano:

```bash
cd ~
git clone https://github.com/silships/figma-cli.git
cd figma-cli
npm install
```

## Paso 2. Conéctalo a Figma

figma-cli ofrece tres modos de conexión, y vale la pena entender la diferencia antes de elegir:

| Modo | Cómo funciona | Cuándo usarlo |
|---|---|---|
| **Yolo** | Parchea directamente la app de escritorio de Figma. Es el modo por defecto. | La vía más rápida, si no te importa que se modifique la app |
| **Browser** | Corre dentro de Chromium, sin parchear nada | Un término medio |
| **Safe** | Basado en plugin, cero modificaciones a Figma | Con el que yo empezaría |

El modo Safe deja tu instalación de Figma intacta, que es lo sensato cuando estás evaluando una herramienta nueva. Este es ese camino:

**1.** Crea un archivo nuevo en blanco en Figma Desktop y déjalo abierto.

**2.** En tu terminal, desde la carpeta `figma-cli`:

```bash
node src/index.js connect --safe
```

**3.** En Figma, ve a **Menú → Plugins → Development → Import plugin from manifest**.

**4.** Apunta al manifiesto dentro del repositorio que clonaste:

```text
~/figma-cli/plugin/manifest.json
```

En macOS, `Cmd + Shift + G` en el selector de archivos te permite pegar una ruta completa directamente. En Windows puedes pegar la ruta en el campo del nombre de archivo.

**5.** Ejecuta **Plugins → Development → FigCli**.

**6.** Busca el indicador de **conectado**. Deja esa ventana del plugin abierta. Cerrarla corta el puente, y es la razón número uno de que "dejara de funcionar" a mitad de sesión.

![Un puesto de trabajo de desarrollo con teclado iluminado y varias pantallas mostrando salida de terminal y código, representando el puente local de línea de comandos entre un asistente de IA y Figma](/images/posts/figma-cli-terminal-setup-claude-code.webp)

## Paso 3. Comprueba que funciona

De vuelta en Claude Code o Cursor, prueba algo pequeño y concreto:

```text
Añade los colores de shadcn y después crea un botón primario con una
sombra suave.
```

El botón debería aparecer en tu lienzo de Figma en unos segundos. Si lo hace, todo está bien conectado.

Si no pasa nada, repasa esto en orden:

* ¿Sigue abierta la ventana del plugin FigCli y marcada como conectada?
* ¿Sigue corriendo `node src/index.js connect --safe` en tu terminal? Tiene que seguir vivo.
* ¿Estás en Figma **Desktop**, con el archivo objetivo como pestaña activa?
* ¿`node -v` responde 18 o superior?

## Cómo obtener resultados útiles

Unas cuantas costumbres marcan la diferencia entre una curiosidad y algo que realmente usas:

**Importa tu sistema de diseño primero.** Antes de generar nada, dale tus tokens: colores, escala tipográfica, espaciados, radios. Si no, obtienes valores genéricos que tardarás más en arreglar de lo que ahorraste.

**Trabaja en pasos pequeños y nombrados.** "Constrúyeme un dashboard" te da algo vagamente parecido a un dashboard. "Crea una tarjeta con radio de 16px, padding de 24px, un título de 18px semibold y una descripción atenuada de 14px" te da lo que tenías en la cabeza.

**Úsalo para lo aburrido.** Donde de verdad ahorra tiempo es en la estructura repetitiva: maquetar doce variantes de un componente, construir un espécimen tipográfico, generar los estados de cada tamaño de botón. No en las partes donde importa el criterio.

**Deja que las comprobaciones de accesibilidad hagan su trabajo.** La validación de contraste y de áreas táctiles viene integrada. Ejecutarlas sobre la marcha sale mucho más barato que descubrir un fallo en la entrega.

## ¿Vale la pena?

Valoración honesta: esto no sustituye al diseño. Es un par de manos muy rápido.

Donde compensa es en todo lo mecánico y guiado por especificación, ese trabajo que es tedioso precisamente porque ya está decidido. Donde no te va a ayudar es en el criterio: la jerarquía, el ritmo, qué quitar. Eso sigue siendo cosa tuya.

La razón por la que resulta interesante frente a las alternativas es la restricción que elimina. Trabajar en local sin API keys ni límites de uso significa que puedes iterar todo lo que quieras sin un contador corriendo, y eso cambia cuánto te animas a experimentar.

Y al ser MIT y totalmente local, nada de tus archivos sale de tu máquina.

## Los créditos

figma-cli lo construye y lo mantiene Sil Bormüller, y está todo a la vista en
[github.com/silships/figma-cli](https://github.com/silships/figma-cli). Si te
ahorra el precio de un asiento de Dev Mode, lo mínimo es darle una estrella al
repositorio y abrir un issue decente cuando algo se rompa.
