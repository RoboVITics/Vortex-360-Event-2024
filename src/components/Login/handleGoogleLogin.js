import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDub_7NQXQSjx6juNrfQCjM21M6IlNWuWM",
  authDomain: "fireweb-2d408.firebaseapp.com",
  projectId: "fireweb-2d408",
  storageBucket: "fireweb-2d408.appspot.com",
  messagingSenderId: "991930535994",
  appId: "1:991930535994:web:29541a11f6b34641d52503"
};

const fireapp = initializeApp(firebaseConfig);
// Call the signInWithGoogle function to initiate the login process
export default async function signInWithGoogle(){
    const myHeaders = new Headers();
    myHeaders.set('Cross-Origin-Opener-Policy','same-origin-allow-popups');
    const auth = getAuth();
    auth.languageCode = 'it';
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        return { 'success' : true, 'data': user };
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        return { 'success' : false, 'error' : `${errorCode} : ${errorMessage}` };

    });
};