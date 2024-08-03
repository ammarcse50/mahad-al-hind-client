import { Navigate } from "react-router-dom";
import IsAdmin from "../../../Hooks/IsAdmin";
import useAuth from "../../../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const [isAdmin, isLoading] = IsAdmin();

  if (loading || isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" replace />;
};

export default AdminRoute;
