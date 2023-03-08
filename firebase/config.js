// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_i7ZLWAO2Xotqac7PzLgkNJlxaa0vq84",
  authDomain: "fast-move-1c044.firebaseapp.com",
  projectId: "fast-move-1c044",
  storageBucket: "fast-move-1c044.appspot.com",
  messagingSenderId: "918885755318",
  appId: "1:918885755318:web:516b802f2263041432b917"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}