import React from "react";

import { Link } from "react-router-dom";
import { HomeIcon, TrendIcon, FollowingIcon } from "./SvgIcon";
import Playlist from "./Playlist";

const AsideBar = () => {
  return (
    <aside className="p-2 w-1/5 space-y-2">
      <div className="bg-[#1A1A1A] rounded-2xl py-4">
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

      <Playlist/>
    </aside>
  );
};

export default AsideBar;
