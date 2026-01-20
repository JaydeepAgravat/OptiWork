import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import type { RootStackParamList } from '@/navigation/navigation.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  // @ts-expect-error TODO
  return <Stack.Navigator />;
};

export default RootStack;
