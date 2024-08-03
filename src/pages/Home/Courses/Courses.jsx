import { useEffect } from "react";
import CourseCard from "./CourseCard";
import Aos from "aos";
import useCourses from "../../../components/Hooks/useCourses";
const Courses = () => {
  const [courses] = useCourses();

  useEffect(() => {
    // Initialize AOS when the component mounts
    Aos.init({
      duration: 500, // Animation duration
      easing: "ease-in-out", // Easing function
    });
  }, []);
  
  return (
    <div className="mb-10" id="courses">
      <div
        data-aos="fade-down"
        className="md:text-5xl lg:pt-32 text-3xl space-y-3 text-center"
      >
        <h2 className="" data-aos="fade-right  ">OUR QIRAAT COURSES</h2>
        <h2 data-aos="fade-left  ">(মা'হাদের কোর্সসমূহ)</h2>
      </div>

      <div
        data-aos="fade-up"
        className="grid md:grid-cols-3 gap-10 p-5 md:p-0 md:mt-10"
      >
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
