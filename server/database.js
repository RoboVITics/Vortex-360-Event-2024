import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDub_7NQXQSjx6juNrfQCjM21M6IlNWuWM",
  authDomain: "fireweb-2d408.firebaseapp.com",
  projectId: "fireweb-2d408",
  storageBucket: "fireweb-2d408.appspot.com",
  messagingSenderId: "991930535994",
  appId: "1:991930535994:web:29541a11f6b34641d52503"
};

const fireapp = initializeApp(firebaseConfig);
export default fireapp;