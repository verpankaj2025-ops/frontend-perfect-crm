import Layout from "./layout/Layout";
import Dashboard from "./dashboard/Dashboard";
import ChatWindow from "./inbox/ChatWindow";

export default function App() {
  return (
    <Layout>
      <Dashboard />
      <div className="mt-6">
        <ChatWindow />
      </div>
    </Layout>
  );
}
