import colors from '@/theme/colors';
import textPresets from '@/theme/textPresets';
import typography from '@/theme/typography';

export type TypographyTokens = keyof typeof typography;

export type TextPresetName = keyof typeof textPresets;

export type ColorTokens = keyof typeof colors.light;

export type ThemeColors = typeof colors.light | typeof colors.dark;
