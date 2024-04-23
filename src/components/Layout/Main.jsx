
import { Outlet } from 'react-router-dom';
import NavBar from '../Common/Navbar';
import Footer from '../Common/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;