import { useContext, useEffect, useState } from "react";
import logo from "../../../public/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { RiContactsFill } from "react-icons/ri";
import dp from "../../../public/images/def.png";
import { useMediaQuery } from "react-responsive";

import { AuthContext } from "./AuthProvider";

const NavBar = () => {
  const { logOut, user } = useContext(AuthContext);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user logged out successfully"))
      .catch((error) => console.error(error));
  };

  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "text-orange-500  hover:text-xl " : "text-white";
        }}
      >
        <li className="text-xl">Home</li>
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive }) => {
          return isActive ? "text-orange-500 hover:text-xl" : "text-white";
        }}
      >
        <li className="text-xl">Courses</li>
      </NavLink>
      <NavLink
        to="/form"
        className={({ isActive }) => {
          return isActive ? "text-orange-500 hover:text-xl" : "text-white";
        }}
      >
        <li className="text-xl">Admission Form</li>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => {
          return isActive ? "text-orange-500 hover:text-xl " : "text-white";
        }}
      >
        <li className="text-xl">Contact</li>
      </NavLink>
      {user ? (
        <>
          <a onClick={handleLogOut} className="text-white text-xl">
            Sign out
          </a>
        </>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) => {
            return isActive ? "text-orange-500 hover:text-xl " : "text-white";
          }}
        >
          <li className="text-xl ">Login</li>
        </NavLink>
      )}
    </>
  );
  return (
    <div className="navbar h-24 bg-base-100 z-10 fixed top-0 shadow-lg shadow-orange-500  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-9"
          >
            {navlinks}
            <div className="w-6 rounded-full">
              {user ? (
                <>
                  <img src={dp} className="ml-12" alt="img" />{" "}
                  <span className="">{user.email}</span>
                </>
              ) : (
                <RiContactsFill className="text-[#18f90c]" />
              )}
            </div>
          </ul>
        </div>
        <Link to="/" className="backdrop-blur-3xl bg-white-100">
          <img src={logo} className="w-20 " alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-7">{navlinks}</ul>
      </div>
      {isDesktop && (
        <div className="md:navbar-end  ">
          <div className="w-6 rounded-full ">
            {user ? (
              <>
                <img src={dp} className="ml-12" alt="img" />{" "}
                <span className="">{user.email}</span>
              </>
            ) : (
              <RiContactsFill className="text-[#18f90c]" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
