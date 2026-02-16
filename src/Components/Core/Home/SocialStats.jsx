// import React, { useEffect, useRef, useState } from "react";

// const stats = [
//   { count: 22, label: "Years of Experience", display: "22+" },
//   { count: 5000, label: "Students Trained", display: "5000+" },
//   { count: 90, label: "Confidence Improvement Rate", display: "90%" },
//   { count: 100, label: "Practical Speaking Sessions", display: "100%" },
// ];

// const AnimatedCounter = ({ target, display }) => {
//   const [value, setValue] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           let start = 0;
//           const end = target;
//           const duration = 1200;
//           const increment = end / (duration / 16);

//           const counter = setInterval(() => {
//             start += increment;
//             if (start >= end) {
//               setValue(end);
//               clearInterval(counter);
//             } else {
//               setValue(Math.floor(start));
//             }
//           }, 16);

//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);
//   }, [target]);

//   return (
//     <h2 ref={ref} className="text-white text-5xl font-bold">
//       {display}
//     </h2>
//   );
// };

// const SocialStats = () => {
//   return (
//     <div className="relative bg-black py-16 overflow-hidden">
//       {/* DOT GRID BACKGROUND */}
//       <div
//         className="absolute inset-0 opacity-40"
//         style={{
//           backgroundImage: "radial-gradient(#1A1A1A 1px, transparent 1px)",
//           backgroundSize: "24px 24px",
//         }}
//       ></div>

//       {/* CONTENT */}
//       <div className="relative max-w-7xl mx-auto px-8">
//         <div className="flex flex-wrap justify-center gap-6">
//           {stats.map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#0f0f10] border border-white/5 rounded-2xl px-10 py-8 
//               min-w-[220px] text-center transition-all duration-300 
//               hover:bg-[#141415] hover:border-indigo-500/40"
//             >
//               <AnimatedCounter target={item.count} display={item.display} />
//               <p className=" text-richblack-25 text-sm mt-2">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* BOTTOM GLOW LINE */}
//       <div className="absolute bottom-0 left-0 w-full h-[1px] bg-indigo-500/30 blur-[0.5px]"></div>
//     </div>
//   );
// };

// export default SocialStats;









import React, { useEffect, useRef, useState } from "react";

const stats = [
  { count: 5, label: "Years of Spiritual Excellence", display: "5+" },
  { count: 2000, label: "Blessed Pilgrims Served", display: "2000+" },
  { count: 50, label: "Temple Tour Circuits", display: "50+" },
  { count: 100, label: "Devotee Satisfaction Rate", display: "100%" },
];

const AnimatedCounter = ({ target, display }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = target;
          const duration = 1500;
          const increment = end / (duration / 16);

          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              setValue(end);
              clearInterval(counter);
            } else {
              setValue(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
  }, [target]);

  return (
    <h2 ref={ref} style={{ color: '#FFFFFF' }} className="text-5xl md:text-6xl font-black tracking-tighter uppercase">
      {display}
    </h2>
  );
};

const SocialStats = () => {
  return (
    <div style={{ backgroundColor: '#000000' }} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#1F2937 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-center gap-12">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center min-w-[200px] group">
              <AnimatedCounter target={item.count} display={item.display} />
              <div style={{ backgroundColor: '#F97316' }} className="w-8 h-1 my-4 rounded-full transform group-hover:scale-x-150 transition-transform duration-500"></div>
              <p style={{ color: '#6B7280' }} className="text-[10px] font-bold uppercase tracking-[0.3em]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialStats;