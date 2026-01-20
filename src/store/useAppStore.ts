import { create } from 'zustand';

import i18n from '@/i18n';
import { APP_STORAGE_KEY } from '@/storage/keys';
import { storage } from '@/storage/storage';

export type ThemePreference = 'light' | 'dark' | 'system';
export type LightDarkMode = 'light' | 'dark';
export type Language = 'en' | 'ar';

export interface AppState {
  themePreference: ThemePreference;
  systemTheme: LightDarkMode;
  language: Language;
  onboardingCompleted: boolean;

  // actions
  setThemePreference: (theme: ThemePreference) => void;
  setSystemTheme: (theme: LightDarkMode) => void;
  setLanguage: (lang: Language) => Promise<void>;
  completeOnboarding: () => void;
}

const persisted = storage.get<AppState>(APP_STORAGE_KEY);

export const useAppStore = create<AppState>((set, get) => ({
  themePreference: persisted?.themePreference ?? 'system',
  systemTheme: persisted?.systemTheme ?? 'light',
  language: persisted?.language ?? 'en',
  onboardingCompleted: persisted?.onboardingCompleted ?? false,

  setThemePreference: theme => {
    set({ themePreference: theme });
    storage.set(APP_STORAGE_KEY, get());
  },

  setSystemTheme: theme => {
    set({ systemTheme: theme });
  },

  setLanguage: async lang => {
    await i18n.changeLanguage(lang); // 🔥 replaces listenerMiddleware
    set({ language: lang });
    storage.set(APP_STORAGE_KEY, get());
  },

  completeOnboarding: () => {
    set({ onboardingCompleted: true });
    storage.set(APP_STORAGE_KEY, get());
  },
}));
