import { Callout } from "@/components/callout";
import Link from "next/link";

export default function DocsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Narrative Protocol</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Narrative Protocol is a <strong>World State &amp; Event Engine</strong>{" "}
        that enables you to define, manage, and execute complex world
        simulations with versioned events, AI-driven execution, and on-chain
        verification.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Key Concepts
      </h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Blueprint vs Live
      </h3>
      <p className="text-muted-foreground">
        The system separates <strong>design-time</strong> (World/Blueprint) from{" "}
        <strong>runtime</strong> (Deployment/Live):
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>
          <strong>World (Blueprint)</strong>: Define your entity schemas and
          events with versioned behavior
        </li>
        <li>
          <strong>Deployment (Live)</strong>: Create instances, execute events
          via AI, and track history
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Core Components
      </h3>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Component
            </th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Layer
            </th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">Worlds</td>
            <td className="px-4 py-2 text-muted-foreground">Blueprint</td>
            <td className="px-4 py-2 text-muted-foreground">
              Container for all definitions (title, tags, prompt seed)
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">Entity Schemas</td>
            <td className="px-4 py-2 text-muted-foreground">Blueprint</td>
            <td className="px-4 py-2 text-muted-foreground">
              Define the shape of entities (e.g., Horse, Track, Jockey)
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">Events</td>
            <td className="px-4 py-2 text-muted-foreground">Blueprint</td>
            <td className="px-4 py-2 text-muted-foreground">
              Define what can happen (with versioned behavior)
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">Deployments</td>
            <td className="px-4 py-2 text-muted-foreground">Live</td>
            <td className="px-4 py-2 text-muted-foreground">
              Running instance of a world with its own state
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground">
              Entity Instances
            </td>
            <td className="px-4 py-2 text-muted-foreground">Live</td>
            <td className="px-4 py-2 text-muted-foreground">
              Actual entities (e.g., HORSE_1, HORSE_2)
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Features</h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Event Versioning
      </h3>
      <p className="text-muted-foreground">
        Events have versions that become immutable once published, ensuring
        reproducibility and auditability.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        AI Event Execution
      </h3>
      <p className="text-muted-foreground">
        Events are executed by an AI engine (NEAR AI / DeepSeek-V3.1) that
        computes state changes based on world context, current state, and
        behavior prompts.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Deployment Modes
      </h3>
      <p className="text-muted-foreground">
        Deployments can be{" "}
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
          upgradable
        </code>{" "}
        (default) or{" "}
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">locked</code>{" "}
        (irreversible freeze for archival).
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Snapshotting
      </h3>
      <p className="text-muted-foreground">
        Create new deployments by copying state from existing ones - useful for
        forking simulations or creating test environments.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Cryptographic Attestation
      </h3>
      <p className="text-muted-foreground">
        Every AI response includes a cryptographic attestation for independent
        verification.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Solana On-chain Oracle
      </h3>
      <p className="text-muted-foreground">
        Event execution records are pushed to Solana for immutable on-chain
        storage and verification.
      </p>

      <Callout type="tip" title="Quick Links">
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>
            <Link
              href="/docs/quickstart"
              className="text-primary hover:underline"
            >
              Quickstart Guide
            </Link>{" "}
            - Get running in 5 minutes
          </li>
          <li>
            <Link
              href="/docs/concepts"
              className="text-primary hover:underline"
            >
              Core Concepts
            </Link>{" "}
            - Understand the architecture
          </li>
          <li>
            <Link
              href="/docs/api-reference/authentication"
              className="text-primary hover:underline"
            >
              API Reference
            </Link>{" "}
            - Complete API documentation
          </li>
        </ul>
      </Callout>
    </article>
  );
}
