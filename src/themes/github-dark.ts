import type { Theme } from './types';

export const githubDark: Theme = {
  label: 'GitHub Dark',
  colorScheme: 'dark',
  tokens: {
    bg: '#0d1117',
    surface: '#161b22',
    border: '#30363d',
    text: '#c9d1d9',
    muted: '#8b949e',
    accent: '#58a6ff',
    fontBody: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontHeading: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    radius: '8px',
    measure: '46rem',
  },
  layout: {
    projects: 'list',
    covers: false,
    density: 'comfortable',
  },
};
