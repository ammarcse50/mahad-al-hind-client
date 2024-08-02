import EnrolledCard from "./EnrolledCard";
import useStudentsData from "../../components/Hooks/useStudentsData";

const CourseEnroll = () => {
  const [students] = useStudentsData();

  return (
    <div className="text-center grid grid-cols-3 text-5xl p-10">
      {students.map((record) => (
        <EnrolledCard key={record._id} record={record}></EnrolledCard>
      ))}
        

    </div>
  );
};

export default CourseEnroll;
