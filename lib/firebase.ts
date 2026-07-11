import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "owl-mobile.firebaseapp.com",
  projectId: "owl-mobile",
  storageBucket: "owl-mobile.firebasestorage.app",
  messagingSenderId: "1095834547925",
  appId: "1:1095834547925:web:YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestoreDB = getFirestore(app);
