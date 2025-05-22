import Aos from "aos";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import "aos/dist/aos.css";

const Admission = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-in-out" });
  }, []);

  const handleSubmitCourses = (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    const form = e.target;

    const data = {
      first_name: form.first_name.value,
      last_name: form.last_name.value,
      email: form.email.value,
      address: form.address.value,
      number: form.number.value,
      courses: form.courses.value,
      gender: form.gender.value,
    };

    axiosSecure
      .post("/students", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Successfully Admitted!",
            text: "Thank you for your submission.",
            icon: "success",
            confirmButtonColor: "#3085d6",
          });
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen mt-10 py-16 px-4 bg-gradient-to-br from-blue-50 to-white flex justify-center">
      <form
        data-aos="fade-up"
        onSubmit={handleSubmitCourses}
        className="w-full max-w-3xl bg-white p-10 rounded-2xl shadow-2xl border border-blue-100"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-500">
            Student Admission Form
          </h1>
          <p className="text-gray-500 mt-2">
            Please fill out the form carefully to apply.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label font-semibold text-gray-700">First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="John"
              className="input input-bordered bg-white text-black"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-gray-700">Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Doe"
              className="input input-bordered bg-white text-black"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="input input-bordered bg-white text-black"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-gray-700">WhatsApp Number</label>
            <input
              type="text"
              name="number"
              placeholder="+880123456789"
              className="input input-bordered bg-white text-black"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Street, City, ZIP"
              className="input input-bordered bg-white text-black"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-gray-700">Gender</label>
            <select
              name="gender"
              className="select select-bordered bg-white text-black"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-control md:col-span-2">
            <label className="label font-semibold text-gray-700">Select Course</label>
            <select
              name="courses"
              className="select select-bordered bg-white text-black"
              required
            >
              <option value="">Select a Course</option>
              <option value="Hafs an Asim">Hafs an Asim</option>
              <option value="Warsh an nafi">Warsh an nafi</option>
              <option value="Qaloon an nafi">Qaloon an nafi</option>
              <option value="Single Rewayat">Single Rewayat</option>
              <option value="Khalf an Hamza">Khalf an Hamza</option>
              <option value="Khallad an Hamza">Khallad an Hamza</option>
              <option value="Maqamat">Maqamat</option>
              <option value="Qiraat Sa'ba">Qiraat Sa'ba</option>
              <option value="Qiraat A'shara">Qiraat A'shara</option>
            </select>
          </div>
        </div>

        <div className="form-control mt-10 text-center">
          <button className="btn btn-primary w-full md:text-xl bg-blue-500 hover:bg-blue-600 text-white rounded-xl">
            Submit Admission
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admission;
