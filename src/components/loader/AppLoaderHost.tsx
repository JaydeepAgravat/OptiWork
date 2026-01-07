import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SnakeDotLoader from './SnakeDotLoader';
import { scale, vScale } from '../../theme/scale';
import colors from '../../theme/colors';

export type AppLoaderRef = {
  show: () => void;
  hide: () => void;
};

const AppLoaderHost = forwardRef<AppLoaderRef>((_, ref) => {
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
    <View style={styles.overlay}>
      <View style={styles.box}>
        <SnakeDotLoader />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.light.blur,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  box: {
    height: scale(90),
    width: vScale(90),
    borderRadius: 10,
    backgroundColor: colors.light.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppLoaderHost;
