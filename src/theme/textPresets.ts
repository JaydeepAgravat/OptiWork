import { TypographyTokens } from './typography';
import { ColorTokens } from './colors';

type TextPreset = {
  variant: TypographyTokens;
  color: ColorTokens;
};

export const textPresets = {
  // ─── SCREEN LEVEL ───
  screenTitle: {
    variant: 'headlineLarge',
    color: 'textPrimary',
  },
  screenSubtitle: {
    variant: 'titleMedium',
    color: 'textSecondary',
  },

  // ─── SECTION / CARD ───
  sectionTitle: {
    variant: 'headlineSmall',
    color: 'textPrimary',
  },
  sectionSubtitle: {
    variant: 'bodyMedium',
    color: 'textSecondary',
  },
  cardTitle: {
    variant: 'titleMedium',
    color: 'textPrimary',
  },
  cardSubtitle: {
    variant: 'bodySmall',
    color: 'textSecondary',
  },

  // ─── LIST / ITEM ───
  listTitle: {
    variant: 'titleSmall',
    color: 'textPrimary',
  },
  listDescription: {
    variant: 'bodyMedium',
    color: 'textSecondary',
  },
  listMeta: {
    variant: 'bodySmall',
    color: 'textTertiary',
  },

  // ─── BODY CONTENT ───
  bodyPrimary: {
    variant: 'bodyMedium',
    color: 'textPrimary',
  },
  bodySecondary: {
    variant: 'bodySmall',
    color: 'textSecondary',
  },
  paragraph: {
    variant: 'bodyLarge',
    color: 'textPrimary',
  },

  // ─── FORMS ───
  inputLabel: {
    variant: 'labelMedium',
    color: 'textSecondary',
  },
  inputValue: {
    variant: 'bodyMedium',
    color: 'textPrimary',
  },
  inputPlaceholder: {
    variant: 'bodyMedium',
    color: 'textTertiary',
  },
  helperText: {
    variant: 'bodySmall',
    color: 'textSecondary',
  },
  errorText: {
    variant: 'bodySmall',
    color: 'error',
  },

  // ─── BUTTONS ───
  buttonPrimary: {
    variant: 'labelLarge',
    color: 'onPrimary',
  },
  buttonSecondary: {
    variant: 'labelLarge',
    color: 'primary',
  },
  buttonDisabled: {
    variant: 'labelLarge',
    color: 'textDisabled',
  },

  // ─── TABS / CHIPS / BADGES ───
  tabLabel: {
    variant: 'labelMedium',
    color: 'textSecondary',
  },
  tabLabelActive: {
    variant: 'labelMedium',
    color: 'primary',
  },
  chipText: {
    variant: 'labelMedium',
    color: 'onSurface',
  },
  badgeText: {
    variant: 'labelSmall',
    color: 'onError',
  },

  // ─── CAPTIONS / META ───
  caption: {
    variant: 'labelSmall',
    color: 'textTertiary',
  },
  timestamp: {
    variant: 'labelSmall',
    color: 'textSecondary',
  },

  // ─── EMPTY / MARKETING ───
  heroTitle: {
    variant: 'displayLarge',
    color: 'textPrimary',
  },
  heroSubtitle: {
    variant: 'titleLarge',
    color: 'textSecondary',
  },
} as const satisfies Record<string, TextPreset>;

export type TextPresetName = keyof typeof textPresets;
