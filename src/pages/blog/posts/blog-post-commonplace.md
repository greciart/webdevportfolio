---
layout: /src/layouts/MarkdownPostLayout.astro
title: I built a digital commonplace book and it's fully open source
author: Grecia V.
description: "Discover an open source digital commonplace project. Digital book built with HTML, CSS and JavaScript, featuring retro vaporwave styling, simple JSON-driven data and a static-site friendly workflow."
image:
  url: "/images/posts/commonplacebook.webp"
  alt: "Screenshot of a vaporwave-inspired digital commonplace book web app interface with retro OS styling and pixel art accents."
pubDate: 2026-05-07
tags:
  [
    "open-source", "Github free projects", "Personal Project", "Frontend Development", "Vaporwave & Retro Design", "Case Study"
   
  ]
languages: ["html", "css", "javascript"]
---

There's a concept I've loved for a long time: the **commonplace book**. Before the internet existed, people kept handwritten notebooks where they copied quotes, poems, ideas, observations: things worth remembering. A personal archive of everything that moved them.

I wanted one. But digital, and mine in every sense of the word.

---

![Digital Commonplace book Study log to keep motivation](/images/posts/studylog.webp)

## What I built

[**STARMOON Commonplace Book**](https://starmoon.nekoweb.org/commonplace_book.html) is a single-page web app — no frameworks, no databases, no accounts — that lives on my personal website. It's styled like a retro OS with a vaporwave palette: cyan and magenta on near-black, pixel fonts, scanline effects.

It has nine tabs:

- **Tracklist** — everything I'm currently reading, playing, watching or listening to, with progress bars and status tags
- **Recent Books** — auto-fetched from my Goodreads account via RSS, with rating extraction and synopsis lookup from OpenLibrary
- **Biblioteca** — every book I've finished, with a full review UI that opens like a two-page spread: cover, rating grid, summary on the left; quotes and thoughts on the right
- **Writings** — my poems and reflections
- **Microblogs** — short diary entries with a mood bar and activity stats, like a daily check-in
- **Short Thoughts** — statuses pulled from [status.cafe](https://status.cafe), my favorite low-fi social platform
- **Songs** — songs I love with translations and meaning
- **Study Log** — a tracker for my Japanese study sessions with ratings, notes, and an image gallery
- **日本語** — the study log filtered to just Japanese, with progress bars

Everything is driven by JSON files I edit locally and push to my site. No CMS, no admin panel. Just text files.

---

## Why no framework

I build on [Nekoweb](https://nekoweb.org), which only serves static files. That constraint turned out to be a feature: it forced me to think carefully about what each piece of data needed to do, and to keep things simple.

The whole thing is one HTML file, a handful of JSON files, and a couple of Node.js scripts I run locally to scrape Goodreads and status.cafe before deploying. The entire commonplace book loads from scratch in under two seconds on a warm cache.

There's also something that feels right about owning the format. The JSON files are mine. I can read them in a text editor. I can back them up. I can move them anywhere.

---

## The design

The vaporwave aesthetic wasn't just a style choice: it reflects how I feel about the web. The old internet had personality. Every site looked like the person who made it. I wanted that.

The review overlay for Biblioteca opens as a "book": two columns styled like facing pages, with ruled-line backgrounds and a light/dark mode toggle. The study log opens the same way. The tracklist is a full data table with columns for status, progress, and hook text. On monitors wider than 1440px, extra columns appear.

The whole thing is responsive between laptop and monitor sizes, with custom CSS handling the differences in font size, grid columns, and layout.

---

![Commonplace book Digital Library UI design to keep all the books you read in one place](/images/posts/library.webp)

## It's open source

The full source is on GitHub: **[github.com/gvpv12/commonplacebook](https://github.com/GVPV12/commonplacebook)**

The README documents every JSON field, with examples and tables explaining what's required and what's optional. The goal was to make it easy for anyone to fork and replace my data with their own.

To adapt it for your own site you need to:

1. Change your Goodreads user ID (one line in the script)
2. Change your status.cafe username (one line in the generator)
3. Replace the JSON files with your own data
4. Update the CSS color variables if you want a different palette

That's it. No build step, no `npm install`, no config file.

---

## What's next

The commonplace book is one piece of a larger system I'm building. I'm working on a React app called **Dopamint**, a gamification layer for all my projects, with a tamagotchi that dies if I'm not active. The plan is to share data between Dopamint and the commonplace book via GitHub raw URLs, so both apps read from the same JSON files.

For now though, the commonplace book is finished and feels exactly like what I wanted: a quiet, personal space on the web that looks like me and holds the things that matter to me.

---

*Built with HTML, CSS, JS, and too much cyan. Source on [GitHub](https://github.com/GVPV12/commonplacebook). Live at [starmoon.nekoweb.org](https://starmoon.nekoweb.org/commonplace_book.html).*
