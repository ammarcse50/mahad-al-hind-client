import banner_1 from "/images/banner1.jpg";
import banner_2 from "/images/banner2.png";
import banner_3 from "/images/banner3.png";
import banner_4 from "/images/banner4.png";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner_1} className="w-full rounded-xl h-[600px] " />

        <div className="absolute left-0 top-0  h-full  w-full bg-gradient-to-r from-[#151515] to-white-0 rounded-xl">
          <div className="space-y-6 ml-9">
            <p className="text-2xl font-semibold mt-32 text-white">
              ASSALAMUALAIKUM, WELCOME TO
            </p>
            <h2 className="text-5xl  font-bold text-white ">
              Mahadul Qira'at Al Hind
            </h2>
            <p className="text-2xl font-semibold  text-orange-500">
              Best Online Quran and Qira'at Learning <br /> Platform (English,
              Urdu, Hindi, Bangla, and Arabic Medium)
            </p>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg outline outline-orange-500 text-orange-500 bg-transparent hover:bg-white">
              Admission Open
            </button>
          </div>
        </div>
        <div className="absolute flex right-10 top-3/4">
          <a href="#slide4" className="btn btn-circle bg-white mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner_2} className="w-full rounded-xl h-[600px]" />
        <div className="absolute flex justify-end right-10   top-1/3">
          <a href="#slide1" className="btn btn-circle bg-white mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner_3} className="w-full rounded-xl h-[600px]" />
        <div className="absolute flex justify-end right-10   top-1/3">
          <a href="#slide2" className="btn btn-circle bg-white mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner_4} className="w-full rounded-xl h-[600px]" />
        <div className="absolute flex justify-end right-10   top-1/3">
          <a href="#slide3" className="btn btn-circle bg-white mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-white">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;