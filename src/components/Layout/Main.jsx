
import { Outlet } from 'react-router-dom';
import NavBar from '../Common/Navbar';
import Footer from '../Common/Footer';

const Main = () => {
    return (
        <div className='font-saira'>
            <div className='max-w-7xl mx-auto'> 
            <NavBar></NavBar>
            <Outlet></Outlet> 
            <Footer></Footer>
            </div>
          
        </div>
    );
};

export default Main;