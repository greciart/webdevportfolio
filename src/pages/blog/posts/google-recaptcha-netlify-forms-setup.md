---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Add Google reCAPTCHA to Netlify Forms: API Keys Step by Step"
author: Grecia V.
description: "Create reCAPTCHA v2 API keys, add them as Netlify environment variables, and load the widget without hurting your PageSpeed score."
image:
  url: "/images/posts/google-recaptcha-netlify-forms-bot-protection.webp"
  alt: "A robotic hand reaching into a glowing digital network, representing automated bots targeting website contact forms and the need for spam protection."
pubDate: 2026-07-29
tags:
  [
    "Web Development",
    "Security & Privacy",
    "Tutorials & Guides"
  ]
languages: ["netlify", "html", "javascript"]
---

A contact form with no protection will eventually start collecting garbage. Not because someone targeted you, but because bots crawl the web looking for any exposed form and submit to all of them.

Netlify's honeypot field stops the lazy ones. For the rest, you need a real captcha. The good news is that Netlify verifies Google reCAPTCHA **server-side**, so a bot can't skip it by posting directly to the endpoint.

The bad news, and the reason many people avoid captchas, is that reCAPTCHA loads a heavy Google script. If you add it naively, your Lighthouse performance score drops. This guide covers both halves: generating the keys correctly, and loading the widget so it costs nothing on page load.

![Two keyboard tiles and a hardware security key beside a laptop, representing site and secret API credentials](/images/posts/recaptcha-site-key-secret-key-credentials.webp)

## Before You Start: You Need v2, Not v3

This trips up almost everyone, because Google preselects the wrong option.

When you create a reCAPTCHA site, Google defaults to **v3 (score based)**. Netlify Forms does **not** support v3. It only supports **reCAPTCHA v2 with the "I'm not a robot" checkbox**.

If you generate v3 keys, everything will look configured, and every submission will be rejected. Pick v2 from the start and save yourself the debugging.

## Step 1. Generate the reCAPTCHA API Keys

Go to [google.com/recaptcha/admin/create](https://www.google.com/recaptcha/admin/create) and sign in with your Google account.

**Label**: an internal name so you can identify the site later. Your domain or project name works: `mysite-contact`.

**reCAPTCHA type**: change it from "Score based (v3)" to **"Challenge (v2)"**. A sub-option appears. Choose **"I'm not a robot" Checkbox**.

**Domains**: add the domain where the form lives, without `https://` and without a trailing slash:

```text
mysite.netlify.app
```

Add your custom domain too if you have one. Each domain goes on its own line. Don't add `localhost`: reCAPTCHA won't work on a local dev server with Netlify Forms anyway, since form handling only runs on Netlify's infrastructure.

**Google Cloud project**: reCAPTCHA is now part of Google Cloud, so it asks you to pick or create a project. Any project works; it doesn't affect how the captcha behaves.

Accept the terms and submit.

## Step 2. Copy Both Keys

The confirmation screen gives you two values. They look similar, they are **not** interchangeable, and mixing them up is the second most common failure:

| Key | What it is | Where it goes |
|---|---|---|
| **Site key** | Public. Rendered into your HTML so the widget can appear. | Your page markup, plus a Netlify variable |
| **Secret key** | Private. Used server-side to verify the token Google issues. | A Netlify variable only |

Both start with `6L`. The site key being public is by design, it is not a leak. The secret key must never appear in your repository, your HTML, or a screenshot.

Copy both somewhere temporary. You'll paste them in the next step.

## Step 3. Add the Keys as Netlify Environment Variables

In your Netlify dashboard, go to **Site configuration → Environment variables → Add a variable**.

You'll create **three** variables. Netlify's integration reads two of them, and your own front-end code reads the third:

| Key (the variable name) | Value (paste from Google) | Contains secret values |
|---|---|---|
| `SITE_RECAPTCHA_KEY` | Your **site** key (`6L...`) | Leave unchecked |
| `SITE_RECAPTCHA_SECRET` | Your **secret** key (`6L...`) | Check it |
| `PUBLIC_RECAPTCHA_SITE_KEY` | Your **site** key again, same value | Leave unchecked |

For all three, leave **Scopes** on *All scopes* and **Values** on *Same value for all deploy contexts*.

Two things to be careful about here:

* **The "Key" field takes the variable name. The "Value" field takes the long string from Google.** It sounds obvious, but pasting the variable name into the value box is an easy slip, and Netlify won't warn you.
* **Two of the three share the same value.** `SITE_RECAPTCHA_KEY` and `PUBLIC_RECAPTCHA_SITE_KEY` both hold the site key. Only `SITE_RECAPTCHA_SECRET` is different.

Why three? `SITE_RECAPTCHA_KEY` and `SITE_RECAPTCHA_SECRET` are the names Netlify's own integration looks for. The `PUBLIC_` one is what your site's client-side code reads to render the widget. If you let Netlify inject the widget automatically you can skip the third, but then you lose control over when the script loads, which is the whole point of the next section.

**Environment variables only apply to new builds.** After adding them, trigger a redeploy or nothing changes.

## Step 4. Mark the Form and Reserve Space for the Widget

Add `data-netlify-recaptcha="true"` to the form, and a container where the widget will mount:

```html
<form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  data-netlify-recaptcha="true"
>
  <input type="hidden" name="form-name" value="contact" />

  <!-- your fields -->

  <div id="recaptcha-slot" data-sitekey="YOUR_SITE_KEY" class="min-h-[78px]"></div>

  <button type="submit">Send message</button>
</form>
```

That `min-h-[78px]` matters more than it looks. The reCAPTCHA checkbox widget is exactly 78px tall. Reserving the space up front means that when the widget appears, nothing below it jumps. That keeps your **Cumulative Layout Shift at zero**, which is a Core Web Vital Google measures directly.

In a framework, read the site key from the environment instead of hardcoding it:

```javascript
const recaptchaSiteKey = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY ?? "";
```

Gating the whole block on that value being present is a good habit: the form keeps working normally before you've configured the keys, instead of breaking.

## Step 5. Load reCAPTCHA Lazily so PageSpeed Doesn't Drop

This is the part that separates a captcha you regret from one you forget about.

Google's reCAPTCHA script pulls in several hundred kilobytes of JavaScript. Loaded normally, it competes with your actual page during load and shows up in Lighthouse as unused JavaScript and extra main-thread work.

But nobody needs the captcha until they interact with the form. So don't load it until they do:

```javascript
const form = document.getElementById("contact-form");
const slot = document.getElementById("recaptcha-slot");
let requested = false;

function loadCaptcha() {
  if (requested || !slot) return;
  requested = true;

  window.onCaptchaReady = () => {
    window.grecaptcha.render(slot, { sitekey: slot.dataset.sitekey });
  };

  const script = document.createElement("script");
  script.src =
    "https://www.google.com/recaptcha/api.js?onload=onCaptchaReady&render=explicit";
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

["focusin", "pointerdown", "keydown"].forEach((event) =>
  form.addEventListener(event, loadCaptcha, { once: true, passive: true }),
);
```

The trick is `render=explicit` combined with an `onload` callback. It tells Google not to auto-scan the page, and to call your function when it's ready so you can mount the widget exactly where you want it.

The result: **zero bytes downloaded on page load**. PageSpeed Insights measures the initial load of a cold page, and a visitor who never touches the form never downloads the script. Your score stays exactly where it was.

Verify it worked by viewing source on the deployed page and searching for `recaptcha`. It should only appear inside your inline JavaScript as a string, never as a `<script src>` tag.

![A programmer's workspace with multiple screens showing code, representing the client-side script that loads the captcha on demand](/images/posts/spam-bots-blocked-contact-form.webp)

## Step 6. Check the Token Before Submitting

If you submit with `fetch`, verify the visitor actually completed the challenge before sending. Otherwise Netlify rejects it and your visitor sees a generic error:

```javascript
if (slot && !window.grecaptcha?.getResponse?.()) {
  showError("Please complete the “I'm not a robot” check before sending.");
  return;
}
```

The token itself travels automatically. Google injects a hidden `g-recaptcha-response` field inside the widget container, and because that container sits inside your `<form>`, `new FormData(form)` picks it up without extra work.

One detail worth handling: a token is single-use. If the submission fails and the visitor retries, reset the widget first:

```javascript
window.grecaptcha?.reset?.();
```

Without this, the second attempt fails with a stale token and it looks like your form is broken.

## Troubleshooting

**Every submission is rejected.** You almost certainly generated v3 keys. Go back to Google, create a new site with **Challenge (v2) → Checkbox**, and replace both variables.

**"Invalid domain for site key".** The domain in your reCAPTCHA settings doesn't match where the form is served. Deploy previews use a different subdomain, so add it or test on production.

**The widget never appears.** Check that `PUBLIC_RECAPTCHA_SITE_KEY` is set and that you redeployed. Then open the browser console and look for a script error from Google.

**It works locally but not deployed, or the reverse.** Netlify Forms and its captcha verification only run on Netlify. Local dev servers will always fail on submit; that's expected, not a misconfiguration.

## Is a Captcha Even the Right Tool?

Worth asking honestly. Layer your defenses and understand what each one actually does:

* **Honeypot**: free, invisible, verified by Netlify server-side. Blocks unsophisticated bots. Always use it.
* **reCAPTCHA v2**: verified server-side by Netlify. Blocks nearly everything, at the cost of asking real visitors to click a box.
* **Timing checks and JavaScript traps**: free, but client-side only, so they don't stop a bot posting straight to the endpoint. Useful as an extra signal, not as your main defense.

If your form gets a couple of spam messages a month, the honeypot alone may be enough and you spare visitors the friction. If you're drowning in them, add the captcha. And if you'd rather not send visitors through Google at all, Cloudflare Turnstile is a lighter, more private alternative, though it needs a serverless function to verify tokens since Netlify doesn't check it natively.

## Wrapping Up

Getting this right comes down to five things:

1. Generate **v2 Checkbox** keys, never v3
2. Keep the site key and secret key straight, and never commit the secret
3. Create all three environment variables, then redeploy
4. Reserve 78px so the widget doesn't shift your layout
5. Load Google's script only on first interaction, so your performance score is untouched

Done this way, spam stops and nobody, including Lighthouse, notices the captcha is there.
