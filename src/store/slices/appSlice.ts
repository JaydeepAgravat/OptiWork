import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { storage } from '@/storage/storage';

export const APP_STORAGE_KEY = 'app';

export type ThemePreference = 'light' | 'dark' | 'system';
export type LightDarkMode = 'light' | 'dark';

export interface AppState {
  themePreference: ThemePreference;
  systemTheme: LightDarkMode;
  language: 'en' | 'ar';
  onboardingCompleted: boolean;
}

const persisted = storage.get<AppState>(APP_STORAGE_KEY);

const initialState: AppState = {
  themePreference: persisted?.themePreference ?? 'system',
  systemTheme: persisted?.systemTheme ?? 'light',
  language: persisted?.language ?? 'en',
  onboardingCompleted: persisted?.onboardingCompleted ?? false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setThemePreference(state, action: PayloadAction<ThemePreference>) {
      state.themePreference = action.payload;
      storage.set(APP_STORAGE_KEY, state);
    },

    setSystemTheme(state, action: PayloadAction<LightDarkMode>) {
      state.systemTheme = action.payload;
    },

    setLanguage(state, action: PayloadAction<AppState['language']>) {
      state.language = action.payload;
      storage.set(APP_STORAGE_KEY, state);
    },

    completeOnboarding(state) {
      state.onboardingCompleted = true;
      storage.set(APP_STORAGE_KEY, state);
    },
  },
});

export const {
  setThemePreference,
  setSystemTheme,
  setLanguage,
  completeOnboarding,
} = appSlice.actions;

export const appReducer = appSlice.reducer;
