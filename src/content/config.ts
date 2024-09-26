import { defineCollection, z } from "astro:content";

const News = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    img: z.string().url(),
    description: z.string(),
    link: z.string()
  })
})


export const collection = {News}