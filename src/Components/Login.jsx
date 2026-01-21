import React, { useState,useRef } from "react";
import Header from "./Header";
import { CheckValidData } from "../Utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick = () => {
    //validate the form data
    const message = CheckValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;
    //sign up/sign in
    if(!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // console.log(user);
        navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" +errorMessage);
      });
    } else {
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/browse")
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" +errorMessage)
      });

    }
  }
  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/IN-en-20260112-TRIFECTA-perspective_004732f9-7464-4a7c-940b-4a51c4f0f73f_large.jpg"
        alt="background"
      />

      {/* Centered Form */}
      <div className="flex justify-center items-center min-h-screen">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-3/12 p-12 bg-black/60 text-white rounded-lg">
          <h1 className="text-2xl font-bold mb-6">{isSignInForm? "Sign In" : "Sign Up"}</h1>

          {!isSignInForm && <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 mb-4 bg-gray-800 rounded outline-none"
          />}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 mb-4 bg-gray-800 rounded outline-none"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 mb-1 bg-gray-800 rounded outline-none"
          />
          <p className="text-red-500 py-3 font-semibold">{errorMessage}</p>
          <button onClick={handleButtonClick} className="p-3 bg-red-600 rounded font-semibold hover:bg-red-700">
            {isSignInForm? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={() => toggleSignInForm()}>{isSignInForm?"New to Netflix? sign up now" : "Already registered Sign in Now" }</p>
        </form>
      </div>
    </div>
  );
};
