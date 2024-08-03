import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useStudentsData from "../../../components/Hooks/useStudentsData";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";

const ManageStudent = () => {
//   const [users, refetch] = useUsers();
  const [students ,refetch] = useStudentsData();
  const axiosSecure = useAxiosSecure();



  const handleDelete = (student) => {
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
        axiosSecure.delete(`/students/${student._id}`).then((res) => {
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
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="text-black md:text-xl">id</th>
              <th className="text-black md:text-xl">Name</th>
              <th className="text-black md:text-xl">Email</th>
              <th className="text-black md:text-xl">Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student._id}>
                <th className="text-black md:text-xl">{index + 1}</th>
                <td className="text-black md:text-xl">{student?.first_name}</td>
                <td className="text-black md:text-xl">{student?.email}</td>

                <td></td>
                <td>
                  <button
                    onClick={() => handleDelete(student)}
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

export default ManageStudent;
