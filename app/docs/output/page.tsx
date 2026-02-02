import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"

const outputSchema = `{
  "npc_output": {
    "dialogue": {
      "text": "string",
      "tone": "string",
      "target": "entity_id | null",
      "language": "string",
      "is_internal_thought": "boolean"
    },
    "actions": [
      {
        "action_id": "string",
        "parameters": {},
        "priority": "number",
        "delay": "number | null"
      }
    ],
    "state_changes": [
      {
        "entity_id": "string",
        "path": "string",
        "operation": "set" | "increment" | "decrement" | "append" | "remove",
        "value": "any"
      }
    ],
    "narrative_signals": {
      "objective_progress": [
        {
          "objective_id": "string",
          "status": "string",
          "progress_note": "string"
        }
      ],
      "hints": ["string"],
      "foreshadowing": ["string"]
    },
    "metadata": {
      "confidence": "number",
      "reasoning": "string",
      "alternative_responses": []
    }
  }
}`

const outputExample = `{
  "npc_output": {
    "dialogue": {
      "text": "Ah, you seek knowledge of the old ways. Few have the courage to ask such questions. Come, let me show you something... but speak of this to no one.",
      "tone": "mysterious, cautious",
      "target": "player",
      "language": "common",
      "is_internal_thought": false
    },
    "actions": [
      {
        "action_id": "action_reveal_secret",
        "parameters": {
          "knowledge_key": "hidden_vault_location",
          "target_id": "player"
        },
        "priority": 1,
        "delay": null
      },
      {
        "action_id": "action_move_to_location",
        "parameters": {
          "destination": "loc_hidden_alcove"
        },
        "priority": 2,
        "delay": 2
      }
    ],
    "state_changes": [
      {
        "entity_id": "npc_elder_theron",
        "path": "state.trust_level.player",
        "operation": "increment",
        "value": 15
      },
      {
        "entity_id": "npc_elder_theron",
        "path": "state.mood",
        "operation": "set",
        "value": "conspiratorial"
      }
    ],
    "narrative_signals": {
      "objective_progress": [
        {
          "objective_id": "obj_gain_theron_trust",
          "status": "completed",
          "progress_note": "Elder Theron trusts the player enough to share secrets"
        }
      ],
      "hints": [
        "The hidden vault may contain information about Lady Ashworth"
      ],
      "foreshadowing": [
        "Theron's willingness to share suggests he believes time is running out"
      ]
    },
    "metadata": {
      "confidence": 0.85,
      "reasoning": "Player has demonstrated knowledge of ancient lore and shown respect. Trust threshold met. This action advances the main questline.",
      "alternative_responses": [
        "Could have offered a lesser secret if trust was lower",
        "Could have asked for a favor in return"
      ]
    }
  }
}`

export default function OutputPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">NPC Output</h1>
      <p className="text-lg text-muted-foreground mt-4">
        The NPC Output schema defines the structured response format that AI
        generates, making it easy to integrate AI decisions into your game.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Purpose</h2>
      <p className="text-muted-foreground">
        Structured output ensures that AI responses are predictable and
        actionable. Instead of parsing free-form text, you receive typed data
        that maps directly to game systems.
      </p>

      <Callout type="info" title="Structured Generation">
        <p>
          Modern LLMs can generate structured JSON output. Configure your AI
          provider to use the NPC Output schema for consistent, parseable
          responses.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Output Schema
      </h2>
      <CodeBlock code={outputSchema} title="npc-output-schema.json" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Schema Components
      </h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">Dialogue</h3>
      <p className="text-muted-foreground">
        The spoken content of the NPC response. Includes tone markers and
        targeting for proper delivery.
      </p>
      <ul className="text-muted-foreground space-y-2 mt-4">
        <li>
          <strong className="text-foreground">text</strong> - What the NPC says
        </li>
        <li>
          <strong className="text-foreground">tone</strong> - Emotional quality
          for voice/animation
        </li>
        <li>
          <strong className="text-foreground">target</strong> - Who they&apos;re
          addressing
        </li>
        <li>
          <strong className="text-foreground">is_internal_thought</strong> - For
          narrative purposes, not spoken aloud
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">Actions</h3>
      <p className="text-muted-foreground">
        Mechanical actions the NPC performs. These reference action definitions
        and include parameters.
      </p>

      <Callout type="tip" title="Action Priority">
        <p>
          When multiple actions are returned, use the priority field to determine
          execution order. Lower numbers execute first. Delays can stagger action
          timing.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-foreground mt-6">State Changes</h3>
      <p className="text-muted-foreground">
        Direct modifications to entity state. These are suggestions from the AI
        that should be validated before applying.
      </p>
      <ul className="text-muted-foreground space-y-2 mt-4">
        <li>
          <strong className="text-foreground">set</strong> - Replace the value
        </li>
        <li>
          <strong className="text-foreground">increment/decrement</strong> -
          Modify numeric values
        </li>
        <li>
          <strong className="text-foreground">append/remove</strong> - Modify
          arrays
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Narrative Signals
      </h3>
      <p className="text-muted-foreground">
        Meta-information about story progression. Useful for quest tracking, hint
        systems, and narrative analytics.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Metadata</h3>
      <p className="text-muted-foreground">
        Information about the AI&apos;s decision-making process. Useful for debugging,
        analytics, and understanding AI behavior.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Complete Example
      </h2>
      <CodeBlock code={outputExample} title="example-output.json" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Processing Output
      </h2>

      <ol className="text-muted-foreground space-y-4 mt-4">
        <li>
          <strong className="text-foreground">Parse the response</strong> -
          Validate against the schema
        </li>
        <li>
          <strong className="text-foreground">Display dialogue</strong> - Render
          text with appropriate tone/animation
        </li>
        <li>
          <strong className="text-foreground">Validate actions</strong> - Check
          preconditions before executing
        </li>
        <li>
          <strong className="text-foreground">Apply state changes</strong> -
          Update entity states after validation
        </li>
        <li>
          <strong className="text-foreground">Process narrative signals</strong>{" "}
          - Update quest logs, trigger hints
        </li>
      </ol>

      <Callout type="warning" title="State Change Validation">
        <p>
          Always validate state changes before applying them. The AI may suggest
          changes that violate game rules or create invalid states.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Best Practices
      </h2>
      <ul className="text-muted-foreground space-y-4 mt-4">
        <li>
          <strong className="text-foreground">Log metadata for analytics</strong>{" "}
          - Track confidence and reasoning for system improvement
        </li>
        <li>
          <strong className="text-foreground">
            Handle missing optional fields
          </strong>{" "}
          - Not every response will have all components
        </li>
        <li>
          <strong className="text-foreground">
            Queue actions appropriately
          </strong>{" "}
          - Respect priority and delay fields
        </li>
        <li>
          <strong className="text-foreground">
            Use narrative signals for UX
          </strong>{" "}
          - Hints and foreshadowing can enhance player experience
        </li>
      </ul>
    </article>
  )
}
