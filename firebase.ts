import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default { db }
