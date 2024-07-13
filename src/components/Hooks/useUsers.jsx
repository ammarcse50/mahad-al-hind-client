import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch ,isLoading } = useQuery({
    queryKey: ["users", user?.email],

    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user?.email}`);

      return res.data;
    },
  });
  
  return [users, refetch,isLoading];
};

export default useUsers;
