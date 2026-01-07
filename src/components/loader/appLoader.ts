import { createRef } from 'react';
import { AppLoaderRef } from './AppLoaderHost';

export const appLoaderRef = createRef<AppLoaderRef>();

export const appLoader = {
  show() {
    appLoaderRef.current?.show();
  },
  hide() {
    appLoaderRef.current?.hide();
  },
};
