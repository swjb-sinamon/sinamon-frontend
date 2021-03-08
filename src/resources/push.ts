import { showToast } from 'sinamon-sikhye';
import firebase from './firebase';
import Api from '../api';

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

      if (currentToken === undefined || currentToken !== pushToken) {
        localStorage.setItem('fcm_token', pushToken);

        return Api.post('/fcm', {
          token: pushToken
        });
      }

      return Promise.reject();
    });

  messaging.onMessage((payload) => {
    const { title } = payload.notification;
    const options = {
      body: payload.notification.body,
      icon: '/logo192.png'
    };

    showToast(options.body, 'default', title);

    // eslint-disable-next-line no-new
    new Notification(title, options);
  });
};

export default initWebPush;
