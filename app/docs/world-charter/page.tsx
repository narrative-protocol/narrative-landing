import { CodeBlock } from "@/components/code-block"
import { Callout } from "@/components/callout"

const worldCharterSchema = `{
  "world_charter": {
    "name": "string",
    "description": "string",
    "tone": ["string"],
    "genre": ["string"],
    "time_period": "string",
    "immutable_facts": ["string"],
    "global_rules": ["string"],
    "themes": ["string"],
    "factions": [
      {
        "name": "string",
        "description": "string",
        "values": ["string"],
        "relationships": {}
      }
    ],
    "magic_system": {
      "exists": "boolean",
      "rules": ["string"],
      "limitations": ["string"]
    },
    "technology_level": "string"
  }
}`

const exampleCharter = `{
  "world_charter": {
    "name": "Aethermoor",
    "description": "A realm where ancient magic intertwines with emerging steam technology",
    "tone": ["mysterious", "hopeful", "epic"],
    "genre": ["fantasy", "steampunk"],
    "time_period": "Victorian-era equivalent",
    "immutable_facts": [
      "The Aether flows through all living things",
      "The Great Cataclysm occurred 500 years ago",
      "Dragons disappeared after the Cataclysm",
      "The Council of Five governs all magical practice"
    ],
    "global_rules": [
      "Magic requires concentration and has physical cost",
      "Technology and magic interfere with each other",
      "The dead cannot be truly resurrected"
    ],
    "themes": ["progress vs tradition", "power and responsibility"],
    "factions": [
      {
        "name": "The Mechanists Guild",
        "description": "Engineers who believe technology will replace magic",
        "values": ["innovation", "pragmatism", "progress"],
        "relationships": {
          "Council of Five": "hostile"
        }
      }
    ],
    "magic_system": {
      "exists": true,
      "rules": [
        "Aether must be channeled through focus objects",
        "Spells require specific verbal components"
      ],
      "limitations": [
        "Cannot create something from nothing",
        "Cannot affect time directly"
      ]
    },
    "technology_level": "Steam-powered with early electrical experiments"
  }
}`

export default function WorldCharterPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">World Charter</h1>
      <p className="text-lg text-muted-foreground mt-4">
        The World Charter is the foundational document that defines the
        immutable truths and governing principles of your narrative universe.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Purpose</h2>
      <p className="text-muted-foreground">
        The World Charter serves as the source of truth for all narrative
        generation. It ensures that AI-generated content remains consistent with
        your world&apos;s established lore, rules, and tone.
      </p>

      <Callout type="info" title="Foundation of Consistency">
        <p>
          Every piece of generated content is validated against the World Charter.
          Immutable facts cannot be contradicted, and global rules must always be
          respected.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Schema</h2>
      <p className="text-muted-foreground">
        The World Charter follows a structured schema that captures all essential
        world-building elements:
      </p>

      <CodeBlock code={worldCharterSchema} title="world-charter-schema.json" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Key Components
      </h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Immutable Facts
      </h3>
      <p className="text-muted-foreground">
        These are absolute truths about your world that can never be contradicted.
        They form the bedrock of narrative consistency.
      </p>
      <ul className="text-muted-foreground space-y-2 mt-4">
        <li>Historical events that have occurred</li>
        <li>Fundamental laws of nature or magic</li>
        <li>Established relationships between major entities</li>
        <li>Facts about the world&apos;s geography or cosmology</li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">Global Rules</h3>
      <p className="text-muted-foreground">
        Rules that govern how things work in your world. Unlike immutable facts,
        these describe behaviors and constraints rather than historical truths.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Tone</h3>
      <p className="text-muted-foreground">
        Descriptors that guide the emotional and stylistic quality of generated
        content. The AI uses these to match your world&apos;s atmosphere.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">Factions</h3>
      <p className="text-muted-foreground">
        Major groups or organizations in your world. Defining their values and
        relationships helps the AI generate appropriate faction-based interactions.
      </p>

      <Callout type="tip" title="Faction Relationships">
        <p>
          Define relationships between factions to enable realistic inter-faction
          dynamics. NPCs from hostile factions will behave accordingly.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">Example</h2>
      <p className="text-muted-foreground">
        Here&apos;s a complete World Charter example for a fantasy-steampunk setting:
      </p>

      <CodeBlock code={exampleCharter} title="aethermoor-charter.json" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Best Practices
      </h2>

      <ul className="text-muted-foreground space-y-4 mt-4">
        <li>
          <strong className="text-foreground">Be specific with immutable facts</strong>{" "}
          - Vague facts leave room for inconsistency
        </li>
        <li>
          <strong className="text-foreground">Keep rules actionable</strong> - Rules
          should clearly indicate what can or cannot happen
        </li>
        <li>
          <strong className="text-foreground">Update rarely</strong> - The Charter
          should change only for major world events or corrections
        </li>
        <li>
          <strong className="text-foreground">Document relationships</strong> - Faction
          and entity relationships drive many narrative opportunities
        </li>
      </ul>

      <Callout type="warning" title="Charter Changes">
        <p>
          Changing the World Charter affects all future narrative generation.
          Consider the implications carefully, especially for immutable facts that
          may contradict existing player experiences.
        </p>
      </Callout>
    </article>
  )
}
