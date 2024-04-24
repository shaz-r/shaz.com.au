import { defineCollection, z } from "astro:content";

const thoughts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    published: z.boolean(),
  }),
});

export const collections = { thoughts };
