import React from 'react'
import Linkdlin from '../assets/Linkdlin.png'
import Instagram from '../assets/Instagram.jpeg'
import X from '../assets/X.png'
import Tekvolution from '../assets/tekvolution.png'

const Footer = () => {
  return (
    <div className='max-w-6xl mx-auto' > 
  {/* Tekvolution Logo */}
  <div className='lg:ml-20 ml-14 '><a href="http://" target="_blank" rel="noopener noreferrer"><img src={ Tekvolution } alt="Techvolution" className='h-[8rem] w-[12rem] object-cover '/></a> </div>
        {/* Footer contents */}
 <div className='max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 leading-9'>
   
     {/* Contact Us */}
      <div className='items-center text-center pb-4 mb-10'>
<h1 className='font-bold text-xl'>Contact Us</h1>
<a href="http://www.info@tekvolution.com.ng" target="_blank" rel="noopener noreferrer">info@tekvolution.com.ng</a>

<div className='flex justify-center items-center '>
  <a href="https://www.linkedin.com/company/tekvolution-ltd/" target="_blank" rel="noopener noreferrer"> <img src= {Linkdlin} alt="Linkdlin" className='h-8 w-8 object-contain pr-2' /></a> 
   <a href="http://" target="_blank" rel="noopener noreferrer"><img src= { Instagram} alt="Instagram" className='h-8 w-8 object-contain pr-2'/></a> 
    <a href="http://" target="_blank" rel="noopener noreferrer"><img src= { X } alt="X" className='h-8 w-8 object-contain pr-2'/></a>
</div>
</div>

{/* Services */}
<div className='items-center text-center pb-4 mb-10'>
<h1 className='font-bold text-xl'>Services</h1>
Software Development <br />
Product Development <br />
Talent Development/outsorcing
</div>
      
    {/* Support */}
    <div className='items-center text-center pb-4 mb-10 '>
<h1 className='font-bold text-xl'>Support</h1>
About Us <br />
FAQ<br />

</div>


    </div>

    </div>


   
  )
}

export default Footer
