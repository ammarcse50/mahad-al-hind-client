import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Common/Navbar";
import Footer from "../Common/Footer";

const Main = () => {

   const location = useLocation()

    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/dashboard')  || location.pathname.includes('/register')  
 
    return (
    <div className="font-saira">
    { noHeaderFooter || <NavBar></NavBar>}
      

      <div className="mx-auto">
        <Outlet></Outlet>
      </div>

  { noHeaderFooter ||   <Footer></Footer>}
    </div>
  );
};

export default Main;
