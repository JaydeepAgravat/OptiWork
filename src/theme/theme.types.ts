import type colors from '@/theme/colors';
import type textPresets from '@/theme/textPresets';
import type typography from '@/theme/typography';

export type TypographyTokens = keyof typeof typography;

export type TextPresetName = keyof typeof textPresets;

export type ColorTokens = keyof typeof colors.light;

export type ThemeColors = typeof colors.light | typeof colors.dark;
