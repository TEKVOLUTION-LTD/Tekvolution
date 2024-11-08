import React, { useState } from "react";
import Tekvolution from "../assets/Tekvolution.png";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar = ({ scrollToSection, refs }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsProductsOpen(false);
  };

  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen);
    setIsServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-md border-b-[0.3px] border-b-[#C823ED] border-dashed shadow-[#e5dce5] drop-shadow-lg">
      <div className="mx-auto flex items-center justify-between h-[4rem] max-w-[72rem]">
        <div className="flex items-start justify-start">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={Tekvolution} alt="Tekvolution" className="w-[12rem] object-cover" />
          </a>
        </div>

        <div className="hidden md:flex space-x-8 items-end">
          <a href="#home" onClick={() => scrollToSection(refs.heroSectionRef, 'home')} className="text-gray-800 hover:text-purple-600 hover:font-extrabold">
            Home
          </a>
          <a href="#about-us" onClick={() => scrollToSection(refs.aboutUsRef, 'about-us')} className="text-gray-800 hover:text-purple-600 hover:font-extrabold">
            About Us
          </a>

          <div className="relative">
            <button onClick={toggleServicesDropdown} className="flex items-center text-gray-800 hover:text-purple-600 hover:font-extrabold focus:outline-none">
              Our Services
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute bg-white border shadow-lg mt-2 rounded-lg w-48 z-10">
                <a onClick={() => scrollToSection(refs.softwareDevelopmentRef, 'software-development')} href="#software-development" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Software Development
                </a>
                <a href="#product-development" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Product Development
                </a>
                <a onClick={() => scrollToSection(refs.talentDevelopmentRef, 'talent-development')} href="#recruit-development" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Talent Development/Outsourcing
                </a>
              </div>
            )}
          </div>

          <a onClick={() => scrollToSection(refs.academyRef, 'academy')} href="#academy" className="text-gray-800 hover:text-purple-600 hover:font-extrabold">
            Academy
          </a>
          <a onClick={() => scrollToSection(refs.contactUsRef, 'contact-us')} href="#contact-us" className="text-gray-800 hover:text-purple-600 hover:font-extrabold">
            Contact Us
          </a>
        </div>

        <div className="md:hidden flex-col mr-6">
          <button onClick={toggleNavbar} className="text-gray-800 focus:outline-none">
            {mobileDrawerOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
