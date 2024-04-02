import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIRE_API_KEY,
  authDomain: "lcc-hub.firebaseapp.com",
  databaseURL: "https://lcc-hub-default-rtdb.firebaseio.com",
  projectId: "lcc-hub",
  storageBucket: "lcc-hub.appspot.com",
  messagingSenderId: "642738705273",
  appId: "1:642738705273:web:0e33019d7bb645af4e15a8",
  measurementId: "G-RS1L8XQHKF",
};

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
