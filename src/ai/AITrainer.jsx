import { useState } from "react";
import API from "../services/api";

const AITrainer = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const handleTrain = async () => {
    try {
      const res = await API.post("/ai/train", {
        text,
      });

      setResponse(res.data.message);
      setText("");
    } catch (err) {
      setResponse("❌ Error training AI");
    }
  };

  return (
    <div className="p-4 bg-white border rounded-lg shadow">
      <h2 className="text-lg font-bold mb-2">AI Trainer 🤖</h2>

      <textarea
        className="w-full border p-2 rounded mb-2"
        placeholder="Example: agar user price puche to packages bhejo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleTrain}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Train AI
      </button>

      {response && (
        <p className="mt-2 text-green-600">{response}</p>
      )}
    </div>
  );
};

export default AITrainer;
