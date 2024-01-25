import React from 'react'
import { FaPlay,FaInfoCircle  } from "react-icons/fa";

const VideoTitle = ({title,desc}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 text-white absolute bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block text-lg py-6 w-[35%]'>{desc}</p>
      <div className='flex w-full my-4 md:my-0'>
        <button className='bg-white md:px-16  p-2 md:p-4 text-black rounded-md hover:bg-gray-300 flex items-center text-lg'><span className='mx-4'><FaPlay /></span>Play</button>
        <button className='hidden md:inline-block ml-4 bg-gray-700 p-4 px-16 bg-opacity-50 rounded-md flex items-center text-lg'>More info <FaInfoCircle className='ml-4' /></button>
      </div>
    </div>
  )
}

export default VideoTitle
