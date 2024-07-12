import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Common/AuthProvider";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = () => {
  const [records, setRecord] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/students?email=${user?.email}`;

  useEffect(() => {
    axios
      .get(url)
      // .then(res => res.json())
      .then((data) => {
        setRecord(data.data);

        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [url]);
  if (isLoading) {
    <progress className="progress w-56"></progress>;
  }

  // destructuring records of fetch data

  const id = records[0]?._id;
  const first_name = records[0]?.first_name;
  const last_name = records[0]?.last_name;
  const number = records[0]?.number;
  const gender = records[0]?.gender;
  const address = records[0]?.address;
  console.log(first_name);

  // submitting  updates

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const first_name = form.first_name.value;
    const last_name = form.last_name.value;
    const number = form.number.value;
    const gender = form.gender.value;
    const address = form.address.value;

    const data = { email, first_name, last_name, number, gender, address };
    console.log(data);
    axios.put(`http://localhost:5000/students/${id}`, data).then(() => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Updated!",
            text: "Your file has been updated.",
            icon: "success"
          });
        }
      });
    });
  };

  return (
    <div className="min-h-screen p-10 space-y-4">
      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            name="first_name"
            defaultValue={first_name}
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            name="last_name"
            defaultValue={last_name}
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="number"
            name="number"
            defaultValue={number}
            placeholder="number"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <input
            type="text"
            name="gender"
            defaultValue={gender}
            placeholder="Gender"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
             name="address"
            defaultValue={address}
            placeholder="Address"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>

   j
    </div>
  );
};

export default Profile;
