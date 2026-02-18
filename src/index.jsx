// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from 'react-redux'
// import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./Reducers/rootReducer";
// import { Toaster } from "react-hot-toast";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// const store = configureStore({
//   reducer:rootReducer
// })

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
//       <Provider store={store}>
//         <BrowserRouter>
//           <App />
//           <Toaster />
//         </BrowserRouter>
//       </Provider>
//     </GoogleOAuthProvider>
//   </React.StrictMode>
// );










import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducers/rootReducer";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { HelmetProvider } from "react-helmet-async";   // ✅ IMPORT ADDED

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider> {/* ✅ WRAP ADDED */}
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
            <Toaster />
          </BrowserRouter>
        </Provider>
      </GoogleOAuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
