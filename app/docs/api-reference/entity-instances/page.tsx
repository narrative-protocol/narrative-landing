import { CodeBlock } from "@/components/code-block"
import Link from "next/link"

export default function EntityInstancesAPIPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Entity Instances API</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Entity Instances are the actual data in a deployment. Multiple instances can share the same schema.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Endpoints</h2>
      <p className="text-muted-foreground">
        There are two ways to access entity instances:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
        <li><strong>Nested routes</strong> (recommended): <code className="bg-muted px-1.5 py-0.5 rounded text-sm">/api/worlds/:worldId/deployments/:deploymentId/entity-instances</code></li>
        <li><strong>Direct routes</strong>: <code className="bg-muted px-1.5 py-0.5 rounded text-sm">/api/entity-instances</code> (for backwards compatibility)</li>
      </ol>

      <h3 className="text-xl font-semibold text-foreground mt-6">List Entity Instances</h3>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>
      
      <CodeBlock
        code={`GET /api/worlds/:worldId/deployments/:deploymentId/entity-instances?entitySchemaId=<schema-id>`}
        language="http"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>
      
      <CodeBlock
        code={`GET /api/entity-instances?deploymentId=<deployment-id>&entitySchemaId=<schema-id>`}
        language="http"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">Query Parameters</h4>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">Param</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Required</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">deploymentId</code></td>
            <td className="px-4 py-2 text-muted-foreground">Yes*</td>
            <td className="px-4 py-2 text-muted-foreground">Filter by deployment (*not needed for nested route)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">entitySchemaId</code></td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Filter by entity schema</td>
          </tr>
        </tbody>
      </table>

      <h4 className="text-lg font-semibold text-foreground mt-4">Response</h4>
      
      <CodeBlock
        code={`{
  "success": true,
  "data": [
    {
      "id": 123456,
      "deploymentId": 123450,
      "entitySchemaId": 123451,
      "instanceId": "HORSE_1",
      "state": {
        "name": "Midnight Comet",
        "speed_rating": 0.85,
        "stamina": 0.76,
        "wins": 3
      },
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  ]
}`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Create Entity Instance</h3>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>
      
      <CodeBlock
        code={`POST /api/worlds/:worldId/deployments/:deploymentId/entity-instances`}
        language="http"
      />

      <CodeBlock
        code={`{
  "entitySchemaId": 123451,
  "instanceId": "HORSE_1",
  "state": {
    "name": "Midnight Comet",
    "speed_rating": 0.85
  }
}`}
        language="json"
        title="Request Body"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>
      
      <CodeBlock
        code={`POST /api/entity-instances`}
        language="http"
      />

      <CodeBlock
        code={`{
  "deploymentId": 123450,
  "entitySchemaId": 123451,
  "instanceId": "HORSE_1",
  "state": {...}
}`}
        language="json"
        title="Request Body"
      />

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
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">deploymentId</code></td>
            <td className="px-4 py-2 text-muted-foreground">number</td>
            <td className="px-4 py-2 text-muted-foreground">Yes*</td>
            <td className="px-4 py-2 text-muted-foreground">Parent deployment ID (*not needed for nested route)</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">entitySchemaId</code></td>
            <td className="px-4 py-2 text-muted-foreground">number</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">Entity schema ID</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">instanceId</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">Unique identifier within schema (e.g., &quot;HORSE_1&quot;)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">state</code></td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Initial state (defaults applied from schema)</td>
          </tr>
        </tbody>
      </table>

      <h4 className="text-lg font-semibold text-foreground mt-4">Default Values</h4>
      <p className="text-muted-foreground">
        Any attributes not provided in <code className="bg-muted px-1.5 py-0.5 rounded text-sm">state</code> will use the default values from the attribute definitions:
      </p>
      
      <CodeBlock
        code={`// Request
{ "entitySchemaId": 123451, "instanceId": "HORSE_1", "state": { "name": "Midnight" } }

// Response (with defaults)
{
  "id": 123456,
  "instanceId": "HORSE_1",
  "state": {
    "name": "Midnight",
    "speed_rating": 0.5,  // default
    "stamina": 0.5,       // default
    "wins": 0             // default
  }
}`}
        language="json"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">Constraints</h4>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Cannot create on locked deployment (400 Bad Request)</li>
        <li>Instance ID must be unique within the schema for this deployment (400 Bad Request)</li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">Get Entity Instance</h3>
      
      <CodeBlock
        code={`GET /api/entity-instances/:id`}
        language="http"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Update Entity Instance</h3>
      
      <CodeBlock
        code={`PUT /api/entity-instances/:id`}
        language="http"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">Request Body</h4>
      
      <CodeBlock
        code={`{
  "state": {
    "speed_rating": 0.88,
    "wins": 4
  }
}`}
        language="json"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">Constraints</h4>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Cannot update on locked deployment (400 Bad Request)</li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">Delete Entity Instance</h3>
      
      <CodeBlock
        code={`DELETE /api/entity-instances/:id`}
        language="http"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">Constraints</h4>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Cannot delete on locked deployment (400 Bad Request)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Naming Conventions</h2>
      <p className="text-muted-foreground">
        Instance IDs typically follow a pattern like:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">HORSE_1</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">HORSE_2</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">HORSE_3</code></li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">TRACK_MAIN</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">TRACK_PRACTICE</code></li>
        <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">JOCKEY_A</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">JOCKEY_B</code></li>
      </ul>
      <p className="text-muted-foreground">
        This allows for easy identification and querying of related instances.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Related</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><Link href="/docs/api-reference/entity-schemas" className="text-primary hover:underline">Entity Schemas API</Link> - Define entity types</li>
        <li><Link href="/docs/api-reference/deployments" className="text-primary hover:underline">Deployments API</Link> - Parent resource</li>
        <li><Link href="/docs/concepts/entities" className="text-primary hover:underline">Entities</Link> - Concept documentation</li>
      </ul>
    </article>
  )
}
