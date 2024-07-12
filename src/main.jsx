import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./components/Layout/Main";

import AuthProvider from "./components/Common/AuthProvider";

import Admission from "./components/Common/Admission";
import Login from "./components/Common/Login";
import Register from "./components/Common/Register";
import Home from "../src/pages/Home/Home";
import Courses from "../src/pages/Home/Courses/Courses";
import Contact from "../src/pages/Contact/Contact";
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import Profile from "./pages/Dashboard/Profile";

import PaymentHistory from "./pages/Dashboard/PaymentHistory";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import CourseEnroll from "./pages/Dashboard/CourseEnroll";
import Certificate from "./pages/Dashboard/Certificate";
import PrivateRoutes from "./components/Common/PrivateRoutes/PrivateRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/form",
        element: <Admission></Admission> ,
      },
      {
        path: "/dashboard",
        element: <StudentDashboard></StudentDashboard>,
        children: [
          {
            path: "/dashboard",
            element: <Profile></Profile>,
          },
          {
            path: "/dashboard/profile",
            element: <Profile></Profile>,
          },

          {
            path: "/dashboard/payment",
            element: <PaymentHistory></PaymentHistory>,
          },
          {
            path: "/dashboard/courseenroll",
            element: <CourseEnroll></CourseEnroll>,
          },
          {
            path: "/dashboard/certificate",
            element: <Certificate></Certificate>,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>{" "}
    </AuthProvider>
  </React.StrictMode>
);
