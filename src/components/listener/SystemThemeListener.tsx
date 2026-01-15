import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/useStore';
import { setSystemTheme } from '@/store/slices/appSlice';
import { getSystemTheme, listenToSystemTheme } from '@/utils/systemUtils';

export const SystemThemeListener = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSystemTheme(getSystemTheme()));

    return listenToSystemTheme(theme => {
      dispatch(setSystemTheme(theme));
    });
  }, [dispatch]);

  return null;
};
