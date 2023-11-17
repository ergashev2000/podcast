import React from "react";

const PlaylistCard = () => {
  return (
    <div className="flex items-center justify-between gap-1">
      <div className="flex items-center justify-between gap-1 ">
        <div className="w-10 h-10 rounded overflow-hidden">
          <img src="https://fakeimg.pl/300/" className="w-full h-full" />
        </div>
        <div>
          <h5 className="text-[15px]">How to Start Podcast</h5>
          <p className="text-[14px]">31 podcast · by ken adam</p>
        </div>
      </div>
      <button className="bg-red-400 w-7 h-7">P</button>
    </div>
  );
};

export default PlaylistCard;
