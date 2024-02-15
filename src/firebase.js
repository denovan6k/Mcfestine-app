// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi44wCxOo7gSWIWmXe3ATxwgh6ImZ-KGU",
  authDomain: "foodapp-aafb9.firebaseapp.com",
  projectId: "foodapp-aafb9",
  storageBucket: "foodapp-aafb9.appspot.com",
  messagingSenderId: "274207538046",
  appId: "1:274207538046:web:fc07f3b3c32aa01f23112f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt : "select_account "
});


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);