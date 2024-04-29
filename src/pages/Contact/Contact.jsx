import Aos from "aos";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    Aos.init({
      duration: 500, // Animation duration
      easing: "ease-in-out", // Easing function
    });
  }, []);
  const handleContact = (e) => {
    e.preventDefault();

    const form = e.target;

    const username = form.username.value;
    const email = form.email.value;
    const message = form.textarea.value;

    const data = { username, email, message };

    axios
      .post("https://mahad-al-hind-server-m5a45nxej-ammars-projects-dc5c7534.vercel.app/contact", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "We got your comment!",
            text: "Thanks",
            icon: "success",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen mt-28 lg:pt-0  md:max-w-7xl mx-auto  bg-orange-500 rounded-xl">
      <form
        data-aos="fade-up"
        onSubmit={handleContact}
        className="card-body md:w-1/2 "
      >
        <p className="text-white text-center font-semibold">CONTACT WITH US</p>
        <h2 className="text-5xl font-bold text-center text-white mb-5">
          Send your email
        </h2>
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-black">Username</span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="username"
            className="input input-bordered text-black  border-black bg-slate-100"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered text-black border-black bg-slate-100"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Message</span>
          </label>
          <textarea
            className="textarea textarea-accent text-black border-black bg-slate-100"
            name="textarea"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#0ecb34] rounded-xl hover:shadow-xl hover:shadow-[#0ecb34] text-white text-xl">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
