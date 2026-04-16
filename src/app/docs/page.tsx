import { HighlightedCode } from "@/components/highlighted-code";

export default function DocsPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>Documentation</h1>
      <p>
        <strong>hurlx</strong> is an enhanced version of{" "}
        <a href="https://hurl.dev" target="_blank" rel="noopener noreferrer">
          Hurl
        </a>
        , designed for modern API engineering workflows. It is fully compatible
        with all Hurl features while adding import/export syntax for modular
        testing.
      </p>

      <h2 id="installation">Installation</h2>
      <p>
        Current version: <strong>v1.0.9</strong>
      </p>
      <h3>Binary</h3>
      <HighlightedCode lang="bash" code={`# macOS (Apple Silicon)
curl -L https://github.com/itbaby/hurlx/releases/latest/download/hurlx-darwin-arm64 -o hurlx
chmod +x hurlx

# macOS (Intel)
curl -L https://github.com/itbaby/hurlx/releases/latest/download/hurlx-darwin-amd64 -o hurlx
chmod +x hurlx

# Linux
curl -L https://github.com/itbaby/hurlx/releases/latest/download/hurlx-linux-amd64 -o hurlx
chmod +x hurlx

# Windows
curl -L https://github.com/itbaby/hurlx/releases/latest/download/hurlx-windows-amd64.exe -o hurlx.exe`} />

      <h3>Go Install</h3>
      <HighlightedCode lang="bash" code="go install github.com/itbaby/hurlx/cli@latest" />

      <h3>Build from Source</h3>
      <HighlightedCode lang="bash" code={`git clone https://github.com/itbaby/hurlx.git
cd hurlx
go build -o hurlx ./cli`} />

      <h2 id="quick-start">Quick Start</h2>
      <p>
        Create a file named <code>hello.hurlx</code>:
      </p>
      <HighlightedCode code={`GET https://example.com
HTTP 200`} />
      <p>Run it:</p>
      <HighlightedCode lang="bash" code={`$ hurlx hello.hurlx
$ hurlx --test hello.hurlx
$ hurlx --verbose hello.hurlx`} />

      <h2>Using Variables</h2>
      <HighlightedCode lang="bash" code={`$ hurlx --variable host=api.example.com api.hurlx
$ hurlx --variables-file env.json api.hurlx`} />

      <h2>What&apos;s Next?</h2>
      <ul>
        <li>
          <a href="/docs/manual">Read the full manual</a> for all hurlx
          file format details
        </li>
        <li>
          <a href="/docs/tutorial">Follow the tutorial</a> to learn
          step-by-step
        </li>
        <li>
          <a href="/docs/samples">Browse samples</a> for common patterns
        </li>
      </ul>
    </div>
  );
}
