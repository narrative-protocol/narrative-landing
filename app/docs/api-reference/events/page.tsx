import { CodeBlock } from "@/components/code-block"
import Link from "next/link"

export default function EventsAPIPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Events API</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Events define what can happen in your world. Each event can have multiple versions.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Endpoints</h2>
      <p className="text-muted-foreground">
        There are two ways to access events:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
        <li><strong>Nested routes</strong> (recommended): <code className="bg-muted px-1.5 py-0.5 rounded text-sm">/api/worlds/:worldId/events</code></li>
        <li><strong>Direct routes</strong>: <code className="bg-muted px-1.5 py-0.5 rounded text-sm">/api/events</code> (for backwards compatibility)</li>
      </ol>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Event Endpoints</h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">List Events</h3>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>
      
      <CodeBlock
        code={`GET /api/worlds/:worldId/events`}
        language="http"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>
      
      <CodeBlock
        code={`GET /api/events?worldId=<world-id>`}
        language="http"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Create Event</h3>
      <p className="text-muted-foreground">
        Creates an event with its first version. Every event must have at least one version.
      </p>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>
      
      <CodeBlock
        code={`POST /api/worlds/:worldId/events`}
        language="http"
      />

      <CodeBlock
        code={`{
  "name": "race_result",
  "description": "Resolves a race and updates horse stats",
  "firstVersion": {
    "inputSchema": {
      "date": "string",
      "trackId": "string"
    },
    "reads": [1, 2],
    "stateChangeSchema": {
      "horse": "partial"
    },
    "resultSchema": {
      "winner": "string",
      "time": "number"
    },
    "behaviorPrompt": "Determine the race winner based on horse stats and track conditions."
  }
}`}
        language="json"
        title="Request Body"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>
      
      <CodeBlock
        code={`POST /api/events`}
        language="http"
      />

      <CodeBlock
        code={`{
  "worldId": 1,
  "name": "race_result",
  "description": "Resolves a race and updates horse stats",
  "firstVersion": {...}
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
            <td className="px-4 py-2 text-muted-foreground">integer</td>
            <td className="px-4 py-2 text-muted-foreground">Yes*</td>
            <td className="px-4 py-2 text-muted-foreground">Parent world ID (*not needed for nested route)</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">name</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">Event name</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">description</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Event description</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">firstVersion</code></td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">Yes</td>
            <td className="px-4 py-2 text-muted-foreground">First version configuration</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">firstVersion.inputSchema</code></td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Expected input fields</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">firstVersion.reads</code></td>
            <td className="px-4 py-2 text-muted-foreground">integer[]</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Entity schema IDs to read</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">firstVersion.stateChangeSchema</code></td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">How state changes (partial/full/append)</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">firstVersion.resultSchema</code></td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Public output fields</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">firstVersion.behaviorPrompt</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">AI resolution instructions</td>
          </tr>
        </tbody>
      </table>

      <h4 className="text-lg font-semibold text-foreground mt-4">Response</h4>
      <p className="text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">201 Created</code></p>
      
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "id": 123456,
    "worldId": 1,
    "name": "race_result",
    "description": "Resolves a race and updates horse stats",
    "versions": [
      {
        "id": 123457,
        "eventId": 123456,
        "version": 1,
        "publishedAt": null,
        ...
      }
    ]
  }
}`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Get Event</h3>
      
      <CodeBlock
        code={`GET /api/events/:id`}
        language="http"
      />

      <p className="text-muted-foreground">
        Returns event with all versions.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Update Event</h3>
      
      <CodeBlock
        code={`PUT /api/events/:id`}
        language="http"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Delete Event</h3>
      
      <CodeBlock
        code={`DELETE /api/events/:id`}
        language="http"
      />

      <p className="text-muted-foreground">
        Deletes an event and all its versions.
      </p>

      <h4 className="text-lg font-semibold text-foreground mt-4">Constraints</h4>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Cannot delete if any version is published (409 Conflict)</li>
        <li>Cannot delete if bound to deployments (409 Conflict)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Event Version Endpoints</h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">List Event Versions</h3>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>
      
      <CodeBlock
        code={`GET /api/worlds/:worldId/events/:eventId/event-versions`}
        language="http"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>
      
      <CodeBlock
        code={`GET /api/event-versions?eventId=<event-id>`}
        language="http"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Create Event Version</h3>
      <p className="text-muted-foreground">
        Versions auto-increment based on existing versions for the event.
      </p>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>
      
      <CodeBlock
        code={`POST /api/worlds/:worldId/events/:eventId/event-versions`}
        language="http"
      />

      <CodeBlock
        code={`{
  "inputSchema": {
    "date": "string",
    "trackId": "string"
  },
  "reads": [1, 2],
  "stateChangeSchema": {
    "horse": "partial"
  },
  "resultSchema": {
    "winner": "string",
    "time": "number"
  },
  "behaviorPrompt": "Determine the race winner based on horse stats and track conditions."
}`}
        language="json"
        title="Request Body"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>
      
      <CodeBlock
        code={`POST /api/event-versions`}
        language="http"
      />

      <CodeBlock
        code={`{
  "eventId": 1,
  "inputSchema": {...},
  ...
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
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">eventId</code></td>
            <td className="px-4 py-2 text-muted-foreground">integer</td>
            <td className="px-4 py-2 text-muted-foreground">Yes*</td>
            <td className="px-4 py-2 text-muted-foreground">Parent event ID (*not needed for nested route)</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">inputSchema</code></td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Expected input fields</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">reads</code></td>
            <td className="px-4 py-2 text-muted-foreground">integer[]</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Entity schema IDs to read</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">stateChangeSchema</code></td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">How state changes (partial/full/append)</td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">resultSchema</code></td>
            <td className="px-4 py-2 text-muted-foreground">object</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Public output fields</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">behaviorPrompt</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">AI resolution instructions</td>
          </tr>
        </tbody>
      </table>

      <h4 className="text-lg font-semibold text-foreground mt-4">Response</h4>
      <p className="text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">201 Created</code></p>
      
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "id": 123457,
    "eventId": 123456,
    "version": 2,
    "publishedAt": null,
    ...
  }
}`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Update Event Version</h3>
      
      <CodeBlock
        code={`PUT /api/event-versions/:id`}
        language="http"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">Constraints</h4>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Cannot update published versions (400 Bad Request)</li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">Publish Event Version</h3>
      <p className="text-muted-foreground">
        Makes the version immutable. Idempotent for already-published versions.
      </p>
      <p className="text-muted-foreground">
        <strong>Nested route (recommended)</strong>
      </p>
      
      <CodeBlock
        code={`POST /api/worlds/:worldId/events/:eventId/event-versions/:versionId/publish`}
        language="http"
      />

      <p className="text-muted-foreground">
        <strong>Direct route</strong>
      </p>
      
      <CodeBlock
        code={`POST /api/event-versions/:id/publish`}
        language="http"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">Response</h4>
      
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "id": 123457,
    "version": 1,
    "publishedAt": "2024-01-01T00:00:00Z",
    ...
  }
}`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Delete Event Version</h3>
      
      <CodeBlock
        code={`DELETE /api/event-versions/:id`}
        language="http"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">Constraints</h4>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Cannot delete published versions (400 Bad Request)</li>
        <li>Cannot delete if bound to deployments (409 Conflict)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Related</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><Link href="/docs/api-reference/deployments" className="text-primary hover:underline">Deployments API</Link> - Bind events to deployments</li>
        <li><Link href="/docs/concepts/event" className="text-primary hover:underline">Events &amp; Versioning</Link> - Concept documentation</li>
      </ul>
    </article>
  )
}
