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
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
