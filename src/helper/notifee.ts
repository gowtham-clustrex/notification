import notifee, {
  AndroidColor,
  AndroidImportance,
  AndroidStyle,
} from '@notifee/react-native';

export const channelId = 'default';
export const createChannel = async () => {
  const channel = await notifee.createChannel({
    id: channelId,
    name: channelId,
    sound: 'notification',
    badge: true,
  });
  return channel;
};

// Local notification
export const onTextDesignNotification = async () => {
  await notifee.requestPermission();
  await notifee.displayNotification({
    title:
      '<p style="color: #4caf50;"><b>Styled HTMLTitle</span></p></b></p> &#128576;',
    subtitle: '&#129395;',
    body: 'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
    android: {
      color: AndroidColor.RED,
      largeIcon:
        'https://4c81-2406-7400-bb-25ee-64f5-129c-5c62-cafc.ngrok-free.app/image.png',
      channelId,
    },
  });
};

export const onTextNotification = async () => {
  await notifee.requestPermission();
  await notifee.displayNotification({
    title: 'Updates',
    body: 'App update is available',
    android: {
      channelId,
      sound: 'sound',
      showChronometer: true,
    },
  });
};

export const onImageNotification = async () => {
  await notifee.requestPermission();
  await notifee.displayNotification({
    title: 'Updates',
    body: 'App update is available',
    android: {
      channelId,
      sound: 'notification',
      importance: AndroidImportance.HIGH,
      showChronometer: true,

      style: {
        type: AndroidStyle.BIGPICTURE,
        picture:
          'https://4c81-2406-7400-bb-25ee-64f5-129c-5c62-cafc.ngrok-free.app/data.jpg',
      },
    },
  });
};
export const onTimerNotification = async () => {
  await notifee.requestPermission();
  await notifee.displayNotification({
    title: 'Updates',
    body: 'App update is available',
    android: {
      channelId,
      showChronometer: true,
      chronometerDirection: 'down',
      timestamp: Date.now() + 10000, // 5 minutes
      style: {
        type: AndroidStyle.BIGPICTURE,
        picture:
          'https://4c81-2406-7400-bb-25ee-64f5-129c-5c62-cafc.ngrok-free.app/data.jpg',
      },
    },
  });
};
