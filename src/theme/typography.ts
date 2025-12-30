import { fontFamilies } from "./fontFamilies";

export const typography = {
    h1: {
        fontFamily: fontFamilies.googleBold,
        fontSize: 32,
        lineHeight: 40,
    },
    h2: {
        fontFamily: fontFamilies.googleBold,
        fontSize: 28,
        lineHeight: 36,
    },
    h3: {
        fontFamily: fontFamilies.googleSemiBold,
        fontSize: 24,
        lineHeight: 32,
    },
    title: {
        fontFamily: fontFamilies.googleSemiBold,
        fontSize: 20,
        lineHeight: 28,
    },
    subtitle: {
        fontFamily: fontFamilies.googleMedium,
        fontSize: 18,
        lineHeight: 26,
    },

    body: {
        fontFamily: fontFamilies.stackRegular,
        fontSize: 16,
        lineHeight: 24,
    },
    bodyMedium: {
        fontFamily: fontFamilies.stackMedium,
        fontSize: 16,
        lineHeight: 24,
    },
    bodyBold: {
        fontFamily: fontFamilies.stackBold,
        fontSize: 16,
        lineHeight: 24,
    },

    bodySmall: {
        fontFamily: fontFamilies.stackRegular,
        fontSize: 14,
        lineHeight: 20,
    },

    caption: {
        fontFamily: fontFamilies.stackLight,
        fontSize: 12,
        lineHeight: 18,
    },
} as const;

export type TypographyTokens = keyof typeof typography;
