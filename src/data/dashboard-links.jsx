// // import { useSelector } from "react-redux";
// import { ACCOUNT_TYPE } from "../Utilities/Constaints";
// // import { useEffect } from "react";
// import { IoContractOutline } from "react-icons/io5";




// export const sidebarLinks = [
//   // ===================== INSTRUCTOR =====================
//   {
//     section: "OVERVIEW",
//     roles: [ACCOUNT_TYPE.INSTRUCTOR],
//     links: [
//       {
//         name: "Dashboard",
//         path: "/dashboard/instructor",
//         icon: "FaTachometerAlt",
//       },
//       {
//         name: "My Profile",
//         path: "/dashboard/my-profile",
//         icon: "FaUser",
//       },
//     ],
//   },

//   {
//     section: "COURSE MANAGEMENT",
//     roles: [ACCOUNT_TYPE.INSTRUCTOR],
//     links: [
//       {
//         name: "My Courses",
//         path: "/dashboard/my-courses",
//         icon: "FaTv",
//       },
//       {
//         name: "Add Course",
//         path: "/dashboard/add-course",
//         icon: "FaPlus",
//       },
//     ],
//   },

//   // {
//   //   section: "BATCH & STUDENTS",
//   //   roles: [ACCOUNT_TYPE.INSTRUCTOR],
//   //   links: [
//   //     {
//   //       name: "Add WalkIn",
//   //       path: "/dashboard/add-walkin",
//   //       icon: "FaUserPlus",
//   //     },
//   //     {
//   //       name: "WalkIns",
//   //       path: "/dashboard/walkins",
//   //       icon: "FaUsers",
//   //     },
//   //   ],
//   // },

//   // {
//   //   section: "FINANCE",
//   //   roles: [ACCOUNT_TYPE.INSTRUCTOR],
//   //   links: [
//   //     {
//   //       name: "Add Expenses",
//   //       path: "/dashboard/expenses",
//   //       icon: "FaRupeeSign",
//   //     },
//   //   ],
//   // },

//   {
//     section: "TESTIMONIALS",
//     roles: [ACCOUNT_TYPE.INSTRUCTOR],
//     links: [
//       {
//         name: "Add Testimonial",
//         path: "/dashboard/Testimonils",
//         icon: "FaCommentDots",
//       },
//       {
//         name: "All Testimonials",
//         path: "/dashboard/AllTestimonilsListAndModify",
//         icon: "FaListAlt",
//       },
//     ],
//   },

//   // ===================== STUDENT =====================
//   {
//     section: "STUDENT AREA",
//     roles: [ACCOUNT_TYPE.STUDENT],
//     links: [
//       {
//         name: "My Profile",
//         path: "/dashboard/my-profile",
//         icon: "FaUser",
//       },
//       {
//         name: "Enrolled Courses",
//         path: `/EnrolledCourses/active-Courses`,
//         icon: "FaBook",
//       },
//       {
//         name: "Purchase History",
//         path: "/dashboard/purchase-history",
//         icon: "FaShoppingCart",
//       },
//       {
//         name: "Wishlist",
//         path: "/dashboard/wishlist",
//         icon: "FaBookmark",
//       },
//     ],
//   },
// ];




// export const BuyedCoursessidebarLinks = [
//   {
//     name: "Active Courses",
//     path: "/EnrolledCourses/active-Courses",
//     icon: "FaBook",
//   },
//   {
//     name: "Bookmarks",
//     path: "/EnrolledCourses/book-marks",
//     icon: "FaBookmark",
//   },
//   {
//     name: "Community",
//     path: "/EnrolledCourses/community",
//     icon: "FaRegComments",
//   },
//   {
//     name: "Students",
//     path: "/EnrolledCourses/batch-students/:batchId",
//     icon: ""
//   },


// ];





import { ACCOUNT_TYPE } from "../Utilities/Constaints";

export const sidebarLinks = [
  // ===================== INSTRUCTOR (NOW: ADMIN / SEVA MANAGER) =====================
  {
    section: "INSIGHTS",
    roles: [ACCOUNT_TYPE.INSTRUCTOR],
    links: [
      {
        name: "Admin Dashboard",
        path: "/dashboard/instructor",
        icon: "FaTachometerAlt",
      },
      {
        name: "My Profile",
        path: "/dashboard/my-profile",
        icon: "FaUserShield",
      },
    ],
  },

  {
    section: "SERVICE MANAGEMENT",
    roles: [ACCOUNT_TYPE.INSTRUCTOR],
    links: [
      {
        name: "Yatra Portfolio",
        path: "/dashboard/my-courses",
        icon: "FaSun", // Spiritual Icon
      },
      {
        name: "Add New Service",
        path: "/dashboard/add-course",
        icon: "FaPlusSquare",
      },
    ],
  },

  {
    section: "PILGRIM FEEDBACK",
    roles: [ACCOUNT_TYPE.INSTRUCTOR],
    links: [
      {
        name: "Add Experience",
        path: "/dashboard/Testimonils",
        icon: "FaOm",
      },
      {
        name: "Manage Reviews",
        path: "/dashboard/AllTestimonilsListAndModify",
        icon: "FaHistory",
      },
    ],
  },

  // ===================== STUDENT (NOW: DEVOTEE / PILGRIM) =====================
  {
    section: "DEVOTEE AREA",
    roles: [ACCOUNT_TYPE.STUDENT],
    links: [
      {
        name: "My Profile",
        path: "/dashboard/my-profile",
        icon: "FaUser",
      },
      // {
      //   name: "My Bookings",
      //   path: `/EnrolledCourses/active-Courses`,
      //   icon: "FaPrayingHands",
      // },
      // {
      //   name: "Payment Records",
      //   path: "/dashboard/purchase-history",
      //   icon: "FaReceipt",
      // },
      {
        name: "Wishlist Packages",
        path: "/dashboard/wishlist",
        icon: "FaHeart",
      },
    ],
  },
];

export const BuyedCoursessidebarLinks = [
  // {
  //   name: "Active Darshan",
  //   path: "/EnrolledCourses/active-Courses",
  //   icon: "FaMapMarkedAlt",
  // },
  // {
  //   name: "Saved Protocols",
  //   path: "/EnrolledCourses/book-marks",
  //   icon: "FaBookmark",
  // },
  // {
  //   name: "Devotee Sangat",
  //   path: "/EnrolledCourses/community",
  //   icon: "FaUsers",
  // },
  {
    name: "Yatri Directory",
    path: "/EnrolledCourses/batch-students/:batchId",
    icon: "FaAddressBook"
  },
];