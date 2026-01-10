import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;

const guidelineBaseHeight = 812;

export const scale = (size: number) => {
  const newSize = (width / guidelineBaseWidth) * size;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const vScale = (size: number) => {
  const newSize = (height / guidelineBaseHeight) * size;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const moderateScale = (
  size: number,
  factor = 0.5,
  min?: number,
  max?: number,
) => {
  let newSize = size + (scale(size) - size) * factor;
  newSize = Math.round(PixelRatio.roundToNearestPixel(newSize));
  if (min) newSize = Math.max(newSize, min);
  if (max) newSize = Math.min(newSize, max);
  return newSize;
};

export const scaleFont = (size: number, factor = 0.5) => {
  const scaled = moderateScale(size, factor);
  if (Platform.OS === 'android') {
    return scaled * PixelRatio.getFontScale();
  }
  return scaled;
};
