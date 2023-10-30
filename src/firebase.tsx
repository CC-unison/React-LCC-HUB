// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnnp_BqHnvYzYMVMtgVXhQ8xtoBEOL-5A",
  authDomain: "lcc-hub.firebaseapp.com",
  databaseURL: "https://lcc-hub-default-rtdb.firebaseio.com",
  projectId: "lcc-hub",
  storageBucket: "lcc-hub.appspot.com",
  messagingSenderId: "642738705273",
  appId: "1:642738705273:web:0e33019d7bb645af4e15a8",
  measurementId: "G-RS1L8XQHKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}