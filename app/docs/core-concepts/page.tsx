import { Callout } from "@/components/callout"
import { CodeBlock } from "@/components/code-block"

const architectureOverview = `NPC System Architecture
┌─────────────────────────────────────────────────────────┐
│                    World Charter                        │
│  (Tone, Lore, Immutable Facts, Global Rules)           │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                  Narrative Frames                       │
│  (Active Story Arcs, Objectives, Constraints)          │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                    Entity Context                       │
│  (Characters, Locations, Items, Relationships)         │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                 Actions & Guardrails                    │
│  (Available Actions, Safety Rules, Constraints)        │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                     NPC Output                          │
│  (Dialogue, Actions, State Changes, Metadata)          │
└─────────────────────────────────────────────────────────┘`

export default function CoreConceptsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground">Core Concepts</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Understanding the fundamental building blocks of the NPC system.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        System Architecture
      </h2>
      <p className="text-muted-foreground">
        The NPC system is built on a layered architecture where each component
        provides context and constraints for the layers below it.
      </p>

      <CodeBlock code={architectureOverview} title="Architecture Overview" language="text" />

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Information Flow
      </h2>
      <p className="text-muted-foreground">
        When generating NPC responses, information flows from the broadest
        context (World Charter) to the most specific (current interaction):
      </p>

      <ol className="text-muted-foreground space-y-4 mt-4">
        <li>
          <strong className="text-foreground">World Charter</strong> establishes
          the immutable foundation - what is always true in this world
        </li>
        <li>
          <strong className="text-foreground">Narrative Frames</strong> provide
          current story context - what&apos;s happening now and where it&apos;s headed
        </li>
        <li>
          <strong className="text-foreground">Entity Context</strong> supplies
          specific details - who&apos;s involved and their current states
        </li>
        <li>
          <strong className="text-foreground">Actions & Guardrails</strong>{" "}
          define what&apos;s possible - available behaviors and constraints
        </li>
        <li>
          <strong className="text-foreground">NPC Output</strong> is generated
          within all these constraints
        </li>
      </ol>

      <Callout type="info" title="Layered Context">
        <p>
          Each layer inherits constraints from the layers above it. An NPC action
          cannot violate guardrails, which cannot violate narrative frame rules,
          which cannot violate world charter immutable facts.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Key Principles
      </h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Consistency Through Constraints
      </h3>
      <p className="text-muted-foreground">
        Rather than trying to make AI &quot;remember&quot; everything, NPC uses explicit
        constraints at each layer. The World Charter&apos;s immutable facts are
        always respected, and guardrails prevent unwanted outputs.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Typed Schemas
      </h3>
      <p className="text-muted-foreground">
        All NPC components use typed schemas. This ensures data integrity,
        enables validation, and makes integration with game systems
        straightforward.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Structured Output
      </h3>
      <p className="text-muted-foreground">
        NPC output follows a defined schema with dialogue, actions, and state
        changes clearly separated. This makes it easy to process AI responses
        programmatically.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">
        Separation of Concerns
      </h3>
      <p className="text-muted-foreground">
        World-building (Charter), story management (Frames), state tracking
        (Entities), and behavior control (Actions/Guardrails) are separate
        concerns that can be managed independently.
      </p>

      <Callout type="tip" title="Design Philosophy">
        <p>
          NPC is designed to be declarative. You define what your world is, what
          stories are active, and what constraints apply. The AI generates
          content within those boundaries.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold text-foreground mt-8">
        Component Summary
      </h2>

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-semibold text-foreground">
                Component
              </th>
              <th className="text-left py-3 pr-4 font-semibold text-foreground">
                Purpose
              </th>
              <th className="text-left py-3 font-semibold text-foreground">
                Mutability
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border">
              <td className="py-3 pr-4">World Charter</td>
              <td className="py-3 pr-4">Define world foundation</td>
              <td className="py-3">Rarely changes</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Narrative Frames</td>
              <td className="py-3 pr-4">Guide story arcs</td>
              <td className="py-3">Changes with story</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Entity Context</td>
              <td className="py-3 pr-4">Track state</td>
              <td className="py-3">Frequently updated</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Actions</td>
              <td className="py-3 pr-4">Enable behaviors</td>
              <td className="py-3">Context-dependent</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Guardrails</td>
              <td className="py-3 pr-4">Enforce constraints</td>
              <td className="py-3">Stable rules</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  )
}
