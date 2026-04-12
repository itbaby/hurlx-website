import type { Metadata } from "next";
import { HighlightedCode } from "@/components/highlighted-code";

export const metadata: Metadata = {
  title: "Tutorial - hurlx",
  description: "Step-by-step tutorial for learning hurlx.",
};

export default function TutorialPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>Tutorial</h1>
      <p>
        Learn hurlx step by step. This tutorial walks you through the basics to
        advanced features.
      </p>

      <h2>Your First hurlx File</h2>
      <p>
        Create a file named <code>hello.hurlx</code>:
      </p>
      <HighlightedCode code={`GET https://example.org
HTTP 200`} />
      <p>Run it:</p>
      <HighlightedCode lang="bash" code={`$ hurlx hello.hurlx`} />
      <p>
        This sends a GET request and asserts the response is HTTP 200. If the
        assertion fails, hurlx exits with an error code.
      </p>

      <h2>Multiple Requests</h2>
      <p>Chain multiple requests in a single file:</p>
      <HighlightedCode code={`# Get the homepage
GET https://example.org
HTTP 200

# Get the API health
GET https://api.example.org/health
HTTP 200

# Create a resource
POST https://api.example.org/items
Content-Type: application/json
{
  "name": "Test Item"
}
HTTP 201`} />

      <h2 id="asserts">Adding Asserts</h2>
      <p>Validate response headers, body content, and timing:</p>
      <HighlightedCode code={`GET https://api.example.org/user/1
HTTP 200
[Asserts]
header "Content-Type" contains "application/json"
jsonpath "$.name" == "John Doe"
jsonpath "$.age" > 18
jsonpath "$.email" matches "^[\\\\w.+-]+@.+\\\\..+$"
duration < 500`} />

      <h3>Type Checking</h3>
      <HighlightedCode code={`GET https://api.example.org/data
HTTP 200
[Asserts]
jsonpath "$.id" isInteger
jsonpath "$.active" isBoolean
jsonpath "$.tags" isList
jsonpath "$.profile" isObject
jsonpath "$.created_at" isIsoDate`} />

      <h2>Capturing Values</h2>
      <p>Capture values from one request and use them in subsequent requests:</p>
      <HighlightedCode code={`# Get CSRF token
GET https://example.org/login
HTTP 200
[Captures]
csrf: xpath "//input[@name='_csrf']/@value"

# Submit login form
POST https://example.org/login
[Form]
username: admin
password: secret
csrf_token: {{csrf}}
HTTP 302
[Captures]
session: cookie "session_id"

# Access dashboard
GET https://example.org/dashboard
Cookie: session_id={{session}}
HTTP 200`} />

      <h2 id="modular">Modular Testing</h2>
      <p>The key feature of hurlx — split your tests into reusable modules.</p>

      <h3>Step 1: Create an Auth Module</h3>
      <HighlightedCode code={`# auth.hurlx
POST https://api.example.com/login
[JSON]
{
  "username": "{{username}}",
  "password": "{{password}}"
}
HTTP 200
[Captures]
token: jsonpath "$.token"

export token`} />

      <h3>Step 2: Create Configuration</h3>
      <HighlightedCode code={`# config.hurlx
export base_url = "https://api.example.com"
export api_version = "v1"`} />

      <h3>Step 3: Write Tests Using Modules</h3>
      <HighlightedCode code={`# tests/users.hurlx
import "config.hurlx"
import "auth.hurlx"

GET {{base_url}}/{{api_version}}/users
Authorization: Bearer {{token}}
HTTP 200
[Asserts]
jsonpath "$.length()" > 0

# Create a user
POST {{base_url}}/{{api_version}}/users
Authorization: Bearer {{token}}
[JSON]
{
  "name": "Test User",
  "email": "test@example.com"
}
HTTP 201
[Captures]
user_id: jsonpath "$.id"

# Delete the user
DELETE {{base_url}}/{{api_version}}/users/{{user_id}}
Authorization: Bearer {{token}}
HTTP 204`} />

      <h3>Step 4: Run Tests</h3>
      <HighlightedCode lang="bash" code={`$ hurlx --test --variable username=admin --variable password=secret tests/users.hurlx
$ hurlx --test tests/*.hurlx --report-junit=report.xml`} />

      <h2>Debugging</h2>
      <p>Use verbose flags to debug:</p>
      <HighlightedCode lang="bash" code={`$ hurlx --verbose test.hurlx
$ hurlx --very-verbose test.hurlx`} />

      <h2>CI/CD Integration</h2>
      <p>hurlx works great in CI/CD pipelines:</p>
      <HighlightedCode lang="bash" code={`# GitHub Actions example
- name: Run API Tests
  run: |
    hurlx --test --variable base_url=$API_URL tests/*.hurlx`} />
    </div>
  );
}
