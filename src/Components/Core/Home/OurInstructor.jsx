// import { useState, useEffect } from "react"; // Added useEffect
// import { ChevronLeft, ChevronRight } from "lucide-react";

// /* ─── Keyframes only ─── */
// const GlobalStyles = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

//     @keyframes fadeSlideIn {
//       from { opacity: 0; transform: translateX(-20px); }
//       to   { opacity: 1; transform: translateX(0); }
//     }
//     @keyframes fadeIn {
//       from { opacity: 0; }
//       to   { opacity: 1; }
//     }
//     .anim-slide { animation: fadeSlideIn .6s ease both; }
//     .anim-fade  { animation: fadeIn .8s ease both .2s; }

//     .font-syne { font-family: 'Syne', sans-serif; }
//     .font-dm   { font-family: 'DM Sans', sans-serif; }
//   `}</style>
// );

// /* ─── Concentric Blue Arcs SVG ─── */
// const BlueArcs = () => (
//   <svg
//     viewBox="0 0 520 560"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-full h-full"
//   >
//     <circle cx="260" cy="370" r="230" fill="#3730a3" opacity="0.85" />
//     <circle cx="260" cy="370" r="230" fill="url(#purpleGrad)" />

//     {[260, 290, 320, 350, 380, 410].map((r, i) => (
//       <circle
//         key={i}
//         cx="260"
//         cy="370"
//         r={r}
//         stroke="rgba(99,102,241,0.28)"
//         strokeWidth="1"
//         fill="none"
//       />
//     ))}

//     {[
//       [80, 460], [110, 490], [80, 490], [50, 490],
//       [110, 520], [50, 520], [80, 520],
//     ].map(([cx, cy], i) => (
//       <g key={i}>
//         <line x1={cx - 6} y1={cy} x2={cx + 6} y2={cy} stroke="rgba(129,140,248,0.5)" strokeWidth="1.5" />
//         <line x1={cx} y1={cy - 6} x2={cx} y2={cy + 6} stroke="rgba(129,140,248,0.5)" strokeWidth="1.5" />
//       </g>
//     ))}

//     <circle cx="260" cy="370" r="180" fill="url(#innerGrad)" opacity="0.5" />

//     <defs>
//       <radialGradient id="purpleGrad" cx="40%" cy="35%" r="65%">
//         <stop offset="0%"   stopColor="#6366f1" stopOpacity="0.9" />
//         <stop offset="60%"  stopColor="#4338ca" stopOpacity="0.8" />
//         <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.6" />
//       </radialGradient>
//       <radialGradient id="innerGrad" cx="35%" cy="30%" r="70%">
//         <stop offset="0%"   stopColor="rgba(165,180,252,0.25)" />
//         <stop offset="100%" stopColor="rgba(30,27,75,0)" />
//       </radialGradient>
//     </defs>
//   </svg>
// );

// const NavBtn = ({ onClick, children, disabled }) => (
//   <button
//     onClick={onClick}
//     disabled={disabled}
//     className={`
//       w-12 h-12 rounded-full flex items-center justify-center
//       border border-white/10 font-dm
//       transition-all duration-200
//       ${disabled
//         ? "bg-[#1a1a1a] text-white/20 cursor-not-allowed"
//         : "bg-[#1c1c1c] text-white hover:bg-[#2a2a2a] hover:border-white/25 hover:scale-105 active:scale-95"
//       }
//     `}
//   >
//     {children}
//   </button>
// );

// const B = ({ children }) => (
//   <span className="font-semibold text-white">{children}</span>
// );

// const instructors = [
//   {
//     name: "Manish Vijayvargiya",
//     designation: "Director & Spoken English Expert | 22+ Years Experience",
//     bio: [
//       { text: "Mr. " },
//       { text: "Manish Vijayvargiya", bold: true },
//       { text: " is the founder and director of " },
//       { text: "Vijayvargiya’s Spoken English Institute", bold: true },
//       { text: " with more than " },
//       { text: "22 years of teaching experience", bold: true },
//       { text: ". He has successfully trained thousands of students in spoken English, personality development, and interview preparation." },
//       { text: " His teaching focuses on " },
//       { text: "confidence building, communication skills, and real-life speaking practice", bold: true },
//       { text: ", helping students achieve success in academics, jobs, and professional life." },
//     ],
//   },
//   {
//     name: "Nitu Vijayvargiya",
//     designation: "Handwriting & Communication Skills Expert",
//     bio: [
//       { text: "Mrs. " },
//       { text: "Nitu Vijayvargiya", bold: true },
//       { text: " is an experienced instructor specializing in " },
//       { text: "Hindi English handwriting improvement and language training", bold: true },
//       { text: ". She uses scientific and practical methods to help students improve writing skills, clarity, and presentation." },
//       { text: " She plays a key role in guiding students to overcome hesitation and develop strong communication confidence." },
//     ],
//   },
// ];


// /* ─────────────────────────────────────────────
//    MAIN COMPONENT
// ───────────────────────────────────────────── */
// export default function OurInstructor() {
//   const [idx, setIdx] = useState(0);
//   const instructor = instructors[idx];

//   // ── Auto-loop Functionality ──
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIdx((prevIdx) => (prevIdx + 1) % instructors.length);
//     }, 6000); // Har 3 second me change hoga

//     return () => clearInterval(timer); // Cleanup logic
//   }, []);

//   const handlePrev = () => {
//     setIdx((prev) => (prev === 0 ? instructors.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setIdx((prev) => (prev + 1) % instructors.length);
//   };

//   return (
//     <>
//       <GlobalStyles />

//       <section className="w-full min-h-screen bg-black px-6 sm:px-10 lg:px-16 py-16 font-dm">

//         {/* ── Top header row ── */}
//         <div className="flex items-start justify-between mb-12 max-w-7xl mx-auto">
//           <div className="anim-slide">
//             <h2 className="font-syne font-bold text-white text-5xl lg:text-6xl tracking-tight leading-tight mb-3">
//               Our Instructor
//             </h2>
//             <p className="text-[#9ca3af] font-dm text-base leading-relaxed max-w-lg">
//               Discover brilliance in code with our expert instructors. Passionate mentors dedicated to
//               fueling your coding journey at <span className="text-white font-medium">CodeHelp</span>.
//             </p>
//           </div>

//           <div className="flex items-center gap-3 mt-2 shrink-0">
//             <NavBtn onClick={handlePrev}>
//               <ChevronLeft size={20} />
//             </NavBtn>
//             <NavBtn onClick={handleNext}>
//               <ChevronRight size={20} />
//             </NavBtn>
//           </div>
//         </div>

//         {/* ── Main Bio Card ── */}
//         <div
//           key={idx}
//           className="
//             anim-fade max-w-7xl mx-auto
//             bg-[#0f0f10] rounded-[36px]
//             shadow-[0_0_80px_rgba(99,102,241,0.08),0_32px_64px_rgba(0,0,0,0.6)]
//             border border-white/[0.04]
//             overflow-hidden
//             grid grid-cols-1 lg:grid-cols-2
//           "
//           style={{ minHeight: 480 }}
//         >

//           {/* ──────── LEFT: Image + Arcs ──────── */}
//           <div className="relative flex items-end justify-center overflow-hidden min-h-[360px] lg:min-h-[480px]">
//             <div className="absolute inset-0 bg-[#0a0a12]" />
//             <div className="absolute inset-0 flex items-end justify-center">
//               <div className="w-full h-full">
//                 <BlueArcs />
//               </div>
//             </div>

//             <div className="relative z-10 flex flex-col items-center justify-end h-full pb-0">
//               <div className="w-64 h-80 flex flex-col items-center justify-end gap-2 opacity-30 mb-0">
//                 <div className="w-20 h-20 rounded-full bg-white/30 mb-1" />
//                 <div className="w-52 h-52 rounded-t-[80px] bg-white/20" />
//               </div>
//               <div className="absolute top-1/2 -translate-y-1/2 text-center">
//                 <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/40 text-xs font-mono tracking-widest">
//                   INSERT_INSTRUCTOR_IMAGE_HERE
//                 </div>
//                 <p className="text-white/20 text-[10px] mt-2 font-dm">Use a transparent .png for best results</p>
//               </div>
//             </div>
//           </div>

//           {/* ──────── RIGHT: Bio Text ──────── */}
//           <div className="flex flex-col justify-center px-8 sm:px-12 py-12 lg:py-16">
//             <h3 className="font-syne font-bold text-white text-[2rem] sm:text-[2.4rem] leading-tight tracking-tight mb-2">
//               {instructor.name}
//             </h3>
//             <p className="font-dm text-[#6b7280] font-medium text-base mb-7 tracking-wide">
//               {instructor.designation}
//             </p>

//             <div className="w-12 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent mb-7 rounded-full" />

//             <p className="font-dm text-[#c9d1d9] text-[0.97rem] leading-[1.85] max-w-[540px]">
//               {instructor.bio.map((seg, i) =>
//                 seg.bold ? <B key={i}>{seg.text}</B> : <span key={i}>{seg.text}</span>
//               )}
//             </p>

//             {/* Dot indicator */}
//             <div className="flex items-center gap-2 mt-10">
//               {instructors.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setIdx(i)}
//                   className={`
//                     rounded-full transition-all duration-300
//                     ${i === idx
//                       ? "w-6 h-2 bg-indigo-500"
//                       : "w-2 h-2 bg-white/20 hover:bg-white/40"
//                     }
//                   `}
//                 />
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }






import { useState } from "react";
import FounderImg from "../../../../public/dhruv.png"; // Apni image ka sahi path aur naam likho

/* ─── Divine Styles (Saffron & Gold Theme) ─── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

    @keyframes fadeSlideIn {
      from { opacity: 0; transform: translateX(-20px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    .anim-slide { animation: fadeSlideIn .6s ease both; }
    .anim-fade  { animation: fadeIn .8s ease both .2s; }

    .font-syne { font-family: 'Syne', sans-serif; }
    .font-dm   { font-family: 'DM Sans', sans-serif; }
  `}</style>
);

/* ─── Concentric Saffron Arcs (Spiritual Glow) ─── */
const SaffronArcs = () => (
  <svg viewBox="0 0 520 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="260" cy="370" r="230" fill="#7c2d12" opacity="0.85" />
    <circle cx="260" cy="370" r="230" fill="url(#saffronGrad)" />

    {[260, 290, 320, 350, 380, 410].map((r, i) => (
      <circle key={i} cx="260" cy="370" r={r} stroke="rgba(249,115,22,0.2)" strokeWidth="1" fill="none" />
    ))}

    <defs>
      <radialGradient id="saffronGrad" cx="40%" cy="35%" r="65%">
        <stop offset="0%"   stopColor="#f97316" stopOpacity="0.9" />
        <stop offset="60%"  stopColor="#9a3412" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
      </radialGradient>
    </defs>
  </svg>
);

const B = ({ children }) => (
  <span style={{ color: '#F97316' }} className="font-bold">{children}</span>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT: OUR FOUNDER (Shree Ji)
───────────────────────────────────────────── */
export default function OurInstructor() {
  const founder = {
    name: "Dhruv Vasanwal",
    designation: "Founder & Spiritual Guide | 5+ Years Excellence",
    bio: [
      { text: "With a profound vision to serve the devotees of Mahakal, " },
      { text: "Dhruv Vasanwal", bold: true },
      { text: " established " },
      { text: "Shree Ji Divine Yatra & Darshan", bold: true },
      { text: " in the holy city of Ujjain. Under his leadership, the organization has successfully guided more than " },
      { text: "2000+ pilgrims", bold: true },
      { text: " through seamless spiritual journeys." },
      { text: " His expertise lies in " },
      { text: "Darshan Management, Authentic Vedic Rituals, and Luxury Pilgrimage Logistics", bold: true },
      { text: ", ensuring that every devotee experiences the divine essence of Avantika with peace and comfort." },
    ],
  };

  return (
    <>
      <GlobalStyles />

      <section className="w-full min-h-screen bg-black px-6 sm:px-10 lg:px-16 py-16 font-dm">

        {/* ── Top header row ── */}
        <div className="flex items-start justify-between mb-12 max-w-7xl mx-auto">
          <div className="anim-slide">
            <h2 className="font-syne font-bold text-white text-5xl lg:text-7xl tracking-tighter leading-tight mb-3 uppercase">
              The Guiding <span style={{ color: '#F97316' }}>Light</span>
            </h2>
            <p className="text-[#9ca3af] font-dm text-base leading-relaxed max-w-lg italic">
              Meet the visionary behind <span className="text-white font-medium">Shree Ji Divine Yatra</span>, dedicated to making your spiritual visit to Ujjain a lifetime memory.
            </p>
          </div>
        </div>

        {/* ── Main Founder Card ── */}
        <div
          className="
            anim-fade max-w-7xl mx-auto
            bg-[#0a0a0a] rounded-[48px]
            shadow-[0_0_80px_rgba(249,115,22,0.05),0_32px_64px_rgba(0,0,0,0.8)]
            border border-white/[0.05]
            overflow-hidden
            grid grid-cols-1 lg:grid-cols-2
          "
          style={{ minHeight: 520 }}
        >

{/* ──────── LEFT: Image + Saffron Glow ──────── */}
<div className="relative flex items-end justify-center overflow-hidden min-h-[400px] lg:min-h-[520px]">
  <div className="absolute inset-0 bg-[#050505]" />
  
  {/* Saffron Glow Background */}
  <div className="absolute inset-0 flex items-end justify-center">
    <div className="w-full h-full scale-110 opacity-60">
      <SaffronArcs />
    </div>
  </div>

  {/* ACTUAL CLIENT IMAGE */}
  <div className="relative z-10 flex items-end justify-center h-full">
    <img 
      src={FounderImg} 
      alt="Dhruv Vasanwal" 
      className="w-full max-w-[450px] object-contain transform hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
      style={{ filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.5))" }}
    />
  </div>
</div>

          {/* ──────── RIGHT: Bio Text ──────── */}
          <div className="flex flex-col justify-center px-8 sm:px-14 py-12 lg:py-16">
            <h3 className="font-syne font-bold text-white text-[2.5rem] sm:text-[3.2rem] leading-none tracking-tighter mb-4 uppercase">
              {founder.name}
            </h3>
            <p style={{ color: '#F97316' }} className="font-dm font-black text-xs mb-8 tracking-[0.3em] uppercase">
              {founder.designation}
            </p>

            <div style={{ background: 'linear-gradient(to right, #F97316, transparent)' }} className="w-20 h-[3px] mb-8 rounded-full" />

            <p className="font-dm text-[#d1d5db] text-lg leading-[1.8] max-w-[540px] font-light">
              {founder.bio.map((seg, i) =>
                seg.bold ? <B key={i}>{seg.text}</B> : <span key={i}>{seg.text}</span>
              )}
            </p>

            <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-6">
               <div className="flex flex-col">
                  <span className="text-white text-2xl font-black leading-none">2000+</span>
                  <span className="text-[#6b7280] text-[9px] uppercase tracking-widest mt-1">Yatris Guided</span>
               </div>
               <div className="w-px h-8 bg-white/10"></div>
               <div className="flex flex-col">
                  <span className="text-white text-2xl font-black leading-none">5+</span>
                  <span className="text-[#6b7280] text-[9px] uppercase tracking-widest mt-1">Years Experience</span>
               </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}