// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseconfig = {
  apiKey: "AIzaSyBfi5T0tayUlvFhfHYaql_QtFoUlFAs-hU",
  authDomain: "portfolio2025-6d27e.firebaseapp.com",
  projectId: "portfolio2025-6d27e",
  storageBucket: "portfolio2025-6d27e.firebasestorage.app",
  messagingSenderId: "561178771126",
  appId: "1:561178771126:web:cf7301cb68205d68757017",
  measurementId: "G-6KH1M6J0TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseconfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };