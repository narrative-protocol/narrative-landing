import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ImageChanger } from "@/components/ui/ImageChanger";
import { SyntaxHighlightedCode } from "@/components/ui/SyntaxHighlightedCode";
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
} from "lucide-react";

const useCases = [
  {
    icon: Dices,
    title: "Probabilistic Events",
    description:
      "Outcomes resolved through weighted randomness — unexpected yet explainable.",
    examples: ["Horse Racing", "Ore Mining", "Loot Drops"],
  },
  {
    icon: Repeat,
    title: "State-Driven Outcomes",
    description:
      "Results change dynamically based on world state, positioning, and prior actions — reactive, not repetitive.",
    examples: ["RPG Battles", "Faction Conflicts"],
  },
  {
    icon: Link2,
    title: "On-chain lore",
    description:
      "World events persist as verifiable records that can be referenced, extended, or expanded over time.",
    examples: ["Digital Beings", "Mythic Artifacts"],
  },
  {
    icon: Building2,
    title: "Digital civilizations",
    description:
      "Worlds evolve through autonomous logic and AI governance, maintaining persistent activity and structure.",
    examples: ["AI-Run DAOs", "Autonomous Factions"],
  },
  {
    icon: ScrollText,
    title: "Procedural Narratives",
    description:
      "Stories emerge from simulated state changes, forming evolving narrative paths instead of fixed scripts.",
    examples: ["Interactive Fiction", "Campaign Worlds"],
  },
  {
    icon: Radar,
    title: "Reactive Environments",
    description:
      "Environments shift in response to movement and accumulated change, creating dynamic conditions and hazards.",
    examples: ["Battlefields", "Hazard Zones"],
  },
];

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
              <span className="text-lg font-medium text-foreground">
                Narrative Protocol
              </span>
            </Link>
            <nav className="hidden items-center gap-6 lg:flex">
              <Link
                href="/docs"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="/docs/concepts"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Core Concepts
              </Link>
              <Link
                href="/docs/quickstart"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Getting Started
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hidden sm:inline-flex border-border bg-transparent hover:bg-card"
            >
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
                <p className="text-base md:text-lg text-secondary-foreground font-normal mb-8 max-w-md text-shadow-lg/30">
                  AI-native engine for generating world states and events —
                  where outcomes are produced within explicit constraints and
                  recorded as persistent world states.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="h-12 px-8 text-base" asChild>
                    <Link href="/docs">
                      Read the Docs
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-8 text-base border-border bg-transparent hover:bg-card"
                    asChild
                  >
                    <Link href="/docs/quickstart">Quick Start Guide</Link>
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
                  It understands the{" "}
                  <span className="text-primary">current world</span>
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
                  Determines what can{" "}
                  <span className="text-primary">happen next</span>
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
                  Constrains outcomes with{" "}
                  <span className="text-primary">rules</span>
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
                  And advances the world{" "}
                  <span className="text-primary">forward</span>
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
                A clear flow from game logic to AI generation to persistent
                history.
              </p>
            </div>

            {/* Architecture Flow */}
            <div className="grid gap-6 lg:grid-cols-5 items-center">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-border bg-card text-base font-medium text-foreground">
                  1
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  Game Runtime
                </h3>
                <p className="mt-2 text-sm text-secondary-foreground">
                  The game runs on its own engine — on-chain or off-chain.
                </p>
                <span className="mt-3 inline-block rounded border border-border bg-card px-2 py-1 text-xs text-muted-foreground">
                  Your System
                </span>
                <div className="absolute right-0 top-5 hidden h-px w-6 bg-border lg:block" />
              </div>

              {/* Step 2 */}
              <div className="lg:col-span-2 relative rounded border-2 border-primary bg-card p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded border border-primary/30 bg-card text-base font-medium text-primary">
                        2
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-foreground">
                      Context Observation
                    </h3>
                    <p className="mt-2 text-sm text-secondary-foreground">
                      Observes world state, events, and signals.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded border border-primary/30 bg-card text-base font-medium text-primary">
                        3
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-foreground">
                      AI Event Generation
                    </h3>
                    <p className="mt-2 text-sm text-secondary-foreground">
                      Generates structured, verifiable events.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.svg"
                    alt="Narrative Protocol"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <span className="text-sm font-medium text-primary font-mono">
                    NPC [Narrative Play Coordinator]
                  </span>
                </div>
                <div className="absolute right-0 top-6 hidden h-px w-6 bg-border lg:block" />
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-border bg-card text-base font-medium text-foreground">
                  4
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  Verification
                </h3>
                <p className="mt-2 text-sm text-secondary-foreground">
                  All data is verified and anchored for audit.
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  <span className="rounded border border-border bg-card px-2 py-1 text-xs text-muted-foreground">
                    TEE
                  </span>
                  <span className="rounded border border-border bg-card px-2 py-1 text-xs text-muted-foreground">
                    Blockchain
                  </span>
                </div>
                <div className="absolute right-0 top-5 hidden h-px w-6 bg-border lg:block" />
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-border bg-card text-base font-medium text-foreground">
                  5
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  Game Consumes
                </h3>
                <p className="mt-2 text-sm text-secondary-foreground">
                  Your game decides how to use the events.
                </p>
                <span className="mt-3 inline-block rounded border border-border bg-card px-2 py-1 text-xs text-muted-foreground">
                  Your System
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Event Integration */}
        <section className="py-24 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Game Side
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-medium text-foreground">
                Use events however you need
              </h2>
              <p className="mt-4 text-lg text-secondary-foreground">
                Narrative Protocol outputs structured events. How you integrate
                them is entirely up to you.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Left Side - JSON Output */}
              <div className="col-span-1">
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Structured Output
                </h3>
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
    "execution": {
      "input": {
        "date": "2026-02-16T13:16:42.495Z"
      },
      "stateChanges": {
        "atmosphere:main": {
          "solar_flux": 0.25,
          "debris_index": 0.47,
          "atmospheric_density": 0.74,
          "ionization_potential": 0.5,
          "magnetic_instability": 0.73,
          "fog_persistence_probability": 0.68
        },
        "latest_weather:main": {
          "date": "2026-02-16T13:16:42.495Z",
          "weather": "magnetic_surge"        
        }
      },
      "result": {
        "date": "2026-02-16T13:16:42.495Z",
        "weather": "magnetic_surge",
        "atm_analysis": "[\"Magnetic undulations intensify, rippling through the ionized veil and tugging at stray particles.\",\"The waning solar influx casts cooler shadows, while lingering debris settles into a thin, shimmering haze.\",\"A subtle electric tension builds, hinting at a forthcoming surge as the planet's field realigns.\"]",
        "cur_analysis": "[\"The sky flickers with erratic arcs of light, a silent storm of magnetic energy.\",\"Atmospheric currents quiver as charged particles cascade, distorting the horizon.\",\"Sounds crackle faintly, and instruments register spikes in field strength, marking a brief but potent magnetic surge.\"]"
      },
      "executedAt": "2026-02-16T13:17:01.312Z",
      "executedBy": 746628
    },
    "event": {
      "id": 18,
      "name": "resolve_weather",
      "description": "Resolve the official weather for the given date. Use only the provided world state."
    },
    "deployment": {
      "id": 17,
      "address": "0x451d8dc0c5a15745e1d3ed38aafeb38b9fe9c602",
      "name": "Season 1",
      "targetChain": "near",
      "world": {
        "id": 28,
        "address": "0x1f5476299243720e897348fbed84c50fcdebc403",
        "name": "Planet X"
      }
    },
    "id": 7749,
    "eventVersion": {
      "id": 42,
      "version": 17,
      "inputSchema": {
        "date": "string"
      },
      "resultSchema": {
        "date": "string",
        "weather": "string",
        "atm_analysis": "string",
        "cur_analysis": "string"
      },
      "stateChangeSchema": {
        "atmosphere": "partial",
        "latest_weather": "full"
      },
      "publishedAt": "2026-02-12T14:24:39.339Z"
    },
    "llm": {
      "model": "openai/gpt-oss-120b",
      "request": "You are a world-state simulation engine.\n\nYour task is to compute the next world state update caused by an event.\n\n# World definition\nTitle: Planet X\nDescription: A newly discovered planet with unstable atmospheric systems.\nTags: sci-fi, simulation, weather\nSeed prompt: This world obeys internal physical logic. Outcomes must be explainable using existing world state.\n\n# Entity schemas\natmosphere:\n  - magnetic_instability: float (min: 0, max: 1)\n  - solar_flux: float (min: 0, max: 1)\n  - atmospheric_density: float (min: 0, max: 1)\n  - debris_index: float (min: 0, max: 1)\n  - ionization_potential: float (min: 0, max: 1)\n  - fog_persistence_probability: float (min: 0, max: 1)\n\nlatest_weather:\n  - date: string\n  - weather: string (enum: [storm, clear, fog, ash_rain, aurora, dust_veil, ice_crystal, magnetic_surge])\n\n# Current state\n[\n  {\n    \"schema\": \"atmosphere\",\n    \"id\": \"main\",\n    \"solar_flux\": 0.32,\n    \"atm_analysis\": \"[\\\"The mist thickens as magnetic ripples stir the dense fog, coaxing it into a velvety shroud that cloaks the horizon.\\\",\\\"Ionized particles wane under reduced solar flux, while lingering debris settles, adding a gritty texture to the lingering cloud.\\\",\\\"A subtle cooling settles, allowing the fog's persistence to dominate, muting colors and muffling distant sounds.\\\"]\",\n    \"debris_index\": 0.53,\n    \"atmospheric_density\": 0.62,\n    \"ionization_potential\": 0.65,\n    \"magnetic_instability\": 0.63,\n    \"fog_persistence_probability\": 0.76\n  },\n  {\n    \"schema\": \"latest_weather\",\n    \"id\": \"main\",\n    \"date\": \"2026-02-16T13:15:18.310Z\",\n    \"weather\": \"fog\",\n    \"cur_analysis\": \"[\\\"A blanket of fog rolls across the plains, reducing visibility and swallowing the landscape in muted gray.\\\",\\\"Gentle breezes carry the damp air, whispering through the haze and dampening any residual auroral glow.\\\",\\\"Ambient temperature slips lower, and sounds become muffled as the dense fog holds the planet in a quiet, opaque veil.\\\"]\"\n  }\n]\n\n# Event\nname: resolve_weather\ndescription: Resolve the official weather for the given date. Use only the provided world state.\nbehavior: Resolve the official weather for the given date. Use only the provided world state.\nbehavior: 50/50 coin toss: DETERMINISTIC (resolve from current values) or DISRUPTION (apply 1-3 sudden anomalies shifting values ±0.2-0.4 first). Drift all fields ±0.05-0.25 randomly. Decay to lower values if value is too high. Determine weather from the dominant atmospheric combination—no single attribute should always win. Avoid repeating previous weather unless atmosphere strongly demands it.atm_analysis is a stringified array with 3 strings, each ana\nlyzes the atmosphere after state change in a non-detailed scifi way. cur_analysis is a stringified array with 3 strings, each analyzes the weather result.\n\n# Input\n{\n  \"date\": \"2026-02-16T13:16:42.495Z\"\n}\n\n# Expected output format\nState change include:\n- atmosphere\n- latest_weather\n\nResult schema: {\"date\":\"string\",\"weather\":\"string\",\"atm_analysis\":\"string\",\"cur_analysis\":\"string\"}\n\nRespond with a JSON object containing:\n1. \"stateChanges\": an object where keys are \"<schemaName>:<instanceId>\" and values are the state updates. Values MUST conform to the entity schema attribute definitions and constraints.\n2. \"result\": the result of this event. If values defined in entity schema attribute, it MUST conform to the constraints.\n\nOutput ONLY valid JSON, nothing else.",
      "response": "{\n  \"stateChanges\": {\n    \"atmosphere:main\": {\n      \"solar_flux\": 0.25,\n      \"debris_index\": 0.47,\n      \"atmospheric_density\": 0.74,\n      \"ionization_potential\": 0.5,\n      \"magnetic_instability\": 0.73,\n      \"fog_persistence_probability\": 0.68,\n      \"atm_analysis\": \"[\\\"Magnetic undulations intensify, rippling through the ionized veil and tugging at stray particles.\\\",\\\"The waning solar influx casts cooler shadows, while lingering debris settles into a thin, shimmering haze.\\\",\\\"A subtle electric tension builds, hinting at a forthcoming surge as the planet's field realigns.\\\"]\"\n    },\n    \"latest_weather:main\": {\n      \"date\": \"2026-02-16T13:16:42.495Z\",\n      \"weather\": \"magnetic_surge\",\n      \"cur_analysis\": \"[\\\"The sky flickers with erratic arcs of light, a silent storm of magnetic energy.\\\",\\\"Atmospheric currents quiver as charged particles cascade, distorting the horizon.\\\",\\\"Sounds crackle faintly, and instruments register spikes in field strength, marking a brief but potent magnetic surge.\\\"]\"\n    }\n  },\n  \"result\": {\n    \"date\": \"2026-02-16T13:16:42.495Z\",\n    \"weather\": \"magnetic_surge\",\n    \"atm_analysis\": \"[\\\"Magnetic undulations intensify, rippling through the ionized veil and tugging at stray particles.\\\",\\\"The waning solar influx casts cooler shadows, while lingering debris settles into a thin, shimmering haze.\\\",\\\"A subtle electric tension builds, hinting at a forthcoming surge as the planet's field realigns.\\\"]\",\n    \"cur_analysis\": \"[\\\"The sky flickers with erratic arcs of light, a silent storm of magnetic energy.\\\",\\\"Atmospheric currents quiver as charged particles cascade, distorting the horizon.\\\",\\\"Sounds crackle faintly, and instruments register spikes in field strength, marking a brief but potent magnetic surge.\\\"]\"\n  }\n}"
    },
    "attestation": {
      "signature": "0x0e5428e4193b80e825aaf1b06fe8779a8998527c44a461c4652f560bb3de56aa5c703e66d105bf346769759d0d21250122d7982dd0b2b8958babccff0ff92f371c",
      "signingAddress": "0xbBC409e6b529817D257aD61D5738D8e3a39b5791",
      "signingAlgo": "ecdsa",
      "text": "4467e31242895b65a5988f45111d155a4bf06ff35e69184b545d33e3e22fa871:7a57ab24e5df72bd0fe2b736faacd8d54e78e31b3639f330746827dd44f5f143"
    },
    "onChain": {
      "solana": null,
      "near": {
        "txHash": "Hi6RX6HYighawmo3fD4q6bnTpQ51yDtigDaJDGaUfFAy",
        "receiptId": "7xESJX8VrVR1YGE4PUGKzhPsNjoVLVtkRdjG2dNoLWea",
        "explorerUrl": "https://explorer.near.org/transactions/Hi6RX6HYighawmo3fD4q6bnTpQ51yDtigDaJDGaUfFAy"
      }
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
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Integration Options
                </h3>
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
                        <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                          As Modifiers
                        </h4>
                        <p className="mt-2 text-sm text-secondary-foreground leading-relaxed">
                          Alter stats, probabilities, or entity behaviors based
                          on event data.
                        </p>
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
                        <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                          As Conditions
                        </h4>
                        <p className="mt-2 text-sm text-secondary-foreground leading-relaxed">
                          Use events as gates or triggers for your game logic.
                        </p>
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
                        <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                          As Simulations
                        </h4>
                        <p className="mt-2 text-sm text-secondary-foreground leading-relaxed">
                          Run scenarios or predict outcomes before committing
                          actions.
                        </p>
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
                        <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                          As Direct Outcomes
                        </h4>
                        <p className="mt-2 text-sm text-secondary-foreground leading-relaxed">
                          Execute event results directly as final game actions.
                        </p>
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
                            src={`/use-cases/${index + 1}.png`}
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
            Start building AI-native worlds with persistent memory and
            consequence.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/docs/quickstart">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base border-border bg-transparent hover:bg-card"
              asChild
            >
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
                <span className="font-medium text-foreground">
                  Narrative Protocol
                </span>
              </div>
              <nav className="flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/docs"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
                <Link
                  href="/docs/quickstart"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Getting Started
                </Link>
                <Link
                  href="https://github.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
