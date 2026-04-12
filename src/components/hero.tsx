"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function highlightLine(line: string): string {
  let h = line
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  if (h.trimStart().startsWith("#")) {
    return `<span class="hl-comment">${h}</span>`;
  }

  h = h.replace(
    /^( *)(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS)\b/,
    '$1<span class="hl-method">$2</span>'
  );

  h = h.replace(
    /\b(HTTP\/?[123.]*)\s+(\d{3})\b/,
    '<span class="hl-http">$1</span> <span class="hl-status">$2</span>'
  );
  h = h.replace(
    /\b(HTTP)\s+(\*)\b/,
    '<span class="hl-http">$1</span> <span class="hl-status">$2</span>'
  );

  h = h.replace(
    /^\s*\[(Assertions|Asserts|Captures|Query|Form|Multipart|BasicAuth|Cookies|Options|JSON)\]/gm,
    '<span class="hl-section">[$1]</span>'
  );

  h = h.replace(/\b(import|export)\b/g, '<span class="hl-keyword">$1</span>');

  h = h.replace(
    /\b(jsonpath|xpath|header|cookie|regex|status|url|duration|sha256|bytes|certificate|ip)\b/g,
    '<span class="hl-function">$1</span>'
  );

  h = h.replace(
    /\b(isInteger|isBoolean|isString|isFloat|isList|isObject|isUuid|isIsoDate)\b/g,
    '<span class="hl-function">$1</span>'
  );

  h = h.replace(
    /(==|!=|>=|<=|>|<)\b/g,
    '<span class="hl-operator">$1</span>'
  );

  h = h.replace(
    /\b(matches|contains|exists|count|startsWith|endsWith)\b/g,
    '<span class="hl-operator">$1</span>'
  );

  h = h.replace(/&quot;([^&]*)&quot;/g, '<span class="hl-string">&quot;$1&quot;</span>');
  h = h.replace(/"([^"]*)"/g, '<span class="hl-string">"$1"</span>');

  h = h.replace(
    /\{\{([^}]+)\}\}/g,
    '<span class="hl-template">{{<span class="hl-template-inner">$1</span>}}</span>'
  );

  h = h.replace(
    /(https?:\/\/[^\s]+)/g,
    '<span class="hl-url">$1</span>'
  );

  h = h.replace(
    /^( *)([A-Za-z][A-Za-z0-9-]*)(:)/gm,
    '$1<span class="hl-header-key">$2</span>$3'
  );

  return h;
}

function highlight(code: string): string {
  return code.split("\n").map(highlightLine).join("\n");
}

const examples = [
  {
    id: "import-export",
    label: "Import / Export",
    code: `# auth.hurlx
POST https://api.example.com/login
[JSON]
{
  "username": "{{username}}",
  "password": "{{password}}"
}
HTTP 200
[Captures]
token: jsonpath "$.token"
expires: jsonpath "$.expires_at"

export token
export expires

# api-test.hurlx
import "auth.hurlx"

GET https://api.example.com/users
Authorization: Bearer {{token}}
HTTP 200
[Asserts]
jsonpath "$.length()" > 0`,
  },
  {
    id: "chaining",
    label: "Chaining Requests",
    code: `# Step 1: Get CSRF token
GET https://api.example.com/login
HTTP 200
[Captures]
csrf_token: xpath "//input[@name='csrf_token']/@value"

# Step 2: Login
POST https://api.example.com/login
[Form]
username: admin
password: password
csrf_token: {{csrf_token}}
HTTP 302
[Captures]
session_id: cookie "session_id"

# Step 3: Access protected resource
GET https://api.example.com/dashboard
Cookie: session_id={{session_id}}
HTTP 200`,
  },
  {
    id: "json-body",
    label: "JSON Body",
    code: `POST https://api.example.com/api/dogs
{
    "id": 0,
    "name": "Frieda",
    "picture": "images/scottish-terrier.jpeg",
    "age": 3,
    "breed": "Scottish Terrier",
    "location": "Lisco, Alabama"
}
HTTP 200`,
  },
  {
    id: "assertions",
    label: "Advanced Assertions",
    code: `GET https://api.example.com/user/1
HTTP 200
[Asserts]
jsonpath "$.name" == "John Doe"
jsonpath "$.age" > 18
jsonpath "$.email" matches "^[\\\\w.+-]+@[\\\\w.-]+\\\\.[a-zA-Z]{2,}$"
jsonpath "$.address.city" exists
jsonpath "$.id" isInteger
jsonpath "$.active" isBoolean
jsonpath "$.created_at" isIsoDate
duration < 500ms`,
  },
  {
    id: "headers",
    label: "Request Headers",
    code: `GET https://example.org/news
User-Agent: Mozilla/5.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Connection: keep-alive`,
  },
  {
    id: "graphql",
    label: "GraphQL",
    code: `POST https://example.org/starwars/graphql
{
  "query": "{ human(id: \\"1000\\") { name height } }"
}
HTTP 200
[Asserts]
jsonpath "$.data.human.name" exists`,
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState(examples[0].id);
  const activeExample = examples.find((e) => e.id === activeTab)!;

  const highlighted = useMemo(() => highlight(activeExample.code), [activeExample.code]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-gray-950" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Run and Test{" "}
              <span className="gradient-text">HTTP Requests</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 max-w-xl">
              An enhanced version of{" "}
              <a
                href="https://hurl.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Hurl
              </a>
              , designed for modern API engineering workflows. Chain requests,
              capture values, and evaluate queries on headers and body response.
            </p>
            <p className="text-base text-gray-500 dark:text-gray-500 mb-8 max-w-lg">
              hurlx adds <strong className="font-semibold text-gray-700 dark:text-gray-300">import/export syntax</strong>, making HTTP testing more modular and maintainable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#installation">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-base px-8 py-3 h-auto">
                  Install hurlx
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" className="text-base px-8 py-3 h-auto">
                  Read the Docs
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <HeroIllustration />
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-1 mb-0 border-b border-gray-800">
            {examples.map((ex) => (
              <button
                key={ex.id}
                onClick={() => setActiveTab(ex.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-t-lg ${
                  activeTab === ex.id
                    ? "bg-gray-900 dark:bg-gray-800 text-white"
                    : "bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                }`}
              >
                {ex.label}
              </button>
            ))}
          </div>
          <div className="bg-gray-800 dark:bg-gray-800 rounded-b-xl rounded-tr-xl p-6 shadow-2xl">
            <pre
              className="text-sm md:text-base text-white overflow-x-auto font-mono leading-relaxed whitespace-pre hurlx-highlight"
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="40" y="30" width="400" height="260" rx="16" fill="#1e1b4b" className="dark:fill-indigo-950/60" />
      <rect x="40" y="30" width="400" height="36" rx="16" fill="#312e81" className="dark:fill-indigo-900/60" />
      <circle cx="64" cy="48" r="6" fill="#ef4444" />
      <circle cx="84" cy="48" r="6" fill="#fbbf24" />
      <circle cx="104" cy="48" r="6" fill="#22c55e" />

      <text x="72" y="100" fill="#f472b6" fontFamily="monospace" fontSize="14" fontWeight="bold">GET</text>
      <text x="110" y="100" fill="#93c5fd" fontFamily="monospace" fontSize="14">https://api.example.com</text>
      <rect x="56" y="110" width="288" height="1" fill="#4338ca" opacity="0.3" />

      <text x="72" y="132" fill="#818cf8" fontFamily="monospace" fontSize="12" fontWeight="bold">[Captures]</text>
      <text x="72" y="150" fill="#67e8f9" fontFamily="monospace" fontSize="12">token: jsonpath</text>
      <text x="168" y="150" fill="#a5f3a4" fontFamily="monospace" fontSize="12">&quot;$.token&quot;</text>
      <rect x="56" y="160" width="288" height="1" fill="#4338ca" opacity="0.3" />

      <text x="72" y="180" fill="#c084fc" fontFamily="monospace" fontSize="12" fontWeight="bold">export</text>
      <text x="120" y="180" fill="#e0e7ff" fontFamily="monospace" fontSize="12">token</text>

      <rect x="340" y="88" width="88" height="56" rx="10" fill="#312e81" className="dark:fill-indigo-900/50" stroke="#6366f1" strokeWidth="1.5" />
      <text x="364" y="112" fill="#a5f3a4" fontFamily="monospace" fontSize="10">200 OK</text>
      <text x="356" y="128" fill="#22c55e" fontFamily="monospace" fontSize="16">&#10003;</text>

      <rect x="340" y="156" width="88" height="48" rx="10" fill="#312e81" className="dark:fill-indigo-900/50" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="356" y="176" fill="#fbbf24" fontFamily="monospace" fontSize="10">{"{token}"}</text>
      <text x="352" y="192" fill="#c084fc" fontFamily="monospace" fontSize="9">captured</text>

      <circle cx="100" cy="240" r="24" fill="#4338ca" opacity="0.4" />
      <circle cx="100" cy="240" r="16" fill="#6366f1" opacity="0.6" />
      <circle cx="100" cy="240" r="8" fill="#818cf8" />

      <line x1="124" y1="240" x2="200" y2="240" stroke="#6366f1" strokeWidth="2" strokeDasharray="6 4" />
      <circle cx="220" cy="240" r="20" fill="#7c3aed" opacity="0.4" />
      <circle cx="220" cy="240" r="12" fill="#a78bfa" />
      <text x="212" y="244" fill="white" fontFamily="monospace" fontSize="12" fontWeight="bold">&lt;/&gt;</text>

      <line x1="240" y1="240" x2="310" y2="240" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6 4" />
      <circle cx="330" cy="240" r="20" fill="#6d28d9" opacity="0.4" />
      <circle cx="330" cy="240" r="12" fill="#8b5cf6" />
      <text x="322" y="244" fill="white" fontFamily="monospace" fontSize="14">&#10003;</text>
    </svg>
  );
}
