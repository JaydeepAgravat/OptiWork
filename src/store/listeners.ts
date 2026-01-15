import { createListenerMiddleware } from '@reduxjs/toolkit';
import i18n from '@/i18n';
import { setLanguage } from './slices/appSlice';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: setLanguage,
  effect: async action => {
    await i18n.changeLanguage(action.payload);
  },
});
