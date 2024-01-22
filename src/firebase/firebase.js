import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAPdWefjTib1ln-t0N6iiocAkWOMg0FH5U",
  authDomain: "netflixgpt-deadf.firebaseapp.com",
  projectId: "netflixgpt-deadf",
  storageBucket: "netflixgpt-deadf.appspot.com",
  messagingSenderId: "161388251399",
  appId: "1:161388251399:web:b9b7185d2a6d69d9019da2",
  measurementId: "G-ESRYJW96Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };