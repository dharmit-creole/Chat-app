import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDPU77NE6BN6AvxbAxH78Byd2yk90C5nH8",
  authDomain: "firechat-2ca61.firebaseapp.com",
  projectId: "firechat-2ca61",
  storageBucket: "firechat-2ca61.appspot.com",
  messagingSenderId: "892793599059",
  appId: "1:892793599059:web:c7cac35a4aa594ac8602a6",
  measurementId: "G-NRL0QLQDXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

