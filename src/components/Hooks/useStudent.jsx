import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
  const { user , loading} = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: student = [], refetch } = useQuery({
    queryKey: ["student"],
    enabled:!!user && !loading ,
    queryFn: async () => {
      const res = await axiosSecure.get(`/students/${user?.email}`);
      return res.data;
    },
  });
  return [student, refetch];
};

export default useStudent;
