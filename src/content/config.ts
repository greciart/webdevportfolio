// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const staticData = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      profileImage: image(), // 👈 también conviene optimizar esta
      profileAlt: z.string(),
      profileLink: z.string(),
      profileTitle: z.string(),
      profileName: z.string(),
      github: z.string().url(),
      githubText: z.string(),

      portfolioImage: image(), // 👈 FIX REAL

      email: z.string().email(),
      linkedin: z.string().url(),
      instagram: z.string().url(),
      youtube: z.string().url(),
      contra: z.string().url(),
      behance: z.string().url(),
      calendly: z.string().url(),
      alias: z.string(),
      contactSectionTitle: z.string(),
      contactSectionSubtitle: z.string(),
      contactSectionButtonText: z.string(),
      contactSectionButtonIcon: z.string(),
      techsTitle: z.string(),
      instagramIconName: z.string(),
      youtubeIconName: z.string(),
      githubIconName: z.string(),
      contraIconName: z.string(),
      behanceIconName: z.string(),
      linkedinIconName: z.string(),
      emailIconName: z.string(),
      hobbies: z.array(z.string()),
      pageTitle: z.string(),
      pageDescription: z.string(),

      OGImage: z.object({
        url: image(), // 👈 también optimizable
        alt: z.string(),
      }),
    }),
});


const projectSchema = ({ image }: { image: () => any }) =>
  z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    languages: z.array(z.string()),
    image: z.object({
      url: image(),
      alt: z.string(),
    }),
    // Keeps the cover out of the case study body when the same shot already
    // runs in the side gallery. It still serves as the card and OG image.
    hideCover: z.boolean().optional(),
    // Optional looping clip for the card in the projects grid. `src` lives in
    // /public/videos; `poster` is a still from the same clip so the card keeps
    // its box before a single byte of video is fetched.
    video: z
      .object({
        src: z.string(),
        poster: image(),
      })
      .optional(),
    gallery: z
      .array(z.object({
        url: image(),
        alt: z.string(),
      }))
      .optional(),
  });

const projects = defineCollection({
  type: 'content',
  schema: projectSchema,
});

// Spanish case studies. Same slugs and same schema as `projects`; a slug with
// no translation falls back to its English entry (see src/i18n/projects.ts).
const projectsEs = defineCollection({
  type: 'content',
  schema: projectSchema,
});

export const collections = {
  staticData,
  projects,
  projectsEs,
};