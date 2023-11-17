import React from "react";
import { ArrowIcon, NotificationIcon, SearchIcon } from "./SvgIcon";

import Profile from "../assets/images/Profile.png";

const Header = () => {
  return (
    <header className="p-2 w-full flex items-center justify-between">
      <div className="flex items-center gap-2 w-full">
        <button className="bg-[#1A1A1A] h-10 w-10 flex justify-center items-center rounded-lg ">
          <ArrowIcon />
        </button>
        <div className="flex items-center bg-[#1A1A1A] rounded overflow-hidden max-w-lg w-full">
          <div className="px-3">
            <SearchIcon />
          </div>
          <input
            type="text"
            className="w-full bg-[#1A1A1A] h-10 focus:outline-none placeholder:text-[15px] text-[15px] placeholder:opacity-50"
            placeholder="I want to listen...."
          />
        </div>
      </div>
      <div className=" flex items-center gap-2">
        <button className="bg-[#1A1A1A] h-10 w-10 flex justify-center items-center rounded-lg ">
          <NotificationIcon />
        </button>
        <div className="w-10 h-10 rounded-lg overflow-hidden">
          <img
            src={Profile}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
