import React, { useEffect, useState } from "react";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Avatar, Badge } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../Features/Fetching";
import { bottomRoutes, routes } from "../components/Routes";
import { NavLink } from "react-router-dom";
import { GetUsers } from "../../Features/Redux/Slice/UserSlice";

export default function SideBar() {
  const dispatch = useDispatch();
  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUser
  });

  if (isSuccess) {
    dispatch(GetUsers(data));
  }

  return (
    <div className="flex h-screen py-4 flex-col items-center bg-bkg text-accent">
      <div className="my-10">
        <AcUnitOutlinedIcon fontSize="medium" />
      </div>
      <div className="flex-1 flex flex-col items-center">
        <div className="w-[100%] items-center flex flex-col">
          <div className="flex flex-col gap-y-2 w-[100%] px-3">
            {routes.map((item, index) => (
              <SideBarLink key={index} item={item} />
            ))}
          </div>
          <div className="bg-slate-300 w-full my-4" style={{ height: 1 }} />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-y-2">
          {data && !isLoading && data?.users?.slice(0, 4)?.map((item, index) => (
            <button className="hover:scale-125 transition ease-in-out" key={index}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                badgeContent={<div className="w-2 h-2 rounded-full bg-green-500"></div>} // Green for online
              >
                <Avatar sizes="small" style={{ borderWidth: 1, borderColor: "grey" }} src={item?.image} />
              </Badge>
            </button>
          ))}
          <button className="hover:scale-125 hover:text-primary transition ease-in-out">
            <Avatar>
              <FaPlus />
            </Avatar>
          </button>
        </div>
      </div>
      <div>
        {bottomRoutes.map((item, index) => (
          <SideBarLink key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function SideBarLink({ item }) {
  return (
    <NavLink
      aria-label={item.ariaLabel} // Ensure you have the aria-label
      className={({ isActive }) =>
        `text-xl w-full items-center flex flex-col justify-center px-4 py-2 rounded-full transition ease-in-out duration-500 ${
          isActive
            ? "bg-gradient-to-r from-violet-500 to-violet-100 text-blue-600 scale-115 border-l-2 border-black"
            : "hover:bg-gradient-to-r from-violet-500 to-violet-100 hover:text-blue-600 hover:scale-115"
        }`
      }
      to={item.path}
    >
      {/* {item.icon} */}
      <span role="img">{item.icon}</span>
    </NavLink>
  );
}
