import logo from "../../../public/images/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { RiContactsFill } from "react-icons/ri";
import  profile from "/images/profile.png"
import useAuth from "../Hooks/useAuth";
import useUsers from "../Hooks/useUsers";
import Headroom from "react-headroom";
const navLinkStyle = ({ isActive }) => ({
  backgroundColor: isActive ? "lime" : "transparent",
  borderRadius: "4px",
  padding: "4px",
  color: "white"
});

const NavBar = () => {
  const { logOut, user } = useAuth();

  const [users] = useUsers();

  const handleLogOut = async () => {
    await logOut()
      .then(() => console.log("user logged out successfully"))
      .catch((error) => console.error(error));
  };

  const navlinks = (
    <>
      <li className="text-xl">
        {" "}
        <NavLink to="/" style={navLinkStyle}>
          Home
        </NavLink>
      </li>
      <li className="text-xl">
        {" "}
        <NavLink to="/courses" style={navLinkStyle}>
          Courses
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/form" style={navLinkStyle}>
          Admission Form
        </NavLink>
      </li>
      <li className="text-xl">
        {" "}
        <NavLink to="/contact" style={navLinkStyle}>
          Contact
        </NavLink>
      </li>
      {user ? (
        <>
          <a onClick={handleLogOut} className="text-black text-xl">
            Sign out
          </a>
          <a className="text-black text-xl">
            {" "}
            <NavLink to="/dashboard" style={navLinkStyle}>
              My Dashboard
            </NavLink>
          </a>
        </>
      ) : (
        <li className="text-xl ">
          {" "}
          <NavLink to="/login" style={navLinkStyle}>
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <Headroom className="z-50 ">
      <div className="navbar  top-0 bg-black font-bold bg-opacity-30 lg:shadow-xl text-center  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                color="white"
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
              className="menu menu-sm  dropdown-content  mt-3 z-[1] p-2 shadow bg-black bg-opacity-60 rounded-box w-52 gap-9"
            >
              {navlinks}
              <div className="w-6 rounded-full">
                {user ? (
                  <>
                    <img src={user?.photoURL} className="ml-12" alt="img" />{" "}
                    <span className="">{user.email}</span>
                  </>
                ) : (
                  <RiContactsFill className="text-[#18f90c]" />
                )}
              </div>
            </ul>
          </div>
          <Link to="/" className="backdrop-blur-3xl bg-white-100">
            <img src={logo} className="w-20 rounded-full" alt="" />
          </Link>
        </div>
        <div className="navbar hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-7">{navlinks}</ul>
        </div>

        <div className=" hidden lg:flex">
          <Link to={"/dashboard/userHome"}>
            {" "}
            {user ? (
              <img
                className="w-20 rounded-full"
                src={user?.photoURL || users[0]?.photo}
                alt="upload"
              />
            ) : (
              <img src={profile} className="h-20 rounded-full"/>
            )}
          </Link>
        </div>
      </div>
    </Headroom>
  );
};

export default NavBar;
