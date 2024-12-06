/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import notifee from '@notifee/react-native';

notifee.registerForegroundService((notification) => {
  console.log(notification);

  return new Promise(() => {
    // onTask
    notifee.displayNotification({
      id: notification.id,
      body: notification.body,
      android: {
        ...notification.android,
        progress: {
          max: 10,
          current: 20,
        },
      },
    });
    // setTimeout(() => {
    //   notifee.stopForegroundService();
    // }, 4000);
  });
});

AppRegistry.registerComponent(appName, () => App);
