import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCourses = () => {
  const axiosPublic = useAxiosPublic();
  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/courses");

      return res.data;
    },
  });

  return [courses];
};

export default useCourses;
