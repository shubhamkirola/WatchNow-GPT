import React, { useRef, useState } from 'react'
import LOGO from '../Utils/Netflix_Logo.png'
import Background from '../Utils/Background-img.jpg'
import { checkvalidation } from '../Utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../Utils/userSlice';

const Login = () => {

const [signIn, setsignIn] = useState(true);
const [errMessage, seterrMessage] = useState(null);
const dispatch = useDispatch();
const navigate = useNavigate();


const handleclick = () => {
  setsignIn(!signIn)
}

const email = useRef(null);
const password = useRef(null);
const name = useRef(null);



const handlesignIn = () => {
  
  const message = checkvalidation(email.current.value, password.current.value);
  seterrMessage(message);

  if(message) return;

  if(!signIn) {
    createUserWithEmailAndPassword(
      auth,
      email.current.value, 
      password.current.value
    )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
    })
    .then(() => {
      const {uid, email, displayName}  = auth.currentUser;
          dispatch(
            addUser(
              {uid:uid, 
               email:email,
               displayName:displayName
              }))
              navigate("/browse");
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
    
    // console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrMessage(errorCode + ' ' + errorMessage);
  });
  }
  else {
    signInWithEmailAndPassword(
      auth, 
      email.current.value, 
      password.current.value
    )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user);
    navigate("/browse")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + " " + errorMessage);
  });

  }
}

  return (
    <div>
      <div className='flex flex-row justify-between items-center px-24 h-28 absolute w-full bg-gradient-to-b from-black z-10'>
        <img src={LOGO} alt='logo' 
        className='w-[9.5rem] z-10'>
        </img>
      </div>
      
      <div className='bg-gradient-to-b from-black to-white relative'>
          <img src={Background} alt='bg' 
          className='w-full h-screen'>
          </img>
        <div className='w-72 h-[40%] p-6 absolute top-[25%] left-[40%] border rounded bg-black bg-opacity-70'>
          <h2 className='text-white'>
            {signIn ? "Sign In" : "Sign Up"}
            </h2>
          
          <form className='flex flex-col' onSubmit={(e) => e.preventDefault()}>
            {!signIn && (<input
              ref={name} 
              type='text' 
              placeholder='Enter your Name' 
              className='py-2 mt-4'>
            </input>)}
            <input 
              ref={email} 
              type="email" 
              placeholder='Enter your E-mail Address' 
              className='py-2 mt-4'>
            </input>
            <input 
              ref={password} 
              type="password" 
              placeholder='Enter your Password' 
              className='mt-4 py-2' >
            </input>
            <button 
              className='h-1/4 mt-4 border rounded bg-red-700 py-2' 
              onClick={handlesignIn}>{signIn ? "Sign In" : "Sign Up"}</button>
          </form>
          <p className='text-white'>{errMessage} </p>
          <h3 
            className='mt-4 text-white cursor-pointer' 
            onClick={handleclick}>{signIn ? "New to Netflix ? Sign Up Now" : "Already Registered ? Sign In"}</h3>
        </div>
      </div>
    </div>
  )
}

export default Login