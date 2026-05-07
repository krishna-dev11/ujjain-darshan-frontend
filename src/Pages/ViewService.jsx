import React from 'react'
import { Outlet } from 'react-router-dom'
import ViewServiceSidebar from '../Components/Core/ViewService/left/ViewServiceSidebar'
import { Helmet } from "react-helmet-async";


const ViewService = () => {
  return (
    <div className=' flex w-full h-[calc(100%-6%)] translate-y-10 fixed '>
    
      <Helmet>
    <title>View Course | Shree Ji Divine Yatra</title>
    <meta name="robots" content="noindex, nofollow" />
  </Helmet>

    <div className='bg-white  transition-all  overflow-auto duration-200
     flex flex-col gap-y-5 w-[35%] '>
       <ViewServiceSidebar/>
    </div>
      
      <div className='border-l-richblack-100   border  h-full w-full  overflow-auto  '>
         <Outlet/>
      </div>
      
    </div>
  )
}



export default ViewService