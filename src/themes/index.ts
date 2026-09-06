import type { Theme } from './types';
import { githubDark } from './github-dark';
import { paper } from './paper';

/**
 * Theme registry. Adding a theme is adding a file and one line here — it then
 * appears in the Site settings dropdown automatically.
 */
export const themes = {
  'github-dark': githubDark,
  paper,
} satisfies Record<string, Theme>;

export type ThemeName = keyof typeof themes;
export const DEFAULT_THEME: ThemeName = 'github-dark';

export type { Theme, ThemeTokens, LayoutOptions } from './types';
