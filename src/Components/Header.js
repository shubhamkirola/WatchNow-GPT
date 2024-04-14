import React, { useEffect } from 'react'
import LOGO from '../Utils/Netflix_Logo.png'
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { addUser, removeUser } from '../Utils/userSlice'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
          dispatch(addUser(
            {uid:uid, 
             email:email,
             displayName:displayName
            }))
            navigate("/browse");
      }
      else {
        dispatch(removeUser())
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [])

  return (
    <>
    <div className='flex flex-row justify-between items-center px-24 h-28 bg-gradient-to-b from-black absolute w-full z-10'>
        <img src={LOGO} alt='logo' className='w-[9.5rem]'></img>
      {user && (
         <button onClick={handleSignOut} className="font-bold text-white ">
         (Sign Out)
       </button>
      )}
    </div>
    </>
  )
}

export default Header