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
import AdminHome from "./pages/Dashboard/AdminDashboard/AdminHome";
import ManageUser from "./pages/Dashboard/AdminDashboard/ManageUser";
import ManageCourse from "./pages/Dashboard/AdminDashboard/ManageCourse";
import RatingUser from "./pages/Dashboard/RatingUser";
import AdminRoute from "./components/Common/PrivateRoutes/AdminRoute/AdminRoute";
import ManageStudent from "./pages/Dashboard/AdminDashboard/ManageStudent";
import ManageCertificate from "./pages/Dashboard/AdminDashboard/ManageCertificate";
import ManageMessage from "./pages/Dashboard/AdminDashboard/ManageMessage";

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
            element: <RatingUser></RatingUser>,
          },
          //only admin
          {
            path: "/dashboard/adminHome",
            element: (
              <AdminRoute>
                <AdminHome></AdminHome>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/manageUser",
            element: (
              <AdminRoute>
                <ManageUser></ManageUser>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/manageStudent",
            element: (
              <AdminRoute>
                <ManageStudent></ManageStudent>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/manageCourse",
            element: (
              <AdminRoute>
                <ManageCourse></ManageCourse>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/manageMessage",
            element: (
              <AdminRoute>
                <ManageMessage></ManageMessage>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/manageCertificate",
            element: (
              <AdminRoute>
                <ManageCertificate></ManageCertificate>
              </AdminRoute>
            ),
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(

    <AuthProvider>
    
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>{" "}
    </AuthProvider>

);
