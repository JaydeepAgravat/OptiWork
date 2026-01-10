import { appLoaderRef } from '@/components/loader/appLoader';
import AppLoaderHost from '@/components/loader/AppLoaderHost';
import AppToaster from '@/components/toast/AppToaster';
import OnBoard from '@/screens/OnBoard';
import ThemeSettingsScreen from '@/screens/ThemeSettingsScreen';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import i18n from '@/i18n';

const App = () => {
  console.log('App.tsx i18n initialized:', i18n.isInitialized);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <ThemeProvider>
          <OnBoard />
          {/* <ThemeSettingsScreen /> */}
          <AppToaster />
          <AppLoaderHost ref={appLoaderRef} />
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
