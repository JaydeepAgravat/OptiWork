const colors = {
  light: {
    /* ========= Base ========= */
    white: '#FFFFFF',
    black: '#000000',
    whiteInverse: '#000000',
    blackInverse: '#FFFFFF',

    /* ========= Primary (Light Blue) ========= */
    primary: '#1E88E5',
    primaryHover: '#1976D2',
    primaryActive: '#1565C0',
    primarySubtle: '#E3F2FD',
    primaryMuted: '#90CAF9',
    primaryInverse: '#0D1B2A',
    primaryHoverInverse: '#0A1625',
    primaryActiveInverse: '#081120',
    primarySubtleInverse: '#0D1B2A',
    primaryMutedInverse: '#1E3A5F',

    /* ========= Background ========= */
    bgApp: '#FFFFFF',
    bgSurface: '#F9FBFF',
    bgElevated: '#F1F6FE',
    bgCard: '#FFFFFF',
    bgInput: '#F5F8FF',
    bgBackdrop: 'rgba(0, 0, 0, 0.2)',
    bgAppInverse: '#000000',
    bgSurfaceInverse: '#111827',
    bgElevatedInverse: '#1F2937',
    bgCardInverse: '#111827',
    bgInputInverse: '#1F2937',
    bgBackdropInverse: 'rgba(265, 265, 265, 1)',

    /* ========= Text ========= */
    textPrimary: '#0D1B2A',
    textSecondary: '#42526E',
    textTertiary: '#6B7C93',
    textDisabled: '#A0AEC0',
    textInverse: '#FFFFFF',
    textLink: '#1E88E5',
    textPrimaryInverse: '#FFFFFF',
    textSecondaryInverse: '#CBD5E1',
    textTertiaryInverse: '#E2E8F0',
    textDisabledInverse: '#F5F5F5',
    textLinkInverse: '#0A84FF',

    /* ========= Border ========= */
    borderDefault: '#E2E8F0',
    borderSubtle: '#EDF2F7',
    borderStrong: '#CBD5E1',
    borderFocus: '#1E88E5',
    borderDefaultInverse: '#1F2937',
    borderSubtleInverse: '#111827',
    borderStrongInverse: '#374151',
    borderFocusInverse: '#0A84FF',

    /* ========= Icons ========= */
    iconPrimary: '#1E293B',
    iconSecondary: '#64748B',
    iconDisabled: '#94A3B8',
    iconInverse: '#FFFFFF',
    iconPrimaryInverse: '#FFFFFF',
    iconSecondaryInverse: '#CBD5E1',
    iconDisabledInverse: '#E5E7EB',
    iconInverseInverse: '#000000',

    /* ========= States ========= */
    success: '#2E7D32',
    successSubtle: '#E8F5E9',
    warning: '#ED6C02',
    warningSubtle: '#FFF3E0',
    error: '#D32F2F',
    errorSubtle: '#FDECEA',
    info: '#0288D1',
    infoSubtle: '#E1F5FE',
    successInverse: '#4ADE80',
    successSubtleInverse: '#052E16',
    warningInverse: '#FBBF24',
    warningSubtleInverse: '#3A2E0C',
    errorInverse: '#F87171',
    errorSubtleInverse: '#3F0D12',
    infoInverse: '#38BDF8',
    infoSubtleInverse: '#082F49',

    /* ========= Buttons ========= */
    buttonPrimaryBg: '#1E88E5',
    buttonPrimaryText: '#FFFFFF',
    buttonSecondaryBg: '#E3F2FD',
    buttonSecondaryText: '#1E88E5',
    buttonDisabledBg: '#E2E8F0',
    buttonDisabledText: '#94A3B8',
    buttonPrimaryBgInverse: '#0A84FF',
    buttonPrimaryTextInverse: '#000000',
    buttonSecondaryBgInverse: '#0D1B2A',
    buttonSecondaryTextInverse: '#FFFFFF',
    buttonDisabledBgInverse: '#1F2937',
    buttonDisabledTextInverse: '#CBD5E1',

    /* ========= Divider ========= */
    divider: '#E2E8F0',
    dividerInverse: '#374151',

    /* ========= Shadows ========= */
    shadowSm: 'rgba(0, 0, 0, 0.08)',
    shadowMd: 'rgba(0, 0, 0, 0.12)',
    shadowLg: 'rgba(0, 0, 0, 0.18)',
    shadowSmInverse: 'rgba(255, 255, 255, 0.08)',
    shadowMdInverse: 'rgba(255, 255, 255, 0.12)',
    shadowLgInverse: 'rgba(255, 255, 255, 0.18)',
  },

  dark: {
    /* ========= Base ========= */
    white: '#FFFFFF',
    black: '#000000',
    whiteInverse: '#000000',
    blackInverse: '#FFFFFF',

    /* ========= Primary (Dark Blue) ========= */
    primary: '#0A84FF',
    primaryHover: '#3399FF',
    primaryActive: '#0066CC',
    primarySubtle: '#0D1B2A',
    primaryMuted: '#1E3A5F',
    primaryInverse: '#1E88E5',
    primaryHoverInverse: '#1976D2',
    primaryActiveInverse: '#1565C0',
    primarySubtleInverse: '#E3F2FD',
    primaryMutedInverse: '#90CAF9',

    /* ========= Background ========= */
    bgApp: '#000000',
    bgSurface: '#0B1220',
    bgElevated: '#111A2C',
    bgCard: '#0F172A',
    bgInput: '#0B1A33',
    bgBackdrop: 'rgba(255, 255, 255, 0.2)',
    bgAppInverse: '#FFFFFF',
    bgSurfaceInverse: '#F9FBFF',
    bgElevatedInverse: '#F1F6FE',
    bgCardInverse: '#FFFFFF',
    bgInputInverse: '#F5F8FF',
    bgBackdropInverse: 'rgba(0, 0, 0, 1)',

    /* ========= Text ========= */
    textPrimary: '#E5E7EB',
    textSecondary: '#9CA3AF',
    textTertiary: '#6B7280',
    textDisabled: '#4B5563',
    textInverse: '#000000',
    textLink: '#0A84FF',
    textPrimaryInverse: '#0D1B2A',
    textSecondaryInverse: '#42526E',
    textTertiaryInverse: '#6B7C93',
    textDisabledInverse: '#A0AEC0',
    textLinkInverse: '#1E88E5',

    /* ========= Border ========= */
    borderDefault: '#1F2937',
    borderSubtle: '#111827',
    borderStrong: '#374151',
    borderFocus: '#0A84FF',
    borderDefaultInverse: '#E2E8F0',
    borderSubtleInverse: '#EDF2F7',
    borderStrongInverse: '#CBD5E1',
    borderFocusInverse: '#1E88E5',

    /* ========= Icons ========= */
    iconPrimary: '#E5E7EB',
    iconSecondary: '#9CA3AF',
    iconDisabled: '#4B5563',
    iconInverse: '#000000',
    iconPrimaryInverse: '#1E293B',
    iconSecondaryInverse: '#64748B',
    iconDisabledInverse: '#94A3B8',
    iconInverseInverse: '#FFFFFF',

    /* ========= States ========= */
    success: '#4ADE80',
    successSubtle: '#052E16',
    warning: '#FBBF24',
    warningSubtle: '#3A2E0C',
    error: '#F87171',
    errorSubtle: '#3F0D12',
    info: '#38BDF8',
    infoSubtle: '#082F49',
    successInverse: '#2E7D32',
    successSubtleInverse: '#E8F5E9',
    warningInverse: '#ED6C02',
    warningSubtleInverse: '#FFF3E0',
    errorInverse: '#D32F2F',
    errorSubtleInverse: '#FDECEA',
    infoInverse: '#0288D1',
    infoSubtleInverse: '#E1F5FE',

    /* ========= Buttons ========= */
    buttonPrimaryBg: '#0A84FF',
    buttonPrimaryText: '#000000',
    buttonSecondaryBg: '#0D1B2A',
    buttonSecondaryText: '#0A84FF',
    buttonDisabledBg: '#1F2937',
    buttonDisabledText: '#6B7280',
    buttonPrimaryBgInverse: '#1E88E5',
    buttonPrimaryTextInverse: '#FFFFFF',
    buttonSecondaryBgInverse: '#E3F2FD',
    buttonSecondaryTextInverse: '#1E88E5',
    buttonDisabledBgInverse: '#E2E8F0',
    buttonDisabledTextInverse: '#94A3B8',

    /* ========= Divider ========= */
    divider: '#1F2937',
    dividerInverse: '#E2E8F0',

    /* ========= Shadows ========= */
    shadowSm: 'rgba(0, 0, 0, 0.4)',
    shadowMd: 'rgba(0, 0, 0, 0.55)',
    shadowLg: 'rgba(0, 0, 0, 0.7)',
    shadowSmInverse: 'rgba(255, 255, 255, 0.08)',
    shadowMdInverse: 'rgba(255, 255, 255, 0.12)',
    shadowLgInverse: 'rgba(255, 255, 255, 0.18)',
  },
} as const;

export default colors;
