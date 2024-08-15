import React from 'react'
import video from '../assets/Awyetu.mp4'

const Hero = () => {
  return (
    <div className='w-full h-full'>
        <video className='w-full h-screen object-cover' src={video} autoPlay muted loop></video>
        <div className='absolute top-20 left-0 w-full h-full flex flex-col justify-center items-center'>
            <h1 className='text-[100px] font-bold text-white text-opacity-50'>AWYETU</h1>
            <p className='text-white font-bold text-[40px]'>WHERE FASHION MEETS LUXURY</p>
            <button className='py-[5px] px-[30px] mt-10 text-[20px] font-medium rounded-[5px] bg-black text-white border-2 border-white'>SHOP NOW</button>
        </div>


    </div>
  )
}

export default Hero