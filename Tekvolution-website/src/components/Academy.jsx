import React from 'react'
import AcademyImage from '../assets/AcademyImage.jpg'

function Academy() {
  return (
    <div className="max-w-6xl mx-auto p- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-20">

        {/* image */}
      <div className="flex mx-10 lg:mx-0">
        <img
          src={AcademyImage}
          alt="Image"
          className="w-full object-cover h-full rounded-xl"
        />
        
      </div>

      
      {/* Academy */}

      
      <div className="bg-white  rounded-2xl px-10 mx-10 lg:mx-0">
      
          <div className=" h-[20rem] justify-center text-center lg:px-10 px-2   lg:pt-10  pt-10 ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 lg:px-12">Empowering young africans with skills for tomorrow. </h2>
            <p className="text-gray-600 mb-4 lg:px-4  ">TEKVOLUTION Academy is a comprehensive, free xyz week learning program designed to equip aspiring individuals with the technical expertise needed to kickstart a successful career.</p>
            <button className="bg-[#C823ED] hover:bg-pink-500 hover:bg-blue-700 text-white font-bold  py-3 px-6 rounded-3xl text-center">
            Apply now
          </button>
          </div>
          
      </div>



    </div>
  );
}

export default Academy;