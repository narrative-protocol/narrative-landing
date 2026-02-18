import { Callout } from "@/components/callout";
import { CodeTabs } from "@/components/code-tabs";
import Link from "next/link";

export default function QuickstartPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Quickstart</h1>
      <p className="text-lg text-muted-foreground mt-4">
        This guide will walk you through creating your first world, defining
        entities, executing events, and seeing AI-driven state changes.
      </p>

      <Callout type="info" title="Prerequisites">
        <p className="text-muted-foreground">
          Set the{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">URL</code> to
          the API endpoint (
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
            https://api.narrativeprotocol.com
          </code>
          )
        </p>
      </Callout>

      {/* SECTION 1: SETUP */}
      <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Setup</h2>
      <p className="text-muted-foreground mb-6">
        Before making any API calls, you need to authenticate with the system.
        Register your email to get a debug token that will be used for all
        subsequent requests.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
        Get an Auth Token
      </h3>
      <p className="text-muted-foreground mb-4">
        This endpoint registers a new user and returns an authentication token.
        The token must be included in the Authorization header for all protected
        requests.
      </p>

      <CodeTabs
        title="Register"
        examples={{
          curl: `curl -X POST https://api.narrativeprotocol.com/DEBUG_register \\
  -H "Content-Type: application/json" \\
  -d '{"email": "dev@example.com"}'`,
          javascript: `const response = await fetch(\`https://api.narrativeprotocol.com/DEBUG_register\`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: "dev@example.com" })
});
console.log(await response.json());`,
          python: `import requests

response = requests.post(
    "https://api.narrativeprotocol.com/DEBUG_register",
    json={"email": "dev@example.com"}
)
print(response.json())`,
        }}
        response={`{
  "success": true,
  "data": {
    "user": {
      "id": 746629,
      "email": "dev@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiJ9..."
  }
}`}
      />

      {/* DIVIDER */}
      <hr className="my-12 border-border" />

      {/* SECTION 2: BLUEPRINT LAYER */}
      <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
        Blueprint Layer
      </h2>
      <p className="text-muted-foreground mb-6">
        The Blueprint layer is where you define your world&apos;s structure.
        This includes creating worlds, entity schemas with attributes, and
        events with versioned behavior. These definitions are separate from the
        runtime execution.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
        Create Your First World
      </h3>
      <p className="text-muted-foreground mb-4">
        A World is the top-level container for your simulation. It holds entity
        schemas, events, and can have multiple deployments. The promptSeed helps
        the AI understand the overall context of your world.
      </p>

      <CodeTabs
        title="Create World"
        examples={{
          curl: `curl -X POST https://api.narrativeprotocol.com/api/worlds \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <your-token>" \\
  -d '{
    "name": "Horse Racing",
    "description": "A horse racing simulation world",
    "domainTags": ["sports", "simulation"],
    "promptSeed": "This world simulates realistic horse racing events."
  }'`,
          javascript: `const response = await fetch(\`https://api.narrativeprotocol.com/api/worlds\`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your-token>"
  },
  body: JSON.stringify({
    name: "Horse Racing",
    description: "A horse racing simulation world",
    domainTags: ["sports", "simulation"],
    promptSeed: "This world simulates realistic horse racing events."
  })
});
console.log(await response.json());`,
          python: `import requests

response = requests.post(
    "https://api.narrativeprotocol.com/api/worlds",
    headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer <your-token>"
    },
    json={
        "name": "Horse Racing",
        "description": "A horse racing simulation world",
        "domainTags": ["sports", "simulation"],
        "promptSeed": "This world simulates realistic horse racing events."
    }
)
print(response.json())`,
        }}
        response={`{
  "success": true,
  "data": {
    "id": 39,
    "address": "0xd36f777a077ff3825653f6d521f1437b4da69699",
    "userId": 746631,
    "name": "Horse Racing",
    "description": "A horse racing simulation world",
    "domainTags": [
      "sports",
      "simulation"
    ],
    "promptSeed": "This world simulates realistic horse racing events.",
    "isPublic": false,
    "createdAt": "2026-02-18T04:13:02.315Z",
    "updatedAt": "2026-02-18T04:13:02.315Z"
  }
}`}
      />

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
        Define an Entity Schema
      </h3>
      <p className="text-muted-foreground mb-4">
        An Entity Schema defines the structure for entities in your world. For
        example, a &quot;horse&quot; schema defines what attributes (name,
        speed, wins) all horses will have. Individual horses (instances) will
        then have specific values for these attributes.
      </p>

      <CodeTabs
        title="Create Entity Schema"
        examples={{
          curl: `curl -X POST https://api.narrativeprotocol.com/api/entity-schemas \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <your-token>" \\
  -d '{
    "worldId": <world-id>,
    "name": "horse",
    "description": "A racing horse"
  }'`,
          javascript: `const response = await fetch(\`https://api.narrativeprotocol.com/api/entity-schemas\`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your-token>"
  },
  body: JSON.stringify({
    worldId: <world-id>,
    name: "horse",
    description: "A racing horse"
  })
});
console.log(await response.json());`,
          python: `import requests

response = requests.post(
    "https://api.narrativeprotocol.com/api/entity-schemas",
    headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer <your-token>"
    },
    json={
        "worldId": <world-id>,
        "name": "horse",
        "description": "A racing horse"
    }
)
print(response.json())`,
        }}
        response={`{
  "success": true,
  "data": {
    "id": 53,
    "worldId": 39,
    "name": "horse",
    "description": "A racing horse",
    "createdAt": "2026-02-18T04:13:49.117Z",
    "updatedAt": "2026-02-18T04:13:49.117Z",
    "attributeDefinitions": []
  }
}`}
      />

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
        Add Attributes to Entity Schema
      </h3>
      <p className="text-muted-foreground mb-4">
        Attributes define the specific properties each entity instance can have.
        You can specify type (string, integer, float, boolean), constraints, and
        default values. These attributes will be available for all instances of
        this schema.
      </p>

      <CodeTabs
        title="Create Attribute Definitions"
        examples={{
          curl: `# Speed rating attribute
curl -X POST https://api.narrativeprotocol.com/api/attribute-definitions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <your-token>" \\
  -d '{
    "entitySchemaId": <schema-id>,
    "name": "speed_rating",
    "type": "float",
    "constraints": { "min": 0, "max": 1 },
    "defaultValue": 0.5
  }'

# Name attribute
curl -X POST https://api.narrativeprotocol.com/api/attribute-definitions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <your-token>" \\
  -d '{
    "entitySchemaId": <schema-id>,
    "name": "name",
    "type": "string"
  }'

# Wins attribute
curl -X POST https://api.narrativeprotocol.com/api/attribute-definitions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <your-token>" \\
  -d '{
    "entitySchemaId": <schema-id>,
    "name": "wins",
    "type": "integer",
    "defaultValue": 0
  }'`,
          javascript: `// Speed rating attribute
await fetch(\`https://api.narrativeprotocol.com/api/attribute-definitions\`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your-token>"
  },
  body: JSON.stringify({
    entitySchemaId: <schema-id>,
    name: "speed_rating",
    type: "float",
    constraints: { min: 0, max: 1 },
    defaultValue: 0.5
  })
}).then(r => r.json()).then(console.log);

// Name attribute
await fetch(\`https://api.narrativeprotocol.com/api/attribute-definitions\`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your-token>"
  },
  body: JSON.stringify({
    entitySchemaId: <schema-id>,
    name: "name",
    type: "string"
  })
}).then(r => r.json()).then(console.log);

// Wins attribute
await fetch(\`https://api.narrativeprotocol.com/api/attribute-definitions\`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your-token>"
  },
  body: JSON.stringify({
    entitySchemaId: <schema-id>,
    name: "wins",
    type: "integer",
    defaultValue: 0
  })
}).then(r => r.json()).then(console.log);`,
          python: `import requests

# Speed rating attribute
print(requests.post(
    "https://api.narrativeprotocol.com/api/attribute-definitions",
    headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer <your-token>"
    },
    json={
        "entitySchemaId": <schema-id>,
        "name": "speed_rating",
        "type": "float",
        "constraints": {"min": 0, "max": 1},
        "defaultValue": 0.5
    }
).json())

# Name attribute
print(requests.post(
    "https://api.narrativeprotocol.com/api/attribute-definitions",
    headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer <your-token>"
    },
    json={
        "entitySchemaId": <schema-id>,
        "name": "name",
        "type": "string"
    }
).json())

# Wins attribute
print(requests.post(
    "https://api.narrativeprotocol.com/api/attribute-definitions",
    headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer <your-token>"
    },
    json={
        "entitySchemaId": <schema-id>,
        "name": "wins",
        "type": "integer",
        "defaultValue": 0
    }
).json())`,
        }}
        response={`{
  "success": true,
  "data": {
    "id": 239,
    "entitySchemaId": 53,
    "name": "speed_rating",
    "type": "float",
    "constraints": {
      "max": 1,
      "min": 0
    },
    "defaultValue": 0.5,
    "createdAt": "2026-02-18T04:15:08.734Z",
    "updatedAt": "2026-02-18T04:15:08.734Z"
  }
}`}
      />

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
        Create an Event (with first version)
      </h3>
      <p className="text-muted-foreground mb-4">
        Events define what can happen in your world. Each event has versions
        that become immutable once published, ensuring reproducibility. The
        first version is created along with the event. Key configurations
        include: inputSchema (what input the event accepts), stateChangeSchema
        (how entity state changes), and behaviorPrompt (instructions for the
        AI).
      </p>

      <CodeTabs
        title="Create Event"
        examples={{
          curl: `curl -X POST https://api.narrativeprotocol.com/api/events \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <your-token>" \\
  -d '{
    "worldId": <world-id>,
    "name": "race_result",
    "description": "Resolves a race and updates horse stats",
    "firstVersion": {
      "inputSchema": { "raceId": "string" },
      "reads": [<schema-id>],
      "stateChangeSchema": { "horse": "partial" },
      "resultSchema": { "winner": "string", "time": "string" },
      "behaviorPrompt": "Determine the race winner based on horse speed ratings. Update the winners wins count."
    }
  }'`,
          javascript: `const response = await fetch(\`https://api.narrativeprotocol.com/api/events\`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your-token>"
  },
  body: JSON.stringify({
    worldId: <world-id>,
    name: "race_result",
    description: "Resolves a race and updates horse stats",
    firstVersion: {
      inputSchema: { raceId: "string" },
      reads: [<schema-id>],
      stateChangeSchema: { horse: "partial" },
      resultSchema: { winner: "string", time: "string" },
      behaviorPrompt: "Determine the race winner based on horse speed ratings. Update the winners wins count."
    }
  })
});
console.log(await response.json());`,
          python: `import requests

response = requests.post(
    "https://api.narrativeprotocol.com/api/events",
    headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer <your-token>"
    },
    json={
        "worldId": <world-id>,
        "name": "race_result",
        "description": "Resolves a race and updates horse stats",
        "firstVersion": {
            "inputSchema": {"raceId": "string"},
            "reads": [<schema-id>],
            "stateChangeSchema": {"horse": "partial"},
            "resultSchema": {"winner": "string", "time": "string"},
            "behaviorPrompt": "Determine the race winner based on horse speed ratings. Update the winners wins count."
        }
    }
)
print(response.json())`,
        }}
        response={`{
  "success": true,
  "data": {
    "id": 29,
    "worldId": 39,
    "name": "race_result",
    "description": "Resolves a race and updates horse stats",
    "createdAt": "2026-02-18T04:17:00.453Z",
    "updatedAt": "2026-02-18T04:17:00.453Z",
    "versions": [
      {
        "id": 48,
        "eventId": 29,
        "version": 1,
        "inputSchema": {
          "raceId": "string"
        },
        "reads": [
          53
        ],
        "stateChangeSchema": {
          "horse": "partial"
        },
        "resultSchema": {
          "time": "string",
          "winner": "string"
        },
        "behaviorPrompt": "Determine the race winner based on horse speed ratings. Update the winners wins count.",
        "publishedAt": "2026-02-18T04:17:00.458Z",
        "createdAt": "2026-02-18T04:17:00.453Z"
      }
    ]
  }
}`}
      />

      {/* DIVIDER */}
      <hr className="my-12 border-border" />

      {/* SECTION 3: LIVE LAYER */}
      <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
        Live Layer
      </h2>
      <p className="text-muted-foreground mb-6">
        The Live layer is where your simulation actually runs. Deployments are
        isolated runtime instances of a world, containing entity instances,
        event bindings, and execution history. This is where you create
        entities, execute events, and watch the AI compute state changes.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
        Create a Deployment (with first binding)
      </h3>
      <p className="text-muted-foreground mb-4">
        A Deployment is a running instance of a world with its own isolated
        state. The firstBinding connects an event version to this deployment,
        allowing that event to be executed. The targetChains array specifies
        which blockchain networks to push event data to for on-chain
        verification.
      </p>

      <CodeTabs
        title="Create Deployment"
        examples={{
          curl: `curl -X POST https://api.narrativeprotocol.com/api/deployments \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <your-token>" \\
  -d '{
    "worldId": <world-id>,
    "name": "Season 1",
    "targetChains": ["near-testnet"],
    "firstBinding": {
      "eventId": <event-id>,
      "eventVersionId": <event-version-id>
    }
  }'`,
          javascript: `const response = await fetch(\`https://api.narrativeprotocol.com/api/deployments\`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your-token>"
  },
  body: JSON.stringify({
    worldId: <world-id>,
    name: "Season 1",
    targetChains: ["near-testnet"],
    firstBinding: {
      eventId: <event-id>,
      eventVersionId: <event-version-id>
    }
  })
});
console.log(await response.json());`,
          python: `import requests

response = requests.post(
    "https://api.narrativeprotocol.com/api/deployments",
    headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer <your-token>"
    },
    json={
        "worldId": <world-id>,
        "name": "Season 1",
        "targetChains": ["near-testnet"],
        "firstBinding": {
            "eventId": <event-id>,
            "eventVersionId": <event-version-id>
        }
    }
)
print(response.json())`,
        }}
        response={`{
  "success": true,
  "data": {
    "id": 28,
    "address": "0xe4598b767f81d0d95f44d1ab0655d83233a6a6f2",
    "worldId": 39,
    "userId": 746631,
    "name": "Season 1",
    "description": null,
    "mode": "upgradable",
    "targetChains": [
      "near-testnet"
    ],
    "aiModelId": null,
    "onchain": null,
    "isPublic": false,
    "isLLMPublic": false,
    "lockedAt": null,
    "createdAt": "2026-02-18T04:19:04.997Z",
    "updatedAt": "2026-02-18T04:19:04.997Z",
    "eventBindings": [
      {
        "id": 28,
        "deploymentId": 28,
        "eventId": 29,
        "eventVersionId": 48,
        "createdAt": "2026-02-18T04:19:04.997Z",
        "updatedAt": "2026-02-18T04:19:04.997Z"
      }
    ]
  }
}`}
      />

      <p className="text-muted-foreground mt-4 mb-4">
        The{" "}
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
          targetChains
        </code>{" "}
        option determines where event data is stored on-chain:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
        <li>
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">[]</code> -
          No on-chain storage (default)
        </li>
        <li>
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
            ["solana-devnet"]
          </code>{" "}
          - Push to Solana devnet
        </li>
        <li>
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
            ["near-testnet"]
          </code>{" "}
          - Push to NEAR testnet
        </li>
        <li>
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
            ["solana-devnet", "near-testnet"]
          </code>{" "}
          - Push to both chains
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
        Create Entity Instances
      </h3>
      <p className="text-muted-foreground mb-4">
        Entity Instances are the actual data in your deployment. They follow the
        schema you defined but each instance has its own state. Here we create
        two horses with specific names and speed ratings.
      </p>

      <CodeTabs
        title="Create Entity Instances"
        examples={{
          curl: `# Create first horse
curl -X POST https://api.narrativeprotocol.com/api/entity-instances \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <your-token>" \\
  -d '{
    "deploymentId": <deployment-id>,
    "entitySchemaId": <schema-id>,
    "instanceId": "HORSE_1",
    "state": {
      "name": "Midnight Comet",
      "speed_rating": 0.85
    }
  }'

# Create second horse
curl -X POST https://api.narrativeprotocol.com/api  -H "Content-Type: application/json" \\
 /entity-instances \\
 -H "Authorization: Bearer <your-token>" \\
  -d '{
    "deploymentId": <deployment-id>,
    "entitySchemaId": <schema-id>,
    "instanceId": "HORSE_2",
    "state": {
      "name": "Thunder Bolt",
      "speed_rating": 0.78
    }
  }'`,
          javascript: `// Create first horse
const horse1 = await fetch(\`https://api.narrativeprotocol.com/api/entity-instances\`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your-token>"
  },
  body: JSON.stringify({
    deploymentId: <deployment-id>,
    entitySchemaId: <schema-id>,
    instanceId: "HORSE_1",
    state: {
      name: "Midnight Comet",
      speed_rating: 0.85
    }
  })
});
console.log(await horse1.json());

// Create second horse
const horse2 = await fetch(\`https://api.narrativeprotocol.com/api/entity-instances\`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your-token>"
  },
  body: JSON.stringify({
    deploymentId: <deployment-id>,
    entitySchemaId: <schema-id>,
    instanceId: "HORSE_2",
    state: {
      name: "Thunder Bolt",
      speed_rating: 0.78
    }
  })
});
console.log(await horse2.json());`,
          python: `import requests

# Create first horse
print(requests.post(
    "https://api.narrativeprotocol.com/api/entity-instances",
    headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer <your-token>"
    },
    json={
        "deploymentId": <deployment-id>,
        "entitySchemaId": <schema-id>,
        "instanceId": "HORSE_1",
        "state": {
            "name": "Midnight Comet",
            "speed_rating": 0.85
        }
    }
).json())

# Create second horse
print(requests.post(
    "https://api.narrativeprotocol.com/api/entity-instances",
    headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer <your-token>"
    },
    json={
        "deploymentId": <deployment-id>,
        "entitySchemaId": <schema-id>,
        "instanceId": "HORSE_2",
        "state": {
            "name": "Thunder Bolt",
            "speed_rating": 0.78
        }
    }
).json())`,
        }}
        response={`{
  "success": true,
  "data": {
    "id": 107,
    "deploymentId": 28,
    "entitySchemaId": 53,
    "instanceId": "HORSE_1",
    "state": {
      "name": "Midnight Comet",
      "wins": 0,
      "speed_rating": 0.85
    },
    "createdAt": "2026-02-18T04:20:39.855Z",
    "updatedAt": "2026-02-18T04:20:39.855Z"
  }
}`}
      />

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
        Execute an Event
      </h3>
      <p className="text-muted-foreground mb-4">
        This is where the magic happens! Executing an event triggers the AI
        engine to process the event based on the world definition, current
        entity states, and the behavior prompt. The AI computes state changes
        and returns the results along with cryptographic attestation.
      </p>

      <CodeTabs
        title="Execute Event"
        examples={{
          curl: `curl -X POST https://api.narrativeprotocol.com/api/deployments/<deployment-id>/execute \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <your-token>" \\
  -d '{
    "eventId": <event-id>,
    "input": { "raceId": "RACE_001" }
  }'`,
          javascript: `const response = await fetch(
  \`https://api.narrativeprotocol.com/api/deployments/<deployment-id>/execute\`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer <your-token>"
    },
    body: JSON.stringify({
      eventId: <event-id>,
      input: { raceId: "RACE_001" }
    })
  }
);
console.log(await response.json());`,
          python: `import requests

response = requests.post(
    "https://api.narrativeprotocol.com/api/deployments/<deployment-id>/execute",
    headers={
        "Content-Type": "application/json",
        "Authorization": "Bearer <your-token>"
    },
    json={
        "eventId": <event-id>,
        "input": {"raceId": "RACE_001"}
    }
)
print(response.json())`,
        }}
        response={`{
  "success": true,
  "data": {
    "historyId": 11133,
    "eventVersionId": 48,
    "stateChanges": {
      "horse:HORSE_1": {
        "wins": 1
      }
    },
    "result": {
      "time": "2026-02-18T00:00:00Z",
      "winner": "Midnight Comet"
    },
    "attestation": {
      "signature": "0x0b09aa672cde45034a1091532b1e7f7e31b476181fd06ca4faafc566245a823f3ff0e8a65afd102b64a1370170e5819f242480e727d449cbdcc338d7324b9a191c",
      "signing_address": "0xbBC409e6b529817D257aD61D5738D8e3a39b5791",
      "signing_algo": "ecdsa",
      "text": "d3fc5ada116a1c0c9359ea6b7297b210cfecd393facc04c5d20209002a2dd126:ad558a6182aa4c55374cbd5eae218d6b2dae1957780630ecc6a0f01e49214af9"
    },
    "oracle": {
      "solana": null,
      "near": {
        "txHash": "8LjP9sqX26oQgScPy5RGzs8dEzwZiNSQHKrTpCLrP5yy",
        "receiptId": "ZWsNXEXPp1KyQWB68psjypi1PHGjMC8MrAomHBQLpGr"
      }
    }
  }
}`}
      />

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
        View Updated State
      </h3>
      <p className="text-muted-foreground mb-4">
        After executing an event, you can query the entity instances to see how
        the state has changed. The AI modified HORSE_1&apos;s state based on the
        event outcome.
      </p>

      <CodeTabs
        title="Get Entity Instances"
        examples={{
          curl: `curl https://api.narrativeprotocol.com/api/entity-instances?deploymentId=<deployment-id> \\
  -H "Authorization: Bearer <your-token>"`,
          javascript: `const response = await fetch(
  \`https://api.narrativeprotocol.com/api/entity-instances?deploymentId=<deployment-id>\`,
  {
    headers: { Authorization: "Bearer <your-token>" }
  }
);
console.log(await response.json());`,
          python: `import requests

response = requests.get(
    "https://api.narrativeprotocol.com/api/entity-instances",
    params={"deploymentId": <deployment-id>},
    headers={"Authorization": "Bearer <your-token>"}
)
print(response.json())`,
        }}
        response={`{
  "success": true,
  "data": [
    {
      "id": 108,
      "deploymentId": 28,
      "entitySchemaId": 53,
      "instanceId": "HORSE_2",
      "state": {
        "name": "Thunder Bolt",
        "wins": 0,
        "speed_rating": 0.78
      },
      "createdAt": "2026-02-18T04:25:07.459Z",
      "updatedAt": "2026-02-18T04:25:07.459Z",
      "entitySchema": {
        "id": 53,
        "worldId": 39,
        "name": "horse",
        "description": "A racing horse",
        "createdAt": "2026-02-18T04:13:49.117Z",
        "updatedAt": "2026-02-18T04:13:49.117Z"
      }
    },
    {
      "id": 107,
      "deploymentId": 28,
      "entitySchemaId": 53,
      "instanceId": "HORSE_1",
      "state": {
        "name": "Midnight Comet",
        "wins": 1,
        "speed_rating": 0.85
      },
      "createdAt": "2026-02-18T04:20:39.855Z",
      "updatedAt": "2026-02-18T04:22:46.166Z",
      "entitySchema": {
        "id": 53,
        "worldId": 39,
        "name": "horse",
        "description": "A racing horse",
        "createdAt": "2026-02-18T04:13:49.117Z",
        "updatedAt": "2026-02-18T04:13:49.117Z"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 2,
    "totalPages": 1
  }
}`}
      />

      <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">
        Next Steps
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>
          Learn about{" "}
          <Link href="/docs/concepts" className="text-primary hover:underline">
            Core Concepts
          </Link>{" "}
          - Architecture, versioning, modes
        </li>
        <li>
          Explore{" "}
          <Link
            href="/docs/concepts/ai-engine"
            className="text-primary hover:underline"
          >
            AI Engine
          </Link>{" "}
          - How events are processed and model selection
        </li>
        <li>
          See{" "}
          <Link
            href="/docs/concepts/on-chain-oracle"
            className="text-primary hover:underline"
          >
            On-chain Oracle
          </Link>{" "}
          - Multi-chain verification
        </li>
        <li>
          Check the{" "}
          <Link
            href="/docs/api-reference/authentication"
            className="text-primary hover:underline"
          >
            API Reference
          </Link>{" "}
          - Complete endpoints
        </li>
      </ul>
    </article>
  );
}
