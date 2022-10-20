import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { signup, logout, useAuth } from "../firebase/firebase-config";
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const currentUser = useAuth()
  const navigate = useNavigate()
   
  async function handleSignup() {
     setLoading(true);
    
     await signup(emailRef.current.value, passwordRef.current.value);
 
     setLoading(false);
  }

  useEffect(()=>{
    if (currentUser){
      navigate('/')
    }
  }, [currentUser])
  
  return (
    <div>
      <h2>SIGN UP</h2>
      <div>{currentUser?.email}</div>
      <div>
        <input
          placeholder="email"
          ref = {emailRef}
        />
        <input
          placeholder="password" type="password"
          ref = {passwordRef}
        />
        <button onClick={handleSignup}> Create User</button>
      </div>
      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default SignUp