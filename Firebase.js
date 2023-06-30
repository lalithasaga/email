import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';





const firebaseConfig = {
    apiKey: "AIzaSyD5Oz9KUrvs1dYYP52UH6xCMNz31KmLUYw",
    authDomain: "weblink-f63b8.firebaseapp.com",
    projectId: "weblink-f63b8",
    storageBucket: "weblink-f63b8.appspot.com",
    messagingSenderId: "664461072267",
    appId: "1:664461072267:web:e61c3b18a3ed210749418e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export {db};