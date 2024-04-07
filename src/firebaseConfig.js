// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlkzXEglpIHBIOVvmtjJNzLQo_AAppKw4",
    authDomain: "deez-bf690.firebaseapp.com",
    projectId: "deez-bf690",
    storageBucket: "deez-bf690.appspot.com",
    messagingSenderId: "297745103456",
    appId: "1:297745103456:web:aed5c2cdbcf9a97dfaa105",
    measurementId: "G-62YD2HCMDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
