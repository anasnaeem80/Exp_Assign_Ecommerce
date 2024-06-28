// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2nbd0nHf6rR9En5Jv4C8o_CgLIqSJEXM",
  authDomain: "ecommerce-exp-e87f4.firebaseapp.com",
  projectId: "ecommerce-exp-e87f4",
  storageBucket: "ecommerce-exp-e87f4.appspot.com",
  messagingSenderId: "48976405455",
  appId: "1:48976405455:web:63759c00d64f0c90dca8ba",
  measurementId: "G-QENXDZDLHR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
