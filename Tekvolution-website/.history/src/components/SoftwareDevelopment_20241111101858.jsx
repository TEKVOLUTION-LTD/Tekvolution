import React from 'react'
import Software from '../assets/Software.jpg'
import Bemfot from '../assets/Bemfot.png';

const SoftwareDevelopment = (contactUsRef) => {

  
  return (
 <>
    {/* SOFTWARE DEVELOPMENT */}

    <div   className='block sm:flex mx-10 justify-center items-center my-10 gap-5 '>
      
      
      <div className='  justify-center text-center lg:mr-[2rem]  lg:w-1/2'>
            <h2 className='mx-auto text-3xl sm:text-6xl lg:text-6xl font-semibold lg:px-0 px-2 ' > Software Development</h2> 
            <h4 className='mx-auto text-2xl sm:text-6xl lg:text-3xl md:font-light lg:font-light pt-3 lg:px-7'> Shaping the Future
            we empower your vision with future -ready software solutions</h4>
            <button  
 className="bg-[#C823ED] hover:bg-pink-500 text-white font-bold py-2 px-4 mt-5 mb-5 lg:mb-0 rounded-3xl">
           <a onClick={() => contactUsRef.current.scrollIntoView({ behavior: 'smooth' })} href="#contact"  rel="noopener noreferrer">Let's Talk About Your Idea </a>
          </button>
            </div>

        
            <div className='lg:mx-auto lg:w-1/2 '>

            <div className="lg:mx-0 w-full">
            <img
              src={Software}
              alt="Image"
              className="object-cover  h-full md:h-full  lg:h-[25rem] w-full rounded-xl"
            />
          </div>

    
        </div>
    </div>
    


{/* OUR SERVICES */}

<div className=''>  
<h1 className='mx-12 mb-[-2rem] text-2xl font-bold'> Our Services Include:</h1>  

<div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-10 lg:my-20 ">
      
      {/* WEB DEVELOPMENT */}

      <div className='mx-10 lg:mx-0' >  
        <div className="bg-white px-2 lg:px-8 pt-6  rounded-lg shadow-lg border-l-8 border-b-8 border-t-4 border-r-4 border-t-[#C823ED] border-r-[#C823ED] border-b-[#89A3F8] border-l-[#89A3F8] ">
      
      <div className="overflow-scroll lg:overflow-hidden  h-[20rem] justify-center text-center lg:pr-12 sm:pr-2 lg:pl-12 sm:pl-2  pt-2 lg:pt-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Web Development</h2>
        <p className="text-gray-600 mb-4 lg:text-lg text-xl ">Our web development service is driven by the goal of creating digital solutions that empower your business and engage your audience. Whether you're looking to launch a new website or revamp an existing one, our expertise ensures a smooth process from concept to deployment.
    
  
        </p>
      </div>
      
  </div>   
  </div>
     
      

      {/* MOBILE DEVELOPMENT */}

      <div className="mx-10 lg:mx-0">
      <div className="bg-white px-2 lg:px-8 pt-6 rounded-lg shadow-lg border-l-8 border-b-8 border-t-4 border-r-4 border-t-[#C823ED] border-r-[#C823ED] border-b-[#89A3F8] border-l-[#89A3F8] ">
      
      <div className="h-[20rem] overflow-scroll lg:overflow-hidden justify-center text-center lg:pr-12 sm:pr-2 lg:pl-12 sm:pl-2 lg:pt-5 pt-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mobile Development </h2>
        <p className="text-gray-600 mb-4 lg:text-lg text-xl">From concept to deployment, our mobile development service is designed to provide you with innovative, reliable, and market-ready mobile solutions. Whether you're aiming to build a customer-facing app or an internal business tool, we ensure your app meets your goals and delivers a superior user experience.</p>
      </div>
      
  </div>
      </div>
      
      {/* Product Designs*/}

      <div className="mx-10 lg:mx-0">
      <div className="bg-white px-2 lg:px-8 pt-6 rounded-lg shadow-lg border-l-8 border-b-8 border-t-4 border-r-4 border-t-[#C823ED] border-r-[#C823ED] border-b-[#89A3F8] border-l-[#89A3F8] ">
      
      <div className=" overflow-scroll lg:overflow-hidden h-[20rem] justify-center text-center lg:pr-12 sm:pr-2 lg:pl-12 sm:pl-2 lg:pt-5 pt-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Designs </h2>
        <p className="text-gray-600 mb-4 lg:text-lg text-xl">Our UI/UX design services aim to combine aesthetics with functionality, delivering a product that not only looks beautiful but also performs flawlessly, meeting both user needs and business objectives. Whether you're launching a new product or redesigning an existing one, our expertise ensures a superior user experience that drives engagement and success</p>
      </div>
      
  </div>
      </div>
    
  
      
      {/* Project Management & development */}

      <div className="mx-10 lg:mx-0">
      <div className="bg-white px-2 lg:px-8 pt-6 rounded-lg shadow-lg border-l-8 border-b-8 border-t-4 border-r-4 border-t-[#C823ED] border-r-[#C823ED] border-b-[#89A3F8] border-l-[#89A3F8] ">
      
      <div className=" overflow-scroll lg:overflow-hidden h-[20rem]  justify-center text-center lg:pr-12 sm:pr-2 lg:pl-12 sm:pl-2  pt-2 lg:pt-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Management & development </h2>
        <p className="text-gray-600 mb-4 lg:text-lg text-lg">Our Custom Software Development service is designed to help businesses gain a competitive edge by leveraging technology that is specifically built to address their unique requirements. Whether you need a new application, an upgrade to an existing system, or seamless integration with other platforms, we deliver solutions that are reliable, scalable, and tailored for success.</p>
      </div>
      
  </div>
  
      </div>
      
    </div>

    <div className='mx-12 justify-center text-center items-center  '> 
      <h1 className=' text-2xl font-bold '>We are trusted by enterprises and startups like:</h1> 
     <img src={Bemfot} alt="" className=' object-cover my-8  w-[10rem] lg:mx-[-1rem] mx-auto' />
     </div>

</div>


    </>






  )
}

export default SoftwareDevelopment;
