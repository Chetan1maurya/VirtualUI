// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "virtualui-1001a.firebaseapp.com",
  projectId: "virtualui-1001a",
  storageBucket: "virtualui-1001a.firebasestorage.app",
  messagingSenderId: "343716082734",
  appId: "1:343716082734:web:3caab72729f568bc3bdbbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}