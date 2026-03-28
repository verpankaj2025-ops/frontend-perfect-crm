import { motion } from "framer-motion";
import { MessageCircle, Users, BarChart2, Send, Brain } from "lucide-react";

export default function Sidebar() {
  return (
    <motion.div 
      initial={{ x: -100 }} 
      animate={{ x: 0 }} 
      className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-4 text-white"
    >
      <h1 className="text-xl font-bold mb-6">Aura CRM</h1>

      <nav className="space-y-4">
        <p className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <BarChart2 size={18}/> Dashboard
        </p>
        <p className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <MessageCircle size={18}/> Chats
        </p>
        <p className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <Users size={18}/> Leads
        </p>
        <p className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <Send size={18}/> Broadcast
        </p>
        <p className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <Brain size={18}/> AI Trainer
        </p>
      </nav>
    </motion.div>
  );
}
