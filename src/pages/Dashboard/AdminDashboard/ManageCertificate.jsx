import axios from "axios";
import useAuth from "../../../components/Hooks/useAuth";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import uploadImg from "/images/uploadImg.png";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

const img_api =
  "https://api.imgbb.com/1/upload?key=31b8c3042470c9673a22cc6767e6a68f";

const ManageCertificate = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  // fetch certificates

  const { data: certificates = [], refetch } = useQuery({
    queryKey: ["certificates"],

    enabled: !loading,

    queryFn: async () => {
      const res = await axiosSecure.get(`/certificate`);
      return res.data;
    },
    retry: (failureCount, error) => {
      if (error) {
        return false;
      }
      return true;
    },
    refetchInterval: 1000,
  });

  const handleIcon = () => {
    document.getElementById("uploadImg").addEventListener("click", () => {
      document.getElementById("upload").click();
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const name = form.name.value;
    const imageFile = { image: e.target.upload.files[0] };

    console.log(imageFile);

    // send to imgbb

    const res = await axios.post(img_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const image = res.data.data.display_url;

    const certificateInfo = { email, name, image };

    axiosSecure.post(`/certificate`, certificateInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Certificate is uploaded done!!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  // delete certificate
  const handleDelete = (certificate) => {
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
        axiosSecure.delete(`/courses/${certificate._id}`).then((res) => {
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
      <h2 className="text-center font-bold md:text-4xl">Add A Certificate!</h2>
      <h2 className="text-center md:text-4xl font-semibold">
        Hi,welcome Qari{" "}
        <span className="text-blue-600">{user?.displayName}</span>{" "}
      </h2>
      <div className="card bg-base-100 md:w-1/2 mx-auto my-10 shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name Of Qari*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter name of certificate holder"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email of Student*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter name of certificate holder"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div onClick={handleIcon} className="form-control mt-6 flex">
            <input type="file" id="upload" name="upload" />
            <img src={uploadImg} id="uploadImg" className="w-[100px]" alt="" />
          </div>

          <div className="form-control mt-6">
            <button className="btn md:text-3xl text-white bg-blue-400">
              UPLOAD CERTIFICATE
            </button>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto py-10">
      <h2 className="text-center text-4xl font-bold text-lime-500 mb-10">All Certificates</h2>
        <table className="table">
          {/* head */}
          <thead className="bg-gray-200 rounded-lg">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="text-black md:text-xl">Id</th>
              <th className="text-black md:text-xl">Image</th>

              <th className="text-black md:text-xl">Name</th>
              <th className="text-black md:text-xl">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {certificates?.map((certificate, index) => (
              <tr key={certificate._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={certificate?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-black">{certificate?.name}</td>

                <td>
                  <button
                    onClick={() => handleDelete(certificate)}
                    className="btn btn-md bg-red-500  btn-xs"
                  >
                    <FaTrashAlt size={20} className="text-white"></FaTrashAlt>
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

export default ManageCertificate;
