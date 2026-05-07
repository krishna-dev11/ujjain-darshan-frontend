import { combineReducers } from '@reduxjs/toolkit'

import authReducer from '../Slices/Auth'
import profileReducer from '../Slices/Profile'
import serviceReducer from '../Slices/Services'
import serviceCategoryReducer from '../Slices/ServiceCategories'
import serviceSectionReducer from '../Slices/ServiceSection'
import serviceMediaReducer from '../Slices/ServiceMedia'
import bookingCartReducer from '../Slices/BookingCart'
import walkInReducer from '../Slices/WalkInSlice'
import expenseReducer from "../Slices/expenseSlice";
// import { testimonialReducer } from '../Slices/TestimonialSlice'
import { testimonialReducer } from "../Slices/testimonialSlice"

export const rootReducer = combineReducers({
    auth:authReducer,
    profile:profileReducer,
    service:serviceReducer,
    serviceCategory:serviceCategoryReducer,
    serviceSection:serviceSectionReducer,
    serviceMedia:serviceMediaReducer,
    bookingCart : bookingCartReducer,
    walkIn: walkInReducer,
    expense: expenseReducer,
    testimonial: testimonialReducer,
})
