import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import authImg from '/images/authentication1.png'
import AOS from "aos";
import { getAuth, sendEmailVerification } from "firebase/auth";
import app from "../../firebase/firebase.config";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import uploadImg from "/images/profile.png";
import useAxiosPublic from "../Hooks/useAxiosPublic";
const image_hosting_url = `https://api.imgbb.com/1/upload?key=31b8c3042470c9673a22cc6767e6a68f`;

const Register = () => {
  const auth = getAuth(app);
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
    });
  }, []);

  const axiosPublic = useAxiosPublic();
  const { createAccount ,googleLogin } = useAuth();
  const handleIcon = () => {
    document.getElementById("upload").click();
  };


  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          // photo: result.user?.photoURL,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageFile = { image: e.target.upload.files[0] };
    console.log(imageFile);

    //imgbb api call
    const res = await axios.post(image_hosting_url, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });

    console.log(res.data.data.display_url);

    const photo = res.data.data.display_url;
    const userInfo = { username, email, password, photo };
    console.log(userInfo);
    createAccount(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        sendEmailVerification(auth).then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Account has been check gmail",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log("verification email send!");
        });
      })
      .catch((error) => console.log(error));

    axiosPublic
      .post("/users", userInfo)
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
    <div className="flex w-full">  
     <div className="hero  min-h-screen mx-auto md:w-1/2  rounded-xl">
    <form
      data-aos="fade-up"
      onSubmit={handleRegister}
      className="card-body md:w-full "
    >
      <h2 className="text-3xl lg:pt-20 font-bold text-black text-center">
       Create account Now!
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
      <div className="form-control ">
        <label className="label">
          <span className="label-text text-black">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="input input-bordered text-black border-black bg-slate-100 "
          required
        />
      </div>
      <div className="form-control mt-6 flex">
        <input type="file" id="upload" name="upload" />
        <img
          onClick={handleIcon}
          src={uploadImg}
          id="upload"
          className="w-[100px]"
          alt=""
        />
      </div>
      <div className="form-control mt-6 ">
        <button className="btn bg-[#0ecb34] rounded-xl hover:shadow-xl hover:shadow-[#0ecb34]  text-white text-xl">
          Register
        </button>
      </div>

      <p className="text-black text-center mt-6 font-bold">
        Already Register?{" "}
        <Link to="/login" className="text-orange-500 font-semibold">
          Login
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
  <div className="md:w-1/2 pt-32 hidden lg:block"><img src={authImg} alt="" /></div>
</div>
 


  );
};

export default Register;
