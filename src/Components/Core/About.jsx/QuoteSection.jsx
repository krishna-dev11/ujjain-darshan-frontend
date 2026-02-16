// // import { PiQuotesFill } from "react-icons/pi";
// import Hieghlightedtext from "../Home/Hieghlightedtext";

// const QuoteSection = () => {
//   return (
//     <div className="relative z-10 flex flex-col items-center py-20 px-6 max-w-6xl mx-auto text-center">
//       <p className="text-white text-3xl md:text-5xl font-bold leading-[1.3] tracking-tight">
//         "Communication is the foundation of success. At Vijayvargiya Spoken English Institute, 
//         <Hieghlightedtext color="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent px-2" data="global opportunities" />. 
//          we focus on practical speaking, personality development, and confidence building to help 
//         <Hieghlightedtext data="practical conversation" color="text-emerald-400 px-2" /> with 
//         <Hieghlightedtext color="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent px-2" data="real-world confidence" /> 
//          every student express themselves fluently and achieve their goals."
//       </p>
//     </div>
//   );
// };

// export default QuoteSection;











import React from "react";
import Hieghlightedtext from "../Home/Hieghlightedtext";

const QuoteSection = () => {
  return (
    <div className="relative z-10 flex flex-col items-center py-24 px-6 max-w-6xl mx-auto text-center">
      {/* Background Aura Glow */}
      <div className="absolute inset-0 bg-[#F97316]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <p style={{ color: '#FFFFFF' }} className="text-3xl md:text-5xl font-bold leading-[1.3] tracking-tighter uppercase relative z-10">
        "Faith is the light that guides your path. At Shree Ji Divine Yatra, 
        <Hieghlightedtext color="bg-gradient-to-r from-[#F97316] to-[#FFD700] bg-clip-text text-transparent px-3" data="every devotee is a guest of Mahakal" />. 
        We ensure that your spiritual journey to Ujjain is filled with 
        <Hieghlightedtext data="peaceful darshan" color="text-[#F97316] px-2 italic" /> and 
        <Hieghlightedtext color="bg-gradient-to-r from-[#FFFFFF] to-[#9CA3AF] bg-clip-text text-transparent px-2 underline" data="sacred memories" /> 
        through our personalized and divine service protocol."
      </p>
      
      <div className="mt-12 flex items-center gap-4 opacity-30">
          <div className="h-px w-12 bg-white"></div>
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white">Shree Ji Divine Philosophy</span>
          <div className="h-px w-12 bg-white"></div>
      </div>
    </div>
  );
};

export default QuoteSection;