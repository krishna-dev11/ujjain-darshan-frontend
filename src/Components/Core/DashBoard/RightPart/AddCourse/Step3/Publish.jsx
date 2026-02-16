// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { COURSE_STATUS } from "../../../../../../Utilities/Constaints";
// import { useDispatch, useSelector } from "react-redux";
// import { PublishorDraftCourse } from "../../../../../../Services.jsx/Operations/DashBoard";
// import { useNavigate } from "react-router-dom";
// import { setStep } from "../../../../../../Slices/Courses";
// import { IoIosArrowBack } from "react-icons/io";
// import { FiGlobe, FiRadio, FiCheckCircle } from "react-icons/fi";

// const Publish = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { token } = useSelector((state) => state.auth);
//   const { course } = useSelector((state) => state.Course);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     // formState: { errors },
//   } = useForm();

//   // ─── THE FIX: Dependency Array ───
//   useEffect(() => {
//     if (course) {
//       // Jab bhi course data mile, values set karo
//       const isPublished = course?.status === COURSE_STATUS.PUBLISHED;
//       const isLive = course?.TeachLive === true;

//       setValue("PublishORDraft", isPublished);
//       setValue("TeachLiveOrNot", isLive);
      
//       console.log("Protocol Sync: Data Loaded into Form", { isPublished, isLive });
//     }
//   }, [course, setValue]); // <--- 'course' yahan hona zaroori hai

//   const submitHandler = (data) => {
//     // Safety Guard: Check if course exists
//     if (!course?._id) return;

//     const status = data.PublishORDraft ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT;
//     const formData = new FormData();
    
//     formData.append("status", status);
//     formData.append("TeachLive", data.TeachLiveOrNot);
//     formData.append("courseId", course._id);

//     dispatch(PublishorDraftCourse(formData, token, status, navigate));
//   };

//   return (
//     <div className="flex flex-col gap-y-5 animate-fadeIn">
//       <form
//         onSubmit={handleSubmit(submitHandler)}
//         className="w-[95%] bg-[#ffffff]/[0.02] border border-[#ffffff]/10 rounded-3xl mx-auto flex flex-col gap-y-6 py-8 px-8 backdrop-blur-xl"
//       >
//         <div className="flex items-center gap-2 text-[#10b981] mb-2">
//            <FiCheckCircle />
//            <p className="text-[10px] font-bold uppercase tracking-[0.4em]">Step 3: Final Deployment</p>
//         </div>
        
//         <h2 className="text-2xl text-white font-bold tracking-tight">Publish Settings</h2>

//         {/* Visibility Toggle */}
//         <label className="flex items-center justify-between p-4 bg-white/5 rounded-2xl cursor-pointer hover:bg-white/10 transition-all">
//           <div className="flex items-center gap-3">
//             <FiGlobe className="text-[#10b981]" />
//             <span className="text-sm text-gray-300">Make this Course Public</span>
//           </div>
//           <input
//             type="checkbox"
//             {...register("PublishORDraft")}
//             className="w-5 h-5 accent-[#10b981] cursor-pointer"
//           />
//         </label>

//         {/* Interaction Toggle */}
//         <label className="flex items-center justify-between p-4 bg-white/5 rounded-2xl cursor-pointer hover:bg-white/10 transition-all">
//           <div className="flex items-center gap-3">
//             <FiRadio className="text-[#10b981]" />
//             <span className="text-sm text-gray-300">Enable Live Interaction Protocol</span>
//           </div>
//           <input
//             type="checkbox"
//             {...register("TeachLiveOrNot")}
//             className="w-5 h-5 accent-[#10b981] cursor-pointer"
//           />
//         </label>

//         <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5">
//           <button
//             type="button"
//             className="flex items-center gap-2 text-[#4b5563] hover:text-white transition-all text-xs font-bold uppercase tracking-widest"
//             onClick={() => dispatch(setStep(2))}
//           >
//             <IoIosArrowBack /> Back
//           </button>
          
//           <button type="submit" className="px-8 py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-[#10b981] transition-all active:scale-95 shadow-lg">
//             Save Protocol Edits
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Publish;











// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { COURSE_STATUS } from "../../../../../../Utilities/Constaints";
// import { useDispatch, useSelector } from "react-redux";
// import { PublishorDraftCourse } from "../../../../../../Services.jsx/Operations/DashBoard";
// import { useNavigate } from "react-router-dom";
// import { setStep } from "../../../../../../Slices/Courses";
// import { IoIosArrowBack } from "react-icons/io";
// import { FiGlobe, FiRadio, FiCheckCircle } from "react-icons/fi";

// const Publish = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { token } = useSelector((state) => state.auth);
//   const { course } = useSelector((state) => state.Course);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//   } = useForm();

//   // ─── THE FIX: Dependency Array (NO LOGIC CHANGE) ───
//   useEffect(() => {
//     if (course) {
//       const isPublished = course?.status === COURSE_STATUS.PUBLISHED;
//       const isLive = course?.TeachLive === true;

//       setValue("PublishORDraft", isPublished);
//       setValue("TeachLiveOrNot", isLive);
      
//       console.log("Service Sync: Data Loaded into Form", { isPublished, isLive });
//     }
//   }, [course, setValue]);

//   const submitHandler = (data) => {
//     if (!course?._id) return;

//     const status = data.PublishORDraft ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT;
//     const formData = new FormData();
    
//     formData.append("status", status);
//     formData.append("TeachLive", data.TeachLiveOrNot);
//     formData.append("courseId", course._id);

//     dispatch(PublishorDraftCourse(formData, token, status, navigate));
//   };

//   return (
//     <div className="flex flex-col gap-y-5 animate-fadeIn">
//       <form
//         onSubmit={handleSubmit(submitHandler)}
//         className="w-[95%] bg-[#ffffff]/[0.02] border border-[#ffffff]/10 rounded-3xl mx-auto flex flex-col gap-y-6 py-8 px-8 backdrop-blur-xl"
//       >
//         <div className="flex items-center gap-2 text-[#f97316] mb-2">
//            <FiCheckCircle />
//            <p className="text-[10px] font-bold uppercase tracking-[0.4em]">Step 3: Final Deployment (अंतिम चरण)</p>
//         </div>
        
//         <h2 className="text-2xl text-white font-bold tracking-tight">Service Visibility Settings</h2>

//         {/* Visibility Toggle */}
//         <label className="flex items-center justify-between p-4 bg-white/5 rounded-2xl cursor-pointer hover:bg-white/10 transition-all">
//           <div className="flex items-center gap-3">
//             <FiGlobe className="text-[#f97316]" />
//             <span className="text-sm text-gray-300">Make this Service Public (वेबसाइट पर दिखाएं)</span>
//           </div>
//           <input
//             type="checkbox"
//             {...register("PublishORDraft")}
//             className="w-5 h-5 accent-[#f97316] cursor-pointer"
//           />
//         </label>

//         {/* Interaction Toggle */}
//         <label className="flex items-center justify-between p-4 bg-white/5 rounded-2xl cursor-pointer hover:bg-white/10 transition-all">
//           <div className="flex items-center gap-3">
//             <FiRadio className="text-[#f97316]" />
//             <span className="text-sm text-gray-300">Enable Live Support / Instant Booking</span>
//           </div>
//           <input
//             type="checkbox"
//             {...register("TeachLiveOrNot")}
//             className="w-5 h-5 accent-[#f97316] cursor-pointer"
//           />
//         </label>

//         <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5">
//           <button
//             type="button"
//             className="flex items-center gap-2 text-[#4b5563] hover:text-white transition-all text-xs font-bold uppercase tracking-widest"
//             onClick={() => dispatch(setStep(2))}
//           >
//             <IoIosArrowBack /> Back (वापस)
//           </button>
          
//           <button type="submit" className="px-8 py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-[#f97316] hover:text-white transition-all active:scale-95 shadow-lg">
//             Finalize & Go Live
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Publish;



import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { COURSE_STATUS } from "../../../../../../Utilities/Constaints";
import { useDispatch, useSelector } from "react-redux";
import { PublishorDraftCourse } from "../../../../../../Services.jsx/Operations/DashBoard";
import { useNavigate } from "react-router-dom";
import { setStep } from "../../../../../../Slices/Courses";
import { IoIosArrowBack } from "react-icons/io";
import { FiGlobe, FiRadio, FiCheckCircle } from "react-icons/fi";

const Publish = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);
  const { course } = useSelector((state) => state.Course);

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();

  useEffect(() => {
    if (course) {
      const isPublished = course?.status === COURSE_STATUS.PUBLISHED;
      const isLive = course?.TeachLive === true;

      setValue("PublishORDraft", isPublished);
      setValue("TeachLiveOrNot", isLive);
      
      console.log("Service Sync: Data Loaded into Form", { isPublished, isLive });
    }
  }, [course, setValue]);

  const submitHandler = (data) => {
    if (!course?._id) return;

    const status = data.PublishORDraft ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT;
    const formData = new FormData();
    
    formData.append("status", status);
    formData.append("TeachLive", data.TeachLiveOrNot);
    formData.append("courseId", course._id);

    dispatch(PublishorDraftCourse(formData, token, status, navigate));
  };

  return (
    <div className="flex flex-col gap-y-5 animate-fadeIn px-2 md:px-0">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full md:w-[95%] bg-[#ffffff]/[0.02] border border-[#ffffff]/10 rounded-[1.5rem] md:rounded-3xl mx-auto flex flex-col gap-y-6 py-6 md:py-8 px-4 md:px-8 backdrop-blur-xl"
      >
        {/* Step Indicator */}
        <div className="flex items-center gap-2 text-[#f97316] mb-1">
           <FiCheckCircle className="shrink-0" />
           <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] leading-tight">
             Step 3: Final Deployment <span className="hidden xs:inline">(अंतिम चरण)</span>
           </p>
        </div>
        
        <h2 className="text-xl md:text-2xl text-white font-bold tracking-tight leading-tight">
          Service Visibility Settings
        </h2>

        {/* Visibility Toggle */}
        <label className="flex items-center justify-between p-3 md:p-4 bg-white/5 rounded-2xl cursor-pointer hover:bg-white/10 transition-all gap-x-3">
          <div className="flex items-center gap-3">
            <FiGlobe className="text-[#f97316] shrink-0" size={18} />
            <span className="text-xs md:text-sm text-gray-300 leading-tight">
              Make this Service Public <span className="hidden sm:inline">(वेबसाइट पर दिखाएं)</span>
            </span>
          </div>
          <input
            type="checkbox"
            {...register("PublishORDraft")}
            className="w-5 h-5 accent-[#f97316] cursor-pointer shrink-0"
          />
        </label>

        {/* Interaction Toggle */}
        <label className="flex items-center justify-between p-3 md:p-4 bg-white/5 rounded-2xl cursor-pointer hover:bg-white/10 transition-all gap-x-3">
          <div className="flex items-center gap-3">
            <FiRadio className="text-[#f97316] shrink-0" size={18} />
            <span className="text-xs md:text-sm text-gray-300 leading-tight">
              Enable Live Support / Instant Booking
            </span>
          </div>
          <input
            type="checkbox"
            {...register("TeachLiveOrNot")}
            className="w-5 h-5 accent-[#f97316] cursor-pointer shrink-0"
          />
        </label>

        {/* Actions */}
        <div className="flex justify-between items-center mt-4 md:mt-6 pt-6 border-t border-white/5 gap-x-4">
          <button
            type="button"
            className="flex items-center gap-1 md:gap-2 text-[#4b5563] hover:text-white transition-all text-[10px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap"
            onClick={() => dispatch(setStep(2))}
          >
            <IoIosArrowBack size={16} /> <span className="hidden xs:inline">Back</span>
          </button>
          
          <button 
            type="submit" 
            className="px-4 md:px-8 py-3 rounded-xl bg-white text-black font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#f97316] hover:text-white transition-all active:scale-95 shadow-lg whitespace-nowrap"
          >
            Finalize & Go Live
          </button>
        </div>
      </form>
    </div>
  );
};

export default Publish;