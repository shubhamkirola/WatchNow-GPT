import React, { useEffect } from 'react'
import LOGO from '../Utils/Netflix_Logo.png'
import { auth } from '../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { addUser, removeUser } from '../Utils/userSlice'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleGptSearchView } from '../Utils/gptSlice'
import { changeLanguage } from '../Utils/configSlice'
import { SUPPORTED_LANGUAGES } from '../Utils/Constants'


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
    <div className='flex flex-row justify-between items-center px-24 h-28 bg-gradient-to-b from-black absolute w-full z-10'>
        <img src={LOGO} alt='logo' className='w-[9.5rem]'></img>
      
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <button onClick={handleSignOut} className="py-2 px-4 mx-4 my-2 bg-red-700 text-white border rounded-lg font-bold">
            Sign Out
          </button>
        </div>
      )}
    </div>
    </>
  )
}

export default Header