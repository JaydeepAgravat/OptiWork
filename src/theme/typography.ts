import fontFamilies from './fontFamilies';
import { scaleFont } from './scale';

const typography = {
  // ─── DISPLAY ───
  displayLarge: {
    fontFamily: fontFamilies.googleBold,
    fontSize: scaleFont(40),
    lineHeight: scaleFont(48),
    letterSpacing: 0,
  },

  // ─── HEADLINE ───
  headlineLarge: {
    fontFamily: fontFamilies.googleBold,
    fontSize: scaleFont(32),
    lineHeight: scaleFont(40),
    letterSpacing: 0,
  },
  headlineMedium: {
    fontFamily: fontFamilies.googleBold,
    fontSize: scaleFont(28),
    lineHeight: scaleFont(36),
    letterSpacing: 0,
  },
  headlineSmall: {
    fontFamily: fontFamilies.googleSemiBold,
    fontSize: scaleFont(24),
    lineHeight: scaleFont(32),
    letterSpacing: 0,
  },

  // ─── TITLE ───
  titleLarge: {
    fontFamily: fontFamilies.googleSemiBold,
    fontSize: scaleFont(22),
    lineHeight: scaleFont(28),
    letterSpacing: 0.15,
  },
  titleMedium: {
    fontFamily: fontFamilies.googleMedium,
    fontSize: scaleFont(18),
    lineHeight: scaleFont(24),
    letterSpacing: 0.1,
  },
  titleSmall: {
    fontFamily: fontFamilies.googleMedium,
    fontSize: scaleFont(16),
    lineHeight: scaleFont(22),
    letterSpacing: 0.1,
  },

  // ─── BODY ───
  bodyLarge: {
    fontFamily: fontFamilies.stackRegular,
    fontSize: scaleFont(16),
    lineHeight: scaleFont(24),
    letterSpacing: 0.25,
  },
  bodyMedium: {
    fontFamily: fontFamilies.stackRegular,
    fontSize: scaleFont(14),
    lineHeight: scaleFont(20),
    letterSpacing: 0.25,
  },
  bodySmall: {
    fontFamily: fontFamilies.stackRegular,
    fontSize: scaleFont(12),
    lineHeight: scaleFont(18),
    letterSpacing: 0.2,
  },

  // ─── LABEL (Buttons, chips, captions) ───
  labelLarge: {
    fontFamily: fontFamilies.stackMedium,
    fontSize: scaleFont(14),
    lineHeight: scaleFont(18),
    letterSpacing: 0.6,
  },
  labelMedium: {
    fontFamily: fontFamilies.stackMedium,
    fontSize: scaleFont(12),
    lineHeight: scaleFont(16),
    letterSpacing: 0.6,
  },
  labelSmall: {
    fontFamily: fontFamilies.stackMedium,
    fontSize: scaleFont(11),
    lineHeight: scaleFont(14),
    letterSpacing: 0.6,
  },
} as const;

export default typography;
