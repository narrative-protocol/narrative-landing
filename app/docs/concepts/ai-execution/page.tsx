import { Callout } from "@/components/callout";
import { CodeBlock } from "@/components/code-block";
import Link from "next/link";

export default function AIExecutionPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">AI Event Execution</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Events in Narrative Protocol are executed by an AI engine that computes
        state changes based on world context, current state, event
        configuration, and user input.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Execution Flow
      </h2>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
        {`1. User calls POST /api/deployments/:id/execute
           │
           ▼
2. System gathers context
   ├── World definition (name, description, tags, promptSeed)
   ├── Current entity states
   └── Event version config (behaviorPrompt, schemas)
           │
           ▼
3. AI Engine processes (NEAR AI / DeepSeek-V3.1)
   ├── Understands world context
   ├── Reads current state
   ├── Applies behavior prompt
   └── Generates state changes + public result
           │
           ▼
4. System applies changes
   ├── Updates entity instances
   ├── Records in event history
   └── Pushes to Solana (if configured)
           │
           ▼
5. Returns response with stateChanges, result, attestation`}
      </pre>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Request Format
      </h2>

      <CodeBlock code={`POST /api/deployments/:id/execute`} language="http" />

      <CodeBlock
        code={`{
  "eventId": 1,
  "input": {
    "raceId": "RACE_2024_001",
    "trackCondition": "wet"
  }
}`}
        language="json"
        title="Request Body"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Response Format
      </h2>

      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "historyId": 42,
    "eventVersionId": 1,
    "stateChanges": {
      "horse:HORSE_1": { "wins": 6, "lastRace": "2024-06-15" },
      "horse:HORSE_2": { "stamina": 0.72 }
    },
    "result": {
      "winner": "HORSE_1",
      "time": "1:45.32",
      "conditions": "wet track"
    },
    "attestation": {
      "signature": "0x77057b...",
      "signing_address": "0x34B7Bc...",
      "signing_algo": "ecdsa",
      "text": "eda20c62..."
    },
    "solana": {
      "signature": "5xYz...",
      "eventRecordPda": "7abc..."
    }
  }
}`}
        language="json"
        title="Response"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        AI Context
      </h2>
      <p className="text-muted-foreground">
        The AI engine receives structured context:
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        World Context
      </h3>

      <CodeBlock
        code={`{
  "name": "Horse Racing",
  "description": "A horse racing simulation",
  "domainTags": ["sports", "simulation"],
  "promptSeed": "This world simulates realistic horse racing."
}`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Current State
      </h3>

      <CodeBlock
        code={`[
  {
    "schemaName": "horse",
    "instanceId": "HORSE_1",
    "state": { "name": "Midnight", "speed": 0.85, "wins": 5 }
  },
  {
    "schemaName": "horse",
    "instanceId": "HORSE_2",
    "state": { "name": "Thunder", "speed": 0.78, "wins": 2 }
  }
]`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Event Configuration
      </h3>

      <CodeBlock
        code={`{
  "name": "race_result",
  "behaviorPrompt": "Determine the race winner based on horse stats and conditions.",
  "inputSchema": { "raceId": "string", "trackCondition": "string" },
  "stateChangeSchema": { "horse": "partial" },
  "resultSchema": { "winner": "string", "time": "string" }
}`}
        language="json"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Attestation
      </h2>
      <p className="text-muted-foreground">
        Every AI response includes a cryptographic attestation from NEAR AI:
      </p>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Field
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
                signature
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              ECDSA signature (65 bytes hex)
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                signing_address
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Ethereum-style address (20 bytes hex)
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                signing_algo
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Algorithm used (
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                &quot;ecdsa&quot;
              </code>
              )
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                text
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Hash of signed content
            </td>
          </tr>
        </tbody>
      </table>

      <Callout type="info" title="Verifiable Execution">
        <p className="text-muted-foreground">
          The attestation allows independent verification that the response came
          from NEAR AI and the content hasn&apos;t been modified. This is
          crucial for auditability and trust in AI-driven state changes.
        </p>
      </Callout>

      <p className="text-muted-foreground">
        This allows independent verification that:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
        <li>The response came from NEAR AI</li>
        <li>The content hasn&apos;t been modified</li>
      </ol>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        State Change Application
      </h2>
      <p className="text-muted-foreground">
        After AI returns, the system applies changes based on{" "}
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
          stateChangeSchema
        </code>
        :
      </p>

      <CodeBlock
        code={`// stateChangeSchema
{ "horse": "partial", "race_log": "append" }

// AI returns
{
  "horse:HORSE_1": { "wins": 6 },
  "race_log:LOG_1": { "entries": ["HORSE_1 won"] }
}

// Applied:
// - horse:HORSE_1 gets wins merged (partial)
// - race_log:LOG_1 gets entries appended (append)`}
        language="json"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Error Handling
      </h2>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Scenario
            </th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Response
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">Event not bound</td>
            <td className="px-4 py-2 text-muted-foreground">400 Bad Request</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              Deployment locked
            </td>
            <td className="px-4 py-2 text-muted-foreground">400 Bad Request</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">AI unavailable</td>
            <td className="px-4 py-2 text-muted-foreground">
              500 Internal Server Error
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground">Invalid input</td>
            <td className="px-4 py-2 text-muted-foreground">400 Bad Request</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Related Concepts
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>
          <Link
            href="/docs/concepts/event"
            className="text-primary hover:underline"
          >
            Event Versioning
          </Link>{" "}
          - Behavior prompts and schemas
        </li>
        <li>
          <Link
            href="/docs/concepts/entity-instances"
            className="text-primary hover:underline"
          >
            Entity Instances
          </Link>{" "}
          - State change application
        </li>
        <li>
          <Link
            href="/docs/concepts/on-chain-oracle"
            className="text-primary hover:underline"
          >
            On-chain Oracle
          </Link>{" "}
          - On-chain recording
        </li>
      </ul>
    </article>
  );
}
