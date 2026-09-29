"use client";
import { useState } from "react";
const customers = [
  {
    name: "John Smith",
    email: "john@example.com",
    plan: "Pro Plan",
    status: "Active",
  },
  {
    name: "Sarah Lee",
    email: "sarah@example.com",
    plan: "Basic Plan",
    status: "Active",
  },
  {
    name: "David Kumar",
    email: "david@example.com",
    plan: "Enterprise",
    status: "Active",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    plan: "Pro Plan",
    status: "Inactive",
  },
];

export default function CustomersPage() {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All Status");
   const filteredCustomers = customers.filter((customer) => {
  const matchesSearch = customer.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesStatus =
    status === "All Status" || customer.status === status;

  return matchesSearch && matchesStatus;
});
  return (
    <main className="min-h-screen  p-8">
      <h1 className="text-2xl text-green-600 font-bold">
        Customers
      </h1>

      <p className="mt-2 text-green-700">
        Manage your customers and their subscriptions.
      </p>
      <input
  type="text"
  placeholder="Search customers..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="mt-6 w-full max-w-md rounded-full border border-green-500 px-6 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-200"
/>
<select
  value={status}
  onChange={(e) => setStatus(e.target.value)}
  className="mt-4 rounded-full border border-green-500 px-6 py-2 text-sm md:ml-3"
>
  <option>All Status</option>
  <option>Active</option>
  <option>Inactive</option>
</select>

      <div className="mt-8 overflow-x-auto rounded-xl border border-green-700 bg-white shadow-md">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className=" bg-gray-50 border-b text-green-500">
              <th className="px-6 py-4 font-medium">
                Customer
              </th>

              <th className="px-6 py-4 font-medium">
                Email
              </th>

              <th className="px-6 py-4 font-medium">
                Plan
              </th>

              <th className="px-6 py-4 font-medium">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((customer) => (
              <tr
                key={customer.email}
                className="border-b last:border-0 hover:bg-green-200"
              >
                <td className="px-6 py-4 font-medium">
                  {customer.name}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {customer.email}
                </td>

                <td className="px-6 py-4">
                  {customer.plan}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={
                      customer.status === "Active"
                        ? "rounded-full bg-green-100 px-3 py-1 text-xs text-green-700"
                        : "rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                    }
                  >
                    {customer.status}
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