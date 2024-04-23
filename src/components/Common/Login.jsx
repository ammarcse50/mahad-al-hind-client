import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Login = () => {
  const { loginAccount } = useContext(AuthContext);

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
    <div className="hero min-h-screen  max-w-4xl mx-auto  bg-orange-500 rounded-xl">
      <form onSubmit={handleLogin} className="card-body md:w-1/2 ">
         <h2 className="text-3xl font-bold text-white text-center">Login Now!</h2>
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
          <button className="btn btn-primary text-white text-xl">Login</button>
        </div>

        <p className="text-black text-center font-bold mt-6">
          New to here ?{" "}
          <Link to="/register" className="text-blue-100 font-semibold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
