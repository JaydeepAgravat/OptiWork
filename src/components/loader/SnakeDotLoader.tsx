import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  interpolate,
  Extrapolation,
  SharedValue,
} from 'react-native-reanimated';
import colors from '../../theme/colors';

const DOTS = 4;
const DURATION = 1000;

const Dot = ({
  index,
  progress,
}: {
  index: number;
  progress: SharedValue<number>;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const distance = Math.abs(progress.value - index);

    const translateY = interpolate(
      distance,
      [0, 0.5, 1],
      [-10, -6, 0],
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      distance,
      [0, 1],
      [1, 0.5],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{ translateY }],
      opacity,
    };
  });

  return <Animated.View style={[styles.dot, animatedStyle]} />;
};

const SnakeDotLoader = () => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(DOTS, { duration: DURATION }),
      -1,
      false,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.row}>
      {Array.from({ length: DOTS }).map((_, i) => (
        <Dot key={i} index={i} progress={progress} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 7,
    backgroundColor: colors.light.onPrimary,
  },
});

export default SnakeDotLoader;
