// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmK__QN9wArK0htGklZup6FUvNMDoZy68",
    authDomain: "endgame-4cbc0.firebaseapp.com",
    projectId: "endgame-4cbc0",
    storageBucket: "endgame-4cbc0.appspot.com",
    messagingSenderId: "1041165210474",
    appId: "1:1041165210474:web:9542d6d907631aafc64b13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;