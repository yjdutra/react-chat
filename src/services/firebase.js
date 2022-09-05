import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCY66z5Kz2xtme3Tc5joDdVBY6lVmYDZM",
  authDomain: "react-chat-929c8.firebaseapp.com",
  projectId: "react-chat-929c8",
  storageBucket: "react-chat-929c8.appspot.com",
  messagingSenderId: "484831144568",
  appId: "1:484831144568:web:6f8cb3ec5c5801938c1b8d",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
