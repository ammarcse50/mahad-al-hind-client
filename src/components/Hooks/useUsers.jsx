import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isPending: isLoading,
  } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !!user && !loading,

    queryFn: async () => {
      const res = await axiosSecure.get(`/api/users/users?email=${user?.email}`);

      return res.data;
    },
    retry: (failCount, error) => {
      if (error) {
        return false;
      }
      return true;
    },
    refetchInterval: 1000,
  });

  return [users, refetch, isLoading];
};

export default useUsers;
