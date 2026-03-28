import { useState } from "react";

import ChatList from "../inbox/ChatList";
import ChatWindow from "../inbox/ChatWindow";
import LeadDetails from "../leads/LeadDetails";
import AITrainer from "../ai/AITrainer";
import WhatsAppConnect from "../integrations/WhatsAppConnect";
import Broadcast from "../automation/Broadcast"; // 🔥 added

const Dashboard = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="grid grid-cols-5 h-screen">
      
      {/* LEFT SIDEBAR */}
      <div className="col-span-1 flex flex-col border-r bg-gray-50">
        
        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          <ChatList onSelect={setSelectedChat} />
        </div>

        {/* AI Trainer */}
        <div className="p-2 border-t">
          <AITrainer />
        </div>

        {/* WhatsApp Connect */}
        <div className="p-2 border-t">
          <WhatsAppConnect />
        </div>

        {/* 🔥 Broadcast Feature */}
        <div className="p-2 border-t">
          <Broadcast />
        </div>

      </div>

      {/* CENTER CHAT */}
      <div className="col-span-3">
        <ChatWindow selectedChat={selectedChat} />
      </div>

      {/* RIGHT PANEL */}
      <div className="col-span-1 border-l bg-white">
        <LeadDetails chat={selectedChat} />
      </div>

    </div>
  );
};

export default Dashboard;
