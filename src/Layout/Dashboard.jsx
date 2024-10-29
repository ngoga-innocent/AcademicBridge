import React, { useState } from "react";
import FirstSection from "./components/Dashboard/FirstSection";
import LimitedAccess from "./components/Dashboard/LimitedAccess";
import TaskSection from "./components/Dashboard/TaskSection";
import ProjectOverView from "./components/Dashboard/ProjectOverView";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddTodos } from "../Features/Fetching";
import { UpdateAddTodo } from "../Features/Redux/Slice/TodoSlice";
export default function Dashboard() {
  // const [showOverView,setShowOverView]=useState(false)
  const { overview,addTodo } = useSelector((state) => state.Todos);
  
  return (
    <div className="w-[94%] mx-auto py-3">
      {/* Upper Part */}
      <FirstSection />
      <h1 className="text-2xl font-bold text-black">Website Design</h1>
      <LimitedAccess />
      <TaskSection />
      {/* OverView */}
      <div
        className={`absolute right-0 top-0 z-50 w-1/4 h-screen bg-bkg transition-all duration-500 ease-in-out transform ${
          overview ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ProjectOverView />
      </div>
      {/* Add new Todo Form Part */}
      <div className={`${!addTodo && 'hidden'} absolute transition-all duration-500 ease-in-out transform ${addTodo?"opacity-100":"opacity-0"} flex-1  z-50 top-0 min-h-screen min-w-screen h-screen left-0 w-[100%] bg-modal flex flex-col items-center justify-center`}>
        <AddTodoForm />
      </div>
    </div>
  );
}
const AddTodoForm=()=>{
  const [todo,setTodo]=useState("")
  const queryClient=useQueryClient()
  const dispatch=useDispatch()
  const {mutate:AddTodoMutation}=useMutation({
    mutationKey: "addTodo",
    mutationFn: AddTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["fetchTodos"]})
    },
    onError: (error) => {
      console.error("Error adding Todo", error);
    },
  })
  return(
    <div className="flex-1 flex flex-col w-[50%] self-center items-center justify-center">
      <form  onSubmit={(event)=>{
        event.preventDefault();
        AddTodoMutation({
          todo,
          completed:false,
          
          userId:Math.floor(Math.random() *30),
        })
        setTodo("")

        //add todo
      }} className="w-[100%]  flex flex-col py-4 px-4 rounded-md rounded-md bg-text">
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} className=" outline-none bg-transparent px-2 py-1  text-bkg rounded-md border" placeholder="Add a new Todo"/>
       <div className="flex flex-row gap-x-2">
       <button type="submit" className="bg-primary hover:opcaity-50 w-fit my-2 rounded-md py-2 px-3 text-white font-bold">Add Task</button>
       <button type="submit" onClick={()=>dispatch(UpdateAddTodo(false))} className="bg-orange-600 hover:opcaity-50 w-fit my-2 rounded-md py-2 px-3 text-white font-bold">Close</button>
       </div>
      </form>
    </div>
  )
}
