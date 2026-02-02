import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"

const entitySchema = `{
  "entity": {
    "id": "string",
    "type": "character" | "location" | "item" | "organization",
    "name": "string",
    "description": "string",
    "properties": {},
    "state": {},
    "relationships": [],
    "knowledge": [],
    "tags": ["string"]
  }
}`

const characterExample = `{
  "entity": {
    "id": "npc_elder_theron",
    "type": "character",
    "name": "Elder Theron",
    "description": "A wise sage who has guarded the ancient library for sixty years",
    "properties": {
      "age": 82,
      "occupation": "Keeper of the Archive",
      "faction": "Council of Five",
      "speaking_style": "formal, archaic, measured",
      "personality_traits": ["patient", "secretive", "knowledgeable"],
      "appearance": "Tall and gaunt with silver hair and deep-set eyes"
    },
    "state": {
      "location": "loc_ancient_library",
      "mood": "contemplative",
      "health": "frail",
      "trust_level": {
        "player": 50,
        "mechanists_guild": 10
      },
      "active_concerns": ["missing_tome", "declining_health"]
    },
    "relationships": [
      {
        "entity_id": "npc_apprentice_mira",
        "type": "mentor",
        "sentiment": "protective"
      },
      {
        "entity_id": "npc_lord_ashworth",
        "type": "acquaintance",
        "sentiment": "suspicious"
      }
    ],
    "knowledge": [
      "Knows the location of the hidden vault",
      "Aware of the Mechanists' interest in the archive",
      "Remembers events from before the Cataclysm"
    ],
    "tags": ["questgiver", "lore_source", "council_member"]
  }
}`

const locationExample = `{
  "entity": {
    "id": "loc_ancient_library",
    "type": "location",
    "name": "The Ancient Library",
    "description": "A vast repository of knowledge dating back millennia",
    "properties": {
      "size": "massive",
      "access_level": "restricted",
      "atmosphere": "dusty, quiet, reverent",
      "notable_features": ["floating shelves", "eternal candles", "whisper halls"]
    },
    "state": {
      "current_visitors": ["npc_elder_theron", "npc_apprentice_mira"],
      "security_level": "high",
      "time_of_day_effect": "candles brighten at night",
      "recent_events": ["tome_stolen", "increased_guard_patrols"]
    },
    "relationships": [
      {
        "entity_id": "org_council_of_five",
        "type": "owned_by",
        "sentiment": "protected"
      }
    ],
    "knowledge": [],
    "tags": ["key_location", "quest_location", "safe_zone"]
  }
}`

export default function EntitiesPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Entities & Context</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Entities represent all the people, places, and things in your world.
        Entity Context provides the AI with detailed information about their
        current state.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Entity Types
      </h2>
      <p className="text-muted-foreground">
        NPC supports four primary entity types, each with specialized properties:
      </p>

      <ul className="text-muted-foreground space-y-4 mt-4">
        <li>
          <strong className="text-foreground">character</strong> - NPCs, players,
          and other beings with agency
        </li>
        <li>
          <strong className="text-foreground">location</strong> - Places where
          events occur and entities exist
        </li>
        <li>
          <strong className="text-foreground">item</strong> - Objects that can be
          interacted with or possessed
        </li>
        <li>
          <strong className="text-foreground">organization</strong> - Groups,
          factions, or institutions
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Base Schema
      </h2>
      <CodeBlock code={entitySchema} title="entity-schema.json" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Schema Components
      </h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">Properties</h3>
      <p className="text-muted-foreground">
        Static characteristics that rarely change. These define what the entity
        is.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">State</h3>
      <p className="text-muted-foreground">
        Dynamic information that changes during gameplay. This is the entity&apos;s
        current situation.
      </p>

      <Callout type="info" title="Properties vs State">
        <p>
          Properties describe inherent traits (age, personality, size). State
          describes current conditions (mood, location, health). Keep this
          distinction clear for consistent AI behavior.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-foreground mt-6">Relationships</h3>
      <p className="text-muted-foreground">
        Connections to other entities with type and sentiment. Relationships
        influence how NPCs interact with each other and the player.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Knowledge</h3>
      <p className="text-muted-foreground">
        What the entity knows. This determines what information they can share
        and how they react to certain topics.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Tags</h3>
      <p className="text-muted-foreground">
        Categorical labels for filtering and grouping entities. Useful for
        queries like &quot;all questgivers&quot; or &quot;dangerous locations.&quot;
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Character Example
      </h2>
      <CodeBlock code={characterExample} title="elder-theron.json" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Location Example
      </h2>
      <CodeBlock code={locationExample} title="ancient-library.json" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Context Selection
      </h2>
      <p className="text-muted-foreground">
        When generating NPC responses, you don&apos;t need to include all entities.
        Select relevant entities based on:
      </p>

      <ul className="text-muted-foreground space-y-2 mt-4">
        <li>The current location and who&apos;s present</li>
        <li>Entities mentioned in the active Narrative Frame</li>
        <li>Entities the player is directly interacting with</li>
        <li>Entities with relevant knowledge or relationships</li>
      </ul>

      <Callout type="tip" title="Context Window Management">
        <p>
          LLMs have limited context windows. Prioritize including the most
          relevant entity details rather than full dumps of all entities.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        State Updates
      </h2>
      <p className="text-muted-foreground">
        Entity state should be updated based on:
      </p>

      <ul className="text-muted-foreground space-y-2 mt-4">
        <li>Player actions that affect entities</li>
        <li>NPC actions returned in output</li>
        <li>World events and time passage</li>
        <li>Narrative frame progression</li>
      </ul>

      <Callout type="warning" title="State Consistency">
        <p>
          Always update entity state after significant events. Stale state leads
          to NPCs behaving as if events never happened.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Best Practices
      </h2>
      <ul className="text-muted-foreground space-y-4 mt-4">
        <li>
          <strong className="text-foreground">
            Use consistent ID conventions
          </strong>{" "}
          - Prefixes like npc_, loc_, item_ make entities easy to identify
        </li>
        <li>
          <strong className="text-foreground">
            Define speaking style for characters
          </strong>{" "}
          - This dramatically improves dialogue consistency
        </li>
        <li>
          <strong className="text-foreground">Track trust/reputation</strong> -
          Numeric sentiment values enable gradual relationship evolution
        </li>
        <li>
          <strong className="text-foreground">Keep knowledge explicit</strong> -
          What an NPC knows determines what they can reveal
        </li>
      </ul>
    </article>
  )
}
