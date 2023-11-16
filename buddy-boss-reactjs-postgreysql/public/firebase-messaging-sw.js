// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAEdDAOF525oTHAtOSbmgOW4B_TC_Jnb7I",
  authDomain: "buddy-boss-article.firebaseapp.com",
  projectId: "buddy-boss-article",
  storageBucket: "buddy-boss-article.appspot.com",
  messagingSenderId: "776927543854",
  appId: "1:776927543854:web:7f5afc0d881d46345415bf",
  measurementId: "G-0TPND3WJVC"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
