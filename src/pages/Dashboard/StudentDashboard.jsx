import { Link, Outlet } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="mt-32 w-full ">
      <h2 className="text-center font-bold text-5xl text-[#cb630e]">
        My Profile
      </h2>

      <div className="w-full mt-10 md:flex">
        <div className="border md:w-1/4 ">
          <div className="avatar ml-20 p-10">
            <div className="w-24 rounded-full">
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
        <div className="border md:w-2/3">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
