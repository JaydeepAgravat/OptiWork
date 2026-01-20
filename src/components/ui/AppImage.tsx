import React from 'react';

import type { ImageProps } from 'react-native';
import { Image } from 'react-native';

const AppImage: React.FC<ImageProps> = props => {
  return <Image {...props} />;
};

export default AppImage;
