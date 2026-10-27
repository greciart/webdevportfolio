---
layout: /src/layouts/MarkdownPostLayout.astro
title: "I Built My Own Ad-Free Music Player Because I Was Done With Spotify"
author: Grecia V.
description: "STARPLAYER is a free, open source desktop music player for your local library: no ads, no tracking, swappable vaporwave and glass skins, playlists, star ratings and mood playback. Built with Tauri, React and SQLite."
image:
  url: "/images/posts/starplayer-ad-free-music-player.webp"
  alt: "Three STARPLAYER windows side by side: a purple glass song list, a retro pixel album cover grid and a soft glass now playing screen, showing the skins of an ad-free desktop music player."
pubDate: 2026-10-12
tags:
  [
    "Creative Coding",
    "Security & Privacy",
    "Developer Tools"
  ]
languages: ["typescript"]
---

I got tired. Tired of ads (which are now AI-generated, because of course they are), tired of interfaces I don't like, and tired of the music players that come preinstalled with every operating system.

I wanted something different: an app to listen to **my own local music**, with an interface I actually enjoy looking at and options to make it mine. And obviously private, without my listening habits being shipped to some company to be used for whatever.

So I built **STARPLAYER**, my own desktop music player. It's inspired by retro interfaces, vaporwave and old operating systems, with modern features for organizing and listening to music.

- **Source code:** [github.com/GVPV12/STARPLAYER](https://github.com/GVPV12/STARPLAYER)
- **Substack (in Spanish):** [STARPLAYER, a music player without ads](https://greciart.substack.com/p/starplayer-reproductor-musica-sin-anuncios)

---

## Why build yet another music player?

There are a million music apps, so making another one can look pointless. But I wanted to fix the things that bugged me about the ones I used: I didn't always like how they looked, I didn't want an experience built around ads, and I missed having real control over how my music library looks and is organized.

STARPLAYER starts from a simple idea: **a desktop music player should let you play your songs, organize your library and customize the interface, without forcing a design on you that you don't like.**

I also wanted it to have personality. Instead of another minimalist player with a generic interface, I experimented with pixel windows, bitmap fonts, neon colors and very different visual styles. And for people who prefer something calmer, there are modern minimalist and glassmorphism looks too.

![STARPLAYER now playing screen in three skins: a neon pink vaporwave view with a dot equalizer, a dark gradient glass view and a black and white monochrome retro view](../../../assets/blog/starplayer-vaporwave-neon-retro-skins.webp)

## A customizable music player: vaporwave, retro, glass and more

The part I'm most excited about is the **skin system**. The look isn't locked to one theme: you can change the whole interface without touching the code of its components.

Right now it ships with five skins:

- **Vaporwave:** neon colors and a retro digital culture vibe.
- **Neo-Brutalist Cute:** bold, chunky elements with a playful twist.
- **Gradient Glass:** gradients and a glassy, translucent feel.
- **Monochrome Retro:** a one-color interface that recalls classic computer systems.
- **Soft Glass:** a gentler, softer take on glass.

There are three ways to handle skins: pick one by hand, get a random one on launch, or let the player **adapt the look to the rhythm or estimated mood of the song**. And there's a custom skin builder, so you can change colors, fonts, borders and backgrounds without rebuilding the interface.

For me, customization shouldn't stop at light mode versus dark mode. I want the player to feel like a small extension of your desktop and your taste. (If you like glassy, nostalgic interfaces on the web too, that's the whole idea behind my [Frutiger Aero and Y2K website templates](/shop/templates/).)

![Three STARPLAYER skins playing music side by side: a cyan vaporwave window, a neo-brutalist cute window with a rainbow audio visualizer and a pink gradient glass window](../../../assets/blog/starplayer-three-skins-comparison.webp)

## STARPLAYER features

Beyond the looks, I wanted it to be genuinely useful for managing a local library:

- **Local music playback** from the songs stored on your computer.
- **Folder-based library:** pick a folder and it finds your songs, subfolders included.
- **Common audio formats:** MP3, FLAC, WAV, M4A and OGG.
- **Playlists** to group songs however you like.
- **Star ratings** to sort your music by what you actually love.
- **Mood playback** based on how songs are classified.
- **Shuffle and repeat.**
- **Swappable skins**, a **custom theme builder** and a **random skin** on launch.
- **Rhythm-aware visuals** tied to each song's estimated BPM and mood.
- **SQLite library** stored locally, and **metadata** read from your files' tags.

The goal is for STARPLAYER to be more than a window that plays songs. I want it to let you explore your music and build your own visual experience around it.

![STARPLAYER local music library in cover view across three skins: a grid of album covers with an Add folder button and Play shuffled, next to a cyan vaporwave now playing screen](../../../assets/blog/starplayer-music-library-album-covers.webp)

---

## How STARPLAYER is built

The desktop app uses **Tauri 2, React and Vite**, and the shared logic is written in **TypeScript**.

Tauri lets you build desktop apps with web technologies for the interface and native pieces to talk to the operating system. React handles the UI and Vite the dev and build setup. The music library lives in **SQLite**, locally, and the app reads the metadata embedded in your audio files to organize the collection.

I picked an architecture that keeps the app logic, the visual components and the shared resources apart. That matters a lot in a project where the interface can change completely depending on the skin.

![Two STARPLAYER skins playing music: a monochrome retro window with a five-star rated album cover and a neon purple glass window with an animated audio visualizer](../../../assets/blog/starplayer-two-skins-now-playing.webp)

## Which operating systems does it run on?

STARPLAYER is designed as a cross-platform desktop app, targeting Linux, Windows and macOS. But there are a few things I want to be upfront about before recommending it without reservations:

- **Windows:** depending on how the app is distributed, Windows Defender may warn about or block an executable it doesn't recognize. That happens with unsigned apps or apps with little reputation, and on its own it doesn't mean a program is malicious. Still, only download it from the official repository and check the files before running them.
- **Linux:** I'm especially interested in it here. If your computer struggles, it may be worth comparing how it runs on your system, though that depends on your hardware, distro and installed dependencies.
- **macOS:** I haven't tested it on a Mac myself, so I can't promise it works on every setup.

It's still in development. Being planned for several platforms doesn't mean every installer and feature is equally tested on each one.

## Is it heavy on resources?

I didn't want it to feel heavy, especially on modest computers. But I'm not going to promise it's the lightest music player out there without benchmarks to back it up.

The interface uses web technologies inside a desktop app, so it can use more than some native players. Windows Media Player, for example, benefits from being built into Windows. My aim is a balance between a customizable interface, useful features and reasonable resource use. If you're on an older machine, try it and compare it with the player you use now.

---

## A project I want to keep improving

STARPLAYER is my way of experimenting with desktop development, interface customization and the relationship between music and visual design.

I love the idea of bringing back some of the personality old desktop programs had, when every app could have a really distinct visual identity, and mixing it with modern tools. It's the same reason I built my [digital commonplace book](/blog/posts/blog-post-commonplace/) on files I own instead of someone else's platform: I want my stuff to be mine.

There's still work to do, especially testing across operating systems and growing the features. But I wanted to share it as it is now and leave the code open for anyone who wants to explore it.

If you like customizable music players, retro interfaces, vaporwave or desktop software projects, take a look:

**[Explore STARPLAYER on GitHub](https://github.com/GVPV12/STARPLAYER)**

It lives with the rest of my [open source side projects](/side-projects/), tools and games included. I'd love to keep finding features that make listening to music on a computer feel personal again, instead of like one more generic app.
