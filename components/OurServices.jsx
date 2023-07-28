"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { services } from "@/constants";


const ServiceCard = ({ index, title, icon, image, description }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: index * 0.5, type: "tween" }}
      viewport={{ once: true }}
      className={`my-5 flex flex-col items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }  border-b-2 border-gray-300 dark:border-gray-500 px-3 gap-8 py-2 md:items-start shadow-xl rounded-md`}
    >
      <Tilt
        className={`w-full transition-all md:w-1/2`}
        glareEnable={true}
        glareBorderRadius="20px"
        glareColor="#5d56e0"
      >
        <img
          src={image}
          alt={title}
          className="mt-3 w-full rounded-[20px] object-contain"
        />
      </Tilt>
      <div className="bg-indigo-200 dark:bg-indigo-800 my-auto flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-3 py-5 md:w-1/2 md:px-8 md:py-2">
        <motion.h3
          className="text-[20px] font-bold md:text-left"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          
        >
          {title}
          {"   "}
          {icon}
        </motion.h3>

        <motion.p
          className="mb-4 mt-2 text-center text-[16px] md:text-left"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
        <button className="rounded-full bg-indigo-500 px-4 py-2 text-white transition-all hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          Request Quote
        </button>
      </div>
    </motion.div>
  );
};
const OurServices = () => {
  return (
    <section className="paddings innerWidth" id="services">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center"
      >
        <motion.div initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.7 }}
        viewport={{ once: true }}>
        <h1 className={`dark:text-white text-slate-400 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Our Services</h1>
      </motion.div>

      <motion.p initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.7 }}
        viewport={{ once: true }}>
       Refilex offers you a unique and professional package of software services and<br/> solutions designed specifically to meet your activity and business needs.
      </motion.p>
        <div className="grid grid-cols-1">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              icon={service.icon}
              image={service.image}
              description={service.description}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurServices;
