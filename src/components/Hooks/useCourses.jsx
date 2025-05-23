import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCourses = () => {
  const axiosPublic = useAxiosPublic();
  const { data: courses = [], refetch } = useQuery({
    queryKey: ["courses"],

    queryFn: async () => {
      const res = await axiosPublic.get("/api/courses/courses");

      return res.data;
    },
    retry: (failureCount, error) => {
      if (error?.response.status === 404) {
        return false;
      }
      return true;
    },
    refetchInterval: 1000,
  });

  return [courses, refetch];
};

export default useCourses;
