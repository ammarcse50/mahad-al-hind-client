import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import authImg from "/images/authentication1.png";

const Login = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 500, // Animation duration
      easing: "ease-in-out", // Easing function
    });
  }, []);
  const axiosPublic = useAxiosPublic();
  // collecting path name for redirecting

  const navigate = useNavigate();

  const { loginAccount, googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate("/");
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          // photo: result.user?.photoURL,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-middle",
              icon: "success",
              title: "You logged successfully",
              showConfirmButton: false,
              timer: 1000,
            });
            navigate("/");
          }
          console.log(res.data);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // image upload to  imgbb server

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    loginAccount(email, password).then((res) => {
      console.log(res.user);
      if (res.user) {
        Swal.fire({
          position: "top-middle",
          icon: "success",
          title: "You logged successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/");
        form.reset();
      }
    });
  };
  return (
    <div className="flex w-full">
      <div className="hero  min-h-screen md:w-1/2 mx-auto  rounded-xl">
        <form
          data-aos="fade-up"
          onSubmit={handleLogin}
          className="card-body w-full   "
        >
          <h2 className="text-5xl font-bold text-black text-center">
            Login Now!
          </h2>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-xl text-black">Email</span>
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
              <span className="label-text text-xl text-black">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered text-black border-black bg-slate-100"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt text-xl link link-hover text-black"
              >
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn md:text-3xl text-white bg-blue-400">
              Login
            </button>
          </div>

          <p className="text-black text-center font-bold mt-6">
            New to here ?{" "}
            <Link to="/register" className="text-orange-500 font-semibold">
              Register
            </Link>
          </p>

          <div
            onClick={handleGoogleLogin}
            className="border border-white text-white rounded-lg flex items-center justify-center gap-3 font-bold  p-3 mt-10 bg-[#cb7728]  hover:shadow-xl hover:shadow-[#0ecb34]"
          >
            <box-icon
              name="google"
              type="logo"
              color="rgba(9,242,46,0.99)"
            ></box-icon>
            <span>Login With Google</span>
          </div>
        </form>
      </div>
      <div className="md:w-1/2 pt-32 hidden lg:block">
        <img src={authImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
