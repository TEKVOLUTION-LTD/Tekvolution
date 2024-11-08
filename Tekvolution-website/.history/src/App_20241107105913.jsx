import React, { useRef, useState } from 'react';
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

  const NAVBAR_HEIGHT = 90;

  // State to control the visibility of sections
  const [visibleSection, setVisibleSection] = useState('all');

  const scrollToSection = (sectionRef, sectionName) => {
    setVisibleSection(sectionName);
    if (sectionRef && sectionRef.current) {
      const topOffset = sectionRef.current.offsetTop - NAVBAR_HEIGHT;
      window.scrollTo({ top: topOffset, behavior: 'auto' });
    }
  };

  return (
    <>
      <div className='lg:ml-[2rem]'>
        <Navbar
          scrollToSection={scrollToSection}
          refs={{
            heroSectionRef,
            aboutUsRef,
            academyRef,
            contactUsRef,
            softwareDevelopmentRef,
            talentDevelopmentRef,
          }}
        />
      </div>

      {/* Conditionally render each section based on the visibleSection state */}
      {visibleSection === 'all' || visibleSection === 'home' ? (
        <div ref={heroSectionRef} className="mt-[8rem] lg:mt-[8rem] mx-auto md:my-3">
          <HeroSection />
        </div>
      ) : null}

      {visibleSection === 'all' || visibleSection === 'about-us' ? (
        <div ref={aboutUsRef} className='mx-auto bg-[#FDEFFF]'>
          <AboutUs />
        </div>
      ) : null}

      {visibleSection === 'all' || visibleSection === 'academy' ? (
        <div ref={academyRef}>
          <Academy />
        </div>
      ) : null}

      {visibleSection === 'all' || visibleSection === 'contact-us' ? (
        <div ref={contactUsRef} className='bg-[#FDEFFF]'>
          <ContactUs />
        </div>
      ) : null}

      {/* Conditionally render SoftwareDevelopment and TalentDevelopment sections */}
      {visibleSection === 'software-development' ? (
        <div ref={softwareDevelopmentRef} className='bg-[#FDEFFF] mx-auto'>
          <SoftwareDevelopment />
        </div>
      ) : null}

      {visibleSection === 'talent-development' ? (
        <div ref={talentDevelopmentRef} className='bg-[#FDEFFF] mx-auto'>
          <TalentDevelopment />
        </div>
      ) : null}

      <div className='bg-purple-600 text-white'>
        <Footer
          scrollToSection={scrollToSection}
          refs={{
            heroSectionRef,
            aboutUsRef,
            academyRef,
            contactUsRef,
            softwareDevelopmentRef,
            talentDevelopmentRef,
          }}
        />
      </div>
    </>
  );
}

export default App;
