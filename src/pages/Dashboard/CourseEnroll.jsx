import EnrolledCard from "./EnrolledCard";
import useStudentsData from "../../components/Hooks/useStudentsData";

const CourseEnroll = () => {
  const [students] = useStudentsData();
  console.log(students)

  return (
    <div className="text-center grid grid-cols-3 text-5xl p-10">
      <h2 className="text-center md:text-4xl font-bold">Your enrolled courses</h2>
      {students.map((record) => (
        <EnrolledCard key={record._id} record={record}></EnrolledCard>
      ))}
        

    </div>
  );
};

export default CourseEnroll;
