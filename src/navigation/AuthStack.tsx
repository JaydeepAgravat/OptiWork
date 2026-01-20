import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import type { AuthStackParamList } from '@/navigation/navigation.types';
import ForgotPasswordScreen from '@/screens/authScreens/ForgotPasswordScreen';
import OnBoardScreen from '@/screens/authScreens/OnBoardScreen';
import SigninScreen from '@/screens/authScreens/SigninScreen';
import SignupScreen from '@/screens/authScreens/SignupScreen';
import { useAppStore } from '@/store/useAppStore';

import type { AuthStackParamList } from './navigation.types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  const onboardingCompleted = useAppStore(state => state.onboardingCompleted);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={onboardingCompleted ? 'Signin' : 'Onboard'}
    >
      <Stack.Screen name="Onboard" component={OnBoardScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
