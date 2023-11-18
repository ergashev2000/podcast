import React from "react";

import Img from "../assets/images/img.png";
import Img2 from "../assets/images/maxresdefault.jpg";
import { PlayIcon } from "./SvgIcon";

const NewPodcastsCard = () => {
  return (
    <>
      <div className="h-fit w-full max-w-[400px] relative hover:bg-[#1A1A1A] rounded-2xl hover:scale-105 cursor-pointer p-2 transition-all duration-500 border  hover:border-gray-400 border-gray-700">
        <div className="relative">
          <img
            src={Img2}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
          <button className="hover:bg-opacity-50 transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 bg-white bg-opacity-30 flex justify-center items-center w-10 h-10 rounded-full">
            <PlayIcon />
          </button>
        </div>
        <img
          src="https://yt3.googleusercontent.com/ytc/APkrFKZuB60Iz_WHwUtDAEchCztkBBon3vwRdZfUeuMWqg=s176-c-k-c0x00ffffff-no-rj"
          alt=""
          className="absolute top-2 right-2 w-10 h-10 rounded-full"
        />
        <div className="space-y-1 py-1">
          <h3 className="text-lg font-semibold">Lorem ipsum dolor sit.</h3>
          <p className="text-sm opacity-80">Nma Gap</p>
        </div>
      </div>
    </>
  );
};

export default NewPodcastsCard;
