import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// do not share this.
// 
// // Import the functions you need from the SDKs you need

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEXXXiY3iOVs0fARrT4N88TTR0sX2kBdE",
    authDomain: "simple-firebse-auth-d79bb.firebaseapp.com",
    projectId: "simple-firebse-auth-d79bb",
    storageBucket: "simple-firebse-auth-d79bb.firebasestorage.app",
    messagingSenderId: "334805617842",
    appId: "1:334805617842:web:8a01a588f9e1b83a538dab",
    measurementId: "G-Z55Z244SX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);