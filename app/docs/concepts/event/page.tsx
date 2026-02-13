import { CodeBlock } from "@/components/code-block"
import Link from "next/link"

export default function EventPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Events &amp; Versioning</h1>

      <h2 className="text-2xl font-semibold text-foreground mt-8">What is an Event?</h2>
      <p className="text-muted-foreground">
        An <strong>Event</strong> in Narrative Studio defines something that can happen in your world. Events are the actions, triggers, or occurrences that drive state changes in your simulation.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Event Purpose</h3>
      <p className="text-muted-foreground">
        Events describe behavior, not data. They answer the question: &quot;What can happen in this world?&quot;
      </p>
      <p className="text-muted-foreground">Examples:</p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">race_result</code> - A horse race is completed</li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">training_session</code> - A horse undergoes training</li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">injury_occurred</code> - A horse gets injured</li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">weather_change</code> - Weather conditions shift</li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">Event Structure</h3>
      <p className="text-muted-foreground">
        Each event belongs to a world and has:
      </p>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">Field</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">name</code></td>
            <td className="px-4 py-2 text-muted-foreground">Unique identifier within the world</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">description</code></td>
            <td className="px-4 py-2 text-muted-foreground">Human-readable explanation</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">versions</code></td>
            <td className="px-4 py-2 text-muted-foreground">One or more versioned implementations</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold text-foreground mt-6">Creating an Event</h3>
      <p className="text-muted-foreground">
        Events are always created with their first version:
      </p>
      
      <CodeBlock
        code={`POST /api/events`}
        language="http"
      />
      
      <CodeBlock
        code={`{
  "worldId": 1,
  "name": "race_result",
  "description": "Resolves a race and updates horse statistics",
  "firstVersion": {
    "inputSchema": { "raceId": "string" },
    "reads": [1, 2],
    "stateChangeSchema": { "horse": "partial" },
    "resultSchema": { "winner": "string", "time": "string" },
    "behaviorPrompt": "Determine the race winner based on horse stats."
  }
}`}
        language="json"
        title="Request Body"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Event Versioning</h2>
      <p className="text-muted-foreground">
        Events have versions that become immutable once published. This ensures reproducibility and auditability of state changes over time.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Why Versioning?</h3>
      <p className="text-muted-foreground">
        Event behavior may need to change over time:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Fix bugs in behavior prompts</li>
        <li>Add new input fields</li>
        <li>Adjust state change logic</li>
      </ul>
      <p className="text-muted-foreground">
        Without versioning, changing an event would make historical executions impossible to reproduce.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Version Lifecycle</h3>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground">
{`Version 1 (draft)
    │
    ▼ [publish]
Version 1 (published) ─── immutable, bound to deployments
    │
    ▼ [create new version]
Version 2 (draft)
    │
    ▼ [publish]
Version 2 (published) ─── immutable, can be bound`}
      </pre>

      <h3 className="text-xl font-semibold text-foreground mt-6">Draft State</h3>
      <p className="text-muted-foreground">
        New versions start as drafts. You can modify:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">inputSchema</code> - What data the event accepts</li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">reads</code> - Which entity schemas to read</li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">stateChangeSchema</code> - How state changes (partial/full/append)</li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">resultSchema</code> - What gets returned publicly</li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">behaviorPrompt</code> - AI resolution instructions</li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">Published State</h3>
      <p className="text-muted-foreground">
        Once published via <code className="bg-muted px-1.5 py-0.5 rounded text-sm">POST /api/event-versions/:id/publish</code>:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Version becomes <strong>immutable</strong></li>
        <li>Can be bound to deployments</li>
        <li>Cannot be deleted</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Version Fields</h2>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">Field</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Type</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">inputSchema</code></td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">Expected input fields and types</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">reads</code></td>
            <td className="px-4 py-2 text-muted-foreground">integer[]</td>
            <td className="px-4 py-2 text-muted-foreground">Entity schema IDs the AI can read</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">stateChangeSchema</code></td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">Per-schema change mode</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">resultSchema</code></td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">Public output structure</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">behaviorPrompt</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">Instructions for AI resolution</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold text-foreground mt-6">State Change Modes</h3>
      <p className="text-muted-foreground">
        The <code className="bg-muted px-1.5 py-0.5 rounded text-sm">stateChangeSchema</code> maps entity schema names to change modes:
      </p>
      
      <CodeBlock
        code={`{
  "horse": "partial",
  "race_record": "append"
}`}
        language="json"
        title="State Change Schema"
      />

      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">Mode</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Behavior</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">partial</code></td>
            <td className="px-4 py-2 text-muted-foreground">Merge changes into existing state (default)</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">full</code></td>
            <td className="px-4 py-2 text-muted-foreground">Replace entire state</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">append</code></td>
            <td className="px-4 py-2 text-muted-foreground">Append to arrays, merge objects</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Binding Versions to Deployments</h2>
      <p className="text-muted-foreground">
        Deployments bind to specific versions. Multiple deployments can use different versions:
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground">
{`Event: "race_result"
├── Version 1 (published) ─── bound to "Production"
├── Version 2 (published) ─── bound to "Staging"
└── Version 3 (draft) ─── not yet published`}
      </pre>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Creating a New Version</h2>
      
      <CodeBlock
        code={`POST /api/event-versions`}
        language="http"
      />
      
      <CodeBlock
        code={`{
  "eventId": 1,
  "inputSchema": { "raceId": "string", "weather": "string" },
  "reads": [1, 2],
  "stateChangeSchema": { "horse": "partial" },
  "behaviorPrompt": "Consider weather conditions when determining the winner."
}`}
        language="json"
        title="Request Body"
      />

      <p className="text-muted-foreground">
        Version numbers auto-increment based on existing versions.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Best Practices</h2>
      <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
        <li><strong>Test drafts thoroughly</strong> before publishing</li>
        <li><strong>Document changes</strong> in version descriptions</li>
        <li><strong>Use staging deployments</strong> to test new versions</li>
        <li><strong>Never rely on modifying published versions</strong> - create new ones instead</li>
      </ol>

      <h2 className="text-2xl font-semibold text-foreground mt-8">API Reference</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">POST /api/events</code> - Create event with first version</li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">POST /api/event-versions</code> - Create additional versions</li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">PUT /api/event-versions/:id</code> - Update draft version</li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">POST /api/event-versions/:id/publish</code> - Publish (make immutable)</li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">DELETE /api/event-versions/:id</code> - Delete (drafts only)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Related Concepts</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><Link href="/docs/concepts/ai-execution" className="text-primary hover:underline">AI Execution</Link> - How events are processed</li>
        <li><Link href="/docs/concepts/deployment" className="text-primary hover:underline">Deployments</Link> - Where events are bound and executed</li>
      </ul>
    </article>
  )
}
