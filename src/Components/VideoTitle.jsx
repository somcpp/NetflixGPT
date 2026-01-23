import React from 'react'

const VideoTitle = ({title,overview}) => {

  return (
    <div className='pt-48 px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className='flex gap-2'>
            <button className=' bg-white text-black px-10 p-4 text-xl rounded-lg cursor-pointer hover:opacity-50'>
                ▶ Play
            </button>
            <button className=' bg-gray-500 text-white px-10 p-4 text-xl bg-opacity-50 rounded-lg'>ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle