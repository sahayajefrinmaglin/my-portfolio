"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 18000 },
  { month: "Feb", revenue: 22000 },
  { month: "Mar", revenue: 19000 },
  { month: "Apr", revenue: 28000 },
  { month: "May", revenue: 32000 },
  { month: "Jun", revenue: 38000 },
];

export default function RevenueChart() {
  return (
    <div className="rounded-xl  bg-white p-6 shadow-md">
      <h2 className="text-lg text-green-600 font-semibold">
        Revenue Overview
      </h2>

      <p className="mt-1 text-sm text-green-700">
        Monthly revenue performance
      </p>

      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#1e573e"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}