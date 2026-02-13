import { CodeBlock } from "@/components/code-block"
import Link from "next/link"

export default function DeploymentPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Deployments</h1>
      <p className="text-lg text-muted-foreground mt-4">
        A <strong>Deployment</strong> is a running instance of a world. It contains the actual runtime state - entity instances, event bindings, and execution history. Multiple deployments can exist for a single world, each with isolated state.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Creating a Deployment</h2>
      <p className="text-muted-foreground">
        Deployments are created with a first event binding:
      </p>
      
      <CodeBlock
        code={`POST /api/deployments
{
  "worldId": 1,
  "name": "Season 1",
  "description": "First season of the racing simulation",
  "targetChain": "solana",
  "firstBinding": {
    "eventId": 1,
    "eventVersionId": 1
  }
}`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Fields</h3>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">Field</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Type</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Required</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">worldId</code></td>
            <td className="px-4 py-2 text-muted-foreground">integer</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">The world this deployment belongs to</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">name</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">Human-readable name</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">description</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Optional description</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">targetChain</code></td>
            <td className="px-4 py-2 text-muted-foreground">enum</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">On-chain oracle target (see below)</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">mode</code></td>
            <td className="px-4 py-2 text-muted-foreground">enum</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">upgradable</code> (default) or <code className="bg-muted px-1.5 py-0.5 rounded text-sm">locked</code></td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">firstBinding</code></td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">Initial event binding</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold text-foreground mt-6">Target Chain Options</h3>
      <p className="text-muted-foreground">
        The <code className="bg-muted px-1.5 py-0.5 rounded text-sm">targetChain</code> field determines where event execution data is stored on-chain:
      </p>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">Value</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Description</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Max Data Size</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">none</code></td>
            <td className="px-4 py-2 text-muted-foreground">No on-chain storage (default)</td>
            <td className="px-4 py-2 text-muted-foreground">N/A</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">solana</code></td>
            <td className="px-4 py-2 text-muted-foreground">Push to Solana</td>
            <td className="px-4 py-2 text-muted-foreground">1024 bytes per field</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">near</code></td>
            <td className="px-4 py-2 text-muted-foreground">Push to NEAR</td>
            <td className="px-4 py-2 text-muted-foreground">Unlimited</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">both</code></td>
            <td className="px-4 py-2 text-muted-foreground">Push to both chains</td>
            <td className="px-4 py-2 text-muted-foreground">1024 bytes per field</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-foreground mt-8">What a Deployment Contains</h2>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground">
{`Deployment
├── Entity Instances (actual data)
│   ├── horse:HORSE_1 { name: "Midnight", speed: 0.85 }
│   ├── horse:HORSE_2 { name: "Thunder", speed: 0.78 }
│   └── ...
├── Event Bindings (which event versions to use)
│   ├── race_result -> version 1
│   └── ...
└── Event History (execution records)
    ├── History #1: race_result executed at 2024-06-15
    └── ...`}
      </pre>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Deployment Modes</h2>
      <p className="text-muted-foreground">
        Deployments operate in one of two modes: <code className="bg-muted px-1.5 py-0.5 rounded text-sm">upgradable</code> (default) or <code className="bg-muted px-1.5 py-0.5 rounded text-sm">locked</code>.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Upgradable Mode</h3>
      <p className="text-muted-foreground">
        The default mode for new deployments. All operations are permitted.
      </p>
      <p className="text-muted-foreground"><strong>Allowed Operations:</strong></p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Execute events</li>
        <li>Create/update entity instances</li>
        <li>Add event bindings</li>
        <li>Update deployment metadata</li>
        <li>Transition to locked mode</li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">Locked Mode</h3>
      <p className="text-muted-foreground">
        A frozen state where no modifications are allowed. <strong>This transition is irreversible.</strong>
      </p>
      <p className="text-muted-foreground"><strong>Blocked Operations:</strong></p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Execute events</li>
        <li>Create/update/delete entity instances</li>
        <li>Add event bindings</li>
        <li>Delete the deployment</li>
      </ul>
      <p className="text-muted-foreground"><strong>Allowed Operations:</strong></p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Read deployment data</li>
        <li>Read entity instances</li>
        <li>Read event history</li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">Locking a Deployment</h3>
      
      <CodeBlock
        code={`POST /api/deployments/:id/lock`}
        language="http"
      />

      <p className="text-muted-foreground"><strong>Response:</strong></p>
      
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "id": 1,
    "mode": "locked",
    "lockedAt": "2024-06-15T10:30:00Z"
  },
  "message": "Deployment locked successfully"
}`}
        language="json"
        title="Response"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Mode Comparison</h2>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">Feature</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Upgradable</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Locked</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">Execute events</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">Modify instances</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">Add bindings</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">Read data</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">View history</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">Delete deployment</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground">Transition</td>
            <td className="px-4 py-2 text-muted-foreground">To locked</td>
            <td className="px-4 py-2 text-muted-foreground">None (final)</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Use Cases</h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">Multiple Deployments per World</h3>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Development</strong>: Test environment with mock data</li>
        <li><strong>Staging</strong>: Pre-production validation</li>
        <li><strong>Production</strong>: Live simulation with real data</li>
        <li><strong>Archived</strong>: Locked historical records</li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">When to Lock</h3>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Historical records</strong>: Preserve a specific point in time</li>
        <li><strong>Compliance</strong>: Immutable audit trail</li>
        <li><strong>Archival</strong>: Completed seasons or campaigns</li>
        <li><strong>Verification</strong>: Allow independent on-chain verification</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Best Practices</h2>
      <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
        <li><strong>Use descriptive names</strong>: Name deployments clearly (e.g., &quot;Season 1&quot;, &quot;Test Environment&quot;)</li>
        <li><strong>Choose targetChain early</strong>: The target chain affects data size limits</li>
        <li><strong>Lock when complete</strong>: Lock simulations when they reach a final state</li>
        <li><strong>Snapshot before lock</strong>: Create a snapshot if you need to continue from the same state</li>
        <li><strong>Verify before locking</strong>: Once locked, the state is permanent</li>
      </ol>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Related Concepts</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><Link href="/docs/concepts/architecture" className="text-primary hover:underline">Architecture</Link> - Blueprint vs Live layer</li>
        <li><Link href="/docs/concepts/snapshotting" className="text-primary hover:underline">Snapshotting</Link> - Copy state to new deployments</li>
        <li><Link href="/docs/concepts/entity-instances" className="text-primary hover:underline">Entity Instances</Link> - Data within deployments</li>
        <li><Link href="/docs/concepts/on-chain-oracle" className="text-primary hover:underline">On-chain Oracle</Link> - On-chain verification</li>
      </ul>
    </article>
  )
}
