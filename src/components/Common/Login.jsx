import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  
   // collecting path name for redirecting 
     
     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || "/";

     console.log('location i came from',from)


    
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

       navigate(from,{replace:true})
    });
  };
  return (
    <div className="hero bg-[url('/images/login_background.jpg')] min-h-screen mt-10 md:max-w-4xl mx-auto  bg-orange-500 rounded-xl">
     <div className="hero-overlay bg-opacity-70"></div>
      <form
        data-aos="fade-up"
        onSubmit={handleLogin}
        className="card-body w-full md:w-1/2 "
      >
        <h2 className="text-5xl font-bold text-white text-center">
          Login Now!
        </h2>
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-xl text-white">Email</span>
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
            <span className="label-text text-xl text-white">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered text-black border-black bg-slate-100"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt text-xl link link-hover text-white">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn bg-[#0ecb34] rounded-xl hover:shadow-xl hover:shadow-[#0ecb34] text-white text-xl">
            Login
          </button>
        </div>

        <p className="text-white text-center font-bold mt-6">
          New to here ?{" "}
          <Link to="/register" className="text-orange-500 font-semibold">
            Register
          </Link>
        </p>

        <div
          onClick={handleGoogleLogin}
          className="border border-white text-white rounded-lg flex items-center justify-center gap-3 font-bold  p-3 mt-10 bg-[#1a732c]  hover:shadow-xl hover:shadow-[#0ecb34]"
        >
          <box-icon
            name="google"
            type="logo"
            color="rgba(9,242,46,0.99)"
          ></box-icon>
          <span >Login With Google</span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
