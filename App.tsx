import { appLoaderRef } from '@/components/loader/appLoader';
import AppLoaderHost from '@/components/loader/AppLoaderHost';
import AppToaster from '@/components/toast/AppToaster';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from '@/navigation/RootNavigator';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { SystemThemeListener } from '@/components/listener/SystemThemeListener';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <Provider store={store}>
          <SystemThemeListener />
          <RootNavigator />
          <AppToaster />
          <AppLoaderHost ref={appLoaderRef} />
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
