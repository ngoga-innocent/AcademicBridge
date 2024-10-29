import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { fetchTodos } from "../../../Features/Fetching";
import { useDispatch, useSelector } from "react-redux";
import { GetTodos, UpdateAddTodo } from "../../../Features/Redux/Slice/TodoSlice";
import { MdOutlineSort } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import Todos from "./Todos";
export default function TaskSection({showOverView}) {
  const dispatch = useDispatch();
  const [taskStatus, setTaskStatus] = useState("All Tasks");

  const Task_status = ["All Tasks", "To do", "In progress", "completed"];

  // Fetching Todos
  const { data, isError, isSuccess, isLoading } = useQuery({
    queryKey: ["fetchTodos"],
    queryFn: fetchTodos,
  });

  // Dispatch GetTodos action when data is successfully fetched
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(GetTodos(data));
    }
  }, [isSuccess, data, dispatch]);

  if (isError) console.log("Error fetching Todos");
  if (isLoading) return <p>Loading...</p>;

  // Selecting Todos from Redux State
  // const todos = useSelector((state) => state.Todos);

  // Filtering Todos based on taskStatus
  const filteredTasks = data?.todos?.filter((item) => {
    if (taskStatus === "All Tasks") return true;
    if (taskStatus === "To do") return !item.completed;
    if (taskStatus === "In progress") return item.status === "In progress";
    if (taskStatus === "completed") return item.completed;
    return false;
  });
  

  // Counting Tasks by status
  const allTask = data?.todos?.length ?? 0;
  const completed = data?.todos?.filter((item) => item.completed).length ?? 0;
  const toDo = data?.todos?.filter((item) => !item.completed).length ?? 0;
  const progressing = data?.todos?.filter((item) => item.progress === "In progress").length ?? 0;

  return (
    <div className="flex-1 flex flex-col gap-y-2">
      <div className="bg-bkg flex flex-wrap flex-row items-center justify-between flex-1 px-3 rounded-2xl">
      <div className="flex flex-row flex-wrap gap-x-2">
        {Task_status.map((item, index) => (
          <button
            key={index}
            className={`text-sm px-2 relative hover:text-primary hover:bg-slate-100 items-center flex flex-col h-14  justify-center ${
              taskStatus === item ? "text-primary" : "text-slate-600"
            }`}
            onClick={() => setTaskStatus(item)}
          >
            <div className="flex flex-row items-center gap-x-1">
              <p>{item}</p>
              <div
                className={`py-1 px-1 text-xs rounded-md ${
                  taskStatus === item ? "bg-violet-200 text-primary" : "bg-neutral-200 text-neutral-400"
                }`}
              >
                {item === "All Tasks" && allTask}
                {item === "completed" && completed}
                {item === "To do" && toDo}
                {item === "In progress" && progressing}
              </div>
            </div>
            {taskStatus === item && (
              <div className="w-full h-1 bg-primary rounded-md absolute bottom-0"></div>
            )}
          </button>
        ))}
      </div>

      <div className="flex flex-row  gap-x-2 items-center">
        <button className="hover:bg-slate-200 flex flex-row items-center text-sm font-bold text-text border border-text bg-transparent rounded-md px-3 py-1">
          <MdOutlineSort />
          <p>Filter & Sort</p>
        </button>
        <button onClick={()=>dispatch(UpdateAddTodo(true))} className="hover:bg-slate-200 flex flex-row items-center text-sm font-bold text-text border border-text bg-transparent rounded-md px-3 py-1">
          <IoIosAdd />
          <p>New Task</p>
        </button>
      </div>
    </div>
    <Todos todos={filteredTasks}  />
    </div>
  );
}
