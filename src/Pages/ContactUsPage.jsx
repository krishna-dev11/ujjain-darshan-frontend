// // import React, { useState } from 'react'
// import Fotter from '../Components/Common/Fotter'
// import ContactForm from '../Components/Core/About.jsx/ContactForm'
// // import { chat_visit_call } from '../data/Contact-data'
// import * as Icons from "react-icons/fa6"
// import ReviwSlider from '../Components/Core/Home/ReviwSlider'
// import ModernFooter from '../Components/Core/Home/ModernFooter'
// import TestimonialSlider from '../Components/Core/Home/Testimonial/TestimonialSlider'
// import GetInTouchSection from '../Components/Core/About.jsx/GetInTouchSection'

// const ContactUsPage = () => {

//   return (
//     <div className=' w-full  bg-black  '>

//         {/* contact Form  */}
//         <div className=' w-[85%] flex gap-x-10  mx-auto justify-between py-20 '>
           
//          <GetInTouchSection/>




//         </div>

//   {/* section5 slider */}
//      <div className=' bg-richblack-900'>
//      <TestimonialSlider/>
//      </div>        

//         <ModernFooter/>




//     </div>
//   )
// }

// export default ContactUsPage




import React from 'react'
import ModernFooter from '../Components/Core/Home/ModernFooter'
import TestimonialSlider from '../Components/Core/Home/Testimonial/TestimonialSlider'
import GetInTouchSection from '../Components/Core/About.jsx/GetInTouchSection'

const ContactUsPage = () => {
  return (
    <div className='w-full bg-black'>
        {/* Contact Information & Form Section */}
        <div className='w-full mx-auto justify-between'>
           <GetInTouchSection/>
        </div>

        {/* Testimonials / Devotee Reviews */}
        <div className='bg-[#050505] py-20 border-t border-white/5'>
           <div className="max-w-6xl mx-auto px-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                Devotee <span className="text-[#f97316]">Experiences</span>
              </h2>
              <p className="text-gray-500 text-sm mt-2">What pilgrims say about Shree Ji Divine Yatra</p>
           </div>
           <TestimonialSlider/>
        </div>        

        <ModernFooter/>
    </div>
  )
}

export default ContactUsPage