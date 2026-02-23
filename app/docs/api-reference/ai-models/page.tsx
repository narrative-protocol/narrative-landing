import { CodeBlock } from "@/components/code-block";
import Link from "next/link";

export default function AIModelsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">AI Models API</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Each deployment can specify which model to use for event execution.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Endpoints</h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        List Available Models
      </h3>

      <CodeBlock code={`GET /api/ai-models`} language="http" />

      <p className="text-muted-foreground mt-4">
        Returns all available AI models.
      </p>

      <p className="text-muted-foreground mt-4">
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">200 OK</code>
      </p>

      <CodeBlock
        code={`{
  "success": true,
  "data": [
    {
      "modelId": "openai/gpt-oss-120b",
      "modelDisplayName": "GPT OSS 120B",
      "modelDescription": "A high-performance open-source model",
      "contextLength": 131000,
      "modelIcon": "https://...",
      "attestationSupported": true,
      "verifiable": true,
      "inputCostPerToken": { "amount": 150, "scale": 9, "currency": "USD" },
      "outputCostPerToken": { "amount": 550, "scale": 9, "currency": "USD" },
      "costPerImage": { "amount": 0, "scale": 9, "currency": "USD" },
      "isDefault": true,
      "syncedAt": "2024-06-15T10:00:00Z",
      "createdAt": "2024-06-15T10:00:00Z"
    }
  ]
}`}
        language="json"
      />

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Response Fields
      </h3>
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
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                modelId
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">
              Unique model identifier (e.g.,{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                openai/gpt-oss-120b
              </code>
              )
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                modelDisplayName
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">
              Human-readable display name
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                modelDescription
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">string</td>
            <td className="px-4 py-2 text-muted-foreground">
              Description of the model
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                contextLength
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">integer</td>
            <td className="px-4 py-2 text-muted-foreground">
              Maximum context length in tokens
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                attestationSupported
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">boolean</td>
            <td className="px-4 py-2 text-muted-foreground">
              Whether the model supports cryptographic attestation
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                verifiable
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">boolean</td>
            <td className="px-4 py-2 text-muted-foreground">
              Whether the model&apos;s outputs are verifiable
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                isDefault
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">boolean</td>
            <td className="px-4 py-2 text-muted-foreground">
              Whether this is the default model
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-muted-foreground">
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                syncedAt
              </code>
            </td>
            <td className="px-4 py-2 text-muted-foreground">timestamp</td>
            <td className="px-4 py-2 text-muted-foreground">
              When the model was last synced from the API
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Usage</h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Setting a Model on Deployment
      </h3>
      <p className="text-muted-foreground">
        Use the{" "}
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
          aiModelId
        </code>{" "}
        field when creating or updating a deployment:
      </p>

      <CodeBlock
        code={`POST /api/deployments
{
  "worldId": 1,
  "name": "Season 1",
  "aiModelId": "openai/gpt-oss-120b",
  "firstBinding": {
    "eventId": 1,
    "eventVersion": 1
  }
}`}
        language="json"
      />

      <p className="text-muted-foreground mt-4">
        If{" "}
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
          aiModelId
        </code>{" "}
        is not specified, the default model (
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
          openai/gpt-oss-120b
        </code>
        ) is used.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Model Sync</h3>
      <p className="text-muted-foreground">
        Models are automatically synced from{" "}
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
          https://cloud-api.near.ai/v1/model/list
        </code>{" "}
        when the API server starts. The sync is non-blocking and runs in the
        background.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Related Concepts
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
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
            href="/docs/concepts/deployment"
            className="text-primary hover:underline"
          >
            Deployments
          </Link>{" "}
          - Setting AI model per deployment
        </li>
        <li>
          <Link
            href="/docs/api-reference/deployments"
            className="text-primary hover:underline"
          >
            Deployments API
          </Link>{" "}
          - Creating deployments with AI model
        </li>
      </ul>
    </article>
  );
}
