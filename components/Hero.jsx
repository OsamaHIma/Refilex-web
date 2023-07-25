"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, Preload, useGLTF } from "@react-three/drei";
import { MapPinIcon } from "lucide-react";
import CountUp from "react-countup";
import ImageCol from "./ImageCol";
import { motion } from "framer-motion";
import { Translate } from "translate-easy";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

const Hero = () => {
  const phone = useGLTF("/models/iphone_12_pro/scene.gltf");

  return (
    <header className="hero-wrapper relative z-10 pb-8 text-slate-900 transition-all ease-in dark:text-white">
      <div className="paddings innerWidth grid grid-cols-1 !items-end gap-11 md:grid-cols-2">
        <div className="hero-left flexColStart gap-12">
          <div className="hero-title relative z-[1]">
            <div className="circle bg-orange-gradient absolute -top-[5%] right-[30%] -z-[1] h-16 w-14 animate-spin rounded-full" />
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

          {/* <div className="search-bar flexCenter bg-white w-full rounded-md border-[3px] border-solid border-[rgba(120,120,120,0.374)] py-2 px-4 justify-between">
            <MapPinIcon className="text-dark-blue" />
            <input
              type="search"
              className="border-none outline-none bg-white dark:text-slate-900 px-2"
            />
            <button className="btn bg-dark-blue">Search</button>
          </div> */}
          <div className="status flexCenter w-ful justify-between gap-8">
            <div className="flexColCenter stat">
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
                <span className="ml-2 text-3xl font-bold text-[#eb9544]">
                  +
                </span>
              </span>
              <span className="text-light-gray">Line Of Code</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp
                  start={0}
                  end={340}
                  duration={4}
                  className="text-4xl font-semibold text-slate-700 dark:text-gray-100"
                />
                <span className="ml-2 text-3xl font-bold text-[#eb9544]">
                  +
                </span>
              </span>
              <span className="text-light-gray">Project</span>
            </div>
          </div>
        </div>
        <motion.div
          className="hero-right"
          initial={{ x: "3rem", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "tween" }}
          viewport={{ once: true }}
        >
          <Canvas
            frameloop="demand"
            dpr={[1, 2]}
            camera={{ position: [0, 0, 80], fov: 25, rotation: [0, 0, 0] }}
            gl={{ preserveDrawingBuffer: true }}
            className="cursor-grab active:cursor-grabbing"
            onError={(error) => {
              console.error("err", error);
            }}
            style={{ height: "400px", width: "100%" }}
          >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls enableZoom={false} />
              <mesh>
                <hemisphereLight intensity={0.15} groundColor="black" />
                <spotLight
                  position={[-20, 50, 10]}
                  angle={0.12}
                  penumbra={1}
                  intensity={1}
                  castShadow
                  shadow-mapSize={1024}
                />
                <pointLight intensity={1} />
                <primitive
                  rotation={[0, 4.3, 0]}
                  object={phone.scene}
                  scale={0.07}
                  position={[0, -1.25, -1.5]}
                />
              </mesh>
            </Suspense>
            <Preload all />
          </Canvas>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
