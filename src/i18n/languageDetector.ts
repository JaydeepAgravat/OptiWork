import * as RNLocalize from "react-native-localize";
import { storage } from "../storage";
import { LanguageDetectorModule } from "i18next";


const customDetector: LanguageDetectorModule = {
    type: "languageDetector",
    detect: () => {
        const stored = storage.getString("app_language");

        console.log("stored", stored)

        if (stored) {
            return stored;
        }

        const best = RNLocalize.findBestLanguageTag([
            "en", "ar"
        ]);

        return best?.languageTag ?? "en";
    },

    init: () => { },

    cacheUserLanguage: (lng: string) => {
        console.log("cached user language")
        storage.set("app_language", lng);
    },
};

export default customDetector