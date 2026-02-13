import { CodeBlock } from "@/components/code-block"
import Link from "next/link"

export default function EntitySchemasAPIPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Entity Schemas API</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Entity Schemas define the structure of entities in your world.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Endpoints</h2>
      <p className="text-muted-foreground">
        There are two ways to access entity schemas:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
        <li><strong>Nested routes</strong> (recommended): <code className="bg-muted px-1.5 py-0.5 rounded text-sm">/api/worlds/:worldId/entity-schemas</code></li>
        <li><strong>Direct routes</strong>: <code className="bg-muted px-1.5 py-0.5 rounded text-sm">/api/entity-schemas</code> (for backwards compatibility)</li>
      </ol>

      <h3 className="text-xl font-semibold text-foreground mt-6">List Entity Schemas</h3>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>
      
      <CodeBlock
        code={`GET /api/worlds/:worldId/entity-schemas`}
        language="http"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>
      
      <CodeBlock
        code={`GET /api/entity-schemas?worldId=<world-id>`}
        language="http"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">Response</h4>
      
      <CodeBlock
        code={`{
  "success": true,
  "data": [
    {
      "id": 0,
      "worldId": 0,
      "name": "horse",
      "description": "A racing horse",
      "attributeDefinitions": [
        {
          "id": 0,
          "name": "speed_rating",
          "type": "float",
          "constraints": { "min": 0, "max": 1 },
          "defaultValue": 0.5
        }
      ],
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ]
}`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Create Entity Schema</h3>
      <p className="text-muted-foreground">
        Create an entity schema with optional inline attribute definitions.
      </p>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>
      
      <CodeBlock
        code={`POST /api/worlds/:worldId/entity-schemas`}
        language="http"
      />

      <CodeBlock
        code={`{
  "name": "horse",
  "description": "A racing horse",
  "attributeDefinitions": [
    {
      "name": "speed_rating",
      "type": "float",
      "constraints": { "min": 0, "max": 1 },
      "defaultValue": 0.5
    },
    {
      "name": "stamina",
      "type": "integer",
      "constraints": { "min": 0, "max": 100 },
      "defaultValue": 50
    }
  ]
}`}
        language="json"
        title="Request Body"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>
      
      <CodeBlock
        code={`POST /api/entity-schemas`}
        language="http"
      />

      <CodeBlock
        code={`{
  "worldId": 0,
  "name": "horse",
  "description": "A racing horse",
  "attributeDefinitions": [...]
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
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">worldId</code></td>
            <td className="px-4 py-2 text-muted-foreground">number</td>
            <td className="px-4 py-2 text-muted-foreground">Yes*</td>
            <td className="px-4 py-2 text-muted-foreground">Parent world ID (*not needed for nested route)</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">name</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">Schema name (max 255 chars)</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">description</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Description</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">attributeDefinitions</code></td>
            <td className="px-4 py-2 text-muted-foreground">array</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Inline attribute definitions</td>
          </tr>
        </tbody>
      </table>

      <h4 className="text-lg font-semibold text-foreground mt-4">Inline Attribute Definition</h4>
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
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">name</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">Attribute name</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">type</code></td>
            <td className="px-4 py-2 text-muted-foreground">enum</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">string</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">integer</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">float</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">boolean</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">json</code></td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">constraints</code></td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Type-specific constraints</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">defaultValue</code></td>
            <td className="px-4 py-2 text-muted-foreground">any</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Default value for new instances</td>
          </tr>
        </tbody>
      </table>

      <h4 className="text-lg font-semibold text-foreground mt-4">Response</h4>
      
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "id": 123456,
    "worldId": 0,
    "name": "horse",
    "description": "A racing horse",
    "attributeDefinitions": [
      {
        "id": 123457,
        "entitySchemaId": 123456,
        "name": "speed_rating",
        "type": "float",
        "constraints": { "min": 0, "max": 1 },
        "defaultValue": 0.5
      }
    ],
    "createdAt": "2024-01-01T00:00:00Z"
  }
}`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Get Entity Schema</h3>
      
      <CodeBlock
        code={`GET /api/entity-schemas/:id`}
        language="http"
      />

      <p className="text-muted-foreground">
        Returns schema with all attribute definitions.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Update Entity Schema</h3>
      
      <CodeBlock
        code={`PUT /api/entity-schemas/:id`}
        language="http"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Delete Entity Schema</h3>
      
      <CodeBlock
        code={`DELETE /api/entity-schemas/:id`}
        language="http"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">Constraints</h4>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Cannot delete if attribute definitions exist (409 Conflict)</li>
        <li>Cannot delete if entity instances exist (409 Conflict)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Attribute Definitions</h2>
      <p className="text-muted-foreground">
        Attribute definitions can be created inline when creating an entity schema (recommended) or separately.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">List Attribute Definitions</h3>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>
      
      <CodeBlock
        code={`GET /api/worlds/:worldId/entity-schemas/:schemaId/attribute-definitions`}
        language="http"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>
      
      <CodeBlock
        code={`GET /api/attribute-definitions?entitySchemaId=<schema-id>`}
        language="http"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Create Attribute Definition</h3>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>
      
      <CodeBlock
        code={`POST /api/worlds/:worldId/entity-schemas/:schemaId/attribute-definitions`}
        language="http"
      />

      <CodeBlock
        code={`{
  "name": "speed_rating",
  "type": "float",
  "constraints": { "min": 0, "max": 1 },
  "defaultValue": 0.5
}`}
        language="json"
        title="Request Body"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>
      
      <CodeBlock
        code={`POST /api/attribute-definitions`}
        language="http"
      />

      <CodeBlock
        code={`{
  "entitySchemaId": 0,
  "name": "speed_rating",
  "type": "float",
  "constraints": { "min": 0, "max": 1 },
  "defaultValue": 0.5
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
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">entitySchemaId</code></td>
            <td className="px-4 py-2 text-muted-foreground">number</td>
            <td className="px-4 py-2 text-muted-foreground">Yes*</td>
            <td className="px-4 py-2 text-muted-foreground">Parent schema ID (*not needed for nested route)</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">name</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">Attribute name</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">type</code></td>
            <td className="px-4 py-2 text-muted-foreground">enum</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">string</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">integer</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">float</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">boolean</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">json</code></td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">constraints</code></td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Type-specific constraints</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">defaultValue</code></td>
            <td className="px-4 py-2 text-muted-foreground">any</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Default value for new instances</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold text-foreground mt-6">Update Attribute Definition</h3>
      
      <CodeBlock
        code={`PUT /api/attribute-definitions/:id`}
        language="http"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Delete Attribute Definition</h3>
      
      <CodeBlock
        code={`DELETE /api/attribute-definitions/:id`}
        language="http"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Related</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><Link href="/docs/api-reference/worlds" className="text-primary hover:underline">Worlds API</Link> - Parent resource</li>
        <li><Link href="/docs/api-reference/entity-instances" className="text-primary hover:underline">Entity Instances API</Link> - Runtime entities</li>
      </ul>
    </article>
  )
}
