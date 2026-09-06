import data from '../data/settings.json';

/**
 * Site-wide settings, edited through the "Site settings" entry in the CMS.
 * Imported as JSON so it is resolved at build time with no runtime cost.
 */
export interface SiteSettings {
  siteName: string;
  tagline: string;
  intro?: string;
  description: string;
  accent: string;
  nav: { label: string; href: string }[];
  links?: { label: string; url: string }[];
  footer?: string;
}

export const settings: SiteSettings = data;

/** Page title with the site name appended, avoiding "Afif — Afif" on the home page. */
export const pageTitle = (title?: string) =>
  title && title !== settings.siteName ? `${title} — ${settings.siteName}` : settings.siteName;
