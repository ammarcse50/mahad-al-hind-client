import banner_1 from "/images/slide1.png";
import banner_2 from "/images/banner2.jpg";

import AOS from "aos";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 500, // Animation duration
      easing: "ease-in-out", // Easing function
    });
  }, []);
  return (
    <Carousel className="w-full pt-28  md:h-[600px]" autoPlay={1000} infiniteLoop={true}>
   
      <div>
        <img src={banner_1} />
        <div className="absolute w-full md:h-[600px] bg-gradient-to-r from-black bg-opacity-70 z-50"/>
      </div>
      <div>
        <img src={banner_2} className="relative"/>
       
      </div>
    </Carousel>
  );
};

export default Banner;
