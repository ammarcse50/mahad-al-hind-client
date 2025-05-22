import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import useAuth from "../../../components/Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const ManageUser = () => {
  // const [users, refetch, isLoading] = useUsers();
  const axiosSecure = useAxiosSecure();

  const { user, loading } = useAuth();

  const {
    data: persons = [],
    refetch,
    isPending: isLoading,
  } = useQuery({
    queryKey: ["allUsers", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/allUsers");

      return res.data;
    },
    retry: (failCount, error) => {
      if (error?.response.status === 404) {
        return false;
      }
      return true;
    },
    refetchInterval: 1000,
  });

  if (isLoading || loading) {
    return <div className="top-[50%] flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>;
  }

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "New Admin Added!",
              text: `${user.name} is Admin Now!.`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleDelete = (person) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${person._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {persons?.map((person, index) => (
              <tr key={person._id}>
                <th>{index + 1}</th>
                <td>{person?.name}</td>
                <td>{person?.email}</td>

                <td>
                  {person?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(person)}
                      className="btn btn-error"
                    >
                      <FaUser size={20}></FaUser>
                    </button>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(person)}
                    className="btn btn-error"
                  >
                    <FaTrashAlt size={20}></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
