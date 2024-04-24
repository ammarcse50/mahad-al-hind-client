import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import Aos from "aos";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    // Initialize AOS when the component mounts
    Aos.init({
      duration: 500, // Animation duration
      easing: "ease-in-out", // Easing function
    });
  }, []);
  useEffect(() => {
    axios.get("https://mahad-al-hind-server.vercel.app/courses").then((res) => {
      setCourses(res.data);
    });
  }, []);

  return (
    <div className="mb-10 mt-32">
      <div
        data-aos="fade-down"
        className="md:text-5xl  text-3xl space-y-3 text-center"
      >
        <h2 data-aos="fade-right">OUR QIRAAT COURSES</h2>
        <h2 data-aos="fade-left">(মা'হাদের কোর্সসমূহ)</h2>
      </div>

      <div
        data-aos="fade-up"
        className="grid md:grid-cols-3 gap-10 p-5 md:p-0 mt-10"
      >
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
