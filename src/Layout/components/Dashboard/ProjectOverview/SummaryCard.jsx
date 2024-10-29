import React from 'react'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { useSelector } from "react-redux";
export default function SummaryCard() {
    const users = useSelector((state) => state.Users);
  return (
    <div className="flex h-fit flex-row items-center gap-x-2 bg-gray-100 mt-4 py-2 rounded-lg">
    <div className="h-20 bg-primary w-1 rounded-r-full " />
    <div className="flex flex-col gap-y-4 px-2">
      <div className="flex flex-row item-center text-text  gap-x-2">
        <div className="flex flex-row  item-center gap-x-1">
          <MdOutlineCalendarMonth />
          <p className="text-xs">Timeline:</p>
        </div>
        <button className="text-xs font-bold">Apr 14 - May 7</button>
      </div>
      {/* Team Roww */}
      <div className="flex flex-row h-fit item-center text-text  gap-x-5">
        <div className="flex flex-row  item-center gap-x-1">
          <GrGroup />
          <p className="text-xs">Team:</p>
        </div>
        <div className="max-w-[50%] flex flex-row items-center flex-wrap">
          {users?.users?.users?.slice(0, 6)?.map((item, index) => {
            return (
              <button className="rounded-full w-6 h-6 -ml-1">
                <img src={item.image} alt="" />
              </button>
            );
          })}
        </div>
      </div>
      {/* Next Row */}
      <div className="flex flex-row item-center text-text  gap-x-5">
        <div className="flex flex-row  item-center gap-x-1">
          <IoMdStarOutline />
          <p className="text-xs">Status:</p>
        </div>
        <button className="text-xs font-bold">In Progress</button>
      </div>
    </div>
  </div>
  )
}
