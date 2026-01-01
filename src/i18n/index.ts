import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "./languageDetector";
import { bootstrapTranslations } from "./i18n.service";

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        compatibilityJSON: "v4",
        fallbackLng: "en",
        ns: ["common", "onboard"],
        defaultNS: "common",
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
    }).then(() => {
        bootstrapTranslations();
    })



export default i18n;
