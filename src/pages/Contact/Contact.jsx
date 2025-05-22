import Aos from "aos";
import { useEffect } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../components/Hooks/useAxiosPublic";

const Contact = () => {
  const axiosPublic = useAxiosPublic()
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

    const name = form.username.value;
  
    const email = form.email.value;
    const message = form.textarea.value;

    const data = { name, email, message };

    axiosPublic
      .post(
        "/contact",
        data
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          form.reset()
          Swal.fire({
            title: "We got your comment!",
            text: "Thanks for your message!",
            icon: "success",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="md:pt-32">  

           <h2 className="md:text-4xl font-semibold text-center text-red-500 mb-3">Contact US!</h2>
           <div className="divider w-1/4 mx-auto border border-sky-500"></div>
         <div className="hidden md:block ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.98710560505!2d80.7776997130825!3d26.848902828916785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sbd!4v1714374115194!5m2!1sen!2sbd"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="divider"></div>

        <div className="card   mx-auto shrink-0 ">
              <form onSubmit={handleContact} className="card-body w-full md:w-1/2 mx-auto">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered rounded-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name*</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter Your Name"
                    className="input input-bordered rounded-none"
                    required
                  />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message*</span>
                  </label>
                  <textarea
                    type="text"
                    name="textarea"
                    placeholder="Enter Your Message"
                    className="input input-bordered rounded-none h-24"
                    required
                  />
                  
                </div>
                <div className="form-control mt-6">
                  <button className="btn md:text-3xl text-white bg-blue-400">SEND MESSAGE</button>
                </div>
              </form>
            </div>
 
   
    </div>
  );
};

export default Contact;
