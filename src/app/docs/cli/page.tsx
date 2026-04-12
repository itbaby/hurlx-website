import type { Metadata } from "next";
import { HighlightedCode } from "@/components/highlighted-code";

export const metadata: Metadata = {
  title: "CLI Reference - hurlx",
  description: "Complete CLI reference for hurlx.",
};

export default function CLIPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>CLI Reference</h1>

      <h2>Usage</h2>
      <HighlightedCode lang="bash" code={`hurlx [options] [FILE...]

# Examples:
hurlx test.hurlx
hurlx --test test1.hurlx test2.hurlx
hurlx --verbose --variable host=api.example.com api.hurlx`} />

      <h2>Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <th className="py-2 px-4 text-left font-semibold">Flag</th>
              <th className="py-2 px-4 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {[
              ["-4", "Use IPv4 only"],
              ["-6", "Use IPv6 only"],
              ["-L, --location", "Follow redirects"],
              ["-k, --insecure", "Allow insecure SSL connections"],
              ["-V, --variable", "Define a variable (key=value)"],
              ["--variables-file", "Load variables from JSON/YAML file"],
              ["--compressed", "Request compressed response"],
              ["--connect-timeout", "Connection timeout (e.g. 10s)"],
              ["--continue-on-error", "Continue on assertion errors"],
              ["--json", "JSON output format"],
              ["--test", "Test mode — run assertions only"],
              ["-m, --timeout", "Maximum time per request"],
              ["--retry", "Retry count on failure"],
              ["--retry-interval", "Delay between retries (e.g. 500ms)"],
              ["-v, --verbose", "Verbose output"],
              ["--very-verbose", "More verbose output"],
              ["-i, --include", "Include HTTP response headers in output"],
              ["-o, --output", "Write output to file"],
              ["--report-junit", "Generate JUnit XML report"],
              ["--report-html", "Generate HTML report"],
            ].map(([flag, desc]) => (
              <tr key={flag}>
                <td className="py-2 px-4 font-mono text-xs whitespace-nowrap">
                  {flag}
                </td>
                <td className="py-2 px-4 text-gray-600 dark:text-gray-400">
                  {desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Environment Variables</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <th className="py-2 px-4 text-left font-semibold">Variable</th>
              <th className="py-2 px-4 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["HURLX_variables_file", "Default variables file to load"],
              ["NO_COLOR", "Disable colored output"],
              ["HTTP_PROXY", "HTTP proxy URL"],
              ["HTTPS_PROXY", "HTTPS proxy URL"],
            ].map(([v, desc]) => (
              <tr key={v} className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 px-4 font-mono text-xs">{v}</td>
                <td className="py-2 px-4 text-gray-600 dark:text-gray-400">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Exit Codes</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <th className="py-2 px-4 text-left font-semibold">Code</th>
              <th className="py-2 px-4 text-left font-semibold">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0", "All assertions passed"],
              ["1", "Assertion failure"],
              ["2", "Runtime error (network, parse, etc.)"],
            ].map(([code, desc]) => (
              <tr key={code} className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 px-4 font-mono">{code}</td>
                <td className="py-2 px-4 text-gray-600 dark:text-gray-400">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
