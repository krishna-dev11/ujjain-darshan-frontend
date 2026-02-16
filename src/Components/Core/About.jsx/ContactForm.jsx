// import React, { useEffect } from 'react'
// import { useForm } from 'react-hook-form'
// // import { useDispatch } from 'react-redux'
// import CountryCode from '../../../data/countrycode.json'
// import toast from 'react-hot-toast'

// const ContactForm = ({heading , description }) => {

//     // const dispatch = useDispatch()

//     const {
//          register,
//          handleSubmit,
//          reset,
//          formState:{isSubmitSuccessful }
//     } = useForm()

//     useEffect(()=>{
//           if(isSubmitSuccessful){
//             reset({
//                 FirstName : "",
//                 LastName : "",
//                 EmaiAddress : "",
//                 message : "",
//                 ContactNumber : "",
//                 CountryCode : ""
//             })
//           }
//     } , [reset , isSubmitSuccessful])

//     const ActionTaken = ()=>{

//         // console.log(event)

//         toast.success("We Are Connected to You ")

//         // dispatch()
//     }

//   return (
//     <form onSubmit={handleSubmit(ActionTaken)} className=' w-full max-w-[600px] bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden'>

//          <div className=' flex flex-col '>

//            <div className=' flex flex-col text-center'>
//            <p className="text-richblack-5 text-[1.5rem] md:text-[1.7rem] font-semibold font-inter leading-[2.5rem] md:leading-[2.75rem]">{heading}</p>
//            <p className=" text-richblack-300 font-inter text-[.8rem] ">{description}</p>
//            </div>

//          <div className=' flex gap-x-3  justify-between mt-8'>

// <label>
// <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">First Name<sup className="text-pink-200">*</sup></p>
// <input
//        type='text'
//        placeholder='Enter First Name'
//        name='FirstName'
//        {...register('FirstName' , {
//             required:{
//                 value:true,
//                 message:"Please Enter Your First Name"
//             }
//        })}
//         className='w-full rounded-[0.5rem] bg-white/[0.02] backdrop-blur-2xl border border-white/10  p-[10px] placeholder-gray-500 text-richblack-5'
//         style={{
//            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//     />
//     {/* {
//       errors.FirstName.message && (
//         <div></div>
//       )
//     } */}
// </label>

// <label>
//     <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Last Name<sup className="text-pink-200">*</sup></p>
//     <input
//        type='text'
//        placeholder='Enter Last Name'
//        name='LastName'
//        {...register('LastName' , {
//             required:{
//                 value:true,
//                 message:"Please Enter Your Last Name "
//             }
//        })}
//        className='w-full rounded-[0.5rem] bg-white/[0.02] backdrop-blur-2xl border border-white/10  p-[10px] placeholder-gray-500 text-richblack-5'
//         style={{
//            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//     />
//     {/* {
//       errors.LastName.message && (
//         <div></div>
//       )
//     } */}
// </label>

// </div>


// <label>
//        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Email Address<sup className="text-pink-200">*</sup></p>            
//        <input
//        type='email'
//        placeholder='Enter Email Address'
//        name='EmaiAddress'
//        {...register('EmaiAddress' , {
//             required:{
//                 value:true,
//                 message:"Please Enter Your LEmail Address "
//             }
//        })}
//        className='w-full rounded-[0.5rem] bg-white/[0.02] backdrop-blur-2xl border border-white/10  p-[10px] placeholder-gray-500 text-richblack-5'
//         style={{
//            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//     />
//     {/* {
//       errors.LastName.message && (
//         <div></div>
//       )
//     } */}
// </label>


// <label>
//      <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Phone Number<sup className="text-pink-200">*</sup></p>
//      <div className=' flex gap-x-3'>
//       <select 
//            name='CountryCode'
//            {...register('CountryCode' , {
//                required:{
//                 value:true,
//                 message:"Please Provide a country Code"
//                }
//            })}
//            className=' w-[19%] rounded-[0.5rem] bg-white/[0.02] backdrop-blur-2xl border border-white/10  p-[10px] placeholder-gray-500 text-richblack-5'
//         style={{
//            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}>
//         {
//            CountryCode.map((Country , index)=>(
//             <option key={index} className='text-black '>{Country.code} - {Country.country} </option>
//            ))
//         }
//       </select>
//       <input 
//         type='tel'
//         name='ContactNumber'
//         placeholder='Please Enter Your Contact Number'
//         {...register('ContactNumber' , {
//             required:{
//                 value:true,
//                 message:"Please Enter Your Phone Number"
//             },
//             maxLength:{
//                 value:10,
//                 message:"Contact Numbe of 10 Digits"
//             },
//             minLength:{
//                 value:10,
//                 message:"Contact Numbe of 10 Digits"
//             }
//         })}
//         className=' w-[80%] rounded-[0.5rem] bg-white/[0.02] backdrop-blur-2xl border border-white/10  p-[10px] placeholder-gray-500 text-richblack-5'
//         style={{
//            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//       />
//      </div>
    
// </label>



// <label>
//     <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Message<sup className="text-pink-200">*</sup></p>
//     <textarea
//         name='message'
//         cols={20}
//         rows={7}
//         placeholder='All Educators are Wonderful'
//         // defaultValue=" the Educators is Such a Wonderful  "
//         {...register('message'  , {
//             required : {
//                 value: true,
//                 message : "Please Provide message to Our"
//             }
//         })}
//         className=' w-full rounded-[0.5rem] bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-[10px] placeholder-gray-500 text-richblack-5'
//         style={{
//            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//     />
//     {
        
//     }
// </label>

// <button
// type="submit"
// className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
//  >
//    Create Account
// </button>

//          </div>

//     </form>
//   )
// }

// export default ContactForm














import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import CountryCode from '../../../data/countrycode.json'
import toast from 'react-hot-toast'

const ContactForm = ({ heading, description }) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitSuccessful }
    } = useForm()

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                FirstName: "",
                LastName: "",
                EmaiAddress: "",
                message: "",
                ContactNumber: "",
                CountryCode: ""
            })
        }
    }, [reset, isSubmitSuccessful])

    const ActionTaken = () => {
        toast.success("Jai Mahakal! Your request has been received.")
    }

    const inputStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#FFFFFF',
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.1)"
    }

    return (
        <form onSubmit={handleSubmit(ActionTaken)} className='w-full max-w-[600px] bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden'>
            
            {/* Subtle Aura Glow behind form */}
            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-[#F97316]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className='flex flex-col relative z-10'>
                <div className='flex flex-col text-center mb-8'>
                    <h2 style={{ color: '#FFFFFF' }} className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
                        {heading}
                    </h2>
                    <p style={{ color: '#9CA3AF' }} className="mt-2 text-sm font-medium italic">
                        {description}
                    </p>
                </div>

                <div className='flex flex-col md:flex-row gap-4 mb-4'>
                    <label className='flex-1'>
                        <p style={{ color: '#FFFFFF' }} className="mb-2 text-[10px] font-bold uppercase tracking-widest ml-1">First Name <span className='text-[#F97316]'>*</span></p>
                        <input
                            type='text'
                            placeholder='Enter First Name'
                            {...register('FirstName', { required: true })}
                            style={inputStyle}
                            className='w-full rounded-2xl p-4 placeholder-gray-600 outline-none focus:border-[#F97316]/40 transition-all'
                        />
                    </label>

                    <label className='flex-1'>
                        <p style={{ color: '#FFFFFF' }} className="mb-2 text-[10px] font-bold uppercase tracking-widest ml-1">Last Name <span className='text-[#F97316]'>*</span></p>
                        <input
                            type='text'
                            placeholder='Enter Last Name'
                            {...register('LastName', { required: true })}
                            style={inputStyle}
                            className='w-full rounded-2xl p-4 placeholder-gray-600 outline-none focus:border-[#F97316]/40 transition-all'
                        />
                    </label>
                </div>

                <label className='mb-4'>
                    <p style={{ color: '#FFFFFF' }} className="mb-2 text-[10px] font-bold uppercase tracking-widest ml-1">Email Address <span className='text-[#F97316]'>*</span></p>
                    <input
                        type='email'
                        placeholder='devotee@example.com'
                        {...register('EmaiAddress', { required: true })}
                        style={inputStyle}
                        className='w-full rounded-2xl p-4 placeholder-gray-600 outline-none focus:border-[#F97316]/40 transition-all'
                    />
                </label>

                <label className='mb-4'>
                    <p style={{ color: '#FFFFFF' }} className="mb-2 text-[10px] font-bold uppercase tracking-widest ml-1">Mobile Number <span className='text-[#F97316]'>*</span></p>
                    <div className='flex gap-x-3'>
                        <select
                            {...register('CountryCode', { required: true })}
                            style={inputStyle}
                            className='w-[25%] rounded-2xl p-4 outline-none appearance-none cursor-pointer text-center'
                        >
                            {CountryCode.map((Country, index) => (
                                <option key={index} value={Country.code} className='bg-black text-white'>
                                    {Country.code}
                                </option>
                            ))}
                        </select>
                        <input
                            type='tel'
                            placeholder='00000 00000'
                            {...register('ContactNumber', { 
                                required: true, 
                                maxLength: 10, 
                                minLength: 10 
                            })}
                            style={inputStyle}
                            className='flex-1 rounded-2xl p-4 placeholder-gray-600 outline-none focus:border-[#F97316]/40 transition-all'
                        />
                    </div>
                </label>

                <label className='mb-6'>
                    <p style={{ color: '#FFFFFF' }} className="mb-2 text-[10px] font-bold uppercase tracking-widest ml-1">Message (Yatra Details) <span className='text-[#F97316]'>*</span></p>
                    <textarea
                        rows={4}
                        placeholder='Tell us about your Ujjain visit plans...'
                        {...register('message', { required: true })}
                        style={inputStyle}
                        className='w-full rounded-2xl p-4 placeholder-gray-600 outline-none focus:border-[#F97316]/40 transition-all resize-none'
                    />
                </label>

                <button
                    type="submit"
                    style={{ 
                        backgroundColor: '#FFFFFF', 
                        color: '#000000',
                        boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)'
                    }}
                    className="w-full rounded-2xl py-4 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-[#F97316] hover:text-white transition-all active:scale-95 shadow-xl"
                >
                    Submit Yatra Inquiry
                </button>
            </div>
        </form>
    )
}

export default ContactForm