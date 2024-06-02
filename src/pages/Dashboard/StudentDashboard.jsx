import { Link, Outlet } from "react-router-dom";
import useStudentsData from "../../components/Hooks/useStudentsData";

const StudentDashboard = () => {
  const  records = useStudentsData();

  const [first_name]= [records[0]?.first_name]
  return (
    <div className="mt-32 w-full ">
      <h2 className="text-center font-bold text-5xl text-[#cb630e]">
        My Profile <br />
 
        <span className="text-white">Wellcome 
          </span> {first_name}
      </h2>

      <div className="w-full mt-10 md:flex">
        <div className="border lg:w-1/4 flex flex-col ">
          <div className="avatar ml-32 lg:ml-20 py-10">
            <div className="w-24 rounded-full ">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

            </div>
          </div>
          <div className="text-center p-10">
         
            <Link to="/dashboard/profile">
              <button className=" hover:bg-[#cb630e] font-bold hover:rounded-md p-5 text-4xl">
                Profile
              </button>
            </Link>
            <Link to="/dashboard/courseenroll">
              <button className=" hover:bg-[#cb630e] font-bold hover:rounded-md p-5 text-4xl">
                Courses
              </button>
            </Link>
            <Link to="/dashboard/payment">
           
              <button className=" hover:bg-[#cb630e] font-bold hover:rounded-md p-5 text-4xl">
                Payment
              </button>
            </Link>
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
