// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7B-us2-vprFH9LaNVGhNJJ6Q5x8U_TGo",
  authDomain: "fir-ad80a.firebaseapp.com",
  projectId: "fir-ad80a",
  storageBucket: "fir-ad80a.firebasestorage.app",
  messagingSenderId: "799954285202",
  appId: "1:799954285202:web:1bbcd1cab81bbcfcda6c4b",
  measurementId: "G-LX1NTET09H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);