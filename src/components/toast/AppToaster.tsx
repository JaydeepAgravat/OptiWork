import { useTheme } from '@/providers/ThemeProvider';
import typography from '@/theme/typography';
import React from 'react';
import { Toaster } from 'sonner-native';

const AppToaster = () => {
  const { activeColorScheme, activeTheme } = useTheme();

  return (
    <Toaster
      pauseWhenPageIsHidden
      autoWiggleOnUpdate="toast-change"
      position="top-center"
      visibleToasts={3}
      richColors
      theme={activeColorScheme}
      toastOptions={{
        titleStyle: {
          ...typography.bodyMedium,
          color: activeTheme.colors.textPrimary,
        },
        descriptionStyle: {
          ...typography.bodySmall,
          color: activeTheme.colors.textSecondary,
        },
      }}
    />
  );
};

export default AppToaster;
