import { appLoaderRef } from '@/components/loader/appLoader';
import AppLoaderHost from '@/components/loader/AppLoaderHost';
import { AppToaster } from '@/components/toast/AppToaster';
import OnBoard from '@/screens/OnBoard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
