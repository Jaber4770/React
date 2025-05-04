// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByad880y2LtxVBjcBdHTopcwvxOXtNRAQ",
    authDomain: "complex-auth-private-rout.firebaseapp.com",
    projectId: "complex-auth-private-rout",
    storageBucket: "complex-auth-private-rout.firebasestorage.app",
    messagingSenderId: "667132650882",
    appId: "1:667132650882:web:a4e8cc768e0acd0919db9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);