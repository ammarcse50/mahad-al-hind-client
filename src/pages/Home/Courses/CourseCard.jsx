import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {

       const {cover,title,desc,contact}= course
    return (
        <div  className="card w-96bg-base-100 rounded-xl shadow-xl border  border-orange-400 ">
        <figure className='px-10 pt-10 '><img className="rounded-xl" src={course.cover}/></figure>
        <div className="card-body">
          <h2 className="card-title">{course.title}</h2>
          <p>{course.desc}</p>
          <div className="card-actions justify-end">
         
           <Link to="/form"><button className="btn rounded-xl text-white bg-orange-600 hover:shadow-xl hover:shadow-[#0ecb34] hover:bg-[#0ecb34]">Enroll</button></Link>
          </div>
        </div>
      </div>
    );
};

export default CourseCard;