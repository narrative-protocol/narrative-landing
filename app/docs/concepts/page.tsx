import { Callout } from "@/components/callout";
import Link from "next/link";

export default function ConceptsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Core Concepts</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Narrative Protocol is a <strong>World State &amp; Event Engine</strong>{" "}
        that manages complex simulations with versioned events, immutable state
        transitions, and AI-driven event execution.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        System Architecture
      </h2>
      <p className="text-muted-foreground">
        The system uses a two-layer architecture:
      </p>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Layer
            </th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Purpose
            </th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Components
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground font-semibold">
              Blueprint
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Design-time definitions
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Worlds, Entity Schemas, Events, Event Versions
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground font-semibold">
              Live
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Runtime state &amp; execution
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Deployments, Entity Instances, Event Bindings, History
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Key Concepts
      </h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        <Link
          href="/docs/concepts/architecture"
          className="text-primary hover:underline"
        >
          Architecture
        </Link>
      </h3>
      <p className="text-muted-foreground">
        Blueprint vs Live layer separation. How design-time definitions become
        runtime instances.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        <Link
          href="/docs/concepts/event"
          className="text-primary hover:underline"
        >
          Event
        </Link>
      </h3>
      <p className="text-muted-foreground">
        Events are the actions, triggers, or occurrences that drive state
        changes in your simulation.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        <Link
          href="/docs/concepts/deployment"
          className="text-primary hover:underline"
        >
          Deployments
        </Link>
      </h3>
      <p className="text-muted-foreground">
        Running instances of a world with isolated state and on-chain oracle
        support.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        <Link
          href="/docs/concepts/snapshotting"
          className="text-primary hover:underline"
        >
          Snapshotting
        </Link>
      </h3>
      <p className="text-muted-foreground">
        Create new deployments by copying state from existing ones.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        <Link
          href="/docs/concepts/entity-instances"
          className="text-primary hover:underline"
        >
          Entity Instances
        </Link>
      </h3>
      <p className="text-muted-foreground">
        Multiple instances per schema, each with their own state.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        <Link
          href="/docs/concepts/ai-execution"
          className="text-primary hover:underline"
        >
          AI Event Execution
        </Link>
      </h3>
      <p className="text-muted-foreground">
        Events are executed by an AI engine that computes state changes.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        <Link
          href="/docs/concepts/on-chain-oracle"
          className="text-primary hover:underline"
        >
          On-chain Oracle
        </Link>
      </h3>
      <p className="text-muted-foreground">
        Event records are pushed to Solana and/or NEAR for on-chain
        immutability.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Data Flow</h2>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground">
        {`World (Blueprint)
├── Entity Schemas (define structure)
│   └── Attribute Definitions
└── Events (define behavior)
    └── Event Versions (immutable after publish)

Deployment (Live, targetChain: solana|near|both|none)
├── Entity Instances (actual data)
├── Event Bindings (which versions to use)
└── Event History (execution records)
    ├── Solana Records (on-chain verification)
    └── NEAR Records (on-chain verification)`}
      </pre>

      <Callout type="info" title="Getting Started">
        <p className="text-muted-foreground">
          New to Narrative Protocol? Start with the{" "}
          <Link
            href="/docs/quickstart"
            className="text-primary hover:underline"
          >
            Quickstart Guide
          </Link>{" "}
          to get running in 5 minutes.
        </p>
      </Callout>
    </article>
  );
}
