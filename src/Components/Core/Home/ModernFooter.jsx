// import React from "react";
// import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaArrowUp } from "react-icons/fa";
// import { FiArrowUpRight } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const FooterLink = ({ to, children }) => (
//   <li>
//     <Link to={to} className="text-[#6b7280] hover:text-[#ffffff] transition-all duration-300 flex items-center gap-1 group">
//       <span className="w-0 h-[1px] bg-[#10b981] group-hover:w-3 transition-all"></span>
//       {children}
//     </Link>
//   </li>
// );

// const ModernFooter = () => {
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

//   return (
//     <footer className="relative bg-[#000000] text-[#ffffff] pt-24 pb-12 px-6 overflow-hidden border-t border-[#ffffff]/5 font-sans">
      
//       {/* Watermark */}
//       <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
//         <h1 className="text-[10rem] md:text-[18rem] font-bold text-[#ffffff]/[0.02] tracking-[0.1em] uppercase leading-none">
//           Vijayvargiya
//         </h1>
//       </div>

//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#10b981]/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto">
        
//         {/* Top Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
//           <div className="flex flex-col gap-6">
            
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-xl bg-[#6A0DAD]/20 flex items-center justify-center border border-[#6A0DAD]/30 shadow-lg shrink-0">
//                 <span className="text-[#ffffff] font-black text-lg">V</span>
//               </div>
//               <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ffffff] to-[#6b7280] bg-clip-text text-transparent tracking-tight">
//                 Vijayvargiya Spoken English
//               </h2>
//             </div>
            
//             {/* UPDATED DESCRIPTION */}
//             <p className="text-[#9ca3af] text-lg max-w-md font-light leading-relaxed">
//               With <span className="text-[#10b981] font-medium">22 years of excellence</span>, we help students 
//               build confidence in spoken English, personality development, and communication skills 
//               through practical learning methods.
//             </p>
            
//             <div className="flex gap-4 mt-4">
//               {[FaYoutube, FaInstagram, FaTwitter, FaLinkedin].map((Icon, i) => (
//                 <div key={i} className="w-10 h-10 rounded-xl bg-[#ffffff]/5 border border-[#ffffff]/10 flex items-center justify-center cursor-pointer hover:bg-[#ffffff] hover:text-[#000000] transition-all duration-500 shadow-lg">
//                   <Icon size={18} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Newsletter Box (Content Updated Only) */}
//           <div className="bg-[#ffffff]/[0.02] border border-[#ffffff]/5 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
//             <div className="absolute top-0 right-0 w-24 h-24 bg-[#6A0DAD]/10 blur-3xl rounded-full" />
            
//             <h3 className="text-[#ffffff] font-bold text-xl mb-4 flex items-center gap-2 uppercase tracking-tighter">
//               Get Admission Updates <FiArrowUpRight className="text-[#10b981]" />
//             </h3>
            
//             <p className="text-[#6b7280] text-xs font-bold uppercase tracking-widest mb-6">
//               Receive course details & batch notifications.
//             </p>
            
//             <div className="flex bg-[#ffffff]/5 border border-[#ffffff]/10 rounded-2xl p-2 focus-within:border-[#ffffff]/20 transition-all shadow-inner">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="bg-transparent outline-none text-[#ffffff] px-4 py-2 w-full text-sm placeholder-[#4b5563]"
//               />
//               <button className="bg-[#ffffff] text-[#000000] px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#10b981] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Links Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-[#ffffff]/5 pt-12">
          
//           <div>
//             <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#10b981] mb-6">Quick Links</h4>
//             <ul className="space-y-4 text-xs font-bold tracking-widest uppercase">
//               <FooterLink to="/">Home</FooterLink>
//               <FooterLink to="/courses">Courses</FooterLink>
//               <FooterLink to="/about">About Institute</FooterLink>
//               <FooterLink to="/contact">Contact</FooterLink>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#10b981] mb-6">Our Programs</h4>
//             <ul className="space-y-4 text-xs text-[#6b7280] font-bold tracking-widest uppercase">
//               <li className="hover:text-[#ffffff] transition-colors cursor-pointer">Foundation English</li>
//               <li className="hover:text-[#ffffff] transition-colors cursor-pointer">Fluent English</li>
//               <li className="hover:text-[#ffffff] transition-colors cursor-pointer">Business English</li>
//               <li className="hover:text-[#ffffff] transition-colors cursor-pointer">Handwriting Course</li>
//             </ul>
//           </div>

//           <div className="col-span-2 flex flex-col items-end justify-end">
//             <button 
//               onClick={scrollToTop}
//               className="relative w-14 h-14 rounded-2xl bg-[#ffffff]/5 border border-[#ffffff]/10 flex items-center justify-center hover:bg-[#10b981] hover:text-[#000000] transition-all duration-500 group shadow-2xl"
//             >
//               <div className="absolute -inset-2 bg-[#10b981]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
//               <FaArrowUp size={20} className="relative z-10 group-hover:-translate-y-1 transition-transform" />
//             </button>
//             <p className="text-[#4b5563] text-[9px] mt-4 font-bold uppercase tracking-[0.4em]">Back to Top</p>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-[#ffffff]/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold tracking-[0.3em] text-[#4b5563]">
//           <p>© {new Date().getFullYear()} VIJAYVARGIYA SPOKEN ENGLISH INSTITUTE. ALL RIGHTS RESERVED.</p>
//           <div className="flex gap-8 uppercase">
//             <span className="hover:text-[#ffffff] cursor-pointer transition-colors">Privacy Policy</span>
//             <span className="hover:text-[#ffffff] cursor-pointer transition-colors">Terms & Conditions</span>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default ModernFooter;





// import React from "react";
// import { FaInstagram, FaFacebook, FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
// import { FiArrowUpRight, FiMapPin, FiMail } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const FooterLink = ({ to, children }) => (
//   <li>
//     <Link to={to} className="text-[#6b7280] hover:text-[#f97316] transition-all duration-300 flex items-center gap-1 group font-medium uppercase tracking-tighter">
//       <span className="w-0 h-[1px] bg-[#f97316] group-hover:w-3 transition-all"></span>
//       {children}
//     </Link>
//   </li>
// );

// const ModernFooter = () => {
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

//   return (
//     <footer className="relative bg-[#000000] text-[#ffffff] pt-24 pb-12 px-6 overflow-hidden border-t border-[#ffffff]/5 font-sans">
      
//       {/* Background Watermark - SHREE JI */}
//       <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
//         <h1 className="text-[10rem] md:text-[18rem] font-bold text-[#ffffff]/[0.02] tracking-[0.1em] uppercase leading-none">
//           SHREE JI
//         </h1>
//       </div>

//       {/* Saffron Spiritual Glow */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#f97316]/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto">
        
//         {/* Top Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
//           <div className="flex flex-col gap-6">
            
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 rounded-2xl bg-[#f97316]/20 flex items-center justify-center border border-[#f97316]/30 shadow-[0_0_20px_rgba(249,115,22,0.2)] shrink-0">
//                 <span className="text-[#ffffff] font-black text-xl">S</span>
//               </div>
//               <div>
//                 <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ffffff] to-[#6b7280] bg-clip-text text-transparent tracking-tighter uppercase">
//                    Shree Ji Divine Yatra
//                 </h2>
//                 <p className="text-[#f97316] text-[10px] font-bold uppercase tracking-[0.4em] ml-1">Darshan & Travels</p>
//               </div>
//             </div>
            
//             <p className="text-[#9ca3af] text-lg max-w-md font-light leading-relaxed">
//               Serving devotees in the holy city of Ujjain for <span className="text-[#f97316] font-medium italic">5+ glorious years</span>. 
//               Under the leadership of <span className="text-white font-medium">Dhruv Vasanwal</span>, we have guided 2000+ pilgrims 
//               through divine Mahakal Darshan and sacred rituals.
//             </p>
            
//             <div className="flex gap-4 mt-4">
//               {[
//                 { icon: FaInstagram, link: "https://www.instagram.com/dhruvvashanwal?igsh=MWl4cGE0MWs3cDg2ZQ==" },
//                 { icon: FaFacebook, link: "https://www.facebook.com/share/18VovN2C8p/" },
//                 { icon: FaWhatsapp, link: "https://wa.me/919630385826" }
//               ].map((social, i) => (
//                 <a key={i} href={social.link} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl bg-[#ffffff]/5 border border-[#ffffff]/10 flex items-center justify-center cursor-pointer hover:bg-[#f97316] hover:text-[#000000] transition-all duration-500 shadow-lg group">
//                   <social.icon size={20} className="group-hover:scale-110 transition-transform" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Contact & Info Box */}
//           <div className="bg-[#ffffff]/[0.02] border border-[#ffffff]/5 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
//             <div className="absolute top-0 right-0 w-24 h-24 bg-[#f97316]/10 blur-3xl rounded-full" />
            
//             <h3 className="text-[#ffffff] font-bold text-xl mb-8 flex items-center gap-2 uppercase tracking-tighter">
//               Yatra Assistance Node <FiArrowUpRight className="text-[#f97316]" />
//             </h3>
            
//             <div className="flex flex-col gap-6">
//                <div className="flex items-start gap-4">
//                   <FiMapPin className="text-[#f97316] mt-1 shrink-0" size={18} />
//                   <div>
//                     <p className="text-[10px] font-bold uppercase tracking-widest text-[#6b7280] mb-1">Our Location</p>
//                     <p className="text-sm text-gray-300">House No. 63, Shanti Nagar, <br/> Near Radha Krishna Mandir, Ujjain (MP)</p>
//                   </div>
//                </div>

//                <div className="flex items-start gap-4">
//                   <FaPhoneAlt className="text-[#f97316] mt-1 shrink-0" size={16} />
//                   <div>
//                     <p className="text-[10px] font-bold uppercase tracking-widest text-[#6b7280] mb-1">Helpline Number</p>
//                     <p className="text-lg font-bold text-white tracking-tighter">+91 96303 85826</p>
//                   </div>
//                </div>
//             </div>
//           </div>
//         </div>

//         {/* Links Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-[#ffffff]/5 pt-12">
          
//           <div>
//             <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f97316] mb-6">Explore</h4>
//             <ul className="space-y-4 text-xs">
//               <FooterLink to="/">Home</FooterLink>
//               <FooterLink to="/darshan">Darshan Packages</FooterLink>
//               <FooterLink to="/puja-services">Spiritual Rituals</FooterLink>
//               <FooterLink to="/about">Our Journey</FooterLink>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f97316] mb-6">Popular Services</h4>
//             <ul className="space-y-4 text-xs text-[#6b7280] font-bold tracking-widest uppercase">
//               <li className="hover:text-[#f97316] transition-colors cursor-pointer flex items-center gap-2">Mahakal VIP Darshan</li>
//               <li className="hover:text-[#f97316] transition-colors cursor-pointer flex items-center gap-2">Kaal Sarp Shanti</li>
//               <li className="hover:text-[#f97316] transition-colors cursor-pointer flex items-center gap-2">Ujjain Sightseeing</li>
//               <li className="hover:text-[#f97316] transition-colors cursor-pointer flex items-center gap-2">Hotel & Stay</li>
//             </ul>
//           </div>

//           <div className="col-span-2 flex flex-col items-end justify-end">
//             <button 
//               onClick={scrollToTop}
//               className="relative w-16 h-16 rounded-[1.5rem] bg-[#ffffff]/5 border border-[#ffffff]/10 flex items-center justify-center hover:bg-[#f97316] hover:text-[#000000] transition-all duration-500 group shadow-2xl"
//             >
//               <div className="absolute -inset-2 bg-[#f97316]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
//               <FaArrowUp size={22} className="relative z-10 group-hover:-translate-y-1 transition-transform" />
//             </button>
//             <p className="text-[#4b5563] text-[9px] mt-4 font-bold uppercase tracking-[0.4em]">Jai Mahakal</p>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-[#ffffff]/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold tracking-[0.3em] text-[#4b5563]">
//           <p>© {new Date().getFullYear()} SHREE JI DIVINE YATRA & DARSHAN. ALL RIGHTS RESERVED.</p>
//           <div className="flex gap-8 uppercase">
//             <span className="hover:text-[#ffffff] cursor-pointer transition-colors">Privacy Policy</span>
//             <span className="hover:text-[#ffffff] cursor-pointer transition-colors">Yatra Terms</span>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default ModernFooter;
















import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-[#6b7280] hover:text-[#f97316] transition-all duration-300 flex items-center gap-1 group font-medium uppercase tracking-tighter"
    >
      <span className="w-0 h-[1px] bg-[#f97316] group-hover:w-3 transition-all"></span>
      {children}
    </Link>
  </li>
);

const ModernFooter = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#000000] text-[#ffffff] pt-24 pb-12 px-6 overflow-hidden border-t border-[#ffffff]/5 font-sans">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#f97316]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ───────── TOP SECTION ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            
            <div>
              <h2 className="text-3xl font-bold tracking-tighter uppercase">
                Shree Ji Divine Yatra
              </h2>
              <p className="text-[#f97316] text-[10px] font-bold uppercase tracking-[0.4em] mt-1">
                Private Darshan Assistance Service
              </p>
            </div>
            
            <p className="text-[#9ca3af] text-base max-w-md font-light leading-relaxed">
              We provide independent assistance for Mahakal Darshan booking guidance, 
              Bhasma Aarti coordination, Vedic puja arrangements, and pilgrimage support in Ujjain.
              <br /><br />
              <span className="text-xs text-gray-600">
                *We are not affiliated with Shri Mahakaleshwar Temple Authority or any government body.*
              </span>
            </p>
            
            {/* Social */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/dhruvvashanwal" target="_blank" rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-[#ffffff]/5 border border-[#ffffff]/10 flex items-center justify-center hover:bg-[#f97316] hover:text-black transition-all">
                <FaInstagram size={18} />
              </a>

              <a href="https://www.facebook.com" target="_blank" rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-[#ffffff]/5 border border-[#ffffff]/10 flex items-center justify-center hover:bg-[#f97316] hover:text-black transition-all">
                <FaFacebook size={18} />
              </a>

              <a href="https://wa.me/919630385826" target="_blank" rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-[#ffffff]/5 border border-[#ffffff]/10 flex items-center justify-center hover:bg-[#f97316] hover:text-black transition-all">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-[#ffffff]/[0.02] border border-[#ffffff]/5 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-2xl">
            
            <h3 className="text-white font-bold text-xl mb-8 uppercase tracking-tighter flex items-center gap-2">
              Contact & Booking Support <FiArrowUpRight className="text-[#f97316]" />
            </h3>
            
            <div className="flex flex-col gap-6">
              
              <div className="flex items-start gap-4">
                <FiMapPin className="text-[#f97316] mt-1" size={18} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#6b7280] mb-1">
                    Ujjain Location
                  </p>
                  <p className="text-sm text-gray-300">
                    Shanti Nagar, Near Radha Krishna Mandir, Ujjain (MP)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-[#f97316] mt-1" size={16} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#6b7280] mb-1">
                    Helpline / WhatsApp
                  </p>
                  <p className="text-lg font-bold text-white">
                    +91 96303 85826
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ───────── LINKS SECTION ───────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-[#ffffff]/5 pt-12">
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f97316] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-xs">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f97316] mb-6">
              Services
            </h4>
            <ul className="space-y-4 text-xs text-[#6b7280] font-bold tracking-widest uppercase">
              <li>VIP Darshan Assistance</li>
              <li>Bhasma Aarti Guidance</li>
              <li>Vedic Puja Services</li>
              <li>Ujjain Yatra Support</li>
            </ul>
          </div>

          {/* Scroll Top */}
          <div className="col-span-2 flex flex-col items-end justify-end">
            <button
              onClick={scrollToTop}
              className="w-14 h-14 rounded-2xl bg-[#ffffff]/5 border border-[#ffffff]/10 flex items-center justify-center hover:bg-[#f97316] hover:text-black transition-all"
            >
              <FaArrowUp size={20} />
            </button>
            <p className="text-[#4b5563] text-[9px] mt-4 font-bold uppercase tracking-[0.4em]">
              Jai Mahakal
            </p>
          </div>
        </div>

        {/* ───────── BOTTOM BAR ───────── */}
        <div className="border-t border-[#ffffff]/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold tracking-[0.2em] text-[#4b5563]">
          
          <p>
            © {new Date().getFullYear()} SHREE JI DIVINE YATRA. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-8 uppercase">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default ModernFooter;
