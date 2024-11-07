import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Academy from './components/Academy';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import SoftwareDevelopment from './components/SoftwareDevelopment';
import RecruitmentProcess from './components/RecruitmentProcess';

function App() {
  const heroSectionRef = useRef(null);
  const aboutUsRef = useRef(null);
  const academyRef = useRef(null);
  const contactUsRef = useRef(null);
  const softwareDevelopmentRef = useRef(null);
  const recruitmentProcessRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="lg:ml-[2rem]">
        <Navbar scrollToSection={scrollToSection} refs={{
          heroSectionRef,
          aboutUsRef,
          academyRef,
          contactUsRef,
          softwareDevelopmentRef,
          recruitmentProcessRef,
        }} />
      </div>

      <div ref={heroSectionRef} className="mt-[8rem] lg:mt-[8rem] mx-auto md:my-3">
        <HeroSection />
      </div>
      <div ref={aboutUsRef} className="mx-auto bg-[#FDEFFF]">
        <AboutUs />
      </div>
      <div ref={academyRef}>
        <Academy />
      </div>
      <div ref={contactUsRef} className="bg-[#FDEFFF]">
        <ContactUs />
      </div>
      <div ref={softwareDevelopmentRef} className="bg-[#FDEFFF] mx-auto">
        <SoftwareDevelopment />
      </div>
      <div ref={recruitmentProcessRef} className="bg-[#FDEFFF] mx-auto">
        <RecruitmentProcess />
      </div>

      <div className="bg-purple-600 text-white">
        <Footer />
      </div>
    </>
  );
}

export default App;
