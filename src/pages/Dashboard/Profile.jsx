import { BsRecordFill } from "react-icons/bs";
import useStudentsData from "../../components/Hooks/useStudentsData";
import axios from "axios";
import { useContext, useRef } from "react";
import { AuthContext } from "../../components/Common/AuthProvider";

const Profile = () => {
  const records = useStudentsData();

  const { user } = useContext(AuthContext);

  const [first_name, last_name,address,number,gender] = [
    records[0]?.first_name,
    records[0]?.last_name,
    records[0]?.address,
    records[0]?.number,
    records[0]?.gender,
  ];

  return (
    <div className=" bg-base-200 min-h-screen p-10 space-y-4">
      <div>
        {" "}
        <h2 className="text-5xl font-bold">
          Student Name : {first_name + " " + last_name}
        </h2>{" "}
        <br />
      </div>
      <div>
        {" "}
        <h3 className="text-3xl font-bold">Email: {user?.email}</h3>
      </div>
      <div>
        {" "}
        <h3 className="text-3xl font-bold">Address : {address} </h3>
      </div>
      <div>
        {" "}
        <h3 className="text-3xl font-bold">Number: {number} </h3>
      </div>
      <div>
        {" "}
        <h3 className="text-3xl font-bold">Gender: {gender} </h3>
      </div>
    </div>
  );
};

export default Profile;
