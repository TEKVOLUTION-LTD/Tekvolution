import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import {useRef} from 'react';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Academy from './components/Academy'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import SoftwareDevelopment from './components/SoftwareDevelopment'
import TalentDevelopment from './components/TalentDevelopmentRef';

function App() {
  
  const heroSectionRef = useRef(null);
  const aboutUsRef = useRef(null);
  const academyRef = useRef(null);
  const contactUsRef = useRef(null);
  const softwareDevelopmentRef = useRef(null);
  const talentDevelopmentRef = useRef(null);

  // Adjust the offset here based on your navbar's height
  const NAVBAR_HEIGHT = 90; // Adjust this value to match your fixed navbar height in pixels

  
  const scrollToSection = (sectionRef) => {
    const topOffset = sectionRef.current.offsetTop - NAVBAR_HEIGHT;
    window.scrollTo({ top: topOffset, behavior: 'auto' });
  };



  return (
    <>

{/* <BrowserRouter>
      // ...
      <SoftwareDevelopment contactUsRef={contactUsRef} />
      // ...
      <div ref={contactUsRef} className=' bg-[#FDEFFF]' id="contact">
        <ContactUs />
      </div>
      // ...
    </BrowserRouter> */}

    <div className=' lg:ml-[2rem]'> <Navbar scrollToSection={scrollToSection} refs={{
          heroSectionRef,
          aboutUsRef,
          academyRef,
          contactUsRef,
          softwareDevelopmentRef,
          talentDevelopmentRef,
        }}    /></div>
       

       <div ref={heroSectionRef} className="  mt-[8rem] lg:mt-[8rem]  mx-auto md:my-3  ">
       <HeroSection />
       </div>
       <div ref={aboutUsRef} className='mx-auto bg-[#FDEFFF]'><AboutUs /></div>
       <div ref={academyRef}> <Academy /> </div> 

       <div ref={contactUsRef} id='#contact' className=' bg-[#FDEFFF]'>  < ContactUs  /></div>

       <div ref={softwareDevelopmentRef} contactUsRef={contactUsRef} className=' bg-[#FDEFFF] mx-auto' >  < SoftwareDevelopment  /> </div>
       <div ref={talentDevelopmentRef} className=' bg-[#FDEFFF] mx-auto' >  < TalentDevelopment  /> </div>


      
       <div className='bg-purple-600 text-white'> <Footer   scrollToSection={scrollToSection} refs={{
          heroSectionRef,
          aboutUsRef,
          academyRef,
          contactUsRef,
          softwareDevelopmentRef,
          talentDevelopmentRef,
        }}/></div> 
    </>
  )
}

export default App

