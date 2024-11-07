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
          <img src={Tekvolution} alt="Tekvolution" className="w-[12rem] object-cover" />
        </div>

        <div className="hidden md:flex space-x-8 items-end">
          <a onClick={() => scrollToSection(refs.heroSectionRef)} className="text-gray-800 hover:text-purple-600 hover:font-extrabold cursor-pointer">
            Home
          </a>
          <a onClick={() => scrollToSection(refs.aboutUsRef)} className="text-gray-800 hover:text-purple-600 hover:font-extrabold cursor-pointer">
            About Us
          </a>
          <a onClick={() => scrollToSection(refs.academyRef)} className="text-gray-800 hover:text-purple-600 hover:font-extrabold cursor-pointer">
            Academy
          </a>
          <a onClick={() => scrollToSection(refs.contactUsRef)} className="text-gray-800 hover:text-purple-600 hover:font-extrabold cursor-pointer">
            Contact Us
          </a>
        </div>

        <div className="md:hidden flex-col mr-6">
          <button onClick={toggleNavbar} className="text-gray-800 focus:outline-none">
            {mobileDrawerOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileDrawerOpen && (
        <div className="bg-purple-600 text-white p-12 lg:hidden">
          <a onClick={() => scrollToSection(refs.heroSectionRef)} className="hover:text-black pb-2 cursor-pointer">
            Home
          </a>
          <a onClick={() => scrollToSection(refs.aboutUsRef)} className="hover:text-black pb-2 cursor-pointer">
            About Us
          </a>
          <a onClick={() => scrollToSection(refs.academyRef)} className="hover:text-black pb-2 cursor-pointer">
            Academy
          </a>
          <a onClick={() => scrollToSection(refs.contactUsRef)} className="hover:text-black cursor-pointer">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
