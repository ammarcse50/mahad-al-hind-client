import { NavLink, Outlet } from "react-router-dom";
import useStudentsData from "../../components/Hooks/useStudentsData";
import useAuth from "../../components/Hooks/useAuth";
import { FaBook, FaCertificate, FaHome, FaStar } from "react-icons/fa";
import IsAdmin from "../../components/Hooks/IsAdmin";

const navLinkStyle = ({ isActive }) => ({
  backgroundColor: isActive ? "lime" : "transparent",
  borderRadius: "4px",
  padding: "4px",
});

const Dashboard = () => {
  const [isAdmin ]= IsAdmin();

  const { user } = useAuth();

  const [students] = useStudentsData();
  console.log(students);

  // console.log(students);
  // const first_name = students[0]?.first_name;
  // const last_name = students[0]?.last_name;

  return (
    <div className="w-full md:flex">
      <div className="min-h-screen bg-black bg-gradient-to-t via-blue-400 from-slate-500 md:w-1/4  text-center ">
        <ul className="flex flex-col justify-center items-center text-xl gap-5 pt-32">
          <img src={user?.photoURL} className="mx-auto" alt="" />
          {isAdmin ? (
            <>
              {" "}
              <li className=" font-bold">
                <NavLink
                  style={navLinkStyle}
                  className={`flex items-center gap-2`}
                  to={"/dashboard/adminHome"}
                >
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li className=" font-bold">
                <NavLink
                  style={navLinkStyle}
                  className={"flex items-center gap-2"}
                  to={"/dashboard/manageUser"}
                >
                  <FaBook />
                  Manage Users
                </NavLink>
              </li>
              <li className=" font-bold">
                <NavLink
                  style={navLinkStyle}
                  className={"flex items-center gap-2"}
                  to={"/dashboard/manageStudent"}
                >
                  <FaBook />
                  Manage Students
                </NavLink>
              </li>
              <li className=" font-bold">
                <NavLink
                  style={navLinkStyle}
                  className={"flex items-center gap-2"}
                  to={"/dashboard/manageCourse"}
                >
                  <FaStar /> Manage Course
                </NavLink>
              </li>
             
              <li className=" font-bold">
                <NavLink
                  style={navLinkStyle}
                  className={"flex items-center gap-2"}
                  to={"/dashboard/manageCertificate"}
                >
                  <FaCertificate />
                  Manage Certificate
                </NavLink>
              </li>
              <div className="divider"></div>
              <li className="font-bold">
                <NavLink
                  style={navLinkStyle}
                  className={"flex items-center gap-2"}
                  to={"/"}
                >
                  <FaHome />
                  Home
                </NavLink>
              </li>{" "}
            </>
          ) : (
            <>
              {" "}
              <li className=" font-bold">
                <NavLink
                  style={navLinkStyle}
                  className={`flex items-center gap-2`}
                  to={"/dashboard/userHome"}
                >
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li className=" font-bold">
                <NavLink
                  style={navLinkStyle}
                  className={"flex items-center gap-2"}
                  to={"/dashboard/course"}
                >
                  <FaBook /> User Course
                </NavLink>
              </li>
              <li className=" font-bold">
                <NavLink
                  style={navLinkStyle}
                  className={"flex items-center gap-2"}
                  to={"/dashboard/rating"}
                >
                  <FaStar /> Add Rating
                </NavLink>
              </li>
              <li className=" font-bold">
                <NavLink
                  style={navLinkStyle}
                  className={"flex items-center gap-2"}
                  to={"/dashboard/certificate"}
                >
                  <FaCertificate />
                Your  Certificate
                </NavLink>
              </li>
              <div className="divider"></div>
              <li className="font-bold">
                <NavLink
                  style={navLinkStyle}
                  className={"flex items-center gap-2"}
                  to={"/"}
                >
                  <FaHome />
                  Home
                </NavLink>
              </li>{" "}
            </>
          )}
        </ul>
      </div>
      <div className="border md:w-2/3 lg:w-full px-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
