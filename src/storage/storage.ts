import { mmkv } from './mmkv';

export const storage = {
  set: <T>(key: string, value: T) => {
    mmkv.set(key, JSON.stringify(value));
  },

  get: <T>(key: string): T | null => {
    const value = mmkv.getString(key);
    return value ? JSON.parse(value) : null;
  },

  remove: (key: string) => {
    mmkv.remove(key);
  },

  clear: () => {
    mmkv.clearAll();
  },
};
