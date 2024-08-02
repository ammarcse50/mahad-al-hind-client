import Banner from "./Banner";

import BreakingNews from "../../components/Common/BreakingNews";

import { GiTeacher } from "react-icons/gi";
import { TbRadioactive } from "react-icons/tb";
import { SiCodementor } from "react-icons/si";
import { PiCertificate } from "react-icons/pi";
import getCloserImg from "/images/getcloser.png";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/Common/SectionTitle/SectionTitle";
import Testimonials from "./Testimonials/Testimonials";
import Category from "./Category/Category";

const Home = () => {
  return (
    <div className="">
      <BreakingNews></BreakingNews>

      <Banner></Banner>

      {/* Why You CHoose Us?  */}
      
      <div className="p-6">
      <h2 className="text-center font-bold text-5xl m-10 text-orange-500">Why choose us?</h2>
        <p className="text-center py-3">
          Learn Quran online with the correct method of Tajweed recitation. Our
          professional tutors with several years of experience are in a prime
          position to help you or your child by conducting Online Quran Classes
          .
        </p>

        <div className="flex md:flex-row flex-wrap md:justify-evenly justify-center items-center md:items-baseline gap-7 mt-10 mb-12">
          <span>
            <GiTeacher className="text-6xl text-lime-500" />
            Expert Teacher
          </span>
          <span>
            <TbRadioactive className="text-6xl text-lime-500" />
            Available 24/7
          </span>
          <span>
            <SiCodementor className="text-6xl text-lime-500" />
            Mentorship
          </span>
          <span>
            <PiCertificate className="text-6xl text-lime-500" />
            SONOD/CERTIFICATION
          </span>
        </div>

         

         <Category></Category>



        {/* Review Off Student  */}
    
        
      <Testimonials></Testimonials>

        {/* Learn quran best tutor
         */}

        <div className="my-10 md:flex">
          <div className="left md:w-1/2 flex justify-center my-3">
            <img
              src={getCloserImg}
              width={500}
              className="rounded-lg h-[500px]"
              alt=""
            />
          </div>

          <div className="right md:w-1/2 space-y-10 ">
            <h2 className="text-orange-500 text-5xl font-bold ">
              Learn Quran Online With The Best Tutors!
            </h2>

            <p>
              Learn Quran online with the correct method of Tajweed recitation.
              Our professional tutors with several years of experience are in a
              prime position forhelping you or your child to Learn Quran Online.
              Our skilled and qualified Quran teachers have the precise know-how
              of how to teach Quran Online for kids and adults. Learn at your
              convenience. Your location is no barrier as long as you have
              computer and internet access. Register now and get a free one-week
              trial right away!
            </p>
            <Link to="/form">
              {" "}
              <button className="btn  bg-orange-400 bg-gradient-to-r from-orange-300 via-orange-500  to-orange-600 text-white text-xl">
                Get Enrolled
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
