import { useEffect } from 'react';

import { useAppStore } from '@/store/useAppStore';
import { getSystemTheme, listenToSystemTheme } from '@/utils/systemUtils';

export const SystemThemeListener = () => {
  const setSystemTheme = useAppStore(s => s.setSystemTheme);

  useEffect(() => {
    // set initial system theme
    setSystemTheme(getSystemTheme());

    // listen for system theme changes
    return listenToSystemTheme(theme => {
      setSystemTheme(theme);
    });
  }, [setSystemTheme]);

  return null;
};
