// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQySPIueCPjurQ-NaWdVGYQaTO720QmVA",
  authDomain: "newjobtask.firebaseapp.com",
  projectId: "newjobtask",
  storageBucket: "newjobtask.appspot.com",
  messagingSenderId: "61589442528",
  appId: "1:61589442528:web:bb0067264c8b93e3b2e585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;