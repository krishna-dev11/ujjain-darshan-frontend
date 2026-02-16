// // import { useState, useEffect } from "react";
// // import { Lock, Sparkles, MoveRight } from "lucide-react";
// // import would from "../../../Utilities/couldVsWould.png"
// // import nervous from "../../../Utilities/nervious.png"
// // import Yellow from "../../../Utilities/yellow.jpg"
// // import Sir from "../../../Utilities/sir-removebg-preview.png"

// // /* ================= Floating Card ================= */
// // const FloatCard = ({ children, className = "", delay = 0, style }) => (


// //   <div
// //     className={`absolute animate-floatCard hidden md:flex ${className}`}
// //     style={{ ...style, animationDelay: `${delay}s` }}
// //   >
// //     {children}
// //   </div>
// // );

// // /* ================= Modern Icons ================= */
// // const Key = ({ label }) => (
// //   <div className="w-12 h-12 flex items-center justify-center rounded-xl font-bold text-gray-700 
// //     bg-gradient-to-br from-white to-gray-200 shadow-[4px_4px_10px_rgba(0,0,0,0.2)] border border-white/20">
// //     {label}
// //   </div>
// // );

// // const GoldenLock = () => (
// //   <div className="relative flex items-center justify-center w-12 h-12">
// //     <div className="absolute inset-0 rounded-full blur-xl bg-yellow-400/30"></div>
// //     <Lock size={28} className="text-yellow-400 drop-shadow-lg" />
// //   </div>
// // );

// // /* ================= Main Component ================= */
// // export default function WebGeneratedHero() {
// //   const [mounted, setMounted] = useState(false);

// //   useEffect(() => {
// //     setMounted(true);
// //   }, []);

// //   return (
// //     <div className="relative w-full min-h-screen flex bg-[#000] text-white items-center justify-center overflow-hidden font-sans">
      
// //       {/* ─── Background Elements ─── */}
// //       <style>{`
// //         @keyframes floatCard {
// //           0%, 100% { transform: translateY(0) rotate(0deg); }
// //           50% { transform: translateY(-20px) rotate(2deg); }
// //         }
// //         @keyframes fadeSlideUp {
// //           from { opacity: 0; transform: translateY(40px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }
// //         .animate-floatCard { animation: floatCard 5s ease-in-out infinite; }
// //         .animate-fadeSlideUp { animation: fadeSlideUp 0.8s ease-out forwards; }
// //       `}</style>

// //       {/* Top Teal Glow - Synced with Contact Page */}
// //       <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

// //       {/* ─── Desktop Floating Elements ─── */}
// //       <FloatCard style={{ top: "15%", left: "15%" }} className="w-20 h-20 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md items-center justify-center">
// //         <GoldenLock />
// //       </FloatCard>

// //       <FloatCard style={{ top: "40%", left: "8%" }} delay={1.5} className="  shadow-2xl items-center justify-center">

// //         <img alt="pixar" className="w-24 rounded-md bg-gradient-to-br from-pink-500 to-purple-600  "  src={nervous}/>
// //       </FloatCard>

// //       <FloatCard style={{ bottom: "12%", left: "18%" }} delay={2.5} className="w-44  overflow-hidden h-40 bg-white/10 border border-white/5 backdrop-blur-2xl rounded-[3rem] flex flex-col items-center justify-center gap-3">
// //           <img alt="sir" src={Sir} />
// //       </FloatCard>

// //       <FloatCard style={{ top: "18%", right: "12%" }} delay={0.8} className="w-32 h-32 bg-indigo-600/20 border border-white/10 rounded-[2.5rem] backdrop-blur-xl items-center justify-center">

// //         <img alt="pixar" className="w-20 bg-indigo-500 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.5)]" src={Yellow}/>
// //       </FloatCard>

// //       <FloatCard style={{ bottom: "15%", right: "10%" }} delay={2} className="w-28 bg-emerald-500/20 border border-white/5 rounded-[3rem] backdrop-blur-xl items-center justify-center">
// //         <div > <img className=" bg-emerald-400 rounded-3xl rotate-12 shadow-[0_0_40px_rgba(52,211,153,0.3)]"  alt="pixar" src={would} /></div>
// //       </FloatCard>

// //       {/* ─── Main Improved Content ─── */}
// //       {mounted && (
// //         <div className="relative z-10 text-center flex flex-col items-center gap-8 max-w-4xl px-6 animate-fadeSlideUp">
          
// //           {/* Top Badge */}
// //           <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
// //             <Sparkles className="text-emerald-400" size={16} />
// //             <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-300">
// //               Transform Your Communication
// //             </span>
// //           </div>

// //           {/* Heading - Improved for English Academy */}
// //           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-white tracking-tighter">
// //             Speak Boldly. <br />
// // <span className="bg-gradient-to-r from-[#10b981] to-[#6A0DAD] bg-clip-text text-transparent font-bold">
// //   Lead Globally.
// // </span>
// //           </h1>

// //           {/* Description - Modern & Punchy */}
// //           <p className="text-gray-400 max-w-2xl text-base md:text-xl leading-relaxed">
// //             Don't just learn grammar—master the art of expression. Join <span className="text-white font-semibold">SpeakSmart Academy</span> to build unshakable confidence and unlock global career opportunities.
// //           </p>

// //           {/* CTA Buttons - Responsive Stacking */}
// //           <div className="flex flex-col sm:flex-row gap-5 mt-4 w-full sm:w-auto">
// //             <button className="group px-10 py-5 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-all active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
// //               Start Speaking  <MoveRight className="group-hover:translate-x-1 transition-transform" />
// //             </button>

// //             <button className="px-10 py-5 border border-white/10 text-white font-bold rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all active:scale-95">
// //               Explore More
// //             </button>
// //           </div>

// //           {/* Trust Indicators */}
// //           <div className="mt-12 pt-8 border-t border-white/5 w-full flex flex-col md:flex-row items-center justify-center gap-8 opacity-50">
// //             <p className="text-[10px] font-bold tracking-widest uppercase">✓ 3000+ Fluent Students</p>
// //             <p className="text-[10px] font-bold tracking-widest uppercase">✓ Expert Mentorship</p>
// //             <p className="text-[10px] font-bold tracking-widest uppercase">✓ Lifetime Community</p>
// //           </div>
// //         </div>
// //       )}

// //     </div>
// //   );
// // }




// import { useState, useEffect } from "react";
// import { Sparkles, MoveRight, Compass, Sun, Heart, MapPin } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// /* ================= Divine Floating Card (Desktop Only) ================= */
// const DivineFloat = ({ children, className = "", delay = 0, style }) => (
//   <motion.div
//     initial={{ y: 0 }}
//     animate={{ y: [-15, 15, -15], rotate: [0, 2, 0] }}
//     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
//     className={`absolute hidden lg:flex ${className}`}
//     style={style}
//   >
//     {children}
//   </motion.div>
// );

// export default function DivineHero() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen flex bg-[#000] text-white items-center justify-center overflow-hidden font-sans">
      
//       {/* ─── 1. DYNAMIC BACKGROUND LAYER ─── */}
//       {/* Glow for Desktop */}
//       <div 
//         style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)' }} 
//         className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[600px] blur-[130px] rounded-full pointer-events-none hidden md:block" 
//       />
      
//       {/* Intense Glow for Mobile Bottom (Unique Animation) */}
//       <motion.div 
//         animate={{ 
//           scale: [1, 1.2, 1],
//           opacity: [0.3, 0.6, 0.3]
//         }}
//         transition={{ duration: 4, repeat: Infinity }}
//         style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)' }} 
//         className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] blur-[80px] rounded-full pointer-events-none md:hidden" 
//       />

//       {/* ─── 2. DESKTOP FLOATING DECOR ─── */}
//       <DivineFloat style={{ top: "15%", left: "10%" }} delay={0}>
//         <div className="p-6 bg-[#0A0A0A] border border-[#f97316]/20 rounded-[2.5rem] backdrop-blur-xl shadow-[0_0_40px_rgba(249,115,22,0.1)]">
//             <Compass size={32} className="text-[#f97316]" />
//         </div>
//       </DivineFloat>

//       <DivineFloat style={{ bottom: "20%", left: "15%" }} delay={2}>
//         <div className="flex flex-col items-center p-5 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
//             <span className="text-2xl font-black italic">2000+</span>
//             <span className="text-[8px] uppercase tracking-widest text-gray-500 font-bold">Happy Yatris</span>
//         </div>
//       </DivineFloat>

//       <DivineFloat style={{ top: "20%", right: "12%" }} delay={1}>
//         <div className="p-6 bg-[#0A0A0A] border border-[#ffd700]/20 rounded-full shadow-[0_0_40px_rgba(255,215,0,0.1)]">
//             <Sun size={32} className="text-[#ffd700]" />
//         </div>
//       </DivineFloat>

//       {/* ─── 3. MAIN CONTENT AREA (MOBILE OPTIMIZED) ─── */}
//       <AnimatePresence>
//         {mounted && (
//           <div className="relative z-10 text-center flex flex-col items-center gap-6 md:gap-10 max-w-5xl px-6">
            
//             {/* Spiritual Badge - Pulsing Animation */}
//             <motion.div 
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-inner"
//             >
//               <div className="relative flex items-center justify-center">
//                 <div className="absolute inset-0 bg-[#f97316]/50 blur-md rounded-full animate-ping" />
//                 <Sparkles className="text-[#f97316] relative z-10" size={14} />
//               </div>
//               <span className="text-[8px] md:text-xs font-black tracking-[0.3em] uppercase text-gray-300">
//                 Ujjain's Premium Darshan Node
//               </span>
//             </motion.div>

//             {/* Majestic Heading - Adaptive Sizing */}
//             <div className="space-y-2 md:space-y-4">
//               <motion.h1 
//                  initial={{ opacity: 0, scale: 0.9 }}
//                  animate={{ opacity: 1, scale: 1 }}
//                  transition={{ duration: 0.8 }}
//                  className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-9xl font-black leading-[1] md:leading-[0.9] text-white tracking-tighter uppercase"
//               >
//                 Divine <br className="md:hidden" />
//                 <span 
//                   style={{ 
//                       backgroundImage: 'linear-gradient(to right, #f97316, #FFFFFF, #ffd700)',
//                       WebkitBackgroundClip: 'text',
//                       backgroundClip: 'text',
//                       color: 'transparent'
//                   }}
//                   className="font-black italic drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]"
//                 >
//                   Mahakal Yatra
//                 </span>
//               </motion.h1>
//             </div>

//             {/* Description - High Readability for Mobile */}
//             <motion.p 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="text-gray-400 max-w-2xl text-xs sm:text-base md:text-xl leading-relaxed font-medium italic opacity-80"
//             >
//               Experience the soul of <span className="text-white font-bold underline decoration-[#f97316]/40 underline-offset-4">Avantika</span>. 
//               From VIP Darshan to sacred rituals, we manage every node of your spiritual journey.
//             </motion.p>

//             {/* CTA Buttons - Glassmorphic Stack for Mobile */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4 md:mt-6 w-full sm:w-auto"
//             >
//               <button 
//                   style={{ backgroundColor: '#fff', color: '#000' }}
//                   className="group px-10 py-4 md:px-12 md:py-5 font-black rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_15px_40px_rgba(255,255,255,0.15)] hover:bg-[#f97316] hover:text-white"
//               >
//                 START YATRA <MoveRight className="group-hover:translate-x-2 transition-transform" />
//               </button>

//               <button className="px-10 py-4 md:px-12 md:py-5 border border-white/10 text-white font-black rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all active:scale-95 uppercase tracking-widest text-[10px] md:text-xs">
//                 Inquire Now
//               </button>
//             </motion.div>

//             {/* Trust Indicators - Horizontal Scroll/Wrap optimized */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8 }}
//               className="mt-8 md:mt-16 pt-8 md:pt-10 border-t border-white/5 w-full flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-4 opacity-40"
//             >
//               <div className="flex items-center gap-2">
//                   <Heart size={12} className="text-[#f97316]" />
//                   <p className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase">2000+ Blessed Souls</p>
//               </div>
//               <div className="flex items-center gap-2">
//                   <MapPin size={12} className="text-[#ffd700]" />
//                   <p className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase italic">Ujjain (MP)</p>
//               </div>
//               <p className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase hidden sm:block">✓ 5+ Years Legacy</p>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>

//       {/* ─── 4. MOBILE DECORATIVE MESH (NON-BASIC) ─── */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none md:hidden">
//         <div style={{ backgroundImage: 'radial-gradient(#f97316 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} className="w-full h-full" />
//       </div>
//     </div>
//   );
// }













import { useState, useEffect } from "react";
import { Sparkles, MoveRight, Compass, Sun, Heart, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Navigation ke liye

/* ================= Divine Floating Card (Desktop Only) ================= */
const DivineFloat = ({ children, className = "", delay = 0, style }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-15, 15, -15], rotate: [0, 2, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute hidden lg:flex ${className}`}
    style={style}
  >
    {children}
  </motion.div>
);

export default function DivineHero() {
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate(); // Hook initialization

  useEffect(() => {
    setMounted(true);
  }, []);

  // WhatsApp Handler
  const handleWhatsAppInquiry = () => {
    const phoneNumber = "919630385826";
    const message = `*जय महाकाल!* 🙏\n\nमुझे श्री जी डिवाइन यात्रा की सेवाओं के बारे में जानकारी चाहिए। कृपया मेरी बुकिंग के लिए मार्गदर्शन करें।`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="relative w-full min-h-screen flex bg-[#000] text-white items-center justify-center overflow-hidden font-sans">
      
      {/* ─── 1. DYNAMIC BACKGROUND LAYER ─── */}
      <div 
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)' }} 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[600px] blur-[130px] rounded-full pointer-events-none hidden md:block" 
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)' }} 
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] blur-[80px] rounded-full pointer-events-none md:hidden" 
      />

      {/* ─── 2. DESKTOP FLOATING DECOR ─── */}
      <DivineFloat style={{ top: "15%", left: "10%" }} delay={0}>
        <div className="p-6 bg-[#0A0A0A] border border-[#f97316]/20 rounded-[2.5rem] backdrop-blur-xl shadow-[0_0_40px_rgba(249,115,22,0.1)]">
            <Compass size={32} className="text-[#f97316]" />
        </div>
      </DivineFloat>

      <DivineFloat style={{ bottom: "20%", left: "15%" }} delay={2}>
        <div className="flex flex-col items-center p-5 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
            <span className="text-2xl font-black italic">2000+</span>
            <span className="text-[8px] uppercase tracking-widest text-gray-500 font-bold">Happy Yatris</span>
        </div>
      </DivineFloat>

      <DivineFloat style={{ top: "20%", right: "12%" }} delay={1}>
        <div className="p-6 bg-[#0A0A0A] border border-[#ffd700]/20 rounded-full shadow-[0_0_40px_rgba(255,215,0,0.1)]">
            <Sun size={32} className="text-[#ffd700]" />
        </div>
      </DivineFloat>

      {/* ─── 3. MAIN CONTENT AREA (MOBILE OPTIMIZED) ─── */}
      <AnimatePresence>
        {mounted && (
          <div className="relative z-10 text-center flex flex-col items-center gap-6 md:gap-10 max-w-5xl px-6">
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-inner"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[#f97316]/50 blur-md rounded-full animate-ping" />
                <Sparkles className="text-[#f97316] relative z-10" size={14} />
              </div>
              <span className="text-[8px] md:text-xs font-black tracking-[0.3em] uppercase text-gray-300">
                Ujjain's Premium Darshan Node
              </span>
            </motion.div>

            <div className="space-y-2 md:space-y-4">
              <motion.h1 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-9xl font-black leading-[1] md:leading-[0.9] text-white tracking-tighter uppercase"
              >
                Divine <br className="md:hidden" />
                <span 
                  style={{ 
                      backgroundImage: 'linear-gradient(to right, #f97316, #FFFFFF, #ffd700)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                  }}
                  className="font-black italic drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                >
                  Mahakal Yatra
                </span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 max-w-2xl text-xs sm:text-base md:text-xl leading-relaxed font-medium italic opacity-80"
            >
              Experience the soul of <span className="text-white font-bold underline decoration-[#f97316]/40 underline-offset-4">Avantika</span>. 
              From VIP Darshan to sacred rituals, we manage every node of your spiritual journey.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4 md:mt-6 w-full sm:w-auto"
            >
              <button 
                  onClick={() => navigate("/catalog/महाकाल-दर्शन-सेवा/6991d5121708945635beee63")} // Direct Link Navigation
                  style={{ backgroundColor: '#fff', color: '#000' }}
                  className="group px-10 py-4 md:px-12 md:py-5 font-black rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_15px_40px_rgba(255,255,255,0.15)] hover:bg-[#f97316] hover:text-white"
              >
                START YATRA <MoveRight className="group-hover:translate-x-2 transition-transform" />
              </button>

              <button 
                onClick={handleWhatsAppInquiry} // WhatsApp Integration
                className="px-10 py-4 md:px-12 md:py-5 border border-white/10 text-white font-black rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all active:scale-95 uppercase tracking-widest text-[10px] md:text-xs"
              >
                Inquire Now
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 md:mt-16 pt-8 md:pt-10 border-t border-white/5 w-full flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-4 opacity-40"
            >
              <div className="flex items-center gap-2">
                  <Heart size={12} className="text-[#f97316]" />
                  <p className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase">2000+ Blessed Souls</p>
              </div>
              <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-[#ffd700]" />
                  <p className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase italic">Ujjain (MP)</p>
              </div>
              <p className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase hidden sm:block">✓ 5+ Years Legacy</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none md:hidden">
        <div style={{ backgroundImage: 'radial-gradient(#f97316 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} className="w-full h-full" />
      </div>
    </div>
  );
}