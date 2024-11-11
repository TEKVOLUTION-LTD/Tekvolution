

jsx
// App.jsx file
import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Academy from './components/Academy';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import SoftwareDevelopment from './components/SoftwareDevelopment';
import TalentDevelopment from './components/TalentDevelopment';

function App() {
  const heroSectionRef = useRef(null);
  const aboutUsRef = useRef(null);
  const academyRef = useRef(null);
  const contactUsRef = useRef(null);
  const softwareDevelopmentRef = useRef(null);
  const talentDevelopmentRef = useRef(null);

  // Adjust the offset here based on your navbar's height
  const NAVBAR_HEIGHT = 90;

  // Adjust this value to match your fixed navbar height in pixels
  const scrollToSection = (sectionRef) => {
    const topOffset = sectionRef.current.offsetTop - NAVBAR_HEIGHT;
    window.scrollTo({ top: topOffset, behavior: 'auto' });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar scrollToSection={scrollToSection} refs={{ 
              heroSectionRef, 
              aboutUsRef, 
              academyRef, 
              contactUsRef, 
              softwareDevelopmentRef, 
              talentDevelopmentRef 
            }} />
            <div ref={heroSectionRef} className=" mt-[8rem] lg:mt-[8rem] mx-auto md:my-3 ">
              <HeroSection />
            </div>
            <div ref={aboutUsRef} className='mx-auto bg-[#FDEFFF]'>
              <AboutUs />
            </div>
            <div ref={academyRef}>
              <Academy />
            </div>
            <div ref={contactUsRef} className=' bg-[#FDEFFF]'>
              <ContactUs />
            </div>
            <div ref={softwareDevelopmentRef} className=' bg-[#FDEFFF] mx-auto'>
              <SoftwareDevelopment />
            </div>
            <div ref={talentDevelopmentRef} className=' bg-[#FDEFFF] mx-auto'>
              <TalentDevelopment />
            </div>
            <div className='bg-purple-600 text-white'>
              <Footer scrollToSection={scrollToSection} refs={{ 
                heroSectionRef, 
                aboutUsRef, 
                academyRef, 
                contactUsRef, 
                softwareDevelopmentRef, 
                talentDevelopmentRef 
              }} />
            </div>
          </>
        } />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



jsx
// SoftwareDevelopment.jsx file
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SoftwareDevelopment = () => {
  const navigate = useNavigate();

  return (
    // ...
    <button 
      className="bg-[#C823ED] hover:bg-pink-500 text-white font-bold py-2 px-4 mt-5 mb-5 lg:mb-0 rounded-3xl"
      onClick={() => navigate('/contact')}
    >
      Let's Talk About Your Idea
    </button>
    // ...
  );
};

export default SoftwareDevelopment;
