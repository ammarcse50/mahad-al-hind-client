import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import IsAdmin from "../../../components/Hooks/IsAdmin";
import useAuth from "../../../components/Hooks/useAuth";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageMessage = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [isAdmin] = IsAdmin();
  const { data: messages = [],refetch } = useQuery({
    queryKey: ["messaages"],
    enabled: !!isAdmin && !user,
    queryFn: async () => {
      const res = await axiosSecure.get("/contact");
      return res.data;
    },
  });
  const handleDelete = message=> {
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
        axiosSecure.delete(`/courses/${message._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your course has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="text-black md:text-xl">Id</th>
              <th className="text-black md:text-xl">Name</th>
              <th className="text-black md:text-xl">Email</th>
              <th className="text-black md:text-xl">Message</th>
              <th className="text-black md:text-xl">Delete</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={message._id}>
                <th className="text-black md:text-xl">{index + 1}</th>
                <td className="text-black md:text-xl">{message.name}</td>
                <td className="text-black md:text-xl">{message.email}</td>
                <td className="text-black md:text-xl">{message.message}</td>
                <td> <button
                    onClick={() => handleDelete(message)}
                    className="btn btn-md bg-red-500  btn-xs"
                  >
                    <FaTrashAlt size={20} className="text-white"></FaTrashAlt>
                  </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMessage;
