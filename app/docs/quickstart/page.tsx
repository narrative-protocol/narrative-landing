import { Callout } from "@/components/callout"
import { CodeBlock } from "@/components/code-block"
import Link from "next/link"

export default function QuickstartPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Quickstart</h1>
      <p className="text-lg text-muted-foreground mt-4">
        This guide will walk you through creating your first world, defining entities, executing events, and seeing AI-driven state changes.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Get an Auth Token</h2>
      <p className="text-muted-foreground">
        First, register to get a debug token:
      </p>
      
      <CodeBlock
        code={`# Register and save the token
TOKEN=$(curl -s -X POST $URL/DEBUG_register \\
  -H "Content-Type: application/json" \\
  -d '{"email": "dev@example.com"}' | jq -r '.data.token')

echo $TOKEN`}
        language="bash"
        title="Shell"
      />
      
      <p className="text-muted-foreground">
        Use this token in the <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Authorization</code> header for all subsequent requests.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Create Your First World</h2>
      
      <CodeBlock
        code={`WORLD_ID=$(curl -s -X POST $URL/api/worlds \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{
    "name": "Horse Racing",
    "description": "A horse racing simulation world",
    "domainTags": ["sports", "simulation"],
    "promptSeed": "This world simulates realistic horse racing events."
  }' | jq -r '.data.id')

echo "World ID: $WORLD_ID"`}
        language="bash"
        title="Shell"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Define an Entity Schema</h2>
      
      <CodeBlock
        code={`SCHEMA_ID=$(curl -s -X POST $URL/api/entity-schemas \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{
    "worldId": '$WORLD_ID',
    "name": "horse",
    "description": "A racing horse"
  }' | jq -r '.data.id')

echo "Schema ID: $SCHEMA_ID"`}
        language="bash"
        title="Shell"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Add Attributes to Entity Schema</h2>
      
      <CodeBlock
        code={`# Speed rating attribute
curl -s -X POST $URL/api/attribute-definitions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{
    "entitySchemaId": '$SCHEMA_ID',
    "name": "speed_rating",
    "type": "float",
    "constraints": { "min": 0, "max": 1 },
    "defaultValue": 0.5
  }'

# Name attribute
curl -s -X POST $URL/api/attribute-definitions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{
    "entitySchemaId": '$SCHEMA_ID',
    "name": "name",
    "type": "string"
  }'

# Wins attribute
curl -s -X POST $URL/api/attribute-definitions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{
    "entitySchemaId": '$SCHEMA_ID',
    "name": "wins",
    "type": "integer",
    "defaultValue": 0
  }'`}
        language="bash"
        title="Shell"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Create an Event (with first version)</h2>
      
      <CodeBlock
        code={`EVENT_ID=$(curl -s -X POST $URL/api/events \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{
    "worldId": '$WORLD_ID',
    "name": "race_result",
    "description": "Resolves a race and updates horse stats",
    "firstVersion": {
      "inputSchema": { "raceId": "string" },
      "reads": ['$SCHEMA_ID'],
      "stateChangeSchema": { "horse": "partial" },
      "resultSchema": { "winner": "string", "time": "string" },
      "behaviorPrompt": "Determine the race winner based on horse speed ratings. Update the winners wins count."
    }
  }' | jq -r '.data.id')

EVENT_VERSION_ID=$(curl -s $URL/api/events/$EVENT_ID \\
  -H "Authorization: Bearer $TOKEN" | jq -r '.data.versions[0].id')

echo "Event ID: $EVENT_ID, Version ID: $EVENT_VERSION_ID"`}
        language="bash"
        title="Shell"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Create a Deployment (with first binding)</h2>
      
      <CodeBlock
        code={`DEPLOYMENT_ID=$(curl -s -X POST $URL/api/deployments \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{
    "worldId": '$WORLD_ID',
    "name": "Season 1",
    "targetChain": "solana",
    "firstBinding": {
      "eventId": '$EVENT_ID',
      "eventVersionId": '$EVENT_VERSION_ID'
    }
  }' | jq -r '.data.id')

echo "Deployment ID: $DEPLOYMENT_ID"`}
        language="bash"
        title="Shell"
      />

      <p className="text-muted-foreground">
        The <code className="bg-muted px-1.5 py-0.5 rounded text-sm">targetChain</code> option determines where event data is stored on-chain:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">none</code> - No on-chain storage (default)</li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">solana</code> - Push to Solana</li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">near</code> - Push to NEAR</li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">both</code> - Push to both chains</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Create Entity Instances</h2>
      
      <CodeBlock
        code={`# Create first horse
curl -s -X POST $URL/api/entity-instances \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{
    "deploymentId": '$DEPLOYMENT_ID',
    "entitySchemaId": '$SCHEMA_ID',
    "instanceId": "HORSE_1",
    "state": {
      "name": "Midnight Comet",
      "speed_rating": 0.85
    }
  }'

# Create second horse
curl -s -X POST $URL/api/entity-instances \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{
    "deploymentId": '$DEPLOYMENT_ID',
    "entitySchemaId": '$SCHEMA_ID',
    "instanceId": "HORSE_2",
    "state": {
      "name": "Thunder Bolt",
      "speed_rating": 0.78
    }
  }'`}
        language="bash"
        title="Shell"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Execute an Event</h2>
      <p className="text-muted-foreground">
        Now the exciting part - execute the event and watch the AI compute state changes:
      </p>
      
      <CodeBlock
        code={`curl -s -X POST $URL/api/deployments/$DEPLOYMENT_ID/execute \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{
    "eventId": '$EVENT_ID',
    "input": { "raceId": "RACE_001" }
  }' | jq`}
        language="bash"
        title="Shell"
      />

      <p className="text-muted-foreground"><strong>Response:</strong></p>
      
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "historyId": 1,
    "eventVersionId": 1,
    "stateChanges": {
      "horse:HORSE_1": { "wins": 1 }
    },
    "result": {
      "winner": "HORSE_1",
      "time": "1:45.32"
    },
    "attestation": {
      "signature": "0x77057b...",
      "signing_address": "0x34B7Bc...",
      "signing_algo": "ecdsa",
      "text": "eda20c62..."
    },
    "oracle": {
      "solana": { "signature": "5xYz...", "eventRecordPda": "7abc..." },
      "near": null
    }
  }
}`}
        language="json"
        title="Response"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">View Updated State</h2>
      <p className="text-muted-foreground">
        Check the entity instances to see the updated state:
      </p>
      
      <CodeBlock
        code={`curl -s $URL/api/entity-instances?deploymentId=$DEPLOYMENT_ID \\
  -H "Authorization: Bearer $TOKEN" | jq '.data'`}
        language="bash"
        title="Shell"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Full Script</h2>
      <p className="text-muted-foreground">
        Here&apos;s a complete script to run all steps:
      </p>
      
      <CodeBlock
        code={`#!/bin/bash
set -e

URL="http://localhost:3000"

# Get token
TOKEN=$(curl -s -X POST $URL/DEBUG_register \\
  -H "Content-Type: application/json" \\
  -d '{"email": "dev@example.com"}' | jq -r '.data.token')

# Create world
WORLD_ID=$(curl -s -X POST $URL/api/worlds \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{"name": "Horse Racing", "description": "A simulation"}' | jq -r '.data.id')

# Create schema
SCHEMA_ID=$(curl -s -X POST $URL/api/entity-schemas \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{"worldId": '$WORLD_ID', "name": "horse"}' | jq -r '.data.id')

# Create event with first version
EVENT_RESPONSE=$(curl -s -X POST $URL/api/events \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{
    "worldId": '$WORLD_ID',
    "name": "race_result",
    "firstVersion": {
      "inputSchema": { "raceId": "string" },
      "reads": ['$SCHEMA_ID'],
      "stateChangeSchema": { "horse": "partial" },
      "behaviorPrompt": "Determine winner based on speed."
    }
  }')

EVENT_ID=$(echo $EVENT_RESPONSE | jq -r '.data.id')
EVENT_VERSION_ID=$(echo $EVENT_RESPONSE | jq -r '.data.versions[0].id')

# Create deployment with first binding (targetChain: none|solana|near|both)
DEPLOYMENT_ID=$(curl -s -X POST $URL/api/deployments \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{
    "worldId": '$WORLD_ID',
    "name": "Season 1",
    "targetChain": "solana",
    "firstBinding": {
      "eventId": '$EVENT_ID',
      "eventVersionId": '$EVENT_VERSION_ID'
    }
  }' | jq -r '.data.id')

# Create instances
curl -s -X POST $URL/api/entity-instances \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{
    "deploymentId": '$DEPLOYMENT_ID',
    "entitySchemaId": '$SCHEMA_ID',
    "instanceId": "HORSE_1",
    "state": {"name": "Midnight", "speed_rating": 0.85}
  }' > /dev/null

curl -s -X POST $URL/api/entity-instances \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{
    "deploymentId": '$DEPLOYMENT_ID',
    "entitySchemaId": '$SCHEMA_ID',
    "instanceId": "HORSE_2",
    "state": {"name": "Thunder", "speed_rating": 0.78}
  }' > /dev/null

# Execute event
echo "Executing event..."
curl -s -X POST $URL/api/deployments/$DEPLOYMENT_ID/execute \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{"eventId": '$EVENT_ID', "input": {"raceId": "RACE_001"}}' | jq

echo "Done! World: $WORLD_ID, Deployment: $DEPLOYMENT_ID"`}
        language="bash"
        title="full-setup.sh"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Next Steps</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Learn about <Link href="/docs/concepts" className="text-primary hover:underline">Core Concepts</Link> - Architecture, versioning, modes</li>
        <li>Explore <Link href="/docs/concepts/ai-execution" className="text-primary hover:underline">AI Execution</Link> - How events are processed</li>
        <li>See <Link href="/docs/concepts/on-chain-oracle" className="text-primary hover:underline">On-chain Oracle</Link> - Multi-chain verification</li>
        <li>Check the <Link href="/docs/api-reference/authentication" className="text-primary hover:underline">API Reference</Link> - Complete endpoints</li>
      </ul>
    </article>
  )
}
