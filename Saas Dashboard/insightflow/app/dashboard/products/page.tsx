"use client";

import { useState } from "react";

const products = [
  {
    name: "Pro Plan",
    category: "Subscription",
    price: "AED 299",
    sales: 1248,
    status: "Active",
  },
  {
    name: "Basic Plan",
    category: "Subscription",
    price: "AED 99",
    sales: 986,
    status: "Active",
  },
  {
    name: "Enterprise",
    category: "Subscription",
    price: "AED 599",
    sales: 542,
    status: "Active",
  },
  {
    name: "Starter Plan",
    category: "Subscription",
    price: "AED 199",
    sales: 421,
    status: "Inactive",
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      status === "All Status" || product.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <main className="min-h-screen  p-8">

      <div>
        <h1 className="text-2xl text-green-600 font-bold">
          Products
        </h1>

        <p className="mt-2 text-green-700">
          Manage your products and track their performance.
        </p>
      </div>

      {/* Search and Filter */}

      <div className="mt-8 flex flex-col gap-4 rounded-xl  p-5 md:flex-row">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full border border-green-500 px-6 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-200 md:max-w-md"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-full border border-green-500 px-6 py-2 text-sm"
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

      </div>

      {/* Products Table */}

      <div className="mt-6 overflow-x-auto rounded-xl border border-green-700 bg-white shadow-md">

        <table className="w-full text-left text-sm">

          <thead>
            <tr className="border-b bg-gray-50 text-green-500">

              <th className="px-6 py-4 font-medium">
                Product
              </th>

              <th className="px-6 py-4 font-medium">
                Category
              </th>

              <th className="px-6 py-4 font-medium">
                Price
              </th>

              <th className="px-6 py-4 font-medium">
                Sales
              </th>

              <th className="px-6 py-4 font-medium">
                Status
              </th>

            </tr>
          </thead>

          <tbody>

            {filteredProducts.map((product) => (

              <tr
                key={product.name}
                className="border-b last:border-0 hover:bg-green-200"
              >

                <td className="px-6 py-4 font-medium">
                  {product.name}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {product.category}
                </td>

                <td className="px-6 py-4">
                  {product.price}
                </td>

                <td className="px-6 py-4 font-medium">
                  {product.sales}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={
                      product.status === "Active"
                        ? "rounded-full bg-green-100 px-3 py-1 text-xs text-green-700"
                        : "rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                    }
                  >
                    {product.status}
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