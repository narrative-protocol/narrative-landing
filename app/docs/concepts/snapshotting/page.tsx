import { CodeBlock } from "@/components/code-block"
import Link from "next/link"

export default function SnapshottingPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Snapshotting</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Snapshotting allows you to create a new deployment by copying the state from an existing one. This is useful for forking simulations, creating test environments, or preserving state before major changes.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">How It Works</h2>
      <p className="text-muted-foreground">
        When creating a deployment with a <code className="bg-muted px-1.5 py-0.5 rounded text-sm">sourceDeploymentId</code>, the system:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
        <li>Creates the new deployment</li>
        <li>Copies all entity instances from the source</li>
        <li>Copies event bindings (except duplicates of <code className="bg-muted px-1.5 py-0.5 rounded text-sm">firstBinding</code>)</li>
        <li>New deployment starts as <code className="bg-muted px-1.5 py-0.5 rounded text-sm">upgradable</code></li>
      </ol>

      <CodeBlock
        code={`POST /api/deployments`}
        language="http"
      />

      <CodeBlock
        code={`{
  "worldId": 1,
  "name": "Season 2",
  "firstBinding": { "eventId": 1, "eventVersionId": 2 },
  "sourceDeploymentId": 123
}`}
        language="json"
        title="Request Body"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">What Gets Copied</h2>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">Component</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Copied</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">Entity instances</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">Full state at time of snapshot</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">Event bindings</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">Except if duplicate of firstBinding</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">Event history</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">New deployment starts fresh</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">Deployment mode</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Always starts as upgradable</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground">Deployment name</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Must provide new name</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Use Cases</h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">Forking Simulations</h3>
      <p className="text-muted-foreground">
        Create parallel timelines from a common point:
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground">
{`Season 1 (original)
├── Execute events...
├── State at episode 10
│
├── Snapshot ──► Season 1 Alt (what-if scenario)
│                 └── Different events...
│
└── Continue ──► Season 1 (original continues)`}
      </pre>

      <h3 className="text-xl font-semibold text-foreground mt-6">Testing</h3>
      <p className="text-muted-foreground">
        Test new event versions without affecting production:
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground">
{`Production ──► Staging (snapshot)
                  └── Test new event versions
                  └── Verify behavior
                  └── If good, update production bindings`}
      </pre>

      <h3 className="text-xl font-semibold text-foreground mt-6">Pre-Lock Preservation</h3>
      <p className="text-muted-foreground">
        Before locking a deployment, create a snapshot to continue:
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground">
{`Season 1 (active)
    │
    ├── Snapshot ──► Season 2 (continues with new events)
    │
    └── Lock ──► Season 1 (archived, immutable)`}
      </pre>

      <h3 className="text-xl font-semibold text-foreground mt-6">Version Migration</h3>
      <p className="text-muted-foreground">
        Upgrade to new event versions while preserving state:
      </p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground">
{`Deployment v1 (uses event version 1)
    │
    └── Snapshot ──► Deployment v2 (uses event version 2)
                          └── Same state, new behavior`}
      </pre>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Constraints</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Source deployment must be from the <strong>same world</strong></li>
        <li>You must own the source deployment</li>
        <li>Source deployment can be in any mode (upgradable or locked)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Example Workflow</h2>
      
      <CodeBlock
        code={`# Create initial deployment
DEPLOY_1=$(curl -s -X POST $URL/api/deployments \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "worldId": 1,
    "name": "Season 1",
    "firstBinding": { "eventId": 1, "eventVersionId": 1 }
  }' | jq -r '.data.id')

# Create instances, execute events...
# ...

# Snapshot to create Season 2
curl -X POST $URL/api/deployments \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "worldId": 1,
    "name": "Season 2",
    "firstBinding": { "eventId": 1, "eventVersionId": 2 },
    "sourceDeploymentId": '$DEPLOY_1'
  }'`}
        language="bash"
        title="Example"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Related Concepts</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><Link href="/docs/concepts/deployment" className="text-primary hover:underline">Deployments</Link> - Lock after snapshotting</li>
        <li><Link href="/docs/concepts/event" className="text-primary hover:underline">Event Versioning</Link> - Use new versions in snapshots</li>
      </ul>
    </article>
  )
}
