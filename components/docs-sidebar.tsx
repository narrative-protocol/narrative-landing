"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quickstart", href: "/docs/quickstart" },
      { title: "Endpoint & Environments", href: "/docs/environment" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Overview", href: "/docs/concepts" },
      { title: "Architecture", href: "/docs/concepts/architecture" },
      { title: "Events & Versioning", href: "/docs/concepts/event" },
      { title: "Deployments", href: "/docs/concepts/deployment" },
      { title: "Snapshotting", href: "/docs/concepts/snapshotting" },
      { title: "Entity Instances", href: "/docs/concepts/entity-instances" },
      { title: "AI Execution", href: "/docs/concepts/ai-execution" },
      { title: "On-chain Oracle", href: "/docs/concepts/on-chain-oracle" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "Authentication", href: "/docs/api-reference/authentication" },
      { title: "Worlds", href: "/docs/api-reference/worlds" },
      { title: "Entity Schemas", href: "/docs/api-reference/entity-schemas" },
      { title: "Events", href: "/docs/api-reference/events" },
      { title: "Deployments", href: "/docs/api-reference/deployments" },
      {
        title: "Entity Instances",
        href: "/docs/api-reference/entity-instances",
      },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border lg:block">
      <div className="sticky top-0 h-screen overflow-y-auto py-8 pr-4">
        <nav className="space-y-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <h4 className="mb-2 px-4 text-sm font-semibold text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-4 py-2 text-sm transition-colors",
                        pathname === item.href
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
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
    </aside>
  );
}
