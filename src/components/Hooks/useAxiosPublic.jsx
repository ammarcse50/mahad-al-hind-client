import axios from "axios";

/*-
- http://localhost:5000
-
-
 */
const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
