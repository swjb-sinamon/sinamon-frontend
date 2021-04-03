import { showToast } from 'sinamon-sikhye';
import firebase from './firebase';

const messaging = firebase.messaging();

const canUseNotifications = (showAlert?: boolean): boolean => {
  if (!firebase.messaging.isSupported() || !('Notification' in window) || !Notification) {
    if (showAlert) alert('해당 브라우저는 알림을 지원하지 않습니다.');
    return false;
  }

  return true;
};

export const requestNotification = () => {
  if (!canUseNotifications(true)) return;

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
    })
    .catch((e) => console.error('requestNotification Error', e));
};

export const registerNotificationEvent = () => {
  if (!canUseNotifications()) return;

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
      window.open(payload.data.click_action || 'https://sinamon.info', '_blank');
    };
  });
};
