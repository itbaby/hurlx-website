import type { Metadata } from "next";
import { HighlightedCode } from "@/components/highlighted-code";

export const metadata: Metadata = {
  title: "Manual - hurlx",
  description: "Complete reference for the hurlx file format.",
};

export default function ManualPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>Manual</h1>
      <p>
        hurlx files use a simple plain text format. Every hurlx file is a valid
        Hurl file — the import/export extensions are optional additions.
      </p>

      <h2 id="request">Request</h2>
      <p>
        A request starts with an HTTP method followed by a URL. Supported
        methods: <code>GET</code>, <code>POST</code>, <code>PUT</code>,{" "}
        <code>DELETE</code>, <code>PATCH</code>, <code>HEAD</code>,{" "}
        <code>OPTIONS</code>.
      </p>
      <HighlightedCode code={`GET https://example.org/api/health

POST https://example.org/api/users
Content-Type: application/json
{
  "name": "John"
}`} />

      <h3>Headers</h3>
      <p>Headers follow the request line:</p>
      <HighlightedCode code={`GET https://example.org/news
User-Agent: Mozilla/5.0
Accept: application/json
Authorization: Bearer {{token}}`} />

      <h3>Query Parameters</h3>
      <HighlightedCode code={`GET https://example.org/search
[Query]
q: hurlx
page: 1
limit: 20`} />

      <h3>Request Body</h3>
      <p>JSON body:</p>
      <HighlightedCode code={`POST https://example.org/api/dogs
{
  "name": "Frieda",
  "breed": "Scottish Terrier"
}`} />
      <p>Form data:</p>
      <HighlightedCode code={`POST https://example.org/contact
[Form]
email: john@example.org
message: Hello`} />
      <p>Multipart:</p>
      <HighlightedCode code={`POST https://example.org/upload
[Multipart]
field1: value1
file: file,data.bin;`} />
      <p>Basic Auth:</p>
      <HighlightedCode code={`GET https://example.org/protected
[BasicAuth]
user: password`} />

      <h2 id="response">Response</h2>
      <p>
        Responses are optional. When present, hurlx checks the status code and
        can perform additional assertions.
      </p>
      <HighlightedCode code={`GET https://example.org
HTTP 200

GET https://example.org/redirect
HTTP 302`} />
      <p>
        Use a wildcard to skip status code checking:
      </p>
      <HighlightedCode code={`GET https://example.org
HTTP *`} />

      <h2 id="captures">Capturing Response</h2>
      <p>
        Capture values from responses to reuse in subsequent requests:
      </p>
      <HighlightedCode code={`POST https://api.example.com/login
[JSON]
{
  "username": "admin",
  "password": "secret"
}
HTTP 200
[Captures]
token: jsonpath "$.token"
user_id: header "X-User-Id"`} />

      <h3>Query Types</h3>
      <ul>
        <li><code>jsonpath</code> — Query JSON body with JSONPath</li>
        <li><code>xpath</code> — Query HTML/XML with XPath</li>
        <li><code>header</code> — Get a response header value</li>
        <li><code>cookie</code> — Get a cookie value</li>
        <li><code>regex</code> — Extract with a regular expression</li>
        <li><code>status</code> — HTTP status code</li>
        <li><code>url</code> — Final URL after redirects</li>
      </ul>

      <h2 id="asserts">Asserting Response</h2>
      <p>Assert response properties with predicates:</p>
      <HighlightedCode code={`GET https://api.example.com/user/1
HTTP 200
[Asserts]
jsonpath "$.name" == "John Doe"
jsonpath "$.age" > 18
jsonpath "$.email" matches "^[\\\\w.+-]+@.+\\\\..+$"
jsonpath "$.id" isInteger
jsonpath "$.active" isBoolean
jsonpath "$.created_at" isIsoDate
duration < 500`} />

      <h3>Predicates</h3>
      <ul>
        <li><code>==</code>, <code>!=</code> — Equality</li>
        <li><code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code> — Comparison</li>
        <li><code>contains</code>, <code>not contains</code> — Substring</li>
        <li><code>matches</code>, <code>not matches</code> — Regex</li>
        <li><code>exists</code>, <code>not exists</code> — Existence</li>
        <li><code>isInteger</code>, <code>isBoolean</code>, <code>isString</code>, <code>isFloat</code>, <code>isList</code>, <code>isObject</code>, <code>isUuid</code>, <code>isIsoDate</code> — Type checks</li>
        <li><code>count</code>, <code>not count</code> — Collection size</li>
      </ul>

      <h2 id="import-export">Import / Export</h2>
      <p>
        The key feature that distinguishes hurlx from Hurl. Export variables
        from one file and import them in another.
      </p>

      <h3>Export</h3>
      <p>Export captured or defined variables for use in other files:</p>
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
expires: jsonpath "$.expires_at"

export token
export expires`} />

      <h3>Export with Values</h3>
      <p>Define and export configuration values:</p>
      <HighlightedCode code={`# config.hurlx
export base_url = "https://api.example.com"
export api_version = "v1"`} />

      <h3>Import</h3>
      <p>Import exported variables from another file:</p>
      <HighlightedCode code={`# test.hurlx
import "auth.hurlx"
import "config.hurlx"

GET {{base_url}}/{{api_version}}/users
Authorization: Bearer {{token}}
HTTP 200
[Asserts]
jsonpath "$.length()" > 0`} />

      <h2 id="filters">Filters</h2>
      <p>Filters transform captured values:</p>
      <HighlightedCode code={`GET https://example.org
HTTP 200
[Captures]
name: jsonpath "$.user.name" regex "Mr\\. (.*)"
id: header "X-Request-Id"`} />

      <h2 id="templates">Templates</h2>
      <p>Use <code>{"{{}}"}</code> for variable interpolation:</p>
      <HighlightedCode code={`POST https://api.example.com/users
[JSON]
{
  "id": "{{uuid}}",
  "created_at": "{{date 'yyyy-MM-dd'}}",
  "api_key": "{{randomHex 32}}",
  "env": "{{getenv 'ENVIRONMENT'}}"
}
HTTP 201`} />

      <h3>Built-in Functions</h3>
      <ul>
        <li><code>{"{{uuid}}"}</code> — Generate a UUID</li>
        <li><code>{"{{date 'format'}}"}</code> — Current date</li>
        <li><code>{"{{randomHex N}}"}</code> — Random hex string</li>
        <li><code>{"{{getenv 'VAR'}}"}</code> — Environment variable</li>
        <li><code>{"{{now}}"}</code> — Current timestamp</li>
      </ul>
    </div>
  );
}
