
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Common/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useStudentsData = () => {
  const axiosSecure = useAxiosSecure();

  const { user } = useContext(AuthContext);

  const [records, setRecord] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/students?email=${user?.email}`)
      .then((res) => {
        setRecord(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return records;
};

export default useStudentsData;
