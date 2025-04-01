// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnfIzlkT6PEy8n15nhtKXvd_5ZS6Kd-yw",
  authDomain: "final-project-744c8.firebaseapp.com",
  projectId: "final-project-744c8",
  storageBucket: "final-project-744c8.appspot.com",
  messagingSenderId: "776259257634",
  appId: "1:776259257634:web:b61758b47b2f1fab33d17b",
  measurementId: "G-VVMP6YGEKS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export { app, analytics };
