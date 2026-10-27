---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Digital Commonplace Book: My Free, Open Source Tracker for Books, Games and Notes"
author: Grecia V.
description: "A free, open source digital commonplace book template to track books, games, shows and study logs in plain JSON files. Retro vaporwave design, no framework, ready for Neocities or Nekoweb."
image:
  url: "/images/posts/digital-commonplace-book-library-book-reviews.webp"
  alt: "Library tab of a digital commonplace book with a retro vaporwave interface, showing a grid of read book covers with star ratings, genre, year and page count."
pubDate: 2026-05-07
tags:
  [
    "Creative Coding",
    "Web Development",
    "Tutorials & Guides"
  ]
languages: ["html", "css", "javascript", "nodejs"]
---

I constantly forget that I was reading something, watching something or even playing something. Or I find a thing I want to keep for later, write it down *somewhere*, and when I want it back I have no idea which app, document or folder it went into.

That's how I ended up building my own **digital commonplace book**: a reading and media tracker that lives on my personal website, runs on plain JSON files, and is fully open source so you can use it too.

- **Live demo:** [starmoon.nekoweb.org/commonplace_book.html](https://starmoon.nekoweb.org/commonplace_book.html)
- **Source code:** [github.com/GVPV12/commonplacebook](https://github.com/GVPV12/commonplacebook)
- **Substack:** [Digital commonplace book tracker](https://greciart.substack.com/p/digital-commonplace-book-tracker)

---

## What is a commonplace book?

It's a concept I've loved for a long time. Before the internet existed, people kept handwritten notebooks where they copied quotes, poems, ideas and observations: things worth remembering. A personal archive of everything that moved them, kept so they could come back to it.

I wanted one. But digital, and mine in every sense of the word. Not a Notion page, not a habit app, not a corporate dashboard. Something that looks like it belongs in my little corner of the internet.

![Tracklist of a digital commonplace book: a table of the books, games, series, manga and music in progress, with status tags and progress bars](/images/posts/digital-commonplace-book-reading-tracker.webp)

## What my digital commonplace book tracks

[**STARMOON Commonplace Book**](https://starmoon.nekoweb.org/commonplace_book.html) is a single-page web app: no frameworks, no databases, no accounts. It's styled like a retro OS with a vaporwave palette, cyan and magenta on near-black, pixel fonts and scanlines.

It has nine tabs:

- **Tracklist**: everything I'm currently reading, playing, watching or listening to, with progress bars and status tags
- **Recent Books**: pulled automatically from my Goodreads account via RSS, with ratings extracted and synopses looked up on OpenLibrary
- **Biblioteca**: every book I've finished, with a review view that opens like a two-page spread: cover, rating grid and summary on the left; quotes and thoughts on the right
- **Writings**: my poems and reflections
- **Microblogs**: short diary entries with a mood bar and activity stats, like a daily check-in
- **Short Thoughts**: statuses pulled from [status.cafe](https://status.cafe), my favorite low-fi social platform
- **Songs**: songs I love, with translations and meaning
- **Study Log**: a tracker for my Japanese study sessions with ratings, notes and an image gallery
- **日本語**: the study log filtered to just Japanese, with progress bars

So it's part commonplace book, part personal tracker, part tiny visual database.

---

## Why JSON files instead of an app

I'm tired of tracker apps that need an account, a connection, or that store your data on someone else's servers. I don't want everything I log about my books, games and studies to live on a platform that can change its terms, disappear one day, or quietly mine my data.

Since I spend way more time on my PC than on my phone, I went for the simplest thing that works for me: **every section reads from a `.json` file**. Want to know what I'm reading or studying? Open the file. No specific app needed, and no internet needed to keep it organized. You can publish it to a host or keep it completely local.

The files are mine. I can read them in a text editor, back them up, and take them anywhere. If I ever leave Nekoweb, I just move the files.

![Table from the commonplace book README mapping each tab, like Tracklist, Biblioteca, Songs and Study Log, to the JSON file or service its data comes from](/images/posts/digital-commonplace-book-json-data-files.webp)

 (I built [FOCUS TIME](/blog/posts/focus-time-gamified-adhd-productivity-app/) and [STARPLAYER](/blog/posts/starplayer-ad-free-music-player-desktop/) with the same rule: your data stays yours.)

## Goodreads, status.cafe and Backloggd: pulling data in automatically

Some of the content comes from services I already use. A couple of Node.js scripts I run locally fetch my Goodreads reviews and recent reads, and my status.cafe statuses, and turn them into JSON the page can read. The flow is:

**Goodreads / status.cafe → script → JSON → Commonplace Book**

That keeps data and presentation separate. The page doesn't care where the information came from; it just reads the JSON and shows it.

There's one integration I tried that **doesn't work yet: Backloggd**. The idea was to do the same as Goodreads and generate a JSON of my games, but I couldn't get it working properly. If you know Backloggd and want to try writing a generator for it, I'd genuinely appreciate the contribution. That's half the reason the project is open source: I don't have to build everything alone.

---

## Why no framework

I build on [Nekoweb](https://nekoweb.org), which only serves static files. That constraint turned out to be a feature: it forced me to think carefully about what each piece of data needed to do, and to keep things simple. (If you're starting your own Nekoweb or Neocities site, my [Aqua Frutiger Aero blog template](/shop/freebies/) is free and made for exactly that.)

The whole thing is one HTML file, a handful of JSON files and those scripts. It loads from scratch in under two seconds on a warm cache. You don't need a giant architecture to make a personal page, and you can open the code and actually understand what's going on, which is a big part of why I love the retro web.

## The design

The vaporwave aesthetic wasn't just a style choice: it reflects how I feel about the web. The old internet had personality. Every site looked like the person who made it. I wanted that.

The Biblioteca review overlay opens as a "book": two columns styled like facing pages, with ruled lines and a light/dark toggle. The study log opens the same way. The tracklist is a full data table with columns for status, progress and a hook line, and on monitors wider than 1440px extra columns appear. It's responsive between laptop and monitor sizes, with custom CSS handling font sizes, grid columns and layout.

![Study session detail in a digital commonplace book, opened like a two-page spread with the Japanese grammar topic, resource, ratings, summary and attached images](/images/posts/digital-commonplace-book-study-log-japanese.webp)

![Study log page of a digital commonplace book with a cyan neon sidebar, listing recent Japanese study sessions on grammar and kanji with dates, resources and attached images](/images/posts/digital-commonplace-book-study-log-sessions.webp)

---

## How to use it on Neocities, Nekoweb or any static host

If you've worked with web files a little, setup is quick:

1. Clone or download the repo from [GitHub](https://github.com/GVPV12/commonplacebook)
2. Replace my data in the JSON files with your own (the README documents every field, what's required and what's optional)
3. Change your Goodreads user ID (one line in the script) and your status.cafe username (one line in the generator), then run the scripts locally and upload the JSON they produce
4. Update the CSS color variables if you want a different palette
5. Upload everything to Neocities, Nekoweb, GitHub Pages or any host that serves HTML, CSS, JavaScript and JSON

No build step, no `npm install` for the page itself, no config file.

## Can you use it if you don't know how to code?

Yes, for the basics. I know a GitHub repo full of `.html`, `.css`, `.js` and `.json` files looks scary if you've never touched code, but you don't need to understand all of it.

The important part is finding which JSON file holds the information you want to change. Then it's just: **edit the `.json` → save → upload**. Most of the time you're replacing text inside a structure that already exists.

If you want to redesign it completely, add pages or connect new services, then yes, you'll need HTML, CSS and JavaScript. But to use it as your personal tracker, you don't have to become a web developer.

## Is it better than Notion?

Honestly? Not necessarily. It just works better for how *I* organize things. I like having my own files, opening them directly, seeing my data visually, and knowing I can change the code whenever I want.

And I think that's what the internet needs more of: personal websites that reflect the soul of the person who made them, instead of everyone living inside a giant corporate network because it's free, and paying for it with everything else.

---

## What's next

The commonplace book is one piece of a bigger system. I'm working on a React app called **Dopamint**, a gamification layer for all my projects, with a tamagotchi that dies if I'm not active. The plan is for Dopamint and the commonplace book to share data through GitHub raw URLs, so both read from the same JSON files.

I'll keep adding sections and integrations when I need them, and fixing Backloggd is high on the list. But I don't want it to become a huge app. Part of the charm is that it stays simple, easy to edit and easy to host.

If a self-hosted, open source digital commonplace book sounds like your thing, use it, fork it, or just borrow ideas from how it's built.

---

*Built with HTML, CSS, JS, and too much cyan. Source on [GitHub](https://github.com/GVPV12/commonplacebook). Live at [starmoon.nekoweb.org](https://starmoon.nekoweb.org/commonplace_book.html). More open source work in my [side projects](/side-projects/).*
