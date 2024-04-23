import { useContext, useEffect, useState } from "react";
import logo from "../../../public/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { RiContactsFill } from "react-icons/ri";

import { AuthContext } from "./AuthProvider";

const NavBar = () => {
    
  const { logOut, user } = useContext(AuthContext);

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
          return isActive ? "text-orange-500 hover:text-xl " : "text-white";
        }}
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive }) => {
          return isActive ? "text-orange-500 hover:text-xl" : "text-white";
        }}
      >
        <li>Courses</li>
      </NavLink>
      <NavLink
        to="/form"
        className={({ isActive }) => {
          return isActive ? "text-orange-500 hover:text-xl" : "text-white";
        }}
      >
        <li>Admission Form</li>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => {
          return isActive ? "text-orange-500 hover:text-xl " : "text-white";
        }}
      >
        <li>Contact</li>
      </NavLink>
      {user ? (
        <>
          <a onClick={handleLogOut} className="text-white">
            Sign out
          </a>{" "}
          <span>{user.email}</span>
        </>
      ) : (
        <NavLink to="/login">
          <button className="text-white">Login</button>
        </NavLink>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
          </ul>
        </div>
        <Link to="/" className="backdrop-blur-3xl bg-white-100">
          <img src={logo} className="w-20 " alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-7">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="w-10 rounded-full">
          <RiContactsFill className="text-[#5755FE]" />
          {/* {user ? (
            <img alt={user.email} src={user.photourl} />
          ) : ( */}

          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;