import React from 'react'
import ContactImage from '../assets/ContactImage.jpg'

const ContactUs = () => {
  return (


    <div className="max-w-6xl mx-auto p-10 lg:flex  sm:block md:flex justify-between gap-10 ">
      {/* Contact Form */}
      <div className="lg:w-1/2 sm:w-full border-4 border-[#C823ED] p-4 mb-4  rounded-2xl ">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <form>
          <div className="flex justify-between mb-4">
            <div className="w-1/2 mr-2">
              <label className="block text-gray-600 mb-2">First Name</label>
              <input
                type="text"
                className="block w-full bg-gray-100 rounded-lg p-2 border-2 outline-[#e290f4] border-[#C823ED]"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label className="block text-gray-600 mb-2">Last Name</label>
              <input
                type="text"
                className="block w-full bg-gray-100 rounded-lg p-2 border-2 outline-[#e290f4] border-[#C823ED]"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              className="block w-full bg-gray-100 rounded-lg p-2 border-2 outline-[#e290f4] border-[#C823ED]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Phone Number</label>
            <input
              type="tel"
              className="block w-full bg-gray-100 rounded-lg p-2 border-2 outline-[#e290f4] border-[#C823ED]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">What do you have in mind? Max 300 characters</label>
            <textarea
              rows="5"
              className="block w-full bg-gray-100 rounded-lg p-2 border-2 outline-[#e290f4] border-[#C823ED]"
            />
          </div>
          <div className="block  text-center justify-center"> 
            <button className="bg-[#C823ED] hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-3xl">
            Let's Talk About Your Idea
          </button> </div>
          
        </form>
      </div>
      
      {/* Information Section */}
      <div className="lg:w-1/2 sm:w-full items-center justify-center lg:px-10 ">
        <img
          src={ContactImage}
          alt="ContatImage"
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        
        <p className="text-dark px-10 my-10 text-center ">
        Looking for the solution that best fits your business needs? </p>
      </div>
    </div>


  )
}

export default ContactUs
