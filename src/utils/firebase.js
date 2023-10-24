// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-9af5c.firebaseapp.com",
  projectId: "blog-9af5c",
  storageBucket: "blog-9af5c.appspot.com",
  messagingSenderId: "772615908770",
  appId: "1:772615908770:web:2e0f98f02b534dea09d6fb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 