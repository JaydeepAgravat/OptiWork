import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/types/navigation.types';
import OnBoardScreen from '@/screens/authScreens/OnBoardScreen';
import SignupScreen from '@/screens/authScreens/SignupScreen';
import SigninScreen from '@/screens/authScreens/SigninScreen';
import ForgotPasswordScreen from '@/screens/authScreens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboard" component={OnBoardScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Sigin" component={SigninScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
