import colors from '@/theme/colors';
import { typography } from '@/theme/typography';
import React from 'react';
import { Toaster } from 'sonner-native';

export function AppToaster() {
  const appTheme = 'light';
  const themeColors = colors.light;

  return (
    <Toaster
      pauseWhenPageIsHidden
      autoWiggleOnUpdate="toast-change"
      position="top-center"
      visibleToasts={3}
      richColors
      theme={appTheme}
      toastOptions={{
        titleStyle: {
          ...typography.bodyMedium,
          color: themeColors.textPrimary,
        },
        descriptionStyle: {
          ...typography.bodySmall,
          color: themeColors.textSecondary,
        },
      }}
    />
  );
}
