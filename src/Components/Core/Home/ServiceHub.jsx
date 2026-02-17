// import React from 'react';
// import { motion } from 'framer-motion';
// // Sahi icons import karein
// import { FiArrowUpRight, FiMap, FiShield, FiSun } from "react-icons/fi";
// import { GiTempleDoor, GiFlame, GiFlowerPot, GiSpotedFlower } from "react-icons/gi";
// import { HiOutlineSparkles } from "react-icons/hi"; // Alternative for rituals

// const ServiceCard = ({ icon: Icon, title, desc, tag, colSpan, bgGlow }) => (
//   <motion.div 
//     whileHover={{ y: -10 }}
//     className={`${colSpan} group relative bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 overflow-hidden flex flex-col justify-between min-h-[280px] transition-all duration-500 hover:border-[#F97316]/40`}
//   >
//     {/* Subtle Glow Background */}
//     <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700 ${bgGlow}`} />
    
//     <div className="relative z-10">
//       <div className="flex justify-between items-start mb-6">
//         <div 
//           style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)' }}
//           className="w-14 h-14 rounded-2xl flex items-center justify-center border group-hover:bg-[#F97316] group-hover:text-black transition-all duration-500 shadow-xl"
//         >
//           <Icon size={28} />
//         </div>
//         <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6B7280] bg-white/5 px-3 py-1 rounded-full border border-white/5">
//           {tag}
//         </span>
//       </div>
      
//       <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-3 leading-none group-hover:text-[#F97316] transition-colors">
//         {title}
//       </h3>
//       <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] font-medium italic">
//         {desc}
//       </p>
//     </div>

//     <div className="relative z-10 flex justify-end mt-4">
//       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
//         <FiArrowUpRight size={20} />
//       </div>
//     </div>
//   </motion.div>
// );

// const ServiceHub = () => {
//   return (
//     <section className="w-full bg-black py-24 px-6 font-sans relative">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 px-4">
//           <div className="max-w-2xl">
//             <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
//               Divine <span style={{ color: '#F97316' }}>Service</span> Protocols
//             </h2>
//             <p className="text-gray-500 mt-6 text-lg font-light italic max-w-lg">
//               Managed by <span className="text-white font-medium">Dhruv Vasanwal</span>, we provide 100% authentic spiritual assistance for your holy pilgrimage.
//             </p>
//           </div>
//           <div className="hidden md:block h-px flex-1 bg-white/10 mb-6 mx-10"></div>
//           <div className="flex flex-col items-end">
//             <span className="text-[#F97316] text-4xl font-black">2000+</span>
//             <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-1">Yatris Blessed</span>
//           </div>
//         </div>

//         {/* Bento Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
//           <ServiceCard 
//             icon={GiTempleDoor}
//             title="VIP Mahakal Darshan"
//             desc="Skip the queues with our pre-synchronized VIP entry protocols for Mahakaleshwar."
//             tag="Priority Access"
//             colSpan="md:col-span-3"
//             bgGlow="bg-[#F97316]"
//           />

//           <ServiceCard 
//             icon={GiFlame}
//             title="Bhasma Aarti Assistance"
//             desc="Complete guidance for booking and witnessing the world-famous morning Bhasma Aarti."
//             tag="Divine Experience"
//             colSpan="md:col-span-3"
//             bgGlow="bg-[#FFD700]"
//           />

//           {/* Corrected Icon: GiFlowerPot use kiya hai rituals ke liye */}
//           <ServiceCard 
//             icon={GiFlowerPot}
//             title="Authentic Rituals"
//             desc="Vedic Kaal Sarp, Mangal Dosh, and Ark Vivah performed by expert Ujjain Pandits."
//             tag="Vedic Puja"
//             colSpan="md:col-span-2"
//             bgGlow="bg-[#F97316]"
//           />

//           <ServiceCard 
//             icon={FiMap}
//             title="Avantika Sightseeing"
//             desc="Explore Kal Bhairav, Harsiddhi, and Sandipani Ashram with expert spiritual guides."
//             tag="Full City Tour"
//             colSpan="md:col-span-2"
//             bgGlow="bg-[#FFFFFF]"
//           />

//           <ServiceCard 
//             icon={FiShield}
//             title="Stay & Logistics"
//             desc="Handpicked hotels near the temple and premium transport for a safe journey."
//             tag="Luxury Support"
//             colSpan="md:col-span-2"
//             bgGlow="bg-[#F97316]"
//           />

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceHub;






// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// // ─── DATA ─────────────────────────────────────────────────────────────────────
// const SERVICES = [
//   {
//     id: 1,
//     tag: "Priority Access",
//     title: "VIP Mahakal\nDarshan",
//     desc: "Skip the queues with our pre-synchronized VIP entry protocols for Mahakaleshwar.",
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Mahakaleshwar_Temple%2C_Ujjain_%282%29.jpg/1280px-Mahakaleshwar_Temple%2C_Ujjain_%282%29.jpg",
//     accent: "#FF6B00",
//     size: "tall",
//     stat: "0 Wait",
//     statLabel: "Queue Time",
//     number: "01",
//   },
//   {
//     id: 2,
//     tag: "Divine Experience",
//     title: "Bhasma Aarti\nAssistance",
//     desc: "Complete guidance for booking and witnessing the world-famous morning Bhasma Aarti.",
//     image: "https://www.mahakaleshwar.nic.in/images/bhasma-arti-2.jpg",
//     accent: "#FFD700",
//     size: "wide",
//     stat: "4 AM",
//     statLabel: "Sacred Hour",
//     number: "02",
//   },
//   {
//     id: 3,
//     tag: "Vedic Puja",
//     title: "Authentic\nRituals",
//     desc: "Vedic Kaal Sarp, Mangal Dosh, and Ark Vivah performed by expert Ujjain Pandits.",
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Puja_items.jpg/1280px-Puja_items.jpg",
//     accent: "#F97316",
//     size: "normal",
//     stat: "12+",
//     statLabel: "Ritual Types",
//     number: "03",
//   },
//   {
//     id: 4,
//     tag: "Spiritual Tour",
//     title: "Avantika\nSightseeing",
//     desc: "Explore Kal Bhairav, Harsiddhi, and Sandipani Ashram with expert spiritual guides.",
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ram_Ghat%2C_Ujjain.jpg/1280px-Ram_Ghat%2C_Ujjain.jpg",
//     accent: "#22D3EE",
//     size: "normal",
//     stat: "7+",
//     statLabel: "Sacred Sites",
//     number: "04",
//   },
//   {
//     id: 5,
//     tag: "Luxury Support",
//     title: "Stay &\nLogistics",
//     desc: "Handpicked hotels near the temple and premium transport for a safe journey.",
//     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
//     accent: "#A78BFA",
//     size: "wide",
//     stat: "5★",
//     statLabel: "Hospitality",
//     number: "05",
//   },
// ];

// // ─── HELPERS ──────────────────────────────────────────────────────────────────
// const useCountUp = (target, duration = 2000, start = false) => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!start) return;
//     let startTime = null;
//     const step = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       setCount(Math.floor(progress * target));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [start, target, duration]);
//   return count;
// };

// // ─── GRAIN OVERLAY ────────────────────────────────────────────────────────────
// const GrainOverlay = () => (
//   <svg style={{ position: 'fixed', top: 0, left: 0, width: 0, height: 0 }}>
//     <filter id="grain">
//       <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
//       <feColorMatrix type="saturate" values="0" />
//       <feBlend in="SourceGraphic" mode="multiply" />
//     </filter>
//   </svg>
// );

// // ─── FLOATING PARTICLE ────────────────────────────────────────────────────────
// const FloatingParticles = () => {
//   const particles = Array.from({ length: 24 }, (_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     size: Math.random() * 3 + 1,
//     delay: Math.random() * 4,
//     duration: Math.random() * 6 + 4,
//   }));

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {particles.map((p) => (
//         <motion.div
//           key={p.id}
//           className="absolute rounded-full"
//           style={{
//             left: `${p.x}%`,
//             top: `${p.y}%`,
//             width: p.size,
//             height: p.size,
//             background: 'radial-gradient(circle, rgba(249,115,22,0.6) 0%, transparent 70%)',
//           }}
//           animate={{
//             y: [0, -30, 0],
//             opacity: [0, 0.8, 0],
//             scale: [0.5, 1.5, 0.5],
//           }}
//           transition={{
//             duration: p.duration,
//             delay: p.delay,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // ─── ORNAMENTAL DIVIDER ───────────────────────────────────────────────────────
// const OmDivider = () => (
//   <div className="flex items-center gap-4 my-2">
//     <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.3))' }} />
//     <span style={{ color: 'rgba(249,115,22,0.7)', fontSize: '1.2rem', fontFamily: 'serif' }}>✦ ॐ ✦</span>
//     <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(249,115,22,0.3), transparent)' }} />
//   </div>
// );

// // ─── STAT BADGE ───────────────────────────────────────────────────────────────
// const StatBadge = ({ value, label, accent }) => (
//   <div
//     className="flex flex-col items-center justify-center px-4 py-2 rounded-2xl"
//     style={{
//       background: `${accent}15`,
//       border: `1px solid ${accent}30`,
//       backdropFilter: 'blur(10px)',
//     }}
//   >
//     <span className="font-black text-white text-xl leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>{value}</span>
//     <span className="text-[9px] uppercase tracking-[0.2em] mt-0.5" style={{ color: `${accent}99` }}>{label}</span>
//   </div>
// );

// // ─── CARD: TALL (Single col, tall) ────────────────────────────────────────────
// const CardTall = ({ service, isHovered, onHover }) => (
//   <motion.div
//     className="relative rounded-[2rem] overflow-hidden cursor-pointer"
//     style={{
//       gridColumn: 'span 1',
//       gridRow: 'span 2',
//       minHeight: '520px',
//       border: isHovered ? `1px solid ${service.accent}60` : '1px solid rgba(255,255,255,0.06)',
//       transition: 'border-color 0.4s ease',
//     }}
//     onHoverStart={() => onHover(service.id)}
//     onHoverEnd={() => onHover(null)}
//     whileHover={{ scale: 1.01 }}
//     transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//   >
//     {/* BG Image */}
//     <div className="absolute inset-0">
//       <motion.img
//         src={service.image}
//         alt={service.title}
//         className="w-full h-full object-cover"
//         animate={{ scale: isHovered ? 1.08 : 1 }}
//         transition={{ duration: 0.7, ease: 'easeOut' }}
//         onError={e => { e.target.style.display='none'; }}
//       />
//       <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.92) 100%)` }} />
//       <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 80% 20%, ${service.accent}20 0%, transparent 60%)` }} />
//     </div>

//     {/* Top Labels */}
//     <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
//       <span
//         className="text-[9px] font-bold uppercase tracking-[0.3em] px-3 py-1.5 rounded-full"
//         style={{ background: `${service.accent}20`, color: service.accent, border: `1px solid ${service.accent}40`, backdropFilter: 'blur(10px)' }}
//       >
//         {service.tag}
//       </span>
//       <span className="text-[11px] font-black" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'Playfair Display', serif" }}>
//         {service.number}
//       </span>
//     </div>

//     {/* Bottom Content */}
//     <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
//       <OmDivider />
//       <h3
//         className="text-3xl font-black text-white uppercase leading-none tracking-tighter mt-3"
//         style={{ fontFamily: "'Playfair Display', serif", whiteSpace: 'pre-line' }}
//       >
//         {service.title}
//       </h3>
//       <p className="text-gray-400 text-xs leading-relaxed mt-2 font-light" style={{ fontFamily: "'Crimson Text', serif", fontStyle: 'italic' }}>
//         {service.desc}
//       </p>
//       <div className="flex items-center justify-between mt-4">
//         <StatBadge value={service.stat} label={service.statLabel} accent={service.accent} />
//         <motion.div
//           className="w-10 h-10 rounded-full flex items-center justify-center"
//           style={{ background: service.accent, color: '#000' }}
//           whileHover={{ rotate: 45 }}
//           transition={{ duration: 0.2 }}
//         >
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//             <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
//           </svg>
//         </motion.div>
//       </div>
//     </div>
//   </motion.div>
// );

// // ─── CARD: WIDE ───────────────────────────────────────────────────────────────
// const CardWide = ({ service, isHovered, onHover }) => (
//   <motion.div
//     className="relative rounded-[2rem] overflow-hidden cursor-pointer"
//     style={{
//       gridColumn: 'span 2',
//       minHeight: '240px',
//       border: isHovered ? `1px solid ${service.accent}60` : '1px solid rgba(255,255,255,0.06)',
//       transition: 'border-color 0.4s ease',
//     }}
//     onHoverStart={() => onHover(service.id)}
//     onHoverEnd={() => onHover(null)}
//     whileHover={{ scale: 1.01 }}
//     transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//   >
//     <div className="absolute inset-0">
//       <motion.img
//         src={service.image}
//         alt={service.title}
//         className="w-full h-full object-cover"
//         animate={{ scale: isHovered ? 1.06 : 1 }}
//         transition={{ duration: 0.7 }}
//         onError={e => { e.target.style.display='none'; }}
//       />
//       <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)' }} />
//       <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 10% 50%, ${service.accent}18 0%, transparent 50%)` }} />
//     </div>

//     <div className="relative z-10 h-full flex items-center p-7 gap-6">
//       <div className="flex-1">
//         <span
//           className="text-[9px] font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-full inline-block mb-3"
//           style={{ background: `${service.accent}20`, color: service.accent, border: `1px solid ${service.accent}40` }}
//         >
//           {service.tag}
//         </span>
//         <h3
//           className="text-2xl md:text-3xl font-black text-white uppercase leading-none tracking-tighter"
//           style={{ fontFamily: "'Playfair Display', serif", whiteSpace: 'pre-line' }}
//         >
//           {service.title}
//         </h3>
//         <p className="text-gray-400 text-xs mt-2 max-w-xs leading-relaxed" style={{ fontFamily: "'Crimson Text', serif", fontStyle: 'italic' }}>
//           {service.desc}
//         </p>
//       </div>
//       <div className="flex flex-col items-end gap-3">
//         <span className="text-[11px] font-black" style={{ color: 'rgba(255,255,255,0.15)', fontFamily: "'Playfair Display', serif" }}>{service.number}</span>
//         <StatBadge value={service.stat} label={service.statLabel} accent={service.accent} />
//         <motion.div
//           className="w-10 h-10 rounded-full flex items-center justify-center"
//           style={{ background: service.accent, color: '#000' }}
//           whileHover={{ rotate: 45 }}
//         >
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//             <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
//           </svg>
//         </motion.div>
//       </div>
//     </div>
//   </motion.div>
// );

// // ─── CARD: NORMAL ─────────────────────────────────────────────────────────────
// const CardNormal = ({ service, isHovered, onHover }) => (
//   <motion.div
//     className="relative rounded-[2rem] overflow-hidden cursor-pointer"
//     style={{
//       gridColumn: 'span 1',
//       minHeight: '240px',
//       border: isHovered ? `1px solid ${service.accent}60` : '1px solid rgba(255,255,255,0.06)',
//       transition: 'border-color 0.4s ease',
//     }}
//     onHoverStart={() => onHover(service.id)}
//     onHoverEnd={() => onHover(null)}
//     whileHover={{ scale: 1.02 }}
//     transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//   >
//     <div className="absolute inset-0">
//       <motion.img
//         src={service.image}
//         alt={service.title}
//         className="w-full h-full object-cover"
//         animate={{ scale: isHovered ? 1.08 : 1 }}
//         transition={{ duration: 0.7 }}
//         onError={e => { e.target.style.display='none'; }}
//       />
//       <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)' }} />
//       <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 90% 10%, ${service.accent}15 0%, transparent 60%)` }} />
//     </div>

//     <div className="absolute top-5 left-5 right-5 flex justify-between z-10">
//       <span
//         className="text-[9px] font-bold uppercase tracking-[0.3em] px-2.5 py-1 rounded-full"
//         style={{ background: `${service.accent}20`, color: service.accent, border: `1px solid ${service.accent}40`, backdropFilter: 'blur(10px)' }}
//       >
//         {service.tag}
//       </span>
//       <span className="text-[11px] font-black" style={{ color: 'rgba(255,255,255,0.15)', fontFamily: "'Playfair Display', serif" }}>{service.number}</span>
//     </div>

//     <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
//       <h3
//         className="text-xl font-black text-white uppercase leading-none tracking-tighter"
//         style={{ fontFamily: "'Playfair Display', serif", whiteSpace: 'pre-line' }}
//       >
//         {service.title}
//       </h3>
//       <p className="text-gray-400 text-xs mt-1.5 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif", fontStyle: 'italic' }}>
//         {service.desc}
//       </p>
//       <div className="flex items-center justify-between mt-3">
//         <StatBadge value={service.stat} label={service.statLabel} accent={service.accent} />
//         <motion.div
//           className="w-9 h-9 rounded-full flex items-center justify-center"
//           style={{ background: `${service.accent}20`, border: `1px solid ${service.accent}40` }}
//           animate={{ borderColor: isHovered ? service.accent : `${service.accent}40` }}
//           whileHover={{ scale: 1.1, background: service.accent, color: '#000' }}
//         >
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isHovered ? service.accent : 'white'} strokeWidth="2.5">
//             <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
//           </svg>
//         </motion.div>
//       </div>
//     </div>
//   </motion.div>
// );

// // ─── HEADER STATS ─────────────────────────────────────────────────────────────
// const HeaderStat = ({ number, suffix = '', label, start }) => {
//   const count = useCountUp(number, 1800, start);
//   return (
//     <div className="flex flex-col">
//       <span
//         className="text-3xl md:text-4xl font-black text-white"
//         style={{ fontFamily: "'Playfair Display', serif" }}
//       >
//         {count}{suffix}
//       </span>
//       <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 mt-0.5">{label}</span>
//     </div>
//   );
// };

// // ─── SCROLLING TICKER ─────────────────────────────────────────────────────────
// const TICKER_ITEMS = [
//   "VIP Darshan", "Bhasma Aarti", "Kaal Sarp Puja", "Mangal Dosh Nivaran",
//   "Ark Vivah", "Mahakal Prasad", "Avantika Yatra", "Panch Kroshi Yatra",
// ];

// const Ticker = () => (
//   <div className="overflow-hidden py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
//     <motion.div
//       className="flex gap-12 whitespace-nowrap"
//       animate={{ x: ['0%', '-50%'] }}
//       transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
//     >
//       {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
//         <span key={i} className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-600 flex items-center gap-4">
//           <span style={{ color: '#F97316', fontSize: '0.5rem' }}>✦</span>
//           {item}
//         </span>
//       ))}
//     </motion.div>
//   </div>
// );

// // ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
// const ServiceHub = () => {
//   const [hoveredId, setHoveredId] = useState(null);
//   const [statsStarted, setStatsStarted] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setStatsStarted(true); },
//       { threshold: 0.2 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const bento = SERVICES;

//   const containerVariants = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
//   };

//   return (
//     <>
//       {/* Google Fonts */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Crimson+Text:ital@0;1&display=swap');
//         body { margin: 0; background: #000; }
//       `}</style>
//       <GrainOverlay />

//       <section
//         ref={sectionRef}
//         className="relative w-full overflow-hidden"
//         style={{
//           background: '#050505',
//           fontFamily: "'Crimson Text', Georgia, serif",
//         }}
//       >
//         {/* Deep ambient background */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
//           <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(255,200,0,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }} />
//         </div>

//         <FloatingParticles />

//         {/* ── TOP EYEBROW ── */}
//         <div className="relative pt-16 pb-0 px-6 md:px-12">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="flex items-center gap-3 mb-8"
//             >
//               <div className="w-8 h-px" style={{ background: '#F97316' }} />
//               <span
//                 className="text-[11px] font-bold uppercase tracking-[0.4em]"
//                 style={{ color: '#F97316', fontFamily: "'Crimson Text', serif" }}
//               >
//                 Mahakal Yatra Services
//               </span>
//               <div className="flex gap-1 ml-2">
//                 {[...Array(3)].map((_, i) => (
//                   <motion.span
//                     key={i}
//                     style={{ width: 4, height: 4, borderRadius: '50%', background: '#F97316', display: 'block', opacity: 0.3 + i * 0.3 }}
//                     animate={{ scale: [1, 1.5, 1], opacity: [0.3 + i * 0.3, 1, 0.3 + i * 0.3] }}
//                     transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
//                   />
//                 ))}
//               </div>
//             </motion.div>

//             {/* ── MAIN HEADER ── */}
//             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12">
//               <motion.div
//                 initial={{ opacity: 0, x: -40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//                 className="max-w-3xl"
//               >
//                 <h1
//                   className="text-[clamp(3rem,8vw,7rem)] font-black text-white uppercase leading-[0.85] tracking-tighter"
//                   style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
//                 >
//                   Divine
//                   <br />
//                   <span
//                     style={{
//                       WebkitTextStroke: '2px #F97316',
//                       color: 'transparent',
//                     }}
//                   >
//                     Service
//                   </span>
//                   <br />
//                   Protocols
//                 </h1>
//                 <p
//                   className="text-gray-500 mt-6 text-lg font-light max-w-lg leading-relaxed"
//                   style={{ fontFamily: "'Crimson Text', serif", fontStyle: 'italic' }}
//                 >
//                   Managed by{' '}
//                   <span className="text-white font-medium not-italic">Dhruv Vasanwal</span>
//                   , we provide 100% authentic spiritual assistance for your holy pilgrimage.
//                 </p>
//               </motion.div>

//               {/* Stats Row */}
//               <motion.div
//                 initial={{ opacity: 0, x: 40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.9, delay: 0.2 }}
//                 className="flex gap-8 lg:flex-col lg:items-end"
//               >
//                 <div
//                   className="flex flex-col sm:flex-row gap-8 p-6 rounded-2xl"
//                   style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
//                 >
//                   <HeaderStat number={2000} suffix="+" label="Yatris Blessed" start={statsStarted} />
//                   <div className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.05)' }} />
//                   <HeaderStat number={12} suffix="+" label="Years of Trust" start={statsStarted} />
//                   <div className="w-px self-stretch hidden sm:block" style={{ background: 'rgba(255,255,255,0.05)' }} />
//                   <HeaderStat number={100} suffix="%" label="Authentic Rituals" start={statsStarted} />
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* ── TICKER ── */}
//         <Ticker />

//         {/* ── BENTO GRID ── */}
//         <div className="relative px-6 md:px-12 py-10">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-3 gap-4"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               style={{ gridAutoRows: 'minmax(240px, auto)' }}
//             >
//               {/* Row 1 + 2: Tall card + 2 normal cards stacked */}
//               <motion.div variants={itemVariants} style={{ gridRow: 'span 2' }}>
//                 <CardTall
//                   service={bento[0]}
//                   isHovered={hoveredId === bento[0].id}
//                   onHover={setHoveredId}
//                 />
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <CardNormal
//                   service={bento[2]}
//                   isHovered={hoveredId === bento[2].id}
//                   onHover={setHoveredId}
//                 />
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <CardNormal
//                   service={bento[3]}
//                   isHovered={hoveredId === bento[3].id}
//                   onHover={setHoveredId}
//                 />
//               </motion.div>

//               {/* Row 2 col 2-3: wide Bhasma Aarti */}
//               <motion.div variants={itemVariants} style={{ gridColumn: 'span 2' }}>
//                 <CardWide
//                   service={bento[1]}
//                   isHovered={hoveredId === bento[1].id}
//                   onHover={setHoveredId}
//                 />
//               </motion.div>

//               {/* Row 3: full wide Stay & Logistics */}
//               <motion.div variants={itemVariants} style={{ gridColumn: 'span 3' }}>
//                 <CardWide
//                   service={bento[4]}
//                   isHovered={hoveredId === bento[4].id}
//                   onHover={setHoveredId}
//                 />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>

//         {/* ── BOTTOM CTA ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 0.8 }}
//           className="relative px-6 md:px-12 pb-16"
//         >
//           <div className="max-w-7xl mx-auto">
//             <div
//               className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-[2rem]"
//               style={{
//                 background: 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(255,215,0,0.04) 100%)',
//                 border: '1px solid rgba(249,115,22,0.15)',
//               }}
//             >
//               <div>
//                 <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 mb-1">Ready for your Yatra?</p>
//                 <h3
//                   className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter"
//                   style={{ fontFamily: "'Playfair Display', serif" }}
//                 >
//                   Har Har Mahadev 🔱
//                 </h3>
//               </div>
//               <div className="flex gap-3">
//                 <motion.button
//                   className="px-6 py-3 rounded-full text-sm font-bold uppercase tracking-[0.2em]"
//                   style={{ background: '#F97316', color: '#000', fontFamily: "'Crimson Text', serif" }}
//                   whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(249,115,22,0.5)' }}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   Book Darshan
//                 </motion.button>
//                 <motion.button
//                   className="px-6 py-3 rounded-full text-sm font-bold uppercase tracking-[0.2em]"
//                   style={{ background: 'transparent', color: '#F97316', border: '1px solid rgba(249,115,22,0.4)', fontFamily: "'Crimson Text', serif" }}
//                   whileHover={{ scale: 1.05, borderColor: '#F97316' }}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   Contact Us
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </section>
//     </>
//   );
// };

// export default ServiceHub;
















// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import vip from "../../../../public/vipDarshan.jpg"
// import BhasmAArti from "../../../../public/bhasmaarti.jpg"
// import Ritual from "../../../../public/ritual.jpg"
// import Sightseeing from "../../../../public/sightseeing.jpg"
// import { useNavigate } from 'react-router-dom';

// // ─── DATA (Updated with Unsplash Images) ───────────────────────────────────────
// const SERVICES = [
//   {
//     id: 1,
//     tag: "Priority Access",
//     title: "VIP Mahakal\nDarshan",
//     desc: "Skip the queues with our pre-synchronized VIP entry protocols for Mahakaleshwar.",
//     image: vip,
//     accent: "#FF6B00",
//     size: "tall",
//     stat: "0 Wait",
//     statLabel: "Queue Time",
//     number: "01",
//     path: "/catalog/महाकाल-दर्शन-सेवा/6991d5121708945635beee63"
//   },
//   {
//     id: 2,
//     tag: "Temple Visit",
//     title: "Ujjain Mandir\nDarshan",
//     desc: "Visit all sacred temples of Ujjain with spiritual guidance.",
//     image: Sightseeing,
//     accent: "#22D3EE",
//     size: "normal",
//     stat: "7+",
//     statLabel: "Sacred Sites",
//     number: "02",
//     path: "/catalog/उज्जैन-मंदिर-दर्शन/6991d5201708945635beee66"
//   },
//   {
//     id: 3,
//     tag: "Divine Yatra",
//     title: "Omkareshwar\nYatra",
//     desc: "Sacred journey to Omkareshwar Jyotirlinga with complete assistance.",
//     image: Sightseeing,
//     accent: "#A78BFA",
//     size: "normal",
//     stat: "1 Day",
//     statLabel: "Holy Visit",
//     number: "03",
//     path: "/catalog/ओंकारेश्वर-यात्रा/6991d52a1708945635beee69"
//   },
//   {
//     id: 4,
//     tag: "Vedic Puja",
//     title: "Special\nRituals",
//     desc: "Authentic rituals by experienced Ujjain Pandits.",
//     image: Ritual,
//     accent: "#F97316",
//     size: "normal",
//     stat: "12+",
//     statLabel: "Ritual Types",
//     number: "04",
//     path: "/catalog/विशेष-पूजा-सेवा/6991d5341708945635beee6c"
//   },
//   {
//     id: 5,
//     tag: "Stay Support",
//     title: "Hotel &\nAccommodation",
//     desc: "Premium hotel and accommodation services near temple.",
//     image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
//     accent: "#FFD700",
//     size: "wide",
//     stat: "5★",
//     statLabel: "Hospitality",
//     number: "05",
//     path: "/catalog/होटल-व-आवास/6991d53d1708945635beee6f"
//   },
//   {
//     id: 6,
//     tag: "Travel Support",
//     title: "Vehicle &\nGuide Service",
//     desc: "Private vehicle and local guide services for smooth darshan.",
//     image: Sightseeing,
//     accent: "#22D3EE",
//     size: "wide",
//     stat: "24/7",
//     statLabel: "Available",
//     number: "06",
//     path: "/catalog/वाहन-व-गाइड-सेवा/6991d5511708945635beee72"
//   },
// ];


// // ─── HELPERS ──────────────────────────────────────────────────────────────────
// const useCountUp = (target, duration = 2000, start = false) => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!start) return;
//     let startTime = null;
//     const step = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       setCount(Math.floor(progress * target));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [start, target, duration]);
//   return count;
// };

// // ─── COMPONENTS ───────────────────────────────────────────────────────────────
// const FloatingParticles = () => (
//   <div className="absolute inset-0 overflow-hidden pointer-events-none">
//     {Array.from({ length: 15 }).map((_, i) => (
//       <motion.div
//         key={i}
//         className="absolute rounded-full"
//         style={{
//           left: `${Math.random() * 100}%`,
//           top: `${Math.random() * 100}%`,
//           width: Math.random() * 3 + 1,
//           height: Math.random() * 3 + 1,
//           background: 'rgba(249,115,22,0.4)',
//         }}
//         animate={{ y: [0, -40, 0], opacity: [0, 0.7, 0] }}
//         transition={{ duration: Math.random() * 5 + 3, repeat: Infinity }}
//       />
//     ))}
//   </div>
// );

// const OmDivider = () => (
//   <div className="flex items-center gap-4 my-2 opacity-50">
//     <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#F97316]" />
//     <span className="text-[#F97316] text-xs">ॐ</span>
//     <div className="flex-1 h-px bg-gradient-to-r from-[#F97316] to-transparent" />
//   </div>
// );

// const StatBadge = ({ value, label, accent }) => (
//   <div className="flex flex-col items-center justify-center px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
//     <span className="font-black text-white text-lg">{value}</span>
//     <span className="text-[8px] uppercase tracking-[0.2em] text-gray-400">{label}</span>
//   </div>
// );

// // ─── CARD COMPONENTS (Shared Logic for Responsiveness) ────────────────────────
// const BentoCard = ({ service, isHovered, onHover, extraClasses = "" }) => (
// <motion.div
//   className={`relative rounded-[2rem] overflow-hidden border border-white/5 group ${extraClasses}`}
//   onHoverStart={() => onHover(service.id)}
//   onHoverEnd={() => onHover(null)}
//   onClick={() => service.path && navigate(service.path)}
//   whileHover={{ y: -5 }}
//   style={{ minHeight: service.size === 'tall' ? '500px' : '260px', cursor: "pointer" }}
// >

//     {/* BG Image */}
//     <div className="absolute inset-0">
//       <motion.img
//         src={service.image}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         alt={service.title}
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
//            style={{ background: `radial-gradient(circle at 50% 50%, ${service.accent}22 0%, transparent 70%)` }} />
//     </div>

//     {/* Content */}
//     <div className="absolute top-5 left-5 right-5 flex justify-between z-10">
//       <span className="text-[8px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white">
//         {service.tag}
//       </span>
//       <span className="text-[10px] font-bold text-white/20">{service.number}</span>
//     </div>

//     <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
//       <OmDivider />
//       <h3 className="text-2xl font-black text-white uppercase tracking-tighter mt-2 leading-none whitespace-pre-line">
//         {service.title}
//       </h3>
//       <p className="text-gray-400 text-xs mt-2 line-clamp-2 font-light italic">
//         {service.desc}
//       </p>
//       <div className="flex items-center justify-between mt-4">
//         <StatBadge value={service.stat} label={service.statLabel} accent={service.accent} />
//         <div style={{ background: service.accent }} className="w-10 h-10 rounded-full flex items-center justify-center text-black">
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
//             <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// const HeaderStat = ({ number, suffix = '', label, start }) => {
//   const count = useCountUp(number, 1800, start);
//   return (
//     <div className="flex flex-col items-center md:items-start">
//       <span className="text-3xl md:text-4xl font-black text-white font-serif">{count}{suffix}</span>
//       <span className="text-[9px] uppercase tracking-widest text-gray-500 mt-1">{label}</span>
//     </div>
//   );
// };

// // ─── MAIN HUB ───────────────────────────────────────────────────────────────
// const ServiceHub = () => {
//   const [hoveredId, setHoveredId] = useState(null);
//   const [statsStarted, setStatsStarted] = useState(false);
//   const sectionRef = useRef(null);

//   const navigate = useNavigate()

//   useEffect(() => {
//     const observer = new IntersectionObserver(([e]) => e.isIntersecting && setStatsStarted(true), { threshold: 0.1 });
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative w-full bg-[#050505] py-20 px-4 md:px-12 overflow-hidden">
//       <FloatingParticles />
      
//       {/* ── HEADER ── */}
//       <div className="max-w-7xl mx-auto mb-16 relative z-10">
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 mb-6">
//           <div className="w-10 h-px bg-[#F97316]" />
//           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F97316]">Elite Yatra Protocols</span>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
//           <div className="max-w-2xl">
//             <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.85] tracking-tighter font-serif">
//               Divine <span className="text-transparent" style={{ WebkitTextStroke: '1px #F97316' }}>Service</span> Hub
//             </h1>
//             <p className="text-gray-500 mt-6 text-base italic font-light">
//               Managed by <span className="text-white font-bold">Dhruv Vasanwal</span>. 
//               Precision-engineered spiritual experiences in the heart of Ujjain.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-auto p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl">
//             <HeaderStat number={2000} suffix="+" label="Pilgrims Guided" start={statsStarted} />
//             <HeaderStat number={5} suffix="+" label="Years Legacy" start={statsStarted} />
//             <HeaderStat number={100} suffix="%" label="Vedic Authenticity" start={statsStarted} />
//           </div>
//         </div>
//       </div>

//       {/* ── BENTO GRID (Responsive Logic) ── */}
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
//           {/* VIP Darshan - Full height on desktop, auto on mobile */}
//           <div className="md:row-span-2">
//             <BentoCard service={SERVICES[0]} isHovered={hoveredId === 1} onHover={setHoveredId} />
//           </div>

//           {/* Authentic Rituals */}
//           <BentoCard service={SERVICES[2]} isHovered={hoveredId === 3} onHover={setHoveredId} />

//           {/* Avantika Sightseeing */}
//           <BentoCard service={SERVICES[3]} isHovered={hoveredId === 4} onHover={setHoveredId} />

//           {/* Bhasma Aarti - Wide on desktop */}
//           <div className="md:col-span-2">
//             <BentoCard service={SERVICES[1]} isHovered={hoveredId === 2} onHover={setHoveredId} />
//           </div>

//           {/* Stay & Logistics - Full wide on desktop */}
//           <div className="md:col-span-3">
//             <BentoCard service={SERVICES[4]} isHovered={hoveredId === 5} onHover={setHoveredId} />
//           </div>

//         </div>
//       </div>

//       {/* ── FOOTER CTA ── */}
//       <motion.div className="max-w-7xl mx-auto mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-[#F97316]/10 to-transparent border border-[#F97316]/20 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
//         <div>
//           <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Ready for your Divine Journey?</h2>
//           <p className="text-gray-500 italic mt-1">Connect with our spiritual coordinators today.</p>
//         </div>
//         <div className="flex gap-4">
//           <button className="px-8 py-4 bg-[#F97316] text-black font-black rounded-full uppercase tracking-widest text-xs hover:scale-105 transition-transform active:scale-95 shadow-[0_0_30px_rgba(249,115,22,0.3)]">Book Inquiry</button>
//           <button onClick={()=>navigate("/catalog/spoken-english/698dbd360f740ee03e024aa7")} className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full uppercase tracking-widest text-xs hover:bg-white/5 transition-all">Support</button>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default ServiceHub;




// // mahakal :- /catalog/महाकाल-दर्शन-सेवा/6991d5121708945635beee63   ujaain darsha :- /catalog/उज्जैन-मंदिर-दर्शन/6991d5201708945635beee66         omkareshwar ;- /catalog/ओंकारेश्वर-यात्रा/6991d52a1708945635beee69   rituals :- /catalog/विशेष-पूजा-सेवा/6991d5341708945635beee6c      hota and avar :- /catalog/होटल-व-आवास/6991d53d1708945635beee6f     vahan vaa gai sevaye :-/catalog/वाहन-व-गाइड-सेवा/6991d5511708945635beee72









import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import vip from "../../../../public/vipDarshan.jpg"
import BhasmAArti from "../../../../public/bhasmaarti.jpg"
import Ritual from "../../../../public/ritual.jpg"
import Sightseeing from "../../../../public/sightseeing.jpg"
import Omkareshwar from "../../../../public/omkareshwatr.jpg"
import { useNavigate } from 'react-router-dom';

// ─── DATA (Updated with Unsplash Images) ───────────────────────────────────────
const SERVICES = [
  {
    id: 1,
    tag: "Priority Access",
    title: "VIP Mahakal\nDarshan",
    desc: "Skip the queues with our pre-synchronized VIP entry protocols for Mahakaleshwar.",
    image: vip,
    accent: "#FF6B00",
    size: "tall",
    stat: "0 Wait",
    statLabel: "Queue Time",
    number: "01",
    path: "/catalog/महाकाल-दर्शन-सेवा/6992ffc85927ac24f82a3e6e"
  },
  {
    id: 2,
    tag: "Divine Experience",
    title: "Bhasma Aarti\nAssistance",
    desc: "Complete guidance for booking and witnessing the world-famous morning Bhasma Aarti.",
    image: BhasmAArti,
    accent: "#FFD700",
    size: "wide",
    stat: "4 AM",
    statLabel: "Sacred Hour",
    number: "02",
    path: "/catalog/महाकाल-दर्शन-सेवा/6991d5121708945635beee63"
  },
  {
    id: 3,
    tag: "Vedic Puja",
    title: "Authentic\nRituals",
    desc: "Vedic Kaal Sarp, Mangal Dosh, and Ark Vivah performed by expert Ujjain Pandits.",
    image: Ritual,
    accent: "#F97316",
    size: "normal",
    stat: "12+",
    statLabel: "Ritual Types",
    number: "03",
    path: "/catalog/विशेष-पूजा-सेवा/699300235927ac24f82a3e77"
  },
  {
    id: 4,
    tag: "Spiritual Tour",
    title: "Avantika\nSightseeing",
    desc: "Explore Kal Bhairav, Harsiddhi, and Sandipani Ashram with expert spiritual guides.",
    image: Sightseeing,
    accent: "#22D3EE",
    size: "normal",
    stat: "7+",
    statLabel: "Sacred Sites",
    number: "04",
    path: "/catalog/उज्जैन-मंदिर-दर्शन/6993000b5927ac24f82a3e71"
  },
  {
    id: 5,
    tag: "Luxury Support",
    title: "Stay &\nLogistics",
    desc: "Handpicked hotels near the temple and premium transport for a safe journey.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    accent: "#A78BFA",
    size: "wide",
    stat: "5★",
    statLabel: "Hospitality",
    number: "05",
    path: "/catalog/होटल-व-आवास/6993002c5927ac24f82a3e7a"
  },
  {
    id: 6,
    tag: "Sacred Yatra",
    title: "Omkareshwar\nYatra",
    desc: "Guided pilgrimage to the divine Omkareshwar Jyotirlinga on the sacred Narmada river.",
    image: Omkareshwar,
    accent: "#34D399",
    size: "normal",
    stat: "1 Day",
    statLabel: "Full Trip",
    number: "06",
    path: "/catalog/ओंकारेश्वर-यात्रा/699300155927ac24f82a3e74"
  },
  {
    id: 7,
    tag: "Transport & Guide",
    title: "Vahan &\nGuide Seva",
    desc: "Premium vehicles and certified spiritual guides for a seamless sacred journey.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
    accent: "#F472B6",
    size: "normal",
    stat: "24/7",
    statLabel: "Available",
    number: "07",
    path: "/catalog/वाहन-व-गाइड-सेवा/699300385927ac24f82a3e7d"
  },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
};

// ─── COMPONENTS ───────────────────────────────────────────────────────────────
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: Math.random() * 3 + 1,
          height: Math.random() * 3 + 1,
          background: 'rgba(249,115,22,0.4)',
        }}
        animate={{ y: [0, -40, 0], opacity: [0, 0.7, 0] }}
        transition={{ duration: Math.random() * 5 + 3, repeat: Infinity }}
      />
    ))}
  </div>
);

const OmDivider = () => (
  <div className="flex items-center gap-4 my-2 opacity-50">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#F97316]" />
    <span className="text-[#F97316] text-xs">ॐ</span>
    <div className="flex-1 h-px bg-gradient-to-r from-[#F97316] to-transparent" />
  </div>
);

const StatBadge = ({ value, label, accent }) => (
  <div className="flex flex-col items-center justify-center px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
    <span className="font-black text-white text-lg">{value}</span>
    <span className="text-[8px] uppercase tracking-[0.2em] text-gray-400">{label}</span>
  </div>
);

// ─── CARD COMPONENTS (Shared Logic for Responsiveness) ────────────────────────
const BentoCard = ({ service, isHovered, onHover, extraClasses = "" }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className={`relative rounded-[2rem] overflow-hidden border border-white/5 group cursor-pointer ${extraClasses}`}
      onHoverStart={() => onHover(service.id)}
      onHoverEnd={() => onHover(null)}
      whileHover={{ y: -5 }}
      onClick={() => navigate(service.path)}
      style={{ minHeight: service.size === 'tall' ? '500px' : '260px' }}
    >
      {/* BG Image */}
      <div className="absolute inset-0">
        <motion.img
          src={service.image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={service.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
             style={{ background: `radial-gradient(circle at 50% 50%, ${service.accent}22 0%, transparent 70%)` }} />
      </div>

      {/* Content */}
      <div className="absolute top-5 left-5 right-5 flex justify-between z-10">
        <span className="text-[8px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white">
          {service.tag}
        </span>
        <span className="text-[10px] font-bold text-white/20">{service.number}</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <OmDivider />
        <h3 className="text-2xl font-black text-white uppercase tracking-tighter mt-2 leading-none whitespace-pre-line">
          {service.title}
        </h3>
        <p className="text-gray-400 text-xs mt-2 line-clamp-2 font-light italic">
          {service.desc}
        </p>
        <div className="flex items-center justify-between mt-4">
          <StatBadge value={service.stat} label={service.statLabel} accent={service.accent} />
          <div style={{ background: service.accent }} className="w-10 h-10 rounded-full flex items-center justify-center text-black">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HeaderStat = ({ number, suffix = '', label, start }) => {
  const count = useCountUp(number, 1800, start);
  return (
    <div className="flex flex-col items-center md:items-start">
      <span className="text-3xl md:text-4xl font-black text-white font-serif">{count}{suffix}</span>
      <span className="text-[9px] uppercase tracking-widest text-gray-500 mt-1">{label}</span>
    </div>
  );
};

// ─── MAIN HUB ───────────────────────────────────────────────────────────────
const ServiceHub = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [statsStarted, setStatsStarted] = useState(false);
  const sectionRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setStatsStarted(true), { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/919630385826", "_blank");
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-[#050505] py-20 px-4 md:px-12 overflow-hidden">
      <FloatingParticles />
      
      {/* ── HEADER ── */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 mb-6">
          <div className="w-10 h-px bg-[#F97316]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#F97316]">Elite Yatra Protocols</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.85] tracking-tighter font-serif">
              Divine <span className="text-transparent" style={{ WebkitTextStroke: '1px #F97316' }}>Service</span> Hub
            </h1>
            <p className="text-gray-500 mt-6 text-base italic font-light">
              Managed by <span className="text-white font-bold">Dhruv Vasanwal</span>. 
              Precision-engineered spiritual experiences in the heart of Ujjain.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-auto p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl">
            <HeaderStat number={2000} suffix="+" label="Pilgrims Guided" start={statsStarted} />
            <HeaderStat number={5} suffix="+" label="Years Legacy" start={statsStarted} />
            <HeaderStat number={100} suffix="%" label="Vedic Authenticity" start={statsStarted} />
          </div>
        </div>
      </div>

      {/* ── BENTO GRID (Responsive Logic) ── */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* VIP Darshan - Full height on desktop, auto on mobile */}
          <div className="md:row-span-2">
            <BentoCard service={SERVICES[0]} isHovered={hoveredId === 1} onHover={setHoveredId} />
          </div>

          {/* Authentic Rituals */}
          <BentoCard service={SERVICES[2]} isHovered={hoveredId === 3} onHover={setHoveredId} />

          {/* Avantika Sightseeing */}
          <BentoCard service={SERVICES[3]} isHovered={hoveredId === 4} onHover={setHoveredId} />

          {/* Bhasma Aarti - Wide on desktop */}
          <div className="md:col-span-2">
            <BentoCard service={SERVICES[1]} isHovered={hoveredId === 2} onHover={setHoveredId} />
          </div>

          {/* Stay & Logistics - Full wide on desktop */}
          <div className="md:col-span-3">
            <BentoCard service={SERVICES[4]} isHovered={hoveredId === 5} onHover={setHoveredId} />
          </div>

          {/* Omkareshwar Yatra */}
          <BentoCard service={SERVICES[5]} isHovered={hoveredId === 6} onHover={setHoveredId} />

          {/* Vahan & Guide Seva - Wide */}
          <div className="md:col-span-2">
            <BentoCard service={SERVICES[6]} isHovered={hoveredId === 7} onHover={setHoveredId} />
          </div>

        </div>
      </div>

      {/* ── FOOTER CTA ── */}
      <motion.div className="max-w-7xl mx-auto mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-[#F97316]/10 to-transparent border border-[#F97316]/20 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Ready for your Divine Journey?</h2>
          <p className="text-gray-500 italic mt-1">Connect with our spiritual coordinators today.</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleWhatsApp}
            className="px-8 py-4 bg-[#F97316] text-black font-black rounded-full uppercase tracking-widest text-xs hover:scale-105 transition-transform active:scale-95 shadow-[0_0_30px_rgba(249,115,22,0.3)]"
          >
            Book Inquiry
          </button>
          <button onClick={() => navigate("/catalog/spoken-english/698dbd360f740ee03e024aa7")} className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full uppercase tracking-widest text-xs hover:bg-white/5 transition-all">Support</button>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceHub;