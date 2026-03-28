import { NavLink } from "react-router-dom";
import { MessageCircle, Users, BarChart2 } from "lucide-react";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    "flex items-center gap-2 p-2 rounded cursor-pointer " +
    (isActive ? "bg-white/10 text-blue-400" : "hover:bg-white/10 text-white");

  return (
    <div className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-4 text-white">
      <h1 className="text-xl font-bold mb-6">Aura CRM</h1>

      <nav className="space-y-2">
        <NavLink to="/dashboard" className={linkClass}>
          <BarChart2 size={18}/> Dashboard
        </NavLink>

        <NavLink to="/chats" className={linkClass}>
          <MessageCircle size={18}/> Chats
        </NavLink>

        <NavLink to="/leads" className={linkClass}>
          <Users size={18}/> Leads
        </NavLink>
      </nav>
    </div>
  );
}
