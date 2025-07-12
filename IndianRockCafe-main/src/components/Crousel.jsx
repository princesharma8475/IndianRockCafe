import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import burger from "../assets/static/burger.jpg";
import cake from "../assets/static/cake.jpg";
import pizza from "../assets/static/pizza.jpg";

const Carousel = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-6">
      <div className="w-full max-w-screen-xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {[cake, pizza, burger].map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
