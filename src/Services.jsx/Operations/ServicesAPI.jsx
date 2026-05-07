import toast from "react-hot-toast";
import { catalogData, serviceEndpoints, ratingsEndpoints } from "../apis";
import { setLoading } from "../../Slices/Auth";
import { apiConnector } from "../apiConnector";
import {
  setCategoryWiseServices,
  setWholeServiceData,
} from "../../Slices/ServiceCategories";
import {
  // setBookedServicesDataForCard,
  setServiceCompletionPercentageData,
  setRatingAndReviewData,
  setTotalServiceDuration,
  setBookedServicesDataForCard,
} from "../../Slices/Services";
import { setUser } from "../../Slices/Profile";

const { CATALOGPAGEDATA_API } = catalogData;

const { CREATE_RATING_API, GET_ALL_RATING_AND_REVIEW } = ratingsEndpoints;

const {
  GET_FULL_SERVICE_DETAILS_AUTHENTICATED,
  GET_ALL_BOOKED_SERVICES_FOR_CARD_VIEW,
  UPDATE_SERVICE_PROGRESS_API,  GET_SERVICE_PROGRESS_PERCENTAGE , GET_TOTAL_SERVICE_DURATION
} = serviceEndpoints;

export function GetCategoryWiseServicesData(categoryId) {
  return async (dispatch) => {
    // console.log(categoryId);
    const toastId = toast.loading("Loading");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", CATALOGPAGEDATA_API, {
        categoryId,
      });

      // console.log(response.data.data);
      dispatch(setCategoryWiseServices(response.data.data));
      // localStorage.setItem("CategoryCourses" , JSON.stringify(response.data.data))

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function GetWholeServiceDetails(courseId) {
  return async (dispatch) => {
    // console.log( categoryId)
    const toastId = toast.loading("Loading");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "POST",
        GET_FULL_SERVICE_DETAILS_AUTHENTICATED,
        {
          courseId,
        }
      );

      // console.log(response.data.data);
      dispatch(setWholeServiceData(response.data.data));
      // localStorage.setItem("CategoryCourses" , JSON.stringify(response.data.data))

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function GetBookedServicesDataForCustomerCards(customerId, token) {
  return async (dispatch) => {
    // console.log(customerId, token);
    const toastId = toast.loading("Loading");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "POST",
        GET_ALL_BOOKED_SERVICES_FOR_CARD_VIEW,
        { StudentId: customerId },
        {
          Authorization: `Bearer ${token}`,
        }
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      // console.log(response.data.data);
      dispatch(setBookedServicesDataForCard(response.data.data));
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function CreateRating(courseId, rating, reviews, token) {
  return async (dispatch) => {
    // console.log( categoryId)
    const toastId = toast.loading("Loading");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "POST",
        CREATE_RATING_API,
        {
          courseId,
          rating,
          reviews,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Rating Created");
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function GetAllRatingAndReview() {
  return async (dispatch) => {
    // console.log(customerId, token);
    const toastId = toast.loading("Loading");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", GET_ALL_RATING_AND_REVIEW);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      // console.log(response.data.data);
      dispatch(setRatingAndReviewData(response.data.data));
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function UpdateServiceProgress(courseId, subSectionId, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "POST",
        UPDATE_SERVICE_PROGRESS_API,
        {
          courseId,
          subSectionId,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      dispatch(setUser(response.data.data));
      localStorage.setItem("user", JSON.stringify(response.data.data));

      toast.success("Lecture Mark As Completed");
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function GetServiceCompletionPercentage(userId, courseId , token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "POST",
        GET_SERVICE_PROGRESS_PERCENTAGE,
        {
          userId,
          courseId,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
    //  console.log(response.data.data)
     dispatch(setServiceCompletionPercentageData(response.data.data));
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}


export function GetTotalServiceDuration( courseId , token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "POST",
        GET_TOTAL_SERVICE_DURATION,
        {
          courseId,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
    //  console.log(response.data.data)
     dispatch(setTotalServiceDuration(response.data.data));
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}
