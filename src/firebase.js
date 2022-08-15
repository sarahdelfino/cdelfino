import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBMJJiaLJ8KloQVrJ5DkZhrN9_yTZW7CUQ",
    authDomain: "real-estate-21e0e.firebaseapp.com",
    projectId: "real-estate-21e0e",
    storageBucket: "real-estate-21e0e.appspot.com",
    messagingSenderId: "447990537474",
    appId: "1:447990537474:web:8753b194e1a8311cd5b61b",
    measurementId: "G-8JJJ0G3RJF"
}

// const app = initializeApp(firebaseConfig)
// const db = getFirestore(app)

// export {db}
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };