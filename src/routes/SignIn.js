import React from "react";
import { useState, useRef } from "react";
import {login,logout,useAuth } from "../firebase/firebase-config";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();





 async function handleLogin() {
  
   try {
     await login(emailRef.current.value, passwordRef.current.value);
   } catch {
     alert("Error!");
   }
   
 }

  return (
    <div>
      <h2>SIGN IN</h2>
      <div>
        <input
          placeholder="email"
          ref={emailRef}
        />
        <input
          placeholder="password"
          ref={passwordRef}
        />
        <button onClick={handleLogin}>Log In</button>
      </div>
      <h3>user:{currentUser?.email}</h3>
    </div>
  );
};

export default SignIn;
