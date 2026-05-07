import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FiChevronLeft, FiChevronRight, FiLayers, FiPlus } from "react-icons/fi";
import { AddNewSection, EditSection } from "../../../../../../Services.jsx/Operations/DashBoard";
import ServiceSectionMediaDisplay from "./ServiceSectionMediaDisplay";
import { setEditService, setStep } from "../../../../../../Slices/Services";
import { SetEditSection } from "../../../../../../Slices/ServiceSection";

const ServiceBuilder = () => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.service);
  const { token } = useSelector((state) => state.auth);
  const { editSection } = useSelector((state) => state.serviceSection);

  useEffect(() => {
    setValue("sectionName", editSection ? editSection.sectionName : "");
  }, [editSection, setValue]);

  const onFormSubmit = (data) => {
    const formData = new FormData();

    if (editSection) {
      if (editSection.sectionName === data.sectionName) return;
      formData.append("sectionName", data.sectionName);
      formData.append("sectionId", editSection._id);
      formData.append("CourseId", course._id);
      dispatch(EditSection(formData, token));
      dispatch(SetEditSection(null));
    } else {
      formData.append("sectionName", data.sectionName);
      formData.append("courseId", course._id);
      dispatch(AddNewSection(formData, token));
    }

    setValue("sectionName", "");
  };

  return (
    <div className="flex flex-col gap-6 md:gap-10 w-full max-w-5xl mx-auto pb-10 font-sans px-3 md:px-0 overflow-x-hidden">
      <div className="bg-white/[0.02] border border-white/10 p-4 sm:p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] backdrop-blur-2xl shadow-2xl relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl pointer-events-none" />

        <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-10">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0">
            <FiLayers className="text-orange-400" size={16} />
          </div>
          <h3 className="text-base md:text-xl font-bold tracking-tight text-white uppercase leading-tight truncate">
            Service Timeline <span className="hidden sm:inline">Architect</span>
          </h3>
        </div>

        <div className="w-full">
          <ServiceSectionMediaDisplay />
        </div>

        <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8 md:mt-10 flex flex-col gap-4">
          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
            Service Phase Name <span className="text-orange-500">*</span>
          </label>

          <div className="flex flex-col md:flex-row gap-3 w-full">
            <input
              placeholder="e.g. Day 1: VIP Darshan"
              {...register("sectionName", { required: true })}
              className="w-full md:flex-1 bg-white/[0.03] border border-white/5 rounded-xl md:rounded-2xl px-4 md:px-6 py-3.5 md:py-4 text-white text-sm focus:border-orange-500/30 outline-none transition-all placeholder-gray-700"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-4 md:px-8 py-3.5 md:py-0 bg-orange-500 text-white font-black rounded-xl md:rounded-2xl hover:bg-orange-400 transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(249,115,22,0.15)] active:scale-95 shrink-0"
            >
              <FiPlus className="text-white" size={16} />
              <span className="text-[10px] md:text-xs uppercase tracking-widest whitespace-nowrap">
                {editSection ? "Update" : "Add Phase"}
              </span>
            </button>
          </div>

          {editSection && (
            <button
              onClick={() => dispatch(SetEditSection(null))}
              className="text-[10px] text-gray-500 hover:text-white transition-colors w-fit ml-1 underline underline-offset-4"
            >
              Cancel Edit
            </button>
          )}
        </form>
      </div>

      <div className="flex justify-between items-center gap-3 w-full">
        <button
          onClick={() => {
            dispatch(setEditService(true));
            dispatch(setStep(1));
          }}
          className="flex items-center gap-1 text-gray-500 hover:text-white transition-all text-[8px] md:text-xs font-black uppercase tracking-widest shrink-0"
        >
          <FiChevronLeft size={14} /> <span className="hidden xs:inline">Service</span> Metadata
        </button>

        <button
          onClick={() => dispatch(setStep(3))}
          className="flex items-center gap-1 px-4 md:px-10 py-3 md:py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl md:rounded-2xl hover:bg-white/10 transition-all text-[8px] md:text-xs uppercase tracking-widest"
        >
          Publish <span className="hidden xs:inline">Phase</span> <FiChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default ServiceBuilder;
