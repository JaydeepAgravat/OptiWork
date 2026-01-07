export const colors = {
  light: {
    primary: '#6750A4',
    onPrimary: '#FFFFFF',
    secondary: '#625B71',
    onSecondary: '#FFFFFF',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    onSurface: '#1C1B1F',
    error: '#B3261E',
    onError: '#FFFFFF',
    textPrimary: '#1C1B1F',
    textSecondary: '#6C6B73',
    textTertiary: '#8D8C92',
    textDisabled: '#CAC4D0',
    blur: '#00000059',
  },
  dark: {
    primary: '#D0BCFF',
    onPrimary: '#381E72',
    secondary: '#CCC2DC',
    onSecondary: '#332D41',
    background: '#1C1B1F',
    surface: '#1C1B1F',
    onSurface: '#E6E1E5',
    error: '#F2B8B5',
    onError: '#601410',
    textPrimary: '#E6E1E5',
    textSecondary: '#CAC4D0',
    textTertiary: '#8D8C92',
    textDisabled: '#4A454C',
  },
} as const;

export default colors;

export type ColorTokens = keyof typeof colors.light;
