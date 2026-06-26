import { Link2, Layers, CalendarClock } from "lucide-react";
import { Reveal, Eyebrow } from "./ui";

const stats = [
  { icon: Link2, label: "Chain", value: "ETH" },
  { icon: Layers, label: "Supply", value: "4,444" },
  { icon: CalendarClock, label: "Mint Date", value: "TBA" },
];

const story = [
  'Before the internet was full of giant apps, it was a silent, empty space. Deep inside the old code, tiny sparks of energy called "SmogDust" floated around, waiting for a purpose.',
  "Then came the Great Forge—a massive crypto explosion that crashed the digital world, leaving behind piles of abandoned projects, lost memes, and broken links.",
  "These SmogDust sparks rushed to the wreckage, bonding with this digital trash to finally take physical form.",
  "The environment they fell into changed them forever; those who landed in the ruins of failed projects turned into undead scavengers, while those trapped in the dark web became rugged warriors, and those left behind in abandoned Discord servers mutated into chaotic fire-starters.",
  "Now, 4,444 unique creatures roam the wild corners of the web. They don't just survive. They thrive by hoarding the things humanity threw away.",
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
      <Reveal className="flex flex-col items-center text-center">
        <Eyebrow>The Origin</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          Born From <span className="gold-text">Forgotten Code</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div className="glass-card flex flex-col items-center gap-2 rounded-3xl px-6 py-8 text-center">
              <s.icon className="h-6 w-6 text-gold" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.label}</span>
              <span className="font-display text-3xl font-bold text-foreground">{s.value}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="glass-card mt-8 rounded-3xl p-8 md:p-12">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-8 font-display text-xl font-semibold text-foreground">
            Tiny creatures. Big collections.
            <span className="block gold-text">We clean what others forget.</span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
