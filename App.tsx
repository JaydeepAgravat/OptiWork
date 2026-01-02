// import "./src/i18n/index.ts"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import OnBoard from "./src/screens/OnBoard"
import { Toaster } from "sonner-native";

const App = () => {

  return <GestureHandlerRootView><OnBoard />
    <Toaster />
  </GestureHandlerRootView>
}

export default App;