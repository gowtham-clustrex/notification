import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRoute from './src/routes';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import {createChannel} from './src/helper/notifee';

const App: React.FC = () => {
  const onMessageReceived = async (message: any) => {
    return await notifee.displayNotification(JSON.parse(message.data.notifee));
  };

  useEffect(() => {
    (async () => {
      try {
        const permission = await notifee.requestPermission();
        if (permission.authorizationStatus) {
          console.log('start');
          await messaging().registerDeviceForRemoteMessages();
          const token = await messaging().getToken();
          console.log('Token', token);
          await createChannel();
          messaging().onMessage(onMessageReceived);
          messaging().setBackgroundMessageHandler(onMessageReceived);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  );
};

export default App;
