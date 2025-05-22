import { useEffect } from "react";
import CourseCard from "./CourseCard";
import Aos from "aos";
import "aos/dist/aos.css";
import useCourses from "../../../components/Hooks/useCourses";

const Courses = () => {
  const [courses] = useCourses();

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="mb-10" id="courses">
      <div
        data-aos="fade-down"
        className="md:text-5xl pt-32 text-3xl space-y-3 text-center"
      >
        <h2 data-aos="fade-right">OUR QIRAAT COURSES</h2>
        <h2 data-aos="fade-left">(মা'হাদের কোর্সসমূহ)</h2>
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-wrap gap-6 justify-center mt-10"
      >
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
