import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";

const Login = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 500, // Animation duration
      easing: "ease-in-out", // Easing function
    });
  }, []);
  const notify = () => toast("Login Success!");
  const { loginAccount, googleLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    loginAccount(email, password).then((res) => {
      console.log(res.user);
      alert(res.user.email, "is logged in");
    });
  };
  return (
    <div className="hero min-h-screen  md:max-w-4xl mx-auto  bg-orange-500 rounded-xl">
      <form
        data-aos="fade-up"
        onSubmit={handleLogin}
        className="card-body w-full md:w-1/2 "
      >
        <h2 className="text-3xl font-bold text-white text-center">
          Login Now!
        </h2>
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
          <button onClick={notify} className="btn  text-white text-xl">
            Login
          </button>
        </div>

        <p className="text-black text-center font-bold mt-6">
          New to here ?{" "}
          <Link to="/register" className="text-blue-100 font-semibold">
            Register
          </Link>
        </p>

        <div
          onClick={handleGoogleLogin}
          className="border border-white rounded-lg flex items-center justify-center gap-3 font-bold  p-3 mt-10 hover:bg-[#1a103d] hover:text-white"
        >
          <box-icon
            name="google"
            type="logo"
            color="rgba(9,242,46,0.99)"
          ></box-icon>
          <span>Login With Google</span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
