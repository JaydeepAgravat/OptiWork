import React, { forwardRef, useImperativeHandle, useState } from 'react';

import type { ViewStyle } from 'react-native';
import { View, StyleSheet } from 'react-native';

import { useAppTheme } from '@/hooks/useAppTheme';
import { hS, vS } from '@/theme/scale';
import type { ThemeColors } from '@/theme/theme.types';

import SnakeDotLoader from './SnakeDotLoader';

export type AppLoaderRef = {
  show: () => void;
  hide: () => void;
};

const AppLoaderHost = forwardRef<AppLoaderRef>((_, ref) => {
  const { activeTheme } = useAppTheme();
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setVisible(true);
    },
    hide() {
      setVisible(false);
    },
  }));

  if (!visible) return null;

  return (
    <View style={dStyle.overlay(activeTheme)}>
      <View style={dStyle.box(activeTheme)}>
        <SnakeDotLoader />
      </View>
    </View>
  );
});

const dStyle = {
  overlay: (activeTheme: ThemeColors): ViewStyle => ({
    ...StyleSheet.absoluteFill,
    backgroundColor: activeTheme.bgBackdrop,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  }),
  box: (activeTheme: ThemeColors): ViewStyle => ({
    height: vS(100),
    width: hS(100),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: activeTheme.bgBackdropInverse,
  }),
};

export default AppLoaderHost;
