---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Microsoft Clarity: Free Heatmaps and Session Recordings, Installed Properly"
author: Grecia V.
description: "How to add Microsoft Clarity to a site without hurting your PageSpeed score, what its heatmaps and recordings actually tell you, and the privacy settings to check first."
image:
  url: "/images/posts/microsoft-clarity-website-analytics-heatmaps.webp"
  alt: "A laptop and a phone on a dark desk, the phone showing a website traffic dashboard with pageview charts, representing behaviour analytics."
pubDate: 2026-08-16
tags:
  [
    "Web Design & UX",
    "SEO & Content",
    "Tutorials & Guides"
  ]
languages: ["javascript", "html"]
---

Analytics tells you that four hundred people opened your pricing page and two of them contacted you. It does not tell you that the other three hundred and ninety-eight scrolled to the second tier, hesitated, and left.

That second thing is what behaviour tools are for, and Microsoft Clarity does it for free. Not free-tier free. Unlimited traffic, no sampling, no credit card.

I installed it on this site last week. Here is the setup, the parts of it that are actually useful, and the things I would check before turning it on for a client.

## What you get

**Heatmaps** for clicks and scroll depth, per page. The scroll map is the one I reach for most: it shows the percentage of visitors still on the page at each point down it, so you can see precisely where a page stops holding attention.

**Session recordings.** An anonymised replay of a real visit: cursor path, scrolling, clicks, page changes. Watching five of these teaches you more about your navigation than a week of guessing.

**Automatic frustration signals**, which is the part I did not expect to like and now check first:

* **Rage clicks** — repeated clicking in the same spot, usually because something looks interactive and is not
* **Dead clicks** — a click that produces no response at all
* **Excessive scrolling** — hunting for something that should have been findable
* **Quick backs** — arriving on a page and immediately going back, the clearest "this was not what I was promised" signal there is

You can filter recordings by any of those, which turns hours of footage into a short list of sessions where something actually went wrong.

## Installing it without slowing the page down

The snippet Clarity gives you looks like this:

```html
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "YOUR_PROJECT_ID");
</script>
```

Paste it in `<head>` and it works. It also starts fetching a third-party script while the browser is still trying to render your page, and `async` does not save you here: the request is queued immediately and competes for bandwidth with your own content.

Nothing in an analytics tag is needed for the page to render, so it should not be asking for anything until the page has rendered. Wrap it in a load listener:

```html
<script is:inline>
  window.addEventListener("load", function () {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "YOUR_PROJECT_ID");
  });
</script>
```

One extra line, and the tag now loads after your content instead of alongside it. Your Largest Contentful Paint does not know it exists.

The `c[a].q` bit in the original is a command queue, so anything you call before the script arrives is stored and replayed once it does. That still works inside the load listener, which is why this wrapping is safe rather than clever.

If you are on Astro, `is:inline` is required. Without it Astro will try to process and bundle the script, and this one needs to stay exactly as written.

## Check the privacy settings before you send traffic to it

Clarity masks text content by default, which is the right default and not one to take on faith.

Go to **Settings → Masking** and confirm the level. There are three:

| Level | What is recorded |
|---|---|
| **Strict** | All text masked |
| **Balanced** | Default. Masks input fields and anything marked sensitive |
| **Relaxed** | Text visible in recordings |

Balanced is fine for most sites. Relaxed is a decision you make deliberately and probably not on anything with a login or a checkout.

For anything you want masked regardless of level, mark it in the markup:

```html
<div data-clarity-mask="true">Sensitive content</div>
```

Two more things worth doing on day one:

**Tell people it is there.** A line in your privacy policy naming Microsoft Clarity and what it collects. If you operate in the EU or the UK, this is a cookie that requires consent, and the honest implementation is to load the tag only after the visitor has agreed rather than to mention it in a policy nobody opens.

**Check whether you actually need recordings.** On a portfolio, heatmaps and frustration signals do most of the work. Recording full sessions on a site with a contact form is a heavier privacy commitment than a scroll map, and you should be able to say why you took it.

## What I would look at first

Data with no question attached is just a dashboard you visit once. A few that tend to pay off:

**Where does your longest page lose people?** Open the scroll heatmap for it. If half your visitors never reach the section you consider the point of the page, the fix is structural, not a longer paragraph.

**Is anything getting rage clicked?** Almost always something that looks like a button and is not: a styled card, a bold heading, an image with a border. Cheap to fix, and it is a visitor telling you exactly what they expected.

**What do people do right before they leave?** Filter recordings by quick backs on your highest-traffic entry page. If the answer is "read the first two lines and left", your meta description is promising something the page does not open with.

**Does mobile behave like desktop?** Filter by device and compare the same heatmap. My own layouts have never once behaved the way I assumed on a phone.

## What it will not tell you

Clarity is a behaviour tool, not an analytics suite. It will not do attribution, revenue, or funnels across sessions. It does connect to Google Analytics, and the pairing is worth setting up if you already have GA: GA tells you which page has a problem, Clarity shows you what the problem is.

And it will not tell you *why*. A recording shows you a person hesitating at your pricing table. Whether they hesitated because the tiers are confusing, or because the price is wrong, or because they were eating lunch, is still a judgment call. The tool narrows where to look. It does not do the looking.

## The honest reason to install it today

It is free, it takes ten minutes, and behaviour data is only useful in hindsight. The heatmap you want is the one covering the three months before you redesigned something, and you cannot go back and collect it.

Put it on now, leave it alone, and have real data the next time you are about to change a page based on a hunch.
