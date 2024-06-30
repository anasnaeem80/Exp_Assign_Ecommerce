import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2nbd0nHf6rR9En5Jv4C8o_CgLIqSJEXM",
  authDomain: "ecommerce-exp-e87f4.firebaseapp.com",
  projectId: "ecommerce-exp-e87f4",
  storageBucket: "ecommerce-exp-e87f4.appspot.com",
  messagingSenderId: "48976405455",
  appId: "1:48976405455:web:63759c00d64f0c90dca8ba",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
