import { settings } from './settings';
import { themes, DEFAULT_THEME, type LayoutOptions, type ThemeName } from '../themes';

const name = (settings.theme ?? DEFAULT_THEME) as ThemeName;

/** Falls back rather than throwing, so a typo in settings cannot break the build. */
export const theme = themes[name] ?? themes[DEFAULT_THEME];

/**
 * Theme layout defaults, overridden per-setting where the form specifies one.
 * An empty string in settings means "use the theme's choice".
 */
export const layout: LayoutOptions = {
  projects: (settings.layout?.projects || theme.layout.projects) as LayoutOptions['projects'],
  covers: settings.layout?.covers ? settings.layout.covers === 'on' : theme.layout.covers,
  density: (settings.layout?.density || theme.layout.density) as LayoutOptions['density'],
};

/** Tokens as an inline style string for the root element. */
export const themeStyle = [
  `color-scheme:${theme.colorScheme}`,
  `--bg:${theme.tokens.bg}`,
  `--surface:${theme.tokens.surface}`,
  `--border:${theme.tokens.border}`,
  `--text:${theme.tokens.text}`,
  `--muted:${theme.tokens.muted}`,
  `--accent:${theme.tokens.accent}`,
  `--font-body:${theme.tokens.fontBody}`,
  `--font-heading:${theme.tokens.fontHeading}`,
  `--mono:${theme.tokens.fontMono}`,
  `--radius:${theme.tokens.radius}`,
  `--measure:${theme.tokens.measure}`,
].join(';');
