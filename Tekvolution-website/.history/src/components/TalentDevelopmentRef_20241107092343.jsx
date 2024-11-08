import React from 'react'
import Recruitment from '../assets/Recuitment.jpg'
import Bemfot from '../assets/Bemfot.png'

const TalentDevelopment = () => {
  return (
    <>
    
     {/* Recruitment Process */}

     <div   className='block sm:flex mx-10 justify-center items-center my-10 lg:gap-5'>
      
      
      <div className=' justify-center text-center mr-[2rem] lg:mr-0 lg:w-1/2'>
            <h2 className='mx-auto text-2xl sm:text-4xl lg:text-4xl font-semibold  ' > Recruit Better</h2> 
            <h2 className='mx-auto text-3xl sm:text-6xl lg:text-6xl font-semibold  ' > Accelerate Growth</h2> 
            <h4 className='mx-auto text-2xl sm:text-4xl lg:text-2xl md:font-light lg:font-light pt-3'> Discover the Power of Smart Hiring <br />
            Let Us Help You Grow!</h4>
            
            </div>

        
            <div className='lg:mx-auto lg:w-1/2'>

            <div className=" mt-8 lg:mx-2">
            <img
              src={Recruitment}
              alt="Image"
              className="object-cover  h-full md:h-full  lg:h-[25rem] w-full rounded-xl"
            />
          </div>

    
        </div>
    </div>
    


{/* OUR RECRUITMENT PROCESSES */}

<div className='justify-center items-center mx-auto'>
    <h1 className='mx-12 mb-[-2rem] text-2xl lg:text-3xl font-bold'> Our Recruitment Process</h1>  

<div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-10 lg:my-20 ">
      
      {/* Client Requirement Gathering */}

      <div className='mx-10 lg:mx-0' >  
        <div className="bg-white px-2 lg:px-8 pt-6  rounded-lg shadow-lg border-l-8 border-b-8 border-t-4 border-r-4 border-t-[#C823ED] border-r-[#C823ED] border-b-[#89A3F8] border-l-[#89A3F8] ">
      
      <div className=" h-[20rem] justify-center text-center lg:pr-12 sm:pr-2 lg:pl-12 sm:pl-2 pt-6 lg:pt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Client Requirement Gathering</h2>
        <p className="text-gray-600 mb-4 text-xl">Our team collaborate with hiring managers to create a detailed job description outlining qualifications, responsibilities, and expectations.
    
  
        </p>
      </div>
      
  </div>   
  </div>
     
      

      {/* Sourcing Top Talents */}

      <div className="mx-10 lg:mx-0">
      <div className="bg-white px-2 lg:px-8 pt-6 rounded-lg shadow-lg border-l-8 border-b-8 border-t-4 border-r-4 border-t-[#C823ED] border-r-[#C823ED] border-b-[#89A3F8] border-l-[#89A3F8] ">
      
      <div className=" h-[20rem] justify-center text-center lg:pr-12 sm:pr-2 lg:pl-12 sm:pl-2 pt-4 lg:pt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sourcing Top Talents </h2>
        <p className="text-gray-600 mb-4 text-xl">Confirming the target candidate profile and understanding your industry preferences, our team uses various channels to quickly attract candidates, including job boards, social media, and referrals.</p>
      </div>
      
  </div>
      </div>
      
      {/* Screening and Shortlisting*/}

      <div className="mx-10 lg:mx-0">
      <div className="bg-white px-2 lg:px-8 pt-6 rounded-lg shadow-lg border-l-8 border-b-8 border-t-4 border-r-4 border-t-[#C823ED] border-r-[#C823ED] border-b-[#89A3F8] border-l-[#89A3F8] ">
      
      <div className=" h-[20rem] justify-center text-center lg:pr-12 sm:pr-2 lg:pl-12 sm:pl-2 lg:pt-10 pt-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Screening and Shortlisting </h2>
        <p className="text-gray-600 mb-4  text-xl">Administer relevant tests or assignments to evaluate candidates' technical skills and problem-solving abilities. Conduct phone or video interviews to assess the candidate’s skills and fit.</p>
      </div>
      
  </div>
      </div>
    
  
      
      {/* Client-Candidate Matching and 
Placement */}

      <div className="mx-10 lg:mx-0">
      <div className="bg-white px-2 lg:px-8 pt-6 rounded-lg shadow-lg border-l-8 border-b-8 border-t-4 border-r-4 border-t-[#C823ED] border-r-[#C823ED] border-b-[#89A3F8] border-l-[#89A3F8] ">
       
      <div className=" h-[20rem] justify-center text-center lg:pr-12 sm:pr-2 lg:pl-12 sm:pl-2 lg:pt-10  pt-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Client-Candidate Matching and 
        Placement </h2>
        <p className="text-gray-600 mb-4 text-xl ">Present the shortlisted candidates to the client and assist with final placement. Gather feedback from both parties after interviews and assist with negotiations, extending job offers, and onboarding the selected candidate</p>
      </div>
          
  </div>
               
  
      </div>


    
    
    </div>


{/* Engage Button  */}
<div className=' lg:ml-[33rem] items-center justify-center lg:mx-auto  mx-[6rem] lg:mt-[-2rem] mt-[-1rem]  '>  
    <button className="bg-[#C823ED] hover:bg-pink-500 text-white mx-auto font-bold py-2 px-10 mb-[2rem] rounded-3xl">
            Find Talent Now
          </button>
     </div>

     <div className='mx-12 '> <h1 className=' text-2xl font-bold text-center'>We are trusted by enterprises and startups like:</h1> 
     <img src={Bemfot} alt="" className=' object-cover my-8  w-[10rem] lg:mx-[-1rem] mx-auto' />
     </div>
 
</div>

    </>
  )
}

export default TalentDevelopment
