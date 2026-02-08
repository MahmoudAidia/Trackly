import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDxr3CRbjPbLRxipvu3642Y8sljIMKdkzE",
  authDomain: "trackly-35f6a.firebaseapp.com",
  projectId: "trackly-35f6a",
  storageBucket: "trackly-35f6a.firebasestorage.app",
  messagingSenderId: "285286061759",
  appId: "1:285286061759:web:2b7359f1954d28ec79980a",
  measurementId: "G-6Z56LH2SHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
