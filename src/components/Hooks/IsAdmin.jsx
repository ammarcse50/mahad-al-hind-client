import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const IsAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin , isPending:isLoading } = useQuery({
    queryKey: ["IsAdmin", user?.email],
    enabled: !!user && !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/users/users/admin/${user?.email}`);

      return res.data?.Admin;
    },
  });

  return [isAdmin,isLoading];
};

export default IsAdmin;
