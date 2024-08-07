import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const axiosSecure = axios.create({
  baseURL: "https://mahad-al-hind-server.vercel.app",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();

  const { logOut } = useAuth();
  // Add a request interceptor
  axiosSecure.interceptors.request.use(
    function (config) {
      // Do something before request is sent

      // console.log('req stop by interceptor', token)

      const token = localStorage.getItem("access-token");

      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // handle 401 and 403
  axiosSecure.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data

      return response;
    },
    async function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error

      console.log("status error in the interceptor", error);
      const status = error.response?.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
