import * as RNLocalize from 'react-native-localize';
import { LanguageDetectorModule } from 'i18next';
import { storage } from '@/storage';

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: () => {
    // return 'en';
    const stored = storage.getString('app_language');

    console.log('stored', stored);

    if (stored) {
      return stored;
    }

    const best = RNLocalize.findBestLanguageTag(['en', 'ar']);

    return best?.languageTag ?? 'en';
  },

  init: () => {},

  cacheUserLanguage: (lng: string) => {
    console.log('cached user language');
    storage.set('app_language', lng);
  },
};

export default languageDetector;
