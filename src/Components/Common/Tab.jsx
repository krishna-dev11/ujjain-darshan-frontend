// // import React from "react";

// const Tab = ({ tabData, accountType, setaccountType }) => {
//   return (
//     <div className="bg-[#0F0F0F] border border-gray-800 h-12 w-full max-w-[420px] mx-auto rounded-xl flex p-1">
//       {tabData.map((tab) => (
//         <button
//           key={tab.id}
//           onClick={() => setaccountType(tab.type)}
//           className={`flex-1 text-sm font-medium rounded-lg transition-all duration-200
//             ${
//               accountType === tab.type
//                 ? "bg-white text-black shadow-md"
//                 : "text-gray-400 hover:text-white hover:bg-[#1A1A1A]"
//             }
//           `}
//         >
//           {tab.tabName}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Tab;






// import React, { useState } from "react";
// import { Lock, ShieldCheck, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import toast from "react-hot-toast";

// const Tab = ({ tabData, accountType, setaccountType }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [secretKey, setSecretKey] = useState("");

//   // 🚩 DHAN RAKHO: Ye password apne hisab se change kar lena
//   const ADMIN_SECRET = "MAHAKAL_2026"; 

//   const handleTabClick = (type) => {
//     if (type === "Instructor") {
//       setShowModal(true);
//     } else {
//       setaccountType(type);
//     }
//   };

//   const handleVerify = (e) => {
//     e.preventDefault();
//     if (secretKey === ADMIN_SECRET) {
//       setaccountType("Instructor");
//       setShowModal(false);
//       setSecretKey("");
//       toast.success("Identity Verified: Seva Guide Mode Active");
//     } else {
//       toast.error("Incorrect Secret Code!");
//     }
//   };

//   return (
//     <>
//       <div className="bg-[#0F0F0F] border border-gray-800 h-12 w-full max-w-[420px] mx-auto rounded-xl flex p-1 relative z-10">
//         {tabData.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => handleTabClick(tab.type)}
//             className={`flex-1 text-sm font-bold rounded-lg transition-all duration-300 uppercase tracking-widest
//               ${
//                 accountType === tab.type
//                   ? "bg-[#F97316] text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]"
//                   : "text-gray-500 hover:text-white hover:bg-[#1A1A1A]"
//               }
//             `}
//           >
//             {tab.tabName === "Instructor" ? "Guide" : tab.tabName === "Student" ? "Devotee" : tab.tabName}
//           </button>
//         ))}
//       </div>

//       {/* ─── FULL SCREEN SECRET MODAL ─── */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
//           >
//             <motion.div 
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               className="w-full max-w-md bg-[#0A0A0A] border border-[#f97316]/20 p-8 rounded-[3rem] relative shadow-[0_0_100px_rgba(249,115,22,0.1)]"
//             >
//               <button 
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
//               >
//                 <X size={24} />
//               </button>

//               <div className="flex flex-col items-center text-center gap-6">
//                 <div className="w-20 h-20 rounded-full bg-[#f97316]/10 flex items-center justify-center border border-[#f97316]/20">
//                   <Lock className="text-[#f97316] animate-pulse" size={32} />
//                 </div>
                
//                 <div>
//                   <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Identity Required</h3>
//                   <p className="text-gray-500 text-xs mt-2 font-medium tracking-widest uppercase">
//                     Only authorized Shree Ji Guides can access this mode.
//                   </p>
//                 </div>

//                 <form onSubmit={handleVerify} className="w-full space-y-4">
//                   <div className="relative">
//                     <input 
//                       autoFocus
//                       type="password"
//                       value={secretKey}
//                       onChange={(e) => setSecretKey(e.target.value)}
//                       placeholder="ENTER SECRET CODE"
//                       className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-center text-[#f97316] font-black tracking-[0.5em] outline-none focus:border-[#f97316]/50 transition-all"
//                     />
//                   </div>
                  
//                   <button 
//                     type="submit"
//                     className="w-full py-5 bg-[#f97316] text-black font-black rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs shadow-2xl"
//                   >
//                     <ShieldCheck size={18} /> Verify Identity
//                   </button>
//                 </form>

//                 <p className="text-[9px] text-gray-600 font-bold uppercase tracking-[0.2em]">
//                   Security Protocol Active: 256-bit Node Encryption
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Tab;








import React, { useState } from "react";
import { Lock, ShieldCheck, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

const Tab = ({ tabData, accountType, setaccountType }) => {
  const [showModal, setShowModal] = useState(false);
  const [secretKey, setSecretKey] = useState("");

  // 🚩 Updated Secret Key
  const ADMIN_SECRET = "729536749939834"; 

  const handleTabClick = (type) => {
    // Agar user Instructor (Guide) choose karta hai toh modal dikhao
    if (type === "Instructor") {
      setShowModal(true);
    } else {
      setaccountType(type);
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (secretKey === ADMIN_SECRET) {
      setaccountType("Instructor");
      setShowModal(false);
      setSecretKey("");
      toast.success("Identity Verified: Seva Guide Mode Active");
    } else {
      toast.error("Incorrect Secret Code!");
      setSecretKey(""); // Wrong password par input clear kar dega
    }
  };

  return (
    <>
      <div className="bg-[#0F0F0F] border border-gray-800 h-12 w-full max-w-[420px] mx-auto rounded-xl flex p-1 relative z-10">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.type)}
            className={`flex-1 text-sm font-bold rounded-lg transition-all duration-300 uppercase tracking-widest
              ${
                accountType === tab.type
                  ? "bg-[#F97316] text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                  : "text-gray-500 hover:text-white hover:bg-[#1A1A1A]"
              }
            `}
          >
            {tab.tabName === "Instructor" ? "Guide" : tab.tabName === "Student" ? "Devotee" : tab.tabName}
          </button>
        ))}
      </div>

      {/* ─── FULL SCREEN SECRET MODAL ─── */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] translate-y-24 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-md bg-[#0A0A0A] border border-[#f97316]/20 p-8 rounded-[3rem] relative shadow-[0_0_100px_rgba(249,115,22,0.1)]"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-20 h-20 rounded-full bg-[#f97316]/10 flex items-center justify-center border border-[#f97316]/20">
                  <Lock className="text-[#f97316] animate-pulse" size={32} />
                </div>
                
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Identity Required</h3>
                  <p className="text-gray-500 text-xs mt-2 font-medium tracking-widest uppercase">
                    Only authorized Shree Ji Guides can access this mode.
                  </p>
                </div>

                <form onSubmit={handleVerify} className="w-full space-y-4">
                  <div className="relative">
                    <input 
                      autoFocus
                      type="password"
                      value={secretKey}
                      onChange={(e) => setSecretKey(e.target.value)}
                      placeholder="ENTER SECRET CODE"
                      className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-center text-[#f97316] font-black tracking-[0.2em] outline-none focus:border-[#f97316]/50 transition-all placeholder:tracking-normal placeholder:text-[10px]"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-5 bg-[#f97316] text-black font-black rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs shadow-2xl"
                  >
                    <ShieldCheck size={18} /> Verify Identity
                  </button>
                </form>

                <p className="text-[9px] text-gray-600 font-bold uppercase tracking-[0.2em]">
                  Security Protocol Active: 256-bit Node Encryption
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Tab;