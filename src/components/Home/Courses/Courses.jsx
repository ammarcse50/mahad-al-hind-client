import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios("courses.json").then((res) => {
      setCourses(res.data);
    });
  }, []);
  return (
    <div>
      <div className="md:text-5xl text-3xl space-y-3 text-center">
        <h2>OUR QIRAAT COURSES</h2>
        <h2>(মা'হাদের কোর্সসমূহ)</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10 p-5 md:p-0 mt-10">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
