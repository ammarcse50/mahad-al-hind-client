import Aos from "aos";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Admission = () => {

  useEffect(() => {
    // Initialize AOS when the component mounts
    Aos.init({
      duration: 500, // Animation duration
      easing: 'ease-in-out', // Easing function
     
    });
  }, []);
  const handleSubmitCourse = (e) => {
    e.preventDefault();

    const form = e.target;

    const first_name = form.first_name.value;
    const last_name = form.last_name.value;

    const email = form.email.value;
    const address = form.address.value;

    const number = form.number.value;
    const courses = form.courses.value;
    const gender = form.gender.value;

    const data = {
      first_name,
      last_name,
      email,
      address,
      gender,
      number,
      courses,
    };

    console.log(data);

    axios
      .post("http://localhost:5000/students", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Successfully Admitted!",
            text: "Thank You",
            icon: "success"
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen  md:max-w-4xl mx-auto  bg-orange-500 rounded-xl">
      <form  data-aos="fade-up" onSubmit={handleSubmitCourse} className="card-body ">
        {" "}
        <div  className="text-center ">
          <h1 className="text-5xl font-bold text-black">
            Student Admission Form
          </h1>
          <p className="py-6 text-black ">
            Fill out the form carefully to get Admission
          </p>
        </div>
        <div className="divider"></div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">First Name</span>
          </label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="input input-bordered border-black bg-white text-black"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Last Name</span>
          </label>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="input input-bordered border-black bg-white text-black"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Gender</span>
          </label>

          <select
            id="gender"
            name="gender"
            className="input input-bordered border-black bg-white text-black"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Address</span>
          </label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="input input-bordered border-black bg-white text-black"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Student Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered border-black bg-white text-black"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">WhatsApp</span>
          </label>
          <input
            type="text"
            name="number"
            placeholder="number"
            className="input input-bordered border-black bg-white text-black"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Courses</span>
          </label>

          <select
            id="courses"
            name="courses"
            className="input input-bordered border-black  bg-white text-black"
          >
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
        <div className="form-control mt-6">
          <button className="btn  text-white text-xl">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Admission;
