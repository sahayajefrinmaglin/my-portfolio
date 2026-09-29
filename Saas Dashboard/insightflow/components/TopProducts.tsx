const products = [
  {
    name: "Pro Plan",
    sales: 1248,
    revenue: "AED 37,440",
  },
  {
    name: "Basic Plan",
    sales: 986,
    revenue: "AED 9,860",
  },
  {
    name: "Enterprise",
    sales: 542,
    revenue: "AED 32,520",
  },
  {
    name: "Starter Plan",
    sales: 421,
    revenue: "AED 8,420",
  },
];

export default function TopProducts() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="text-lg bg-green-100 text-green-600 rounded-full px-4 py-2 font-semibold">
        Top Products
      </h2>

      <p className="mt-1 text-sm text-green-700">
        Best performing products
      </p>

      <div className="mt-6 space-y-5">
        {products.map((product, index) => (
          <div
            key={product.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold">
                {index + 1}
              </div>

              <div>
                <p className="font-medium">
                  {product.name}
                </p>

                <p className="text-sm text-gray-500">
                  {product.sales} sales
                </p>
              </div>
            </div>

            <p className="font-semibold">
              {product.revenue}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}