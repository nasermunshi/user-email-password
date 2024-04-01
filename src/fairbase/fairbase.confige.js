// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJY5fXYUiz0VQuVL9QuaBYEntgfTiA38M",
  authDomain: "user-email-password-auth-428bf.firebaseapp.com",
  projectId: "user-email-password-auth-428bf",
  storageBucket: "user-email-password-auth-428bf.appspot.com",
  messagingSenderId: "728027553388",
  appId: "1:728027553388:web:3f481eafdb38ca29494249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
