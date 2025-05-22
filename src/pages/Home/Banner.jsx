import { motion } from "framer-motion";
import banner_1 from "/images/bannerMain.webp";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  },
};

const Banner = () => {
  return (
    <div className="relative flex flex-col md:flex-row hero-content mt-20 items-center justify-between gap-12 px-6 md:px-20 ">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-300 opacity-30 blur-3xl rounded-full z-0"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-300 opacity-20 blur-2xl rounded-full z-0"></div>

      {/* Left Content */}
      <motion.div
        className="md:w-1/2 z-10"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h1 className="text-2xl md:text-4xl font-bold text-black mb-4 leading-tight">
          Welcome to{" "}
          <span className="text-primary font-extrabold block md:text-5xl">
            Ma'hadul Qira'at Al Hind
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Your Trusted Online Destination for Mastering Qira'at
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn bg-primary text-white px-6 py-3 rounded-xl shadow-md"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="md:w-1/2 z-10 flex justify-center"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <div className="relative">
          <img
            src={banner_1}
            alt="banner"
            width={500}
            className="rounded-full shadow-2xl"
          />
          {/* Inner subtle glow */}
          <div className="absolute -inset-4 rounded-full bg-purple-200 blur-2xl opacity-20"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
