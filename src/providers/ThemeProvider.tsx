import { getStoredTheme, setStoredTheme } from '@/storage/themeStorage';
import colors from '@/theme/colors';
import {
  LightDarkMode,
  ThemeContextValue,
  ThemeMode,
} from '@/types/theme.types';
import { getSystemTheme, listenToSystemTheme } from '@/utils/systemUtils';
import React, { createContext, useEffect, useMemo, useState } from 'react';

export const AppThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

export const lightTheme = colors.light;

export const darkTheme = colors.dark;

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
    <AppThemeContext.Provider
      value={{
        activeTheme,
        activeColorScheme,
        themePreference,
        setThemePreference,
        toggleThemePreference,
      }}
    >
      {children}
    </AppThemeContext.Provider>
  );
};
