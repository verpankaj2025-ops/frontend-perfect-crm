const ChatList = ({ onSelect }) => {
  return (
    <div className="p-2">
      <h2 className="font-bold">Chats</h2>

      <div
        className="p-2 border mt-2 cursor-pointer"
        onClick={() =>
          onSelect({ leadId: "demo123", status: "new" })
        }
      >
        Demo Chat
      </div>
    </div>
  );
};

export default ChatList;
