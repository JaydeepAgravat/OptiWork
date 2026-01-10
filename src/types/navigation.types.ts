import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Onboard: undefined;
  Sigin: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

// Auth stack screens
export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;
