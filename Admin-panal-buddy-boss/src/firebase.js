import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyAEdDAOF525oTHAtOSbmgOW4B_TC_Jnb7I",
  authDomain: "buddy-boss-article.firebaseapp.com",
  projectId: "buddy-boss-article",
  storageBucket: "buddy-boss-article.appspot.com",
  messagingSenderId: "776927543854",
  appId: "1:776927543854:web:7f5afc0d881d46345415bf",
  measurementId: "G-0TPND3WJVC"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {vapidKey: 'BKl-xn97JFeFZ9eBsjsjLrAvB9IgaeWI0AUCIj4xe4uiAKqtJE8p2grbwrlMEVul2q1iTqJosA4_jWVsUAt1RZ4'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});