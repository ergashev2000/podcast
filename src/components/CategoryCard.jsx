import React from "react";

import Img from "../assets/images/maxresdefault.jpg";
import { PlayIcon } from "./SvgIcon";

const CategoryCard = () => {
  return (
    <>
      <div className="hover:scale-105 relative max-w-xs w-full h-fit min-h-[50px] rounded-2xl overflow-hidden hover:shadow-gray-800 hover:shadow-lg transition-all duration-500 cursor-pointer">
        <img src={Img} alt="" className="w-full h-full rounded-2xl object-cover block" />
        <button className="absolute bottom-14 hover:bg-opacity-90 hover:bg-black transition-all duration-500 right-2 w-8 h-8 flex justify-center items-center rounded-full bg-gray-400 bg-opacity-50">
          <PlayIcon />
        </button>
        <div
          className="h-12 w-full absolute flex items-center gap-2 bottom-0 left-0 px-2 bg-opacity-80"
          style={{
            background:
              "linear-gradient(180deg, rgba(27,27,27,0.38056941526610644) 2%, rgba(23,24,29,0.7895330007002801) 43%, rgba(20,21,31,0.9519979866946778) 81%)",
          }}
        >
          <img
            src="https://yt3.googleusercontent.com/ytc/APkrFKZuB60Iz_WHwUtDAEchCztkBBon3vwRdZfUeuMWqg=s176-c-k-c0x00ffffff-no-rj"
            alt="Image"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h3 className="line-clamp-1 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit consequuntur itaque doloribus iste, voluptas </h3>
            <i className="text-[14px]">Channel nomi</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
