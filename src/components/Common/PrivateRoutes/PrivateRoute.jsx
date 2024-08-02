import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  //  const navigate = useNavigate()

  //  const from = location.state?.from;

  const { user } = useAuth();

  if (user) {
    return children;
  }

  return <Navigate to={"/login"}  replace></Navigate>;
};

export default PrivateRoute;
