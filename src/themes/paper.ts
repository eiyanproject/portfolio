import type { Theme } from './types';

/**
 * Deliberately unlike github-dark: light, serif, image-led. Exists to prove the
 * token and layout system actually switches something. Safe to delete.
 */
export const paper: Theme = {
  label: 'Paper',
  colorScheme: 'light',
  tokens: {
    bg: '#fbfaf8',
    surface: '#ffffff',
    border: '#e2ded6',
    text: '#24211d',
    muted: '#6b655c',
    accent: '#8a5a2b',
    fontBody: "Georgia, 'Iowan Old Style', 'Times New Roman', serif",
    fontHeading: "Georgia, 'Iowan Old Style', 'Times New Roman', serif",
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    radius: '4px',
    measure: '42rem',
  },
  layout: {
    projects: 'grid',
    covers: true,
    density: 'compact',
  },
};
