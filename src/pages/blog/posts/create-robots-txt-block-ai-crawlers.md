---
layout: /src/layouts/MarkdownPostLayout.astro
title: How to Create a robots.txt File to Block AI Crawlers (Complete Guide)
author: Grecia V.
description: "Learn how to create a robots.txt file to block AI crawlers from scraping your website. Protect your articles, artwork, images, and other original content with this step-by-step guide."
image:
  url: "/images/posts/how-to-create-robots-txt-file.webp"
  alt: "A stylized robot character holding a magnifying glass next to a website interface, representing automated web crawling and search engine indexing processes."
pubDate: 2026-07-10
tags:
  [
    "robots.txt",
    "AI crawlers",
    "website security",
    "content protection",
    "AI scraping",
    "SEO",
    "web development",
  ]
languages: ["AI", "LLM"]
---

![A close-up of a sturdy padlock secured on a teal door, symbolizing website security and the controlled access provided by a robots.txt file.](/images/posts/website-content-security-shield.webp)

# How to Create a robots.txt File to Block AI Crawlers from Scraping Your Website

Many AI systems crawl publicly available websites to gather text, images, and other data for training large language models. While not every crawler respects website owners' preferences, many legitimate companies do honor exclusion rules when they're properly configured.

One of the easiest steps you can take is creating a **robots.txt** file. It won't stop every scraper on the internet, but it tells compliant AI crawlers and search bots which parts of your website they shouldn't access.

If you own a portfolio, blog, online store, or business website, setting up a robots.txt file is a simple way to add another layer of protection.

## What Is a robots.txt File?

A **robots.txt** file is a plain text document placed in the root directory of your website.

Its purpose is to provide instructions to automated bots about which pages or folders they are allowed—or not allowed—to crawl.

Search engines have used this standard for decades, and many AI companies now publish the names of their crawlers so website owners can choose whether to allow access.

Although robots.txt is not a security feature, it remains an important part of responsible web publishing and crawler management.

## Does robots.txt Stop AI From Stealing Content?

The short answer is **not completely**.

A robots.txt file is a voluntary standard. Ethical companies generally respect it, while malicious scrapers often ignore it.

Think of it as placing a "Do Not Enter" sign on your property. Honest visitors will respect it, but determined intruders may not.

For that reason, robots.txt should be considered one component of a broader content protection strategy rather than a complete solution.

![A laptop screen displaying digital security icons, representing strategies to protect website content and online creative work from unauthorized AI scraping.](/images/posts/protect-website-from-ai-scraping.webp)

## How to Create a robots.txt File

Creating one only takes a few minutes.

### Step 1. Open a Text Editor

You can use:

* Notepad (Windows)
* TextEdit (macOS)
* VS Code
* Sublime Text
* Any plain text editor

### Step 2. Create a New File

Create a file named exactly:

```text
robots.txt
```

The filename must be lowercase and contain no extra extension.

Correct:

```
robots.txt
```

Incorrect:

```
robots.txt.txt
Robots.txt
robots.doc
```

### Step 3. Add Rules for AI Crawlers

Many AI companies publish the names of their crawlers.

Here's an example that blocks several commonly documented AI crawlers:

```txt
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Claude-SearchBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Amazonbot
Disallow: /
```

These rules tell each crawler not to access any page on your website.

As AI companies introduce new crawlers, you can update this file with additional entries.

## Step 4. Upload the File

Place **robots.txt** in the root directory of your website.

For example:

```
https://yourwebsite.com/robots.txt
```

If visitors can open that URL in their browser, the file is usually in the correct location.

## How to Verify It Works

After uploading the file:

* Visit `yourwebsite.com/robots.txt`.
* Confirm the file loads correctly.
* Check that there are no formatting mistakes.
* Test it whenever you make changes.

Most hosting providers also let you view files directly through their file manager or FTP client.

## Can You Block Search Engines Without Affecting SEO?

Yes.

If your goal is only to discourage AI training, avoid blocking search engines that help people discover your website.

Many companies provide dedicated crawler names specifically for AI-related services, allowing you to limit AI data collection while keeping your pages visible in search results.

This gives you much finer control than blocking every bot indiscriminately.

## Additional Ways to Protect Your Content

A robots.txt file works best when combined with other protective measures.

Consider also:

* Using copyright notices on your website.
* Embedding IPTC metadata in images.
* Publishing lower-resolution versions of artwork.
* Digitally signing files with Adobe Content Authenticity.
* Adding visible or subtle watermarks where appropriate.
* Reviewing each platform's AI training policies before uploading your work.

No single technique can completely prevent unauthorized scraping, but combining several methods significantly increases the effort required to reuse your work.

![A digital illustration of a shield labeled robots.txt blocking small robot spiders, illustrating how to prevent web scraping and manage AI crawler access.](/images/posts/robots-txt-prevent-web-scraping.webp)

## Is this the final solution?

As AI continues to evolve, protecting creative work requires more than simply publishing it online. While robots.txt isn't a magic solution, it remains one of the easiest and most widely supported ways to communicate your website's crawling preferences.

Combined with metadata, copyright information, content authenticity credentials, and careful platform choices, it becomes part of a stronger strategy for safeguarding your writing, artwork, photography, and other original creations.

Ultimately, owning your own website gives you the greatest level of control. Unlike social media platforms, you decide how your content is hosted, indexed, and accessed—making it one of the best long-term investments for protecting your work online.
