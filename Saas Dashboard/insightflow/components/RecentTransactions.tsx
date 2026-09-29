const transactions = [
  {
    id: 1,
    customer: "John Smith",
    product: "Pro Plan",
    amount: "AED 299",
    status: "Completed",
  },
  {
    id: 2,
    customer: "Sarah Lee",
    product: "Basic Plan",
    amount: "AED 99",
    status: "Completed",
  },
  {
    id: 3,
    customer: "David Kumar",
    product: "Pro Plan",
    amount: "AED 299",
    status: "Pending",
  },
  {
    id: 4,
    customer: "Emma Wilson",
    product: "Enterprise",
    amount: "AED 599",
    status: "Completed",
  },
];

export default function RecentTransactions() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="text-lg bg-green-100 rounded-full px-4 py-2 font-semibold">
        Recent Transactions
      </h2>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left  rounded-lg text-sm">
          <thead>
            <tr className="border-b text-green-500 px-3">
              <th className="pb-3 font-medium">Customer</th>
              <th className="pb-3 font-medium">Product</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b last:border-0"
              >
                <td className="py-4 font-medium">
                  {transaction.customer}
                </td>

                <td className="py-4 text-gray-600">
                  {transaction.product}
                </td>

                <td className="py-4">
                  {transaction.amount}
                </td>

                <td className="py-4">
                  <span
                    className={
                      transaction.status === "Completed"
                        ? "rounded-full bg-green-100 px-3 py-1 text-xs text-green-700"
                        : "rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700"
                    }
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}