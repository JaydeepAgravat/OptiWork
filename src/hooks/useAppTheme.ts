import { AppThemeContext } from '@/providers/ThemeProvider';
import { ThemeContextValue } from '@/types/theme.types';
import { useContext } from 'react';

export const useAppTheme = (): ThemeContextValue => {
  const ctx = useContext(AppThemeContext);
  if (!ctx) {
    throw new Error('useAppTheme must be used inside ThemeProvider');
  }
  return ctx;
};
