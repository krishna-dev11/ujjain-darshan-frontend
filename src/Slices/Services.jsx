import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   Step:1,
   service:null,
   course:null,
   editService : false , 
   bookedServicesDataForCard : null,
   serviceMediaUrl: null,
   RatingAndReviewData:[] , 
   serviceCompletionPercentageData : null , 
   totalServiceDuration : null
}



  const ServiceSlice = createSlice({
    name:"service",
    initialState,
    reducers : {
         setStep(state , action){
            state.Step = action.payload
         },
         setService(state , action){
            state.service = action.payload
            state.course = action.payload
         },
         setEditService(state , action){
            state.editService = action.payload
         },
         setBookedServicesDataForCard(state , action){
            state.bookedServicesDataForCard = action.payload
         },
         setCurrentServiceMediaUrl(state , action){
            state.serviceMediaUrl = action.payload
         },
         setRatingAndReviewData(state , action){
            state.RatingAndReviewData = action.payload
         },
         setServiceCompletionPercentageData(state , action){
            state.serviceCompletionPercentageData = action.payload
         },
         setTotalServiceDuration(state , action){
            state.totalServiceDuration = action.payload
         }
      }
      })

  export const {setStep , setService , setRatingAndReviewData , setEditService , setBookedServicesDataForCard ,setCurrentServiceMediaUrl , setServiceCompletionPercentageData , setTotalServiceDuration} = ServiceSlice.actions
  export default ServiceSlice.reducer
