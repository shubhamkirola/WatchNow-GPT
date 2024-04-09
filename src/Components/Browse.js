import React from 'react'
import LOGO from '../Utils/Netflix_Logo.png'
import { removeUser } from '../Utils/userSlice'
import { useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'

const Browse = () => {

  const dipatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
        <div className='flex flex-row justify-between items-center px-24 h-24 absolute w-full bg-gradient-to-b from-black z-10'>
          <img src={LOGO} alt='logo' 
            className='w-44 z-10'>
          </img>
          <button 
            className='h-2/4 mt-4 border rounded bg-red-700 py-2'
            onClick={() => {dipatch(removeUser());
              signOut(auth).then(() => {
                // Sign-out successful.
                navigate('/Login')
              }).catch((error) => {
                // An error happened.
              });}}
            >
            Sign Out
          </button>
        </div>       
    </>
  )
}

export default Browse;