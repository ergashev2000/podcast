import React from "react";
import { AddPlusIcon, PlaylistIcon, SearchIcon } from "./SvgIcon";
import PlaylistCard from "./PlaylistCard";

const Playlist = () => {
  return (
    <>
      <div className="bg-[#1A1A1A] rounded-2xl p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="flex items-center gap-2 text-[15px]">
            <PlaylistIcon /> Your playlist (9)
          </h4>
          <div className="flex items-center">
            <button className=" p-2 rounded">
              <SearchIcon />
            </button>
            <button className=" p-2 rounded">
              <AddPlusIcon />
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <PlaylistCard />
        </div>
      </div>
    </>
  );
};

export default Playlist;
