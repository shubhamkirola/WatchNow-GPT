// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi_fKf6Te8hNxfPv1s05vCTeY2UKVdLu4",
  authDomain: "watchnow-gpt.firebaseapp.com",
  projectId: "watchnow-gpt",
  storageBucket: "watchnow-gpt.appspot.com",
  messagingSenderId: "122958505551",
  appId: "1:122958505551:web:88f07602695ccc2d042c3a",
  measurementId: "G-PY78PG773M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const analytics = getAnalytics(app);