/**
 * Whether entries with `draft: true` should be rendered.
 *
 * - `astro dev` — always, so work in progress is visible locally.
 * - `astro build` — only when SHOW_DRAFTS=true, which the deploy workflow sets
 *   for the preview build. The production build leaves it unset, so drafts
 *   never reach the public site.
 *
 * Read from process.env rather than import.meta.env: page frontmatter runs in
 * Node at build time, and unprefixed vars are not exposed on import.meta.env.
 */
export const showDrafts = import.meta.env.DEV || process.env.SHOW_DRAFTS === 'true';
