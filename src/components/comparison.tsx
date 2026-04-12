import { Check, X } from "lucide-react";
import { TestPassedIllustration } from "@/components/illustrations";

const rows = [
  { name: "Basic HTTP Testing", hurl: true, hurlx: true },
  { name: "JSON/XML Assertions", hurl: true, hurlx: true },
  { name: "Variables & Templates", hurl: true, hurlx: true },
  { name: "Filters & Predicates", hurl: true, hurlx: true },
  { name: "Captures & Chaining", hurl: true, hurlx: true },
  { name: "Modular Import/Export", hurl: false, hurlx: true },
  { name: "Structured Test Cases", hurl: false, hurlx: true },
  { name: "Engineering-Ready Workflows", hurl: false, hurlx: true },
];

export function Comparison() {
  return (
    <section
      id="comparison"
      className="py-20 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hurl vs <span className="gradient-text">hurlx</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            hurlx is a strict superset of Hurl — every Hurl file is a valid
            hurlx file.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="py-3 px-6 text-left text-sm font-semibold">
                    Feature
                  </th>
                  <th className="py-3 px-6 text-center text-sm font-semibold">
                    Hurl
                  </th>
                  <th className="py-3 px-6 text-center text-sm font-semibold">
                    hurlx
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {rows.map((row) => (
                  <tr
                    key={row.name}
                    className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                  >
                    <td className="py-3 px-6 text-sm">{row.name}</td>
                    <td className="py-3 px-6 text-center">
                      {row.hurl ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <Check className="w-5 h-5 text-indigo-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <TestPassedIllustration />
            <p className="mt-4 text-lg font-medium">
              <span className="gradient-text">hurlx</span> = Hurl superset + modular capabilities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
