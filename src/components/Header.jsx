import React, { useState, useEffect, useRef } from "react";
import {
  ArrowIcon,
  CoffeeIcon,
  NotificationIcon,
  PersonIcon,
  SearchIcon,
  SettingsIcon,
} from "./SvgIcon";

import Profile from "../assets/images/Profile.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [openNotification, setOpenNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const modalRef = useRef(null);

  const handleProfile = () => {
    setProfile(prev => !prev);
    if (openNotification) {
      setOpenNotification(false);
    }
  };

  const handleNotification = () => {
    setOpenNotification(prev => !prev);
    if (profile) {
      setProfile(false);
    }
  };

  useEffect(() => {
    const modal = modalRef.current;
    const handleClickOutside = event => {
      if (
        modal &&
        !modal.contains(event.target) &&
        event.target.id !== "profile"
      ) {
        setProfile(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
      <div className=" flex items-center gap-4 relative">
        <div
          className={`bg-[#1A1A1A] h-40 overflow-y-auto rounded-xl bg-opacity-60 p-2 thin_scroll absolute top-0 z-10 right-full mr-1 w-64 transition-all duration-500 ${
            openNotification ? "block " : "hidden"
          }`}
        >
          <ul className="space-y-4 w-full">
            <li className=" w-full">
              <h4 className="text-[15px] line-clamp-1 p-1 bg-slate-700 rounded bg-opacity-60">
                Xabar 1
              </h4>
              <p className="text-[14px] line-clamp-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, odit?
              </p>
            </li>
            <li className="space-y-1 w-full">
              <h4 className="text-[15px] line-clamp-1 p-1 bg-slate-700 rounded bg-opacity-60">
                Xabar 1
              </h4>
              <p className="text-[14px] line-clamp-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, odit?
              </p>
            </li>
            <li className="space-y-1 w-full">
              <h4 className="text-[15px] line-clamp-1 p-1 bg-slate-700 rounded bg-opacity-60">
                Xabar 1
              </h4>
              <p className="text-[14px] line-clamp-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, odit?
              </p>
            </li>
          </ul>
        </div>

        <button
          className="bg-[#1A1A1A] h-10 w-10 flex justify-center items-center rounded-lg "
          onClick={handleNotification}
        >
          <NotificationIcon />
        </button>
        <button
          onClick={handleProfile}
          className="w-10 h-10 rounded-full overflow-hidden"
        >
          <img
            src={Profile}
            alt="Image"
            className="w-full h-full object-cover"
            id="profile"
          />
        </button>

        <div
          className={`absolute top-full right-0 bg-[#1A1A1A] w-32 z-10 rounded-lg py-2 duration-300 transition-all mt-2 ${
            profile ? "block " : "hidden"
          }`}
          ref={modalRef}
        >
          <ul>
            <li>
              <Link to={"/"}>
                <div className="flex items-center gap-2 hover:bg-gray-700 px-2 py-1 transition-all duration-500 rounded">
                  <SettingsIcon />
                  <h4 className="text-sm">Settings</h4>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <div className="flex items-center gap-2 hover:bg-gray-700 px-2 py-1 transition-all duration-500 rounded">
                  <PersonIcon />
                  <h4 className="text-sm">For Authors</h4>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <div className="flex items-center gap-2 hover:bg-gray-700 px-2 py-1 transition-all duration-500 rounded">
                  <CoffeeIcon />
                  <h4 className="text-sm">Coffee</h4>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
