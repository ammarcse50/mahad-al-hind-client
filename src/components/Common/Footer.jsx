import { Link } from "react-router-dom";
import logo from "../../../public/images/logo.png";
import "boxicons";

const Footer = () => {
  return (
    <div className="bg-base-200 w-full ">
      <footer className="footer p-10 max-w-7xl mx-auto  text-base-content">
        <aside className="">
          <img src={logo} className="md:w-20 w-24  md:ml-20 ml-32" alt="" />
          <p className="ml-16 md:ml-0">
            Mahadul Qira'at Al Hind.
            <br />
            Providing Knowledge Since 2022
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Quran Course</a>
          <a className="link link-hover">Maqamat</a>
          <a className="link link-hover">Rewayat</a>
          <a className="link link-hover">Higher Qira'at Course</a>
        </nav>
        <nav>
          <h6 className="footer-title">Our Academy</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">SOCIAL MEDIA</h6>
          <div className="flex gap-5">
            <Link to="https://t.me/+919365262648">
              <span className="link link-hover">
                <box-icon
                  name="telegram"
                  type="logo"
                  color="#e68b07"
                ></box-icon>
              </span>
            </Link>
            <Link to="https://api.whatsapp.com/send?phone=919365262648">
              <span className="link link-hover">
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
        </nav>
      </footer>
      <div className="text-[#159e53] text-xl  flex flex-row gap-4 justify-center pb-3">
        <p className="text-white md:px-0 px-5">
          © Copyright 2023 | All rights reserved by mahadul Qiraat Al Hind
        </p>
      </div>
    </div>
  );
};

export default Footer;
