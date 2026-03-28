import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", leads: 10 },
  { name: "Tue", leads: 20 },
  { name: "Wed", leads: 15 },
  { name: "Thu", leads: 25 },
  { name: "Fri", leads: 30 },
];

function StatCard({ title, value }) {
  return (
    <Card className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg p-4 hover:scale-105 transition">
      <CardContent>
        <p className="text-gray-300">{title}</p>
        <h2 className="text-2xl font-bold text-white">{value}</h2>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard title="Total Leads" value="120" />
        <StatCard title="Active Chats" value="35" />
        <StatCard title="Conversions" value="18" />
      </div>

      <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-2xl shadow">
        <h3 className="mb-4 font-semibold text-white">Leads Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="leads" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
