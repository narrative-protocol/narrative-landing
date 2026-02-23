import { Callout } from "@/components/callout"
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
  "targetChains": ["solana-devnet"],
  "aiModelId": "openai/gpt-oss-120b",
  "onchain": {
    "stateChanges": ["wins", "speed_rating"],
    "result": ["winner"]
  },
  "firstBinding": {
    "eventId": 1,
    "eventVersion": 1
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
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">targetChains</code></td>
            <td className="px-4 py-2 text-muted-foreground">string[]</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">On-chain oracle targets (see below)</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">aiModelId</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">AI model to use (default: <code className="bg-muted px-1.5 py-0.5 rounded text-sm">openai/gpt-oss-120b</code>)</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">onchain</code></td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Selective on-chain push config (see below)</td>
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

      <h3 className="text-xl font-semibold text-foreground mt-6">Target Chains</h3>
      <p className="text-muted-foreground">
        The <code className="bg-muted px-1.5 py-0.5 rounded text-sm">targetChains</code> field is an array of network-specific chain identifiers. An empty array (default) means no on-chain storage.
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
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">solana-devnet</code></td>
            <td className="px-4 py-2 text-muted-foreground">Push to Solana devnet</td>
            <td className="px-4 py-2 text-muted-foreground">1232 bytes per field</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">solana-mainnet</code></td>
            <td className="px-4 py-2 text-muted-foreground">Push to Solana mainnet</td>
            <td className="px-4 py-2 text-muted-foreground">1232 bytes per field</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">near-testnet</code></td>
            <td className="px-4 py-2 text-muted-foreground">Push to NEAR testnet</td>
            <td className="px-4 py-2 text-muted-foreground">Unlimited</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">near-mainnet</code></td>
            <td className="px-4 py-2 text-muted-foreground">Push to NEAR mainnet</td>
            <td className="px-4 py-2 text-muted-foreground">Unlimited</td>
          </tr>
        </tbody>
      </table>

      <p className="text-muted-foreground mt-4">
        You can specify multiple chains:
      </p>

      <CodeBlock
        code={`{
  "targetChains": ["solana-devnet", "near-testnet"]
}`}
        language="json"
      />

      <p className="text-muted-foreground mt-4">
        When both Solana and NEAR chains are included, the stricter Solana size limit applies.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">AI Model Selection</h3>
      <p className="text-muted-foreground">
        Each deployment can specify which AI model to use for event execution via <code className="bg-muted px-1.5 py-0.5 rounded text-sm">aiModelId</code>. Available models are listed at <code className="bg-muted px-1.5 py-0.5 rounded text-sm">GET /api/ai-models</code>. If not specified, the default model (<code className="bg-muted px-1.5 py-0.5 rounded text-sm">openai/gpt-oss-120b</code>) is used.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Selective On-Chain Push</h3>
      <p className="text-muted-foreground">
        The <code className="bg-muted px-1.5 py-0.5 rounded text-sm">onchain</code> config controls which fields from <code className="bg-muted px-1.5 py-0.5 rounded text-sm">stateChanges</code> and <code className="bg-muted px-1.5 py-0.5 rounded text-sm">result</code> get pushed to the blockchain:
      </p>

      <CodeBlock
        code={`{
  "onchain": {
    "stateChanges": ["wins", "speed_rating"],
    "result": ["winner"]
  }
}`}
        language="json"
      />

      <p className="text-muted-foreground mt-4">
        When set, only the specified keys are included in the on-chain push. When omitted or null, all data is pushed. This is useful for staying within Solana&apos;s 1232-byte per-field limit.
      </p>

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
      
      <Callout type="warning" title="Irreversible Action">
        <p className="text-muted-foreground">
          Locking a deployment is <strong>permanent and cannot be undone</strong>. Once locked, the deployment becomes read-only forever. Make sure to create a snapshot before locking if you need to continue the simulation.
        </p>
      </Callout>

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
      
      <Callout type="tip" title="Deployment Management">
        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          <li><strong>Use descriptive names</strong>: Name deployments clearly (e.g., "Season 1", "Test Environment")</li>
          <li><strong>Choose targetChains early</strong>: The target chains affect data size limits</li>
          <li><strong>Configure onchain filtering</strong>: If using Solana, configure <code className="bg-muted px-1.5 py-0.5 rounded text-sm">onchain</code> to select only essential fields</li>
          <li><strong>Select an AI model</strong>: Choose the right model for your use case; the default works well for most scenarios</li>
          <li><strong>Lock when complete</strong>: Lock simulations when they reach a final state</li>
          <li><strong>Snapshot before lock</strong>: Create a snapshot if you need to continue from the same state</li>
          <li><strong>Verify before locking</strong>: Once locked, the state is permanent</li>
        </ol>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Snapshotting</h2>
      <p className="text-muted-foreground">
        Snapshotting allows you to create a new deployment by copying the state from an existing one. This is useful for forking simulations, creating test environments, or preserving state before major changes.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">How It Works</h3>
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
        code={`{
  "worldId": 1,
  "name": "Season 2",
  "firstBinding": { "eventId": 1, "eventVersion": 2 },
  "sourceDeploymentId": 123
}`}
        language="json"
        title="Request Body"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">What Gets Copied</h3>
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

      <h3 className="text-xl font-semibold text-foreground mt-6">Use Cases</h3>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Forking Simulations</strong>: Create parallel timelines from a common point</li>
        <li><strong>Testing</strong>: Test new event versions without affecting production</li>
        <li><strong>Pre-Lock Preservation</strong>: Create a snapshot before locking to continue later</li>
        <li><strong>Version Migration</strong>: Upgrade to new event versions while preserving state</li>
      </ul>

      <Callout type="info" title="Snapshot Requirements">
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Source deployment must be from the <strong>same world</strong></li>
          <li>You must own the source deployment</li>
          <li>Source deployment can be in any mode (upgradable or locked)</li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Related Concepts</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><Link href="/docs/concepts/architecture" className="text-primary hover:underline">Architecture</Link> - Blueprint vs Live layer</li>
        <li><Link href="/docs/concepts/entities" className="text-primary hover:underline">Entities</Link> - Data within deployments</li>
        <li><Link href="/docs/concepts/events" className="text-primary hover:underline">Events</Link> - Event versioning</li>
        <li><Link href="/docs/concepts/on-chain-oracle" className="text-primary hover:underline">On-chain Oracle</Link> - On-chain verification</li>
        <li><Link href="/docs/concepts/ai-engine" className="text-primary hover:underline">AI Engine</Link> - Model selection and execution</li>
      </ul>
    </article>
  )
}
