// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDlq8bTIAHYbTIWIed4vuSDi1ejxQv3q1A",
  authDomain: "covid-19-73f80.firebaseapp.com",
  projectId: "covid-19-73f80",
  storageBucket: "covid-19-73f80.appspot.com",
  messagingSenderId: "327258327468",
  appId: "1:327258327468:web:7d88e80b5c91d04126d209",
  measurementId: "G-YWRCJY2YZM",
});

const db = getFirestore(firebaseApp);
export default db;
