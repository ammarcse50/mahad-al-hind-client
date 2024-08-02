import { Outlet } from "react-router-dom";
import NavBar from "../Common/Navbar";
import Footer from "../Common/Footer";

const Main = () => {
  return (
    <div className="font-saira">
      <NavBar></NavBar>
      

      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
