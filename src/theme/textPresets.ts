import { ColorTokens, TypographyTokens } from '@/theme/theme.types';

type TextPreset = {
  variant: TypographyTokens;
  color: ColorTokens;
};

const textPresets = {
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
    color: 'textTertiary',
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
    color: 'textDisabled',
  },
  helperText: {
    variant: 'bodySmall',
    color: 'textTertiary',
  },
  errorText: {
    variant: 'bodySmall',
    color: 'error',
  },

  // ─── BUTTONS ───
  buttonPrimary: {
    variant: 'labelLarge',
    color: 'buttonPrimaryText',
  },
  buttonSecondary: {
    variant: 'labelLarge',
    color: 'buttonSecondaryText',
  },
  buttonDisabled: {
    variant: 'labelLarge',
    color: 'buttonDisabledText',
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
    color: 'textPrimary',
  },
  badgeText: {
    variant: 'labelSmall',
    color: 'textInverse',
  },

  // ─── CAPTIONS / META ───
  caption: {
    variant: 'labelSmall',
    color: 'textTertiary',
  },
  timestamp: {
    variant: 'labelSmall',
    color: 'textDisabled',
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

export default textPresets;
