import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  const phoneNumber = "919630385826"; // Client ka number 
  const message = "जय महाकाल! मैं उज्जैन दर्शन और पूजन पैकेजों के बारे में जानकारी चाहता हूँ।";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-24 right-5 md:bottom-auto md:top-[18%] md:right-10 z-[1000] flex flex-col items-end pointer-events-none">
      <motion.button
        whileHover={{ scale: 1.1, rotate: 8 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="relative w-14 h-14 md:w-16 md:h-16 rounded-[1.2rem] md:rounded-[1.5rem] flex items-center justify-center transition-all duration-500 shadow-2xl pointer-events-auto border border-[#ffffff]/10 overflow-hidden bg-[#25D366] shadow-[0_15px_40px_rgba(37,211,102,0.3)]"
      >
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-[#ffffff]/20 blur-xl animate-pulse opacity-50" />

        {/* WhatsApp Icon */}
        <div className="relative z-10">
          <FaWhatsapp size={32} className="text-white" />
        </div>

        {/* Subtle Scanning Line */}
        <motion.div 
          className="absolute inset-x-0 h-[2px] bg-[#ffffff]/30 top-0"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
      </motion.button>
      
      {/* Optional Label for Desktop */}
      <motion.span 
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="hidden md:block mt-2 bg-black/80 backdrop-blur-md text-[10px] text-white py-1 px-3 rounded-lg border border-white/10 font-bold uppercase tracking-widest"
      >
        Live Support
      </motion.span>
    </div>
  );
};

export default WhatsAppChat;