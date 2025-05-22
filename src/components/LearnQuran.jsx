import { Link } from "react-router-dom";
import getCloserImg from "/images/getcloser.png"; // Update with actual path
import { GiTeacher } from "react-icons/gi";
import { TbRadioactive } from "react-icons/tb";
import { SiCodementor } from "react-icons/si";
import { PiCertificate } from "react-icons/pi";
const LearnQuranSection = () => {
  return (
    <section className="relative z-10 my-16 py-12 px-6 md:px-16 bg-gradient-to-br from-emerald-50 via-white to-lime-100 rounded-3xl shadow-xl max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={getCloserImg}
            alt="Learn Quran Online"
            className="rounded-2xl w-full max-w-[500px] h-auto shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-primary text-3xl md:text-5xl font-extrabold leading-tight">
            Learn Quran Online With The Best Tutors!
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Learn Quran online with the correct method of Tajweed recitation.
            Our experienced tutors are perfectly equipped to help both kids and
            adults on their Quranic journey. With flexible timings and expert
            guidance, you can study at your own pace — from anywhere in the
            world. Start today and enjoy a <span className="text-emerald-600 font-semibold">free one-week trial!</span>
          </p>

          <Link to="/form">
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-md md:text-lg rounded-xl shadow-md transition-all duration-300">
              🚀 Get Enrolled
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LearnQuranSection;
