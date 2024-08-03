import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../components/Hooks/useAuth";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
const AdminHome = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  // user Count

  const { data: userCount = [] } = useQuery({
    queryKey: ["userCount"],
    queryFn: async () => {
      const res = await axiosSecure.get("/userCount");
      return res.data;
    },
  });
  // student Count
 console.log(userCount.userCount)
  const { data: studentCount = [] } = useQuery({
    queryKey: ["studentCount"],
    queryFn: async () => {
      const res = await axiosSecure.get("/studentCount");
      return res.data;
    },
  });
  // certificate Count

  const { data: certificateCount = [] } = useQuery({
    queryKey: ["certificateCount"],
    queryFn: async () => {
      const res = await axiosSecure.get("/certificateCount");
      return res.data;
    },
  });
   console.log(certificateCount.certificateCount)
  // Course Count

  const { data: courseCount = [] } = useQuery({
    queryKey: ["courseCount"],
    queryFn: async () => {
      const res = await axiosSecure.get("/courseCount");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-center md:text-5xl text-wrap my-10">
        Hi,welcome {user?.email}
      </h2>
      <div className="stats stats-vertical lg:stats-horizontal  shadow gap-3 mx-auto">
        <div className="stat bg-blue-600 bg-gradient-to-t via-violet-400 from-black">
          <div className="stat-title text-white">Total Users</div>
          <div className="stat-value text-white">{userCount.userCount}</div>
          <div className="stat-desc">{}</div>
        </div>

        <div className="stat bg-orange-400 bg-gradient-to-t via-violet-400 from-black">
          <div className="stat-title text-white">Total Student</div>
          <div className="stat-value text-white">{studentCount.studentCount}</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat bg-green-500 bg-gradient-to-t  via-violet-400 from-black">
          <div className="stat-title text-white">Total Certificate</div>
          <div className="stat-value text-white">{certificateCount.certificateCount}</div>
          <div className="stat-desc">↘︎</div>
        </div>
        <div className="stat bg-red-400 bg-gradient-to-t via-violet-400 from-black">
          <div className="stat-title">Total Course</div>
          <div className="stat-value">{courseCount.courseCount}</div>
          <div className="stat-desc">↘</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
