import { CodeBlock } from "@/components/code-block";
import Link from "next/link";

export default function DeploymentsAPIPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Deployments API</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Deployments are running instances of a world with their own state and
        history.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Endpoints</h2>
      <p className="text-muted-foreground">
        There are two ways to access deployments:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
        <li>
          <strong>Nested routes</strong> (recommended):{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
            /api/worlds/:worldId/deployments
          </code>
        </li>
        <li>
          <strong>Direct routes</strong>:{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
            /api/deployments
          </code>{" "}
          (for backwards compatibility)
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        List Deployments
      </h3>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>

      <CodeBlock
        code={`GET /api/worlds/:worldId/deployments`}
        language="http"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>

      <CodeBlock
        code={`GET /api/deployments?worldId=<world-id>`}
        language="http"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Create Deployment
      </h3>
      <p className="text-muted-foreground">
        Creates a deployment with its first event binding. Every deployment must
        have at least one event binding.
      </p>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>

      <CodeBlock
        code={`POST /api/worlds/:worldId/deployments`}
        language="http"
      />

      <CodeBlock
        code={`{
  "name": "Season 1",
  "targetChains": ["solana-devnet"],
  "aiModelId": "openai/gpt-oss-120b",
  "onchain": {
    "stateChanges": ["wins"],
    "result": ["winner"]
  },
  "firstBinding": {
    "eventId": 1,
    "eventVersionId": 1
  },
  "sourceDeploymentId": 2
}`}
        language="json"
        title="Request Body"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>

      <CodeBlock code={`POST /api/deployments`} language="http" />

      <CodeBlock
        code={`{
  "worldId": 1,
  "name": "Season 1",
  "targetChains": ["solana-devnet"],
  "aiModelId": "openai/gpt-oss-120b",
  "onchain": {
    "stateChanges": ["wins"],
    "result": ["winner"]
  },
  "firstBinding": {...},
  ...
}`}
        language="json"
        title="Request Body"
      />

      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Field
            </th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Type
            </th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Required
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
                worldId
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">integer</td>
            <td className="px-4 py-2 text-muted-foreground">Yes*</td>
            <td className="px-4 py-2 text-muted-foreground">
              Parent world ID (*not needed for nested route)
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                name
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">Deployment name</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                targetChains
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">string[]</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">
              On-chain targets:{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                solana-devnet
              </code>
              ,{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                solana-mainnet
              </code>
              ,{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                near-testnet
              </code>
              ,{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                near-mainnet
              </code>{" "}
              (default:{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">[]</code>
              )
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                aiModelId
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">
              AI model ID (default:{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                openai/gpt-oss-120b
              </code>
              ). See{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                GET /api/ai-models
              </code>{" "}
              for available models
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                onchain
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">
              Selective on-chain push config
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                onchain.stateChanges
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">string[]</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">
              Keys from stateChanges to push on-chain
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                onchain.result
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">string[]</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">
              Keys from result to push on-chain
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                firstBinding
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">
              First event binding
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                firstBinding.eventId
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">integer</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">
              Event ID to bind
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                firstBinding.eventVersionId
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">integer</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">
              Event version ID to bind
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                sourceDeploymentId
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">integer</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">
              Copy state from this deployment (snapshotting)
            </td>
          </tr>
        </tbody>
      </table>

      <h4 className="text-lg font-semibold text-foreground mt-4">Response</h4>
      <p className="text-muted-foreground">
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
          201 Created
        </code>
      </p>

      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "id": 123456,
    "worldId": 1,
    "name": "Season 1",
    "mode": "upgradable",
    "targetChains": ["solana-devnet"],
    "aiModelId": "openai/gpt-oss-120b",
    "onchain": {
      "stateChanges": ["wins"],
      "result": ["winner"]
    },
    "lockedAt": null,
    "eventBindings": [
      {
        "id": 123457,
        "deploymentId": 123456,
        "eventId": 1,
        "eventVersionId": 1
      }
    ]
  }
}`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Get Deployment
      </h3>

      <CodeBlock code={`GET /api/deployments/:id`} language="http" />

      <p className="text-muted-foreground">
        Returns deployment with entity instances and bindings.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Lock Deployment
      </h3>
      <p className="text-muted-foreground">
        Transitions deployment to{" "}
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">locked</code>{" "}
        mode. <strong>This is irreversible.</strong>
      </p>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>

      <CodeBlock
        code={`POST /api/worlds/:worldId/deployments/:deploymentId/lock`}
        language="http"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>

      <CodeBlock code={`POST /api/deployments/:id/lock`} language="http" />

      <h4 className="text-lg font-semibold text-foreground mt-4">Response</h4>

      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "id": 123456,
    "mode": "locked",
    "lockedAt": "2024-01-01T00:00:00Z"
  },
  "message": "Deployment locked successfully"
}`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Delete Deployment
      </h3>

      <CodeBlock code={`DELETE /api/deployments/:id`} language="http" />

      <p className="text-muted-foreground">
        Deletes a deployment and all its event bindings.
      </p>

      <h4 className="text-lg font-semibold text-foreground mt-4">
        Constraints
      </h4>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Cannot delete locked deployments (400 Bad Request)</li>
        <li>Cannot delete if entity instances exist (409 Conflict)</li>
        <li>Cannot delete if event history exists (409 Conflict)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Execute Event
      </h2>
      <p className="text-muted-foreground">
        Execute a bound event on the deployment. This invokes the AI engine to
        compute state changes based on the world definition, current state,
        event behavior, and input.
      </p>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>

      <CodeBlock
        code={`POST /api/worlds/:worldId/deployments/:deploymentId/execute`}
        language="http"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>

      <CodeBlock code={`POST /api/deployments/:id/execute`} language="http" />

      <h4 className="text-lg font-semibold text-foreground mt-4">
        Request Body
      </h4>

      <CodeBlock
        code={`{
  "eventId": 1,
  "input": {
    "date": "2024-06-15",
    "trackId": "TRACK_1"
  }
}`}
        language="json"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">Response</h4>
      <p className="text-muted-foreground">
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">200 OK</code>
      </p>

      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "historyId": 123458,
    "eventVersionId": 1,
    "stateChanges": {
      "horse:HORSE_1": {
        "wins": 5,
        "lastRace": "2024-06-15"
      }
    },
    "result": {
      "winner": "HORSE_1",
      "time": "1:45.32"
    },
    "attestation": {
      "signature": "0x77057beca063e348d93069e9912d5e31...",
      "signing_address": "0x34B7BcB4b2b61FCF9fA14715ba8708AC0dBC8Be5",
      "signing_algo": "ecdsa",
      "text": "eda20c62e5fe44e2aa8820c962efef0306f2d0c94805f9105add72ff705a8358:..."
    },
    "oracle": {
      "solana": {
        "signature": "5xYzABC123def456...",
        "eventRecordPda": "7abcDEF789ghi012..."
      },
      "near": null
    }
  }
}`}
        language="json"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">
        Response Fields
      </h4>
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
                historyId
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Unique ID of this execution record
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                eventVersionId
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Event version that was executed
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                stateChanges
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Changes applied to entity instances (key:{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                schemaName:instanceId
              </code>
              )
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                result
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Public output from AI (matches{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                resultSchema
              </code>
              )
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                attestation
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Cryptographic attestation from NEAR AI
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                oracle
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              On-chain records (based on deployment&apos;s{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                targetChains
              </code>
              )
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                oracle.solana
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Solana record (
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                null
              </code>{" "}
              if no Solana chain configured)
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                oracle.solana.signature
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Solana transaction signature
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                oracle.solana.eventRecordPda
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              PDA of the on-chain deployment record
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                oracle.near
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              NEAR record (
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                null
              </code>{" "}
              if not configured or not selected)
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                oracle.near.txHash
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              NEAR transaction hash
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                oracle.near
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              NEAR record (
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                null
              </code>{" "}
              if no NEAR chain configured)
            </td>
          </tr>
        </tbody>
      </table>

      <h4 className="text-lg font-semibold text-foreground mt-4">
        Execution Flow
      </h4>
      <p className="text-muted-foreground">The AI engine:</p>
      <ol className="list-decimal pl-6 space-y-2 ">
        <li>
          Receives the world definition (name, description, tags, seed prompt)
        </li>
        <li>Receives current entity states from the deployment</li>
        <li>Receives event version config (behavior prompt, schemas)</li>
        <li>Receives user-provided input</li>
        <li>
          Generates state changes and public result using the deployment&apos;s
          configured AI model
        </li>
        <li>Applies state changes to entity instances</li>
        <li>Records everything in event history with attestation</li>
        <li>
          Pushes to on-chain oracle(s) based on deployment&apos;s{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
            targetChains
          </code>
        </li>
      </ol>

      <h4 className="text-lg font-semibold text-foreground mt-4">
        State Change Modes
      </h4>
      <p className="text-muted-foreground">
        The{" "}
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
          stateChangeSchema
        </code>{" "}
        in the event version determines how changes are applied:
      </p>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Mode
            </th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">
              Behavior
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                partial
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Merge changes into existing state (default)
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                full
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Replace entire state
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                append
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">
              Append to arrays, merge objects
            </td>
          </tr>
        </tbody>
      </table>

      <h4 className="text-lg font-semibold text-foreground mt-4">
        Constraints
      </h4>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Event must be bound to the deployment (400 Bad Request)</li>
        <li>Deployment cannot be locked (400 Bad Request)</li>
        <li>
          Requires{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
            NEAR_API_KEY
          </code>{" "}
          environment variable (returns mock if not set)
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Event History
      </h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Get History
      </h3>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>

      <CodeBlock
        code={`GET /api/worlds/:worldId/deployments/:deploymentId/history?page=1&limit=10`}
        language="http"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>

      <CodeBlock
        code={`GET /api/deployments/:id/history?page=1&limit=10`}
        language="http"
      />

      <p className="text-muted-foreground">
        Returns paginated event execution history.
      </p>

      <h4 className="text-lg font-semibold text-foreground mt-4">Response</h4>

      <CodeBlock
        code={`{
  "success": true,
  "data": [
    {
      "id": 123459,
      "deploymentId": 123456,
      "eventVersionId": 1,
      "input": { "raceId": "RACE_001" },
      "stateChanges": { ... },
      "result": { ... },
      "attestation": { ... },
      "executedAt": "2024-06-15T10:30:00Z",
      "eventVersion": {
        "id": 1,
        "version": 1,
        "event": { "id": 123456, "name": "race_result" }
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 42,
    "totalPages": 5
  }
}`}
        language="json"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Event Bindings
      </h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        List Bindings
      </h3>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>

      <CodeBlock
        code={`GET /api/worlds/:worldId/deployments/:deploymentId/event-bindings`}
        language="http"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>

      <CodeBlock
        code={`GET /api/event-bindings?deploymentId=<deployment-id>`}
        language="http"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Execute Event
      </h3>
      <p className="text-muted-foreground">
        Execute a bound event on the deployment. This invokes the AI engine to
        compute state changes based on the world definition, current state,
        event behavior, and input.
      </p>
      <p className="text-muted-foreground mt-2">
        The AI model used is determined by the deployment&apos;s{" "}
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
          aiModelId
        </code>{" "}
        field (defaults to{" "}
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
          openai/gpt-oss-120b
        </code>
        ).
      </p>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>

      <CodeBlock
        code={`POST /api/worlds/:worldId/deployments/:deploymentId/event-bindings`}
        language="http"
      />

      <CodeBlock
        code={`{
  "eventId": 1,
  "eventVersionId": 2
}`}
        language="json"
        title="Request Body"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>

      <CodeBlock code={`POST /api/event-bindings`} language="http" />

      <CodeBlock
        code={`{
  "deploymentId": 1,
  "eventId": 1,
  "eventVersionId": 2
}`}
        language="json"
        title="Request Body"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Delete Binding
      </h3>

      <CodeBlock code={`DELETE /api/event-bindings/:id`} language="http" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Related Concepts
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>
          <Link
            href="/docs/concepts/deployment"
            className="text-primary hover:underline"
          >
            Deployments
          </Link>{" "}
          - Modes, target chains, AI models, and more
        </li>
        <li>
          <Link
            href="/docs/concepts/ai-engine"
            className="text-primary hover:underline"
          >
            AI Engine
          </Link>{" "}
          - How events are processed
        </li>
        <li>
          <Link
            href="/docs/concepts/on-chain-oracle"
            className="text-primary hover:underline"
          >
            On-chain Oracle
          </Link>{" "}
          - Multi-chain verification
        </li>
        <li>
          <Link
            href="/docs/api-reference/ai-models"
            className="text-primary hover:underline"
          >
            AI Models
          </Link>{" "}
          - Available AI models
        </li>
      </ul>
    </article>
  );
}
