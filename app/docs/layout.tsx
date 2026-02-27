import React from "react";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import { Header } from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pt-16">
        <DocsLayout
          tree={source.pageTree}
          {...source}
          themeSwitch={{ enabled: false }}
          nav={{ title: "Narrative Protocol" }}
          sidebar={{ enabled: true }}
        >
          {children}
        </DocsLayout>
      </div>
    </>
  );
}
