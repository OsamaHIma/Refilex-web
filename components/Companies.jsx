"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";
import { companiesSliderSittings } from "@/constants";

const Companies = () => {
  const images = [
    "/Artboard-4.png",
    "/365sportat.png",
    "/Artboard.png",
    "/cargocab.png",
    "/zino-tech-logo-768x319.png",
    "/logodown.png",
    "/nspo.png",
    "/asperologo-768x839.png",
    "/Artboard-41.png",
  ];

  SwiperCore.use([Autoplay]);

  return (
    <section>
      <h1 className="dark:text-white text-slate-500 font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] mt-8 text-center">OUR HAPPY CLIENTS</h1>
      <div className="relative">
        <Swiper
          className="pt-8"
          {...companiesSliderSittings}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="cursor-grab active:cursor-grabbing">
              <Image
                src={image}
                alt="company"
                className="scale-75 opacity-50 grayscale transition-all duration-500 ease-in-out hover:scale-100 hover:cursor-pointer hover:opacity-100 hover:grayscale-0"
                width={137}
                height={137}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <SwiperButtons /> */}
      </div>
    </section>
  );
};

export default Companies;
