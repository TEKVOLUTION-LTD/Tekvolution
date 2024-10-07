import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Academy from './components/Academy'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <div className='mr-[2rem] lg:ml-[2rem]'> <Navbar /></div>
       

       <div className=" mx-auto md:my-3  ">
       <HeroSection />
       </div>
       <div className='mx-auto bg-[#FDEFFF]'><AboutUs /></div>
       <Academy />

       <div className=' bg-[#FDEFFF]'>  < ContactUs  /></div>
      
       <Footer />
    </>
  )
}

export default App
