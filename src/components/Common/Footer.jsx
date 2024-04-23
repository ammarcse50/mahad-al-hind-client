import logo from "../../../public/images/logo.png";
const Footer = () => {
  return (
    <div className="bg-base-200 w-full ">
        
      <footer className="footer p-10 max-w-7xl mx-auto  text-base-content">

              
  <aside className="">
 
 <img src={logo} className="md:w-20 w-24  md:ml-20 ml-32" alt="" />
 <p className="ml-16 md:ml-0">Mahadul Qira'at Al Hind.<br/>Providing Knowledge Since  2022</p>
 </aside> 
 <nav>
   <h6 className="footer-title">Services</h6> 
   <a className="link link-hover">Branding</a>
   <a className="link link-hover">Design</a>
   <a className="link link-hover">Marketing</a>
   <a className="link link-hover">Advertisement</a>
 </nav> 
 <nav>
   <h6 className="footer-title">Company</h6> 
   <a className="link link-hover">About us</a>
   <a className="link link-hover">Contact</a>
   <a className="link link-hover">Jobs</a>
   <a className="link link-hover">Press kit</a>
 </nav> 
 <nav>
   <h6 className="footer-title">Legal</h6> 
   <a className="link link-hover">Terms of use</a>
   <a className="link link-hover">Privacy policy</a>
   <a className="link link-hover">Cookie policy</a>
 </nav>

      </footer>
    </div>
  );
};

export default Footer;
