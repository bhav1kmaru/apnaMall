import { useConst } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useContext } from "react";
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
      console.log(res.user.displayName); // res is user info which can be used show user info in app
      alert(`${res.user.displayName} ${authType} succesfull`);
      window.location.href='/';
     let userInfo = {
       name: res.user.displayName,
       email: res.user.email,
       image: res.user.photoURL,
       id:1
     };
     localStorage.setItem("userInfo", JSON.stringify(userInfo));
     console.log(userInfo);
  
     
    })
    .catch((err) => {
      console.log("Error:", err);
      alert(err.message);
      
    });
};

// Facebook - Auth
const facebookAuthProvider = new FacebookAuthProvider();
export const signInWithFacebookAccount = (authType) => {
  signInWithPopup(auth, facebookAuthProvider)
    .then((res) => {
      console.log(res.user.user);
      alert(`${res.user.displayName} ${authType} succesfull`);
       let userInfo = {
         name: res.user.displayName,
         email: res.user.email,
         image: res.user.photoURL,
       };
       localStorage.setItem("userInfo", JSON.stringify(userInfo));
       console.log(userInfo);
    })
    .catch((err) => {
      console.log("error in facebook auth :", err.message);
      if (
        err.message ===
        "Firebase: Error (auth/account-exists-with-different-credential)."
      ) {
        alert("Account already exists, login if this account belongs to you");
      } else {
        alert(err.message);
      }
    });
};
