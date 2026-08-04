---
layout: /src/layouts/MarkdownPostLayout.astro
title: Usa pnpm, no npm
author: Grecia V.
description: "¿Por qué usar pnpm en lugar de npm? Rendimiento, ventajas de seguridad, los incidentes recientes en la cadena de suministro de npm, y los comandos de pnpm más habituales."
image:
  url: "/images/posts/pnpm.webp"
  alt: "Captura de Visual Studio Code mostrando un artículo sobre pnpm frente a npm, gestión de paquetes en Node.js, seguridad de la cadena de suministro de software y desarrollo moderno en JavaScript."
pubDate: 2026-05-31
tags:
  [
    "Developer Tools",
    "Web Development",
    "Tutorials & Guides"
  ]
languages: ["javascript", "typescript", "nodejs"]
---


Si construyes aplicaciones con Node.js, lo más probable es que lleves años usando npm sin pensarlo dos veces. Viene incluido con Node, es la opción por defecto para la mayoría, y está profundamente integrado en el ecosistema de JavaScript.

Sin embargo, lo que hemos visto a lo largo de 2026 ha hecho que mucha gente —yo incluida— se replantee si npm debería seguir siendo el gestor de paquetes por defecto en el día a día.

Los ataques recientes a la cadena de suministro han comprometido paquetes populares de npm como Axios, los paquetes de @antv, los de TanStack, los de SAP y muchos otros. En varios casos, los atacantes obtuvieron acceso a cuentas de mantenedores y publicaron versiones maliciosas capaces de robar credenciales, claves de API, secretos de la nube y tokens de CI/CD.

Aunque estos incidentes no son culpa exclusiva de npm, señalan un problema más amplio: las aplicaciones modernas de JavaScript suelen depender de cientos o miles de paquetes de terceros, lo que hace que la seguridad de la cadena de suministro importe más que nunca.

Por eso he ido usando cada vez más **pnpm** en lugar de npm.

## ¿Qué es pnpm?

pnpm es un gestor de paquetes para Node.js rápido y eficiente en disco.

A diferencia de npm, que crea una copia separada de las dependencias para cada proyecto, pnpm usa un almacén global direccionado por contenido y enlaza las dependencias dentro de los proyectos. Este enfoque reduce drásticamente el uso de disco y los tiempos de instalación.

Pero el rendimiento es solo una parte de la historia.

La razón real por la que mucha gente está adoptando pnpm es que su modelo de gestión de dependencias es mucho más estricto y ayuda a sacar a la luz problemas que npm suele ocultar.

## Por qué pnpm es mejor que npm

### 1. Instalaciones más rápidas

pnpm guarda cada paquete una sola vez en tu máquina.

Si diez proyectos usan React, pnpm no descarga React diez veces. En su lugar, referencia el mismo paquete desde un almacén global.

Ventajas:

* Instalaciones más rápidas
* Menos consumo de ancho de banda
* Menos ocupación de disco
* Mejor rendimiento en CI/CD

En monorepos grandes, la diferencia se nota todavía más.

### 2. Uso de disco mucho menor

Una de las mayores debilidades de npm son las dependencias duplicadas.

Alguien que trabaja en varios proyectos puede desperdiciar fácilmente varios gigabytes guardando los mismos paquetes una y otra vez.

pnpm resuelve esto compartiendo dependencias entre proyectos.

En una máquina con decenas de repositorios, el ahorro de almacenamiento puede ser considerable.

### 3. Resolución de dependencias más predecible

Uno de los beneficios más infravalorados de pnpm es lo estricto que es.

npm a menudo permite que los paquetes accedan a dependencias que nunca se declararon explícitamente.

Eso puede crear situaciones donde el código funciona en una máquina pero se rompe en otra.

pnpm obliga a declarar las dependencias correctamente.

Si un paquete depende de otro, tiene que declararlo de forma explícita.

Esto lleva a:

* Proyectos más limpios
* Menos dependencias ocultas
* Builds más fiables
* Depuración más sencilla

### 4. Mejor para monorepos

Si estás usando:

* Turborepo
* Nx
* Changesets
* Arquitecturas grandes de workspaces

pnpm es posiblemente el mejor gestor de paquetes disponible hoy.

El soporte de workspaces es rápido, maduro e increíblemente eficiente.

Muchos equipos modernos que construyen aplicaciones a gran escala se han estandarizado en pnpm por esta razón.

### 5. Conciencia de seguridad

Seamos claras: cambiar a pnpm no va a detener mágicamente los paquetes maliciosos.

Si un paquete está comprometido en sí mismo, tanto npm como pnpm pueden instalarlo.

Sin embargo, el modelo más estricto de pnpm reduce algunas clases de confusión de dependencias y de dependencias ocultas que pueden hacer más difícil detectar un ataque a la cadena de suministro.

Dado el número creciente de paquetes maliciosos, ataques de typosquatting, cuentas de mantenedores comprometidas y cadenas de dependencias envenenadas que aparecen en el ecosistema de npm, adoptar herramientas más estrictas es un paso razonable para mejorar la higiene general del proyecto.

## Comandos habituales de npm y su equivalente en pnpm

Si llevas años usando npm, migrar a pnpm es sorprendentemente fácil.

### Instalar pnpm

```bash
npm install -g pnpm
```

O con Corepack:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

---

### Crear un proyecto

npm:

```bash
npm create vite@latest
```

pnpm:

```bash
pnpm create vite
```

---

### Instalar dependencias

npm:

```bash
npm install
```

pnpm:

```bash
pnpm install
```

o simplemente:

```bash
pnpm i
```

---

### Instalar un paquete

npm:

```bash
npm install react
```

pnpm:

```bash
pnpm add react
```

---

### Instalar una dependencia de desarrollo

npm:

```bash
npm install -D typescript
```

pnpm:

```bash
pnpm add -D typescript
```

---

### Eliminar un paquete

npm:

```bash
npm uninstall react
```

pnpm:

```bash
pnpm remove react
```

---

### Actualizar dependencias

npm:

```bash
npm update
```

pnpm:

```bash
pnpm update
```

---

### Ejecutar scripts

npm:

```bash
npm run dev
npm run build
npm run lint
```

pnpm:

```bash
pnpm dev
pnpm build
pnpm lint
```

No hace falta la palabra extra `run`.

---

### Ejecutar un paquete

npm:

```bash
npx eslint .
```

pnpm:

```bash
pnpm dlx eslint .
```

Este es uno de los comandos que más vas a usar después de cambiar.

---

### Ver dependencias desactualizadas

npm:

```bash
npm outdated
```

pnpm:

```bash
pnpm outdated
```

---

### Auditar dependencias

npm:

```bash
npm audit
```

pnpm:

```bash
pnpm audit
```

Auditar con regularidad es muy recomendable, sin importar qué gestor de paquetes uses.

## Otros consejos de seguridad para quienes desarrollan con Node.js

Cambiar a pnpm es un buen comienzo, pero la seguridad requiere más que cambiar de gestor de paquetes.

Lo que recomiendo:

* Activar la autenticación de dos factores en GitHub y en npm.
* Revisar las dependencias antes de instalarlas.
* Usar archivos de bloqueo de forma consistente.
* Ejecutar auditorías de dependencias con regularidad.
* Evitar dependencias innecesarias.
* Fijar versiones de los paquetes críticos.
* Estar al tanto de los avisos de seguridad.

Los ataques recientes han demostrado que incluso paquetes muy confiables pueden convertirse en vectores de ataque cuando se comprometen las cuentas de sus mantenedores.

## Reflexión final

npm sigue siendo el gestor de paquetes estándar del ecosistema Node.js, y millones de proyectos dependen de él cada día.

Pero si vas a empezar un proyecto nuevo en 2026, creo que pnpm es la mejor opción por defecto.

Obtienes:

* Instalaciones más rápidas
* Menor uso de disco
* Mejor soporte para monorepos
* Gestión de dependencias más estricta
* Una experiencia de desarrollo más predecible

La ola reciente de ataques a la cadena de suministro de npm nos ha recordado que las herramientas importan. Aunque ningún gestor de paquetes puede eliminar los riesgos de seguridad por completo, adoptar herramientas que fomentan mejores prácticas de dependencias es una de las mejoras más sencillas que podemos hacer.

Para mí, esa herramienta es pnpm.
