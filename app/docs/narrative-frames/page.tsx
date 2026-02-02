import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"

const narrativeFrameSchema = `{
  "narrative_frame": {
    "id": "string",
    "name": "string",
    "description": "string",
    "status": "active" | "completed" | "failed" | "suspended",
    "priority": "number",
    "objectives": [
      {
        "id": "string",
        "description": "string",
        "status": "pending" | "in_progress" | "completed" | "failed",
        "hidden": "boolean"
      }
    ],
    "constraints": ["string"],
    "tone_override": ["string"],
    "involved_entities": ["string"],
    "trigger_conditions": {},
    "completion_conditions": {},
    "failure_conditions": {},
    "branches": [
      {
        "id": "string",
        "condition": "string",
        "next_frame_id": "string"
      }
    ]
  }
}`

const exampleFrame = `{
  "narrative_frame": {
    "id": "quest_missing_heir",
    "name": "The Missing Heir",
    "description": "The player investigates the disappearance of Lord Ashworth's daughter",
    "status": "active",
    "priority": 1,
    "objectives": [
      {
        "id": "obj_investigate_manor",
        "description": "Search the Ashworth Manor for clues",
        "status": "in_progress",
        "hidden": false
      },
      {
        "id": "obj_discover_truth",
        "description": "Uncover the true reason for her disappearance",
        "status": "pending",
        "hidden": true
      }
    ],
    "constraints": [
      "Lady Ashworth cannot be found until all clues are discovered",
      "NPCs in the manor are nervous and evasive",
      "The truth involves the Mechanists Guild"
    ],
    "tone_override": ["mysterious", "tense"],
    "involved_entities": ["npc_lord_ashworth", "npc_butler_james", "loc_ashworth_manor"],
    "completion_conditions": {
      "all_objectives_complete": true
    },
    "failure_conditions": {
      "lord_ashworth_dies": true,
      "player_accused_publicly": true
    },
    "branches": [
      {
        "id": "branch_guild_ally",
        "condition": "player_joins_guild",
        "next_frame_id": "quest_guild_initiation"
      },
      {
        "id": "branch_expose_guild",
        "condition": "player_exposes_guild",
        "next_frame_id": "quest_guild_retaliation"
      }
    ]
  }
}`

export default function NarrativeFramesPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Narrative Frames</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Narrative Frames define the current story context and guide AI-generated
        content toward specific narrative goals while allowing for player agency.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Purpose</h2>
      <p className="text-muted-foreground">
        While the World Charter defines what&apos;s always true, Narrative Frames
        define what&apos;s true right now. They represent active story arcs, quests,
        or situations that shape current NPC behaviors and dialogue.
      </p>

      <Callout type="info" title="Dynamic Storytelling">
        <p>
          Narrative Frames allow you to guide stories without scripting them. The
          AI generates content that moves toward frame objectives while responding
          naturally to player actions.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Schema</h2>
      <CodeBlock code={narrativeFrameSchema} title="narrative-frame-schema.json" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Key Components
      </h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">Objectives</h3>
      <p className="text-muted-foreground">
        Objectives define what needs to happen within this narrative frame. They
        can be visible to the player or hidden (revealed through gameplay).
      </p>
      <ul className="text-muted-foreground space-y-2 mt-4">
        <li>
          <strong className="text-foreground">pending</strong> - Not yet started
        </li>
        <li>
          <strong className="text-foreground">in_progress</strong> - Currently
          active
        </li>
        <li>
          <strong className="text-foreground">completed</strong> - Successfully
          finished
        </li>
        <li>
          <strong className="text-foreground">failed</strong> - No longer achievable
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">Constraints</h3>
      <p className="text-muted-foreground">
        Frame-specific rules that override or supplement normal behavior. These
        are temporary and only apply while the frame is active.
      </p>

      <Callout type="tip" title="Constraint Examples">
        <p>
          Use constraints to create tension, mystery, or urgency. For example:
          &quot;NPCs refuse to discuss the incident directly&quot; or &quot;Time-sensitive:
          must resolve within 3 in-game days.&quot;
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-foreground mt-6">Tone Override</h3>
      <p className="text-muted-foreground">
        Temporarily shifts the narrative tone from the World Charter defaults.
        Useful for creating atmosphere appropriate to specific story moments.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Branches</h3>
      <p className="text-muted-foreground">
        Define how the frame can lead to other frames based on player choices or
        outcomes. This creates branching narrative paths.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Example</h2>
      <CodeBlock code={exampleFrame} title="missing-heir-quest.json" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Frame Lifecycle
      </h2>

      <ol className="text-muted-foreground space-y-4 mt-4">
        <li>
          <strong className="text-foreground">Activation</strong> - Frame becomes
          active when trigger conditions are met
        </li>
        <li>
          <strong className="text-foreground">In Progress</strong> - AI uses frame
          context to guide NPC behavior and dialogue
        </li>
        <li>
          <strong className="text-foreground">Resolution</strong> - Frame completes
          or fails based on defined conditions
        </li>
        <li>
          <strong className="text-foreground">Branching</strong> - Completed frames
          may trigger new frames based on outcomes
        </li>
      </ol>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Multiple Active Frames
      </h2>
      <p className="text-muted-foreground">
        Multiple frames can be active simultaneously. Use the priority field to
        determine which frame takes precedence when constraints conflict.
      </p>

      <Callout type="warning" title="Conflicting Frames">
        <p>
          When multiple frames affect the same entities, higher priority frames
          take precedence. Design frames to minimize conflicts, or use this
          intentionally for dramatic effect.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Best Practices
      </h2>
      <ul className="text-muted-foreground space-y-4 mt-4">
        <li>
          <strong className="text-foreground">Keep frames focused</strong> - Each
          frame should represent a single narrative arc or situation
        </li>
        <li>
          <strong className="text-foreground">Define clear endpoints</strong> -
          Completion and failure conditions should be specific and measurable
        </li>
        <li>
          <strong className="text-foreground">Use hidden objectives sparingly</strong>{" "}
          - They&apos;re powerful for twists but can frustrate players if overused
        </li>
        <li>
          <strong className="text-foreground">Plan branches early</strong> - Consider
          how player choices will affect the narrative before implementation
        </li>
      </ul>
    </article>
  )
}
