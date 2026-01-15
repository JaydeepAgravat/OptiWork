import { createMMKV } from 'react-native-mmkv';

export const mmkv = createMMKV({
  id: 'app-storage',
  encryptionKey: 'optiwork',
});
