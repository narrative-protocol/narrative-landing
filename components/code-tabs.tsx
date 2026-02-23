"use client"

import { useState } from "react"
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import * as Tabs from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

interface CodeExample {
  curl: string
  javascript: string
  python: string
}

interface CodeTabsProps {
  examples: CodeExample
  response?: string
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

export function CodeTabs({ examples, response, title }: CodeTabsProps) {
  const [copied, setCopied] = useState(false)
  const [showResponse, setShowResponse] = useState(false)
  const [activeTab, setActiveTab] = useState("curl")

  const copyToClipboard = async (code: string) => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getCurrentCode = () => {
    switch (activeTab) {
      case "javascript":
        return examples.javascript
      case "python":
        return examples.python
      default:
        return examples.curl
    }
  }

  const getLanguage = () => {
    switch (activeTab) {
      case "javascript":
        return "javascript"
      case "python":
        return "python"
      default:
        return "bash"
    }
  }

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border">
      <Tabs.Root defaultValue="curl" onValueChange={setActiveTab}>
        <div className="flex items-center justify-between border-b border-border bg-muted">
          <Tabs.List className="flex">
            <Tabs.Trigger
              value="curl"
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50 focus:outline-none",
                activeTab === "curl"
                  ? "border-b-2 border-primary text-foreground bg-muted"
                  : "text-muted-foreground"
              )}
            >
              curl
            </Tabs.Trigger>
            <Tabs.Trigger
              value="javascript"
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50 focus:outline-none",
                activeTab === "javascript"
                  ? "border-b-2 border-primary text-foreground bg-muted"
                  : "text-muted-foreground"
              )}
            >
              JavaScript
            </Tabs.Trigger>
            <Tabs.Trigger
              value="python"
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50 focus:outline-none",
                activeTab === "python"
                  ? "border-b-2 border-primary text-foreground bg-muted"
                  : "text-muted-foreground"
              )}
            >
              Python
            </Tabs.Trigger>
          </Tabs.List>
          <div className="flex items-center gap-2 pr-2">
            {title && (
              <span className="text-sm font-medium text-muted-foreground">
                {title}
              </span>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 bg-transparent"
              onClick={() => copyToClipboard(getCurrentCode())}
              aria-label="Copy code"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        <Tabs.Content value="curl">
          <div className="overflow-x-auto bg-card">
            <SyntaxHighlighter
              language="bash"
              style={customStyle}
              showLineNumbers={false}
            >
              {examples.curl}
            </SyntaxHighlighter>
          </div>
        </Tabs.Content>
        <Tabs.Content value="javascript">
          <div className="overflow-x-auto bg-card">
            <SyntaxHighlighter
              language="javascript"
              style={customStyle}
              showLineNumbers={false}
            >
              {examples.javascript}
            </SyntaxHighlighter>
          </div>
        </Tabs.Content>
        <Tabs.Content value="python">
          <div className="overflow-x-auto bg-card">
            <SyntaxHighlighter
              language="python"
              style={customStyle}
              showLineNumbers={false}
            >
              {examples.python}
            </SyntaxHighlighter>
          </div>
        </Tabs.Content>
      </Tabs.Root>

      {response && (
        <div className="border-t border-border">
          <button
            onClick={() => setShowResponse(!showResponse)}
            className="flex w-full items-center justify-between px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/50"
          >
            <span>Expected Response</span>
            {showResponse ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
          {showResponse && (
            <div className="overflow-x-auto bg-card border-t border-border">
              <SyntaxHighlighter
                language="json"
                style={customStyle}
                showLineNumbers={false}
              >
                {response}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
