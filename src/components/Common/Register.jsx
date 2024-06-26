import axios from "axios";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import { getAuth, sendEmailVerification } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Register = () => {
  const auth = getAuth(app);
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
    });
  }, []);
  const notify = () => toast("Created Account Successful!");
  const { createAccount } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();


    

    const form = e.target;

    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    const data = { username, email, password };

    createAccount(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        sendEmailVerification(auth).then(() => {
          console.log("verification email send!");
        });
      })
      .catch((error) => console.log(error));

    axios
      .post("https://mahad-al-hind-server-m5a45nxej-ammars-projects-dc5c7534.vercel.app/users", data)
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
    <div className="hero min-h-screen mt-28 md:max-w-7xl mx-auto  bg-orange-500 rounded-xl">
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
          <button onClick={notify} className="btn bg-[#0ecb34] rounded-xl hover:shadow-xl hover:shadow-[#0ecb34]  text-white text-xl">
            Register
          </button>
        </div>

        <p className="text-black text-center mt-6 font-bold">
          Already Register?{" "}
          <Link to="/login" className="text-blue-100 font-semibold">
            Login
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
