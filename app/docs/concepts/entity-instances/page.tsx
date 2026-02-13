import { Callout } from "@/components/callout"
import { CodeBlock } from "@/components/code-block"
import Link from "next/link"

export default function EntityInstancesPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Entity Instances</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Entity Instances are the actual data in a deployment. They follow a schema but each instance has its own state.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Schema vs Instance</h2>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground">
{`Entity Schema: "horse"
│
├── HORSE_1: { name: "Midnight Comet", speed: 0.85, wins: 3 }
├── HORSE_2: { name: "Thunder Bolt", speed: 0.78, wins: 1 }
└── HORSE_3: { name: "Golden Arrow", speed: 0.92, wins: 5 }`}
      </pre>

      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Schema</strong>: Defines structure (what fields exist, their types, defaults)</li>
        <li><strong>Instance</strong>: Holds actual values for a specific entity</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Creating Instances</h2>
      
      <CodeBlock
        code={`POST /api/entity-instances`}
        language="http"
      />

      <CodeBlock
        code={`{
  "deploymentId": 1,
  "entitySchemaId": 1,
  "instanceId": "HORSE_1",
  "state": {
    "name": "Midnight Comet",
    "speed_rating": 0.85
  }
}`}
        language="json"
        title="Request Body"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Instance IDs</h3>
      <p className="text-muted-foreground">
        The <code className="bg-muted px-1.5 py-0.5 rounded text-sm">instanceId</code> is a unique string identifier within the deployment:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Must be unique per deployment + schema combination</li>
        <li>Used in state change references (e.g., <code className="bg-muted px-1.5 py-0.5 rounded text-sm">&quot;horse:HORSE_1&quot;</code>)</li>
        <li>Case-sensitive</li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">Default Values</h3>
      <p className="text-muted-foreground">
        Attributes not provided in <code className="bg-muted px-1.5 py-0.5 rounded text-sm">state</code> use schema defaults:
      </p>
      
      <CodeBlock
        code={`// Schema defaults: speed_rating=0.5, stamina=0.5, wins=0

// Create with partial state
{ "instanceId": "HORSE_1", "state": { "name": "Star" } }

// Result
{
  "instanceId": "HORSE_1",
  "state": {
    "name": "Star",
    "speed_rating": 0.5,
    "stamina": 0.5,
    "wins": 0
  }
}`}
        language="json"
        title="Default Values Example"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Updating State</h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">Direct Update</h3>
      
      <CodeBlock
        code={`PUT /api/entity-instances/:id`}
        language="http"
      />

      <CodeBlock
        code={`{
  "state": { "wins": 4, "lastRace": "2024-06-15" }
}`}
        language="json"
        title="Request Body"
      />

      <p className="text-muted-foreground">
        Direct updates <strong>merge</strong> with existing state (partial update).
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Via Event Execution</h3>
      <p className="text-muted-foreground">
        Events update state through AI-computed changes:
      </p>
      
      <CodeBlock
        code={`// AI returns stateChanges
{
  "horse:HORSE_1": { "wins": 4, "lastRace": "2024-06-15" },
  "horse:HORSE_2": { "stamina": 0.65 }
}`}
        language="json"
        title="State Changes"
      />

      <p className="text-muted-foreground">
        The key format is <code className="bg-muted px-1.5 py-0.5 rounded text-sm">&quot;schemaName:instanceId&quot;</code>.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">State Change Modes</h2>
      <p className="text-muted-foreground">
        When events execute, the <code className="bg-muted px-1.5 py-0.5 rounded text-sm">stateChangeSchema</code> determines how changes apply:
      </p>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">Mode</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Behavior</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">partial</code></td>
            <td className="px-4 py-2 text-muted-foreground">Merge changes into existing state</td>
            <td className="px-4 py-2 text-muted-foreground">Most updates</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">full</code></td>
            <td className="px-4 py-2 text-muted-foreground">Replace entire state</td>
            <td className="px-4 py-2 text-muted-foreground">Complete resets</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">append</code></td>
            <td className="px-4 py-2 text-muted-foreground">Append to arrays, merge objects</td>
            <td className="px-4 py-2 text-muted-foreground">Logs, history</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold text-foreground mt-6">Partial Example</h3>
      
      <CodeBlock
        code={`// Existing: { name: "Star", speed: 0.8, wins: 3 }
// Change: { wins: 4 }
// Result: { name: "Star", speed: 0.8, wins: 4 }`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Full Example</h3>
      
      <CodeBlock
        code={`// Existing: { name: "Star", speed: 0.8, wins: 3 }
// Change: { name: "Star", wins: 4 }
// Result: { name: "Star", wins: 4 }  // speed is gone`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Append Example</h3>
      
      <CodeBlock
        code={`// Existing: { name: "Star", raceLog: ["race1"] }
// Change: { raceLog: ["race2"] }
// Result: { name: "Star", raceLog: ["race1", "race2"] }`}
        language="json"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Querying Instances</h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">List by Deployment</h3>
      
      <CodeBlock
        code={`GET /api/entity-instances?deploymentId=1`}
        language="http"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">List by Schema</h3>
      
      <CodeBlock
        code={`GET /api/entity-instances?deploymentId=1&entitySchemaId=1`}
        language="http"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Get Single Instance</h3>
      
      <CodeBlock
        code={`GET /api/entity-instances/:id`}
        language="http"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Constraints</h2>

      <Callout type="info" title="Important Limitations">
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Cannot modify instances in locked deployments</li>
          <li>Cannot delete instances if deployment has event history</li>
          <li>Instance IDs must be unique within deployment + schema</li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Related Concepts</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><Link href="/docs/concepts/architecture" className="text-primary hover:underline">Architecture</Link> - Schema vs Instance relationship</li>
        <li><Link href="/docs/concepts/ai-execution" className="text-primary hover:underline">AI Execution</Link> - How events modify state</li>
      </ul>
    </article>
  )
}
