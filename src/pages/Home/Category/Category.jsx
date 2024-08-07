import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useCourses from "../../../components/Hooks/useCourses";
import CategoryCard from "./CategoryCard";
const Category = () => {
  const [courses] = useCourses();
  console.log(courses)
  return (
    <div className="my-32 ">

        <h2 className="text-center font-bold text-5xl m-10 text-orange-500">Course Category</h2>
      <Swiper
          
         breakpoints={{
          640:{
            slidesPerView: 1,
          },
          768:{
            slidesPerView :2,
          },
          1024:{
            slidesPerView:3
          }
         }}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ 
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {courses.map((data) => (
          <SwiperSlide className="z-1" key={data._id}>
            {" "}
            <CategoryCard item={data}> </CategoryCard>{" "}
          </SwiperSlide>
        ))}
  
      </Swiper>
    </div>
  );
};

export default Category;
