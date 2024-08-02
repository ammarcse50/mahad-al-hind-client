// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../components/Hooks/useAxiosPublic";

// import required modules

const Testimonials = () => {
  const axiosPublic = useAxiosPublic();
  const { data: datas = []} = useQuery({
    queryKey: ["datas"],

    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
    retry: (failure, error) => {
      if (error) {
        return false;
      }
      return true;
    },
    refetchInterval: 1000,
  });

  return (
    <>
      <h2 className="text-center font-bold text-5xl m-10 text-orange-500">
        Testimonials of students
      </h2>
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
