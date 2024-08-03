import { FaTrashAlt } from "react-icons/fa";
import useCourses from "../../../components/Hooks/useCourses";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import uploadImg from "/images/uploadImg.png"
const ManageCourse = () => {
  const [courses, refetch] = useCourses();
  const axiosSecure = useAxiosSecure();

  const handleImgIcon= ()=>{

    document.getElementById('imgId').addEventListener('click',()=>{

           document.getElementById('inputImg').click()

    })
  }
  const handleDelete = (course) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/courses/${course._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your course has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      
     <div className="card bg-base-100 mb-5 md:w-1/2 mx-auto top-[50px] shrink-0 shadow-2xl">
     <h2 className="tex-center md:text-4xl text-nowrap font-bold">ADD NEW COURSE TO WEBSITE!</h2>
      <form  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Course Title*</span>
          </label>
          <input type="text" name="title" placeholder="Course Tile" className="input rounded-none input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Course Description*</span>
          </label>
          <input type="text" name="desc" placeholder="description of course" className="input rounded-none input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Teacher's Number*</span>
          </label>
          <input type="number" name="contact" placeholder="Enter Number With Country Code" className="input rounded-none input-bordered" required />
         
        </div>
        <div onClick={handleImgIcon} className="form-control">
          <label className="label">
            <span className="label-text">Course Image*</span>
          </label>
          <input type="file" name="image" id="inputImg" placeholder="description of course"  required />
          <img src={uploadImg} className="w-20" id="imgId" alt="" />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-lime-500">Upload Course</button>
        </div>
      </form>
    </div>  
      <div className="overflow-x-auto py-10">
      <h2 className="text-center text-4xl font-bold text-lime-500 mb-10">All Courses</h2>
        <table className="table">
          {/* head */}
          <thead className="bg-gray-300">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="text-black md:text-xl">Id</th>
              <th className="text-black md:text-xl">Image</th>

              <th className="text-black md:text-xl">Description</th>
              <th className="text-black md:text-xl">Action</th>
             
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {courses.map((course, index) => (
              <tr key={course._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={course?.cover}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{course.title}</div>
                    </div>
                  </div>
                </td>

                <td>{course.desc}</td>
                <th>
                  <button
                    onClick={() => handleDelete(course)}
                    className="btn btn-md bg-red-500  btn-xs"
                  >
                    <FaTrashAlt size={20} className="text-white"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourse;
