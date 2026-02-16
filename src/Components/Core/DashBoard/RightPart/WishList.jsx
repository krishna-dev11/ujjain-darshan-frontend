// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Table, Tbody, Tr, Td } from "react-super-responsive-table";
// import { RiDeleteBin5Line } from "react-icons/ri";
// // import { buyCourse } from "../../../../Services.jsx/Operations/PaymentAPI";
// import { useNavigate } from "react-router-dom";
// import { RemovedCousefromTheCart } from "../../../../Services.jsx/Operations/CartAPI";
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

// const WishList = () => {
//   const { token } = useSelector((state) => state.auth);
//   const { user } = useSelector((state) => state.profile);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [totalAmount, setTotalAmount] = useState(0);
//   const [courseIds, setCourseIds] = useState([]);

//   useEffect(() => {
//     if (!user?.cart) return;

//     const total = user.cart.reduce((acc, course) => acc + Number(course.price), 0);
//     setTotalAmount(total);

//     const ids = user.cart.map((course) => course._id);
//     setCourseIds(ids);
//   }, [user]);

//   // const handleBuyCartCourses = async () => {
//   //   if (!token || courseIds.length === 0) return;
//   //   await buyCourse(token, courseIds, totalAmount, user, navigate, dispatch);
//   // };

//   const handleRemoveCourseFromCart = (id) => {
//     dispatch(RemovedCousefromTheCart(id, user._id, token));
//   };

//   return (
//     <div className="min-h-screen bg-[#000] text-white p-6 md:p-12 font-sans">

//       {/* HEADER */}
//       <div className="mb-12">
//         <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
//           Dashboard / Wishlist
//         </p>
//         <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3">
//           My <span className="text-yellow-400">Wishlist</span>
//         </h2>
//         <p className="text-gray-400 text-sm font-medium tracking-wide">
//           {user?.cart?.length || 0} Courses Saved for Later
//         </p>
//       </div>

//       {/* MAIN GRID */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative items-start">

//         {/* COURSES TABLE SECTION */}
//         <div className="lg:col-span-2 bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-xl shadow-2xl">
//           {!user?.cart?.length ? (
//             <div className="p-20 flex flex-col items-center justify-center gap-4 text-gray-500">
//               <RiDeleteBin5Line size={40} className="opacity-50" />
//               <p className="text-lg font-medium tracking-wide">Your Wishlist is Empty</p>
//               <button onClick={() => navigate('/courses')} className="mt-4 px-6 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition text-sm font-bold tracking-wide">
//                 Browse Courses
//               </button>
//             </div>
//           ) : (
//             <Table className="w-full">
//               <Tbody>
//                 {user.cart.map((course, index) => (
//                   <Tr key={course._id} className={`border-b border-white/5 hover:bg-white/[0.02] transition-all duration-300 ${index === user.cart.length - 1 ? 'border-none' : ''}`}>
                    
//                     {/* IMAGE & INFO */}
//                     <Td className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
//                       <img
//                         src={course.thumbnail}
//                         className="w-full md:w-48 h-32 object-cover rounded-2xl shadow-lg"
//                         alt="course thumbnail"
//                       />
//                       <div className="flex flex-col gap-2">
//                         <p className="font-bold text-xl tracking-tight">{course.courseName}</p>
//                         <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
//                           {course.courseDescription}
//                         </p>
//                          <div className="flex gap-2 mt-2">
//                             <span className="text-[10px] font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full text-gray-400">
//                                {course.category?.name || "Development"}
//                             </span>
//                          </div>
//                       </div>
//                     </Td>

//                     {/* ACTION & PRICE */}
//                     <Td className="p-6 md:p-8 text-right">
//                       <div className="flex flex-col gap-6 items-end h-full justify-between">
                        
//                         <button
//                           onClick={() => handleRemoveCourseFromCart(course._id)}
//                           className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors group px-4 py-2 rounded-lg hover:bg-red-500/10"
//                         >
//                           <RiDeleteBin5Line className="group-hover:scale-110 transition-transform" />
//                           <span className="text-sm font-bold tracking-wide">Remove</span>
//                         </button>

//                         <div className="flex flex-col items-end">
//                           <p className="text-3xl font-bold text-yellow-400 tracking-tight">
//                             ₹ {course.price}
//                           </p>
//                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">One-time Payment</p>
//                         </div>

//                       </div>
//                     </Td>

//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>
//           )}
//         </div>

//         {/* TOTAL CARD SUMMARY */}
//         <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-10 h-fit sticky top-12 backdrop-blur-xl shadow-2xl lg:col-span-1">
          
//           <div className="flex items-center gap-3 mb-8">
//              <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
//              <h3 className="text-lg font-bold tracking-tight uppercase">Order Summary</h3>
//           </div>

//           <div className="space-y-4 mb-8">
//             <div className="flex justify-between items-center">
//                <p className="text-gray-400 text-sm font-medium">Subtotal</p>
//                <p className="text-white font-bold">₹ {totalAmount}</p>
//             </div>
//             <div className="flex justify-between items-center pb-4 border-b border-white/10">
//                <p className="text-gray-400 text-sm font-medium">Tax & Fees</p>
//                <p className="text-white font-bold">₹ 0</p>
//             </div>
//              <div className="flex justify-between items-center">
//                <p className="text-white text-lg font-bold">Total Amount</p>
//                <p className="text-4xl font-bold text-yellow-400 tracking-tight">₹ {totalAmount}</p>
//             </div>
//           </div>

//           {/* <button
//             disabled={!totalAmount}
//             onClick={handleBuyCartCourses}
//             className="w-full py-5 bg-yellow-400 text-black font-black rounded-2xl hover:bg-yellow-300 transition-all transform active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-[0.2em] text-sm"
//           >
//             Checkout Now
//           </button>
           
//            <p className="text-center text-gray-500 text-xs mt-6 font-medium tracking-wide">
//               Secure 256-bit SSL Encrypted Payment
//            </p> */}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default WishList;












// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Table, Tbody, Tr, Td } from "react-super-responsive-table";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";
// import { RemovedCousefromTheCart } from "../../../../Services.jsx/Operations/CartAPI";
// import { FiSun, FiMapPin, FiClock } from "react-icons/fi";
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

// const WishList = () => {
//   const { token } = useSelector((state) => state.auth);
//   const { user } = useSelector((state) => state.profile);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [totalAmount, setTotalAmount] = useState(0);
//   const [courseIds, setCourseIds] = useState([]);

//   useEffect(() => {
//     if (!user?.cart) return;

//     const total = user.cart.reduce((acc, course) => acc + Number(course.price), 0);
//     setTotalAmount(total);

//     const ids = user.cart.map((course) => course._id);
//     setCourseIds(ids);
//   }, [user]);

//   const handleRemoveCourseFromCart = (id) => {
//     dispatch(RemovedCousefromTheCart(id, user._id, token));
//   };

//   return (
//     <div className="min-h-screen bg-[#000] text-white p-6 md:p-12 font-sans relative overflow-hidden">
      
//       {/* Background Divine Glow */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f97316]/5 blur-[120px] rounded-full pointer-events-none" />

//       {/* HEADER */}
//       <div className="mb-12 relative z-10">
//         <div className="flex items-center gap-2 mb-3">
//             <FiSun className="text-[#f97316] animate-spin-slow" size={14} />
//             <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
//               Dashboard / Saved Yatras
//             </p>
//         </div>
//         <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase leading-none">
//           My <span className="text-[#f97316]">Wishlist</span>
//         </h2>
//         <p className="text-gray-400 text-sm font-medium italic">
//           {user?.cart?.length || 0} Divine Packages Saved for Your Visit
//         </p>
//       </div>

//       {/* MAIN GRID */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative items-start z-10">

//         {/* SAVED SERVICES SECTION */}
//         <div className="lg:col-span-2 bg-white/[0.01] border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-3xl shadow-2xl">
//           {!user?.cart?.length ? (
//             <div className="p-20 flex flex-col items-center justify-center gap-6 text-gray-600">
//               <div className="p-6 bg-white/5 rounded-full">
//                 <RiDeleteBin5Line size={50} className="opacity-20" />
//               </div>
//               <div className="text-center">
//                 <p className="text-xl font-bold tracking-tight text-white mb-2">No Saved Yatras</p>
//                 <p className="text-sm italic">Your pilgrimage list is currently empty.</p>
//               </div>
//               <button 
//                 onClick={() => navigate('/services')} 
//                 className="mt-4 px-8 py-4 bg-[#f97316] text-white rounded-2xl hover:bg-[#ea580c] transition-all font-black text-xs uppercase tracking-widest shadow-[0_10px_30px_rgba(249,115,22,0.2)]"
//               >
//                 Explore Services
//               </button>
//             </div>
//           ) : (
//             <Table className="w-full">
//               <Tbody>
//                 {user.cart.map((course, index) => (
//                   <Tr key={course._id} className={`border-b border-white/5 hover:bg-white/[0.02] transition-all duration-500 ${index === user.cart.length - 1 ? 'border-none' : ''}`}>
                    
//                     {/* SERVICE INFO */}
//                     <Td className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
//                       <div className="relative group shrink-0">
//                         <img
//                           src={course.thumbnail}
//                           className="w-full md:w-56 h-36 object-cover rounded-[2rem] shadow-2xl grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
//                           alt="service thumbnail"
//                         />
//                         <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                       </div>

//                       <div className="flex flex-col gap-3">
//                         <p className="font-black text-2xl tracking-tighter uppercase">{course.courseName}</p>
//                         <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 italic font-medium">
//                           {course.courseDescription}
//                         </p>
//                          <div className="flex items-center gap-4 mt-2">
//                             <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 px-4 py-1.5 rounded-full border border-[#f97316]/20">
//                                <FiMapPin size={12} />
//                                {course.category?.name || "Ujjain"}
//                             </div>
//                             <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
//                                <FiClock size={12} />
//                                Seasonal Availablity
//                             </div>
//                          </div>
//                       </div>
//                     </Td>

//                     {/* ACTION & PRICE */}
//                     <Td className="p-6 md:p-10 text-right">
//                       <div className="flex flex-col gap-8 items-end h-full justify-between">
                        
//                         <button
//                           onClick={() => handleRemoveCourseFromCart(course._id)}
//                           className="flex items-center gap-2 text-gray-500 hover:text-red-400 transition-all duration-300 group px-4 py-2 rounded-xl hover:bg-red-500/5"
//                         >
//                           <RiDeleteBin5Line size={18} className="group-hover:rotate-12 transition-transform" />
//                           <span className="text-[10px] font-black uppercase tracking-widest">Remove</span>
//                         </button>

//                         <div className="flex flex-col items-end">
//                           <p className="text-4xl font-black text-white tracking-tighter">
//                             ₹{course.price}
//                           </p>
//                            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#f97316]">Dakshina / Fees</p>
//                         </div>

//                       </div>
//                     </Td>

//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>
//           )}
//         </div>

//         {/* BOOKING SUMMARY CARD */}
//         <div className="bg-[#050505] border border-white/5 rounded-[3rem] p-8 md:p-12 h-fit sticky top-12 backdrop-blur-3xl shadow-2xl lg:col-span-1 overflow-hidden">
//           {/* Subtle Glow inside card */}
//           <div className="absolute top-[-20%] left-[-20%] w-40 h-40 bg-[#f97316]/10 blur-[60px] rounded-full" />
          
//           <div className="relative z-10">
//             <div className="flex items-center gap-3 mb-10">
//                 <div className="h-1.5 w-1.5 rounded-full bg-[#f97316] shadow-[0_0_10px_#f97316]" />
//                 <h3 className="text-[11px] font-black tracking-[0.4em] uppercase text-gray-400">Yatra Summary</h3>
//             </div>

//             <div className="space-y-5 mb-10">
//               <div className="flex justify-between items-center">
//                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Base Amount</p>
//                  <p className="text-white font-black">₹{totalAmount}</p>
//               </div>
//               <div className="flex justify-between items-center pb-5 border-b border-white/5">
//                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Seva Tax</p>
//                  <p className="text-white font-black">₹0</p>
//               </div>
//                <div className="flex flex-col gap-1 pt-2">
//                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">Total Estimate</p>
//                  <p className="text-5xl font-black text-[#f97316] tracking-tighter">₹{totalAmount}</p>
//               </div>
//             </div>

//             <button
//               disabled={!totalAmount}
//               className="w-full py-6 bg-white text-black font-black rounded-[1.5rem] hover:bg-[#f97316] hover:text-white transition-all transform active:scale-[0.95] shadow-2xl disabled:opacity-20 disabled:grayscale uppercase tracking-[0.3em] text-[10px]"
//             >
//               Confirm Inquiry
//             </button>
             
//              <p className="text-center text-gray-600 text-[9px] mt-8 font-bold uppercase tracking-widest leading-loose">
//                Your devotion is our priority. <br/> Secure Spiritual Assistance 24/7.
//              </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default WishList;









import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line, RiShoppingBag3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { RemovedCousefromTheCart } from "../../../../Services.jsx/Operations/CartAPI";
import { FiSun, FiMapPin, FiClock, FiArrowRight, FiInfo } from "react-icons/fi";

const WishList = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [totalAmount, setTotalAmount] = useState(0);

  // 1. Calculate Total Amount
  useEffect(() => {
    if (!user?.cart) return;
    const total = user.cart.reduce((acc, course) => acc + Number(course.price), 0);
    setTotalAmount(total);
  }, [user]);

  // 2. Remove Item Functionality
  const handleRemoveCourseFromCart = (id) => {
    dispatch(RemovedCousefromTheCart(id, user._id, token));
  };

  // 3. WHATSAPP INTEGRATION LOGIC (Details Updated)
 // 3. WHATSAPP INTEGRATION LOGIC (Hindi Edition)
  const handleWhatsAppInquiry = () => {
    if (!user?.cart || user.cart.length === 0) return;

    const phoneNumber = "919630385826"; 
    
    let message = `*जय महाकाल!* 🙏\n\n`;
    message += `*श्री जी डिवाइन यात्रा - नई पूछताछ*\n\n`;
    message += `*श्रद्धालु का नाम:* ${user.firstName} ${user.lastName}\n`;
    // message += `*ईमेल:* ${user.email}\n`;
    message += `──────────────────\n`;
    message += `*चुने गए दर्शन/पूजन पैकेज:* \n\n`;

    user.cart.forEach((item, index) => {
      message += `${index + 1}. *${item.courseName}*\n`;
      message += `   दक्षिणा शुल्क: ₹${item.price}\n`;
      message += `   श्रेणी: ${item.category?.name || "उज्जैन दर्शन"}\n\n`;
    });

    message += `──────────────────\n`;
    message += `*कुल अनुमानित राशि:* ₹${totalAmount}\n\n`;
    message += `*कार्यालय:* शांति नगर, राधा कृष्ण मंदिर के पास, उज्जैन।\n\n`;
    message += `कृपया मुझे इन दिव्य सेवाओं की बुकिंग प्रक्रिया के बारे में आगे मार्गदर्शन प्रदान करें।`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 md:p-12 font-sans relative overflow-x-hidden">
      
      {/* ─── AMBIENT BACKGROUND GLOWS ─── */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#f97316]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#f97316]/5 blur-[80px] rounded-full pointer-events-none" />

      {/* ─── HEADER ─── */}
      <div className="mb-12 relative z-10 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <FiSun className="text-[#f97316] animate-spin-slow" size={16} />
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">Sacred Sanctuary / Saved</p>
        </div>
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-4 uppercase leading-none">
          My <span className="text-[#f97316]">Wishlist</span>
        </h2>
        <div className="h-1 w-20 bg-[#f97316] rounded-full mx-auto md:mx-0 mb-4 shadow-[0_0_10px_#f97316]" />
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start relative z-10">
        
        {/* ─── LEFT: GLASS CARDS LIST ─── */}
        <div className="w-full lg:w-[65%] space-y-6">
          {!user?.cart?.length ? (
            <div className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-16 flex flex-col items-center text-center gap-6 backdrop-blur-3xl shadow-2xl">
              <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                <RiShoppingBag3Line size={40} className="text-gray-800" />
              </div>
              <p className="text-xl font-bold uppercase tracking-widest text-white/40">No Sacred Packages Saved</p>
              <button 
                onClick={() => navigate('/services')} 
                className="px-10 py-4 bg-white text-black font-black rounded-2xl hover:bg-[#f97316] hover:text-white transition-all uppercase tracking-widest text-[10px]"
              >
                Explore Services
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {user.cart.map((course) => (
                <div 
                  key={course._id} 
                  className="group relative bg-white/[0.02] border border-white/5 hover:border-[#f97316]/30 rounded-[2.5rem] p-5 md:p-8 flex flex-col md:flex-row gap-8 items-center transition-all duration-500 hover:bg-white/[0.04] shadow-2xl overflow-hidden"
                >
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#f97316]/5 blur-[60px] rounded-full group-hover:bg-[#f97316]/10 transition-all" />

                  {/* Thumbnail Wrapper */}
                  <div className="relative w-full md:w-64 h-48 md:h-44 shrink-0 overflow-hidden rounded-[2rem] shadow-2xl">
                    <img
                      src={course.thumbnail}
                      className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                      alt="thumbnail"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 md:p-4">
                       <span className="text-[10px] font-black uppercase tracking-widest text-[#f97316]">Divine Package</span>
                    </div>
                  </div>

                  {/* Info Node */}
                  <div className="flex flex-col flex-1 gap-3 text-center md:text-left w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none text-white">{course.courseName}</h3>
                      <p className="text-2xl font-black text-[#f97316] tracking-tighter">₹{course.price}</p>
                    </div>

                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed italic line-clamp-2 max-w-lg mx-auto md:mx-0">
                      {course.courseDescription}
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mt-4 border-t border-white/5 pt-5">
                      <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 px-4 py-2 rounded-full border border-[#f97316]/20">
                        <FiMapPin size={12} />
                        {course.category?.name || "Avantika"}
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                        <FiClock size={12} />
                        Vedic Verified
                      </div>
                      
                      <button
                        onClick={() => handleRemoveCourseFromCart(course._id)}
                        className="md:ml-auto p-3 bg-red-500/5 hover:bg-red-500/20 text-red-500 rounded-2xl transition-all border border-red-500/10 active:scale-90 flex items-center gap-2"
                      >
                        <RiDeleteBin5Line size={18} />
                        <span className="text-[10px] font-black uppercase md:hidden tracking-widest">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ─── RIGHT: SUMMARY VAULT (WhatsApp Integration) ─── */}
        <div className="w-full lg:w-[35%] lg:sticky lg:top-12">
          <div className="bg-[#080808] border border-white/10 rounded-[3.5rem] p-8 md:p-14 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f97316]/20 blur-[60px] rounded-full" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-10">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#f97316] animate-pulse" />
                  <h3 className="text-[11px] font-black tracking-[0.5em] uppercase text-gray-500">Yatra Summary</h3>
              </div>

              <div className="space-y-6 mb-12 px-2">
                <div className="flex justify-between items-center group">
                   <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">Base Dakshina</p>
                   <p className="text-white font-black text-lg">₹{totalAmount}</p>
                </div>
                <div className="flex justify-between items-center pb-6 border-b border-white/5 group">
                   <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">Seva Tax</p>
                   <p className="text-white font-black text-lg">₹0</p>
                </div>
                <div className="flex flex-col gap-2 pt-4 text-center md:text-left">
                   <p className="text-[#f97316] text-[10px] font-black uppercase tracking-[0.4em]">Final Estimate</p>
                   <p className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none">₹{totalAmount}</p>
                </div>
              </div>

              <button
                disabled={!totalAmount}
                onClick={handleWhatsAppInquiry}
                className="w-full py-7 bg-white text-black font-black rounded-[2rem] hover:bg-[#25D366] hover:text-white transition-all transform active:scale-[0.96] shadow-[0_20px_50px_rgba(249,115,22,0.1)] uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 overflow-hidden group"
              >
                <span>Whatsapp cart to Guid</span>
                <FiArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
               
               <div className="mt-10 p-5 bg-white/5 rounded-[1.5rem] border border-white/5 flex items-start gap-3">
                  <div className="p-2 bg-[#25D366]/10 rounded-lg">
                    <FiInfo className="text-[#25D366]" size={16} />
                  </div>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
                    Clicking will open WhatsApp to discuss details directly with Dhruv Vasanwal.
                  </p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WishList;