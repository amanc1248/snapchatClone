// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDwslzqceojDuBpKqvG_SiFtUgUFfVzgSM",
  authDomain: "snapchat-ec6c6.firebaseapp.com",
  projectId: "snapchat-ec6c6",
  storageBucket: "snapchat-ec6c6.appspot.com",
  messagingSenderId: "500344485058",
  appId: "1:500344485058:web:ef3816b435902f8a9db75b",
  measurementId: "G-G5Q6WJX9WJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider };
