import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedServiceIds : localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
}
 


  const BookingCartSlice = createSlice({
    name:"bookingCart",
    initialState,
    reducers : {
         setSelectedServiceIds(state , action){
            state.selectedServiceIds = action.payload
         }
      }
      })

  export const { setSelectedServiceIds } = BookingCartSlice.actions
  export default BookingCartSlice.reducer
