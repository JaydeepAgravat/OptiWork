import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppToaster } from './src/components/toast/AppToaster';
import OnBoard from './src/screens/OnBoard';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <OnBoard />
        <AppToaster />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
