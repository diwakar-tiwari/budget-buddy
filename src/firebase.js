// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB43ofBDIL9RsjfMs4uLP9yjXlGSlPcsPw",
  authDomain: "budget-buddy-e98c4.firebaseapp.com",
  projectId: "budget-buddy-e98c4",
  storageBucket: "budget-buddy-e98c4.appspot.com",
  messagingSenderId: "929757749455",
  appId: "1:929757749455:web:a7beeb2aa1b3e51b7397ba",
  measurementId: "G-27BHPK8NCQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };