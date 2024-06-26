// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9AFaqIw3Pm1Lqkvs6Hh-YCrcLAQQT9CA",
  authDomain: "integrationreactnative.firebaseapp.com",
  databaseURL: "https://integrationreactnative-default-rtdb.firebaseio.com",
  projectId: "integrationreactnative",
  storageBucket: "integrationreactnative.appspot.com",
  messagingSenderId: "896466130478",
  appId: "1:896466130478:web:d6f9a9b10eb685fe5c31bf",
  measurementId: "G-1PLXZ6K8CC"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getDatabase(FIREBASE_APP);