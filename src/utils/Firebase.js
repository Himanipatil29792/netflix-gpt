// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVt2728ND_8-PMbakAyM4Mas-jwpELoPg",
  authDomain: "netflixgpt-57276.firebaseapp.com",
  projectId: "netflixgpt-57276",
  storageBucket: "netflixgpt-57276.firebasestorage.app",
  messagingSenderId: "522572237784",
  appId: "1:522572237784:web:ca72bcc33fa4a638c500ad",
  measurementId: "G-5XWS9BW7W9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
