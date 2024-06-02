
import enrollPic from "/images/enrollPic.png"

const EnrolledCard = ({record}) => {
        

    const {cover,email,desc,courses,first_name,last_name}= record
    return (
        <div  className="card w-96 bg-base-100 rounded-xl shadow-xl border  border-orange-400 ">
        <figure className='px-10 pt-10 '><img className="rounded-xl" src={enrollPic}/></figure>
        <div className="card-body">
         
          <p className="text-2xl">Your running course is  <br /><span className="text-orange-500 text-4xl"> {record.courses} </span></p>
          <div className="card-actions justify-end">
         
          
          </div>
        </div>
      </div>
  )
}

export default EnrolledCard
