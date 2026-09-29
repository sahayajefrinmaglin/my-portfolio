"use client";

import { useState } from "react";

const reports = [
  {
    name: "Sales Report",
    description: "Detailed sales and transaction information.",
  },
  {
    name: "Revenue Report",
    description: "Monthly revenue and financial performance.",
  },
  {
    name: "Customer Report",
    description: "Customer growth and subscription information.",
  },
  {
    name: "Product Report",
    description: "Product sales and performance analysis.",
  },
];

export default function ReportsPage() {
  const [generatedReport, setGeneratedReport] = useState("");

  const handleGenerateReport = (reportName: string) => {
    setGeneratedReport(`${reportName} generated successfully.`);
  };

  return (
    <main className="p-4 sm:p-6  lg:p-8">

      <h1 className="text-1xl text-green-600 font-bold sm:text-2xl">
        Reports
      </h1>

      <p className="mt-2 text-green-700">
        Generate and manage your business reports.
      </p>

      {/* Success Message */}
      {generatedReport && (
        <div className="mt-6 rounded-full border border-green-200 bg-green-100 px-4 py-3 text-sm text-green-700">
          ✓ {generatedReport}
        </div>
      )}

      {/* Reports */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

        {reports.map((report) => (
          <div
            key={report.name}
            className="rounded-xl  bg-white p-6 shadow-md"
          >

            <h2 className="text-lg text-green-600 font-semibold">
              {report.name}
            </h2>

            <p className="mt-2 text-sm text-green-700">
              {report.description}
            </p>

            <button
              type="button"
              onClick={() => handleGenerateReport(report.name)}
              className="mt-5 rounded-full bg-green-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-500"
            >
              Generate Report
            </button>

          </div>
        ))}

      </div>

    </main>
  );
}