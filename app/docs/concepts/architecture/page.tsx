import { CodeBlock } from "@/components/code-block";
import Link from "next/link";

export default function ArchitecturePage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Architecture</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Narrative Protocol uses a two-layer architecture that separates{" "}
        <strong>design-time</strong> definitions from <strong>runtime</strong>{" "}
        state.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Blueprint Layer (Design-Time)
      </h2>
      <p className="text-muted-foreground">
        The Blueprint layer contains definitions that describe the structure and
        behavior of your world. These don&apos;t hold runtime data.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Worlds</h3>
      <p className="text-muted-foreground">
        Top-level containers that group related definitions together.
      </p>

      <CodeBlock
        code={`{
  "name": "Horse Racing",
  "description": "A horse racing simulation",
  "domainTags": ["sports", "simulation"],
  "promptSeed": "This world simulates realistic horse racing events."
}`}
        language="json"
        title="World Definition"
      />

      <p className="text-muted-foreground">
        <strong>Fields:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">name</code> -
          Human-readable identifier
        </li>
        <li>
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
            description
          </code>{" "}
          - What this world simulates
        </li>
        <li>
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
            domainTags
          </code>{" "}
          - Categories for organization
        </li>
        <li>
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
            promptSeed
          </code>{" "}
          - Base context for AI-driven event resolution
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Entity Schemas
      </h3>
      <p className="text-muted-foreground">
        Define the shape of entities. They are templates, not data containers.
      </p>

      <CodeBlock
        code={`{
  "name": "horse",
  "description": "A racing horse",
  "attributeDefinitions": [
    { "name": "speed_rating", "type": "float", "defaultValue": 0.5 },
    { "name": "stamina", "type": "float", "defaultValue": 0.5 }
  ]
}`}
        language="json"
        title="Entity Schema"
      />

      <p className="text-muted-foreground">
        <strong>Attribute Types:</strong>
      </p>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Type
            </th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                string
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">Text values</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                integer
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">Whole numbers</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                float
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Floating-point numbers
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                boolean
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              True/false values
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                json
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Complex nested data
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold text-foreground mt-6">Events</h3>
      <p className="text-muted-foreground">
        Define what can happen in the world. Events have versioned behavior.
      </p>

      <CodeBlock
        code={`{
  "name": "race_result",
  "description": "Resolves a race",
  "firstVersion": {
    "inputSchema": { "raceId": "string" },
    "stateChangeSchema": { "horse": "partial" },
    "behaviorPrompt": "Determine the winner based on horse stats"
  }
}`}
        language="json"
        title="Event Definition"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Live Layer (Runtime)
      </h2>
      <p className="text-muted-foreground">
        The Live layer contains actual runtime state and execution records.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Deployments
      </h3>
      <p className="text-muted-foreground">
        Running instances of a world with their own isolated state.
      </p>

      <CodeBlock
        code={`{
  "worldId": 1,
  "name": "Season 1",
  "mode": "upgradable",
  "firstBinding": { "eventId": 1, "eventVersionId": 1 }
}`}
        language="json"
        title="Deployment"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Entity Instances
      </h3>
      <p className="text-muted-foreground">
        Actual data belonging to a deployment. Multiple instances can share a
        schema.
      </p>

      <CodeBlock
        code={`{
  "deploymentId": 1,
  "entitySchemaId": 1,
  "instanceId": "HORSE_1",
  "state": { "name": "Midnight Comet", "speed_rating": 0.85 }
}`}
        language="json"
        title="Entity Instance"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Event Bindings
      </h3>
      <p className="text-muted-foreground">
        Connect deployments to specific event versions.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Event History
      </h3>
      <p className="text-muted-foreground">
        Records of every event execution with inputs, outputs, and attestations.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Relationship Diagram
      </h2>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground">
        {`Blueprint Layer                 Live Layer
─────────────────              ─────────────────
World ──────────────────────── Deployment (targetChain)
  │                               │
  ├── Entity Schema ────────── Entity Instance
  │     └── Attribute             └── state (JSON)
  │
  └── Event ───────────────── Event Binding
        └── Event Version         └── History Record
                                        ├── Solana Record
                                        └── NEAR Record`}
      </pre>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Design Principles
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
        <li>
          <strong>Separation of Concerns</strong>: Definitions (what can exist)
          vs State (what does exist)
        </li>
        <li>
          <strong>Immutability</strong>: Published versions and locked
          deployments cannot change
        </li>
        <li>
          <strong>Auditability</strong>: Full history with cryptographic
          attestations
        </li>
        <li>
          <strong>Verifiability</strong>: On-chain records for independent
          verification
        </li>
      </ol>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Related Concepts
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>
          <Link
            href="/docs/concepts/event"
            className="text-primary hover:underline"
          >
            Events &amp; Versioning
          </Link>
        </li>
        <li>
          <Link
            href="/docs/concepts/deployment"
            className="text-primary hover:underline"
          >
            Deployments
          </Link>
        </li>
        <li>
          <Link
            href="/docs/concepts/entity-instances"
            className="text-primary hover:underline"
          >
            Entity Instances
          </Link>
        </li>
        <li>
          <Link
            href="/docs/concepts/on-chain-oracle"
            className="text-primary hover:underline"
          >
            On-chain Oracle
          </Link>
        </li>
      </ul>
    </article>
  );
}
