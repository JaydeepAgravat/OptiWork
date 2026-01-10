import { ThemeMode } from '@/types/theme.types';
import { createMMKV } from 'react-native-mmkv';

const storage = createMMKV();
const THEME_KEY = 'theme-mode';

export const getStoredTheme = (): ThemeMode | null => {
  const value = storage.getString(THEME_KEY);
  return value === 'light' || value === 'dark' ? value : null;
};

export const setStoredTheme = (mode: ThemeMode) => {
  storage.set(THEME_KEY, mode);
};

export const clearStoredTheme = () => {
  storage.remove(THEME_KEY);
};
