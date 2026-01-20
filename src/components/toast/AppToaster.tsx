import React from 'react';

import { Toaster } from 'sonner-native';

import { useAppTheme } from '@/hooks/useAppTheme';
import typography from '@/theme/typography';

const AppToaster = () => {
  const { activeColorScheme, activeTheme } = useAppTheme();

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
          color: activeTheme.textPrimary,
        },
        descriptionStyle: {
          ...typography.bodySmall,
          color: activeTheme.textSecondary,
        },
      }}
    />
  );
};

export default AppToaster;
