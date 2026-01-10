import enCommon from './en/common.json';
import enOnboard from './en/onboard.json';
import enToast from './en/toast.json';
import arCommon from './ar/common.json';
import arOnboard from './ar/onboard.json';
import arToast from './ar/toast.json';

import i18n from '..';
import { TOptions } from 'i18next';

/**
 * Single source of truth for languages
 */
export const LANGUAGES = {
  en: {
    dir: 'ltr',
    namespaces: {
      common: enCommon,
      onboard: enOnboard,
      toast: enToast,
    },
  },
  ar: {
    dir: 'rtl',
    namespaces: {
      common: arCommon,
      onboard: arOnboard,
      toast: arToast,
    },
  },
} as const;

/**
 * i18next compatible resources
 */
export const resources = Object.fromEntries(
  Object.entries(LANGUAGES).map(([lang, value]) => [lang, value.namespaces]),
) as {
  [K in keyof typeof LANGUAGES]: (typeof LANGUAGES)[K]['namespaces'];
};

export type AppLanguage = keyof typeof LANGUAGES;

export type AppNamespace = keyof (typeof LANGUAGES)[AppLanguage]['namespaces'];

export type AppRTLDirection = Extract<
  AppLanguage,
  {
    [K in AppLanguage]: (typeof LANGUAGES)[K]['dir'] extends 'rtl' ? K : never;
  }[AppLanguage]
>;

export type AppLTRDirection = Extract<
  AppLanguage,
  {
    [K in AppLanguage]: (typeof LANGUAGES)[K]['dir'] extends 'ltr' ? K : never;
  }[AppLanguage]
>;

export const RTL_LANGUAGES = Object.keys(LANGUAGES).filter(
  lang => LANGUAGES[lang as AppLanguage].dir === 'rtl',
) as AppRTLDirection[];

export const LTR_LANGUAGES = Object.keys(LANGUAGES).filter(
  lang => LANGUAGES[lang as AppLanguage].dir === 'ltr',
) as AppLTRDirection[];

type KeysFor<N extends AppNamespace> = Extract<keyof Resource[N], string>;

export type PrefixedToastKey = KeysFor<'toast'>;

type Resource = (typeof resources)['en'];

type RecursiveKeys<T, IsRoot extends boolean = true> = {
  [K in keyof T & string]: T[K] extends object
    ? IsRoot extends true
      ? K | `${K}.${RecursiveKeys<T[K], false>}`
      : `${K}.${RecursiveKeys<T[K], false>}`
    : K;
}[keyof T & string];

export type TxKeyPath = {
  [N in keyof Resource & string]: `${N}:${RecursiveKeys<Resource[N]>}`;
}[keyof Resource & string];

export function translate(key: TxKeyPath, options?: TOptions): string {
  if (i18n.isInitialized) {
    return i18n.t(key, options);
  }
  return key;
}

export type TxKeyPathByNamespace<N extends keyof Resource & string> =
  `${N}:${RecursiveKeys<Resource[N]>}`;

export type ToastTxKey = TxKeyPathByNamespace<'toast'>;
