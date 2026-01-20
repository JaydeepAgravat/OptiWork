import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { useAppTheme } from '@/hooks/useAppTheme';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import NoInternetScreen from '@/screens/NoInternetScreen';

import AuthStack from './AuthStack';

const RootNavigator = () => {
  const { activeColorScheme } = useAppTheme();
  const { isOffline } = useNetworkStatus();
  const isLoggedIn = false;

  if (isOffline) {
    return <NoInternetScreen />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={
          activeColorScheme === 'dark' ? 'light-content' : 'dark-content'
        }
        translucent
      />
      {isLoggedIn ? <></> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
