// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import env from 'react-dotenv';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.API_KEY_FIREBASE,
  authDomain: "restaurant-app-a4f8a.firebaseapp.com",
  projectId: "restaurant-app-a4f8a",
  storageBucket: "restaurant-app-a4f8a.appspot.com",
  messagingSenderId: "268655129618",
  appId: "1:268655129618:web:d28fee73e1a13b98d9d4cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }