import React from 'react'
import LOGO from '../Utils/Netflix_Logo.png'
import { Link } from 'react-router-dom'


const Header = () => {


  return (
    <>
    <div className='flex flex-row justify-between items-center px-24 h-24 bg-gradient-to-b from-black absolute w-full'>
        <img src={LOGO} alt='logo' className='w-44'></img>
      <div>
        <select>
          <option>English</option>
          <option>Hindi</option>
        </select>
        <Link to = "/Login"><button>Sign In</button></Link>
      </div>
    </div>
    </>
  )
}

export default Header