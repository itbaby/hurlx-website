import Link from "next/link";

const docSections = [
  {
    title: "Getting Started",
    links: [
      { label: "Installation", href: "#installation" },
      { label: "Quick Start", href: "/docs" },
      { label: "Samples", href: "/docs/samples" },
    ],
  },
  {
    title: "File Format",
    links: [
      { label: "Hurlx File", href: "/docs/manual" },
      { label: "Request", href: "/docs/manual#request" },
      { label: "Response", href: "/docs/manual#response" },
      { label: "Capturing Response", href: "/docs/manual#captures" },
      { label: "Asserting Response", href: "/docs/manual#asserts" },
      { label: "Import / Export", href: "/docs/manual#import-export" },
    ],
  },
  {
    title: "Tutorial",
    links: [
      { label: "Your First File", href: "/docs/tutorial" },
      { label: "Adding Asserts", href: "/docs/tutorial#asserts" },
      { label: "Modular Testing", href: "/docs/tutorial#modular" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "GitHub", href: "https://github.com/itbaby/hurlx" },
      { label: "License", href: "https://github.com/itbaby/hurlx/blob/main/LICENSE" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M7 8L13 12L7 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 16H19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-lg font-bold gradient-text">hurlx</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
              Enhanced HTTP testing for modern API engineering.
            </p>
            <a
              href="https://github.com/itbaby/hurlx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
          {docSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2026 hurlx. MIT License.
          </p>
          <p className="text-sm text-gray-500">
            powered by{" "}
            <a
              href="https://github.com/itbaby/hurlx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
              itbaby
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
