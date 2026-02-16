// import React from 'react';
// import { Mic, Users, BookOpen, Presentation } from 'lucide-react';

// /* ─── Feature Link Component ─── */
// const SocialLink = ({ icon: Icon, label, color, textColor }) => (
//   <div className="flex flex-col items-center group cursor-pointer">
    
//     {/* Circular Icon */}
//     <div className="w-24 h-24 rounded-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2">
//       <Icon size={42} color={color} strokeWidth={1.5} />
//     </div>
    
//     {/* Label */}
//     <div className="flex items-center gap-2">
//       {/* <ExternalLink size={18} className={textColor} /> */}
//       <span className={`text-xl font-bold ${textColor}`}>{label}</span>
//     </div>
//   </div>
// );

// export default function CodingFamily() {

//   const socialPlatforms = [
//     { icon: Mic, label: 'Daily Speaking Practice', color: '#EF4444', textColor: 'text-red-600' },
//     { icon: Users, label: 'Group Discussion & Debates', color: '#3B82F6', textColor: 'text-blue-600' },
//     { icon: BookOpen, label: 'Language Lab Sessions', color: '#10B981', textColor: 'text-emerald-600' },
//     { icon: Presentation, label: 'Interview Preparation', color: '#8B5CF6', textColor: 'text-purple-600' },
//   ];

//   return (
//     <section className="w-full bg-white py-24 px-6 font-sans">
//       <div className="max-w-6xl mx-auto text-center">
        
//         {/* Heading */}
//         <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
//           Join Our English Learning Family
//         </h2>

//         {/* Description */}
//         <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-20">
//           Become a part of Vijayvargiya’s Spoken English Institute and build confidence in speaking, 
//           personality development, and communication skills through practical learning methods.
//         </p>

//         {/* Features Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 items-center justify-center">
//           {socialPlatforms.map((platform, index) => (
//             <SocialLink 
//               key={index}
//               icon={platform.icon}
//               label={platform.label}
//               color={platform.color}
//               textColor={platform.textColor}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }





import React from 'react';
import { Sun, Map, Tent, Sparkles } from 'lucide-react';

/* ─── Feature Link Component (Spiritual Edition) ─── */
const DivineFeature = ({ icon: Icon, label, color }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    
    {/* Circular Icon with Spiritual Glow */}
    <div 
      style={{ backgroundColor: '#0A0A0A', borderColor: 'rgba(249, 115, 22, 0.2)' }}
      className="w-24 h-24 rounded-full border-2 flex items-center justify-center mb-6 transition-all duration-500 group-hover:-translate-y-3 group-hover:border-[#F97316] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] shadow-2xl"
    >
      <Icon size={40} style={{ color: color }} strokeWidth={1.5} />
    </div>
    
    {/* Label */}
    <div className="flex flex-col items-center gap-1">
      <span style={{ color: '#FFFFFF' }} className="text-lg font-bold uppercase tracking-tighter text-center group-hover:text-[#F97316] transition-colors">
        {label}
      </span>
      <div style={{ backgroundColor: color }} className="h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full" />
    </div>
  </div>
);

export default function SpiritualFamily() {

  const yatraFeatures = [
    { icon: Sun, label: 'VIP Mahakal Darshan', color: '#F97316' }, // Saffron
    { icon: Sparkles, label: 'Authentic Vedic Puja', color: '#FFD700' }, // Gold
    { icon: Map, label: 'Ujjain City Tours', color: '#F97316' }, // Saffron
    { icon: Tent, label: 'Luxury Stay Support', color: '#FFD700' }, // Gold
  ];

  return (
    <section style={{ backgroundColor: '#000000' }} className="w-full py-28 px-6 font-sans relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#F97316]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Heading */}
        <h2 style={{ color: '#FFFFFF' }} className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
          Join Our <span style={{ color: '#F97316' }}>Divine Yatra</span> Family
        </h2>

        {/* Description */}
        <p style={{ color: '#9CA3AF' }} className="text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-20 italic font-light">
          Become a part of Shree Ji Divine Yatra & Darshan. Experience the soul of Ujjain through 
          perfectly managed spiritual protocols and sacred rituals designed for the true devotee.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-10 items-start justify-center">
          {yatraFeatures.map((feature, index) => (
            <DivineFeature 
              key={index}
              icon={feature.icon}
              label={feature.label}
              color={feature.color}
            />
          ))}
        </div>

      </div>
    </section>
  );
}