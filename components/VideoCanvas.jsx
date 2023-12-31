"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const handleVideoPlay = () => {
    setShowOverlay(false);
    setShowPlayButton(false);
  };

  return (
    <section className="relative py-20" id="about-us">

      <h1 className="xs:text-[30px] my-8 text-center text-[20px] font-black text-slate-500 dark:text-white sm:text-[40px] md:text-[50px] ">
        About Us
      </h1>

      <div
        className="relative mx-auto h-0 w-[80%] overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600
        to-orange-400 pb-[43%] shadow-2xl"
      >
        <div className="absolute left-0 top-0 z-[1] h-full w-full">
          <ReactPlayer
            className="absolute left-0 top-0 h-full w-full rounded-full"
            url="https://www.youtube.com/watch?v=h12q2HyOdxs"
            width="100%"
            height="100%"
            controls
            onPlay={handleVideoPlay}
          />
        </div>
        {showOverlay && (
          <>
            <div className="pointer-events-none absolute left-0 top-0  flex h-full w-full flex-col items-center justify-center">
              {showPlayButton && (
                <button
                  className="mb-4 rounded-full bg-white p-4 shadow-lg transition-colors duration-300 hover:bg-gray-100"
                  onClick={handleVideoPlay}
                >
                  <Play className="h-6 w-6 text-slate-900" />
                </button>
              )}
              <div className="text-center text-white">
                <h1 className="mb-4 text-3xl font-bold">Reflex Promo</h1>
                <p className="text-lg">About US.</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default VideoPlayer;
