import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Sveltia writes an empty string for every optional field left blank, rather
 * than omitting the key. `.optional()` therefore never applies — the key is
 * present, just invalid — so `repo: ''` fails a `.url()` check and `cover: ''`
 * would render a broken <img src="">. Normalise '' to undefined first.
 */
const blankToUndefined = (value: unknown) =>
  typeof value === 'string' && value.trim() === '' ? undefined : value;

const optionalText = z.preprocess(blankToUndefined, z.string().optional());
const optionalUrl = z.preprocess(blankToUndefined, z.string().url().optional());
const optionalDate = z.preprocess(blankToUndefined, z.coerce.date().optional());

// Media lives in public/uploads and is referenced by URL path, so cover images
// are plain strings rather than Astro's image() helper (which requires src/).

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: optionalText,
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: optionalText,
    coverAlt: optionalText,
    repo: optionalUrl,
    url: optionalUrl,
    attachment: optionalText,
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: optionalText,
    pubDate: z.coerce.date(),
    updatedDate: optionalDate,
    tags: z.array(z.string()).default([]),
    cover: optionalText,
    coverAlt: optionalText,
    draft: z.boolean().default(false),
  }),
});

export const collections = { pages, projects, posts };
