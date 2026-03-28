export default function ChatWindow() {
  return (
    <div className="flex bg-white rounded-2xl shadow h-[500px]">
      
      <div className="w-1/3 border-r p-4">
        <p className="font-semibold mb-4">Chats</p>
        <div className="space-y-2">
          <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
            Rahul Sharma
          </div>
          <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
            Neha Verma
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-4 text-gray-400">
          Select a chat <br />
          Messages will appear here...
        </div>

        <div className="p-4 border-t flex gap-2">
          <input
            className="flex-1 border rounded-lg p-2"
            placeholder="Type message..."
          />
          <button className="bg-blue-500 text-white px-4 rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
