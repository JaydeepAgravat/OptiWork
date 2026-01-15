import { RootStackParamList } from '@/navigation/navigation.types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

export default RootStack;
