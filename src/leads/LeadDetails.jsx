const LeadDetails = ({ chat }) => {
  if (!chat) return null;

  return (
    <div className="w-64 border-l p-4 bg-white">
      <h2 className="text-lg font-bold mb-2">Lead Info</h2>

      <p><b>ID:</b> {chat.leadId}</p>
      <p><b>Status:</b> New</p>

      <button className="mt-3 bg-red-500 text-white px-3 py-1 rounded">
        Mark Hot 🔥
      </button>
    </div>
  );
};

export default LeadDetails;
