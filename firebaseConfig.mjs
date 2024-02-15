// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import Firebase Authentication
// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY0otgNSPXk3f47sOKrE-5okRuGJpdPYg",
  authDomain: "my-first-firebase-9eddc.firebaseapp.com",
  databaseURL: "https://my-first-firebase-9eddc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-first-firebase-9eddc",
  storageBucket: "my-first-firebase-9eddc.appspot.com",
  messagingSenderId: "905782179773",
  appId: "1:905782179773:web:69bfb5ab4eba1433b284d4",
  measurementId: "G-1NQL6G9RBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // get the authentication instance

export{db,auth}; // export the database and authentication instance