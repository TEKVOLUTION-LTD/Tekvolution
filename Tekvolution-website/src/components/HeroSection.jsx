import React from 'react'
import Video from "../assets/video.mp4"

const HeroSection = () => {
  return (
    <div className='block sm:flex mx-auto justify-center items-center my-10 '>
        
            <div className=' justify-center text-center mr-[2rem] lg:mr-0 ml-[2rem]'>
            <h2 className='mx-auto text-3xl sm:text-6xl lg:text-6xl font-semibold  ' > <span className='text-[#C823ED]'>Empowering </span>  Tomorrow</h2> 
            <h4 className='mx-auto text-3xl sm:text-6xl lg:text-4xl md:font-light lg:font-light pt-3'> Shaping the Future
            Through Innovation</h4>
            </div>
          
    
        <div className='lg:mx-auto lg:w-2/3 mx-10 '>
            <video autoPlay muted
            className=' mx-auto   h-[25rem] object-contain justify-center items-center mr-[3.5rem] rounded-[0.5rem] '>
                <source  src={Video} type='video/mp4' />

            </video>
        

        </div>
      
    </div>
  )
}

export default HeroSection
