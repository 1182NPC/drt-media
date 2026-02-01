import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const photography = defineCollection({
  type: "content",
  // 1. Change schema to a function that accepts { image }
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    // 2. Use image() helper instead of z.string()
    cover: image(), 
  }),
});

export const collections = { blog, photography };