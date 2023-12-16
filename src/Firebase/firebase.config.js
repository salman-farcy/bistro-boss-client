// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBAyklpVFtNJ_ZCuRjgIpj4coz8y9hBRUI",
  authDomain: "bistro-boss-fe48a.firebaseapp.com",
  projectId: "bistro-boss-fe48a",
  storageBucket: "bistro-boss-fe48a.appspot.com",
  messagingSenderId: "666249025706",
  appId: "1:666249025706:web:4659daf4335c3f808e98d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);