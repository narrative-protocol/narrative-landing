import React from "react"
import Link from "next/link"
import Image from "next/image"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsMobileNav } from "@/components/docs-mobile-nav"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.svg" 
                alt="Narrative Protocol" 
                width={32} 
                height={32}
                className="h-8 w-8"
              />
              <span className="text-lg font-medium text-foreground">Narrative Protocol</span>
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm text-muted-foreground">Docs</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              className="hidden text-sm text-muted-foreground hover:text-foreground transition-colors md:block"
            >
              GitHub
            </Link>
            <DocsMobileNav />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar />
        <main className="flex-1 px-6 py-8 lg:px-12">
          <div className="mx-auto max-w-3xl">{children}</div>
        </main>
      </div>
    </div>
  )
}
