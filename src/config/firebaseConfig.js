// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1H-2v-rpPKf4hs6uoIuWlM-fEToq_QL8",
    authDomain: "miniforum-e038c.firebaseapp.com",
    projectId: "miniforum-e038c",
    storageBucket: "miniforum-e038c.appspot.com",
    messagingSenderId: "728959246044",
    appId: "1:728959246044:web:2889826ff2b76ba937de19"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;