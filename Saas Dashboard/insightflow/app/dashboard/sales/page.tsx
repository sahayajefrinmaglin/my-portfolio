"use client";
import { useState } from "react";
const sales = [
  {
    id: "#INV-1001",
    customer: "John Smith",
    product: "Pro Plan",
    amount: "AED 299",
    status: "Completed",
  },
  {
    id: "#INV-1002",
    customer: "Sarah Lee",
    product: "Basic Plan",
    amount: "AED 99",
    status: "Completed",
  },
  {
    id: "#INV-1003",
    customer: "David Kumar",
    product: "Enterprise",
    amount: "AED 599",
    status: "Pending",
  },
  {
    id: "#INV-1004",
    customer: "Emma Wilson",
    product: "Pro Plan",
    amount: "AED 299",
    status: "Completed",
  },
  {
    id: "#INV-1005",
    customer: "Michael Brown",
    product: "Starter Plan",
    amount: "AED 199",
    status: "Cancelled",
  },
];

export default function SalesPage() {
      const [search, setSearch] = useState("");
      const [status, setStatus] = useState("All Status");
       const filteredSales = sales.filter((sale) => {
  const matchesSearch = sale.customer
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesStatus =
    status === "All Status" || sale.status === status;

  return matchesSearch && matchesStatus;
});

  return (
    <main className="min-h-screen  p-8">

      <div>
        <h1 className="text-2xl text-green-600 font-bold">
          Sales
        </h1>

        <p className="mt-2 text-green-700">
          Manage and track your sales transactions.
        </p>
      </div>

      {/* Search and Filter */}

      <div className="mt-8 flex flex-col gap-4 rounded-full  p-5 md:flex-row md:items-center md:justify-between">

        <input
          type="text"
          placeholder="Search Customer..."
            value={search}
  onChange={(e) => setSearch(e.target.value)}
          className="rounded-full border border-green-500 px-6 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-200"
        />

        <select
  value={status}
  onChange={(e) => setStatus(e.target.value)}
  className="rounded-full border  border-green-500 px-6 py-2 text-sm"
>
          <option>All Status</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </select>

      </div>

      {/* Sales Table */}

      <div className="mt-6 overflow-x-auto rounded-xl border border-green-700 bg-white shadow-md">

        <table className="w-full text-left text-sm">

          <thead>
            <tr className="border-b bg-gray-50 text-green-500">

              <th className="px-6 py-4 font-medium">
                Invoice
              </th>

              <th className="px-6 py-4 font-medium">
                Customer
              </th>

              <th className="px-6 py-4 font-medium">
                Product
              </th>

              <th className="px-6 py-4 font-medium">
                Amount
              </th>

              <th className="px-6 py-4 font-medium">
                Status
              </th>

            </tr>
          </thead>

          <tbody>

            {filteredSales.map((sale) => (

              <tr
                key={sale.id}
                className="border-b last:border-0 hover:bg-green-200"
              >

                <td className="px-6 py-4 font-medium">
                  {sale.id}
                </td>

                <td className="px-6 py-4">
                  {sale.customer}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {sale.product}
                </td>

                <td className="px-6 py-4 font-medium">
                  {sale.amount}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={
                      sale.status === "Completed"
                        ? "rounded-full bg-green-100 px-3 py-1 text-xs text-green-700"
                        : sale.status === "Pending"
                        ? "rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700"
                        : "rounded-full bg-red-100 px-3 py-1 text-xs text-red-700"
                    }
                  >
                    {sale.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}