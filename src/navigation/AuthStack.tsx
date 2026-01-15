import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/navigation.types';
import OnBoardScreen from '@/screens/authScreens/OnBoardScreen';
import SignupScreen from '@/screens/authScreens/SignupScreen';
import SigninScreen from '@/screens/authScreens/SigninScreen';
import ForgotPasswordScreen from '@/screens/authScreens/ForgotPasswordScreen';
import { useAppSelector } from '@/hooks/useStore';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  const onboardingCompleted = useAppSelector(
    s => s.appReducer.onboardingCompleted,
  );

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
