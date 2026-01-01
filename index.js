/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';


LogBox.ignoreAllLogs(true)

ErrorUtils.setGlobalHandler((error, isFatal) => {
    console.error(error, isFatal)
}
)

AppRegistry.registerComponent(appName, () => App);
