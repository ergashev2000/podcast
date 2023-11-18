import React from "react";

import { Link } from "react-router-dom";
import { HomeIcon, TrendIcon, FollowingIcon } from "./SvgIcon";
import Playlist from "./Playlist";
import Player from "./Player";
import Logo from '../assets/images/logo.png'

const AsideBar = () => {
  return (
    <aside className="w-1/5 sticky top-0 h-screen">
      <div className="relative h-screen p-2 ">
        <div className="bg-[#1A1A1A] rounded-2xl py-4 relative">
          <Link to={"/"}>
            <img
              src={Logo}
              alt=""
              className="h-12 flex justify-center w-full object-contain pb-2"
            />
          </Link>
          
          <ul className="space-y-1">
            <li>
              <Link to={"/"}>
                <h4 className="flex gap-3 items-center hover:bg-red-500 px-4 py-1">
                  <HomeIcon />
                  Home
                </h4>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <h4 className="flex gap-3 items-center hover:bg-red-500 px-4 py-1">
                  <TrendIcon />
                  Trending
                </h4>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <h4 className="flex gap-3 items-center hover:bg-red-500 px-4 py-1">
                  <FollowingIcon />
                  Following
                </h4>
              </Link>
            </li>
          </ul>
        </div>

        {/* <Playlist /> */}
        <Player />
      </div>
    </aside>
  );
};

export default AsideBar;
