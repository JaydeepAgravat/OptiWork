import { storage } from "../storage";
import i18n from "./index";
import { RTL_LANGUAGES } from "./languages";
import { I18nManager } from "react-native";
import RNRestart from "react-native-restart";
import { fallbackLocales } from './fallback';

const STORAGE_TRANSLATION_PREFIX = "translations_"

export async function bootstrapTranslations() {
    await loadFallback();
    await loadCached();
    //   await fetchLatest();
}

/**
 * Load bundled fallback translations
 * Always safe → never fails boot
 */
async function loadFallback() {
    try {
        const lang = i18n.language;
        const packs = ['common', 'onboard'];

        const langPack = fallbackLocales[lang] || fallbackLocales['en'];

        for (const ns of packs) {
            const data = langPack[ns];
            if (data) {
                i18n.addResourceBundle(lang, ns, data, true, true);
            }
        }
    } catch (e) {
        console.log("Fallback load failed", e);
    }
}

/**
 * Load MMKV cached translations (Instant, Sync)
 */
async function loadCached() {
    const lang = i18n.language;
    const cacheKey = STORAGE_TRANSLATION_PREFIX + lang;
    const cached = storage.getString(cacheKey);
    if (!cached) return;

    try {
        const json = JSON.parse(cached);
        Object.keys(json).forEach(ns => {
            i18n.addResourceBundle(lang, ns, json[ns], true, true);
        });
    } catch (e) {
        console.log("Cached parse failed", e);
    }
}

/**
 * Fetch latest from CDN & cache
 */
// async function fetchLatest() {
//   try {
//     const lang = i18n.language;
//     const cacheKey = STORAGE_TRANSLATION_PREFIX + lang;

//     const res = await fetch(`${CDN_BASE}/${lang}.json`);
//     if (!res.ok) throw new Error("CDN failed");

//     const json = await res.json();

//     Object.keys(json).forEach(ns => {
//       i18n.addResourceBundle(lang, ns, json[ns], true, true);
//     });

//     storage.set(cacheKey, JSON.stringify(json));
//   } catch (e) {
//     console.log("OTA fetch failed", e);
//   }
// }

/**
 * Language Switch + RTL Reset
 */
export async function changeLanguage(lang: string) {
    await i18n.changeLanguage(lang);

    const isRTL = RTL_LANGUAGES.includes(lang);

    if (I18nManager.isRTL !== isRTL) {
        I18nManager.allowRTL(isRTL);
        I18nManager.forceRTL(isRTL);
        RNRestart.Restart();
    }
}
