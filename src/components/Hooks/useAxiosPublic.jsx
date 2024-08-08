import axios from "axios";

/*-
- https://mahad-al-hind-server.vercel.app
-
-
 */
const axiosPublic = axios.create({
  baseURL: "https://mahad-al-hind-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
