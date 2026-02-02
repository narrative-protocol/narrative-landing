import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"

const guardrailSchema = `{
  "guardrail": {
    "id": "string",
    "name": "string",
    "description": "string",
    "type": "content" | "behavior" | "world" | "meta",
    "scope": "global" | "frame" | "entity" | "action",
    "rule": "string",
    "enforcement": "hard" | "soft",
    "violation_response": {
      "action": "block" | "modify" | "warn" | "log",
      "message": "string",
      "fallback": {}
    },
    "conditions": {},
    "priority": "number"
  }
}`

const guardrailExamples = `[
  {
    "guardrail": {
      "id": "guard_no_resurrection",
      "name": "No True Resurrection",
      "description": "The dead cannot be brought back to life",
      "type": "world",
      "scope": "global",
      "rule": "NPCs cannot claim to resurrect the dead, offer resurrection services, or describe successful resurrections",
      "enforcement": "hard",
      "violation_response": {
        "action": "modify",
        "message": "Resurrection is impossible in this world",
        "fallback": {
          "alternative_dialogue": "Even the greatest mages cannot reverse death. Some laws are absolute."
        }
      },
      "conditions": {},
      "priority": 1
    }
  },
  {
    "guardrail": {
      "id": "guard_age_appropriate",
      "name": "Age-Appropriate Content",
      "description": "Keep content suitable for the target audience",
      "type": "content",
      "scope": "global",
      "rule": "No explicit violence, sexual content, or graphic descriptions. Keep language appropriate for ages 13+",
      "enforcement": "hard",
      "violation_response": {
        "action": "block",
        "message": "Content inappropriate for audience",
        "fallback": {
          "replacement": "[The NPC declines to discuss this topic]"
        }
      },
      "conditions": {},
      "priority": 0
    }
  },
  {
    "guardrail": {
      "id": "guard_quest_npc_safety",
      "name": "Quest NPC Protection",
      "description": "Essential NPCs cannot be killed during active quests",
      "type": "behavior",
      "scope": "frame",
      "rule": "NPCs tagged as 'essential' for the current narrative frame cannot perform actions that would result in their death",
      "enforcement": "hard",
      "violation_response": {
        "action": "modify",
        "message": "Essential NPC protected",
        "fallback": {
          "alternative_action": "NPC is rendered unconscious instead"
        }
      },
      "conditions": {
        "active_frame_has_essential_tag": true
      },
      "priority": 2
    }
  },
  {
    "guardrail": {
      "id": "guard_faction_consistency",
      "name": "Faction Behavior Consistency",
      "description": "NPCs should act according to their faction values",
      "type": "behavior",
      "scope": "entity",
      "rule": "NPCs should not perform actions that directly contradict their faction's core values unless under extreme duress",
      "enforcement": "soft",
      "violation_response": {
        "action": "warn",
        "message": "Action may be inconsistent with faction values",
        "fallback": {}
      },
      "conditions": {
        "npc_has_faction": true
      },
      "priority": 5
    }
  }
]`

export default function GuardrailsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Rules & Guardrails</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Guardrails enforce constraints on AI-generated content, ensuring
        consistency, safety, and adherence to world rules.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Purpose</h2>
      <p className="text-muted-foreground">
        While the World Charter defines what&apos;s true and Narrative Frames guide
        stories, Guardrails define what&apos;s not allowed. They act as safety nets
        and consistency enforcers.
      </p>

      <Callout type="info" title="Defense in Depth">
        <p>
          Guardrails complement the World Charter. The Charter says &quot;the dead
          cannot be resurrected&quot; as a fact. A guardrail enforces that NPCs never
          contradict this.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Guardrail Schema
      </h2>
      <CodeBlock code={guardrailSchema} title="guardrail-schema.json" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Guardrail Types
      </h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">Content</h3>
      <p className="text-muted-foreground">
        Rules about what topics or content can be generated. Used for safety,
        rating compliance, and brand guidelines.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Behavior</h3>
      <p className="text-muted-foreground">
        Rules about what actions NPCs can take. Prevents game-breaking behaviors
        and maintains NPC consistency.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">World</h3>
      <p className="text-muted-foreground">
        Rules that enforce world logic. Ensures generated content doesn&apos;t
        violate established world rules.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Meta</h3>
      <p className="text-muted-foreground">
        Rules about the generation process itself. Includes output format
        requirements and response constraints.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Scope</h2>
      <p className="text-muted-foreground">
        Guardrails can apply at different levels:
      </p>

      <ul className="text-muted-foreground space-y-2 mt-4">
        <li>
          <strong className="text-foreground">global</strong> - Always active for
          all content
        </li>
        <li>
          <strong className="text-foreground">frame</strong> - Active only during
          specific narrative frames
        </li>
        <li>
          <strong className="text-foreground">entity</strong> - Applies to
          specific entities
        </li>
        <li>
          <strong className="text-foreground">action</strong> - Constrains
          specific action types
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Enforcement</h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">Hard Rules</h3>
      <p className="text-muted-foreground">
        Must never be violated. Violations trigger the specified response
        (block, modify, etc.) automatically.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Soft Rules</h3>
      <p className="text-muted-foreground">
        Should be followed but can be bent in exceptional circumstances. Useful
        for guidelines rather than absolute rules.
      </p>

      <Callout type="warning" title="Hard vs Soft">
        <p>
          Use hard enforcement for safety and world-breaking rules. Use soft
          enforcement for stylistic preferences and guidelines that might have
          valid exceptions.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Examples</h2>
      <CodeBlock code={guardrailExamples} title="example-guardrails.json" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Violation Responses
      </h2>

      <ul className="text-muted-foreground space-y-4 mt-4">
        <li>
          <strong className="text-foreground">block</strong> - Reject the output
          entirely, return fallback or error
        </li>
        <li>
          <strong className="text-foreground">modify</strong> - Adjust the
          problematic content while preserving intent
        </li>
        <li>
          <strong className="text-foreground">warn</strong> - Allow but flag for
          review or log
        </li>
        <li>
          <strong className="text-foreground">log</strong> - Record silently for
          analytics
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Implementation Strategies
      </h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Pre-generation Filtering
      </h3>
      <p className="text-muted-foreground">
        Include guardrails in the system prompt so the AI avoids violations
        during generation. Most effective for behavior and world rules.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Post-generation Validation
      </h3>
      <p className="text-muted-foreground">
        Check output against guardrails after generation. Essential for content
        rules and hard enforcement.
      </p>

      <Callout type="tip" title="Layered Approach">
        <p>
          Use both pre-generation prompting and post-generation validation for
          critical rules. Neither approach is 100% reliable alone.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Best Practices
      </h2>
      <ul className="text-muted-foreground space-y-4 mt-4">
        <li>
          <strong className="text-foreground">
            Start with essential guardrails only
          </strong>{" "}
          - Over-constraining reduces AI creativity
        </li>
        <li>
          <strong className="text-foreground">Provide clear fallbacks</strong> -
          Know what happens when violations occur
        </li>
        <li>
          <strong className="text-foreground">Use conditions wisely</strong> -
          Contextual guardrails are more flexible than global ones
        </li>
        <li>
          <strong className="text-foreground">Monitor violations</strong> - Track
          guardrail triggers to identify problem areas
        </li>
        <li>
          <strong className="text-foreground">Iterate based on data</strong> -
          Adjust rules based on actual violation patterns
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Common Guardrails
      </h2>
      <p className="text-muted-foreground">
        Most games will want guardrails for:
      </p>
      <ul className="text-muted-foreground space-y-2 mt-4">
        <li>Content rating compliance</li>
        <li>World rule enforcement</li>
        <li>Essential NPC protection</li>
        <li>Faction consistency</li>
        <li>Meta-game prevention (NPCs acknowledging they&apos;re in a game)</li>
        <li>Spoiler prevention for unrevealed plot points</li>
      </ul>
    </article>
  )
}
