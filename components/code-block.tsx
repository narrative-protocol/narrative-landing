"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

const customStyle = {
  ...oneDark,
  'pre[class*="language-"]': {
    ...oneDark['pre[class*="language-"]'],
    background: "transparent",
    margin: 0,
    padding: "1rem",
  },
  'code[class*="language-"]': {
    ...oneDark['code[class*="language-"]'],
    background: "transparent",
    fontSize: "0.875rem",
    lineHeight: "1.5",
  },
}

export function CodeBlock({ code, language = "json", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border">
      {title && (
        <div className="flex items-center justify-between border-b border-border bg-muted px-4 py-2">
          <span className="text-sm font-medium text-muted-foreground">
            {title}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 bg-transparent"
            onClick={copyToClipboard}
            aria-label="Copy code"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}
      <div className="overflow-x-auto bg-card">
        <SyntaxHighlighter
          language={language}
          style={customStyle}
          showLineNumbers={false}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
