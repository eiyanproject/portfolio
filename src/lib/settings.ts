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
  nav: { label: string; href: string }[];
  links?: { label: string; url: string }[];
  footer?: string;
  /** Key from the theme registry in src/themes. */
  theme?: string;
  /** Per-setting overrides of the theme's layout. '' means "use the theme". */
  layout?: {
    projects?: string;
    covers?: string;
    density?: string;
  };
}

export const settings = data as SiteSettings;

/** Page title with the site name appended, avoiding "Afif — Afif" on the home page. */
export const pageTitle = (title?: string) =>
  title && title !== settings.siteName ? `${title} — ${settings.siteName}` : settings.siteName;
