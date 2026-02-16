import { CodeBlock } from "@/components/code-block";

export default function EnvironmentPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">
        Endpoint & Environments
      </h1>
      <p className="text-lg text-muted-foreground mt-4">
        This guide covers the available endpoint and environments for developing
        with Narrative Protocol.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        API Endpoint
      </h2>
      <p className="text-muted-foreground">
        Use the following API endpoint for all requests:
      </p>

      <CodeBlock
        code={`https://api.narrativeprotocol.com`}
        language="bash"
        title="Endpoint & Environments"
      />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Testnet / Devnet
      </h2>
      <p className="text-muted-foreground">
        Oracle smart contract for development and testing purpose
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-lg font-medium text-foreground">
            NEAR Smart Contract
          </h3>
          <CodeBlock
            code={`narrative-p.testnet`}
            language="text"
            title="NEAR smart contract"
          />
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-lg font-medium text-foreground">
            Solana Program
          </h3>
          <CodeBlock
            code={`3L4tQCyJQDJTxGb2FHKkp2mSpnQPzUKguX5stbktxAaFWutu2cZS8Nnpk17eQ3bThgkNkErXceJ7wE7wTR8jpewz`}
            language="text"
            title="Solana Program ID"
          />
        </div>
      </div>
    </article>
  );
}
