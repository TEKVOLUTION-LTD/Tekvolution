import React from 'react'
import AboutImage from '../assets/AboutImage.jpg'

const AboutUs = () => {
 
return (
    <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-10 lg:my-20 ">
      
      {/* About Us */}
      <div className='mx-10 lg:mx-0' >  
        <div className="bg-white px-6 pt-6  rounded-lg shadow-lg border-l-8 border-b-8 border-t-4 border-r-4 border-t-[#C823ED] border-r-[#C823ED] border-b-[#89A3F8] border-l-[#89A3F8] ">
      
      <div className=" h-[20rem] justify-center text-center lg:pr-12 sm:pr-2 lg:pl-12 sm:pl-2  pt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us </h2>
        <p className="text-gray-600 mb-4 ">At TEKVOLUTION LTD, we’re not just solving today's problems – we’re building the technology that empowers tomorrow’s possibilities. Committed to revolutionizing how users interact with technology by building solutions that simplify tasks and prioritize automation.</p>
      </div>
      
  </div>   
  </div>
     
      

      {/* Image */}
      <div className=" ">
        
          <div className="mx-10 lg:mx-0">
            <img
              src={AboutImage}
              alt="Image"
              className="object-cover  h-full md:h-full lg:h-full w-full rounded-xl"
            />
          </div>
        
       
      </div>
      
      {/* Mission */}
      <div className="mx-10 lg:mx-0">
      <div className="bg-white px-8 pt-6 rounded-lg shadow-lg border-l-8 border-b-8 border-t-4 border-r-4 border-t-[#C823ED] border-r-[#C823ED] border-b-[#89A3F8] border-l-[#89A3F8] ">
      
      <div className=" h-[20rem] justify-center text-center lg:pr-12 sm:pr-2 lg:pl-12 sm:pl-2  pt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mission </h2>
        <p className="text-gray-600 mb-4 ">Our mission is to revolutionize the way people interact with technology by creating innovative, automation-driven solutions that enhance productivity, streamline tasks, and seamlessly connect users to the services they need. We strive to empower both individuals and businesses to focus on their core objectives, while our intelligent systems handle the repetitive work.</p>
      </div>
      
  </div>
      </div>
    
  
      
      {/* Vision */}
      <div className="mx-10 lg:mx-0">
      <div className="bg-white px-8 pt-6 rounded-lg shadow-lg border-l-8 border-b-8 border-t-4 border-r-4 border-t-[#C823ED] border-r-[#C823ED] border-b-[#89A3F8] border-l-[#89A3F8] ">
      
      <div className=" h-[20rem] justify-center text-center lg:pr-12 sm:pr-2 lg:pl-12 sm:pl-2  pt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Vision </h2>
        <p className="text-gray-600 mb-4 ">Our vision is to lead the future of technology by building a smarter, more connected world where automation and innovation simplify everyday tasks, driving growth and efficiency for businesses and individuals alike. We aim to be the catalyst for a tech-driven future that prioritizes user experience and elevates global productivity.</p>
      </div>
      
  </div>
  
      </div>
      
    </div>)

}

 export default AboutUs
