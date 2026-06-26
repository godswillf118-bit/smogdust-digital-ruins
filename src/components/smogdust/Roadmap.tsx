import { Reveal, Eyebrow } from "./ui";

const phases = [
  {
    id: "01",
    title: "The Awakening",
    items: ["Community Launch", "Whitelist Opens", "Lore Begins"],
  },
  {
    id: "02",
    title: "The Cleanup",
    items: ["Mint", "Reveal", "Holder Missions"],
  },
  {
    id: "03",
    title: "The Expansion",
    items: ["Future Collections", "Collaborations", "Story Chapters"],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="relative mx-auto max-w-5xl px-4 py-24 md:py-32">
      <Reveal className="flex flex-col items-center text-center">
        <Eyebrow>The Path Ahead</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold text-foreground sm:text-5xl">
          The <span className="gold-text">Roadmap</span>
        </h2>
      </Reveal>

      <div className="relative mt-16">
        {/* vertical line */}
        <div
          className="absolute left-5 top-2 bottom-2 w-px md:left-1/2"
          style={{ background: "linear-gradient(180deg, transparent, rgba(214,165,90,0.5), transparent)" }}
          aria-hidden
        />
        <div className="space-y-10">
          {phases.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <div
                className={`relative flex items-start gap-6 md:w-1/2 ${
                  i % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:flex-row-reverse md:pr-12 md:text-right"
                } pl-14 md:pl-12`}
              >
                {/* node */}
                <span
                  className="absolute left-2.5 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-[#3a2a10] md:left-auto"
                  style={{
                    boxShadow: "var(--shadow-gold)",
                    ...(i % 2 === 0 ? { left: "-0.75rem" } : { right: "-0.75rem", left: "auto" }),
                  }}
                  aria-hidden
                />
                <div className="glass-card flex-1 rounded-3xl p-6">
                  <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-gold">
                    Phase {p.id}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-foreground">{p.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-muted-foreground">
                    {p.items.map((it) => (
                      <li key={it} className="text-sm">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
