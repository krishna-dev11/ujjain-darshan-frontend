// // import React from 'react'
// import { Link } from 'react-router-dom'
// import Hieghlightedtext from '../Home/Hieghlightedtext'

// const academyFeatures = [
//   {
//     id: 1,
//     heading1: "Convenient Batches for",
//     heading2: "Every Schedule",
//     description: "Morning and evening batches are available so students and professionals can learn without disturbing their daily routine.",
//     btnText: "View Batches",
//     link: "/courses"
//   },
//   {
//     id: 2,
//     heading1: "Daily Speaking",
//     heading2: "Practice",
//     description: "Students participate in daily conversation sessions to remove hesitation and build confidence."
//   },
//   {
//     id: 3,
//     heading1: "Interview &",
//     heading2: "Personality Training",
//     description: "Special sessions for interview preparation, group discussion, and personality development."
//   },
//   {
//     id: 4,
//     heading1: "Language Lab",
//     heading2: "Learning",
//     description: "Audio-visual language lab sessions to improve pronunciation and listening skills."
//   }
// ];


// const Grey_whiteBox = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {academyFeatures.map((item) => (
//           item.id === 1 ? (
//             <div className="lg:col-span-2 flex flex-col justify-center p-8" key={item.id}>
//               <h3 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight">
//                 {item.heading1} <br/>
//                 <Hieghlightedtext data={item.heading2} color="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent" />
//               </h3>
//               <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md">{item.description}</p>
//               <Link to={item.link}>
//                 <button className="bg-white text-black font-bold py-4 px-10 rounded-2xl hover:bg-gray-200 transition-all w-fit text-xs uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(255,255,255,0.1)]">
//                   {item.btnText}
//                 </button>
//               </Link>
//             </div>
//           ) : (
//             <div key={item.id} className="p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.06] transition-all group">
//               <div className="mb-8">
//                 <p className="text-white text-xl font-bold tracking-tight">{item.heading1}</p>
//                 <p className="text-emerald-400 text-xl font-bold tracking-tight">{item.heading2}</p>
//               </div>
//               <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
//                 {item.description}
//               </p>
//             </div>
//           )
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Grey_whiteBox









import React from 'react'
import { Link } from 'react-router-dom'
import Hieghlightedtext from '../Home/Hieghlightedtext'

const spiritualFeatures = [
  {
    id: 1,
    heading1: "Divine Darshan for",
    heading2: "Every Devotee",
    description: "Whether you seek VIP Mahakal Darshan or local temple tours, we synchronize every detail with your spiritual schedule.",
    btnText: "Explore Packages",
    link: "/services"
  },
  {
    id: 2,
    heading1: "Vedic Ritual",
    heading2: "Authenticity",
    description: "Every Puja and Shanti ritual is conducted by experienced Ujjain Pandits following ancient Vedic protocols."
  },
  {
    id: 3,
    heading1: "Luxury Yatra",
    heading2: "Logistics",
    description: "Premium vehicle support and handpicked hotel accommodations near the temple for a seamless experience."
  },
  {
    id: 4,
    heading1: "Spiritual",
    heading2: "Guided Nodes",
    description: "Expert guides who share the profound history and spiritual significance of Avantika (Ujjain)."
  }
];

const Grey_whiteBox = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {spiritualFeatures.map((item) => (
          item.id === 1 ? (
            <div className="lg:col-span-2 flex flex-col justify-center p-8" key={item.id}>
              <h3 style={{ color: '#FFFFFF' }} className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter uppercase">
                {item.heading1} <br/>
                <Hieghlightedtext data={item.heading2} color="bg-gradient-to-r from-[#F97316] to-[#FFD700] bg-clip-text text-transparent" />
              </h3>
              <p style={{ color: '#9CA3AF' }} className="text-base leading-relaxed mb-10 max-w-md italic">{item.description}</p>
              <Link to={item.link}>
                <button 
                  style={{ backgroundColor: '#FFFFFF', color: '#000000', boxShadow: '0 0 40px rgba(249, 115, 22, 0.2)' }}
                  className="font-bold py-4 px-10 rounded-2xl hover:bg-[#F97316] hover:text-white transition-all w-fit text-[10px] uppercase tracking-[0.2em]"
                >
                  {item.btnText}
                </button>
              </Link>
            </div>
          ) : (
            <div key={item.id} className="p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:border-[#F97316]/30 transition-all duration-500 group">
              <div className="mb-8">
                <p style={{ color: '#FFFFFF' }} className="text-xl font-bold tracking-tight uppercase">{item.heading1}</p>
                <p style={{ color: '#F97316' }} className="text-xl font-bold tracking-tight uppercase">{item.heading2}</p>
              </div>
              <p style={{ color: '#6B7280' }} className="text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default Grey_whiteBox;