import React, { useState } from "react";
import {
  DownloadIcon,
  ListenersIcon,
  PauseIcon,
  PlayIcon,
  SearchIcon,
  ShareIcon,
  TimeIcon,
} from "../components/SvgIcon";

import podcastImg from "../assets/images/img.png";

const Detail = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="mx-2">
      <div className="bg-[url(https://yt3.googleusercontent.com/zC6iC2ebXBdH2_oPEEo1E9VbTlnQU62CasCCdLEhAZfS2ciM0mXMxiCeC9dk6B26SRkJCG5X=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj)] w-full bg-center bg-cover h-52 rounded-xl relative flex flex-col justify-end">
        <div className="absolute bg-black bg-opacity-50 w-full h-full rounded-xl pointer-events-none"></div>
        <div className="p-4 space-y-2 z-0">
          <h3 className="text-xl font-semibold">How to start podcast</h3>
          <p className="text-sm opacity-70">40,142 Monthly Listeners</p>
          <button className="bg-[#5C67DE] w-32 h-10 rounded text-white text-sm">
            Follow
          </button>
        </div>
        <div className="flex items-center gap-2 absolute bottom-5 right-10">
          <img
            src="https://fakeimg.pl/300/"
            alt=""
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">Ken Adam</h3>
            <p className="text-[14px] font-light">51k Followers</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-2">
        <div className="w-3/4">
          <div className="flex items-center gap-2 justify-between w-full py-4">
            <div className="flex items-center gap-5 pl-3">
              <button className="bg-[#5C67DE] rounded-full w-12 h-12 flex justify-center items-center">
                <PauseIcon />
              </button>
              <button className="bg-[#1F1F1F] rounded-full w-8 h-8 flex justify-center items-center">
                <ShareIcon />
              </button>
              <button className="bg-[#1F1F1F] rounded-full w-8 h-8 flex justify-center items-center">
                <DownloadIcon />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className=" flex justify-end items-center gap-1 w-full relative">
                <input
                  type="text"
                  placeholder="Search podcast..."
                  className={`h-8 px-2 text-[15px] rounded placeholder:text-[15px] bg-[#1F1F1F] outline-none transition-all duration-500 shadow absolute right-0 top-1/2 -translate-y-1/2 ${
                    isOpenSearch || searchText.length
                      ? "w-80 shadow-gray-500"
                      : "w-0 shadow-none"
                  }`}
                  onBlur={() => setIsOpenSearch(false)}
                  onChange={e => setSearchText(e.target.value)}
                  value={searchText}
                  id="search_podcast"
                />
                <button
                  className="w-8 h-8 rounded bg-[#1F1F1F]  flex justify-center items-center z-10"
                  onClick={() => setIsOpenSearch(true)}
                >
                  <SearchIcon />
                </button>
              </div>
              <select
                name=""
                id=""
                className="bg-[#1F1F1F] h-8 px-2 rounded text-sm "
                defaultValue=""
              >
                <option value="">Order by</option>
                <option value="Order by">Yana</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <table border="1" className="w-full">
              <thead className="w-full">
                <tr className="h-10 w-full text-[14px] font-thin">
                  <th className="w-1/12">#</th>
                  <th className="w-2/12">Poster</th>
                  <th className="w-5/12">Title</th>
                  <th className="w-2/12 ">
                    <div className="text-center flex justify-center gap-2 items-center">
                      <ListenersIcon />
                    </div>
                  </th>
                  <th className="w-2/12">
                    <div className="text-center flex justify-center gap-2 items-center">
                      <TimeIcon />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="w-full">
                <tr className="w-full h-16 border-t border-b  border-gray-500 ">
                  <td className="py-2">
                    <button className="bg-[#5C67DE] rounded-full  w-8 h-8 flex justify-center items-center mx-auto">
                      <PlayIcon />
                    </button>
                  </td>
                  <td className="h-14 px-3 py-2">
                    <img
                      src={podcastImg}
                      alt=""
                      className="w-full h-14 object-cover rounded"
                    />
                  </td>
                  <td className="flex flex-col items-start gap-1 py-2">
                    <h4 className="text-sm font-semibold">
                      Find topic that tou love
                    </h4>
                    <p className="text-[14px] opacity-80">Ken Adams</p>
                  </td>
                  <td className="text-[14px] opacity-90 text-center">1230 listened</td>
                  <td className="text-[14px] opacity-90 text-center">1 soat 20 min</td>
                </tr>
             
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-1/4 bg-[#1A1A1A] p-4 rounded-lg my-5 h-fit">
          <h3 className="pb-2 ">Featured by creator</h3>
          <div className="space-y-2">
            <div
              className={`bg-[url(../assets/images/img.png)] bg-center bg-cover w-full max-w-xs rounded-lg h-28 flex items-end p-2 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              
              <div className=" flex items-center gap-2 w-full z-10">
                <button className="bg-[#5C67DE] rounded-full w-8 h-8 flex justify-center items-center">
                  <PlayIcon />
                </button>
                <h4 className="w-4/5">Lorem ipsum dolor sit amet.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
