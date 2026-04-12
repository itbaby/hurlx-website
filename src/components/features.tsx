import { Layers, Code, Zap, Package, FileCheck, GitMerge } from "lucide-react";
import { RocketIllustration, ModularBlocksIllustration, NetworkIllustration } from "@/components/illustrations";

const features = [
  {
    icon: Layers,
    title: "Modular Import/Export",
    description:
      "Reuse authentication, configuration, and endpoint definitions across multiple test files with import/export syntax.",
  },
  {
    icon: Code,
    title: "Advanced Assertions",
    description:
      "Powerful assertion capabilities including JSONPath, XPath, regex, and type checking for comprehensive testing.",
  },
  {
    icon: Zap,
    title: "Variable Chaining",
    description:
      "Chain variables across requests for complex workflows like multi-step authentication and data pipelines.",
  },
  {
    icon: Package,
    title: "Template System",
    description:
      "Dynamic value generation with built-in functions for UUID, dates, random hex, and environment variables.",
  },
  {
    icon: FileCheck,
    title: "Full Hurl Compatibility",
    description:
      "100% compatible with all Hurl features. hurlx is a strict superset — your existing Hurl files work as-is.",
  },
  {
    icon: GitMerge,
    title: "Engineering Ready",
    description:
      "Structured test cases with CI/CD integration, JUnit reports, and professional workflow support built in.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="gradient-text">hurlx</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            hurlx extends Hurl with modular capabilities while maintaining full
            compatibility with all existing Hurl features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center mb-4 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors">
                <feature.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <ModularBlocksIllustration />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Modular Testing Made <span className="gradient-text">Simple</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Split your API tests into reusable modules. Import authentication flows,
              configuration, and endpoint definitions across test suites.
            </p>
            <div className="bg-gray-900 dark:bg-gray-800/80 rounded-xl p-4">
              <pre className="text-sm font-mono leading-relaxed hurlx-highlight" dangerouslySetInnerHTML={{
                __html: `<span class="hl-comment"># auth.hurlx</span>
POST https://api.example.com/login
<span class="hl-section">[JSON]</span>
{ "username": "<span class="hl-template">{{user}}</span>" }
HTTP 200
<span class="hl-section">[Captures]</span>
token: <span class="hl-function">jsonpath</span> <span class="hl-string">"$.token"</span>

<span class="hl-keyword">export</span> token`
              }} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">
              Chain Requests, <span className="gradient-text">Capture Values</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Chain multiple HTTP requests together. Capture response values and pass
              them to subsequent requests for complex API testing workflows.
            </p>
            <div className="bg-gray-900 dark:bg-gray-800/80 rounded-xl p-4">
              <pre className="text-sm font-mono leading-relaxed hurlx-highlight" dangerouslySetInnerHTML={{
                __html: `<span class="hl-comment"># Get token → Login → Access</span>
<span class="hl-method">GET</span> <span class="hl-url">https://api.example.com/login</span>
HTTP <span class="hl-status">200</span>
<span class="hl-section">[Captures]</span>
csrf: <span class="hl-function">xpath</span> <span class="hl-string">"//input[@name='csrf']/@value"</span>

<span class="hl-method">POST</span> <span class="hl-url">https://api.example.com/login</span>
<span class="hl-header-key">Cookie</span>: csrf=<span class="hl-template">{{csrf}}</span>
HTTP <span class="hl-status">302</span>`
              }} />
            </div>
          </div>
          <div className="order-1 md:order-2 text-center">
            <NetworkIllustration />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
          <div className="text-center">
            <RocketIllustration />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Ready for <span className="gradient-text">CI/CD</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Built for professional workflows. Generate JUnit reports, integrate with
              GitHub Actions, and run comprehensive test suites in any CI environment.
            </p>
            <div className="bg-gray-900 dark:bg-gray-800/80 rounded-xl p-4">
              <pre className="text-sm font-mono text-gray-100 leading-relaxed">
{`$ hurlx --test tests/*.hurlx \\
    --variable base_url=$API_URL \\
    --report-junit=report.xml`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
