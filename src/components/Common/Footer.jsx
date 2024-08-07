import { Link } from "react-router-dom";
import logo from "../../../public/images/logo.jpg";
// import "boxicons";
import { useEffect } from "react";

import Aos from "aos";

const Footer = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    Aos.init({
      easing: "ease-in-out", // Easing function
    });
  }, []);
  return (
    <div className="bg-sky bg-gradient-to-t via-violet-400 from-orange-400 w-full mt-32 p-4">
      <footer className="footer  max-w-7xl mx-auto font-bold text-base-content">
        <aside data-aos="fade-right" className="">
          <img src={logo} className="md:w-20 w-24 rounded  md:ml-20 ml-32" alt="" />
          <p className="ml-16 md:ml-0">
            Mahadul Qira'at Al Hind.
            <br />
            Providing Knowledge Since 2022
          </p>
        </aside>
        <nav data-aos="fade-up">
          <h6 className="footer-title text-black">Services</h6>
          <a className="link link-hover">Quran Course</a>
          <a className="link link-hover">Maqamat</a>
          <a className="link link-hover">Rewayat</a>
          <a className="link link-hover">Higher Qira'at Course</a>
        </nav>
        <nav data-aos="fade-up">
          <h6 className="footer-title text-black">Our Academy</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav data-aos="fade-left">
          <h6 className="footer-title text-black">SOCIAL MEDIA</h6>
          <p className="mb-4">You can find us from social links given below</p>
          <div className="flex gap-5">
            <Link to="https://t.me/+919365262648">
              <span className="link link-hover ">
                <box-icon
                  className=" "
                  name="telegram"
                  type="logo"
                  color="#e68b07"
                ></box-icon>
              </span>
            </Link>
            <Link to="https://api.whatsapp.com/send?phone=919365262648">
              <span className="link link-hover ">
                <box-icon
                  name="whatsapp"
                  type="logo"
                  color="#e68b07"
                ></box-icon>
              </span>
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=61552346161606&mibextid=ZbWKwL">
              <span className="link link-hover">
                <box-icon
                  name="facebook-circle"
                  type="logo"
                  color="#e68b07"
                ></box-icon>
              </span>
            </Link>
          </div>
          <input type="text" className="rounded-none input input-bordered border-black bg-gray-200" /> 
           <h3 className="btn btn-warning">SUBSCRIBE</h3>
           
        </nav>
      </footer>
      <div className="text-[#159e53] text-xl  flex flex-row gap-4 justify-center pb-3">
        <p className="text-black md:px-0 px-5 py-4 mt-10">
          © Copyright 2023 | All rights reserved by MAHAD AL HIND
        </p>
      </div>
    </div>
  );
};

export default Footer;
