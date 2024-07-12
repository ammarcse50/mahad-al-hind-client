import {  NavLink, Outlet } from "react-router-dom";
import useStudentsData from "../../components/Hooks/useStudentsData";
import useAuth from "../../components/Hooks/useAuth";

const StudentDashboard = () => {
  const{user}=useAuth()

  const [students] = useStudentsData();
 console.log(students)
  const first_name= students[0]?.first_name
  const last_name= students[0]?.last_name


  
   
  return (
    <div className="mt-32 w-full ">
      <h2 className="text-center font-bold text-4xl text-[#cb630e]">
        My Profile 
        <span className="text-black mx-3">Wellcome 
          </span> {first_name}
      </h2>

      <div className="w-full mt-10 md:flex">
        <div className="border lg:w-1/4 flex flex-col ">
          <div className="avatar ml-32 lg:ml-20 py-10">
            <div className="w-32 rounded-full ">
              <img src={user?.photoURL}  alt={'Please Upload'} />

            </div>
          
          </div>
          <h2 className="text-center">{first_name+" "+ last_name}</h2>
          <div className="text-center px-10">
         
            <NavLink to="/dashboard/profile"   className={({ isActive }) => {
            return isActive ? "bg-orange-500 hover:text-xl " : "text-black";
          }}>
              <button className=" hover:bg-[#cb630e] font-bold hover:rounded-md p-5 text-4xl">
                Profile
              </button>
            </NavLink>
            <NavLink   className={({ isActive }) => {
            return isActive ? "bg-orange-500 hover:text-xl " : "text-black";
          }} to="/dashboard/courseenroll">
              <button className=" hover:bg-[#cb630e] font-bold hover:rounded-md p-5 text-4xl">
                Courses
              </button>
            </NavLink>
            <NavLink   className={({ isActive }) => {
            return isActive ? "bg-orange-500 hover:text-xl " : "text-black";
          }} to="/dashboard/payment">
           
              <button className=" hover:bg-[#cb630e] font-bold hover:rounded-md p-5 text-4xl">
                Payment
              </button>
            </NavLink>
            <NavLink   className={({ isActive }) => {
            return isActive ? "bg-orange-500 hover:text-xl " : "text-black";
          }} to="/dashboard/certificate">
           
              <button className=" hover:bg-[#cb630e] font-bold hover:rounded-md p-5 text-4xl">
                Certificate
              </button>
            </NavLink>
          </div>
        </div>
        <div className="border md:w-2/3 lg:w-full px-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
