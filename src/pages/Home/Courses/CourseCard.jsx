import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {

       const {cover,title,desc,contact}= course
    return (
        <div  className="card lg:w-96 w-80 flex-shrink-0 mx-auto bg-base-100 rounded-xl shadow-xl border border-orange-400 ">
      <figure className="px-10 pt-10">
  <img className="rounded-xl w-full h-48 object-cover" src={course.cover} alt={course.title} />
</figure>
   <div className="card-body min-h-48 flex flex-col justify-between">
          <h2 className="card-title">{course.title}</h2>
          <p>{course.desc}</p>
          <div className="card-actions justify-end">
         
           <Link to="/form"><button className="btn custom-button text-white">Enroll</button></Link>
          </div>
        </div>
      </div>
    );
};

export default CourseCard;