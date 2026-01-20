import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SystemThemeListener } from '@/components/listener/SystemThemeListener';
import { appLoaderRef } from '@/components/loader/appLoader';
import AppLoaderHost from '@/components/loader/AppLoaderHost';
import AppToaster from '@/components/toast/AppToaster';
import RootNavigator from '@/navigation/RootNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <SystemThemeListener />
        <RootNavigator />
        <AppToaster />
        <AppLoaderHost ref={appLoaderRef} />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
