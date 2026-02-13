import { Callout } from "@/components/callout"
import { CodeBlock } from "@/components/code-block"
import Link from "next/link"

export default function OnChainOraclePage() {
  return (
    <article className="prose prose-invert max-w-none">
      <Callout type="warning" title="Deployment Status">
        <p>
          Solana program is currently only deployed on devnet, NEAR smart contract is currently only deployed on testnet.
        </p>
      </Callout>

      <h1 className="text-4xl font-bold text-foreground mt-6">On-chain Oracle</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Narrative Studio pushes event execution records to blockchain networks, providing immutable on-chain records for verification and auditability. The system supports multiple chains: <strong>Solana</strong> and <strong>NEAR</strong>.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Overview</h2>
      <p className="text-muted-foreground">
        After each event execution:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
        <li><strong>Database Storage</strong>: Full event data stored in PostgreSQL</li>
        <li><strong>On-chain Record</strong>: Event data pushed to selected blockchain(s)</li>
        <li><strong>Attestation</strong>: AI attestation stored on-chain</li>
      </ol>
      <p className="text-muted-foreground">
        This enables independent verification of event executions.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Target Chain Selection</h2>
      <p className="text-muted-foreground">
        When creating a deployment, specify which chain(s) to use:
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
            <td className="px-4 py-2 text-muted-foreground">Push to Solana only</td>
            <td className="px-4 py-2 text-muted-foreground">2048 bytes</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">near</code></td>
            <td className="px-4 py-2 text-muted-foreground">Push to NEAR only</td>
            <td className="px-4 py-2 text-muted-foreground">Unlimited</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">both</code></td>
            <td className="px-4 py-2 text-muted-foreground">Push to both Solana and NEAR</td>
            <td className="px-4 py-2 text-muted-foreground">2048 bytes</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        code={`{
  "worldId": 1,
  "name": "Season 1",
  "targetChain": "solana",
  "firstBinding": { "eventId": 1, "eventVersionId": 1 }
}`}
        language="json"
        title="Deployment Configuration"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">What Gets Stored On-chain</h2>
      <p className="text-muted-foreground">
        The Solana program uses a <strong>single account per deployment</strong> (PDA: <code className="bg-muted px-1.5 py-0.5 rounded text-sm">[&quot;deployment&quot;, deployment_id]</code>). Each <code className="bg-muted px-1.5 py-0.5 rounded text-sm">push_event</code> overwrites the account with the latest event data, so rent is paid only once per deployment. Subsequent pushes only cost a transaction fee.
      </p>
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
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">deployment_id</code></td>
            <td className="px-4 py-2 text-muted-foreground">u64</td>
            <td className="px-4 py-2 text-muted-foreground">Deployment identifier</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">event_version_id</code></td>
            <td className="px-4 py-2 text-muted-foreground">u64</td>
            <td className="px-4 py-2 text-muted-foreground">Event version of the latest event</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">event_history_id</code></td>
            <td className="px-4 py-2 text-muted-foreground">u64</td>
            <td className="px-4 py-2 text-muted-foreground">History ID of the latest event</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">event_count</code></td>
            <td className="px-4 py-2 text-muted-foreground">u64</td>
            <td className="px-4 py-2 text-muted-foreground">Total events pushed for this deployment</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">input_hash</code></td>
            <td className="px-4 py-2 text-muted-foreground">[u8; 32]</td>
            <td className="px-4 py-2 text-muted-foreground">SHA-256 of latest input JSON</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">state_changes</code></td>
            <td className="px-4 py-2 text-muted-foreground">String</td>
            <td className="px-4 py-2 text-muted-foreground">Latest state changes JSON</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">result</code></td>
            <td className="px-4 py-2 text-muted-foreground">String</td>
            <td className="px-4 py-2 text-muted-foreground">Latest result JSON</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">attestation</code></td>
            <td className="px-4 py-2 text-muted-foreground">struct</td>
            <td className="px-4 py-2 text-muted-foreground">Attestation from the latest event</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">executed_at</code></td>
            <td className="px-4 py-2 text-muted-foreground">i64</td>
            <td className="px-4 py-2 text-muted-foreground">When latest event was executed</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">pushed_at</code></td>
            <td className="px-4 py-2 text-muted-foreground">i64</td>
            <td className="px-4 py-2 text-muted-foreground">When latest record was pushed</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Solana Integration</h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">Program ID</h3>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground">
8KAY24esApxCjPs48qSHAmFMH8EpTp59XntNLouyRdmQ
      </pre>

      <h3 className="text-xl font-semibold text-foreground mt-6">Accounts</h3>
      <p className="text-muted-foreground">
        <strong>Config Account</strong> (PDA: <code className="bg-muted px-1.5 py-0.5 rounded text-sm">[&quot;config&quot;]</code>)
      </p>
      
      <CodeBlock
        code={`pub struct Config {
    pub authority: Pubkey,    // Who can push events
    pub event_count: u64,     // Total events pushed
    pub bump: u8,             // PDA bump
}`}
        language="rust"
      />

      <p className="text-muted-foreground">
        <strong>Deployment Record Account</strong> (PDA: <code className="bg-muted px-1.5 py-0.5 rounded text-sm">[&quot;deployment&quot;, deployment_id_bytes]</code>)
      </p>
      <p className="text-muted-foreground">
        One account per deployment, overwritten on each event push:
      </p>
      
      <CodeBlock
        code={`pub struct DeploymentRecord {
    pub deployment_id: u64,
    pub event_version_id: u64,
    pub event_history_id: u64,
    pub event_count: u64,
    pub input_hash: [u8; 32],
    #[max_len(2048)]
    pub state_changes: String,
    #[max_len(2048)]
    pub result: String,
    pub attestation: Attestation,
    pub executed_at: i64,
    pub pushed_at: i64,
    pub bump: u8,
}`}
        language="rust"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">NEAR Integration</h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">Address</h3>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground">
narrative-p.testnet
      </pre>

      <h3 className="text-xl font-semibold text-foreground mt-6">Contract Structure</h3>
      
      <CodeBlock
        code={`pub struct Contract {
    authority: AccountId,
    event_count: u64,
    events: LookupMap&lt;u64, EventRecord&gt;,
}

pub struct EventRecord {
    pub deployment_id: u64,
    pub event_version_id: u64,
    pub event_history_id: u64,
    pub input_hash: [u8; 32],
    pub state_changes: String,
    pub result: String,
    pub attestation: Attestation,
    pub executed_at: u64,
    pub pushed_at: u64,
}`}
        language="rust"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Contract Methods</h3>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">Method</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Description</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Access</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">initialize</code></td>
            <td className="px-4 py-2 text-muted-foreground">Set up contract authority</td>
            <td className="px-4 py-2 text-muted-foreground">Once per contract</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">push_event</code></td>
            <td className="px-4 py-2 text-muted-foreground">Push new event record</td>
            <td className="px-4 py-2 text-muted-foreground">Authority only</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">update_authority</code></td>
            <td className="px-4 py-2 text-muted-foreground">Transfer authority</td>
            <td className="px-4 py-2 text-muted-foreground">Current authority</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">get_event</code></td>
            <td className="px-4 py-2 text-muted-foreground">Get event by history ID</td>
            <td className="px-4 py-2 text-muted-foreground">Public</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">get_event_count</code></td>
            <td className="px-4 py-2 text-muted-foreground">Get total event count</td>
            <td className="px-4 py-2 text-muted-foreground">Public</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Attestation Structure</h2>
      <p className="text-muted-foreground">
        Both chains store the same attestation format:
      </p>
      
      <CodeBlock
        code={`pub struct Attestation {
    pub signature: Vec&lt;u8&gt;,        // ECDSA signature (65 bytes)
    pub signing_address: [u8; 20], // Ethereum address
    pub signing_algo: String,      // "ecdsa"
    pub text: String,              // Signed content hash
}`}
        language="rust"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">API Response</h2>
      <p className="text-muted-foreground">
        Event execution response includes oracle results for configured chains:
      </p>
      
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "historyId": 42,
    "stateChanges": { ... },
    "result": { ... },
    "attestation": { ... },
    "oracle": {
      "solana": {
        "signature": "5xYzABC123def456...",
        "eventRecordPda": "7abcDEF789ghi012..."
      },
      "near": {
        "txHash": "Abc123...xyz",
        "receiptId": "Def456...uvw"
      }
    }
  }
}`}
        language="json"
      />

      <p className="text-muted-foreground">
        The <code className="bg-muted px-1.5 py-0.5 rounded text-sm">oracle</code> object contains:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">solana</code> - Solana transaction details (if <code className="bg-muted px-1.5 py-0.5 rounded text-sm">targetChain</code> is <code className="bg-muted px-1.5 py-0.5 rounded text-sm">solana</code> or <code className="bg-muted px-1.5 py-0.5 rounded text-sm">both</code>)</li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">near</code> - NEAR transaction details (if <code className="bg-muted px-1.5 py-0.5 rounded text-sm">targetChain</code> is <code className="bg-muted px-1.5 py-0.5 rounded text-sm">near</code> or <code className="bg-muted px-1.5 py-0.5 rounded text-sm">both</code>)</li>
      </ul>
      <p className="text-muted-foreground">
        Either field will be <code className="bg-muted px-1.5 py-0.5 rounded text-sm">null</code> if that chain is not configured or not selected.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Verification Flow</h2>
      <p className="text-muted-foreground">
        To verify an event:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
        <li><strong>Fetch on-chain record</strong> from the appropriate chain</li>
        <li><strong>Fetch off-chain data</strong> from API: <code className="bg-muted px-1.5 py-0.5 rounded text-sm">GET /api/deployments/:id/history</code></li>
        <li><strong>Compare state_changes and result</strong> - on-chain contains full JSON</li>
        <li><strong>Compute hash</strong> of input</li>
        <li><strong>Compare hash</strong> - it must match on-chain value</li>
        <li><strong>Verify attestation</strong> - check ECDSA signature</li>
      </ol>

      <h3 className="text-xl font-semibold text-foreground mt-6">Solana Verification</h3>
      
      <CodeBlock
        code={`const onChainRecord = await program.account.deploymentRecord.fetch(pda);
const offChainData = await fetch(\`/api/deployments/\${id}/history/\${historyId}\`);

const onChainStateChanges = JSON.parse(onChainRecord.stateChanges);
assert.deepEqual(onChainStateChanges, offChainData.stateChanges);

const inputHash = sha256(JSON.stringify(offChainData.input));
assert(inputHash === onChainRecord.inputHash);`}
        language="javascript"
        title="JavaScript"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">NEAR Verification</h3>
      
      <CodeBlock
        code={`const onChainRecord = await contract.get_event({ event_history_id: historyId });
const offChainData = await fetch(\`/api/deployments/\${id}/history/\${historyId}\`);

const onChainStateChanges = JSON.parse(onChainRecord.state_changes);
assert.deepEqual(onChainStateChanges, offChainData.stateChanges);

const inputHash = sha256(JSON.stringify(offChainData.input));
assert(arrayEquals(inputHash, onChainRecord.input_hash));`}
        language="javascript"
        title="JavaScript"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Data Size Limits</h2>
      <p className="text-muted-foreground">
        When using on-chain storage, be mindful of Solana&apos;s size limits:
      </p>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">Chain</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Max per field</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">Solana</td>
            <td className="px-4 py-2 text-muted-foreground">2048 bytes</td>
            <td className="px-4 py-2 text-muted-foreground">Compact state, simple results</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">NEAR</td>
            <td className="px-4 py-2 text-muted-foreground">Unlimited</td>
            <td className="px-4 py-2 text-muted-foreground">No size restrictions</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground">Both</td>
            <td className="px-4 py-2 text-muted-foreground">2048 bytes</td>
            <td className="px-4 py-2 text-muted-foreground">Uses stricter Solana limit</td>
          </tr>
        </tbody>
      </table>
      <p className="text-muted-foreground">
        If your <code className="bg-muted px-1.5 py-0.5 rounded text-sm">stateChanges</code> or <code className="bg-muted px-1.5 py-0.5 rounded text-sm">result</code> exceeds Solana&apos;s limit when using <code className="bg-muted px-1.5 py-0.5 rounded text-sm">solana</code> or <code className="bg-muted px-1.5 py-0.5 rounded text-sm">both</code>, the event execution will fail with a validation error.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Related Concepts</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><Link href="/docs/concepts/ai-execution" className="text-primary hover:underline">AI Execution</Link> - Generates attestations</li>
        <li><Link href="/docs/concepts/deployment" className="text-primary hover:underline">Deployments</Link> - Locked deployments can be verified</li>
      </ul>
    </article>
  )
}
