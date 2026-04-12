import type { Metadata } from "next";
import { HighlightedCode } from "@/components/highlighted-code";

export const metadata: Metadata = {
  title: "Samples - hurlx",
  description: "Sample hurlx files for common use cases.",
};

export default function SamplesPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>Samples</h1>
      <p>
        Common patterns and examples for hurlx. Each sample is a self-contained
        hurlx file you can run directly.
      </p>

      <h2>Simple GET</h2>
      <HighlightedCode code={`GET https://example.org
HTTP 200`} />

      <h2>JSON API</h2>
      <HighlightedCode code={`POST https://api.example.com/api/dogs
Content-Type: application/json
{
  "id": 0,
  "name": "Frieda",
  "picture": "images/scottish-terrier.jpeg",
  "age": 3,
  "breed": "Scottish Terrier",
  "location": "Lisco, Alabama"
}
HTTP 200`} />

      <h2>GraphQL</h2>
      <HighlightedCode code={`POST https://example.org/graphql
Content-Type: application/json
{
  "query": "{ human(id: \\"1000\\") { name appearsIn height(unit: FOOT) } }"
}
HTTP 200
[Asserts]
jsonpath "$.data.human.name" == "Luke Skywalker"`} />

      <h2>Authentication Flow</h2>
      <HighlightedCode code={`# Step 1: Get login page and CSRF token
GET https://example.org/login
HTTP 200
[Captures]
csrf_token: xpath "//input[@name='_csrf_token']/@value"

# Step 2: Submit credentials
POST https://example.org/login
[Form]
user: toto
password: 1234
token: {{csrf_token}}
HTTP 302
[Captures]
session_id: cookie "session_id"

# Step 3: Access protected resource
GET https://example.org/dashboard
Cookie: session_id={{session_id}}
HTTP 200`} />

      <h2>Performance Testing</h2>
      <HighlightedCode code={`GET https://api.example.com/v1/pets
HTTP 200
[Asserts]
duration < 1000`} />

      <h2>SSL Certificate Check</h2>
      <HighlightedCode code={`GET https://example.org
HTTP 200
[Asserts]
certificate "Subject" == "CN=example.org"
certificate "Issuer" == "C=US, O=Let's Encrypt, CN=R3"
certificate "Expire-Date" daysAfterNow > 15`} />

      <h2>Polling / Retry</h2>
      <HighlightedCode code={`GET https://api.example.org/jobs/{{job_id}}
[Options]
retry: 10
retry-interval: 300ms
HTTP 200
[Asserts]
jsonpath "$.state" == "COMPLETED"`} />

      <h2>Modular Test Suite</h2>
      <h3>config.hurlx</h3>
      <HighlightedCode code={`export base_url = "https://api-staging.example.com"
export test_user = "test@example.com"
export test_pass = "Test123!"`} />
      <h3>auth.hurlx</h3>
      <HighlightedCode code={`import "config.hurlx"

POST {{base_url}}/auth/login
[JSON]
{
  "email": "{{test_user}}",
  "password": "{{test_pass}}"
}
HTTP 200
[Captures]
token: jsonpath "$.token"

export token`} />
      <h3>users.hurlx</h3>
      <HighlightedCode code={`import "auth.hurlx"

POST {{base_url}}/users
Authorization: Bearer {{token}}
[JSON]
{
  "name": "Test User",
  "email": "newuser@example.com"
}
HTTP 201
[Captures]
user_id: jsonpath "$.id"

GET {{base_url}}/users/{{user_id}}
Authorization: Bearer {{token}}
HTTP 200
[Asserts]
jsonpath "$.name" == "Test User"

DELETE {{base_url}}/users/{{user_id}}
Authorization: Bearer {{token}}
HTTP 204`} />
    </div>
  );
}
