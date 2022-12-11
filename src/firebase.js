import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDpvLaJPbjYLBuOU2o4KfkxrbFu1rQyYbI",
  authDomain: "netflix-proj-19491.firebaseapp.com",
  projectId: "netflix-proj-19491",
  storageBucket: "netflix-proj-19491.appspot.com",
  messagingSenderId: "799717216534",
  appId: "1:799717216534:web:1186d2d4cb8200512d4037"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db ;