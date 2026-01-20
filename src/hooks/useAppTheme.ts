import colors from '@/theme/colors';
import { useAppStore } from '@/store/useAppStore';

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
