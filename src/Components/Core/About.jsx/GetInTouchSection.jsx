// // import React from 'react';
// import { FiMail, FiPhone, FiMapPin, FiArrowUpRight, FiHelpCircle } from "react-icons/fi";
// import ContactForm from './ContactForm';

// // Contact Card Component (Responsive width)
// const ContactInfoCard = ({ icon: Icon, title, detail }) => (
//   <div className="flex items-center justify-between p-4 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.07] transition-all group cursor-pointer w-full">
//     <div className="flex items-center gap-4">
//       <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
//         <Icon className="text-white text-xl" />
//       </div>
//       <div>
//         <p className="text-white font-semibold text-sm mb-0.5">{title}</p>
//         <p className="text-gray-500 text-[11px] md:text-xs font-medium tracking-wide leading-tight">{detail}</p>
//       </div>
//     </div>
//     <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0 ml-2">
//       <FiArrowUpRight size={16} />
//     </div>
//   </div>
// );

// const GetInTouchSection = () => {
//   return (
//     // Main Container: Desktop par row, Mobile par Column
//     <div className='flex flex-col lg:flex-row w-full min-h-screen bg-black overflow-hidden'>

//       {/* --- LEFT SECTION: CONTACT INFO --- */}
//       <div className="relative min-h-[500px] lg:min-h-[600px] w-full lg:w-1/2 text-white flex flex-col justify-center px-6 md:px-10 lg:pl-20 py-16">
        
//         {/* Decorative Background Watermark */}
//         <div className="absolute top-10 right-[-5%] select-none pointer-events-none opacity-10 lg:opacity-100">
//           <h1 className="text-[10rem] md:text-[15rem] lg:text-[18rem] font-bold text-white/[0.03] tracking-widest uppercase leading-none">
//             Contact
//           </h1>
//         </div>

//         {/* Glow Effect */}
//         <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

//         <div className="relative z-10 flex flex-col gap-6">
          
//           {/* Label */}
//           <div className="flex items-center gap-2 px-3 py-1.5 w-fit rounded-full bg-[#111] border border-white/10 shadow-inner">
//             <FiHelpCircle className="text-gray-400" size={14} />
//             <span className="text-[10px] font-bold tracking-widest uppercase text-gray-300">Inquiry Node</span>
//           </div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-1">
//             Get in <span className="text-teal-400">touch</span>
//           </h2>

//           <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[400px] mb-6">
//             Have questions about our spoken English courses? Contact Vijayvargiya's Academy today for confident communication.
//           </p>

//           {/* CONTACT INFO LIST */}
//           <div className="flex flex-col gap-4 max-w-md">
//             <ContactInfoCard 
//               icon={FiMail} 
//               title="Email Synchronization" 
//               detail="vijayvargiyaenglish@gmail.com" 
//             />
//             <ContactInfoCard 
//               icon={FiPhone} 
//               title="Direct Helpline" 
//               detail="+91 98267 05035" 
//             />
//             <ContactInfoCard 
//               icon={FiMapPin} 
//               title="Academy Location" 
//               detail="GDC College Road, Near Hotel Surana Palace, Freeganj, Ujjain (MP)" 
//             />
//           </div>
//         </div>
//       </div>

//       {/* --- RIGHT SECTION: FORM --- */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:pr-20 py-16 bg-white/[0.01] border-t lg:border-t-0 lg:border-l border-white/5">
//         <div className="w-full max-w-[550px]">
//           <ContactForm 
//             heading={"Book Your Free Demo Class"} 
//             description={"Fill the protocol form and our admin node will contact you with batch details and admission process."} 
//           />
//         </div>
//       </div>

//     </div>
//   );
// };

// export default GetInTouchSection;











import React from 'react';
import { FiPhone, FiMapPin, FiArrowUpRight, FiHelpCircle, FiClock, FiSun } from "react-icons/fi";
import ContactForm from './ContactForm';

// Contact Card Component (Optimized for Spiritual Brand)
const ContactInfoCard = ({ icon: Icon, title, detail }) => (
  <div 
    style={{ backgroundColor: '#0A0A0A', borderColor: '#1F2937' }} 
    className="flex items-center justify-between p-5 border rounded-[1.5rem] hover:border-[#F97316]/50 transition-all duration-500 group cursor-pointer w-full backdrop-blur-sm"
  >
    <div className="flex items-center gap-5">
      {/* Icon with Subtle Saffron Glow */}
      <div 
        style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)', borderColor: 'rgba(249, 115, 22, 0.2)' }} 
        className="w-12 h-12 rounded-2xl flex items-center justify-center border group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(249,115,22,0.1)]"
      >
        <Icon style={{ color: '#F97316' }} className="text-xl" />
      </div>
      <div>
        <p style={{ color: '#FFFFFF' }} className="font-bold text-sm mb-1 tracking-tight uppercase tracking-[0.1em]">{title}</p>
        <p style={{ color: '#9CA3AF' }} className="text-[11px] md:text-xs font-medium leading-relaxed">{detail}</p>
      </div>
    </div>
    <div 
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)' }} 
      className="w-9 h-9 rounded-full flex items-center justify-center border group-hover:bg-[#F97316] group-hover:text-black group-hover:border-[#F97316] transition-all duration-500 shrink-0 ml-4 shadow-lg"
    >
      <FiArrowUpRight size={18} />
    </div>
  </div>
);

const GetInTouchSection = () => {
  return (
    <div style={{ backgroundColor: '#000000' }} className='flex flex-col lg:flex-row w-full min-h-screen overflow-hidden font-sans'>

      {/* --- LEFT SECTION: CONTACT INFO --- */}
      <div className="relative min-h-[600px] w-full lg:w-1/2 text-white flex flex-col justify-center px-8 md:px-16 lg:pl-24 py-20">
        
        {/* Divine Background Watermark */}
        <div className="absolute top-[10%] right-[-5%] select-none pointer-events-none">
          <h1 
            style={{ color: 'rgba(255, 255, 255, 0.015)' }} 
            className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-black tracking-tighter uppercase leading-none italic"
          >
            UJJAIN
          </h1>
        </div>

        {/* Dynamic Spiritual Glow Effects */}
        <div 
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)' }} 
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none opacity-60" 
        />
        <div 
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)' }} 
          className="absolute bottom-0 right-0 w-[400px] h-[400px] blur-[120px] rounded-full pointer-events-none" 
        />

        <div className="relative z-10 flex flex-col gap-8">
          
          {/* Label Tag */}
          <div 
            style={{ backgroundColor: '#111111', borderColor: '#333333' }} 
            className="flex items-center gap-2 px-4 py-2 w-fit rounded-full border shadow-inner"
          >
            <FiSun style={{ color: '#F97316' }} size={14} className="animate-spin-slow" />
            <span style={{ color: '#9CA3AF' }} className="text-[10px] font-bold tracking-[0.4em] uppercase">Yatra Assistance Node</span>
          </div>

          <div className="space-y-2">
            <h2 style={{ color: '#FFFFFF' }} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
              Get in <br/> 
              <span 
                style={{ color: '#F97316', filter: 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.3))' }}
              >
                touch
              </span>
            </h2>
          </div>

          <p style={{ color: '#9CA3AF' }} className="text-sm md:text-lg leading-relaxed max-w-[480px] mb-4 font-medium italic">
            Plan your divine journey to Mahakal with Shree Ji Divine Yatra. We are here to assist you with Darshan protocols and sacred rituals.
          </p>

          {/* CONTACT INFO LIST - Updated with Shree Ji Details */}
          <div className="flex flex-col gap-5 max-w-lg">
            <ContactInfoCard 
              icon={FiPhone} 
              title="Direct Helpline" 
              detail="+91 96303 85826" 
            />
            <ContactInfoCard 
              icon={FiMapPin} 
              title="Office Location" 
              detail="House No. 63, Shanti Nagar, Near Radha Krishna Mandir, Ujjain (MP)" 
            />
            <ContactInfoCard 
              icon={FiClock} 
              title="Support Node" 
              detail="24/7 Spiritual Assistance & Live Support" 
            />
          </div>
        </div>
      </div>

      {/* --- RIGHT SECTION: FORM (Luxury Contrast) --- */}
      <div 
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)', borderLeft: '1px solid #1F2937' }} 
        className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:pr-24 py-20 relative"
      >
        {/* Subtle Form Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#F97316]/[0.02] blur-[100px] pointer-events-none" />
        
        <div className="w-full max-w-[600px] relative z-10">
          <ContactForm 
            heading={"Inquire About Yatra Packages"} 
            description={"Fill the protocol form and our guide node will contact you with customized Darshan and Puja schedules."} 
          />
        </div>
      </div>

    </div>
  );
};

export default GetInTouchSection;