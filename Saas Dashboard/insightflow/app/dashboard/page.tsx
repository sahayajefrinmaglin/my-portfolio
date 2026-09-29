import MetricCard from "@/components/MetricCard";
import RevenueChart from "@/components/charts/RevenueChart";
import SalesChart from "@/components/charts/SalesChart";
import RecentTransactions from "@/components/RecentTransactions";
import TopProducts from "@/components/TopProducts";

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Welcome Section */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-green-600 sm:text-3xl">
            Welcome back
          </h1>

          <p className="mt-2 text-green-700">
            Here's the latest pulse of your business.
          </p>
        </div>

        {/* Date Filter */}
        

      </div>

      {/* KPI Cards */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">

        <MetricCard
          title="Total Revenue"
          value="AED 284,520"
          change="18.4%"
        />

        <MetricCard
          title="Total Sales"
          value="12,482"
          change="12.5%"
        />

        <MetricCard
          title="Total Customers"
          value="8,421"
          change="8.2%"
        />

        <MetricCard
          title="Average Order Value"
          value="AED 228"
          change="6.8%"
        />

      </div>

      {/* Charts */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

        <RevenueChart />

        <SalesChart />

      </div>

      {/* Recent Transactions */}
      <div className="mt-6">
        <RecentTransactions />
      </div>

      {/* Bottom Section */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

        <TopProducts />

        {/* Business Insights */}
        <div className="rounded-2xl  bg-white p-6 shadow-md">

          <div>
            <h2 className="text-lg font-semibold text-green-600">
              Business Insights
            </h2>

            <p className="mt-1 text-sm text-green-700">
              Key observations from your business data
            </p>
          </div>

          <div className="mt-6 space-y-4">

            <div className="rounded-xl bg-green-50 p-4">
              <p className="text-sm font-medium text-gray-900">
                Revenue is growing
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Revenue increased by 18.4% compared with the previous period.
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-4">
              <p className="text-sm font-medium text-gray-900">
                Customer base is expanding
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Your customer count increased by 8.2% during the selected
                period.
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-4">
              <p className="text-sm font-medium text-gray-900">
                Pro Plan leads sales
              </p>

              <p className="mt-1 text-sm text-gray-500">
                The Pro Plan is currently your highest-performing product.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}