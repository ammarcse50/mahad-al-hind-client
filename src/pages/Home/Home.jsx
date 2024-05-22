import Banner from "./Banner";

import BreakingNews from "../../components/Common/BreakingNews";
import Statistic from "./Statistic";
import { GiTeacher } from "react-icons/gi";
import { TbRadioactive } from "react-icons/tb";
import { SiCodementor } from "react-icons/si";
import { PiCertificate, PiCertificateDuotone } from "react-icons/pi";
import  getCloserImg from '/images/getcloser.png'
import platformImg from "/images/platform.png";

const Home = () => {
  return (
    <div>
      <BreakingNews></BreakingNews>

      <Banner></Banner>
      <Statistic></Statistic>

      {/* Why You CHoose Us?  */}

      <div className="mt-12 p-6">
        <h2 className="text-orange-500 text-5xl font-bold text-center">
          Why Choose Us?
        </h2>
        <p className="text-center py-3">
          Learn Quran online with the correct method of Tajweed recitation. Our
          professional tutors with several years of experience are in a prime
          position to help you or your child by conducting Online Quran Classes
          .
        </p>

        <div className="flex md:flex-row flex-wrap md:justify-evenly justify-center items-center md:items-baseline gap-7 mt-10">
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

        {/* Review Off Student  */}

        <div className="mt-20 md:flex ">
          <div className="left md:w-1/2 text-center space-y-10">
            <h4 className="font-bold text-4xl text-white">Our Mission </h4>
            <h2 className="text-orange-500 text-5xl font-bold p-3">
              Best Islamic Platform For Learning
            </h2>
            <p className="p-3">
              At Mahadul Qira'at Al Hind, our mission is to provide a seamless
              and interactive learning experience for adults and children from
              all over the world. Our goal is to make Quranic learning
              accessible worldwide, connecting muslims with the holy book of
              Allah through online Quran classes with our expert tutors who are
              passionate about sharing their knowledge of the Quran.
            </p>
            <button className="btn  bg-orange-400 bg-gradient-to-r from-orange-300 via-orange-500  to-orange-600 text-white text-xl">
              Get Enrolled
            </button>
          </div>
          <div className="right md:w-1/2 flex justify-center my-4">
            <img src={platformImg} className="rounded-lg" width={500} alt="" />
          </div>
        </div>

           {/* Learn quran best tutor 
            */}

            <div className="my-10 md:flex">



            <div className="left md:w-1/2 flex justify-center my-3">
              <img src={getCloserImg} width={500}  className="rounded-lg h-[500px]" alt="" />
            </div>

            <div className="right md:w-1/2 space-y-10 ">



             <h2 className="text-orange-500 text-5xl font-bold ">Learn Quran Online With The Best Tutors!</h2>

             <p>Learn Quran online with the correct method of Tajweed recitation. Our professional tutors with several years of experience are in a prime position forhelping you or your child to Learn Quran Online. Our skilled and qualified Quran teachers have the precise know-how of how to teach Quran Online for kids and adults. Learn at your convenience. Your location is no barrier as long as you have computer and internet access. Register now and get a free one-week trial right away!</p>
           
            <button className="btn  bg-orange-400 bg-gradient-to-r from-orange-300 via-orange-500  to-orange-600 text-white text-xl my-5"> Get Enrolled</button>

            </div>



            </div>
      </div>
    </div>
  );
};

export default Home;
