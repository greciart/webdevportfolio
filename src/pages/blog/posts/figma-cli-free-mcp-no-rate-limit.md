---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Use Figma With AI, No Rate Limits: figma-cli Setup Guide"
author: Grecia V.
description: "figma-cli lets Claude Code or Cursor build designs straight into Figma Desktop. Open source, no API keys, no rate limits. Full setup guide."
image:
  url: "/images/posts/figma-cli-free-mcp-no-rate-limit.webp"
  alt: "A modern home office desk with a large monitor displaying user interface designs, representing an AI assisted Figma design workflow."
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

If you've tried connecting an AI assistant to Figma, you already know the wall: the official Dev Mode MCP server sits behind a paid seat, and third-party connectors that go through Figma's REST API run into rate limits fast. You get a few good prompts in, then you're waiting.

**figma-cli** takes a different route. It's an open source tool, MIT licensed, that connects your AI assistant directly to **Figma Desktop on your own machine**. No API keys, no cloud round-trip, and because nothing is going through Figma's public API, there is no rate limit to hit.

You describe what you want in plain language, and the design appears on your canvas while you watch.

![A notebook with hand-drawn wireframe sketches beside a smartphone and keyboard on a wooden desk, representing the early design stage before building screens in Figma](/images/posts/figma-design-workflow-wireframes.webp)

## What figma-cli Actually Does

It's a command line tool that opens a local bridge between an AI coding assistant and the Figma desktop app. The assistant sends instructions, and figma-cli translates them into real nodes on your canvas.

What ships with it:

* **40+ shadcn/ui components** ready to drop in
* **Design system imports** and design token management
* **Motion and animation** support
* **Accessibility validation**, including WCAG contrast ratios and touch target sizes
* **Export** to PNG, SVG, JSX and design-tokens JSON
* **Deterministic validation** with snapshot testing, so repeated runs produce the same result

That last one matters more than it sounds. A lot of AI design tooling is charmingly unpredictable. Snapshot testing means you can actually trust it inside a real workflow.

## What You Need First

Three things, and the first one catches people out:

* **Figma Desktop**, not the browser version. The bridge talks to the local application, so a browser tab won't do.
* **Node.js 18 or higher.** Check yours with `node -v` in a terminal. If it's older, update before continuing.
* **Claude Code or Cursor.** Either works.

## Step 1. Install It (Let the AI Do It)

This is the part that feels backwards until you try it. The project's own README says it plainly: *"You don't install this by hand. You use an AI coding assistant."*

Open Claude Code or Cursor and give it this:

```text
Clone https://github.com/silships/figma-cli.git into a folder in my home
directory, cd into it, and run npm install. Then read CLAUDE.md and
README.md in the repo so you know how to drive it.
```

That last sentence does the heavy lifting. The repository ships documentation written specifically for AI assistants to read, so once your assistant has parsed those files it knows every command available without you learning the API.

If you'd rather do it manually:

```bash
cd ~
git clone https://github.com/silships/figma-cli.git
cd figma-cli
npm install
```

## Step 2. Connect It to Figma

figma-cli offers three connection modes, and the difference is worth understanding before you pick:

| Mode | How it works | When to use it |
|---|---|---|
| **Yolo** | Patches the Figma desktop app directly. The default. | Fastest path, if you don't mind the app being modified |
| **Browser** | Runs inside Chromium, no patching | A middle ground |
| **Safe** | Plugin based, zero modifications to Figma | What I'd recommend starting with |

Safe mode leaves your Figma installation untouched, which is the sensible default when you're evaluating a new tool. Here's that path:

**1.** Create a new blank file in Figma Desktop and leave it open.

**2.** In your terminal, from the `figma-cli` folder:

```bash
node src/index.js connect --safe
```

**3.** In Figma, go to **Menu → Plugins → Development → Import plugin from manifest**.

**4.** Point it at the manifest inside the repo you cloned:

```text
~/figma-cli/plugin/manifest.json
```

On macOS, `Cmd + Shift + G` in the file picker lets you paste a full path directly. On Windows you can paste the path into the file name field.

**5.** Run **Plugins → Development → FigCli**.

**6.** Look for the **Connected** indicator. Leave that plugin window open. Closing it drops the bridge, which is the number one reason "it stopped working" mid-session.

![A developer workspace with illuminated keyboard and multiple screens showing terminal output and code, representing the local command line bridge between an AI assistant and Figma](/images/posts/figma-cli-terminal-setup-claude-code.webp)

## Step 3. Test That It's Working

Back in Claude Code or Cursor, try something small and specific:

```text
Add shadcn colors, then create a primary button with a soft drop shadow.
```

The button should appear on your Figma canvas within a few seconds. If it does, everything is wired up correctly.

If nothing happens, work through this in order:

* Is the FigCli plugin window still open and showing as connected?
* Is `node src/index.js connect --safe` still running in your terminal? It needs to stay alive.
* Are you on Figma **Desktop**, with the target file as the active tab?
* Does `node -v` report 18 or higher?

## Getting Useful Results

A few habits that make the difference between a novelty and something you actually use:

**Import your design system first.** Before generating anything, feed it your tokens: colors, type scale, spacing, radii. Otherwise you get generic defaults you'll spend longer fixing than you saved.

**Work in small, named steps.** "Build me a dashboard" gives you something vaguely dashboard-shaped. "Create a card with a 16px radius, 24px padding, a title at 18px semibold and a muted 14px description" gives you the thing you pictured.

**Use it for the boring parts.** Where this genuinely saves time is repetitive structure: laying out twelve variants of a component, building a type specimen, generating states for every button size. Not the parts where taste matters.

**Let the accessibility checks do their job.** Contrast validation and touch target checks are built in. Running them as you go is far cheaper than discovering a failure in handoff.

## Is It Worth It?

Honest assessment: this is not a replacement for designing. It's a very fast pair of hands.

Where it pays off is anything mechanical and specification-driven, the work that's tedious precisely because it's already decided. Where it won't help is the judgment: hierarchy, rhythm, what to cut. That's still you.

The reason it's compelling compared to the alternatives is the constraint it removes. Working locally with no API keys and no rate limits means you can iterate as much as you want without a meter running, which changes how willing you are to experiment.

And being MIT licensed and fully local, nothing about your files leaves your machine.

## Wrapping Up

To recap:

1. Get Figma **Desktop**, Node 18+ and Claude Code or Cursor ready
2. Have your AI assistant clone `github.com/silships/figma-cli` and read its docs
3. Connect with `--safe` mode and import the plugin manifest
4. Keep the plugin window open while you work
5. Feed it your design system before asking for output

The full source and documentation live at [github.com/silships/figma-cli](https://github.com/silships/figma-cli), built by Sil Bormüller.
