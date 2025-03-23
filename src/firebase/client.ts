// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAibBNfkbCmc21-bxp2SySS6lywQXMCkSE",
  authDomain: "prepwise-53cab.firebaseapp.com",
  projectId: "prepwise-53cab",
  storageBucket: "prepwise-53cab.firebasestorage.app",
  messagingSenderId: "1008908320453",
  appId: "1:1008908320453:web:f69d937bf72a9c80ad7aac",
  measurementId: "G-8Y3QXCQ33S",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore(app);
