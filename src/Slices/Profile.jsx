import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

const initialState = {
    user : localStorage.getItem("user") ? (JSON.parse(localStorage.getItem("user"))) : null,
    Loading : false,
    BusinessDashboardData : [],
    InstructorCoursesData:[]
}

  const profileSlice = createSlice({
    name:"profile",
    initialState,
    reducers : {
        setUser(state , action){
            state.user = action.payload
        } , 
        setLoading(state , action){
          state.Loading = action.payload
        },
        setBusinessDashboardData(state , action){
          state.BusinessDashboardData = action.payload
        },
        setInstructorCoursesForDashboardData(state , action){
          state.InstructorCoursesData = action.payload
        },
        
      }
      })

  export const { setUser ,setLoading , setBusinessDashboardData , setInstructorCoursesForDashboardData} = profileSlice.actions
  export default profileSlice.reducer