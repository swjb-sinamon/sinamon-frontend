importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyD4nBZyHASpykbklOCGiKqTNfq9HTpa88U',
  authDomain: 'swjb-sinamon.firebaseapp.com',
  projectId: 'swjb-sinamon',
  storageBucket: 'swjb-sinamon.appspot.com',
  messagingSenderId: '953314055532',
  appId: '1:953314055532:web:292b26c2c5758bba750f49',
  measurementId: 'G-YHYY5BX6ZP'
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title } = payload.notification;
  const options = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(title, options);
});
