// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDub_7NQXQSjx6juNrfQCjM21M6IlNWuWM",
  authDomain: "fireweb-2d408.firebaseapp.com",
  projectId: "fireweb-2d408",
  storageBucket: "fireweb-2d408.appspot.com",
  messagingSenderId: "991930535994",
  appId: "1:991930535994:web:29541a11f6b34641d52503"
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);
export default fireapp;