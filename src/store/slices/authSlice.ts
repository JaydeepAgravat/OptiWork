import { storage } from '@/storage/storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const AUTH_STORAGE_KEY = 'auth';

export interface AuthState {
  token: string | null;
  user: any | null;
  isLoggedIn: boolean;
}

export const authInitialState: AuthState = storage.get<AuthState>(
  AUTH_STORAGE_KEY,
) ?? {
  token: null,
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ token: string; user: any }>) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;

      storage.set(AUTH_STORAGE_KEY, state);
    },

    logout(state) {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;

      storage.remove(AUTH_STORAGE_KEY);
      storage.clear();
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
