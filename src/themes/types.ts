/** Layout choices a theme sets, and the settings form can override. */
export interface LayoutOptions {
  /** Projects as a vertical list (text-led) or a card grid (image-led). */
  projects: 'list' | 'grid';
  /** Show cover images on project cards. */
  covers: boolean;
  /** Vertical rhythm and padding. */
  density: 'compact' | 'comfortable';
}

/** Design tokens. Emitted as CSS custom properties on the root element. */
export interface ThemeTokens {
  bg: string;
  surface: string;
  border: string;
  text: string;
  muted: string;
  accent: string;
  fontBody: string;
  fontHeading: string;
  fontMono: string;
  radius: string;
  measure: string;
}

export interface Theme {
  label: string;
  /** Drives the CSS color-scheme property, so form controls and scrollbars match. */
  colorScheme: 'dark' | 'light';
  tokens: ThemeTokens;
  layout: LayoutOptions;
}
