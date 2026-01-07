import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppToaster } from './src/components/toast/AppToaster';
import OnBoard from './src/screens/OnBoard';
import AppLoaderHost from './src/components/loader/AppLoaderHost';
import { appLoaderRef } from './src/components/loader/appLoader';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <OnBoard />
        <AppToaster />
        <AppLoaderHost ref={appLoaderRef} />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
