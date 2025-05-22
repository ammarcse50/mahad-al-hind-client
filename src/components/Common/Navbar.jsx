import { useEffect, useState } from "react";
import logo from "/images/green.png";
import { Link, NavLink } from "react-router-dom";
import { RiContactsFill } from "react-icons/ri";
import profile from "/images/profile.png";
import useAuth from "../Hooks/useAuth";
import useUsers from "../Hooks/useUsers";
import IsAdmin from "../Hooks/IsAdmin";
const navLinkStyle = ({ isActive }) => {
  const isMobile = window.innerWidth < 1024; // lg breakpoint

  return {
    backgroundColor: isActive ? '#159e53' : 'transparent',
    borderRadius: '4px',
    padding: '4px 8px',
    color: isMobile ? '#ffffff' : (isActive ? '#fff' : '#222'), // white for mobile
    fontWeight: '500',
    textDecoration: 'none',
  };
};


const NavBar = () => {
  const { logOut, user } = useAuth();
  const [isAdmin] = IsAdmin();
  const [users] = useUsers();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogOut = async () => {
    await logOut()
      .then(() => console.log("user logged out successfully"))
      .catch((error) => console.error(error));
  };
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1024);

useEffect(() => {
  const handleResize = () => {
    setIsMobileView(window.innerWidth < 1024);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navlinks = (
  <>
    <li>
      <NavLink to="/" style={navLinkStyle}>Home</NavLink>
    </li>
    <li>
      <NavLink to="/courses" style={navLinkStyle}>Courses</NavLink>
    </li>
    <li>
      <NavLink to="/form" style={navLinkStyle}>Admission Form</NavLink>
    </li>
    <li>
      <NavLink to="/checker" style={navLinkStyle}>Check Certificate</NavLink>
    </li>
    <li>
      <NavLink to="/contact" style={navLinkStyle}>Contact</NavLink>
    </li>

    {user ? (
      <>
        <li>
          <a onClick={handleLogOut} className="cursor-pointer" style={{ ...navLinkStyle({ isActive: false }) }}>
            Sign out
          </a>
        </li>
        <li>
          <NavLink
            to={isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"}
            style={navLinkStyle}
          >
            My Dashboard
          </NavLink>
        </li>
      </>
    ) : (
      <li>
        <NavLink to="/login" style={navLinkStyle}>Login</NavLink>
      </li>
    )}
  </>
);


  return (
    <div
      className={`navbar fixed top-0 w-full font-bold  z-50 transition-all duration-300 ${
        isScrolled ? 'bg-whiteist bg-opacity-40 backdrop-blur-md' : 'bg-whiteistS'
      }`}
    >
      {/* Mobile Navbar Start */}
      <div className="w-full flex items-center justify-between px-4 lg:hidden">
        {/* Logo - Left */}
        <Link to="/" className="flex items-center py-2">
          <img src={logo} className="w-12 md:w-20 rounded-full" alt="Logo" />
        </Link>

        {/* Dropdown Menu - Right */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

<ul
  tabIndex={0}
  className="menu menu-sm dropdown-content right-0 mt-3 p-4 shadow bg-black bg-opacity-90 backdrop-blur-md rounded-box w-56 gap-4 z-50 text-white"
>

            {navlinks}
            <div className="rounded-full w-6">
              {user ? (
                <>
                  <img src={user?.photoURL || users?.photo} className="ml-12" alt="User" />
                  <span className="text-white text-sm">{user.email}</span>
                </>
              ) : (
                <RiContactsFill className="text-[#18f90c]" />
              )}
            </div>
          </ul>
        </div>
      </div>

      {/* Desktop Navbar */}
    <div className="hidden lg:flex items-center justify-between w-full px-6">
  {/* Left: Logo */}
  <div className="flex-shrink-0">
    <Link to="/" className="flex items-center py-2">
      <img src={logo} className="w-16 rounded-full" alt="Logo" />
    </Link>
  </div>

  {/* Center: Nav Links */}
  <div className="flex-1 flex justify-center">
    <ul className="menu menu-horizontal gap-4">{navlinks}</ul>
  </div>

  {/* Right: Profile Icon */}
  <div className="flex-shrink-0">
    <Link to={isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"}>
      {user ? (
        <img className="w-12 h-12 object-cover rounded-full" src={user?.photoURL || users?.photo} alt="User" />
      ) : (
        <img src={profile} className="w-12 h-12 object-cover rounded-full" alt="Profile" />
      )}
    </Link>
  </div>
</div>

    </div>
  );
};

export default NavBar;
