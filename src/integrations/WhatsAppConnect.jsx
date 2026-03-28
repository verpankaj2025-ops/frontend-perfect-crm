import { useState } from "react";
import API from "../services/api";

const WhatsAppConnect = () => {
  const [token, setToken] = useState("");
  const [phoneId, setPhoneId] = useState("");
  const [msg, setMsg] = useState("");

  const connect = async () => {
    try {
      await API.post("/integrations/whatsapp/connect", {
        token,
        phoneId,
      });

      setMsg("✅ WhatsApp Connected");
    } catch (err) {
      console.error(err);
      setMsg("❌ Connection Failed");
    }
  };

  return (
    <div className="p-4 bg-white border rounded mt-3">
      <h2 className="font-bold mb-2">WhatsApp Connect 📲</h2>

      <input
        placeholder="Access Token"
        className="border p-2 w-full mb-2"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />

      <input
        placeholder="Phone Number ID"
        className="border p-2 w-full mb-2"
        value={phoneId}
        onChange={(e) => setPhoneId(e.target.value)}
      />

      <button
        onClick={connect}
        className="bg-green-500 text-white px-4 py-2 rounded w-full"
      >
        Connect
      </button>

      {msg && <p className="mt-2 text-sm">{msg}</p>}
    </div>
  );
};

export default WhatsAppConnect;
