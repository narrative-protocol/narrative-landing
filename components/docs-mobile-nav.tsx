"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight } from "lucide-react"

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quick Start", href: "/docs/getting-started" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Overview", href: "/docs/core-concepts" },
      { title: "World Charter", href: "/docs/world-charter" },
      { title: "Narrative Frames", href: "/docs/narrative-frames" },
      { title: "Entities & Context", href: "/docs/entities" },
    ],
  },
  {
    title: "NPC System",
    items: [
      { title: "Actions", href: "/docs/actions" },
      { title: "NPC Output", href: "/docs/output" },
      { title: "Rules & Guardrails", href: "/docs/guardrails" },
    ],
  },
]

export function DocsMobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-transparent"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background">
          <nav className="p-6 space-y-6">
            {navigation.map((section) => (
              <div key={section.title}>
                <h4 className="mb-2 text-sm font-semibold text-foreground">
                  {section.title}
                </h4>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-4 py-2 text-sm transition-colors",
                          pathname === item.href
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {pathname === item.href && (
                          <ChevronRight className="h-3 w-3" />
                        )}
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
