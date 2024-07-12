import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

// import required modules

const Testimonials = () => {
  const [datas, setDatas] = useState([]);

  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
    setLoading(false);
  }, []);

  if (loading) {
    <progress className="progress w-56"></progress>;
  }

  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        autoplay={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {datas.map((item) => (
          <SwiperSlide>
            <TestimonialCard item={item}></TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
