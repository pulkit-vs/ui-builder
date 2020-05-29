/**
 * @format
 */
import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
//import {GoogleSignin} from '@react-native-community/google-signin';

// GoogleSignin.configure({
//   scopes: ['https://www.googleapis.com/auth/drive.readonly'],
//   webClientId:
//     '550183766128-2v36untej26gohetuso60snm5c9j5suq.apps.googleusercontent.com',
//   offlineAccess: true,
// });

AppRegistry.registerComponent(appName, () => App);
