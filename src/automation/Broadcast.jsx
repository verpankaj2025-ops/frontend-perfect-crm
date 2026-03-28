import { useState } from "react";
import API from "../services/api";

const Broadcast = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [time, setTime] = useState("");

  const sendNow = async () => {
    await API.post("/broadcast/send", {
      message,
      status,
    });

    alert("Broadcast sent 🚀");
  };

  const schedule = async () => {
    await API.post("/broadcast/schedule", {
      message,
      status,
      time,
    });

    alert("Scheduled successfully ⏰");
  };

  return (
    <div className="p-4 bg-white border rounded">
      <h2 className="font-bold mb-2">Broadcast 📢</h2>

      <textarea
        className="w-full border p-2 mb-2"
        placeholder="Enter message..."
        onChange={(e) => setMessage(e.target.value)}
      />

      {/* FILTER */}
      <select
        className="border p-2 mb-2 w-full"
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All Leads</option>
        <option value="hot">Hot 🔥</option>
        <option value="warm">Warm</option>
        <option value="cold">Cold</option>
        <option value="paid">Paid 💰</option>
      </select>

      {/* TIME */}
      <input
        type="datetime-local"
        className="border p-2 mb-2 w-full"
        onChange={(e) => setTime(e.target.value)}
      />

      <div className="flex gap-2">
        <button
          onClick={sendNow}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Send Now
        </button>

        <button
          onClick={schedule}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Schedule
        </button>
      </div>
    </div>
  );
};

export default Broadcast;
