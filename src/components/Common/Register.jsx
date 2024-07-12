import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import { getAuth, sendEmailVerification } from "firebase/auth";
import app from "../../firebase/firebase.config";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";

const Register = () => {
  const auth = getAuth(app);
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
    });
  }, []);


   const axiosSecure = useAxiosSecure()

  const { createAccount } = useAuth()

  const handleRegister = (e) => {
    e.preventDefault();


    

    const form = e.target;

    const username = form.username.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const data = { username, email, password ,photo};

    createAccount(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        sendEmailVerification(auth).then(() => {
          console.log("verification email send!");
        });
      })
      .catch((error) => console.log(error));

    axiosSecure
      .post("users", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Account Created Succesfully",
            text: "You clicked the button!",
            icon: "success",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero  min-h-screen mt-18 md:max-w-7xl mx-auto   rounded-xl">
      <form
        data-aos="fade-up"
        onSubmit={handleRegister}
        className="card-body md:w-1/2 "
      >
        <h2 className="text-3xl font-bold text-white text-center">
          Register Now!
        </h2>
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-black">Username</span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input input-bordered text-black  border-black bg-slate-100"
            required
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-black">Photo Url</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="PhotoUrl link"
            className="input input-bordered text-black  border-black bg-slate-100"
            required
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered text-black  border-black bg-slate-100"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered text-black border-black bg-slate-100"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-black">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn bg-[#0ecb34] rounded-xl hover:shadow-xl hover:shadow-[#0ecb34]  text-white text-xl">
            Register
          </button>
        </div>

        <p className="text-black text-center mt-6 font-bold">
          Already Register?{" "}
          <Link to="/login" className="text-orange-500 font-semibold">
            Login
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
