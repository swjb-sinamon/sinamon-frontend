import { showToast } from 'sinamon-sikhye';
import firebase from './firebase';

const messaging = firebase.messaging();

const initWebPush = (): void => {
  Notification.requestPermission()
    .then((permission) => {
      if (permission !== 'granted') {
        showToast(
          '알림이 비활성화 되었습니다. 수정과에서 제공하는 모든 알림을 받을 수 없습니다.',
          'warning'
        );
        return Promise.reject();
      }

      return messaging.getToken({
        vapidKey: process.env.REACT_APP_VAPIDKEY
      });
    })
    .then((pushToken) => {
      const currentToken = localStorage.getItem('fcm_token');

      if (currentToken === undefined) {
        localStorage.setItem('fcm_token', pushToken);
      }

      if (currentToken !== pushToken) {
        localStorage.setItem('fcm_token', pushToken);
        // TODO: send fcm token to Backend.
      }
    });

  messaging.onMessage((payload) => {
    const { title } = payload.notification;
    const options = {
      body: payload.notification.body,
      icon: payload.notification.icon
    };

    showToast(options.body, 'default', title);

    // eslint-disable-next-line no-new
    new Notification(title, options);
  });
};

export default initWebPush;
