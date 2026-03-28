import React from "react";
import { MessageCircle, Users, Send, Bot } from "lucide-react";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5 flex flex-col">
        <h1 className="text-2xl font-bold mb-8">Aura CRM</h1>

        <nav className="space-y-4">
          <div className="flex items-center gap-2 cursor-pointer hover:text-green-400">
            <MessageCircle size={18} /> Chats
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-400">
            <Bot size={18} /> AI Trainer
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-400">
            <Send size={18} /> Broadcast
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-400">
            <Users size={18} /> Leads
          </div>
        </nav>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <div className="bg-white shadow p-4 flex justify-between">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <span className="text-gray-500">Welcome Pankaj 👋</span>
        </div>

        <div className="p-6 space-y-6">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-gray-500">Total Leads</p>
              <h2 className="text-2xl font-bold">120</h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-gray-500">Active Chats</p>
              <h2 className="text-2xl font-bold">35</h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <p className="text-gray-500">Conversions</p>
              <h2 className="text-2xl font-bold">18</h2>
            </div>
          </div>

          {/* Chat Section */}
          <div className="grid grid-cols-3 gap-6">

            {/* Chat List */}
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-semibold mb-3">Chats</h3>
              <div className="space-y-2">
                <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                  Rahul Sharma
                </div>
                <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                  Neha Verma
                </div>
              </div>
            </div>

            {/* Chat Window */}
            <div className="col-span-2 bg-white rounded-xl shadow flex flex-col">
              <div className="p-4 border-b font-semibold">
                Select a chat
              </div>

              <div className="flex-1 p-4 overflow-y-auto text-gray-500">
                Messages will appear here...
              </div>

              <div className="p-4 border-t flex gap-2">
                <input
                  type="text"
                  placeholder="Type message..."
                  className="flex-1 border rounded p-2"
                />
                <button className="bg-green-500 text-white px-4 rounded">
                  Send
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
