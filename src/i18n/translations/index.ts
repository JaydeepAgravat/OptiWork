import enCommon from "./en/common.json";
import enOnboard from "./en/onboard.json";
import arCommon from "./ar/common.json";
import arOnboard from "./ar/onboard.json";
import { useTranslation } from "react-i18next";

/**
 * Single source of truth for languages
 */
export const LANGUAGES = {
    en: {
        dir: "ltr",
        namespaces: {
            common: enCommon,
            onboard: enOnboard,
        },
    },
    ar: {
        dir: "rtl",
        namespaces: {
            common: arCommon,
            onboard: arOnboard,
        },
    },
} as const;

/**
 * i18next compatible resources
 */
export const resources = Object.fromEntries(
    Object.entries(LANGUAGES).map(([lang, value]) => [
        lang,
        value.namespaces,
    ])
) as {
        [K in keyof typeof LANGUAGES]: typeof LANGUAGES[K]["namespaces"];
    };

export type AppLanguage = keyof typeof LANGUAGES;
export type AppNamespace =
    keyof (typeof LANGUAGES)[AppLanguage]["namespaces"];

export type AppRTLDirection = Extract<
    AppLanguage,
    {
        [K in AppLanguage]: (typeof LANGUAGES)[K]["dir"] extends "rtl" ? K : never;
    }[AppLanguage]
>;

export type AppLTRDirection = Extract<
    AppLanguage,
    {
        [K in AppLanguage]: (typeof LANGUAGES)[K]["dir"] extends "ltr" ? K : never;
    }[AppLanguage]
>;


export const RTL_LANGUAGES = Object.keys(LANGUAGES).filter(
    (lang) => LANGUAGES[lang as AppLanguage].dir === "rtl"
) as AppRTLDirection[];

export const LTR_LANGUAGES = Object.keys(LANGUAGES).filter(
    (lang) => LANGUAGES[lang as AppLanguage].dir === "ltr"
) as AppLTRDirection[];



type Namespace = AppNamespace;
type Resource = typeof resources["en"];

/* keys in a namespace, e.g. "save" | "skip" */
type KeysFor<N extends Namespace> = Extract<keyof Resource[N], string>;

/* prefixed key: "common:save" */
type PrefixedKey<N extends Namespace> = `${N}:${KeysFor<N>}`;

/* union of prefixed keys for an array of namespaces */
type PrefixedKeysForArray<Ns extends readonly Namespace[]> =
    Ns[number] extends infer U
    ? U extends Namespace
    ? PrefixedKey<U>
    : never
    : never;

/* result type: we only re-type `t` here, keep other fields as `any` so you still have i18n, i18n.t, ready, etc. */
type UseTranslationLike<TT> = {
    t: (k: TT) => string;
    i18n: any;
    ready: boolean;
    // include other properties if you rely on them
};

/* OVERLOADS */
/* OVERLOADS */

// no arg → default namespace "common"
export function useAppTranslation(): UseTranslationLike<KeysFor<"common">>;

// single namespace → unprefixed keys
export function useAppTranslation<N extends Namespace>(
    namespace: N
): UseTranslationLike<KeysFor<N>>;

// multiple namespaces → prefixed keys
export function useAppTranslation<Ns extends readonly Namespace[]>(
    namespaces: Ns
): UseTranslationLike<PrefixedKeysForArray<Ns>>;

/* IMPLEMENTATION (⚠️ NOT GENERIC) */
export function useAppTranslation(
    namespaces?: Namespace | readonly Namespace[]
): UseTranslationLike<string> {
    const res = useTranslation(namespaces as any);

    return {
        ...res,
        t: res.t as any,
    };
}
