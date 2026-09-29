"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 120 },
  { month: "Feb", sales: 180 },
  { month: "Mar", sales: 150 },
  { month: "Apr", sales: 240 },
  { month: "May", sales: 280 },
  { month: "Jun", sales: 320 },
];

export default function SalesChart() {
  return (
    <div className="rounded-xl  bg-white p-6 shadow-md">
      <h2 className="text-lg text-green-600 font-semibold">
        Sales Overview
      </h2>

      <p className="mt-1 text-sm text-green-700">
        Monthly sales performance
      </p>

      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="sales"
              fill="#17673e"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}