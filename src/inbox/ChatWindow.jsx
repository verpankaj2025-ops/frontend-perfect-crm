import { useEffect, useState } from "react";
import API from "../services/api";
import socket from "../services/socket";
import ChatHeader from "./ChatHeader";

const ChatWindow = ({ selectedChat }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!selectedChat) return;

    const fetchMessages = async () => {
      const res = await API.get(
        `/chats/${selectedChat._id}/messages`
      );
      setMessages(res.data);
    };

    fetchMessages();
  }, [selectedChat]);

  useEffect(() => {
    socket.on("new-message", (data) => {
      setMessages((prev) => [...prev, data.message]);
    });

    socket.on("incoming-message", (data) => {
      setMessages((prev) => [...prev, data.message]);
    });
  }, []);

  const sendMessage = async () => {
    if (!selectedChat) return;

    const res = await API.post("/chats/send", {
      leadId: selectedChat.leadId,
      text,
      sender: "user",
    });

    setMessages((prev) => [...prev, res.data.message]);
    setText("");
  };

  if (!selectedChat) {
    return <div className="p-4">Select a chat</div>;
  }

  return (
    <div className="flex flex-col h-full">

      <ChatHeader chat={selectedChat} />

      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xs p-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-white border"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-3 flex gap-2 border-t bg-white">
        <input
          className="flex-1 border p-2 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="bg-black text-white px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
