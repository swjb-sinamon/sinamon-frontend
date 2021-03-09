import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyD4nBZyHASpykbklOCGiKqTNfq9HTpa88U',
  authDomain: 'swjb-sinamon.firebaseapp.com',
  projectId: 'swjb-sinamon',
  storageBucket: 'swjb-sinamon.appspot.com',
  messagingSenderId: '953314055532',
  appId: '1:953314055532:web:292b26c2c5758bba750f49',
  measurementId: 'G-YHYY5BX6ZP'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
