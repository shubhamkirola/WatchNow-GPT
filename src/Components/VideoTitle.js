import React from 'react'

const VideoTitle = ({title, description}) => {
  return (
    <div className='px-12 pt-44 absolute bg-gradient-to-r from-black w-full aspect-video'>
        <h1 className='font-bold text-5xl text-white'>{title}</h1>
        <p className='w-1/4 py-6 text-lg text-white'>{description}</p>
        <div>
            <button className='border rounded-lg p-5 text-white bg-gray-700 bg-opacity-50'>
                Play Now
            </button>
            <button className='border rounded-lg p-5 text-white bg-gray-700 bg-opacity-50 mx-1'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;