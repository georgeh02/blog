import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDk5x39_tCbny5Cb-wC_sVaA5yNIGFVbV8",
  authDomain: "blog-13279.firebaseapp.com",
  projectId: "blog-13279",
  storageBucket: "blog-13279.appspot.com",
  messagingSenderId: "463664658788",
  appId: "1:463664658788:web:5e44a1c89de26b71d4a271"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)