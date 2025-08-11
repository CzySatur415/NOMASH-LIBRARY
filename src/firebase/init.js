// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwX5MmP4ME3zCF4a0q1sFBg8yN1Vdcj3c",
  authDomain: "week7-kezhao-chen.firebaseapp.com",
  projectId: "week7-kezhao-chen",
  storageBucket: "week7-kezhao-chen.appspot.com", // 修正拼写
  messagingSenderId: "1044092664397",
  appId: "1:1044092664397:web:65ddc479c321ff1d323a04"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;