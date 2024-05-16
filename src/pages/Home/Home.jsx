import Banner from "./Banner";

import Courses from "../Home/Courses/Courses"
import BreakingNews from "../../components/Common/BreakingNews";
import Statistic from "./Statistic";

const Home = () => {
  return (
 
     <div >

       
       <BreakingNews></BreakingNews> 
         
        <Banner></Banner>
        <Statistic></Statistic>
        <Courses></Courses>
      
    </div>
  );
};

export default Home;
