import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Changelog - hurlx",
  description: "Release history and changelog for hurlx.",
};

interface Release {
  version: string;
  date: string;
  tag: string;
  highlights?: string;
  sections: {
    title: string;
    icon: string;
    items: string[];
  }[];
}

const releases: Release[] = [
  {
    version: "v1.0.12",
    date: "2026-04-17",
    tag: "v1.0.12",
    highlights: "Bug fixes for base64 decoding, runner state isolation, and assert value handling.",
    sections: [
      {
        title: "Bug Fixes",
        icon: "🐛",
        items: [
          "filter: base64 decode now strips trailing `=` padding before NoPadding decode — fixes decoding of any standard padded base64 string (e.g. `SGVsbG8=`, `AA==`)",
          "runner: reset redirect recorder per-entry — prevents redirect history leaking into subsequent chain steps",
          "runner: on template render error, write to entry-scoped vars instead of shared runner vars — prevents cross-entry state pollution",
          "runner: save/restore `Verbose` and `client.Timeout` in `applyRequestOptions` — per-entry option overrides no longer bleed into later entries",
          "runner: `contains`, `startsWith`, `endsWith`, `matches` asserts now use `formatAssertValue` — numeric and boolean assert values now work correctly",
          "runner: `optsToEntry` off-by-one fix — `--to N` now correctly includes entry N (was N-1)",
        ],
      },
      {
        title: "Tests Added",
        icon: "✅",
        items: [
          "`TestBase64RoundTrip` — encode→decode round-trip for various byte lengths",
          "`TestBase64DecodePadded` — verify padded base64 input is accepted",
          "`TestBase64UrlSafeRoundTrip` — URL-safe variant round-trip",
        ],
      },
    ],
  },
  {
    version: "v1.0.11",
    date: "2026-04-17",
    tag: "v1.0.11",
    highlights: "Repository housekeeping — no functional changes.",
    sections: [
      {
        title: "Housekeeping",
        icon: "🧹",
        items: [
          "Untrack `.claude/`, `.workbuddy/memory/`, `.github/workflows/CLAUDE.md`, and `hurlx_test_bin` from version control",
          "Add above paths to `.gitignore` — they are now kept local-only",
          "`.github/workflows/build.yml` continues to be tracked (CI requires it)",
        ],
      },
    ],
  },
  {
    version: "v1.0.10",
    date: "2026-04-16",
    tag: "v1.0.10",
    highlights: "Template engine error propagation, runner state isolation, and security hardening.",
    sections: [
      {
        title: "Improvements",
        icon: "✨",
        items: [
          "tmpl: `Render()` now returns `(string, error)` — errors propagate cleanly instead of panicking",
          "tmpl: `generateUUID` and `generateRandomHex` return errors instead of panic on crypto failures",
          "tmpl: merged `getEnv`/`getenv` branches; added `uuid` as alias for `newUuid`",
          "runner: per-entry variable cloning prevents shared-state mutation across chain steps",
          "runner: template render errors are now propagated for URL, headers, query, form, cookies, basicAuth, and multipart fields",
        ],
      },
      {
        title: "Security",
        icon: "🔒",
        items: [
          "runner: path-traversal guard added for body-file and multipart-file paths",
          "importer: circular-import detection via an in-progress `resolving` set",
          "importer: path-traversal guard for body file paths",
        ],
      },
      {
        title: "Code Quality",
        icon: "🔧",
        items: [
          "cli: `filepath.WalkDir` replaces deprecated `filepath.Walk`",
          "cli: errors from `os.WriteFile` and `json.MarshalIndent` are now handled and reported",
        ],
      },
    ],
  },
  {
    version: "v1.0.9",
    date: "2026-04-16",
    tag: "v1.0.9",
    highlights: "New template functions, runner improvements, and stdlib base64.",
    sections: [
      {
        title: "New Features",
        icon: "🚀",
        items: [
          "tmpl: new `uuid` alias for `newUuid`",
          "tmpl: `date \"format\"` supports Java-style and strftime format patterns",
          "tmpl: `randomHex N` generates N random hex bytes",
          "tmpl: `getenv` as case-insensitive alias for `getEnv`",
          "runner: `ConnectTimeout` and `Proxy` options support",
        ],
      },
      {
        title: "Bug Fixes",
        icon: "🐛",
        items: [
          "filter: replaced hand-rolled base64 implementation with Go stdlib `encoding/base64`",
          "runner: fix multipart file close order",
          "runner: fix gzip/deflate reader scope",
          "runner: remove `br` from Accept-Encoding (brotli not supported)",
        ],
      },
    ],
  },
  {
    version: "v1.0.8",
    date: "2026-04-12",
    tag: "v1.0.8",
    sections: [
      {
        title: "Improvements",
        icon: "✨",
        items: [
          "Improve test pass rate from 89% to 96%",
          "Fix 6 major issues across parser, runner, and filter packages",
          "Fix integration tests: use jsonpath for headers",
          "Replace xpath `string()` with `//title/text()`",
        ],
      },
    ],
  },
];

function VersionBadge({ version }: { version: string }) {
  const isLatest = version === releases[0].version;
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
      isLatest
        ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
        : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
    }`}>
      {isLatest ? "Latest" : version}
    </span>
  );
}

export default function ChangelogPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <div className="not-prose mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Changelog</h1>
        <p className="text-gray-600 dark:text-gray-400">
          All notable changes to hurlx are documented here.{" "}
          <a
            href="https://github.com/itbaby/hurlx/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            View all releases on GitHub →
          </a>
        </p>
      </div>

      <div className="not-prose space-y-12">
        {releases.map((release, index) => (
          <div key={release.version} className="relative">
            {/* Timeline connector */}
            {index < releases.length - 1 && (
              <div className="absolute left-4 top-12 bottom-0 w-px bg-gray-200 dark:bg-gray-800 -mb-12" />
            )}

            <div className="flex gap-4">
              {/* Timeline dot */}
              <div className={`relative flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center mt-1 ${
                index === 0
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950"
                  : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950"
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  index === 0 ? "bg-indigo-500" : "bg-gray-400 dark:bg-gray-600"
                }`} />
              </div>

              <div className="flex-1 pb-2">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 m-0">
                    {release.version}
                  </h2>
                  {index === 0 && <VersionBadge version={release.version} />}
                  <span className="text-sm text-gray-500 dark:text-gray-500">{release.date}</span>
                  <a
                    href={`https://github.com/itbaby/hurlx/releases/tag/${release.tag}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
                  >
                    GitHub Release ↗
                  </a>
                </div>

                {/* Highlights */}
                {release.highlights && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 mt-1">
                    {release.highlights}
                  </p>
                )}

                {/* Sections */}
                <div className="space-y-4">
                  {release.sections.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-2">
                        <span>{section.icon}</span>
                        {section.title}
                      </h3>
                      <ul className="space-y-1.5 ml-6">
                        {section.items.map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
                            <span className="text-gray-400 dark:text-gray-600 mt-0.5 flex-shrink-0">–</span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item.replace(
                                  /`([^`]+)`/g,
                                  '<code class="px-1 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 rounded font-mono text-gray-800 dark:text-gray-200">$1</code>'
                                ),
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Download links for latest */}
                {index === 0 && (
                  <div className="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">
                      Download {release.version}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: "macOS ARM64", file: "hurlx-darwin-arm64" },
                        { label: "macOS AMD64", file: "hurlx-darwin-amd64" },
                        { label: "Linux AMD64", file: "hurlx-linux-amd64" },
                        { label: "Windows AMD64", file: "hurlx-windows-amd64.exe" },
                      ].map((asset) => (
                        <a
                          key={asset.file}
                          href={`https://github.com/itbaby/hurlx/releases/download/${release.tag}/${asset.file}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors no-underline"
                        >
                          ↓ {asset.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="not-prose mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          hurlx follows{" "}
          <a
            href="https://semver.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Semantic Versioning
          </a>
          . All releases are available on{" "}
          <a
            href="https://github.com/itbaby/hurlx/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            GitHub Releases
          </a>
          .
        </p>
      </div>
    </div>
  );
}
