const ChatHeader = ({ chat }) => {
  if (!chat) return null;

  return (
    <div className="p-3 border-b bg-white flex justify-between">
      <div>
        <h2 className="font-bold">Lead: {chat.leadId}</h2>
        <p className="text-sm text-gray-500">Active now</p>
      </div>
    </div>
  );
};

export default ChatHeader;
