import { create } from 'zustand';

import { AUTH_STORAGE_KEY } from '@/storage/keys';
import { storage } from '@/storage/storage';

import { useAppStore } from './useAppStore';

export interface AuthState {
  token: string | null;
  isLoggedIn: boolean;

  loginSuccess: (payload: { token: string }) => void;
  logout: () => void;
}

const persisted = storage.get<AuthState>(AUTH_STORAGE_KEY);

export const useAuthStore = create<AuthState>(set => ({
  token: persisted?.token ?? null,
  isLoggedIn: persisted?.isLoggedIn ?? false,

  loginSuccess: ({ token }) => {
    const state = { token, isLoggedIn: true };
    set(state);
    storage.set(AUTH_STORAGE_KEY, state);
  },

  logout: () => {
    set({ token: null, isLoggedIn: false });

    storage.remove(AUTH_STORAGE_KEY);
    storage.clear(); // same as Redux logout

    // 🔥 reset app store like rootReducer did
    useAppStore.setState({
      themePreference: 'system',
      systemTheme: 'light',
      language: 'en',
      onboardingCompleted: false,
    });
  },
}));
