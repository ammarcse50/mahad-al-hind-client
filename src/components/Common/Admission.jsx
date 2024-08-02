import Aos from "aos";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Admission = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    Aos.init({
      duration: 500, // Animation duration
      easing: "ease-in-out", // Easing function
    });
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  // auth

  const { user } = useAuth();

  const handleSubmitCourses = (e) => {
    e.preventDefault();

    if (user && user?.email) {
        // todo
        
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

     
      axios
        .post("https://mahad-al-hind-server.vercel.app/students", data)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Successfully Admitted!",
              text: "Thank You",
              icon: "success",
            });
          }
        })
        .catch((error) => console.log(error));
    }
    
    else {

      Swal.fire({
        title: "Your are not logged in",
        text: "Please login to take admission!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          //send the user to the login
         navigate('/login',{state:{from:location}})
        }
      });
   


      
  }
}

  return (
    <div
      className={`hero   bg-no-repeat bg-[url('/images/form_background.jpg')]  min-h-screen  lg:pt-0  md:max-w-7xl mx-auto bg-cover bg-center rounded-xl`}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <form
        data-aos="fade-up"
        onSubmit={handleSubmitCourses}
        className={`card-body text-white `}
      >
        {" "}
        <div className="text-center ">
          <h1 className="text-5xl lg:pt-32 font-bold text-orange-500 ">
            Student Admission Form
          </h1>
          <p className="py-6 text-white ">
            Fill out the form carefully to get Admission
          </p>
        </div>
        <div className="divider"></div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">First Name</span>
          </label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="input input-bordered border-white bg-white text-black"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Last Name</span>
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
            <span className="label-text text-white">Gender</span>
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
            <span className="label-text text-white">Address</span>
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
            <span className="label-text text-white">Student Email</span>
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
            <span className="label-text text-white">WhatsApp</span>
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
            <span className="label-text text-white">Courses</span>
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
          <button className="btn bg-[#0ecb34] rounded-xl hover:shadow-xl hover:shadow-[#0ecb34]  text-white text-xl">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};


export default Admission
