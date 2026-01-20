import * as RNLocalize from 'react-native-localize';
import { LanguageDetectorModule } from 'i18next';
import { storage } from '@/storage/storage';
import { APP_STORAGE_KEY } from '@/storage/keys';
import { AppState } from '@/store/useAppStore';

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: () => {
    const stored = storage.get<AppState>(APP_STORAGE_KEY);

    if (stored?.language) {
      return stored.language;
    }

    const best = RNLocalize.findBestLanguageTag(['en', 'ar']);

    return best?.languageTag ?? 'en';
  },
};

export default languageDetector;
