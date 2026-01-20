import { create } from 'zustand';
import { storage } from '@/storage/storage';
import { AUTH_STORAGE_KEY } from '@/storage/keys';
import { useAppStore } from './useAppStore';

export interface AuthState {
  token: string | null;
  user: any | null;
  isLoggedIn: boolean;

  loginSuccess: (payload: { token: string; user: any }) => void;
  logout: () => void;
}

const persisted = storage.get<AuthState>(AUTH_STORAGE_KEY);

export const useAuthStore = create<AuthState>(set => ({
  token: persisted?.token ?? null,
  user: persisted?.user ?? null,
  isLoggedIn: persisted?.isLoggedIn ?? false,

  loginSuccess: ({ token, user }) => {
    const state = { token, user, isLoggedIn: true };
    set(state);
    storage.set(AUTH_STORAGE_KEY, state);
  },

  logout: () => {
    set({ token: null, user: null, isLoggedIn: false });

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
