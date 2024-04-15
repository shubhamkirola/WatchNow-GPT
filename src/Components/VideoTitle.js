import React from 'react'

const VideoTitle = ({title, description}) => {
  return (
    <div className='pt-[20%] px-6 md:px-24 absolute bg-gradient-to-r from-black w-full aspect-video'>
        <h1 className='font-bold text-2xl md:text-6xl text-white'>{title}</h1>
        <p className='w-1/4 py-6 text-lg text-white hidden md:inline-block'>{description}</p>
        <div className="my-4 md:m-0">
            <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
            ▶️ Play Now
            </button>
            <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;