import axios from "axios";

const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();

    const form = e.target;

    const username = form.username.value;
    const email = form.email.value;
    const message = form.textarea.value;

    const data = { username, email, message };

    axios
      .post("http://localhost:5000/contact", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          alert("Message inserted Successful");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen  md:max-w-4xl mx-auto  bg-orange-500 rounded-xl">
      
      <form onSubmit={handleContact} className="card-body md:w-1/2 ">
      <p className="text-white text-center font-semibold">CONTACT WITH US</p>
      <h2 className="text-5xl font-bold text-center text-white mb-5">Send your email</h2>
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
          <button className="btn btn-primary text-white text-xl">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
