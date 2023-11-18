import React, { useRef, useEffect } from "react";
import "plyr/dist/plyr.css";
import Plyr from "plyr";

import Img from "../assets/images/maxresdefault.jpg";

import { CloseIcon, SeekTimeIcon } from "./SvgIcon";

const Player = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    const options = {
      controls: [
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "settings",
        "current-time",
        "duration",
      ],
      keyboard: { focused: true, global: true },
      autoplay: true,
      // Boshqa Plyr parametrlarini qo'shishingiz mumkin
    };

    const player = new Plyr(playerRef.current, options);

    // Plyr pleerni yopib qo'yishda resurslarni tozalash
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  const handleAudioNext = () => {
    if (playerRef.current) {
      console.log(playerRef.current);
      playerRef.current.currentTime += 15;
    }
  };

  const handleAudioPrev = () => {
    if (playerRef.current) {
      console.log(playerRef.current);
      playerRef.current.currentTime -= 15;
    }
  };

  return (
    <div className="max-h-full max-w-xs w-full absolute bottom-5  pr-3">
      <div className="bg-[#1A1A1A] p-3 rounded-2xl">
        <div className="flex items-center justify-between pb-2">
          <div className="flex gap-2 items-center w-[calc(100%-2rem)]">
            <img
              src="https://yt3.googleusercontent.com/kmNefSAi3QqYmYONkk81rCv_sOPuE0UO8CkYj05jeTFsmo8IaPKaylwWN2LQ1mSwWFUz5dEKvA=s176-c-k-c0x00ffffff-no-rj"
              alt=""
              className="w-7 h-7 rounded-full "
            />
            <i className="text-[14px] text-center">Nima gap</i>
          </div>
          <button className="w-8 h-8 hover:bg-[#5C67DE] flex justify-center items-center rounded-full transition-all duration-300">
            <CloseIcon />
          </button>
        </div>
        <img src={Img} alt="" className="rounded-2xl w-full object-cover" />
        <div>
          <h4 className=" text-center leading-4 py-3">
            How reboot will change the future
          </h4>

          <div className="h-20 relative ">
            <div className="absolute bottom-12 w-full">
              <button
                className="w-8 h-8 rounded-full absolute -bottom-[29px] right-1/2 -translate-x-1/2 mr-2 [&>svg]:fill-white hover:bg-[#5C67DE] transition-all duration-300 flex justify-center items-center rotate-180"
                onClick={handleAudioPrev}
              >
                <SeekTimeIcon />
              </button>
              <audio ref={playerRef}>
                <source
                  src={"https://www2.cs.uic.edu/~i101/SoundFiles/Fanfare60.wav"}
                  type="audio/mp3"
                />
              </audio>
              <button
                className=" w-8 h-8 rounded-full absolute -bottom-[29px] left-1/2 -translate-x-1/2 ml-10 [&>svg]:fill-white hover:bg-[#5C67DE] transition-all duration-300 flex justify-center items-center"
                onClick={handleAudioNext}
              >
                <SeekTimeIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
