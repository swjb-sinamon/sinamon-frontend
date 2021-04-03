/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

self.addEventListener('notificationclick', (e) => {
  const f = e.notification.data.FCM_MSG;
  const url = f && (f.data.click_action || 'https://sinamon.info');
  e.waitUntil(
    // eslint-disable-next-line consistent-return
    clients.matchAll({ type: 'window' }).then((windowClients) => {
      for (let i = 0; i < windowClients.length; i += 1) {
        const client = windowClients[i];
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});

firebase.initializeApp({
  apiKey: 'AIzaSyD4nBZyHASpykbklOCGiKqTNfq9HTpa88U',
  authDomain: 'swjb-sinamon.firebaseapp.com',
  projectId: 'swjb-sinamon',
  storageBucket: 'swjb-sinamon.appspot.com',
  messagingSenderId: '953314055532',
  appId: '1:953314055532:web:292b26c2c5758bba750f49',
  measurementId: 'G-YHYY5BX6ZP'
});

try {
  firebase.messaging();
} catch (e) {
  console.error('Firebase Messaging Error', e);
}
