// import React from 'react'
// import Hieghlightedtext from '../Components/Core/Home/Hieghlightedtext'
// import QuoteSection from '../Components/Core/About.jsx/QuoteSection'
// import FoundingStory from '../Components/Core/About.jsx/FoundingStory'
// import Grey_whiteBox from '../Components/Core/About.jsx/Grey_whiteBox'
// import Fotter from '../Components/Common/Fotter';
// import ContactForm from '../Components/Core/About.jsx/ContactForm';
// import SocialStats from '../Components/Core/Home/SocialStats';
// import ModernFooter from '../Components/Core/Home/ModernFooter'

// const AboutPage = () => {
//   return (
//     <div className='relative w-full bg-[#000] text-white overflow-x-hidden font-sans m-0 p-0 box-border'>
      
//       {/* Background Watermark - "ENGLISH" */}
//       <div className="absolute top-[5%] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
//         <h1 className="text-[18rem] md:text-[22rem] font-bold text-white/[0.02] tracking-widest uppercase">English</h1>
//       </div>

//       {/* Modern Radial Glows */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

//       {/* Hero Section: The Mission */}
//       <section className='relative z-10 pt-44 pb-16 px-6'>
//         <div className='max-w-6xl mx-auto flex flex-col items-center text-center'>
//           <div className="flex items-center gap-2 px-3 py-1.5 w-fit rounded-full bg-white/5 border border-white/10 mb-8">
//             <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400">Our Vision</span>
//           </div>

//           <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
//             Empowering Your Voice for a <br/>
//             <Hieghlightedtext
//               color="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
//               data="Global Career"
//             />
//           </h2>

// <p className="text-gray-400 text-lg max-w-3xl leading-relaxed mb-20">
//   With more than 22 years of excellence, Vijayvargiya Spoken English Institute focuses on 
//   building confidence, improving communication skills, and helping students speak English 
//   fluently through practical speaking sessions and personality development training.
// </p>

//         </div>
//       </section>

//       {/* Quote & Story */}
//       <section className='relative z-10 bg-black/40 backdrop-blur-md py-16'>
//         <QuoteSection />
//         <div className='max-w-5xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto my-20'></div>
//         <FoundingStory />
//       </section>

//       {/* Bento Grid (English Features) & Stats */}
//       <section className='relative z-10 py-16 flex flex-col gap-40'>
//         <Grey_whiteBox />
        
//         {/* Statistics Section */}
//         <div className="w-full">
//            <SocialStats />
//         </div>
        
//         {/* Contact Form - "Book a Demo" variant */}
//         <div className="max-w-2xl mx-auto w-full px-6">
//           <ContactForm 
//             heading="Book Your Free Demo" 
//             description="Select your preferred batch and start your journey to fluency today." 
//           />
//         </div>
//       </section>
      
//       <ModernFooter/>
//     </div>
//   )
// }

// export default AboutPage










import React from 'react'
import Hieghlightedtext from '../Components/Core/Home/Hieghlightedtext'
import QuoteSection from '../Components/Core/About.jsx/QuoteSection'
import FoundingStory from '../Components/Core/About.jsx/FoundingStory'
import Grey_whiteBox from '../Components/Core/About.jsx/Grey_whiteBox'
import ContactForm from '../Components/Core/About.jsx/ContactForm';
import SocialStats from '../Components/Core/Home/SocialStats';
import ModernFooter from '../Components/Core/Home/ModernFooter'

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: '#000000' }} className='relative w-full text-white overflow-x-hidden font-sans m-0 p-0 box-border'>
      
      {/* Background Watermark - "MAHAKAL" */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
        <h1 style={{ color: 'rgba(255, 255, 255, 0.01)' }} className="text-[18rem] md:text-[22rem] font-bold tracking-widest uppercase leading-none">MAHAKAL</h1>
      </div>

      {/* Modern Saffron Glow */}
      <div style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)' }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] blur-[150px] rounded-full pointer-events-none" />

      {/* Hero Section */}
{/* Hero Section */}
<section className='relative z-10 pt-44 pb-16 px-6'>
  <div className='max-w-6xl mx-auto flex flex-col items-center text-center'>
    <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.1)' }} className="flex items-center gap-2 px-4 py-2 w-fit rounded-full border mb-8">
      <span style={{ color: '#9CA3AF' }} className="text-[10px] font-bold tracking-[0.4em] uppercase">
        About Shree Ji Divine Yatra
      </span>
    </div>

    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] uppercase">
      Your Trusted Darshan <br/>
      <Hieghlightedtext
        color="bg-gradient-to-r from-[#F97316] to-[#FFD700] bg-clip-text text-transparent"
        data="Assistance Partner in Ujjain"
      />
    </h1>

    <p style={{ color: '#9CA3AF' }} className="text-lg md:text-xl max-w-3xl leading-relaxed mb-20 font-light italic">
      Founded in 2021, Shree Ji Divine Yatra provides structured assistance for 
      Mahakal VIP Darshan, Bhasma Aarti coordination, authentic Vedic rituals, 
      Omkareshwar Yatra, and spiritual city tours in Ujjain.  
      <br/><br/>
      With over 2000+ pilgrims guided, our mission is simple — 
      to ensure every devotee experiences a smooth, peaceful, and spiritually fulfilling journey.
    </p>
  </div>
</section>


      {/* Quote & Story */}
      <section style={{ backgroundColor: 'rgba(255,255,255,0.01)' }} className='relative z-10 backdrop-blur-md py-16 border-y border-white/5'>
        <QuoteSection />
        <div style={{ background: 'linear-gradient(to right, transparent, rgba(249,115,22,0.2), transparent)' }} className='max-w-5xl h-px mx-auto my-20'></div>
        <FoundingStory />
      </section>

      {/* Features & Stats */}
      <section className='relative z-10 py-16 flex flex-col gap-40'>
        <Grey_whiteBox />
        
        <div className="w-full border-y border-white/5">
           <SocialStats />
        </div>
        
        {/* Inquiry Form */}
        <div className="max-w-2xl mx-auto w-full px-6 mb-20">
          <ContactForm 
            heading="Plan Your Spiritual Visit" 
            description="Our guide nodes are ready to assist you with personalized darshan slots and ritual schedules." 
          />
        </div>
      </section>
      
      <ModernFooter/>
    </div>
  )
}

export default AboutPage;