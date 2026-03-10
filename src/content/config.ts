import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    heroTitle: z.string().optional(),
    heroIntro: z.string().optional(),
    heroImage: z.string().optional()
  })
});

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    heroImage: z.string().optional(),
    cardImage: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number()
  })
});

const team = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    specialties: z.array(z.string()),
    languages: z.array(z.string()).optional(),
    photo: z.string().optional(),
    order: z.number(),
    excerpt: z.string()
  })
});

export const collections = {
  pages,
  services,
  team
};
