// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqzy7gEGAO2hdHUGDlUJurTKZ2zsk8FCs",
  authDomain: "nline-casino.firebaseapp.com",
  projectId: "nline-casino",
  storageBucket: "nline-casino.appspot.com",
  messagingSenderId: "724304272978",
  appId: "1:724304272978:web:4ca51e5bbebd5d7fa8098b",
  measurementId: "G-810WET6D59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);