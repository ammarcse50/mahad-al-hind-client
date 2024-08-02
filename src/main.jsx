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
import Profile from "./pages/Dashboard/Profile";

import PaymentHistory from "./pages/Dashboard/PaymentHistory";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import CourseEnroll from "./pages/Dashboard/CourseEnroll";
import Certificate from "./pages/Dashboard/Certificate";
import PrivateRoute from "./components/Common/PrivateRoutes/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Rating from "./pages/Dashboard/Rating";
import AdminHome from "./pages/Dashboard/AdminDashboard/AdminHome";
import ManageUser from "./pages/Dashboard/AdminDashboard/ManageUser";
import AddCourse from "./pages/Dashboard/AdminDashboard/AddCourse";
import AddCertificate from "./pages/Dashboard/AdminDashboard/AddCertificate";
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
        element: <Admission></Admission>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <Profile></Profile>,
          },
          //only users
          {
            path: "/dashboard/userHome",
            element: <Profile></Profile>,
          },

          {
            path: "/dashboard/payment",
            element: <PaymentHistory></PaymentHistory>,
          },
          {
            path: "/dashboard/course",
            element: <CourseEnroll></CourseEnroll>,
          },
          {
            path: "/dashboard/certificate",
            element: <Certificate></Certificate>,
          },
          {
            path: "/dashboard/rating",
            element: <Rating></Rating>,
          },
          //only admin
          {
            path: "/dashboard/adminHome",
            element: <AdminHome></AdminHome>,
          },
          {
            path: "/dashboard/manageUser",
            element: <ManageUser></ManageUser>,
          },
          {
            path: "/dashboard/manageCourse",
            element: <AddCourse></AddCourse>,
          },
          {
            path: "/dashboard/manageCertificate",
            element: <AddCertificate></AddCertificate>,
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
