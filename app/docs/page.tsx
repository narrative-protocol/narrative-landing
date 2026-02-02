import Link from "next/link"
import { Callout } from "@/components/callout"
import { ArrowRight } from "lucide-react"

export default function DocsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Introduction</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Welcome to the NPC (Narrative Play Coordinator) documentation. NPC is a
        comprehensive specification for AI-driven narrative in games.
      </p>

      <Callout type="info" title="What is NPC?">
        <p>
          NPC defines the architecture for creating dynamic, AI-powered narrative
          experiences. It provides a structured approach to world-building, story
          management, and NPC behavior that enables coherent, engaging storytelling.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Overview</h2>
      <p className="text-muted-foreground">
        The NPC system consists of several interconnected components that work
        together to create immersive narrative experiences:
      </p>

      <div className="grid gap-4 mt-6 not-prose">
        <Link
          href="/docs/world-charter"
          className="flex items-center justify-between rounded-lg border border-border p-4 hover:border-primary/50 transition-colors group"
        >
          <div>
            <h3 className="font-semibold text-foreground">World Charter</h3>
            <p className="text-sm text-muted-foreground">
              Foundation of your narrative universe
            </p>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>

        <Link
          href="/docs/narrative-frames"
          className="flex items-center justify-between rounded-lg border border-border p-4 hover:border-primary/50 transition-colors group"
        >
          <div>
            <h3 className="font-semibold text-foreground">Narrative Frames</h3>
            <p className="text-sm text-muted-foreground">
              Guide story trajectories with flexible arcs
            </p>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>

        <Link
          href="/docs/entities"
          className="flex items-center justify-between rounded-lg border border-border p-4 hover:border-primary/50 transition-colors group"
        >
          <div>
            <h3 className="font-semibold text-foreground">Entities & Context</h3>
            <p className="text-sm text-muted-foreground">
              Characters, locations, and objects
            </p>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>

        <Link
          href="/docs/actions"
          className="flex items-center justify-between rounded-lg border border-border p-4 hover:border-primary/50 transition-colors group"
        >
          <div>
            <h3 className="font-semibold text-foreground">Actions</h3>
            <p className="text-sm text-muted-foreground">
              Dynamic NPC behaviors and world interactions
            </p>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Key Principles
      </h2>
      <ul className="text-muted-foreground space-y-2 mt-4">
        <li>
          <strong className="text-foreground">Consistency</strong> - The World
          Charter ensures all narrative elements remain coherent
        </li>
        <li>
          <strong className="text-foreground">Flexibility</strong> - Narrative
          Frames allow stories to adapt while maintaining direction
        </li>
        <li>
          <strong className="text-foreground">Safety</strong> - Guardrails
          enforce rules and prevent inappropriate content
        </li>
        <li>
          <strong className="text-foreground">Richness</strong> - Entity context
          maintains deep state for meaningful interactions
        </li>
      </ul>

      <div className="mt-8 flex gap-4 not-prose">
        <Link
          href="/docs/getting-started"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/docs/core-concepts"
          className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
        >
          Core Concepts
        </Link>
      </div>
    </article>
  )
}
