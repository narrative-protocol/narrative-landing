import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ImageChanger } from "@/components/ui/ImageChanger"
import { SyntaxHighlightedCode } from "@/components/ui/SyntaxHighlightedCode"
import {
  BookOpen,
  Globe,
  Layers,
  Database,
  ArrowRight,
  Link2,
  Building2,
  Sliders,
  GitBranch,
  Cpu,
  Rocket,
  ScrollText,
  Radar,
  Dices,
  Repeat,
  Sparkles,
} from "lucide-react"

const useCases = [
  {
    icon: Dices,
    title: "Probabilistic Events",
    description:
      "Outcomes resolved through weighted randomness — unexpected yet explainable.",
    examples: ["Horse Racing", "Ore Mining", "Loot Drops"]
  },
  {
    icon: Repeat,
    title: "State-Driven Outcomes",
    description:
      "Results change dynamically based on world state, positioning, and prior actions — reactive, not repetitive.",
    examples: ["RPG Battles", "Faction Conflicts"]
  },
  {
    icon: Link2,
    title: "On-chain lore",
    description:
      "World events persist as verifiable records that can be referenced, extended, or expanded over time.",
    examples: [
      "Digital Beings",
      "Mythic Artifacts"
    ]
  },
  {
    icon: Building2,
    title: "Digital civilizations",
    description:
      "Worlds evolve through autonomous logic and AI governance, maintaining persistent activity and structure.",
    examples: [
      "AI-Run DAOs",
      "Autonomous Factions"
    ]
  },
  {
    icon: ScrollText,
    title: "Procedural Narratives",
    description:
      "Stories emerge from simulated state changes, forming evolving narrative paths instead of fixed scripts.",
    examples: ["Interactive Fiction", "Campaign Worlds"]
  },
  {
    icon: Radar,
    title: "Reactive Environments",
    description:
      "Environments shift in response to movement and accumulated change, creating dynamic conditions and hazards.",
    examples: ["Battlefields", "Hazard Zones"]
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.svg" 
                alt="Narrative Protocol" 
                width={32} 
                height={32}
                className="h-8 w-8"
              />
              <span className="text-lg font-medium text-foreground">Narrative Protocol</span>
            </Link>
            <nav className="hidden items-center gap-6 lg:flex">
              <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link href="/docs/core-concepts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Core Concepts
              </Link>
              <Link href="/docs/getting-started" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Getting Started
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex border-border bg-transparent hover:bg-card">
              <Link href="https://github.com">GitHub</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/docs">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="">
        {/* Hero Section - Two Column Layout */}
        <section className="relative w-full overflow-hidden flex max-w-7xl px-6 mx-auto min-h-screen py-24">
          <div className="flex flex-col w-full relative">
            {/* Mobile Image - Full Background */}
            <div className="flex items-center justify-center xl:hidden aspect-3/2 mb-8">
              <div className="w-full h-full rounded overflow-hidden border border-border">
                <ImageChanger />
              </div>
            </div>

            {/* Right Column - Featured Image */}
            <div className="absolute inset-0 hidden xl:block max-w-4xl ml-auto my-auto aspect-3/2">
              <div className="w-full h-full rounded overflow-hidden relative border border-border">
                {/* Desktop Image */}
                <ImageChanger />
              </div>
            </div>

            {/* Left Column - Content */}
            <div className="flex-1 flex flex-col justify-start xl:justify-center z-20 relative">
              <div className="max-w-lg">
                {/* Badge */}
                <div className="pb-6">
                  <span className="inline-block rounded border border-border bg-card px-4 py-1.5 text-xs md:text-sm font-medium text-muted-foreground tracking-wide">
                    Context-Aware, Verifiable World & Event Engine
                  </span>
                </div>
                
                {/* Main Header */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-tight pb-6">
                  <span className="block">We build the protocol.</span>
                  <span className="block mt-2">You build worlds.</span>
                </h1>
                
                {/* Divider */}
                <div className="w-16 md:w-24 h-px bg-border my-4" />
                
                {/* Description */}
                <p className="text-base md:text-lg text-secondary-foreground font-normal mb-8 max-w-2xl text-shadow-lg/30">
                  Engine for generating world states and events using AI — where outcomes are produced within explicit constraints and recorded as persistent world states.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="h-12 px-8 text-base" asChild>
                    <Link href="/docs">
                      Read the Docs
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="h-12 px-8 text-base border-border bg-transparent hover:bg-card" asChild>
                    <Link href="/docs/getting-started">Quick Start Guide</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section - Unreal Style Feature Grid */}
        <section className="py-24 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-foreground">
                Why this exists
              </h2>
              <p className="mt-4 text-lg text-secondary-foreground max-w-2xl">
                AI can generate infinite possibilities.
              </p>
              <p className="mt-2 text-lg text-secondary-foreground max-w-2xl">
                Narrative Protocol turns possibility into progression.
              </p>
            </div>

            <div className="grid gap-px md:grid-cols-2 lg:grid-cols-4 bg-border">
              <div className="group bg-background p-8 transition-colors hover:bg-card/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Image
                    src="/solutions/1.png"
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <Globe className="h-8 w-8 text-primary relative z-10" />
                <p className="mt-6 text-base text-foreground relative z-10">
                  It understands the <span className="text-primary">current world</span>
                </p>
              </div>
              <div className="group bg-background p-8 transition-colors hover:bg-card/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Image
                    src="/solutions/2.png"
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <Layers className="h-8 w-8 text-primary relative z-10" />
                <p className="mt-6 text-base text-foreground relative z-10">
                  Determines what can <span className="text-primary">happen next</span>
                </p>
              </div>
              <div className="group bg-background p-8 transition-colors hover:bg-card/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Image
                    src="/solutions/3.png"
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <Database className="h-8 w-8 text-primary relative z-10" />
                <p className="mt-6 text-base text-foreground relative z-10">
                  Constrains outcomes with <span className="text-primary">rules</span>
                </p>
              </div>
              <div className="group bg-background p-8 transition-colors hover:bg-card/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Image
                    src="/solutions/4.png"
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <BookOpen className="h-8 w-8 text-primary relative z-10" />
                <p className="mt-6 text-base text-foreground relative z-10">
                  And advances the world <span className="text-primary">forward</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Architecture */}
        <section className="py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-foreground">
                How it works
              </h2>
              <p className="mt-4 text-lg text-secondary-foreground max-w-2xl">
                A clear flow from game logic to AI generation to persistent history.
              </p>
            </div>

            {/* Architecture Flow */}
            <div className="grid gap-6 lg:grid-cols-5 items-center">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-border bg-card text-base font-medium text-foreground">
                  1
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground">Game Runtime</h3>
                <p className="mt-2 text-sm text-secondary-foreground">
                  The game runs on its own engine — on-chain or off-chain.
                </p>
                <span className="mt-3 inline-block rounded border border-border bg-card px-2 py-1 text-xs text-muted-foreground">Your System</span>
                <div className="absolute right-0 top-5 hidden h-px w-6 bg-border lg:block" />
              </div>

              {/* Step 2 */}
              <div className="lg:col-span-2 relative rounded border-2 border-primary bg-card p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded border border-primary/30 bg-card text-base font-medium text-primary">2</span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-foreground">Context Observation</h3>
                    <p className="mt-2 text-sm text-secondary-foreground">Observes world state, events, and signals.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded border border-primary/30 bg-card text-base font-medium text-primary">3</span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-foreground">AI Event Generation</h3>
                    <p className="mt-2 text-sm text-secondary-foreground">Generates structured, verifiable events.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/logo.svg" alt="Narrative Protocol" width={24} height={24} className="h-6 w-6" />
                  <span className="text-sm font-medium text-primary font-mono">NPC [Narrative Play Coordinator]</span>
                </div>
                <div className="absolute right-0 top-6 hidden h-px w-6 bg-border lg:block" />
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-border bg-card text-base font-medium text-foreground">
                  4
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground">Verification</h3>
                <p className="mt-2 text-sm text-secondary-foreground">
                  All data is verified and anchored for audit.
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  <span className="rounded border border-border bg-card px-2 py-1 text-xs text-muted-foreground">TEE</span>
                  <span className="rounded border border-border bg-card px-2 py-1 text-xs text-muted-foreground">Blockchain</span>
                </div>
                <div className="absolute right-0 top-5 hidden h-px w-6 bg-border lg:block" />
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-border bg-card text-base font-medium text-foreground">
                  5
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground">Game Consumes</h3>
                <p className="mt-2 text-sm text-secondary-foreground">
                  Your game decides how to use the events.
                </p>
                <span className="mt-3 inline-block rounded border border-border bg-card px-2 py-1 text-xs text-muted-foreground">Your System</span>
              </div>
            </div>
          </div>
        </section>

        {/* Event Integration */}
        <section className="py-24 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Game Side</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-medium text-foreground">
                Use events however you need
              </h2>
              <p className="mt-4 text-lg text-secondary-foreground">
                Narrative Protocol outputs structured events. How you integrate them is entirely up to you.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Left Side - JSON Output */}
              <div className="col-span-1">
                <h3 className="text-xl font-medium text-foreground mb-4">Structured Output</h3>
                <div className="relative">
                  <div className="max-h-[480px] max-w-full overflow-hidden rounded-lg border border-border">
                    <div className="border-b border-border bg-muted px-4 py-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        npc-output.json
                      </span>
                    </div>
                    <div className="relative">
                      <SyntaxHighlightedCode
                        language="json"
                        code={`{
  "worldId": "world.emerald_racing_league",
  "frameId": "race.22.emerald_derby",
  "globalNarration": "Against expectations, Sunfire surges through the final stretch as rain-soaked ground slows the favorites. Iron Crown fights to recover but cannot close the gap, while Night Comet fades after a strong early pace. The crowd erupts as the underdog claims a dramatic victory in the Emerald Derby.",
  "signals": [
    {
      "entityId": "horse.sunfire",
      "component": "reputation",
      "op": "set",
      "value": "giant_killer",
      "confidence": 0.91,
      "reason": "Defeated a heavy favorite under difficult conditions."
    },
    {
      "entityId": "horse.sunfire",
      "component": "morale",
      "op": "set",
      "value": "high",
      "confidence": 0.88,
      "reason": "First major win boosts confidence going into future races."
    },
    {
      "entityId": "horse.iron_crown",
      "component": "morale",
      "op": "set",
      "value": "shaken",
      "confidence": 0.64,
      "reason": "Unexpected loss as the favorite raises questions about adaptability."
    },
    {
      "entityId": "jockey.mira",
      "component": "reputation",
      "op": "set",
      "value": "tactician",
      "confidence": 0.79,
      "reason": "Well-timed strategy in adverse conditions."
    },
    {
      "entityId": "context",
      "component": "crowd_hype",
      "op": "set",
      "value": "high",
      "confidence": 0.93,
      "reason": "Underdog victory excites spectators and media."
    },
    {
      "entityId": "context",
      "component": "track_story",
      "op": "add",
      "value": "mud_specialist_advantage",
      "confidence": 0.7,
      "reason": "Repeated evidence that wet conditions favor adaptable horses."
    }
  ],
  "perspectives": [
    {
      "scope": "entity",
      "targetId": "horse.sunfire",
      "audience": "all",
      "text": "Sunfire thrives in the mud, turning nervous energy into a perfectly timed late charge."
    },
    {
      "scope": "entity",
      "targetId": "horse.iron_crown",
      "audience": "all",
      "text": "Iron Crown's powerful stride struggles to find purchase on the wet track, forcing a costly adjustment mid-race."
    },
    {
      "scope": "entity",
      "targetId": "jockey.mira",
      "audience": "jockey.mira",
      "text": "Mira's decision to hold back early pays off, drawing praise from commentators for tactical patience."
    }
  ],
  "meta": {
    "model": "gpt-5.1-thinking",
    "generationTime": "2026-01-26T11:05:00Z"
  }
}`}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Integration Options */}
              <div className="col-span-1 flex flex-col lg:h-[600px]">
                <h3 className="text-xl font-medium text-foreground mb-4">Integration Options</h3>
                <div className="flex-1 space-y-4 overflow-y-auto">
                  <div className="group relative rounded-lg border border-border bg-background p-6 transition-all hover:border-primary/50 hover:bg-card/50 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                      <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80"
                        alt=""
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="relative z-10 flex items-start gap-5">
                      <div className="shrink-0 mt-0.5">
                        <div className="flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-card/50 group-hover:bg-primary/10 transition-colors">
                          <Sliders className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">As Modifiers</h4>
                        <p className="mt-2 text-sm text-secondary-foreground leading-relaxed">Alter stats, probabilities, or entity behaviors based on event data.</p>
                      </div>
                    </div>
                  </div>
                  <div className="group relative rounded-lg border border-border bg-background p-6 transition-all hover:border-primary/50 hover:bg-card/50 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                      <Image
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80"
                        alt=""
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="relative z-10 flex items-start gap-5">
                      <div className="shrink-0 mt-0.5">
                        <div className="flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-card/50 group-hover:bg-primary/10 transition-colors">
                          <GitBranch className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">As Conditions</h4>
                        <p className="mt-2 text-sm text-secondary-foreground leading-relaxed">Use events as gates or triggers for your game logic.</p>
                      </div>
                    </div>
                  </div>
                  <div className="group relative rounded-lg border border-border bg-background p-6 transition-all hover:border-primary/50 hover:bg-card/50 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                      <Image
                        src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=600&h=400&fit=crop&q=80"
                        alt=""
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="relative z-10 flex items-start gap-5">
                      <div className="shrink-0 mt-0.5">
                        <div className="flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-card/50 group-hover:bg-primary/10 transition-colors">
                          <Cpu className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">As Simulations</h4>
                        <p className="mt-2 text-sm text-secondary-foreground leading-relaxed">Run scenarios or predict outcomes before committing actions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="group relative rounded-lg border border-border bg-background p-6 transition-all hover:border-primary/50 hover:bg-card/50 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                      <Image
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop&q=80"
                        alt=""
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="relative z-10 flex items-start gap-5">
                      <div className="shrink-0 mt-0.5">
                        <div className="flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-card/50 group-hover:bg-primary/10 transition-colors">
                          <Rocket className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">As Direct Outcomes</h4>
                        <p className="mt-2 text-sm text-secondary-foreground leading-relaxed">Execute event results directly as final game actions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases - Card Grid */}
        <section className="py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 flex items-start justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-foreground">
                  What this enables
                </h2>
                <p className="mt-4 text-lg text-secondary-foreground max-w-2xl">
                  Build experiences that weren't possible before.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-x-auto scrollbar-hide -mx-6 px-6 scroll-smooth">
                <div className="flex gap-6 min-w-max pb-2">
                  {useCases.map((useCase, index) => {
                    return (
                      <div
                        key={useCase.title}
                        className="group rounded-lg border border-border bg-card overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg w-80 shrink-0"
                      >
                    {/* Prominent Image */}
                    <div className="relative aspect-square w-full overflow-hidden bg-muted">
                    <Image
                        src={`/use-cases/${index+1}.png`}
                        alt={useCase.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded border border-border/50 bg-card/80 backdrop-blur-sm">
                          <useCase.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors capitalize">
                        {useCase.title}
                      </h3>
                      <p className="mt-3 text-sm text-secondary-foreground line-clamp-3 min-h-18">
                        {useCase.description}
                      </p>
                      {useCase.examples && (
                        <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                          <Sparkles className="h-4 w-4 shrink-0" />
                          <span className="leading-relaxed">
                            {useCase.examples.join(" • ")}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Section */}
      <section className="pt-32 pb-64 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/runtime.png"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            Ready to build?
          </h2>
          <p className="mt-6 text-lg text-secondary-foreground">
            Start building AI-native worlds with persistent memory and consequence.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/docs/getting-started">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base border-border bg-transparent hover:bg-card" asChild>
              <Link href="/docs">Read Documentation</Link>
            </Button>
          </div>
        </div>
         {/* Footer */}
        <footer className="absolute bottom-0 right-0 left-0 py-4">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-2">
                <Image 
                  src="/logo.svg" 
                  alt="Narrative Protocol" 
                  width={32} 
                  height={32}
                  className="h-8 w-8"
                />
                <span className="font-medium text-foreground">Narrative Protocol</span>
              </div>
              <nav className="flex flex-wrap items-center justify-center gap-6">
                <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
                <Link href="/docs/getting-started" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Getting Started
                </Link>
                <Link href="https://github.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </section>     
    </div>
  )
}
