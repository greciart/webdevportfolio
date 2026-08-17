---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Scroll Reveal Animations in Pure CSS, With One Small Observer"
author: Grecia V.
description: "How the scroll animations on this site work: CSS keyframes paused until an element is on screen, no animation library, and no per-frame JavaScript."
image:
  url: "/images/posts/css-scroll-animations-fluid-motion.webp"
  alt: "Teal and coral ink dispersing through water in slow curling trails, representing smooth motion on a web page."
pubDate: 2026-08-09
tags:
  [
    "Web Design & UX",
    "Creative Coding",
    "Tutorials & Guides"
  ]
languages: ["css", "javascript", "tailwind"]
---

Every so often someone asks which library I use for the animations on this site. The honest answer is none. The entire scroll reveal system is CSS keyframes plus about twenty lines of JavaScript whose only job is to decide *when* to start them.

That distinction is the whole trick, so it is worth saying clearly before any code: **JavaScript should never be running the animation. It should only be flipping a switch.** Once a library is calculating positions on every scroll event, you have signed up for work on the main thread for as long as the page is open. Once the browser is running a CSS animation, it is not asking your code for anything at all.

## The shape of it

Three pieces:

1. Elements start with an animation already attached, but **paused**, so the browser holds them on the first frame.
2. An `IntersectionObserver` watches them and flips `animation-play-state` to `running` when they enter the viewport.
3. When the animation finishes, the whole thing is removed so the element goes back to being an ordinary element.

No positions are read, nothing is measured, and there is no scroll listener anywhere.

## Step 1. Arm the animation before it can run

```css
[data-reveal] {
  animation-duration: 700ms;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
  animation-fill-mode: both;
  animation-play-state: paused;
}

@keyframes reveal-up {
  from { opacity: 0; translate: 0 28px; }
  to   { opacity: 1; translate: 0 0; }
}

[data-reveal="up"] { animation-name: reveal-up; }
```

`animation-fill-mode: both` is what keeps the element in its `from` state while paused. Without it, a paused animation shows the element at its normal styles and everything is visible before it has any business being visible.

Note what the keyframes touch: `opacity` and `translate`, nothing else. Those two are handled by the compositor, on their own thread, so they cannot cause layout and cannot shift anything on the page. That is not a small detail. An animation that moves an element with `top` or `margin` re-runs layout on every frame, which on a mid-range phone is exactly how you end up with a janky page and a Cumulative Layout Shift score you cannot explain.

## Step 2. Un-pause it when it appears

```js
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      entry.target.classList.add("reveal-in");
    }
  },
  { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
);

document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
```

```css
[data-reveal].reveal-in { animation-play-state: running; }
```

That is the entire runtime. `unobserve` right after firing means each element is watched exactly once and then dropped, so the observer's list shrinks as the visitor scrolls instead of growing.

The `rootMargin` of `-8%` at the bottom pulls the trigger line up slightly. Without it, an element starts animating the instant its first pixel crosses the fold, which reads as things fading in below the edge of the screen where nobody is looking. Shrinking the trigger area a little means the reveal happens where the eye already is.

## Step 3. Give the element back

```js
window.setTimeout(() => el.classList.add("reveal-done"), 1600);
```

```css
[data-reveal].reveal-done { animation: none; }
```

This one is easy to skip and worth doing. An element with a finished animation still attached keeps whatever compositing layer that animation needed, and on a page with fifty of them that is real memory. It also gets in the way: a `hover:scale-105` on a card fights with a leftover animation that owns `transform`. Removing the animation once it has served its purpose hands the element back to its normal styles.

## Staggering, without writing a stagger

A group of cards appearing all at once looks like a page loading. The same cards appearing 70ms apart looks intentional. You do not need JavaScript for that either:

```css
[data-reveal-stagger] > *:nth-child(1) { animation-delay: 0ms; }
[data-reveal-stagger] > *:nth-child(2) { animation-delay: 70ms; }
[data-reveal-stagger] > *:nth-child(3) { animation-delay: 140ms; }
[data-reveal-stagger] > *:nth-child(n + 9) { animation-delay: 500ms; }
```

The observer watches the container, the children inherit the animation, and `nth-child` does the sequencing. Capping the delay at the ninth child matters: without that cap, the twentieth card in a grid waits 1.4 seconds after the first, which stops reading as a stagger and starts reading as a bug.

One thing that caught me out. In a bento grid, DOM order is not visual order, because the tiles are placed with `col-start` and `row-start`. The default `nth-child` sequence revealed the bottom-right tile first. If your layout reorders things, the delays have to be restated to match what the eye sees, per breakpoint.

## The two rules I follow above the fold

**Never animate from `opacity: 0` on your largest visible element.** Chrome ignores fully transparent elements when picking the Largest Contentful Paint candidate. An element that fades from zero does not count as painted until the fade begins, so a decorative animation quietly pushes your LCP back by however long you delayed it. Start at `0.01` instead. It is visually identical and the element counts as painted on frame one.

**Do not make the hero depend on JavaScript to become visible.** Anything above the fold gets a plain CSS animation that runs on load, with no observer involved:

```css
[data-reveal-now] {
  animation: reveal-enter 1600ms cubic-bezier(0.4, 0, 0.2, 1) backwards;
}
```

If the observer is what makes content appear, then a JavaScript error, a blocked script or a slow connection means a blank hero. That is a bad trade for a fade.

## The blur problem

`filter: blur()` in a reveal looks lovely. It is also the one property in my set that the browser will not hand to the compositor, so every frame is re-rasterised on the main thread. Lighthouse flags exactly this under "avoid non-composited animations."

I kept it, because it is part of how the site looks, but with a hint that limits the damage:

```css
[data-reveal].reveal-in { will-change: filter, opacity, transform; }
[data-reveal].reveal-done { will-change: auto; }
```

`will-change` promotes the element to its own layer, so the repaint stays inside that layer instead of dragging in everything behind it. The important half is the second line. A permanent `will-change` is a memory leak with good intentions; granting it only while the animation runs, and withdrawing it the moment it ends, gets the benefit without the cost.

## Turning it all off

Two switches, and both are non-negotiable.

The system one:

```css
@media (prefers-reduced-motion: reduce) {
  [data-reveal] { animation: none !important; }
}
```

And a control in the interface, because plenty of people who want less motion on a website have never opened their operating system's accessibility settings. On this site that is a toggle in the accessibility menu that writes an attribute on `<html>`, which CSS then reads. Same effect, discoverable by someone who is not already an expert in their own device.

There is also a third case worth handling: `[data-reveal]` must only hide things when the script that reveals them is capable of running. A class added by a tiny inline script in the head gates the entire system, so with JavaScript disabled nothing is ever hidden in the first place.

## Is a library ever the right call?

Yes, when you need timeline control: chained sequences, scrubbing an animation to scroll position, morphing paths. GSAP earns its bytes on that kind of work and I would not try to hand-roll it.

But a fade-and-rise as things enter the viewport is not that. It is four keyframes and a class toggle, and doing it yourself means the animation runs at whatever frame rate the compositor can manage rather than whatever your JavaScript can keep up with.
