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
    <Card className="rounded-2xl shadow p-4">
      <CardContent>
        <p className="text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
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

      <div className="bg-white p-4 rounded-2xl shadow">
        <h3 className="mb-4 font-semibold">Leads Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="leads" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
