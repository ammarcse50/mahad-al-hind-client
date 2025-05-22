import { motion } from "framer-motion";
import { GiTeacher } from "react-icons/gi";
import { TbRadioactive } from "react-icons/tb";
import { SiCodementor } from "react-icons/si";
import { PiCertificate } from "react-icons/pi";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <GiTeacher className="text-5xl text-lime-400" />,
      title: "Expert Teachers",
    },
    {
      icon: <TbRadioactive className="text-5xl text-lime-400" />,
      title: "Available 24/7",
    },
    {
      icon: <SiCodementor className="text-5xl text-lime-400" />,
      title: "Personal Mentorship",
    },
    {
      icon: <PiCertificate className="text-5xl text-lime-400" />,
      title: "Certification Provided",
    },
  ];

  return (
    <section className="relative z-10 px-4 py-16 md:py-20 lg:py-24 bg-gradient-to-b from-emerald-50 to-white ">
      {/* Blurred background shapes */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-emerald-300 opacity-20 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-green-400 opacity-20 rounded-full filter blur-3xl z-0"></div>

      <motion.h2
        className="text-center font-extrabold text-3xl md:text-5xl text-emerald-700 mb-6 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Us?
      </motion.h2>

      <motion.p
        className="text-center text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-12 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Learn Quran online with the correct method of Tajweed recitation. Our professional tutors with years of experience are here to guide you or your child with online Quran classes tailored to your needs.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col items-center text-center space-y-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <div className="p-4 bg-white rounded-full shadow-lg ring-4 ring-lime-300">
              {feature.icon}
            </div>
            <p className="text-lg font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
              {feature.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
