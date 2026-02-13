import { CodeBlock } from "@/components/code-block"
import Link from "next/link"

export default function AuthenticationPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Authentication</h1>
      <p className="text-lg text-muted-foreground mt-4">
        All <code className="bg-muted px-1.5 py-0.5 rounded text-sm">/api/*</code> endpoints require authentication via Bearer token. Narrative Studio supports two authentication methods:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
        <li><strong>Privy Authentication</strong> - Production auth via Privy</li>
        <li><strong>Debug Authentication</strong> - Simple JWT for development/testing (USE THIS FOR NOW)</li>
      </ol>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Authorization Header</h2>
      <p className="text-muted-foreground">
        All authenticated requests must include the Authorization header:
      </p>
      
      <CodeBlock
        code={`Authorization: Bearer <token>`}
        language="http"
        title="Header"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">Debug Authentication</h2>
      <p className="text-muted-foreground">
        For development and testing, use the debug authentication system. This creates a user and returns a JWT token signed by the server.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Register (Get Token)</h3>
      
      <CodeBlock
        code={`POST /DEBUG_register`}
        language="http"
      />

      <h4 className="text-lg font-semibold text-foreground mt-4">Request Body (optional)</h4>
      
      <CodeBlock
        code={`{
  "email": "dev@example.com"
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
            <td className="px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">email</code></td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">No</td>
            <td className="px-4 py-2 text-muted-foreground">Optional email for the user</td>
          </tr>
        </tbody>
      </table>

      <h4 className="text-lg font-semibold text-foreground mt-4">Response</h4>
      <p className="text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded text-sm">201 Created</code></p>
      
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "email": "dev@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Usage Example</h3>
      
      <CodeBlock
        code={`# 1. Register and get a token
TOKEN=$(curl -s -X POST $URL/DEBUG_register \\
  -H "Content-Type: application/json" \\
  -d '{"email": "dev@example.com"}' | jq -r '.data.token')

# 2. Use the token for API calls
curl $URL/api/worlds \\
  -H "Authorization: Bearer $TOKEN"

# 3. Create a world
curl -X POST $URL/api/worlds \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My World",
    "description": "A test world"
  }'`}
        language="bash"
        title="Shell"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">Token Details</h3>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Algorithm</strong>: HS256</li>
        <li><strong>Expiration</strong>: 7 days</li>
        <li><strong>Issuer</strong>: <code className="bg-muted px-1.5 py-0.5 rounded text-sm">np-core-debug</code></li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Next Steps</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>See <Link href="/docs/api-reference/worlds" className="text-primary hover:underline">Worlds API</Link> to create your first world</li>
        <li>Check <Link href="/docs/quickstart" className="text-primary hover:underline">Quickstart Guide</Link> for a complete walkthrough</li>
      </ul>
    </article>
  )
}
