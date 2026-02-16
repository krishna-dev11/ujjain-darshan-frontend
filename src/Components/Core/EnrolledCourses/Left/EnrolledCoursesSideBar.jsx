// import React from "react";
// import { useSelector } from "react-redux";
// import { BuyedCoursessidebarLinks } from "../../../../data/dashboard-links";
// import { useNavigate, NavLink } from "react-router-dom";
// import SlideBarButton from "../../DashBoard/LeftPart/SlideBarButton";
// import { FaStore } from "react-icons/fa";
// import { FiUser } from "react-icons/fi";

// const EnrolledCoursesSideBar = () => {
//   const { user } = useSelector((state) => state.profile);
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col h-full bg-[#0a0a0a]  border-r border-[#ffffff]/5 py-8 justify-between">
      
//       {/* ─── TOP: NAVIGATION NODE ─── */}
//       <div className="flex flex-col gap-y-1 px-4">
//         <div className="flex flex-col mb-6 ml-4">
//           <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#4b5563]">Scholar Hub</p>
//           <div className="h-[1px] w-8 bg-[#6A0DAD] mt-1" />
//         </div>

//         <div className="flex flex-col text-white gap-y-2">
//           {BuyedCoursessidebarLinks.map((link, index) => (
//             <SlideBarButton 
//               key={index}
//               path={link.path} 
//               name={link.name} 
//               icon={link.icon} 
//             />
//           ))}
//         </div>
//       </div>

//       {/* ─── BOTTOM: SYSTEM ACTIONS & USER IDENTITY ─── */}
//       <div className="flex flex-col gap-y-6 px-6">
        
//         {/* Market Terminal Button */}
//         <button 
//           onClick={() => navigate("/courses")}
//           className="flex gap-x-3 bg-[#ffffff]/5 border border-[#ffffff]/10 rounded-2xl py-3 justify-center items-center hover:bg-[#10b981] hover:text-[#000000] transition-all group shadow-[0_0_20px_rgba(0,0,0,0.4)]"
//         >
//           <FaStore className="group-hover:scale-110  translate-x-2 text-white  transition-transform" />
//           <p className="text-[10px] font-bold uppercase  text-white tracking-[0.2em]">Visit Academy Store</p>
//         </button>

//         {/* User Identity Node */}
//         <div 
//           className="flex gap-x-3 items-center cursor-pointer p-2.5 rounded-2xl bg-[#ffffff]/[0.02] border border-[#ffffff]/5 hover:border-[#ffffff]/10 hover:bg-[#ffffff]/5 transition-all group"
//           onClick={() => navigate("/dashboard/my-profile")}
//         >
//           <div className="relative shrink-0">
//             {user?.imageUrl ? (
//                <img 
//                  src={user.imageUrl} 
//                  className="w-10 h-10 rounded-xl border border-[#ffffff]/10 object-cover group-hover:border-[#10b981]/50 transition-colors" 
//                  alt="Profile" 
//                />
//             ) : (
//                <div className="w-10 h-10 rounded-xl bg-[#ffffff]/5 flex items-center justify-center border border-[#ffffff]/10">
//                  <FiUser className="text-[#4b5563]" />
//                </div>
//             )}
//             <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#10b981] border-2 border-[#0a0a0a] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
//           </div>

//           <div className="flex flex-col overflow-hidden">
//             <p className="text-xs font-bold text-[#ffffff] uppercase tracking-tighter truncate leading-tight">
//               {user?.firstName || "Unknown"} {user?.lastName || "Node"}
//             </p>
//             <p className="text-[9px] font-bold  text-white uppercase tracking-widest mt-0.5">
//               {user?.accountType || "Guest"} Account
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnrolledCoursesSideBar;





import React from "react";
import { useSelector } from "react-redux";
import { BuyedCoursessidebarLinks } from "../../../../data/dashboard-links";
import { useNavigate } from "react-router-dom";
import SlideBarButton from "../../DashBoard/LeftPart/SlideBarButton";
import { FaStore } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const EnrolledCoursesSideBar = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    // Desktop par fixed width, mobile par auto width ya flexible
    <div className="flex flex-col h-full bg-[#0a0a0a] border-r border-[#ffffff]/5 py-4 md:py-8 justify-between w-full">
      
      {/* ─── TOP: NAVIGATION NODE ─── */}
      <div className="flex flex-col gap-y-1 px-2 md:px-4">
        <div className="flex flex-col mb-4 md:mb-6 ml-2 md:ml-4">
          <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-[#4b5563]">Scholar Hub</p>
          <div className="h-[1px] w-6 md:w-8 bg-[#6A0DAD] mt-1" />
        </div>

        <div className="flex flex-col text-white gap-y-1 md:gap-y-2">
          {BuyedCoursessidebarLinks.map((link, index) => (
            <SlideBarButton 
              key={index}
              path={link.path} 
              name={link.name} 
              icon={link.icon} 
            />
          ))}
        </div>
      </div>

      {/* ─── BOTTOM: SYSTEM ACTIONS & USER IDENTITY ─── */}
      <div className="flex flex-col gap-y-4 md:gap-y-6 px-3 md:px-6 mb-4 md:mb-0">
        
        {/* Market Terminal Button */}
        <button 
          onClick={() => navigate("/courses")}
          className="flex gap-x-2 md:gap-x-3 bg-[#ffffff]/5 border border-[#ffffff]/10 rounded-xl md:rounded-2xl py-2.5 md:py-3 justify-center items-center hover:bg-[#10b981] hover:text-[#000000] transition-all group shadow-lg"
        >
          <FaStore size={14} className="group-hover:scale-110 text-white transition-transform" />
          <p className="text-[8px] md:text-[10px] font-bold uppercase text-white tracking-[0.1em] md:tracking-[0.2em]">Visit Store</p>
        </button>

        {/* User Identity Node */}
        <div 
          className="flex gap-x-2 md:gap-x-3 items-center cursor-pointer p-2 md:p-2.5 rounded-xl md:rounded-2xl bg-[#ffffff]/[0.02] border border-[#ffffff]/5 hover:bg-[#ffffff]/5 transition-all group overflow-hidden"
          onClick={() => navigate("/dashboard/my-profile")}
        >
          <div className="relative shrink-0">
            {user?.imageUrl ? (
               <img 
                 src={user.imageUrl} 
                 className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl border border-[#ffffff]/10 object-cover" 
                 alt="Profile" 
               />
            ) : (
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#ffffff]/5 flex items-center justify-center border border-[#ffffff]/10">
                 <FiUser className="text-[#4b5563]" />
               </div>
            )}
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 md:w-3 md:h-3 bg-[#10b981] border-2 border-[#0a0a0a] rounded-full" />
          </div>

          <div className="flex flex-col overflow-hidden">
            <p className="text-[10px] md:text-xs font-bold text-[#ffffff] uppercase tracking-tighter truncate leading-tight">
              {user?.firstName}
            </p>
            <p className="text-[7px] md:text-[9px] font-bold text-[#4b5563] uppercase tracking-widest truncate">
              {user?.accountType}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCoursesSideBar;