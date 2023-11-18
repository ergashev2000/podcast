import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div className="space-y-10">
      <div className="custom_navigation overflow-hidden">
        <h2 className="text-xl font-semibold pb-1 before:w-full before:h-[2px] before:bg-gray-300 hover:before:scale-x-100 before:scale-x-0 before:transition-all before:duration-500  before:absolute relative before:bottom-1 before:left-0 w-fit before:origin-bottom-left cursor-pointer	">
          Tarixiy Podcastlar
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={swiper => console.log(swiper)}
          className="py-5 px-2 overflow-visible"
        >
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>

      <div className="custom_navigation overflow-hidden">
        <h2 className="text-xl font-semibold pb-1 before:w-full before:h-[2px] before:bg-gray-300 hover:before:scale-x-100 before:scale-x-0 before:transition-all before:duration-500  before:absolute relative before:bottom-1 before:left-0 w-fit before:origin-bottom-left cursor-pointer	">
          Tarixiy Podcastlar
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={swiper => console.log(swiper)}
          className="py-5 px-2 overflow-visible"
        >
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
