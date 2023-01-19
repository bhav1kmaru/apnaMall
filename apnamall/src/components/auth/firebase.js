// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA1PXzAgjhZKeMVGTDZ9pC1J-SiiObQdDI",
  authDomain: "apnamall-auth-project.firebaseapp.com",
  projectId: "apnamall-auth-project",
  storageBucket: "apnamall-auth-project.appspot.com",
  messagingSenderId: "338190521709",
  appId: "1:338190521709:web:6f3bfefb47ecce0422f664",
  measurementId: "G-3WB4G6B8MS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Email/Password - Auth
export const auth = getAuth();
// const analytics = getAnalytics(app);

// Google - Auth
const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogleAccount = (authType) => {
  signInWithPopup(auth, googleAuthProvider)
    .then((res) => {
      console.log(res); // res is user info which can be used show user info in app
      alert(`${res.user.displayName} ${authType} succesfull`);
    })
    .catch((err) => {
      console.log("Error:", err);
      alert(err.message);
    });
};
