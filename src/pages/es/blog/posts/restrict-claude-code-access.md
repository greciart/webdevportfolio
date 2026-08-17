---
layout: /src/layouts/MarkdownPostLayout.astro
title: Cómo restringir el acceso de Claude Code a tus carpetas personales
author: Grecia V.
description: "Aprende a impedir que Claude Code acceda a tus carpetas personales mediante un archivo settings.json global, en Windows, macOS y Linux."
image:
  url: "/images/posts/claude-code-file-access-security.webp"
  alt: "Un candado metálico apoyado sobre el teclado de una computadora, representando la privacidad de los datos y la gestión segura del acceso a archivos en herramientas de programación con IA."
pubDate: 2026-07-09
tags:
  [
    "AI Tools & Coding",
    "Security & Privacy",
    "Tutorials & Guides"
  ]
languages: ["AI", "LLM"]
---



Claude Code es un asistente de programación con IA increíblemente útil, pero por defecto puede acceder a archivos dentro de tu directorio de usuario si le das permiso. Eso resulta cómodo para desarrollar, pero mucha gente prefiere mantener carpetas personales como **Documentos**, **Descargas**, **Imágenes** o **Escritorio** completamente fuera de su alcance.

Por suerte, Claude Code permite definir permisos globales mediante un archivo de configuración. En esta guía vas a aprender a crear ese archivo y a impedir que Claude Code lea tus directorios personales en **Windows, macOS y Linux**.

![Un espacio de trabajo limpio con un monitor mostrando un archivo de configuración JSON para gestionar permisos globales en Claude Code](/images/posts/claude-code-settings-json-config.webp)

## ¿Por qué restringir el acceso a archivos de Claude Code?

La mayoría de quienes programamos no guardamos solo código fuente en la computadora. Documentos personales, archivos financieros, fotos familiares y otra información sensible suelen vivir en la misma cuenta de usuario.

Al crear una configuración global, puedes:

* Impedir que Claude Code lea carpetas personales.
* Mantener los proyectos de desarrollo separados de tus archivos privados.
* Reducir la posibilidad de exponer información sensible por accidente.
* Aplicar las mismas reglas a todos los proyectos de Claude Code que abras.

La configuración es global, así que solo necesitas hacerlo una vez.

---

## Windows (PowerShell)

### Paso 1. Abre PowerShell

Abre **PowerShell** o **Windows Terminal** y selecciona el perfil de PowerShell.

### Paso 2. Ve a tu directorio personal

```powershell
cd ~
```

### Paso 3. Crea la carpeta `.claude`

Si aún no existe, ejecuta:

```powershell
New-Item -ItemType Directory -Path ".claude" -Force
```

![La pantalla de un monitor mostrando el icono de un escudo digital brillante, simbolizando la protección de carpetas y datos personales frente a accesos no autorizados de IA.](/images/posts/protect-personal-files-claude-ai.webp)

### Paso 4. Crea el archivo de configuración

```powershell
New-Item -ItemType File -Path ".claude\settings.json" -Force
```

### Paso 5. Abre el archivo

Con el Bloc de notas:

```powershell
notepad ".claude\settings.json"
```

O con Visual Studio Code:

```powershell
code ".claude\settings.json"
```

### Paso 6. Pega la siguiente configuración

```json
{
  "permissions": {
    "deny": [
      "Read(~/Documents/**)",
      "Read(~/Downloads/**)",
      "Read(~/Pictures/**)",
      "Read(~/Desktop/**)",
      "Read(~/Photos/**)"
    ]
  },
  "sandbox": {
    "enabled": true,
    "autoAllowBashIfSandboxed": true
  }
}
```

### Paso 7. Guarda el archivo

Pulsa **Ctrl + S** y cierra el editor.

A partir de ahora, Claude Code va a usar automáticamente esta configuración global en cada proyecto que abras.

---

## Windows (Git Bash o terminal compatible con Bash)

Si usas Git Bash u otra terminal estilo Bash en Windows, ejecuta:

```bash
cd ~

mkdir -p .claude

touch .claude/settings.json

notepad .claude/settings.json
```

O ábrelo directamente en Visual Studio Code:

```bash
code .claude/settings.json
```

Pega la misma configuración JSON de arriba y guarda el archivo.

---

## macOS

En macOS el proceso es casi idéntico.

### Paso 1. Abre la Terminal

Lanza la aplicación **Terminal**.

### Paso 2. Ve a tu carpeta personal

```bash
cd ~
```

### Paso 3. Crea el directorio de configuración

```bash
mkdir -p .claude
```

### Paso 4. Crea el archivo de configuración

```bash
touch .claude/settings.json
```

### Paso 5. Abre el archivo

Con el editor TextEdit por defecto:

```bash
open -e .claude/settings.json
```

O con Visual Studio Code:

```bash
code .claude/settings.json
```

### Paso 6. Añade la configuración

Pega lo siguiente:

```json
{
  "permissions": {
    "deny": [
      "Read(~/Documents/**)",
      "Read(~/Downloads/**)",
      "Read(~/Pictures/**)",
      "Read(~/Desktop/**)",
      "Read(~/Photos/**)"
    ]
  },
  "sandbox": {
    "enabled": true,
    "autoAllowBashIfSandboxed": true
  }
}
```

Guarda el archivo y la configuración se aplicará automáticamente a cada sesión de Claude Code.

---

## Linux

Linux sigue exactamente los mismos pasos que macOS.

### Paso 1. Abre tu terminal

### Paso 2. Ve a tu directorio personal

```bash
cd ~
```

### Paso 3. Crea la carpeta de configuración de Claude

```bash
mkdir -p .claude
```

### Paso 4. Crea el archivo de configuración

```bash
touch .claude/settings.json
```

### Paso 5. Abre el archivo

Con Nano:

```bash
nano .claude/settings.json
```

O con Visual Studio Code:

```bash
code .claude/settings.json
```

### Paso 6. Pega la configuración

```json
{
  "permissions": {
    "deny": [
      "Read(~/Documents/**)",
      "Read(~/Downloads/**)",
      "Read(~/Pictures/**)",
      "Read(~/Desktop/**)",
      "Read(~/Photos/**)"
    ]
  },
  "sandbox": {
    "enabled": true,
    "autoAllowBashIfSandboxed": true
  }
}
```

Guarda el archivo y sal del editor.

Claude Code va a aplicar estas restricciones automáticamente cada vez que arranque.

---

![Una laptop mostrando la configuración de un editor de código con una barrera digital protectora, ilustrando cómo restringir el acceso de Claude Code a carpetas personales.](/images/posts/restrict-claude-code-access-guide.webp)

## ¿Qué hace esta configuración?

La configuración tiene dos secciones principales.

El bloque **permissions** impide que Claude Code lea directorios concretos dentro de tu carpeta personal, ayudando a proteger archivos que no tienen nada que ver con tus proyectos de desarrollo.

La sección **sandbox** activa el modo de aislamiento de Claude Code, añadiendo una capa extra de separación y permitiendo que los comandos de Bash se ejecuten automáticamente cuando corren dentro del sandbox.

Juntas, estas opciones crean un entorno predeterminado más seguro sin afectar tu flujo de trabajo normal.

## Reflexión final

Claude Code está diseñado para hacer el desarrollo más rápido, pero sigue siendo buena idea aplicar el principio de mínimo privilegio. Darle a cualquier herramienta acceso únicamente a los archivos que realmente necesita ayuda a reducir la exposición innecesaria y mantiene tu información personal separada de tu trabajo.

Como esta configuración es global, solo necesitas hacerlo una vez. Cada proyecto futuro de Claude Code va a heredar automáticamente estos permisos, dándote un punto de partida más seguro sin configuración adicional.
