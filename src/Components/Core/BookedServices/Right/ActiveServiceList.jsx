import { useEffect, useState } from "react";
import { FiArrowLeft, FiInbox, FiZap } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetBookedServicesDataForCustomerCards } from "../../../../Services.jsx/Operations/ServicesAPI";
import BookedServiceCard from "./BookedServiceCard";

const ActiveServiceList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { bookedServicesDataForCard } = useSelector((state) => state.service);
  const { user } = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookedServices = async () => {
      if (!user?._id || !token) {
        setLoading(false);
        return;
      }

      try {
        await dispatch(GetBookedServicesDataForCustomerCards(user._id, token));
      } catch (error) {
        console.error("Unable to fetch booked services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookedServices();
  }, [dispatch, user?._id, token]);

  if (loading) {
    return (
      <div className="h-screen bg-[#000000] flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-[#6A0DAD]/20 border-t-[#6A0DAD] rounded-full animate-spin" />
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#4b5563]">
          Loading booked services...
        </p>
      </div>
    );
  }

  const bookedServices = bookedServicesDataForCard?.courses || [];

  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff] p-4 md:p-10 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col gap-y-4 border-b border-[#ffffff]/5 pb-6 md:pb-10">
          <div
            className="flex gap-x-2 items-center text-[#4b5563] hover:text-[#10b981] cursor-pointer transition-colors group w-fit"
            onClick={() => navigate("/dashboard/my-profile")}
          >
            <FiArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">Return</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
              Active{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A0DAD] to-[#a78bfa]">
                Services
              </span>
            </h1>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#ffffff]/5 border border-[#ffffff]/10 rounded-lg w-fit">
              <FiZap className="text-[#10b981]" size={14} />
              <span className="text-[9px] md:text-[10px] font-bold text-[#ffffff] uppercase tracking-widest">
                {bookedServices.length} Active
              </span>
            </div>
          </div>
        </div>

        {bookedServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {bookedServices.map((service) => (
              <BookedServiceCard key={service._id} data={service} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 md:py-32 gap-4 border border-dashed border-[#ffffff]/10 rounded-[2rem] md:rounded-[3rem] px-4 text-center">
            <FiInbox size={32} className="text-[#4b5563] md:size-[48px]" />
            <div>
              <p className="text-base md:text-lg font-bold uppercase tracking-tight">No Active Bookings</p>
              <p className="text-[9px] md:text-xs text-[#4b5563] mt-1 uppercase tracking-widest font-bold">
                Book a service to begin.
              </p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="mt-4 px-6 md:px-8 py-2.5 md:py-3 bg-[#ffffff] text-[#000000] font-bold rounded-xl text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-[#10b981] transition-all"
            >
              Browse Services
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActiveServiceList;
