import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSLpK6jOUFGmyP_bL1TOX1wDOtK5fk2_c",
  authDomain: "react-chat-7b9d8.firebaseapp.com",
  projectId: "react-chat-7b9d8",
  storageBucket: "react-chat-7b9d8.appspot.com",
  messagingSenderId: "409348098979",
  appId: "1:409348098979:web:db4875e1fc7b55c4daa816",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
