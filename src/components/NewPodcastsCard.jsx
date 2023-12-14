import React from "react";

import Img from "../assets/images/img.png";
import Img2 from "../assets/images/maxresdefault.jpg";
import Img3 from "../assets/images/img2.jpg";
import { PlayIcon } from "./SvgIcon";
import { Link } from "react-router-dom";

const NewPodcastsCard = ({ newPodcast }) => {
  console.log(newPodcast);
  return (
    <>
      <Link to={`/detail/${newPodcast?.id}`}>
        <div className="group h-fit w-full max-w-[420px] relative hover:bg-[#1A1A1A] rounded-2xl hover:scale-105 cursor-pointer p-2 transition-all duration-500 border hover:border-gray-400 border-[#4a4a4a]">
          <div className="relative ">
            <img
              src={newPodcast?.poster}
              alt="Image"
              className="w-full h-44 object-cover rounded-xl"
            />
            <button className="group-hover:opacity-100 opacity-0 hover:bg-opacity-90 transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 bg-black bg-opacity-50 flex justify-center items-center w-8 h-8 rounded-full">
              <PlayIcon />
            </button>
          </div>
          <img
            src="https://yt3.googleusercontent.com/ytc/APkrFKYrASVI1ve-MSRPTWJO2ntr3hH32dFTKwMLd9FmsA=s176-c-k-c0x00ffffff-no-rj"
            alt=""
            className="absolute top-2 right-2 w-10 h-10 rounded-full"
          />
          <div className="space-y-1 pt-1">
            <h3 className="font-semibold line-clamp-2">{newPodcast?.title}</h3>
            <div className="flex justify-between items-center">
              <p className="text-[13px] opacity-80 line-clamp-1">
                {newPodcast?.channel}
              </p>
              <span className="text-[12px]">02.05.2023</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NewPodcastsCard;
