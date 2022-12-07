// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIIS8cvRdgtUpfn5RkhcpMrUQycTRYQOs",
  authDomain: "pweb-e10.firebaseapp.com",
  projectId: "pweb-e10",
  storageBucket: "pweb-e10.appspot.com",
  messagingSenderId: "718376176091",
  appId: "1:718376176091:web:1da9a34a08037d38cdbffe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default db;
export { auth };
