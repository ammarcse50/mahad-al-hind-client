import useAuth from "../../components/Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../components/Hooks/useAxiosSecure";
import enrollPic from "/images/enrollPic.png";

const CourseEnroll = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: rewayat = [] } = useQuery({
    queryKey: ["rewayat"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/students/${user?.email}`);
      return res.data;
    },
  });
  console.log(rewayat);
  return (
    <div className="card md:w-96 my-10 bg-base-100 rounded-xl shadow-xl border  border-orange-400 ">
      <figure className="px-10 pt-10 ">
        <img className="rounded-xl" src={enrollPic} />
      </figure>
      <div className="card-body">
        <p className="text-2xl">
          Your running course is <br />
          <span className="text-orange-500 text-4xl"> {rewayat?.courses} </span>
        </p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default CourseEnroll;
