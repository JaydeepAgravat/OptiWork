import colors from '@/theme/colors';
import textPresets from '@/theme/textPresets';
import typography from '@/theme/typography';

export type TypographyTokens = keyof typeof typography;

export type TextPresetName = keyof typeof textPresets;

export type ColorTokens = keyof typeof colors.light;

export type LightDarkMode = 'light' | 'dark';

export type ThemeMode = 'light' | 'dark' | 'system';

export type Theme = {
  mode: ThemeMode;
  colors: typeof colors.light | typeof colors.dark;
};

export type ThemeContextValue = {
  activeTheme: Theme;
  themePreference: ThemeMode;
  setThemePreference: (mode: ThemeMode) => void;
  toggleThemePreference: () => void;
  activeColorScheme: LightDarkMode;
};
