import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Register = () => {
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
      })
      .catch((error) => console.log(error));

    axios
      .post(
        "https://mahad-al-hind-server-side-production.up.railway.app/users",
        data
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          alert("user inserted successful");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen  max-w-4xl mx-auto  bg-orange-500 rounded-xl">
      <form onSubmit={handleRegister} className="card-body md:w-1/2 ">
         <h2 className="text-3xl font-bold text-white text-center">Register Now!</h2>
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
          <button className="btn btn-primary text-xl">Register</button>
        </div>

        <p className="text-black text-center mt-6">
          Already Register?{" "}
          <Link to="/login" className="text-blue-100 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
