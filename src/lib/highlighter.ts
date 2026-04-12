import {
  createHighlighter,
  type Highlighter,
  type LanguageInput,
  type ThemeInput,
} from "shiki";

const hurlxGrammar: LanguageInput = {
  name: "hurlx",
  scopeName: "source.hurlx",
  displayName: "hurlx",
  patterns: [
    { name: "comment.line.number-sign.hurlx", match: "#.*$" },
    {
      name: "keyword.control.hurlx",
      match:
        "\\b(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS)\\b",
    },
    {
      name: "keyword.other.hurlx",
      match:
        "\\b(HTTP|HTTP/1\\.0|HTTP/1\\.1|HTTP/2|HTTP/3)\\b",
    },
    { name: "constant.numeric.hurlx", match: "\\b\\d{3}\\b" },
    {
      name: "keyword.control.section.hurlx",
      match:
        "^\\[(Assertions|Asserts|Captures|Query|Form|Multipart|BasicAuth|Cookies|Options|JSON)\\]",
    },
    { name: "keyword.other.import-export.hurlx", match: "\\b(import|export)\\b" },
    {
      name: "support.function.query.hurlx",
      match:
        "\\b(jsonpath|xpath|header|cookie|regex|status|url|duration|sha256|bytes|certificate|ip)\\b",
    },
    {
      name: "support.function.type.hurlx",
      match:
        "\\b(isInteger|isBoolean|isString|isFloat|isList|isObject|isUuid|isIsoDate)\\b",
    },
    {
      name: "keyword.operator.predicate.hurlx",
      match:
        "(==|!=|>=|<=|>|<|not\\s+exists|exists|not\\s+contains|contains|not\\s+matches|matches|not\\s+count|count|not\\s+isIpv6|isIpv6|startsWith|endsWith)",
    },
    { name: "string.quoted.double.hurlx", begin: '"', end: '"' },
    { name: "string.quoted.single.hurlx", begin: "'", end: "'" },
    {
      name: "variable.parameter.template.hurlx",
      match: "\\{\\{[^}]+\\}\\}",
    },
    {
      name: "string.unquoted.url.hurlx",
      match: "https?://[^\\s]+",
    },
    {
      name: "entity.name.tag.header.hurlx",
      match:
        "^[A-Za-z][A-Za-z0-9-]*(?=:)",
    },
    { name: "constant.language.boolean.hurlx", match: "\\b(true|false|null)\\b" },
  ],
  repository: {},
};

const darkTheme: ThemeInput = {
  name: "hurlx-dark",
  displayName: "hurlx dark",
  settings: [
    { scope: ["comment.line.number-sign.hurlx"], settings: { foreground: "#6b7280", fontStyle: "italic" } },
    { scope: ["keyword.control.hurlx"], settings: { foreground: "#f472b6" } },
    { scope: ["keyword.other.hurlx"], settings: { foreground: "#f472b6" } },
    { scope: ["constant.numeric.hurlx"], settings: { foreground: "#fbbf24" } },
    { scope: ["keyword.control.section.hurlx"], settings: { foreground: "#818cf8", fontStyle: "bold" } },
    { scope: ["keyword.other.import-export.hurlx"], settings: { foreground: "#c084fc" } },
    { scope: ["support.function.query.hurlx"], settings: { foreground: "#67e8f9" } },
    { scope: ["support.function.type.hurlx"], settings: { foreground: "#67e8f9" } },
    { scope: ["keyword.operator.predicate.hurlx"], settings: { foreground: "#fdba74" } },
    { scope: ["string.quoted.double.hurlx", "string.quoted.single.hurlx"], settings: { foreground: "#a5f3a4" } },
    { scope: ["variable.parameter.template.hurlx"], settings: { foreground: "#fbbf24", fontStyle: "italic" } },
    { scope: ["string.unquoted.url.hurlx"], settings: { foreground: "#93c5fd" } },
    { scope: ["entity.name.tag.header.hurlx"], settings: { foreground: "#c4b5fd" } },
    { scope: ["constant.language.boolean.hurlx"], settings: { foreground: "#fbbf24" } },
  ],
  type: "dark",
};

const lightTheme: ThemeInput = {
  name: "hurlx-light",
  displayName: "hurlx light",
  settings: [
    { scope: ["comment.line.number-sign.hurlx"], settings: { foreground: "#6b7280", fontStyle: "italic" } },
    { scope: ["keyword.control.hurlx"], settings: { foreground: "#db2777" } },
    { scope: ["keyword.other.hurlx"], settings: { foreground: "#db2777" } },
    { scope: ["constant.numeric.hurlx"], settings: { foreground: "#b45309" } },
    { scope: ["keyword.control.section.hurlx"], settings: { foreground: "#4f46e5", fontStyle: "bold" } },
    { scope: ["keyword.other.import-export.hurlx"], settings: { foreground: "#7c3aed" } },
    { scope: ["support.function.query.hurlx"], settings: { foreground: "#0891b2" } },
    { scope: ["support.function.type.hurlx"], settings: { foreground: "#0891b2" } },
    { scope: ["keyword.operator.predicate.hurlx"], settings: { foreground: "#c2410c" } },
    { scope: ["string.quoted.double.hurlx", "string.quoted.single.hurlx"], settings: { foreground: "#15803d" } },
    { scope: ["variable.parameter.template.hurlx"], settings: { foreground: "#b45309", fontStyle: "italic" } },
    { scope: ["string.unquoted.url.hurlx"], settings: { foreground: "#1d4ed8" } },
    { scope: ["entity.name.tag.header.hurlx"], settings: { foreground: "#6d28d9" } },
    { scope: ["constant.language.boolean.hurlx"], settings: { foreground: "#b45309" } },
  ],
  type: "light",
};

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [darkTheme, lightTheme],
      langs: [hurlxGrammar, "bash"],
    }).then(async (h) => {
      await h.loadLanguage("json");
      return h;
    });
  }
  return highlighterPromise;
}

export async function highlightHurlx(code: string): Promise<string> {
  const h = await getHighlighter();
  return h.codeToHtml(code.trim(), {
    lang: "hurlx",
    themes: { dark: "hurlx-dark", light: "hurlx-light" },
  });
}

export async function highlightBash(code: string): Promise<string> {
  const h = await getHighlighter();
  return h.codeToHtml(code.trim(), {
    lang: "bash",
    themes: { dark: "hurlx-dark", light: "hurlx-light" },
  });
}

export async function highlightJson(code: string): Promise<string> {
  const h = await getHighlighter();
  return h.codeToHtml(code.trim(), {
    lang: "json",
    themes: { dark: "hurlx-dark", light: "hurlx-light" },
  });
}
