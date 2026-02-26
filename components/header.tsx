import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Narrative Protocol"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-lg font-medium text-foreground">
              Narrative Protocol
            </span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <Link
              href="/docs"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="/docs/concepts"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Core Concepts
            </Link>
            <Link
              href="/docs/quickstart"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Getting Started
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden sm:inline-flex border-border bg-transparent hover:bg-card"
          >
            <Link href="https://unstablesky.xyz" target="_blank">
              Play Unstable Sky
              <ExternalLink className="ml-2 h-3 w-3" />
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="https://studio.narrativeprotocol.com" target="_blank">
              Open Studio
              <ExternalLink className="ml-2 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
