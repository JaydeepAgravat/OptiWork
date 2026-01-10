import { appLoaderRef } from '@/components/loader/appLoader';
import AppLoaderHost from '@/components/loader/AppLoaderHost';
import AppToaster from '@/components/toast/AppToaster';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from '@/navigation/RootNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <ThemeProvider>
          <RootNavigator />
          <AppToaster />
          <AppLoaderHost ref={appLoaderRef} />
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
