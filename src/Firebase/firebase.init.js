// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIGIzwweS8gt-rxdv2Vd8TCjn3M9h8AHE",
  authDomain: "deshi-news-7a00d.firebaseapp.com",
  projectId: "deshi-news-7a00d",
  storageBucket: "deshi-news-7a00d.firebasestorage.app",
  messagingSenderId: "430549458547",
  appId: "1:430549458547:web:32dd28eb8cde6bce435406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);