import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import NewPodcastsCard from "./NewPodcastsCard";

const NewPodcasts = () => {
  return (
    <>
      <div>
        <div className="p-1 custom_navigation relative overflow-hidden pt-7">
          <h2 className="text-xl font-semibold px-2">New Podcasts</h2>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={1}
            slidesPerView={3.3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            //   onSlideChange={() => console.log("slide change")}
            //   onSwiper={swiper => console.log(swiper)}
            className="overflow-visible"
          >
            <SwiperSlide className="p-4">
              <NewPodcastsCard />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <NewPodcastsCard />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <NewPodcastsCard />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <NewPodcastsCard />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <NewPodcastsCard />
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <NewPodcastsCard />
            </SwiperSlide>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default NewPodcasts;
