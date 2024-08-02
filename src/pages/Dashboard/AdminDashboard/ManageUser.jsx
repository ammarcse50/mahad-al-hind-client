import { FaDeleteLeft } from "react-icons/fa6";
import useUsers from "../../../components/Hooks/useUsers";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const ManageUser = () => {
  const [users] = useUsers();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{users.name}</td>
                <td>{users.Email}</td>

                <td>
             
                  <button>{}</button>
                </td>
                <td><button><MdDelete></MdDelete></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
