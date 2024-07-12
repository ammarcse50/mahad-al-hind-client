import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  //  const navigate = useNavigate()

  //  const from = location.state?.from;

  const { user } = useAuth();

  if (user) {
    return children;
  }

  return <Navigate to={"/login"}  replace></Navigate>;
};

export default PrivateRoutes;
