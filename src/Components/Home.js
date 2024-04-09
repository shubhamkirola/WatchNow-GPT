import React from 'react'
import Header from './Header'

import Background from '../Utils/Background-img.jpg'

const Home = () => {
  return (
    <>
    <Header/>
    <div>
        <img src={Background} alt='bg' className='w-full h-screen'></img>
      </div>
    </>
  )
}

export default Home