import { Appearance } from 'react-native';

import type { LightDarkMode } from '@/store/useAppStore';

export const getSystemTheme = (): LightDarkMode => {
  return Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';
};

export const listenToSystemTheme = (
  onChange: (mode: LightDarkMode) => void,
) => {
  const sub = Appearance.addChangeListener(({ colorScheme }) => {
    if (colorScheme) {
      onChange(colorScheme === 'dark' ? 'dark' : 'light');
    }
  });

  return () => sub.remove();
};
