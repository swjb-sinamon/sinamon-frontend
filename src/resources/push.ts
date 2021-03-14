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
      localStorage.setItem('fcm_token', pushToken);
    });

  messaging.onMessage((payload) => {
    const { title } = payload.notification;
    const options = {
      body: payload.notification.body,
      icon: '/logo192.png'
    };

    showToast(options.body, 'default', title);

    // eslint-disable-next-line no-new
    const notification = new Notification(title, options);
    notification.onclick = (e) => {
      e.preventDefault();
      window.open(payload.data.click_action ?? 'https://sinamon.info', '_blank');
    };
  });
};

export default initWebPush;
