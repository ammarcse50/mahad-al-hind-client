import { NavLink, Outlet } from "react-router-dom";
import useStudentsData from "../../components/Hooks/useStudentsData";
import useAuth from "../../components/Hooks/useAuth";
import { FaBook, FaCertificate, FaHome, FaStar } from "react-icons/fa";
import IsAdmin from "../../components/Hooks/IsAdmin";

const navLinkStyle = ({ isActive }) => ({
  backgroundColor: isActive ? "red" : "transparent",
  borderRadius: "4px",
  padding: "4px",
});

const Dashboard = () => {
  const [isAdmin] = IsAdmin();
  const { user } = useAuth();
  const [students] = useStudentsData();

  return (
    <div className="w-full flex">
      {/* Sidebar */}
      <div className="bg-black bg-gradient-to-t via-blue-400 from-slate-500 text-white min-h-screen w-full md:w-1/4 p-4 md:p-6 text-center">
        <div className="flex flex-col items-center">
          {/* User Profile */}
          <img
            src={user?.photoURL || "/default-profile.png"}
            className="rounded-full w-20 h-20 md:w-24 md:h-24 object-cover mb-4"
            alt="User Profile"
          />
          {/* Navigation */}
          <ul className="flex flex-col items-center gap-4 text-sm md:text-base">
            {isAdmin ? (
              <>
                <li className="font-bold">
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center gap-2"
                    to={"/dashboard/adminHome"}
                  >
                    <FaHome className="text-2xl md:text-xl" />
                    <span className="hidden md:block">Admin Home</span>
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center gap-2"
                    to={"/dashboard/manageUser"}
                  >
                    <FaBook className="text-2xl md:text-xl" />
                    <span className="hidden md:block">Manage Users</span>
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center gap-2"
                    to={"/dashboard/manageStudent"}
                  >
                    <FaBook className="text-2xl md:text-xl" />
                    <span className="hidden md:block">Manage Students</span>
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center gap-2"
                    to={"/dashboard/manageMessage"}
                  >
                    <FaBook className="text-2xl md:text-xl" />
                    <span className="hidden md:block">Manage Message</span>
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center gap-2"
                    to={"/dashboard/manageCourse"}
                  >
                    <FaStar className="text-2xl md:text-xl" />
                    <span className="hidden md:block">Manage Course</span>
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center gap-2"
                    to={"/dashboard/manageCertificate"}
                  >
                    <FaCertificate className="text-2xl md:text-xl" />
                    <span className="hidden md:block">Manage Certificate</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="font-bold">
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center gap-2"
                    to={"/dashboard/userHome"}
                  >
                    <FaHome className="text-2xl md:text-xl" />
                    <span className="hidden md:block">User Home</span>
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center gap-2"
                    to={"/dashboard/course"}
                  >
                    <FaBook className="text-2xl md:text-xl" />
                    <span className="hidden md:block">User Course</span>
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center gap-2"
                    to={"/dashboard/rating"}
                  >
                    <FaStar className="text-2xl md:text-xl" />
                    <span className="hidden md:block">Add Rating</span>
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    style={navLinkStyle}
                    className="flex items-center gap-2"
                    to={"/dashboard/certificate"}
                  >
                    <FaCertificate className="text-2xl md:text-xl" />
                    <span className="hidden md:block">Your Certificate</span>
                  </NavLink>
                </li>
              </>
            )}
            {/* Common Home Link */}
            <div className="divider"></div>
            <li className="font-bold">
              <NavLink
                style={navLinkStyle}
                className="flex items-center gap-2"
                to={"/"}
              >
                <FaHome className="text-2xl md:text-xl" />
                <span className="hidden md:block">Home</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 bg-white border md:p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
