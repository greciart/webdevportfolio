---
layout: /src/layouts/MarkdownPostLayout.astro
title: "The Accessibility Menu on This Site, and How Each Option Is Built"
author: Grecia V.
description: "Text size, contrast, spacing, a plainer typeface, visible focus and reduced motion, as a real menu on a real site. The CSS behind each one and why it is CSS."
image:
  url: "/images/posts/keyboard-navigation-web-accessibility.webp"
  alt: "Overhead view of two hands resting on a laptop keyboard against a white desk, representing navigating a website without a mouse."
pubDate: 2026-08-13
tags:
  [
    "Web Design & UX",
    "Web Development",
    "Tutorials & Guides"
  ]
languages: ["css", "html", "javascript"]
---

There is a version of accessibility work that is mostly a checklist: run an audit, fix whatever it flags, move on. It is worth doing and it is not what this article is about.

This is about the other half. Not "does my page pass an automated test", but "can somebody adjust this page to suit how they actually read". Those are different questions, and the second one has almost nothing to do with your Lighthouse score.

This site has a small menu in the header with six switches in it. Here is what each one does, what it is built out of, and the decision behind it.

## The rule that made all of this simple

Every preference is a data attribute on `<html>`, and every effect is plain CSS reading that attribute.

```js
document.documentElement.dataset.a11yContrast = "on";
```

```css
html[data-a11y-contrast="on"] p { color: #111827; }
```

That is the entire architecture. JavaScript writes one attribute, CSS does the work. Nothing is re-rendered, no styles are computed in script, and adding the seventh option later is a block of CSS and one line in an array.

The alternative, walking the DOM and setting inline styles, is how these menus usually get built and it is worse in every direction: slower, harder to undo, and it stomps on styles the page needs.

## Preferences have to survive the reload, and the first paint

Saving to `localStorage` is obvious. What is less obvious is that reading it back in a normal script is too late.

If the preference is applied by a script at the bottom of the page, the visitor sees the page render at the default size and then visibly jump when their setting kicks in. For somebody who has increased the text because they need it increased, that flash is the site telling them their preference is an afterthought.

So the replay runs inline in `<head>`, before anything is painted:

```html
<script is:inline>
  try {
    var a11y = JSON.parse(localStorage.getItem("a11y-prefs") || "{}");
    var el = document.documentElement;
    if (a11y.text) el.style.setProperty("--a11y-text-scale", a11y.text);
    el.dataset.a11yContrast = a11y.contrast ? "on" : "off";
    el.dataset.a11yMotion = a11y.motion ? "off" : "on";
  } catch (e) {}
</script>
```

It is a render-blocking script, which normally I would fight, but it is a handful of bytes and it runs before the first frame. The `try/catch` matters: `localStorage` throws outright in some privacy modes, and an exception here would take out everything after it.

## Text size

One custom property, one line of CSS, and the whole page scales:

```css
html {
  font-size: calc(14px * var(--a11y-text-scale, 1));
}
```

This only works if every size on the site is in `rem`. If half your type is in `px`, half the page ignores the setting and the layout tears. Worth checking before you build the control, because retrofitting units is the actual work here.

Three steps, at 1, 1.15 and 1.3. Not a slider. A slider looks more generous and is worse to use: it invites fiddling, it is fiddly on touch, and nobody has an opinion about 1.07.

## Higher contrast

The palette on this site is mint and teal on near-white, with soft blurred glows behind everything. It is the look I want and it is not the easiest thing to read.

The contrast switch does three things, and none of them change the layout:

```css
html[data-a11y-contrast="on"] :is(p, li, span, td, label) {
  color: #111827;
}
html[data-a11y-contrast="on"] .markdown :is(strong, em) {
  background: none !important;
  -webkit-text-fill-color: currentColor !important;
  color: var(--color-mint-800);
}
html[data-a11y-contrast="on"] *::before,
html[data-a11y-contrast="on"] *::after {
  opacity: 0.12;
}
```

Body text goes to the ends of the scale. Bold text, which normally has a gradient clipped to it, goes back to a solid colour, because gradient text has a different contrast ratio at every letter and the low end is the one that counts. And the decorative glows drop to near-invisible, since a soft green wash sitting behind a paragraph is quietly costing you contrast the entire time.

What it does not do is invert anything or throw away the design. It moves contrast ratios, not colour roles.

## Roomier text

```css
html[data-a11y-spacing="on"] :is(p, li, h1, h2, h3) {
  line-height: 1.75 !important;
  letter-spacing: 0.06em !important;
  word-spacing: 0.14em !important;
}
```

Those three numbers are not invented. They are the minimums from WCAG 1.4.12, which asks that a page still work when a reader applies them. I ship them as an opt-in rather than a default, so the typography keeps its intended rhythm for people who do not need the help, and one click away for people who do.

Using `em` rather than `px` means the spacing tracks whatever text size is currently selected, so the two controls compose instead of fighting.

## A plainer typeface

```css
html[data-a11y-font="readable"] {
  font-family: Verdana, Tahoma, "DejaVu Sans", sans-serif !important;
  font-variant-ligatures: none;
}
```

Verdana and Tahoma ship with essentially every desktop and phone, which means this option downloads nothing. That was the deciding factor. There are typefaces designed specifically for dyslexic readers, and the research on whether they beat a plain wide-spaced sans is genuinely mixed, so paying eighty kilobytes for one is a poor trade against a font that is already on the device.

Ligatures go off in this mode too. `fi` and `fl` fused into one glyph is exactly the kind of thing that makes a word harder to decode letter by letter.

## A focus outline you cannot miss

```css
html[data-a11y-focus="on"] :is(a, button, input):focus-visible {
  outline: 3px solid #111827 !important;
  outline-offset: 3px !important;
  box-shadow: 0 0 0 6px #6ce9b7 !important;
}
```

A solid band plus a light halo, so it is visible against a white card, a mint gradient and a near-black footer without needing three variants.

`:focus-visible` rather than `:focus` is deliberate. `:focus` also fires on mouse clicks, which is why so many sites remove focus styles entirely and break keyboard navigation for everyone. `:focus-visible` shows the ring when the browser thinks it is warranted, which in practice means keyboard use.

If you take one thing from this article, take this: never write `outline: none` without writing the replacement in the same commit.

## Reduce motion

```css
html[data-a11y-motion="off"] *,
html[data-a11y-motion="off"] *::before,
html[data-a11y-motion="off"] *::after {
  animation-duration: 0.001ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.001ms !important;
  scroll-behavior: auto !important;
}
```

`prefers-reduced-motion` already exists and this site respects it. This switch is here because a system-level setting is a setting almost nobody knows they have. Somebody who gets motion sick from a page that moves is not going to go looking through their operating system's accessibility panel; they are going to close the tab.

Setting duration to `0.001ms` instead of `none` is the trick that keeps `animationend` handlers firing, so any code waiting for an animation to finish still gets its event.

One place this leaked at first: the looping video previews in my project grid are `<video>` elements, and CSS cannot pause a video. Reducing motion has to reach them in script as well, or the single most animated thing on the page keeps animating after you asked it to stop.

## Two things that are not in the menu

**A skip link.** The first thing a Tab press from the address bar reaches, off-screen until it takes focus:

```css
.skip-link { position: absolute; top: -6rem; transition: top 160ms; }
.skip-link:focus { top: 0; }
```

Without it, every keyboard visitor tabs through the whole header on every single page before reaching anything they came for.

**A real `<main>` element.** Mine was a `<div>` for longer than I would like to admit, which meant the page had no main landmark at all, the skip link had nothing to point at, and screen reader users had no way to jump past the navigation. Changing one tag fixed all three.

While you are in there, check your heading order. My home page went `h1` and then straight to four `h3`s, because the bento tiles are small and I picked the tag by how big I wanted the text. The fix is to separate rank from size: the tags become `h2` because that is their place in the outline, and a size prop keeps them looking exactly as they did.

## A menu is not a substitute

Worth being clear about this, because there is an entire industry selling the opposite.

A widget bolted onto an inaccessible site does not make it accessible. If your contrast fails, fix the contrast. If your images have no alt text, write the alt text. If your form fields have no labels, label them. Those are not preferences, they are defects, and no toggle repairs them.

What a menu like this is good for is the part underneath the baseline: a reader who wants text a bit larger, a reader who finds gradient bold text hard to parse, a reader who wants the page to hold still. The site should already work without any of it. This is about letting somebody make it work better for them, on the page, without hunting through their device settings.
