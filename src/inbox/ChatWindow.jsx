export default function ChatWindow() {
  return (
    <div className="flex bg-white/5 backdrop-blur-xl rounded-2xl shadow h-[500px] border border-white/10 text-white">
      
      <div className="w-1/3 border-r border-white/10 p-4">
        <p className="font-semibold mb-4">Chats</p>
        <div className="space-y-2">
          <div className="p-2 hover:bg-white/10 rounded cursor-pointer">
            Rahul Sharma
          </div>
          <div className="p-2 hover:bg-white/10 rounded cursor-pointer">
            Neha Verma
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-4 text-gray-400">
          Select a chat <br />
          Messages will appear here...
        </div>

        <div className="p-4 border-t border-white/10 flex gap-2">
          <input
            className="flex-1 bg-white/10 border border-white/10 rounded-lg p-2 text-white placeholder-gray-400"
            placeholder="Type message..."
          />
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
