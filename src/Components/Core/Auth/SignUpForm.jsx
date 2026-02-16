import React, { useState } from "react";
import { FiEye, FiEyeOff, FiGithub, FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setSignUpData } from "../../../Slices/Auth";
import { sendOtp, setGoogleLogin } from "../../../Services.jsx/Operations/authAPI";
import { setUser } from "../../../Slices/Profile";
import { GoogleLogin } from "@react-oauth/google";
import Tab from "../../Common/Tab";
import { ACCOUNT_TYPE, TabData } from "../../../Utilities/Constaints";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    lastName: "",
    CreatePassword: "",
    ConfirmPassword: "",
    EmailAddress: "",
  });

  const [showCreatepassword, setShowCreatepassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (formData.ConfirmPassword !== formData.CreatePassword) {
      toast.error("Passwords do not match");
      return;
    }
    const data = { ...formData, accountType };
    dispatch(setSignUpData(data));
    dispatch(sendOtp(formData.EmailAddress, navigate));
    dispatch(setUser(data));
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    if (!accountType) {
      toast.error("Please select account type first");
      return;
    }
    dispatch(setGoogleLogin(credentialResponse.credential, accountType, navigate));
  };

  // const inputStyle = "w-full bg-[#1A1A1A] border border-[#ffffff]/5 rounded-xl px-4 py-3 text-[#ffffff] placeholder-[#4b5563] focus:border-[#10b981]/30 outline-none transition-all text-sm";
  const labelStyle = "text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b7280] ml-1 mb-1.5 block";

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#000000] p-4 md:p-10 font-sans">
      
      {/* ─── MAIN HUB CONTAINER ─── */}
      {/* Laptop: Fixed height 85vh | Phone: Auto height */}
      <div className="w-full lg:w-[90%] max-w-6xl h-auto lg:h-[85vh] bg-[#0a0a0a] rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col lg:flex-row border border-[#ffffff]/5">

{/* ─── LEFT PANEL (Divine Manifesto) ─── */}
{/* 'hidden md:flex' ensures it only shows on tablets and desktops */}
<div className="hidden md:flex w-full lg:w-1/2 bg-gradient-to-br from-[#0f0a05] via-[#000000] to-[#0a0a0a] p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#ffffff]/5">
  
  {/* Ambient Divine Glows */}
  <div className="absolute top-[-5%] left-[-5%] w-64 h-64 bg-[#f97316]/10 blur-[100px] rounded-full" />
  <div className="absolute bottom-[-5%] right-[-5%] w-48 h-48 bg-[#ffd700]/5 blur-[80px] rounded-full" />

  <div className="relative z-10 space-y-6 lg:space-y-8">
    
    {/* Spiritual Branding Node */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 flex items-center justify-center border border-[#f97316]/30 shadow-lg shrink-0">
        <span className="text-[#f97316] font-black text-lg italic">S</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ffffff]">Shree Ji</span>
        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#f97316] mt-1">Divine Yatra</span>
      </div>
    </div>

    {/* Majestic Heading - Text sizes reduced for cleaner look */}
    <div className="space-y-3">
      <h1 className="text-[#ffffff] text-3xl lg:text-5xl font-black tracking-tighter leading-tight uppercase">
        Embark on your <br /> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] via-[#ffffff] to-[#ffd700] italic">
          Divine Journey
        </span>
      </h1>
      <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed max-w-[280px] italic">
        Experience the spiritual essence of Avantika with personalized Darshan protocols.
      </p>
    </div>

    {/* Journey Roadmap - More compact for mobile-view (tablets) */}
    <div className="flex flex-col gap-y-5 pt-2">
      {[
        {s: "01", t: "Identity Sync", d: "Connecting your devotion"}, 
        {s: "02", t: "Sacred Planning", d: "Tailoring your visit"}, 
        {s: "03", t: "Divine Activation", d: "Seamless experience"}
      ].map((step, i) => (
        <div key={i} className={`flex items-start gap-4 transition-all duration-700 ${i > 0 ? "opacity-30 grayscale" : "opacity-100"}`}>
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-[9px] shrink-0 ${i === 0 ? "bg-[#f97316] text-[#000000] shadow-lg" : "border border-gray-800 text-gray-600"}`}>
            {step.s}
          </div>
          <div className="flex flex-col">
            <p className="text-[#ffffff] text-[10px] font-black uppercase tracking-widest">{step.t}</p>
            <p className="text-gray-600 text-[8px] font-bold uppercase tracking-tighter">{step.d}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Trust Badge */}
    <div className="pt-4 flex items-center gap-3 opacity-30">
       <div className="h-px w-6 bg-gray-700" />
       <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-gray-500">Official Portal</p>
    </div>
  </div>
</div>

        {/* ─── RIGHT PANEL (Form) ─── */}
        {/* Laptop: Internal Scroll enabled | Phone: Regular flow */}
<div className="w-full lg:w-1/2 bg-[#000000] p-6 lg:p-10 flex flex-col justify-center lg:overflow-hidden">
  
  {/* Header Section - Compact */}
  <div className="mb-4 lg:mb-6">
    <h2 className="text-xl lg:text-2xl font-bold text-[#ffffff] tracking-tight text-center lg:text-left uppercase">
      Register Candidate
    </h2>
    <p className="text-[#6b7280] text-[11px] mt-1 font-light text-center lg:text-left">
      Initiate your transformation protocol.
    </p>
  </div>

  {/* Tab Section - Reduced Margin */}
  <div className="mb-4 flex justify-center lg:justify-start transform scale-90 origin-left">
     <Tab tabData={TabData} accountType={accountType} setaccountType={setAccountType} />
  </div>

  <form onSubmit={SubmitHandler} className="flex flex-col gap-3">
    
    {/* NAME ROW - Tight Gap */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <label>
        <span className={labelStyle}>First Name</span>
        <div className="group">
          <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4b5563] group-focus-within:text-[#10b981] text-xs" />
          <input 
            required name="FirstName" type="text" placeholder="John" 
            value={formData.FirstName} onChange={changeHandler} 
            className="w-full bg-[#1A1A1A] border border-[#ffffff]/5 rounded-lg px-10 py-2.5 text-[#ffffff] placeholder-[#4b5563] focus:border-[#10b981]/30 outline-none transition-all text-xs" 
          />
        </div>
      </label>
      <label>
        <span className={labelStyle}>Last Name</span>
        <input 
          required name="lastName" type="text" placeholder="Doe" 
          value={formData.lastName} onChange={changeHandler} 
          className="w-full bg-[#1A1A1A] border border-[#ffffff]/5 rounded-lg px-4 py-2.5 text-[#ffffff] placeholder-[#4b5563] focus:border-[#10b981]/30 outline-none transition-all text-xs" 
        />
      </label>
    </div>

    {/* EMAIL - Compact */}
    <label>
      <span className={labelStyle}>Communication Node (Email)</span>
      <div className="group">
        <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4b5563] group-focus-within:text-[#10b981] text-xs" />
        <input 
          required name="EmailAddress" type="email" placeholder="candidate@email.com" 
          value={formData.EmailAddress} onChange={changeHandler} 
          className="w-full bg-[#1A1A1A] border border-[#ffffff]/5 rounded-lg px-10 py-2.5 text-[#ffffff] placeholder-[#4b5563] focus:border-[#10b981]/30 outline-none transition-all text-xs" 
        />
      </div>
    </label>

    {/* PASSWORDS - Side by Side Always for Laptop */}
    <div className="grid grid-cols-2 gap-3">
      <label className="">
        <span className={labelStyle}>Create Pass</span>
        <div className=" group">
          <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4b5563] text-xs" />
          <input 
            required name="CreatePassword" type={showCreatepassword ? "text" : "password"} 
            placeholder="••••" value={formData.CreatePassword} onChange={changeHandler} 
            className="w-full bg-[#1A1A1A] border border-[#ffffff]/5 rounded-lg px-10 py-2.5 text-[#ffffff] outline-none text-xs" 
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#4b5563]" onClick={() => setShowCreatepassword(!showCreatepassword)}>
            {showCreatepassword ? <FiEyeOff size={14} /> : <FiEye size={14} />}
          </span>
        </div>
      </label>
      <label className="">
        <span className={labelStyle}>Confirm Pass</span>
        <input 
          required name="ConfirmPassword" type={showConfirmPassword ? "text" : "password"} 
          placeholder="••••" value={formData.ConfirmPassword} onChange={changeHandler} 
          className="w-full bg-[#1A1A1A] border border-[#ffffff]/5 rounded-lg px-4 py-2.5 text-[#ffffff] outline-none text-xs" 
        />
      </label>
    </div>

    {/* SIGN UP BUTTON - Scaled Padding */}
    <button type="submit" className="w-full bg-[#ffffff] text-[#000000] font-bold py-3 rounded-xl mt-2 uppercase tracking-[0.2em] text-[9px] shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:bg-[#10b981] transition-all active:scale-95 flex items-center justify-center gap-2">
      Sync Account <FiArrowRight size={14} />
    </button>

    {/* THIRD-PARTY - Compact Layout */}
    <div className="flex flex-col gap-3 mt-2">
      <div className="flex items-center gap-3">
        <div className="h-[1px] bg-[#ffffff]/5 flex-1" />
        <span className="text-[8px] font-bold text-[#4b5563] uppercase tracking-widest">Handshake</span>
        <div className="h-[1px] bg-[#ffffff]/5 flex-1" />
      </div>
      <div className="flex gap-2">
        <div className="flex-1 bg-[#ffffff]/[0.03] border border-[#ffffff]/5 py-1 rounded-lg flex justify-center scale-90 origin-center">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => toast.error("Sync Failed")} />
        </div>
        <button type="button" className="flex-1 bg-[#ffffff]/[0.03] border border-[#ffffff]/5 rounded-lg text-[#ffffff] text-[9px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#ffffff]/5 transition-all">
           Github
        </button>
      </div>
    </div>

    <p className="text-[#4b5563] text-center text-[9px] font-bold uppercase tracking-widest mt-2">
      Already verified? <Link to="/login" className="text-[#ffffff] hover:text-[#10b981] transition-colors ml-1">Access Terminal</Link>
    </p>
  </form>
</div>
      </div>
    </div>
  );
};

export default SignUpForm;