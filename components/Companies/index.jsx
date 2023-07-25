"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import { useRef } from "react";
import Image from "next/image";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";

SwiperCore.use([Autoplay]);

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

  const swiperRef = useRef(null); // initialize ref

  const SwiperButtons = () => {
    const swiper = useSwiper();

    return (
      <div className="swiper-buttons absolute -top-2 right-10 flex flex-wrap gap-3">
        <button
          className="rounded-md bg-slate-200 px-2 py-1 text-dark-blue shadow transition-all ease-in hover:scale-110 dark:bg-gray-400"
          onClick={() => swiper.slidePrev()}
        >
          <LucideChevronLeft width={19} />
        </button>
        <button
          className="rounded-md px-2 py-1 text-dark-blue shadow transition-all ease-in hover:scale-110 dark:bg-[#eee]"
          onClick={() => swiper.slideNext()}
        >
          <LucideChevronRight width={19} />
        </button>
      </div>
    );
  };
  return (
    <section>
      <h1 className="primaryText mt-3  text-center">Our Happy Clients</h1>
      <Swiper
        loop
        className="pt-8"
        spaceBetween={20}
        slidesPerView={6}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        on={{
          slideChangeTransitionEnd: () => {
            swiperRef.current.autoplay.start(); // restart autoplay
          },
        }}
        wrapperProps={{ direction: "ltr" }}
        ref={swiperRef} // assign ref
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt="company" width={146} height={146} />
          </SwiperSlide>
        ))}
        <SwiperButtons />
      </Swiper>
    </section>
  );
};

export default Companies;
