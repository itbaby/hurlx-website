"use client";

import { useState } from "react";
const platforms = [
  {
    id: "macos-arm",
    label: "macOS (Apple Silicon)",
    commands: [
      "curl -L https://github.com/itbaby/hurlx/releases/latest/download/hurlx-darwin-arm64 -o hurlx",
      "chmod +x hurlx",
    ],
  },
  {
    id: "macos-intel",
    label: "macOS (Intel)",
    commands: [
      "curl -L https://github.com/itbaby/hurlx/releases/latest/download/hurlx-darwin-amd64 -o hurlx",
      "chmod +x hurlx",
    ],
  },
  {
    id: "linux",
    label: "Linux",
    commands: [
      "curl -L https://github.com/itbaby/hurlx/releases/latest/download/hurlx-linux-amd64 -o hurlx",
      "chmod +x hurlx",
    ],
  },
  {
    id: "windows",
    label: "Windows",
    commands: [
      "curl -L https://github.com/itbaby/hurlx/releases/latest/download/hurlx-windows-amd64.exe -o hurlx.exe",
    ],
  },
  {
    id: "go",
    label: "Go Install",
    commands: ["go install github.com/itbaby/hurlx/cli@latest"],
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="absolute top-2 right-2 p-1.5 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-gray-200 transition-colors text-xs"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export function Installation() {
  const [activePlatform, setActivePlatform] = useState("macos-arm");
  const platform = platforms.find((p) => p.id === activePlatform)!;

  return (
    <section id="installation" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Started
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Install hurlx and start testing APIs with modular workflows.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {platforms.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePlatform(p.id)}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  activePlatform === p.id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="relative bg-gray-900 dark:bg-gray-800/80 rounded-xl p-6 shadow-lg">
            <CopyButton text={platform.commands.join("\n")} />
            <pre className="text-sm md:text-base text-gray-100 font-mono leading-relaxed">
              <code>{platform.commands.join("\n")}</code>
            </pre>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl mb-2">1</div>
              <h3 className="font-semibold mb-1">Write</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Create a .hurlx file with your HTTP requests
              </p>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl mb-2">2</div>
              <h3 className="font-semibold mb-1">Run</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Execute with <code className="text-indigo-600 dark:text-indigo-400">hurlx test.hurlx</code>
              </p>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl mb-2">3</div>
              <h3 className="font-semibold mb-1">Test</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Use <code className="text-indigo-600 dark:text-indigo-400">--test</code> mode for assertions
              </p>
            </div>
          </div>

          <div className="mt-12 relative bg-gray-900 dark:bg-gray-800/80 rounded-xl p-6 shadow-lg">
            <CopyButton text={`# hello.hurlx\nGET https://example.com\nHTTP 200\n\nhurlx hello.hurlx\nhurlx --test hello.hurlx`} />
            <pre className="text-sm md:text-base text-gray-100 font-mono leading-relaxed">
              <code>{`# hello.hurlx
GET https://example.com
HTTP 200

$ hurlx hello.hurlx
$ hurlx --test hello.hurlx
$ hurlx --verbose test.hurlx
$ hurlx --test tests/*.hurlx`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
