import React, { useState } from "react";
import { CiUnlock } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaPlusCircle } from "react-icons/fa";
import { CgLink } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";
import { TfiLineDouble } from "react-icons/tfi";
export default function LimitedAccess() {
  const users = useSelector((state) => state.Users);
  const [isHovered, setIsHovered] = useState(false);
  // console.log("Limited Access Users",users.users.users)
  return (
    <div className="flex flex-row py-4 justify-between items-center">
      <div className="flex flex-row items-center gap-x-3 divide-x divide-slate-400">
        <div className="flex flex-row items-center gap-x-1 text-text text-sm ">
          <CiUnlock />
          <p className="text-black">Limited access</p>
          <FaChevronDown />
        </div>
        <div className="flex flex-row pl-4">
          {users?.users?.users?.slice(0, 4)?.map((item, index) => {
            return (
              <button
                key={index}
                className="flex flex-row -mx-1 items-center rounded-full border gap-2 text-text text-sm "
              >
                <img
                  src={item?.image}
                  alt={item?.name}
                  className="w-6 h-6 rounded-full"
                />
              </button>
            );
          })}
          <div className="flex flex-row -mx-1 items-center rounded-full border gap-2 text-sm w-6 h-6 bg-slate-400 text-white font-bold">
            <p>+2</p>
          </div>

          <button className="flex flex-row mx-2 items-center rounded-full text-2xl text-primary ">
            <FaPlusCircle />
          </button>
        </div>
      </div>
      <div className="flex gap-x-2 flex-row items-center divide-x divide-slate-400 ">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative hover:cursor-pointer flex flex-col items-center justify-center text-primary text-2xl w-fit"
        >
          <CgLink />
          {isHovered && <div className="text-white bg-primary text-xs absolute top-7 w-fit text-xs py-1 px-2 rounded-md top-2">
            {/* <div className=" -top-2 h- w-2 rounded-md text-lg text-primary" /> */}
            copy Link
          </div>}
        </div>
        <div className="flex flex-row items-center gap-x-2 pl-2">
          <button className="hover:bg-slate-600 bg-primary text-white py-2 px-2 rounded-md text-lg font-bold">
            <TfiLineDouble />
          </button>
          <button className="text-lg hover:bg-slate-600 py-2 px-2 rounded-md hover:text-white">
            <LuLayoutDashboard />
          </button>
        </div>
      </div>
    </div>
  );
}
