import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { GetSingleUser, UpdateTodo } from "../../../Features/Fetching";
import { BiMessageRoundedDots } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { UpdateOverview } from "../../../Features/Redux/Slice/TodoSlice";

export default function TodoCard({ item, image }) {
  const [showCardAction, setShowCardAction] = useState(false);

  // Random Message Number
  const randomNumber = Math.floor(Math.random() * 20) + 1;

  // Fetch single user data
  const { data, isLoading, isError } = useQuery({
    queryKey: ["single_user", item?.userId],
    queryFn: () => GetSingleUser(item?.userId),
    enabled: !!item?.userId, // Ensure userId is available before fetching
  });

  return (
    <div className="bg-bkg relative text-black flex flex-col px-2 gap-y-4 py-2 rounded-lg h-fit shadow-md">
      {image && (
        <img src={image} className="rounded-md h-40 object-cover" alt="Todo" />
      )}

      <div className="flex flex-row relative items-center justify-between">
        <p
          className={`py-1 px-2 rounded-md text-xs ${
            item?.completed ? "bg-green-50 text-green-700" : "bg-red-100 text-red-400"
          }`}
        >
          {item?.completed ? "Completed" : "To do"}
        </p>
        <button onClick={() => setShowCardAction(!showCardAction)} className="text-text">
          <FaEllipsisVertical />
        </button>
        <div
          className={`absolute right-4 top-4 z-50 bg-bkg shadow outline-none shadow-black py-2 px-2 rounded-md ${
            !showCardAction && "hidden"
          }`}
        >
          <ViewMore item={item} />
        </div>
      </div>

      <div className="flex mt-2 flex-col gap-y-2 divide-y divide-slate-100">
        <div className="flex flex-col flex-wrap">
          <p className="text-black text-sm font-bold">{item.todo}</p>
          <p className="text-text opacity-75 text-sm">Landing Page UI</p>
        </div>

        <div className="flex pt-2 flex-row items-center justify-between">
          {isLoading && <p>Loading...</p>}
          {isError && <p>Can't get user data...</p>}
          {data && (
            <img
              src={data.image}
              alt="User Avatar"
              className="w-7 h-7 rounded-full border border-slate-500"
            />
          )}
          <div className="flex flex-row gap-x-1 text-lg items-center text-text">
            <BiMessageRoundedDots />
            <p className="text-xs">{randomNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ViewMore Component
const ViewMore = ({ item }) => {
  const cardActions = ["Update", "Delete", "Overview"];
  const dispatch = useDispatch();
  const { overview } = useSelector((state) => state.Todos);

  const { mutate: updateTodoMutation } = useMutation({
    mutationFn: UpdateTodo,
    onSuccess: (data) => {
      console.log("Todo updated:", data);
      
    },
    onError: (error) => {
      console.error("Error updating todo:", error);
    },
  });

  function handleActionClick(action) {
    if (action === "Overview") {
      dispatch(UpdateOverview(!overview));
    } else if (action === "Update") {
      updateTodoMutation({
        id: item.id,
        body: {
          completed: !item.completed,
        },
      });
    } else if (action === "Delete") {
      console.log("Delete action clicked");
      // Handle delete logic here
    }
  }

  return (
    <div className="flex flex-col divide-y gap-y-2 divide-slate-300 text-text text-sm font-bold">
      {cardActions.map((action, index) => (
        <button
          className="hover:text-primary"
          onClick={() => handleActionClick(action)}
          key={index}
        >
          <p>{action}</p>
        </button>
      ))}
    </div>
  );
};
