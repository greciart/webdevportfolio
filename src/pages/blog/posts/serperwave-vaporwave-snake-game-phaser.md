---
layout: /src/layouts/MarkdownPostLayout.astro
title: "SERPERWAVE: A Free, Nostalgic Vaporwave Snake Game for Your Browser"
author: Grecia V.
description: "The classic snake game, reimagined as a 90s vaporwave arcade: 13 neon levels, mystery box loot, three game modes and two retro soundtracks. Free to play in your browser."
image:
  url: "/images/posts/serperwave-vaporwave-snake-game.webp"
  alt: "SERPERWAVE gameplay on level 6 Prism Peak: a cyan and pink pixel moon over neon mountains and a synthwave grid in a free vaporwave snake game."
pubDate: 2026-09-23
tags:
  [
    "Creative Coding",
    "Web Development"
  ]
languages: ["typescript", "javascript"]
---

I said I was going to make a snake game. That was the whole plan. Eat food, get longer, don't hit the wall, ship it in a weekend.

Thirteen levels later I have a combo system with a decaying meter, twenty mystery box outcomes across four rarity tiers, three game modes, two soundtracks you can swap between, and a level called GAME BOY where the entire board lives inside a tiny handheld screen. None of that was the plan. Every time I finished a piece I could see the next thing that was missing, and I have never once in my life left a "next thing" alone.

That's **SERPERWAVE**: a free, nostalgic vaporwave version of the snake game you grew up with, styled like a 90s arcade cabinet and playable right in your browser. The same simple game, just prettier, glowier and a lot more pink.

- **Play it free in your browser:** [grecia-v.itch.io/serperwave](https://grecia-v.itch.io/serperwave)
- **Source code:** [github.com/GVPV12/serperwave](https://github.com/GVPV12/serperwave)

<iframe style="width:100%;aspect-ratio:16/9;border:0;border-radius:12px" src="https://www.youtube-nocookie.com/embed/quV0Fv8Er4Y" title="SERPERWAVE: Free 90s Vaporwave Snake Game, Official Trailer" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Why Phaser and not Godot

I spent way too long deciding which engine to use for my first game good enough to publish. I wanted to use Godot, and I still plan to, but I think it shines for other kinds of games. Or maybe I just prefer sticking to what I know, and what I know is web development. For a simple 2D arcade game that should open instantly in a browser tab, **Phaser** with TypeScript was the obvious fit.

## How it plays

It's still snake at its core. Arrow keys or WASD, or swipe on mobile. What's different is that holding the direction you're already moving in makes the snake burst forward, and letting go settles it back to normal speed. Inputs are buffered two deep, so you can queue two turns into a tight corner and both fire in order, instead of the game only catching the last key you hit.

The part that actually runs the game is the **streak meter**. It's not a counter, it's a timer. Every piece of food fills it and it's always draining, so a streak is something you defend, not something that piles up. Let it drain and you're back to pulling mostly junk. Keep it alive and the mystery boxes swing hard toward RARE and EPIC loot. Even the eating sound climbs a semitone with every point, so a good run genuinely *sounds* like one before you check the score.

![SERPERWAVE level 8 Digital Void: a cyan pixel snake on a black board with falling green code, pink striped lethal blocks and pixel hearts for lives](../../../assets/blog/serperwave-neon-pixel-level-obstacles.webp)

## The loot: 20 mystery box outcomes

Four rarities, twenty items:

- **EPIC:** GHOST.EXE makes you immune to blocks. DATA HARVEST turns every lethal block on the board into food.
- **RARE:** OVERCLOCK ×2, MAGNET, BLUE SCREEN, SLOW.SYS, COMBO LOCK.
- **COMMON:** DEFRAG, SHIELD, TELEPORT, SHUFFLE, flat points.
- **BAD:** INVERT.DLL flips your controls, plus TURBO ERROR, BLOCK RAIN, VHS TRACKING, BLOAT and TAX.

A box never kills you outright, though a bad pull will happily hand you the shovel.

Outside the boxes there are four more pickups. Apples restore a full heart, stars restore half, flowers go straight to your score. And if a rainbow **PRISM STAR** ever shows up, which is rare, grab it: it skips you straight to the next level.

![SERPERWAVE title screen with the Start, Mode, How to Play, Options and Records menu over a collage of neon levels from the vaporwave snake game](../../../assets/blog/serperwave-snake-game-development-screens.webp)

## 13 neon levels (yes, that's the final count)

MIAMI SUNSET · NEON GRID · TERMINAL · AQUA / 水 · TOKYO NIGHT · MAGIC HOUR · OUTRUN · DIGITAL VOID · VAPOR TEMPLE · SYSTEM OVERLOAD · GAME BOY · GRID HORIZON · LIGHTFALL

Each one has its own palette, animated backdrop and soundtrack. You should be able to tell which level you're on with your eyes closed. Some bend the rules too: wrap-around edges that turn walls into doors, and a couple that trap the whole board inside something else, like an old arcade cabinet or that handheld console. The space you can move in shrinks as the game gets harder, which was a fun problem to design and a slightly less fun problem to build.

![SERPERWAVE level 1 Miami Sunset: the neon snake framed by a glowing pink and cyan ring over a synthwave perspective grid](../../../assets/blog/serperwave-neon-snake-glowing-rings.webp)

If you like this look, by the way, I also sell [synthwave and neon 3D models for Blender](/shop/3d-models/), tunnels and spheres included, in case you want a backdrop like this for your own project.

## Three modes, three different games

- **NORMAL** is the default. 5 lives, and getting hit restarts the level with your score and progress intact. Clear all 13 levels and you get a real ending.
- **RUNNER** has no lives. One hit and the run is over. It's also the only mode where the broken VHS shaders show up, glitch and tracking distortion degrading the screen while you play. It has its own ending too.
- **RANDOM** is endless. Levels in random order, 3 lives, no finish line. Built for chasing a high score.

![The classic 1997 snake game on a green phone screen next to SERPERWAVE now: a glowing cyan snake, a synthwave sunset and neon grid](../../../assets/blog/serperwave-vs-classic-1997-snake-game.webp)

Here's a full walkthrough if you want to see all 13 levels before you play:

<iframe style="width:100%;aspect-ratio:16/9;border:0;border-radius:12px" src="https://www.youtube-nocookie.com/embed/LXP5P6Qlcwc" title="SERPERWAVE Gameplay Walkthrough, 13-Level Vaporwave Snake Game" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Accessible by default, not as an afterthought

There's a pause-on-pickup toggle, so opening a box freezes the game and shows you what you got until you press a key, or you can turn it off and keep the pace. And an **effects intensity slider** at 0, 50 or 100% that scales screen shake, glitch and static all the way down to nothing.

It respects `prefers-reduced-motion` and stays fully playable with every effect at zero. Lethal blocks are marked three ways at once, color, diagonal stripes and a blinking outline, so they still read if you're colorblind. And it's playable with only a keyboard or only touch. (I care about this stuff on websites too: here's [how the accessibility menu on this site is built](/blog/posts/website-accessibility-menu-options/).)

## Why it feels like a 90s arcade

Snake was one of the first games a lot of us ever played, on an old Nokia or a computer at school. I wanted SERPERWAVE to feel like that memory, but in the version your brain remembers instead of the real one: neon sunsets, synthwave grids, CRT glow and scanlines, a level hiding inside an arcade cabinet and another inside a pink handheld console.

![90s retro snake: SERPERWAVE running on an old CRT monitor, wrapped by a neon pixel snake, with pixel palm trees, holographic stars and an Out Now button](../../../assets/blog/serperwave-90s-vaporwave-snake-arcade.webp)

The music matters as much as the colors. There are two full retro soundtracks to switch between in the main menu, one with the full synthwave energy and a softer one, in case you'd rather not have OUTRUN's tempo living in your chest the whole session.

And the pixels stay crisp: the game only scales by whole numbers, so it never looks blurry at any window size, on any screen.

---

## Play SERPERWAVE

- **itch.io (free, in your browser):** [grecia-v.itch.io/serperwave](https://grecia-v.itch.io/serperwave)
- **GitHub:** [github.com/GVPV12/serperwave](https://github.com/GVPV12/serperwave)
- **YouTube:** [official trailer](https://www.youtube.com/watch?v=quV0Fv8Er4Y) and [full gameplay walkthrough](https://www.youtube.com/watch?v=LXP5P6Qlcwc)
- **Substack:** [Snake game, but it's a 90s arcade cabinet](https://greciart.substack.com/p/snake-game-but-its-a-90s-arcade-cabinet)

It's one of the games in [the Lab](/lab/), next to *El Peso del Sí*, a short visual novel I made with Zim Yi, also in Phaser. And there are more SERPERWAVE games on the workbench, set in the same universe.

Go lose an evening to it. Then tell me which level killed you the most.
