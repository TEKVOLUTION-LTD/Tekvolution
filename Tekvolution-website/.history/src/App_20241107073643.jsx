import React from 'react'
import {useRef} from 'react';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Academy from './components/Academy'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import SoftwareDevelopment from './components/SoftwareDevelopment'
import RecruitmentProcess from './components/RecruitmentProcess'

function App() {
  
const aboutUs = useRef(null);
const heroSection = useRef(null);
const academy = useRef(null);
const contactUs = useRef(null);
const softwareDev = useRef(null);
const recruitment = useRef(null);


const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop, 
    behavior: 'smooth'
  })
}

  return (
    <>
    <div className=' lg:ml-[2rem]'> <Navbar /></div>
       

       <div ref={heroSection} className="  mt-[8rem] lg:mt-[8rem]  mx-auto md:my-3  ">
       <HeroSection />
       </div>
       <div  className='mx-auto bg-[#FDEFFF]'><AboutUs /></div>
       <Academy />

       <div className=' bg-[#FDEFFF]'>  < ContactUs  /></div>

       <div className=' bg-[#FDEFFF] mx-auto' >  < SoftwareDevelopment  /> </div>
       <div className=' bg-[#FDEFFF] mx-auto' >  < RecruitmentProcess  /> </div>


      
       <div className='bg-purple-600 text-white'> <Footer /></div> 
    </>
  )
}

export default App

