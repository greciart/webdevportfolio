---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Netlify Contact Form: How to Actually Receive the Emails"
author: Grecia V.
description: "The exact HTML Netlify Forms needs, why submissions never reach your inbox by default, and how to switch on email notifications."
image:
  url: "/images/posts/netlify-contact-form-email-notifications.webp"
  alt: "A professional reviewing incoming email messages on a desktop computer in a bright office, representing contact form submissions arriving in an inbox."
pubDate: 2026-07-22
tags:
  [
    "Web Development",
    "Tutorials & Guides"
  ]
languages: ["netlify", "html", "javascript"]
---

You built the contact page. The form looks great. You deploy it, send yourself a test message, see the success screen, and then wait for an email that never arrives.

This is the single most common Netlify Forms problem, and it is almost never a bug in your code. **Netlify Forms does not email you by default.** It stores submissions in your site dashboard and stays silent until you explicitly tell it otherwise.

In this guide you'll set up a Netlify contact form correctly from scratch: the exact markup Netlify looks for, the mistakes that make a form invisible to the platform, how to turn on email notifications, and how to submit with JavaScript without losing anything.

![A laptop screen displaying a web interface with input fields, representing an HTML contact form built for a static website](/images/posts/html-contact-form-netlify-data-attributes.webp)

## How Netlify Forms Actually Works

Understanding the mechanism saves hours of debugging. There are two separate phases:

1. **At build time**, Netlify's bots crawl the HTML files you deployed and look for forms marked with a specific attribute. Every form it finds gets registered, along with its fields.
2. **At runtime**, when someone POSTs to any path on your site, Netlify intercepts the request, matches it to a registered form by name, and stores the submission.

Two consequences fall out of this, and they explain most of the problems people hit:

* **Your form must exist in the static HTML at deploy time.** If a JavaScript framework renders the form only in the browser, Netlify's crawler never sees it and the form is never registered.
* **Registration happens at deploy, not on the fly.** If you add a field, you must redeploy for Netlify to know about it.

## Step 1. Write the Markup Netlify Expects

Here is a complete, working form. Every attribute in it is doing a job:

```html
<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />

  <p class="hidden">
    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
  </p>

  <label for="name">Name</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required />

  <label for="message">Message</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Send message</button>
</form>
```

Breaking down what matters:

* **`data-netlify="true"`** is the flag the build crawler looks for. Without it, nothing else works.
* **`name="contact"`** identifies the form. If you have several forms on a site, each needs a unique name.
* **`<input type="hidden" name="form-name" value="contact" />`** must match the form's `name` attribute exactly. Netlify uses this field to route the submission. Get it wrong and you'll see a 404 on submit.
* **`method="POST"`** is required. A GET form will not be captured.
* **Every field you want to receive needs a `name` attribute.** A field with only an `id` is invisible to Netlify.
* **`data-netlify-honeypot="bot-field"`** enables the built-in spam trap, covered below.

### The Honeypot Field

The honeypot is a decoy input hidden from humans with CSS. Real visitors never see it, so they never fill it. Automated bots fill every field they find, so a filled honeypot is a reliable spam signal, and Netlify discards those submissions server-side before they reach you.

It costs nothing, adds no JavaScript, and blocks a meaningful share of bot traffic. There is no reason to skip it.

Note the `hidden` class must actually hide the field in your CSS. If you're on Tailwind, `class="hidden"` already works. On plain CSS, add:

```css
.hidden {
  display: none;
}
```

## Step 2. Deploy and Confirm the Form Was Detected

This is the checkpoint most people skip, and it's the fastest way to diagnose a broken form.

After deploying, go to your Netlify dashboard and open **Site configuration → Forms**. Your form should appear in the list by name.

* **If it's there**, the markup is correct and the problem is elsewhere.
* **If it's missing**, Netlify never saw your form. The usual culprits are a missing `data-netlify="true"`, a form rendered client-side only, or form detection being disabled in your build settings.

Don't move on until the form shows up here.

## Step 3. Turn On Email Notifications

Here is the part nobody tells you.

A registered form that receives submissions will happily collect them **without ever sending you an email**. They sit in the dashboard under **Forms → your form name**, waiting for someone to look.

To actually get notified:

1. Go to **Site configuration → Forms → Form notifications**
2. Click **Add notification → Email notification**
3. Choose the form the notification applies to
4. Enter the email address that should receive submissions
5. Save

From that moment on, each new submission arrives in your inbox. Existing submissions are not resent, so send yourself a fresh test.

> If test messages still don't arrive, check your spam folder first. Netlify's notification emails come from their domain, not yours, which occasionally trips aggressive filters. Marking one as "not spam" usually fixes it permanently.

![An open mailbox filled with unread letters, representing form submissions that stay stored in the Netlify dashboard when email notifications are disabled](/images/posts/netlify-form-submissions-mailbox.webp)

## Step 4. Submitting with JavaScript (Optional but Recommended)

The plain form above works, but it navigates away to a generic success page. For a portfolio or client site you usually want to stay on the page and show your own confirmation.

You can do that with `fetch`, as long as you keep sending the same encoded body Netlify expects:

```javascript
const form = document.getElementById("contact-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    });

    if (!response.ok) throw new Error(`Request failed: ${response.status}`);

    // Swap the form for your own success message here.
  } catch {
    // Always give people a fallback, like a mailto link.
  }
});
```

Three details make or break this:

* **POST to `/`**, not to a custom endpoint. Netlify's form handler listens across the whole site.
* **The `Content-Type` must be `application/x-www-form-urlencoded`.** Sending JSON silently fails.
* **`new FormData(form)` must include the hidden `form-name` field**, which it will as long as that input lives inside the `<form>` element.

Always keep an error path that shows your email address. If the fetch fails, a visitor who wanted to contact you should not hit a dead end.

## Common Mistakes and How to Spot Them

**Submitting returns a 404.** The `form-name` hidden input doesn't match the form's `name` attribute, or the form was never registered at build time.

**The form doesn't appear in the dashboard.** It isn't in the deployed static HTML. View source on the live page, not your local dev server, and search for `data-netlify`. If it isn't in the raw source, Netlify can't see it either.

**Submissions arrive but fields are empty.** Those inputs are missing `name` attributes, or you added fields without redeploying.

**Everything works but no email arrives.** Notifications aren't configured. Go back to Step 3.

**It works in production but fails locally.** Expected. Netlify Forms is handled by Netlify's infrastructure, so a local dev server will return an error on submit. Test on a deploy preview instead.

## Limits Worth Knowing

The free tier includes **100 submissions per month**. Beyond that, forms stop accepting submissions until the next cycle or until you upgrade. For a portfolio or small business site that's usually plenty, but it's worth watching if you ever get hit by a spam wave, since blocked spam still counts toward detection quotas in some plans.

This is another reason to set up the honeypot from day one, and to consider adding a captcha if your form starts attracting bots.

## If the email still does not arrive

Work backwards, because each step tells you where the chain broke.

Open the Forms tab in your Netlify dashboard. If the submission is not listed
there, the problem is in the markup or the deploy: Netlify never saw a form,
so nothing was captured. If the submission *is* listed and no email came, the
form was fine and the notification is what is missing. Check the spam folder
once, then check that the notification is attached to the right form rather
than to a form of the same name on another site.

The one case that catches people out: a submission that arrives with every
field empty. That is a form whose inputs have no `name` attribute. The browser
only sends named fields, so Netlify recorded a real submission containing
nothing at all.
