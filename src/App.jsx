import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import NavBar from "./Components/Common/NavBar";
import EnterOtp from "./Pages/EnterOtp";
import ForgotPassword from "./Pages/ForgotPassword";
import ResendEmail from "./Pages/ResendEmail";
import UpdatePassword from "./Pages/UpdatePassword";
import AboutPage from "./Pages/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage";
import ResestCompletePage from "./Pages/ResestCompletePage";
import OpenRoute from "./Components/Core/Auth/OpenRoute";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./Components/Core/Auth/PrivateRoute";
import MyProfile from "./Components/Core/DashBoard/RightPart/MyProfile";
// import BookedServices from "./Components/Core/DashBoard/RightPart/BookedServicesfolder/BookedServices";
import PurchaseHistory from "./Components/Core/DashBoard/RightPart/PurchaseHistory";
import SavedServices from "./Components/Core/DashBoard/RightPart/SavedServices";
import SettingIndex from "./Components/Core/DashBoard/RightPart/Settings/SettingIndex";
import AddNewService from "./Components/Core/DashBoard/RightPart/AddService/AddNewService";
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "./Utilities/Constaints";
import DisplayMyServices from "./Components/Core/DashBoard/RightPart/MyServices/DisplayMyServices";
import EditPreviousService from "./Components/Core/DashBoard/RightPart/EditService/EditPreviousService";
import NotFound from "./Components/Common/NotFound";
import DisplayCategoryWiseServices from "./Pages/DisplayCategoryWiseServices";
import OneServiceDetail from "./Pages/OneServiceDetail";
import BookedServices from "./Pages/BookedServices";
import ActiveServiceList from "./Components/Core/BookedServices/Right/ActiveServiceList";
import Bookmarks from "./Components/Core/BookedServices/Right/Bookmarks";
import Community from "./Components/Core/BookedServices/Right/Community";
import ViewService from "./Pages/ViewService";
import ViewServiceMedia from "./Components/Core/ViewService/Right/ViewServiceMedia";
import CustomerServices from "./Components/Core/DashBoard/RightPart/CustomerServices";
import BusinessDashboard from "./Components/Core/DashBoard/RightPart/BusinessDashboard/BusinessDashboard";
import EnterRoom from "./Pages/EnterRoom";
import LiveClass from "./Pages/LiveClass";
import StartLive from "./Components/Core/DashBoard/RightPart/StartLive";
import GoLive from "./Components/Core/DashBoard/RightPart/GoLive";
import AIGeminiChat from "./Components/Common/AIGeminiChat";
import BatchStudents from "./Components/Core/DashBoard/BatchStudents";
import AddWalkInStudent from "./Components/Core/DashBoard/WalkIn/AddWalkInStudent";
import WalkInList from "./Components/Core/DashBoard/WalkIn/WalkInList";
import ConvertWalkInToEnrollment from "./Components/Core/DashBoard/WalkIn/ConvertWalkInToEnrollment";
import MarkNotInterested from "./Components/Core/DashBoard/WalkIn/MarkNotInterested";
import ExpensesDashboard from "./Components/Core/DashBoard/ExpensesDashboard";
import AddTestimonial from "./Components/Core/DashBoard/Testimonials/AddTestimonial";
import TestimonialsDashboard from "./Components/Core/DashBoard/Testimonials/TestimonialsDashboard";
import CollectInstallment from "./Components/Core/BookedServices/Right/CollectInstallment";
import WhatsAppChat from "./Components/Common/WhatsAppChat";

function App() {

  const { user } = useSelector((state) => state.profile);
  // console.log(user.accountType)

  return (
    <div className="h-screen bg-black">
      
      <NavBar />
      <div>
              <AIGeminiChat/>
              <WhatsAppChat/>
              </div>
      
      <Routes >
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/CourseDetails/:CourseId" element={<OneServiceDetail />}/>




      


        <Route path="/catalog/:categoryName/:categoryId" element={<DisplayCategoryWiseServices />} />

        {/* OPEN Routes */}
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="/enterOtp"
          element={
            <OpenRoute>
              <EnterOtp />
            </OpenRoute>
          }
        />
        <Route
          path="/forgotPassword"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="/update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="/resendToken"
          element={
            <OpenRoute>
              <ResendEmail />
            </OpenRoute>
          }
        />
        <Route
          path="/resetCompletePage"
          element={
            <OpenRoute>
              <ResestCompletePage />
            </OpenRoute>
          }
        />

        {/* PRIVATE ROUTE */}

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard/my-profile" element={<MyProfile />} />
          <Route path="/dashboard/setting" element={<SettingIndex />} />

          { 
             user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="/dashboard/purchase-history"
                element={<PurchaseHistory />}
              />
              <Route path="/dashboard/wishlist" element={<SavedServices />} />
              <Route path="/dashboard/courses" element={<CustomerServices/>} />
            </>
          )}

          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="/dashboard/add-course" element={<AddNewService />} />
              <Route
                path="/dashboard/my-courses"
                element={<DisplayMyServices />}
              />
              <Route path="/dashboard/edit-course" element={<EditPreviousService />} />
              <Route path="/dashboard/instructor" element={<BusinessDashboard/>}/>
              <Route path="/dashboard/StartLive/:CourseId" element={<StartLive />} />
              <Route path="/dashboard/:RoomId" element={<GoLive/>}/>
              <Route path="/dashboard/add-walkin" element={<AddWalkInStudent />} />

              <Route path="/dashboard/walkins" element={<WalkInList />} />
<Route path="/dashboard/walkin/convert/:walkInId" element={<ConvertWalkInToEnrollment />} />
<Route path="/dashboard/walkin/mark-not-interested/:walkInId" element={<MarkNotInterested />} />
              <Route path="/dashboard/expenses" element={<ExpensesDashboard />} />
              <Route path= "/dashboard/Testimonils" element={<AddTestimonial/>}/>
              <Route path= "/dashboard/AllTestimonilsListAndModify" element={<TestimonialsDashboard/>}/>




              
            </>
          )}

        </Route>


        <Route
          element={
            <PrivateRoute>
              <BookedServices />
            </PrivateRoute>
          }
        >
          <Route path="/BookedServices/active-Courses" element={<ActiveServiceList/>} />
          <Route path="/BookedServices/book-marks" element={<Bookmarks/>} />
          <Route path="/BookedServices/community" element={<Community/>} />
          <Route path="/BookedServices/EnterRoom" element={<EnterRoom/>}/>
          <Route path="/BookedServices/:RoomId" element={<LiveClass/>}/>

          <Route path="/BookedServices/batch-students/:batchId" element={<BatchStudents />} />
          <Route path="/BookedServices/collect-installment/:batchId/:studentId" element={<CollectInstallment/>} />


        </Route>


        <Route
          element={
            <PrivateRoute>
              <ViewService/>
            </PrivateRoute>
          }
        >
          <Route path="/course/:CourseId/section/:SectionId/subSection/:SubSectionId" element={<ViewServiceMedia/>} />

        </Route>


      </Routes>

    </div>
  );
}

export default App;
