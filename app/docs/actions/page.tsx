import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"

const actionSchema = `{
  "action": {
    "id": "string",
    "name": "string",
    "description": "string",
    "category": "dialogue" | "movement" | "interaction" | "combat" | "social" | "world",
    "parameters": {
      "param_name": {
        "type": "string" | "number" | "boolean" | "entity_id",
        "required": "boolean",
        "description": "string",
        "constraints": {}
      }
    },
    "preconditions": ["string"],
    "effects": ["string"],
    "cooldown": "number | null",
    "cost": {},
    "tags": ["string"]
  }
}`

const actionExamples = `[
  {
    "action": {
      "id": "action_give_item",
      "name": "Give Item",
      "description": "Transfer an item to another entity",
      "category": "interaction",
      "parameters": {
        "item_id": {
          "type": "entity_id",
          "required": true,
          "description": "The item to give"
        },
        "recipient_id": {
          "type": "entity_id",
          "required": true,
          "description": "Who receives the item"
        }
      },
      "preconditions": [
        "Actor possesses the item",
        "Recipient is present in the same location",
        "Item is transferable"
      ],
      "effects": [
        "Item moves from actor's inventory to recipient's",
        "May affect relationship sentiment",
        "May trigger quest objectives"
      ],
      "cooldown": null,
      "cost": {},
      "tags": ["inventory", "social"]
    }
  },
  {
    "action": {
      "id": "action_reveal_secret",
      "name": "Reveal Secret",
      "description": "Share hidden knowledge with another entity",
      "category": "social",
      "parameters": {
        "knowledge_key": {
          "type": "string",
          "required": true,
          "description": "The knowledge item to reveal"
        },
        "target_id": {
          "type": "entity_id",
          "required": true,
          "description": "Who learns the secret"
        }
      },
      "preconditions": [
        "Actor has this knowledge",
        "Trust level with target >= 70",
        "Knowledge is shareable"
      ],
      "effects": [
        "Target gains this knowledge",
        "May affect narrative frame objectives",
        "Relationship deepens"
      ],
      "cooldown": null,
      "cost": {
        "trust_risk": "May decrease trust with other factions"
      },
      "tags": ["knowledge", "social", "quest_relevant"]
    }
  }
]`

const actionRequestExample = `{
  "available_actions": [
    "action_give_item",
    "action_reveal_secret",
    "action_move_to_location",
    "action_attack",
    "action_cast_spell"
  ],
  "action_context": {
    "current_location": "loc_ancient_library",
    "entities_present": ["npc_elder_theron", "player"],
    "items_available": ["item_ancient_tome", "item_healing_potion"],
    "active_threats": []
  }
}`

export default function ActionsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Actions</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Actions define what NPCs can do in your world. They provide structured
        behaviors that the AI can invoke to affect the game state.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Purpose</h2>
      <p className="text-muted-foreground">
        Actions bridge the gap between AI-generated narrative and game mechanics.
        When an NPC decides to do something, the action system ensures it&apos;s
        valid, provides the parameters, and defines the effects.
      </p>

      <Callout type="info" title="Actions vs Dialogue">
        <p>
          Dialogue is what NPCs say. Actions are what they do. The NPC output
          schema separates these, allowing you to handle spoken content and
          mechanical effects differently.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Action Schema
      </h2>
      <CodeBlock code={actionSchema} title="action-schema.json" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Schema Components
      </h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">Categories</h3>
      <p className="text-muted-foreground">
        Actions are grouped by category for organization and filtering:
      </p>
      <ul className="text-muted-foreground space-y-2 mt-4">
        <li>
          <strong className="text-foreground">dialogue</strong> - Special speech
          acts (persuade, intimidate, lie)
        </li>
        <li>
          <strong className="text-foreground">movement</strong> - Location changes
        </li>
        <li>
          <strong className="text-foreground">interaction</strong> - Object/item
          manipulation
        </li>
        <li>
          <strong className="text-foreground">combat</strong> - Hostile actions
        </li>
        <li>
          <strong className="text-foreground">social</strong> - Relationship-affecting
          behaviors
        </li>
        <li>
          <strong className="text-foreground">world</strong> - Environmental
          changes
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">Parameters</h3>
      <p className="text-muted-foreground">
        Each action defines typed parameters that must be provided when invoked.
        The AI will fill these based on context.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Preconditions</h3>
      <p className="text-muted-foreground">
        Conditions that must be true for the action to be valid. The AI should
        only suggest actions whose preconditions can be met.
      </p>

      <Callout type="tip" title="Precondition Validation">
        <p>
          Always validate preconditions before executing actions. The AI may
          occasionally suggest invalid actions, especially in complex situations.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-foreground mt-6">Effects</h3>
      <p className="text-muted-foreground">
        What happens when the action executes. Use this to update entity states,
        trigger events, and progress narrative frames.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Cooldown & Cost
      </h3>
      <p className="text-muted-foreground">
        Optional constraints on action frequency and resources required. Useful
        for balancing powerful abilities.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Examples</h2>
      <CodeBlock code={actionExamples} title="example-actions.json" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Providing Action Context
      </h2>
      <p className="text-muted-foreground">
        When requesting NPC responses, include available actions and relevant
        context:
      </p>
      <CodeBlock code={actionRequestExample} title="action-context.json" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Action Selection
      </h2>
      <p className="text-muted-foreground">
        The AI selects actions based on:
      </p>
      <ul className="text-muted-foreground space-y-2 mt-4">
        <li>NPC&apos;s personality and current state</li>
        <li>Relationship with the player/other entities</li>
        <li>Active narrative frame objectives</li>
        <li>Available actions and their preconditions</li>
        <li>Guardrails and constraints</li>
      </ul>

      <Callout type="warning" title="Action Execution">
        <p>
          The AI suggests actions; your game executes them. Always implement
          server-side validation to prevent exploits and ensure game integrity.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Best Practices
      </h2>
      <ul className="text-muted-foreground space-y-4 mt-4">
        <li>
          <strong className="text-foreground">Define atomic actions</strong> -
          Each action should do one thing clearly
        </li>
        <li>
          <strong className="text-foreground">
            Make preconditions explicit
          </strong>{" "}
          - Clear preconditions help the AI make valid choices
        </li>
        <li>
          <strong className="text-foreground">Document effects fully</strong> -
          Know exactly what each action changes
        </li>
        <li>
          <strong className="text-foreground">Use tags for filtering</strong> -
          Restrict available actions by context using tags
        </li>
        <li>
          <strong className="text-foreground">
            Consider action consequences
          </strong>{" "}
          - Actions that affect multiple systems need careful design
        </li>
      </ul>
    </article>
  )
}
