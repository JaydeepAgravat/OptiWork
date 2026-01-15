import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { authInitialState, authReducer, logout } from './slices/authSlice';
import { appReducer } from './slices/appSlice';
import { listenerMiddleware } from './listeners';

const combineReducer = combineReducers({
  authReducer,
  appReducer,
});

const rootReducer = (
  state: ReturnType<typeof combineReducer> | undefined,
  action: ReturnType<typeof logout>,
) => {
  if (logout.match(action) && state) {
    return {
      ...state,
      authReducer: authInitialState,
    };
  }
  return combineReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      listenerMiddleware.middleware,
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
