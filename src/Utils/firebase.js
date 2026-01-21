// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClzG8a9Jr9cG6pwJjJjLBBqR6GUwJCWCs",
  authDomain: "netflixgpt-a7cc2.firebaseapp.com",
  projectId: "netflixgpt-a7cc2",
  storageBucket: "netflixgpt-a7cc2.firebasestorage.app",
  messagingSenderId: "670264648885",
  appId: "1:670264648885:web:ef4822411bf9d6b04f8afc",
  measurementId: "G-DGBJ0QMB02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();