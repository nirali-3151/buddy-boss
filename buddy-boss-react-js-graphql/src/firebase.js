import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAEdDAOF525oTHAtOSbmgOW4B_TC_Jnb7I",
    authDomain: "buddy-boss-article.firebaseapp.com",
    projectId: "buddy-boss-article",
    storageBucket: "buddy-boss-article.appspot.com",
    messagingSenderId: "776927543854",
    appId: "1:776927543854:web:7f5afc0d881d46345415bf",
    measurementId: "G-0TPND3WJVC"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

