import { useAppTheme } from '@/hooks/useAppTheme';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface AppLgProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const AppLg: React.FC<AppLgProps> = ({ style, children }) => {
  const { activeTheme } = useAppTheme();

  return (
    <LinearGradient
      colors={[
        activeTheme.primary,
        activeTheme.primarySubtle,
        activeTheme.bgApp,
      ]}
      locations={[0, 0.7, 0.95]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};

export default AppLg;
