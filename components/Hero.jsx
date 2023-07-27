"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Translate } from "translate-easy";
import PhoneCanvas from "./PhoneCanvas";
import { Folder, User, Users, Code, X } from "lucide-react";

const Hero = () => {
  return (
    <header className="hero-wrapper pt-40 relative z-10 pb-8 text-slate-800 transition-all ease-in dark:text-slate-100">
      <div className="static-shape background-shape-main -z-1 absolute" />

      <div className="paddings innerWidth grid grid-cols-1 !items-end gap-11 md:grid-cols-2">
        <div className="hero-left flexColStart gap-12">
          <div className="hero-title relative z-[1]">
            <div
              className="circle absolute -top-[6%] left-0 -z-[1] h-[6.3rem] w-[6.3rem] rounded-full border-4 border-dashed border-orange-400 bg-transparent"
              style={{ animation: "spin 2.7s linear infinite" }}
            />

            {/* <X
              size={30}
              className="-top-[2%] left-0 -z-[1] text-gray-400"
              style={{ animation: "spin 2.7s linear infinite" }}
            /> */}

            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring" }}
              className="text-[3.8rem] font-semibold leading-[4rem]"
            >
              Your Business
              <br /> Deserves, Perfect
              <br /> Software Solutions!
            </motion.h1>
          </div>

          <div className="hero-desc flexColStart">
            <span className="text-light-gray">
              <Translate>Start With a selection of the best experts,</Translate>
            </span>
            <span className="font-bold text-light-gray">
              <Translate>Empower your business with our services.</Translate>
            </span>
          </div>
          <div className="status flexCenter w-ful justify-between gap-8">
            <div className="flexColCenter stat">
              <User className="text-indigo-500" />
              <span>
                <CountUp
                  start={0}
                  end={600}
                  duration={4}
                  className="text-4xl font-semibold text-slate-700 dark:text-gray-100"
                />
                <span className="ml-2 text-3xl font-bold text-[orange]">+</span>
              </span>
              <span className="text-light-gray">Client</span>
            </div>

            <div className="flexColCenter stat">
              <Users className="text-indigo-500" />
              <span>
                <CountUp
                  start={0}
                  end={40}
                  duration={4}
                  className="text-4xl font-semibold text-slate-700 dark:text-gray-100"
                />
                <span className="ml-2 text-3xl font-bold text-[#ffaa49]">
                  +
                </span>
              </span>
              <span className="text-light-gray">Team Members</span>
            </div>

            <div className="flexColCenter stat">
              <Code className="text-indigo-500" />
              <span>
                <CountUp
                  start={0}
                  end={5}
                  duration={4}
                  className="text-4xl font-semibold text-slate-700 dark:text-gray-100"
                />
                <span className="text-4xl font-semibold text-slate-700 dark:text-gray-100">
                  M
                </span>
                <span className="ml-2 text-3xl font-bold text-dark-orange">
                  +
                </span>
              </span>
              <span className="text-light-gray">Line Of Code</span>
            </div>

            <div className="flexColCenter stat">
              <Folder className="text-indigo-500" />
              <span>
                <CountUp
                  start={0}
                  end={340}
                  duration={4}
                  className="text-4xl font-semibold text-slate-700 dark:text-gray-100"
                />
                <span className="ml-2 text-3xl font-bold text-dark-orange">
                  +
                </span>
              </span>
              <span className="text-light-gray">Project</span>
            </div>
          </div>
        </div>
        <motion.div
          className="hero-right z-[5]"
          initial={{ x: "3rem", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "tween" }}
          viewport={{ once: true }}
        >
          <PhoneCanvas />
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
