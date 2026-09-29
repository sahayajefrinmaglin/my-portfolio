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

const analyticsData = [
  { month: "Jan", revenue: 18000, customers: 420 },
  { month: "Feb", revenue: 22000, customers: 510 },
  { month: "Mar", revenue: 19000, customers: 480 },
  { month: "Apr", revenue: 28000, customers: 620 },
  { month: "May", revenue: 32000, customers: 710 },
  { month: "Jun", revenue: 38000, customers: 840 },
];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen p-2  text-gray-900">

      <h1 className="text-2xl  text-green-600 font-bold">
        Analytics
      </h1>

      <p className="mt-2 text-green-700">
        Analyze your business performance and growth.
      </p>

      {/* KPI Cards */}

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">

        <div className="rounded-xl bg-white p-5 shadow-md">
          <p className="text-sm text-green-500">
            Total Revenue
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            AED 157,000
          </h2>

          <p className="mt-2 text-sm text-green-600">
            ↑ 18.4%
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <p className="text-sm text-green-500">
            New Customers
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            3,581
          </h2>

          <p className="mt-2 text-sm text-green-600">
            ↑ 12.8%
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <p className="text-sm text-green-500">
            Average Order Value
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            AED 284
          </h2>

          <p className="mt-2 text-sm text-green-600">
            ↑ 6.2%
          </p>
        </div>

      </div>

      {/* Analytics Chart */}

      <div className="mt-8 rounded-xl  bg-white p-6 shadow-sm">

        <h2 className="text-lg text-green-600 font-semibold">
          Revenue & Customer Growth
        </h2>

        <p className="mt-1 text-sm text-green-700">
          Monthly business performance
        </p>

        <div className="mt-6 h-80">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={analyticsData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#236540"
                strokeWidth={2}
              />

              <Line
                type="monotone"
                dataKey="customers"
                stroke="#1c7440"
                strokeWidth={2}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </main>
  );
}