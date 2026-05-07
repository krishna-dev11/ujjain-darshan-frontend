import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   category : [] , 
   categoryWiseServices : null,
   serviceDetails : null
}


  const ServiceCategorySlice = createSlice({
    name:"serviceCategory",
    initialState,
    reducers : {
         setCategories(state , action){
            state.category = action.payload
         },
         setCategoryWiseServices(state , action){
            state.categoryWiseServices = action.payload
         },
         setWholeServiceData(state , action){
            state.serviceDetails = action.payload
         }
      }
      })

  export const {setCategories , setCategoryWiseServices , setWholeServiceData } = ServiceCategorySlice.actions
  export default ServiceCategorySlice.reducer
