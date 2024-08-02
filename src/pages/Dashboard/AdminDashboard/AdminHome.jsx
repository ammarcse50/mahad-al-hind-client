import useAuth from "../../../components/Hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-center text-5xl">Hi,welcome {user?.email}</h2>
    </div>
  );
};

export default AdminHome;
