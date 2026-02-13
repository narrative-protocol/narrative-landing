import { CodeBlock } from "@/components/code-block"
import Link from "next/link"

export default function WorldsAPIPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Worlds API</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Worlds are the top-level containers for all definitions in Narrative Studio.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Endpoints</h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">List Worlds</h3>
      
      <CodeBlock
        code={`GET /api/worlds`}
        language="http"
      />

      <p className="text-muted-foreground">
        Returns all worlds owned by the authenticated user.
      </p>

      <h4 className="text-lg font-semibold text-foreground mt-4">Response</h4>
      
      <CodeBlock
        code={`{
  "success": true,
  "data": [
    {
      "id": "number",
      "name": "Horse Racing",
      "description": "A horse racing simulation",
      "domainTags": ["sports", "racing"],
      "promptSeed": "This world simulates...",
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  ]
}`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Create World</h3>
      
      <CodeBlock
        code={`POST /api/worlds`}
        language="http"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">Request Body</h4>
      
      <CodeBlock
        code={`{
  "name": "Horse Racing",
  "description": "A horse racing simulation world",
  "domainTags": ["sports", "racing"],
  "promptSeed": "This world simulates realistic horse racing events."
}`}
        language="json"
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
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">name</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">World name (max 255 chars)</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">description</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Description of the world</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">domainTags</code></td>
            <td className="px-4 py-2 text-muted-foreground">string[]</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Categories for organization</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">promptSeed</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Base context for AI resolution</td>
          </tr>
        </tbody>
      </table>

      <h4 className="text-lg font-semibold text-foreground mt-4">Response</h4>
      <p className="text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">201 Created</code></p>
      
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "id": "number",
    "name": "Horse Racing",
    ...
  }
}`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Get World</h3>
      
      <CodeBlock
        code={`GET /api/worlds/:id`}
        language="http"
      />

      <p className="text-muted-foreground">
        Returns a single world with its related schemas and events.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Update World</h3>
      
      <CodeBlock
        code={`PUT /api/worlds/:id`}
        language="http"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">Request Body</h4>
      <p className="text-muted-foreground">
        Same fields as Create (all optional)
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Delete World</h3>
      
      <CodeBlock
        code={`DELETE /api/worlds/:id`}
        language="http"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">Constraints</h4>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Cannot delete if entity schemas exist (409 Conflict)</li>
        <li>Cannot delete if deployments exist (409 Conflict)</li>
      </ul>

      <h4 className="text-lg font-semibold text-foreground mt-4">Response</h4>
      <p className="text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">200 OK</code></p>
      
      <CodeBlock
        code={`{
  "success": true,
  "message": "World deleted successfully"
}`}
        language="json"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Error Responses</h2>
      <table className="w-full border-collapse border border-border my-4">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2 text-left text-foreground font-semibold">Status</th>
            <th className="px-4 py-2 text-left text-foreground font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">400</td>
            <td className="px-4 py-2 text-muted-foreground">Validation error</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">401</td>
            <td className="px-4 py-2 text-muted-foreground">Unauthorized</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">404</td>
            <td className="px-4 py-2 text-muted-foreground">World not found</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground">409</td>
            <td className="px-4 py-2 text-muted-foreground">Cannot delete - has dependencies</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Related</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><Link href="/docs/api-reference/entity-schemas" className="text-primary hover:underline">Entity Schemas API</Link> - Define entity types</li>
        <li><Link href="/docs/api-reference/events" className="text-primary hover:underline">Events API</Link> - Define events</li>
      </ul>
    </article>
  )
}
