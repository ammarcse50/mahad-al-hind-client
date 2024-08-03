import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import IsAdmin from "./IsAdmin";

const useStudentsData = () => {
  const axiosSecure = useAxiosSecure();
   const [isAdmin]= IsAdmin();
  const { user} = useAuth();

  const { refetch, data: students = [] ,isLoading} = useQuery({
    queryKey: ["students", user?.email],
    enabled: !!isAdmin && !!user ,
    queryFn: async () => {
      const res = await axiosSecure.get(`/students`);
      return res.data;
    },
  });



  return [students, refetch ,isLoading];
};

export default useStudentsData;
