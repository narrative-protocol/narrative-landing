import React from "react"
import { cn } from "@/lib/utils"
import { Info, AlertTriangle, Lightbulb } from "lucide-react"

interface CalloutProps {
  type?: "info" | "warning" | "tip"
  title?: string
  children: React.ReactNode
}

const icons = {
  info: Info,
  warning: AlertTriangle,
  tip: Lightbulb,
}

const styles = {
  info: "border-primary/50 bg-primary/5",
  warning: "border-yellow-500/50 bg-yellow-500/5",
  tip: "border-green-500/50 bg-green-500/5",
}

const iconStyles = {
  info: "text-primary",
  warning: "text-yellow-500",
  tip: "text-green-500",
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const Icon = icons[type]

  return (
    <div
      className={cn(
        "my-6 rounded-lg border p-4",
        styles[type]
      )}
    >
      <div className="flex gap-3">
        <Icon className={cn("h-5 w-5 shrink-0 mt-0.5", iconStyles[type])} />
        <div>
          {title && (
            <p className="font-semibold text-foreground mb-1">{title}</p>
          )}
          <div className="text-sm text-muted-foreground [&>p]:mb-2 [&>p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
