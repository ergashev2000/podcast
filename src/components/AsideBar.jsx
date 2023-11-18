import React from "react";

import { Link } from "react-router-dom";
import { HomeIcon, TrendIcon, FollowingIcon } from "./SvgIcon";
import Playlist from "./Playlist";
import Player from "./Player";

const AsideBar = () => {
  return (
    <aside className="p-2 w-1/5 space-y-2 sticky top-0 h-screen relative">
      <div className="bg-[#1A1A1A] rounded-2xl py-4 relative">
        <ul>
          <li>
            <Link to={"/"}>
              <h4 className="flex gap-3 items-center hover:bg-red-500 px-4 py-3">
                <HomeIcon />
                Home
              </h4>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4 className="flex gap-3 items-center hover:bg-red-500 px-4 py-3">
                <TrendIcon />
                Trending
              </h4>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4 className="flex gap-3 items-center hover:bg-red-500 px-4 py-3">
                <FollowingIcon />
                Following
              </h4>
            </Link>
          </li>
        </ul>
      </div>

      {/* <Playlist /> */}
      <Player/>
    </aside>
  );
};

export default AsideBar;
