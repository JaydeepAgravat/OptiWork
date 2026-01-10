import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV();

storage.getString = (key: string) => storage.getString(key);
storage.set = (key: string, value: string) => storage.set(key, value);
