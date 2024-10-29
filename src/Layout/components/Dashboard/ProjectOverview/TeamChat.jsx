import React, { useState } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { CiMicrophoneOn } from "react-icons/ci";
import { BsFillSendFill } from "react-icons/bs";
import { Avatar } from "@mui/material";
export default function TeamChat() {
  const messages = [
    {
      message: "Hello My Team!",
      sender: "Rebecca Husty",
      profile: "",
      time: "11:00Am"
    },
    {
      message: "Have a great working Week",
      sender: "Rebecca Husty",
      profile: "",
      message_type: "text",
      time: "11:00Am"
    },
    {
      message: "Have a great working Week",
      sender: "Devid Mackurat",
      profile: "",
      message_type: "text",
      time: "11:00Am"
    },
    {
      message: "What do you think about new team Section",
      receiver: "Kate Watson",
      profile: "",
      message_type: "text",
      time: "11:00Am"
    },
    {
      message: "Hello My Team!",
      sender: "Rebecca Hosty",
      profile: "",
      message_type: "audio",
      time: "11:00Am"
    },
    {
      message: "Hello My Team!",
      receiver: "Kate Watson",
      profile: "",
      message_type: "text",
      time: "11:00Am"
    }
  ];
  const [Allmessages, setMessages] = useState(messages);
  const [message, setMessage] = useState("");
  function handleSendMessage() {
    if (message !== "") {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";

      setMessages([
        ...Allmessages,
        {
          message: message,
          sender: "You",
          profile: "",
          message_type: "text",
          time: `${hours}:${minutes} ${ampm}`
        }
      ]);
      setMessage("")
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="bg-bkg flex flex-row justify-between items-center gap-x-2 text-text text-sm font-bold">
        <div className="flex flex-row items-center gap-x-2 py-2">
          <p className="text-black">TeamChat</p>
          <p className="text-xs">24 April 2023</p>
        </div>
        <button>
          <IoEllipsisVerticalSharp />
        </button>
      </div>
      {/* Team Chat Messages */}
      <div className="flex-1 flex flex-col justify-start gap-y-4 text-text text-sm overflow-y-auto">
        {/* Message */}
        <div className="flex-1 flex flex-col h-full gap-y-1 overflow-scroll gap-x-2 my-2">
          {Allmessages.map((item, index) => {
            return (
              <div
                className={`w-[95%]  text-bkg py-2 px-2 rounded-lg  ${
                  item?.receiver && "self-end"
                }`}
              >
                <Message
                  message={item.message}
                  message_type={item.message_type}
                  image={item.profile}
                  sender={item?.sender || null}
                  receiver={item?.receiver || null}
                  time={item?.time}
                />
              </div>
            );
          })}
        </div>

        {/* Chat Input Message */}
        <div className="bg-text  py-2 px-2 rounded-lg flex flex-row items-center">
          <input
            type="text"
            value={Message}
            id="MessageInput"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-text text-black outline-none"
          />
          <div className="flex flex-row gap-x-2 divide-x divide-slate-300">
            <button className="text-bkg">
              <CiMicrophoneOn />
            </button>
            <button
              onClick={handleSendMessage}
              className="text-primary pl-3 text-sm"
            >
              <BsFillSendFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Message({ message, sender, receiver, time }) {
  return (
    <div
      className={`flex flex-row items-start gap-x-2 ${
        receiver && "flex-row-reverse"
      }`}
    >
      <div>
        <Avatar sizes="small">
          {sender?.slice(0, 2) || receiver?.slice(0, 2)}
        </Avatar>
      </div>
      <div className={`flex flex-col`}>
        <div
          className={`flex flex-row items-center gap-x-1 ${
            receiver && "flex-row-reverse"
          }`}
        >
          <p className="font-bold text-black">{sender || receiver}</p>
          <p className="text-text text-xs font-bold" style={{ fontSize: 9 }}>
            {time}
          </p>
        </div>
        <div className="bg-gray-100 py-1 px-2 rounded-md">
          <p className="text-black">{message}</p>
        </div>
      </div>
    </div>
  );
}
