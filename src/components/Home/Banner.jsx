import { Link } from "react-router-dom";
import banner_1 from "/images/banner1.jpg";
import banner_2 from "/images/banner2.png";
import banner_3 from "/images/banner3.png";
import banner_4 from "/images/banner4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
    });
  }, []);
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative w-full md:h-[600px] h-[400px]"
      >
        <img src={banner_4} className="md:w-full   rounded-xl md:h-[600px] " />

        <div
          data-aos="fade-in"
          className="absolute left-0 top-0  h-full  w-full bg-gradient-to-r from-[#151515] to-white-0 rounded-xl "
        >
          <div className="space-y-6 ml-9">
            <p className="md:text-2xl font-semibold md:mt-32 mt-10 text-white">
              ASSALAMUALAIKUM, WELCOME TO
            </p>
            <h2 className="md:text-5xl text-3xl  font-bold text-white ">
              Mahadul Qira'at Al Hind
            </h2>
            <p className="text-2xl font-semibold  text-orange-500">
              Best Online Quran and Qira'at Learning <br /> Platform (English,
              Urdu, Hindi, Bangla, and Arabic Medium)
            </p>
            <Link to="/form">
              {" "}
              <button className="btn btn-xs hover:bg-[#1a103d] hover:text-white hover:text-xl mt-9 btn-sm md:btn-md lg:btn-lg outline outline-orange-500 hover:outline-green-500 text-orange-500 bg-transparent ">
                Admission Open
              </button>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="absolute flex right-10 bottom-14 md:top-3/4"
        >
          <a href="#slide4" className="btn btn-circle bg-orange-500 mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-orange-500">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner_1} className="md:w-full   rounded-xl md:h-[600px] " />

        <div className="absolute left-0 top-0  h-full  w-full bg-gradient-to-r from-[#151515] to-white-0 rounded-xl">
          <div className="space-y-6 ml-9">
            <p className="md:text-2xl font-semibold md:mt-32 mt-10 text-white">
              ASSALAMUALAIKUM, WELCOME TO
            </p>
            <h2 className="md:text-5xl text-3xl  font-bold text-white ">
              Mahadul Qira'at Al Hind
            </h2>
            <p className="text-2xl font-semibold  text-orange-500">
              Best Online Quran and Qira'at Learning <br /> Platform (English,
              Urdu, Hindi, Bangla, and Arabic Medium)
            </p>
            <Link to="/form">
              {" "}
              <button className="btn btn-xs hover:bg-[#1a103d] hover:text-white hover:text-xl mt-9 btn-sm md:btn-md lg:btn-lg outline outline-orange-500 hover:outline-green-500 text-orange-500 bg-transparent ">
                Admission Open
              </button>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="absolute flex right-10 bottom-14 md:top-3/4"
        >
          <a href="#slide1" className="btn btn-circle bg-orange-500 mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-orange-500">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner_3} className="md:w-full   rounded-xl md:h-[600px] " />

        <div className="absolute left-0 top-0  h-full  w-full bg-gradient-to-r from-[#151515] to-white-0 rounded-xl">
          <div className="space-y-6 ml-9">
            <p className="md:text-2xl font-semibold md:mt-32 mt-10 text-white">
              ASSALAMUALAIKUM, WELCOME TO
            </p>
            <h2 className="md:text-5xl text-3xl  font-bold text-white ">
              Mahadul Qira'at Al Hind
            </h2>
            <p className="text-2xl font-semibold  text-orange-500">
              Best Online Quran and Qira'at Learning <br /> Platform (English,
              Urdu, Hindi, Bangla, and Arabic Medium)
            </p>
            <Link to="/form">
              {" "}
              <button className="btn btn-xs hover:bg-[#1a103d] hover:text-white hover:text-xl mt-9 btn-sm md:btn-md lg:btn-lg outline outline-orange-500 hover:outline-green-500 text-orange-500 bg-transparent ">
                Admission Open
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute flex right-10 bottom-14 md:top-3/4">
          <a href="#slide2" className="btn btn-circle bg-orange-500 mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-orange-500">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner_2} className="md:w-full   rounded-xl md:h-[600px] " />

        <div className="absolute left-0 top-0  h-full  w-full bg-gradient-to-r from-[#151515] to-white-0 rounded-xl">
          <div className="space-y-6 ml-9">
            <p className="md:text-2xl font-semibold md:mt-32 mt-10 text-white">
              ASSALAMUALAIKUM, WELCOME TO
            </p>
            <h2 className="md:text-5xl text-3xl  font-bold text-white ">
              Mahadul Qira'at Al Hind
            </h2>
            <p className="text-2xl font-semibold  text-orange-500">
              Best Online Quran and Qira'at Learning <br /> Platform (English,
              Urdu, Hindi, Bangla, and Arabic Medium)
            </p>
            <Link to="/form">
              {" "}
              <button className="btn btn-xs hover:bg-[#1a103d] hover:text-white hover:text-xl mt-9 btn-sm md:btn-md lg:btn-lg outline outline-orange-500 hover:outline-green-500 text-orange-500 bg-transparent ">
                Admission Open
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute flex right-10 bottom-14 md:top-3/4">
          <a href="#slide3" className="btn btn-circle bg-orange-500 mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-orange-500">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
