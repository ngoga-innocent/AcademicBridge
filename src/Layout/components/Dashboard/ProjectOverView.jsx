import React from "react";
import SummaryCard from "./ProjectOverview/SummaryCard";
import TeamChat from "./ProjectOverview/TeamChat";
import { useDispatch, useSelector } from "react-redux";
import { UpdateOverview } from "../../../Features/Redux/Slice/TodoSlice";

export default function ProjectOverView() {
    const {overview}=useSelector(state=>state.Todos)
    const dispatch=useDispatch()
  return (
    <div className="flex flex-1 flex-col h-screen px-10 py-8">
      <div className="flex flex-row justify-between items-center text-text text-sm font-bold ">
        <p className="text-lg">Project Overview</p>
        <button onClick={()=>{
            dispatch(UpdateOverview(!overview))
          
        }} className="hover:text-primary rounded-full px-2 py-1 hover:bg-slate-300 transition duration-500 ease-in-out">
          See All
        </button>
      </div>
      <SummaryCard />
      {/* Project Team Chat Overview */}
      <div className="flex-1 overflow-hidden"> 
        <TeamChat />
      </div>
    </div>
  );
}


