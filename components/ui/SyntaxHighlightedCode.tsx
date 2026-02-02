"use client"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

interface SyntaxHighlightedCodeProps {
  code: string
  language?: string
}

// Custom theme that extends oneDark with design system colors
const customTheme = {
  ...oneDark,
  'code[class*="language-"]': {
    ...oneDark['code[class*="language-"]'],
    color: "hsl(var(--foreground))",
    background: "hsl(var(--card))",
  },
  'pre[class*="language-"]': {
    ...oneDark['pre[class*="language-"]'],
    background: "hsl(var(--card))",
  },
  '.token.string': {
    ...oneDark['.token.string'],
    color: "#E0A94F", // Ritual Amber for strings
  },
  '.token.property': {
    ...oneDark['.token.property'],
    color: "#A9AFBA", // Secondary foreground for properties
  },
  '.token.boolean': {
    ...oneDark['.token.boolean'],
    color: "#E0A94F", // Ritual Amber for booleans
  },
  '.token.number': {
    ...oneDark['.token.number'],
    color: "#E0A94F", // Ritual Amber for numbers
  },
  '.token.punctuation': {
    ...oneDark['.token.punctuation'],
    color: "hsl(var(--muted-foreground))",
  },
}

export function SyntaxHighlightedCode({ code, language = "json" }: SyntaxHighlightedCodeProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={customTheme}
      customStyle={{
        margin: 0,
        padding: "1rem",
        background: "hsl(var(--card))",
        fontSize: "0.875rem",
        lineHeight: "1.5",
        borderRadius: 0,
      }}
      codeTagProps={{
        style: {
          color: "hsl(var(--foreground))",
        },
      }}
    >
      {code}
    </SyntaxHighlighter>
  )
}

