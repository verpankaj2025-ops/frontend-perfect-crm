import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../dashboard/Dashboard";
import ChatWindow from "../inbox/ChatWindow";

function Leads() {
  return <div className="text-white">Leads Page Coming Soon</div>;
}

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chats" element={<ChatWindow />} />
          <Route path="/leads" element={<Leads />} />
        </Routes>
      </Layout>
    </Router>
  );
}
