import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import Contact from "./components/Common/Contact";
import AuthProvider from "./components/Common/AuthProvider";
import Courses from "./components/Home/Courses/Courses";
import Admission from "./components/Common/Admission";
import Login from "./components/Common/Login";
import Register from "./components/Common/Register";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[

      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/courses",
        element: <Courses></Courses>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path:"/form",
        element: <Admission></Admission>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
   
  </React.StrictMode>
);
