import { getStoredTheme, setStoredTheme } from '@/storage/themeStorage';
import colors from '@/theme/colors';
import {
  LightDarkMode,
  Theme,
  ThemeContextValue,
  ThemeMode,
} from '@/types/theme.types';
import { getSystemTheme, listenToSystemTheme } from '@/utils/systemUtils';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const lightTheme: Theme = {
  mode: 'light',
  colors: colors.light,
};

export const darkTheme: Theme = {
  mode: 'dark',
  colors: colors.dark,
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themePreference, setThemePreference] = useState<ThemeMode>(() => {
    return getStoredTheme() ?? 'system';
  });

  const [systemTheme, setSystemTheme] = useState<LightDarkMode>(
    getSystemTheme(),
  );

  useEffect(() => {
    setStoredTheme(themePreference);
  }, [themePreference]);

  useEffect(() => {
    return listenToSystemTheme(setSystemTheme);
  }, []);

  // Final theme mode used by the app
  const activeColorScheme =
    themePreference === 'system' ? systemTheme : themePreference;

  const activeTheme = useMemo(
    () => (activeColorScheme === 'dark' ? darkTheme : lightTheme),
    [activeColorScheme],
  );

  const toggleThemePreference = () => {
    setThemePreference(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        activeColorScheme,
        themePreference,
        setThemePreference,
        toggleThemePreference,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return ctx;
};
