import React from "react";

import { Link } from "react-router-dom";

import { PlayIcon } from "./SvgIcon";

const CategoryCard = () => {
  return (
    <>
      <Link to={"/"}>
        <div className="group hover:scale-105 relative max-w-xs w-full h-fit min-h-[50px] rounded-2xl overflow-hidden hover:shadow-gray-800 hover:shadow-lg transition-all duration-500 cursor-pointer">
          <img
            src="https://img.youtube.com/vi/nETxLIaxsik/maxresdefault.jpg"
            alt=""
            className="w-full h-full rounded-2xl object-cover block"
          />
          <button className="group-hover:opacity-100 absolute top-1/2 hover:bg-opacity-90 hover:bg-black transition-all duration-500 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex justify-center items-center rounded-full bg-gray-400 bg-opacity-30 opacity-0">
            <PlayIcon />
          </button>
          <div
            className="h-auto w-full absolute flex items-center gap-1 bottom-0 left-0 p-1.5"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.7979363620448179) 15%, rgba(0,0,0,0.9127823004201681) 42%, rgba(0,0,0,0.963202468487395) 62%)",
            }}
          >
            <img
              src="https://yt3.googleusercontent.com/ytc/APkrFKZuB60Iz_WHwUtDAEchCztkBBon3vwRdZfUeuMWqg=s176-c-k-c0x00ffffff-no-rj"
              alt="Image"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <h3 className="line-clamp-2 text-sm leading-4">
                AI inqilobi. 70% odam soliq to`lamaydi. O`g`irlash normalligi -
                Laziz Adhamov bilan podcast
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
