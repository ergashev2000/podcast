import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import ChannelsLoader from "./PlaceholderLoaders/ChannelsLoader";

const ChannelPodcasts = () => {
  return (
    <>
      <div className="custom_navigation w-full relative overflow-hidden py-7">
        <h2 className="text-xl font-semibold">Channels</h2>
        <div className="flex gap-4 px-5 pt-5">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <ChannelsLoader key={index} />
            ))}
        </div>
        {/* <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={6}
          slidesPerGroup={2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={swiper => console.log(swiper)}
          className="p-4 overflow-visible"
        >
          <SwiperSlide>
            <div className="w-36 h-36 cursor-pointer shadow-2xl relative rounded-full [&>h3]:hover:opacity-100 [&>img]:hover:blur-[2px]">
              <img
                src="https://yt3.googleusercontent.com/ytc/APkrFKZuB60Iz_WHwUtDAEchCztkBBon3vwRdZfUeuMWqg=s176-c-k-c0x00ffffff-no-rj"
                alt=""
                className="w-full h-full object-cover rounded-full transition-all duration-300"
              />
              <h3 className=" text-center absolute top-1/2 -translate-y-1/2 font-semibold left-1/2 -translate-x-1/2 w-full transition-all duration-300 opacity-0 pointer-events-none line-clamp-2 bg-[#3D0B62] bg-opacity-90">
                <i>Xay Mayli</i>
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-36 h-36 cursor-pointer shadow-2xl relative rounded-full [&>h3]:hover:opacity-100 [&>img]:hover:blur-[2px]">
              <img
                src="https://yt3.googleusercontent.com/ytc/APkrFKZuB60Iz_WHwUtDAEchCztkBBon3vwRdZfUeuMWqg=s176-c-k-c0x00ffffff-no-rj"
                alt=""
                className="w-full h-full object-cover rounded-full transition-all duration-300"
              />
              <h3 className=" text-center absolute top-1/2 -translate-y-1/2 font-semibold left-1/2 -translate-x-1/2 w-full transition-all duration-300 opacity-0 pointer-events-none line-clamp-2 bg-[#3D0B62] bg-opacity-90">
                <i>Xay Mayli</i>
              </h3>
            </div>
          </SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper> */}
      </div>
    </>
  );
};

export default ChannelPodcasts;
