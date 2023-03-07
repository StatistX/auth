import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXypSwVDvRsSivB14sLZcPDlCkOteH9Dw",
  authDomain: "auth-2-3-5.firebaseapp.com",
  projectId: "auth-2-3-5",
  storageBucket: "auth-2-3-5.appspot.com",
  messagingSenderId: "126662308295",
  appId: "1:126662308295:web:81a0e6ee6de461ecbf29e2",
  measurementId: "G-Q72MCQFT70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth();

export { app, auth };
