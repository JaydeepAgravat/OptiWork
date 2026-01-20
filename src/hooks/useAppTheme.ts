import { useAppStore } from '@/store/useAppStore';
import colors from '@/theme/colors';

export const useAppTheme = () => {
  const themePreference = useAppStore(s => s.themePreference);
  const systemTheme = useAppStore(s => s.systemTheme);

  const activeColorScheme =
    themePreference === 'system' ? systemTheme : themePreference;

  const activeTheme = activeColorScheme === 'dark' ? colors.dark : colors.light;

  return {
    activeTheme,
    activeColorScheme,
    themePreference,
  };
};
