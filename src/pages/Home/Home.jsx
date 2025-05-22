import Banner from "./Banner";

import BreakingNews from "../../components/Common/BreakingNews";

import { Link } from "react-router-dom";
import Testimonials from "./Testimonials/Testimonials";
import Category from "./Category/Category";
import WhyChooseUs from "../../components/WhyUs";
import LearnQuranSection from "../../components/LearnQuran";

const Home = () => {
  return (
    <div className="mx-auto">
    

      <Banner></Banner> 
      
       <BreakingNews></BreakingNews>

      {/* Why You CHoose Us?  */}
      
    <WhyChooseUs></WhyChooseUs>

         <Category></Category>



        {/* Review Off Student  */}
    
        
      <Testimonials></Testimonials>

        {/* Learn quran best tutor
         */}

      <LearnQuranSection></LearnQuranSection>
      </div>

  );
};

export default Home;
