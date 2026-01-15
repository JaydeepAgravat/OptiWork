import colors from '@/theme/colors';
import { useAppSelector } from './useStore';

export const useAppTheme = () => {
  const { themePreference, systemTheme } = useAppSelector(
    state => state.appReducer,
  );

  const activeColorScheme =
    themePreference === 'system' ? systemTheme : themePreference;

  const activeTheme = activeColorScheme === 'dark' ? colors.dark : colors.light;

  return {
    activeTheme,
    activeColorScheme,
    themePreference,
  };
};
