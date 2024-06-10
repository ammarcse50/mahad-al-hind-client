import { BsRecordFill } from "react-icons/bs";
import useStudentsData from "../../components/Hooks/useStudentsData";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../components/Common/AuthProvider";

const Profile = () => {

  
  const [records, setRecord] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useContext(AuthContext);


  const url = `http://localhost:5000/students?email=${user?.email}`;

  useEffect(() => {
    
      axios.get(url)
          // .then(res => res.json())
          .then(data => {
              setRecord(data.data);
          })
          .catch(error => console.log(error))
  }, [url])
  if (isLoading) {
      <p>Loading...</p>
  }

   const first_name = records[0]?.first_name
   const last_name = records[0]?.last_name
   const number = records[0]?.number
   const gender = records[0]?.gender
   const address = records[0]?.address
   console.log(first_name)

  return (
    <div className=" bg-base-200 min-h-screen p-10 space-y-4">
      <p>dashboard</p>
      <div>
        {" "}
        <h2 className="md:text-5xl text-xl font-bold">
          Student Name : {first_name + " " + last_name}
        </h2>{" "}
        <br />
      </div>
      <div>
        {" "}
        <h3 className="md:text-3xl font-bold">Email: {user?.email}</h3>
      </div>
      <div>
        {" "}
        <h3 className="md:text-3xl font-bold">Address : {address} </h3>
      </div>
      <div>
        {" "}
        <h3 className="md:text-3xl font-bold">Number: {number} </h3>
      </div>
      <div>
        {" "}
        <h3 className="md:text-3xl font-bold">Gender: {gender} </h3>
      </div>
    </div>
  );
};

export default Profile;
