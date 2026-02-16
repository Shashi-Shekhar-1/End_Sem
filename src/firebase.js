// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVQ2hQpcJ5U8RMmn7zUaymC7Swe5YKxtY",
  authDomain: "production-portal-ddae7.firebaseapp.com",
  projectId: "production-portal-ddae7",
  storageBucket: "production-portal-ddae7.firebasestorage.app",
  messagingSenderId: "330831079869",
  appId: "1:330831079869:web:f4f984b95d33d14b268ad4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);