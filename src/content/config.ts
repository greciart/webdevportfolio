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


// 👇 Solo agrega esto nuevo
const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      description: z.string(),
      languages: z.array(z.string()),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      gallery: z
        .array(z.object({
          url: image(),
          alt: z.string(),
        }))
        .optional(),
    }),
});

// 👇 Y agrega projects aquí
export const collections = {
  staticData,
  projects,  // 👈 nueva línea
};