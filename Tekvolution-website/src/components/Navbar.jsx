import React, { useState } from "react";
import Tekvolution from "../assets/Tekvolution.png"
import { MenuIcon, XIcon } from "lucide-react";
const Navbar = () => {

    const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  //mobile menu open and close on clicking on mobile
  const toggleNavbar = () => {
setMobileDrawerOpen(!mobileDrawerOpen);

  }
  
  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsProductsOpen(false); // Close other dropdown
  };

  // Toggle products dropdown
  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen);
    setIsServicesOpen(false); // Close other dropdown
  };
  return (
    
    <nav className="sticky ">
      <div className="container mx-auto flex items-center justify-between lg:gap-4">
        {/* Company Logo */}
        <div className="flex items-center pt-2 ">
          <img
            src={Tekvolution} 
            alt="Tekvolution"
              className="h-[8rem] w-[12rem] object-cover"
          />
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 items-center mr-[4rem]">
          <a href="#home" className="text-gray-800 hover:tex-purple-600">
            Home
          </a>
          <a href="#about-us" className="text-gray-800 hover:text-purple-600">
            About Us
          </a>

          {/* Our Services Dropdown */}
          <div className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="flex items-center text-gray-800 hover:text-purple-600 focus:outline-none"
            >
              Our Services
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute bg-white border shadow-lg mt-2 rounded-lg w-48 z-10">
                <a
                  href="#software-development"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Software Development
                </a>
                <a
                  href="#product-development"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Product Development
                </a>
                <a
                  href="#talent-development"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Talent Development/Outsourcing
                </a>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={toggleProductsDropdown}
              className="flex items-center text-gray-800 hover:text-purple-600 focus:outline-none"
            >
              Products
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isProductsOpen && (
              <div className="absolute bg-white border shadow-lg mt-2 rounded-lg w-48 z-10">
                <a
                  href="#wash-connect"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Wash Connect
                </a>
              </div>
            )}
          </div>

          <a href="#academy" className="text-gray-800 hover:text-purple-600">
            Academy
          </a>
          <a href="#contact-us" className="text-gray-800 hover:text-purple-600">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex-col mr-6">
          <button onClick={toggleNavbar} className="text-gray-800 focus:outline-none">
            {mobileDrawerOpen ? < XIcon /> :< MenuIcon /> }           
         
                

      
          </button>
        </div>
        
      </div>
{/* mobile Drawer open and close toggle links */}
      {mobileDrawerOpen && (
          <div className="right-0  bg-purple-600 z-20 w-full flex flex-col justify-start items-start text-white p-12  lg:hidden">

<a href="#home" className=" hover:text-black pb-2 ">
            Home
          </a>
          <a href="#about-us" className=" hover:text-black pb-2">
            About Us
          </a>

          {/* Our Services Dropdown */}
          <div className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="flex items-center  hover:text-black pb-2 focus:outline-none"
            >
              Our Services
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute bg-white text-purple-600 border shadow-lg mt-2 rounded-lg w-48 z-10">
                <a
                  href="#software-development"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Software Development
                </a>
                <a
                  href="#product-development"
                  className="block px-4 py-2  hover:bg-gray-200"
                >
                  Product Development
                </a>
                <a
                  href="#talent-development"
                  className="block px-4 py-2  hover:bg-gray-200"
                >
                  Talent Development/Outsourcing
                </a>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={toggleProductsDropdown}
              className="flex items-center  hover:text-black pb-2 focus:outline-none"
            >
              Products
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isProductsOpen && (
              <div className="absolute bg-white text-purple-600 border shadow-lg mt-2 rounded-lg w-48 z-10">
                <a
                  href="#wash-connect"
                  className="block px-4 py-2  hover:bg-gray-200"
                >
                  Wash Connect
                </a>
              </div>
            )}
          </div>

          <a href="#academy" className=" hover:text-black pb-2">
            Academy
          </a>
          <a href="#contact-us" className=" hover:text-black">
            Contact Us
          </a>
          </div>
        )}
    </nav>
  )
}

export default Navbar