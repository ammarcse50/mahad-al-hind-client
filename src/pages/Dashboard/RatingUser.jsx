import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import useAxiosSecure from "../../components/Hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
const img_api =
  "https://api.imgbb.com/1/upload?key=31b8c3042470c9673a22cc6767e6a68f";
const RatingUser = () => {
  const [rating, setRating] = useState();
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const testimonial = form.testimonial.value;
    const imgFile = { image: e.target.upload.files[0] };

    const res = await axios.post(img_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const image = res.data.data.display_url;
    const review = { name, testimonial, rating, image };

    axiosSecure.post("/reviews", review).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Rating has been saved!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center md:text-5xl font-bold">Give Your Rating</h2>

      <div className="card bg-base-100 md:w-1/2 mx-auto my-10 shrink-0 shadow-2xl">
        <Rating
          className="max-w-32 mx-auto"
          value={0}
          onChange={(e) => setRating(e)}
        />
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Testimonial</span>
            </label>
            <input
              type="text"
              name="testimonial"
              placeholder="Description of rating"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <input type="file" name="upload" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-lime-600 text-white text-3xl">
              ADD RATING
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RatingUser;
