
// // import React, { useState, useRef, useEffect } from "react";
// // import { useDispatch } from "react-redux";
// // import { askAI } from "../../Services.jsx/Operations/authAPI";
// // import { X, Send, Bot, User } from "lucide-react";
// // import ReactMarkdown from "react-markdown"; // Step 1: Import library
// // import { AnimatePresence } from "framer-motion";
// // // import { Bot, X } from "lucide-react";
// // import { motion } from "framer-motion";


// // const AIGeminiChat = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [inputQuery, setInputQuery] = useState("");
// //   const [chatHistory, setChatHistory] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   const dispatch = useDispatch();
// //   const scrollRef = useRef(null);

// //   useEffect(() => {
// //     if (scrollRef.current) {
// //       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
// //     }
// //   }, [chatHistory, loading, isOpen]);

// //   const handleAskAi = (e) => {
// //     e.preventDefault();
// //     const currentQuery = inputQuery.trim();
// //     if (!currentQuery) return;

// //     const newUserMessage = { type: "user", text: currentQuery };
// //     setChatHistory((prev) => [...prev, newUserMessage]);
    
// //     setLoading(true);
// //     setInputQuery("");

// //     dispatch(askAI(currentQuery, (res) => {
// //       const newBotMessage = { type: "bot", text: res };
// //       setChatHistory((prev) => [...prev, newBotMessage]);
// //       setLoading(false);
// //     }));
// //   };

// //   return (
// //     <div className={`fixed top-[9%] right-10 z-[50] font-sans flex flex-col items-end ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
// //       {/* --- CHAT WINDOW --- */}
// //       <div
// //         className={`mb-4 w-[350px] md:w-[400px] h-[530px] bg-gray-100 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 transform ${
// //           isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95 pointer-events-none"
// //         }`}
// //       >
// //         {/* Header */}
// //         <div className="bg-black p-4 flex items-center justify-between text-white">
// //           <div className="flex items-center gap-3">
// //             <div className="bg-red-600 p-1.5 rounded-lg">
// //               <Bot size={24} className="text-white" />
// //             </div>
// //             <div>
// //               <h3 className="text-sm font-semibold leading-none text-white">Vijayvargiya AI</h3>
// //               <span className="text-[11px] text-gray-400">Online | AI Powered</span>
// //             </div>
// //           </div>
// //           <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full">
// //             <X size={20} className="text-white"/>
// //           </button>
// //         </div>

// //         {/* Messages Area */}
// //         <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8F9FA]">
// //           {/* Default Greeting */}
// //           <div className="flex items-start gap-2 max-w-[85%]">
// //             <div className="bg-red-600 p-1 rounded-md mt-1 shrink-0"><Bot size={14} className="text-white" /></div>
// //             <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-gray-800 text-sm">
// //               Hi there 👋 How can I help you today?
// //             </div>
// //           </div>

// //           {chatHistory.map((msg, index) => (
// //             <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} items-start gap-2`}>
// //               {msg.type === "bot" && (
// //                 <div className="bg-red-600 p-1 rounded-md mt-1 shrink-0"><Bot size={14} className="text-white" /></div>
// //               )}
              
// //               <div className={`p-3 rounded-2xl border text-sm max-w-[85%] shadow-sm ${
// //                 msg.type === "user" ? "bg-red-600 text-black rounded-tr-none" : "bg-white text-gray-800 rounded-tl-none"
// //               }`}>
// //                 {/* Step 2: Render Markdown for Bot messages */}
// //                 {msg.type === "bot" ? (
// //                   <article className="prose prose-sm prose-slate max-w-none break-words">
// //                     <ReactMarkdown 
// //                       components={{
// //                         // Styling for markdown elements
// //                         strong: ({node, ...props}) => <span className="font-bold text-black" {...props} />,
// //                         ul: ({node, ...props}) => <ul className="list-disc ml-4 my-2" {...props} />,
// //                         ol: ({node, ...props}) => <ol className="list-decimal ml-4 my-2" {...props} />,
// //                         li: ({node, ...props}) => <li className="mb-1" {...props} />,
// //                         p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />
// //                       }}
// //                     >
// //                       {msg.text}
// //                     </ReactMarkdown>
// //                   </article>
// //                 ) : (
// //                   msg.text
// //                 )}
// //               </div>

// //               {msg.type === "user" && (
// //                 <div className="bg-gray-300 p-1 rounded-md mt-1 shrink-0"><User size={14} className="text-gray-600" /></div>
// //               )}
// //             </div>
// //           ))}

// //           {loading && (
// //             <div className="flex items-center gap-2 ml-8">
// //               <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
// //                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
// //                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
// //                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Input Form */}
// //         <div className="p-4 bg-white border-t border-gray-200">
// //           <form onSubmit={handleAskAi} className="flex items-center bg-gray-100 rounded-full px-4 py-2">
// //             <input
// //               type="text"
// //               value={inputQuery}
// //               onChange={(e) => setInputQuery(e.target.value)}
// //               placeholder="Ask anything..."
// //               className="flex-1 bg-transparent outline-none text-sm text-gray-700 py-1"
// //             />
// //             <button 
// //               type="submit"
// //               disabled={loading || !inputQuery.trim()}
// //               className="ml-2 p-1.5 bg-red-600 rounded-full text-caribbeangreen-700 hover:bg-red-700 transition-all disabled:opacity-50"
// //             >
// //               <Send size={16} />
// //             </button>
// //           </form>
// //         </div>
// //       </div>

// //       {/* Floating Button */}
// // <motion.button
// //   whileHover={{ scale: 1.1, rotate: 5 }}
// //   whileTap={{ scale: 0.9 }}
// //   onClick={() => setIsOpen(!isOpen)}
// //   className={`relative w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-all duration-500 shadow-2xl z-50 pointer-events-auto border border-[#ffffff]/10 overflow-hidden ${
// //     isOpen 
// //       ? "bg-[#000000] shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
// //       : "bg-gradient-to-br from-[#10b981] to-[#059669] shadow-[0_15px_40px_rgba(16,185,129,0.3)]"
// //   }`}
// // >
// //   {/* ─── 1. AMBIENT GLOW (PULSING) ─── */}
// //   {!isOpen && (
// //     <div className="absolute inset-0 bg-[#ffffff]/20 blur-xl animate-pulse opacity-50" />
// //   )}

// //   {/* ─── 2. ICON ANIMATION NODE ─── */}
// //   <AnimatePresence mode="wait">
// //     <motion.div
// //       key={isOpen ? "close" : "bot"}
// //       initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
// //       animate={{ opacity: 1, rotate: 0, scale: 1 }}
// //       exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
// //       transition={{ duration: 0.3 }}
// //     >
// //       {isOpen ? (
// //         <X size={30} className="text-[#ffffff]" strokeWidth={2.5} />
// //       ) : (
// //         <Bot size={30} className="text-[#000000]" strokeWidth={2.5} />
// //       )}
// //     </motion.div>
// //   </AnimatePresence>

// //   {/* ─── 3. SUBTLE SCANNING LINE (OPTIONAL) ─── */}
// //   {!isOpen && (
// //     <motion.div 
// //       className="absolute inset-x-0 h-[2px] bg-[#ffffff]/30 top-0"
// //       animate={{ top: ["0%", "100%", "0%"] }}
// //       transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
// //     />
// //   )}
// // </motion.button>
// //     </div>
// //   );
// // };

// // export default AIGeminiChat;






// import React, { useState, useRef, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { askAI } from "../../Services.jsx/Operations/authAPI";
// import { X, Send, Bot, User } from "lucide-react";
// import ReactMarkdown from "react-markdown";
// import { AnimatePresence, motion } from "framer-motion";

// const AIGeminiChat = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [inputQuery, setInputQuery] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const dispatch = useDispatch();
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//     }
//   }, [chatHistory, loading, isOpen]);

//   const handleAskAi = (e) => {
//     e.preventDefault();
//     const currentQuery = inputQuery.trim();
//     if (!currentQuery) return;

//     const newUserMessage = { type: "user", text: currentQuery };
//     setChatHistory((prev) => [...prev, newUserMessage]);
    
//     setLoading(true);
//     setInputQuery("");

//     dispatch(askAI(currentQuery, (res) => {
//       const newBotMessage = { type: "bot", text: res };
//       setChatHistory((prev) => [...prev, newBotMessage]);
//       setLoading(false);
//     }));
//   };

//   return (
//     /* 1. WRAPPER: Mobile par bottom-5, Desktop par top-[9%] */
//     <div className={`fixed bottom-5 right-5 md:bottom-auto md:top-[9%] md:right-10 z-[1000] font-sans flex flex-col items-end ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
//       {/* --- CHAT WINDOW --- */}
//       <div
//         className={`mb-4 w-[calc(100vw-40px)] sm:w-[350px] md:w-[400px] h-[60vh] md:h-[530px] bg-gray-100 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 transform ${
//           isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95 pointer-events-none"
//         }`}
//       >
//         {/* Header */}
//         <div className="bg-black p-4 flex items-center justify-between text-white">
//           <div className="flex items-center gap-3">
//             <div className="bg-red-600 p-1.5 rounded-lg">
//               <Bot size={24} className="text-white" />
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold leading-none text-white">Vijayvargiya AI</h3>
//               <span className="text-[11px] text-gray-400">Online | AI Powered</span>
//             </div>
//           </div>
//           <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full">
//             <X size={20} className="text-white"/>
//           </button>
//         </div>

//         {/* Messages Area */}
//         <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8F9FA] custom-scrollbar">
//           <div className="flex items-start gap-2 max-w-[85%]">
//             <div className="bg-red-600 p-1 rounded-md mt-1 shrink-0"><Bot size={14} className="text-white" /></div>
//             <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-gray-800 text-sm">
//               Hi there 👋 How can I help you today?
//             </div>
//           </div>

//           {chatHistory.map((msg, index) => (
//             <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} items-start gap-2`}>
//               {msg.type === "bot" && (
//                 <div className="bg-red-600 p-1 rounded-md mt-1 shrink-0"><Bot size={14} className="text-white" /></div>
//               )}
              
//               <div className={`p-3 rounded-2xl border text-sm max-w-[85%] shadow-sm ${
//                 msg.type === "user" ? "bg-red-600 text-white rounded-tr-none" : "bg-white text-gray-800 rounded-tl-none"
//               }`}>
//                 {msg.type === "bot" ? (
//                   <article className="prose prose-sm prose-slate max-w-none break-words">
//                     <ReactMarkdown 
//                       components={{
//                         strong: ({node, ...props}) => <span className="font-bold text-black" {...props} />,
//                         ul: ({node, ...props}) => <ul className="list-disc ml-4 my-2" {...props} />,
//                         ol: ({node, ...props}) => <ol className="list-decimal ml-4 my-2" {...props} />,
//                         li: ({node, ...props}) => <li className="mb-1" {...props} />,
//                         p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />
//                       }}
//                     >
//                       {msg.text}
//                     </ReactMarkdown>
//                   </article>
//                 ) : (
//                   msg.text
//                 )}
//               </div>

//               {msg.type === "user" && (
//                 <div className="bg-gray-300 p-1 rounded-md mt-1 shrink-0"><User size={14} className="text-gray-600" /></div>
//               )}
//             </div>
//           ))}

//           {loading && (
//             <div className="flex items-center gap-2 ml-8">
//               <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
//                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
//                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
//                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Input Form */}
//         <div className="p-4 bg-white border-t border-gray-200">
//           <form onSubmit={handleAskAi} className="flex items-center bg-gray-100 rounded-full px-4 py-2">
//             <input
//               type="text"
//               value={inputQuery}
//               onChange={(e) => setInputQuery(e.target.value)}
//               placeholder="Ask anything..."
//               className="flex-1 bg-transparent outline-none text-sm text-gray-700 py-1"
//             />
//             <button 
//               type="submit"
//               disabled={loading || !inputQuery.trim()}
//               className="ml-2 p-1.5 bg-red-600 rounded-full text-white hover:bg-red-700 transition-all disabled:opacity-50 flex items-center justify-center"
//             >
//               <Send size={16} />
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* --- FLOATING BUTTON --- */}
//       <motion.button
//         whileHover={{ scale: 1.1, rotate: 5 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className={`relative w-14 h-14 md:w-16 md:h-16 rounded-[1.2rem] md:rounded-[1.5rem] flex items-center justify-center transition-all duration-500 shadow-2xl z-50 pointer-events-auto border border-[#ffffff]/10 overflow-hidden ${
//           isOpen 
//             ? "bg-[#000000] shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
//             : "bg-gradient-to-br from-[#10b981] to-[#059669] shadow-[0_15px_40px_rgba(16,185,129,0.3)]"
//         }`}
//       >
//         {!isOpen && (
//           <div className="absolute inset-0 bg-[#ffffff]/20 blur-xl animate-pulse opacity-50" />
//         )}

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={isOpen ? "close" : "bot"}
//             initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
//             animate={{ opacity: 1, rotate: 0, scale: 1 }}
//             exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
//             transition={{ duration: 0.3 }}
//           >
//             {isOpen ? (
//               <X size={26} className="text-[#ffffff]" strokeWidth={2.5} />
//             ) : (
//               <Bot size={26} className="text-[#000000]" strokeWidth={2.5} />
//             )}
//           </motion.div>
//         </AnimatePresence>

//         {!isOpen && (
//           <motion.div 
//             className="absolute inset-x-0 h-[2px] bg-[#ffffff]/30 top-0"
//             animate={{ top: ["0%", "100%", "0%"] }}
//             transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
//           />
//         )}
//       </motion.button>
//     </div>
//   );
// };

// export default AIGeminiChat;









import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { askAI } from "../../Services.jsx/Operations/authAPI";
import { X, Send, Bot, User, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { AnimatePresence, motion } from "framer-motion";

const AIGeminiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory, loading, isOpen]);

  const handleAskAi = (e) => {
    e.preventDefault();
    const currentQuery = inputQuery.trim();
    if (!currentQuery) return;

    const newUserMessage = { type: "user", text: currentQuery };
    setChatHistory((prev) => [...prev, newUserMessage]);
    
    setLoading(true);
    setInputQuery("");

    dispatch(askAI(currentQuery, (res) => {
      const newBotMessage = { type: "bot", text: res };
      setChatHistory((prev) => [...prev, newBotMessage]);
      setLoading(false);
    }));
  };

  return (
    /* WRAPPER: Mobile par optimized positioning */
    <div className={`fixed bottom-5 right-5 md:bottom-auto md:top-[9%] md:right-10 z-[1000] font-sans flex flex-col items-end ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      {/* --- CHAT WINDOW --- */}
      <div
        className={`mb-4 w-[calc(100vw-40px)] sm:w-[350px] md:w-[400px] h-[70vh] md:h-[550px] bg-[#fdfdfd] rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden transition-all duration-500 border border-[#F97316]/10 transform ${
          isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Header: Pure Black & Saffron Theme */}
        <div className="bg-[#000000] p-5 flex items-center justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#F97316]/10 blur-2xl rounded-full" />
          <div className="flex items-center gap-3 relative z-10">
            <div className="bg-[#F97316] p-2 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold leading-none tracking-tight">Shree Ji Seva AI</h3>
              <span className="text-[10px] text-[#F97316] font-bold uppercase tracking-widest">Spiritual Assistant</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors relative z-10">
            <X size={20} className="text-white"/>
          </button>
        </div>

        {/* Messages Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5 bg-[#ffffff] custom-scrollbar">
          {/* Default Greeting */}
          <div className="flex items-start gap-3 max-w-[90%]">
            <div className="bg-[#F97316]/10 p-2 rounded-lg shrink-0 border border-[#F97316]/20">
              <Bot size={16} className="text-[#F97316]" />
            </div>
            <div className="bg-gray-100 p-4 rounded-3xl rounded-tl-none shadow-sm text-gray-800 text-sm leading-relaxed">
              जय महाकाल! 🙏 <br/> मैं आपकी उज्जैन यात्रा और पूजन से जुड़ी जानकारी के लिए यहाँ हूँ। मैं आपकी क्या मदद कर सकता हूँ?
            </div>
          </div>

          {chatHistory.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} items-start gap-3`}>
              {msg.type === "bot" && (
                <div className="bg-[#F97316]/10 p-2 rounded-lg shrink-0 border border-[#F97316]/20">
                  <Bot size={16} className="text-[#F97316]" />
                </div>
              )}
              
              <div className={`p-4 rounded-[1.5rem] text-sm max-w-[85%] shadow-sm leading-relaxed ${
                msg.type === "user" 
                  ? "bg-[#000000] text-white rounded-tr-none" 
                  : "bg-gray-50 text-gray-800 border border-gray-100 rounded-tl-none"
              }`}>
                {msg.type === "bot" ? (
                  <article className="prose prose-sm prose-slate max-w-none break-words">
                    <ReactMarkdown 
                      components={{
                        strong: ({node, ...props}) => <span className="font-bold text-[#F97316]" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc ml-4 my-2 text-gray-700" {...props} />,
                        p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </article>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 ml-10">
              <div className="bg-gray-100 p-3 rounded-2xl flex gap-1.5 shadow-inner">
                <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              </div>
            </div>
          )}
        </div>

        {/* Input Form: Modern Pill Style */}
        <div className="p-5 bg-white border-t border-gray-100">
          <form onSubmit={handleAskAi} className="flex items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2 focus-within:border-[#F97316]/50 transition-all">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="पूछिए... (जैसे: महाकाल दर्शन समय)"
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 py-2"
            />
            <button 
              type="submit"
              disabled={loading || !inputQuery.trim()}
              className="ml-2 p-2 bg-[#F97316] rounded-xl text-white hover:bg-[#EA580C] transition-all disabled:opacity-30 flex items-center justify-center shadow-lg"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* --- FLOATING BUTTON ENHANCED --- */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-2xl z-50 pointer-events-auto border overflow-hidden ${
          isOpen 
            ? "bg-[#000000] border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
            : "bg-[#F97316] border-[#F97316]/20 shadow-[0_15px_40px_rgba(249,115,22,0.3)]"
        }`}
      >
        {!isOpen && (
          <div className="absolute inset-0 bg-white/20 blur-xl animate-pulse opacity-50" />
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "bot"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X size={26} className="text-white" strokeWidth={2.5} />
            ) : (
              <div className="relative">
                <Sparkles size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default AIGeminiChat;