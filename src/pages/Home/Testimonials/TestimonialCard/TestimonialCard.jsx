import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const TestimonialCard = ({ item }) => {
  const { name, testimonial, image, rating } = item;
  return (
    <div className="text-center p-10">

       <img src={image} className="rounded-full w-40 mx-auto" alt="" />
      <h2>{name}</h2>
      <h2>
       
        <Rating className="max-w-32 mx-auto" value={rating} />
      </h2>
      <p>{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
