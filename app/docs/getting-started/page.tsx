import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"

const minimalExample = `{
  "world_charter": {
    "name": "My Game World",
    "tone": ["fantasy", "adventure"],
    "immutable_facts": [
      "Magic exists and is powered by elemental crystals",
      "Dragons are ancient and wise beings"
    ]
  },
  "entities": [
    {
      "id": "npc_001",
      "type": "character",
      "name": "Elder Theron",
      "description": "A wise sage who guards ancient knowledge"
    }
  ]
}`

const promptExample = `System Prompt Structure:
1. World Charter context
2. Current Narrative Frame (if active)
3. Relevant entity states
4. Available actions
5. Active guardrails`

export default function GettingStartedPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Getting Started</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Learn how to implement NPC in your game&apos;s narrative system.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Quick Start
      </h2>
      <p className="text-muted-foreground">
        The NPC specification is designed to be integrated with any LLM-based
        system. Here&apos;s how to get started:
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        1. Define Your World Charter
      </h3>
      <p className="text-muted-foreground">
        Start by creating a World Charter that establishes the foundational
        elements of your narrative universe.
      </p>

      <CodeBlock code={minimalExample} title="world-charter.json" />

      <h3 className="text-xl font-semibold text-foreground mt-6">
        2. Structure Your Prompts
      </h3>
      <p className="text-muted-foreground">
        When making requests to your LLM, structure the prompt to include
        relevant NPC context:
      </p>

      <CodeBlock code={promptExample} title="Prompt Structure" language="text" />

      <Callout type="tip" title="Best Practice">
        <p>
          Always include the World Charter in your system prompt to ensure the
          LLM maintains consistency with your world&apos;s rules and tone.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        3. Handle NPC Responses
      </h3>
      <p className="text-muted-foreground">
        Parse the LLM response to extract structured output including dialogue,
        actions, and state changes. The output schema ensures predictable,
        actionable responses.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Integration Patterns
      </h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Real-time Conversations
      </h3>
      <p className="text-muted-foreground">
        For interactive NPC dialogue, include the conversation history and
        current game state in each request. The LLM will use entity context to
        maintain character consistency.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Quest Generation
      </h3>
      <p className="text-muted-foreground">
        Use Narrative Frames to guide quest generation. Define the frame&apos;s
        objectives and let the AI generate appropriate content within those
        bounds.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        World Events
      </h3>
      <p className="text-muted-foreground">
        Trigger world events through actions. The AI can determine appropriate
        consequences while respecting guardrails and world rules.
      </p>

      <Callout type="warning" title="Important">
        <p>
          Always validate action requests against your guardrails before executing
          them. This prevents the AI from making changes that violate world rules
          or safety constraints.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Next Steps</h2>
      <ul className="text-muted-foreground space-y-2 mt-4">
        <li>
          Learn about{" "}
          <a href="/docs/world-charter" className="text-primary hover:underline">
            World Charters
          </a>{" "}
          in detail
        </li>
        <li>
          Understand{" "}
          <a href="/docs/narrative-frames" className="text-primary hover:underline">
            Narrative Frames
          </a>{" "}
          for story management
        </li>
        <li>
          Explore the{" "}
          <a href="/docs/actions" className="text-primary hover:underline">
            Actions system
          </a>{" "}
          for NPC behaviors
        </li>
        <li>
          Review{" "}
          <a href="/docs/guardrails" className="text-primary hover:underline">
            Guardrails
          </a>{" "}
          for safety and consistency
        </li>
      </ul>
    </article>
  )
}
