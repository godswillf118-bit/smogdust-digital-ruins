import { Reveal, Eyebrow, DustButton } from "./ui";
import { XIcon, DiscordIcon } from "./icons";

export function Community() {
  return (
    <section id="community" className="relative mx-auto max-w-3xl px-4 py-24 md:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] glass-card p-10 text-center md:p-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{ background: "radial-gradient(120% 90% at 50% 0%, rgba(143,205,236,0.2), transparent 55%)" }}
            aria-hidden
          />
          <div className="relative flex flex-col items-center">
            <Eyebrow>The Crew</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-bold text-foreground sm:text-5xl">
              Join The <span className="gold-text">Cleanup Crew</span>
            </h2>
            <p className="mt-4 font-display text-xl font-semibold text-muted-foreground">@SmogDust</p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href="https://x.com/SmogDust" target="_blank" rel="noreferrer">
                <DustButton variant="gold" className="px-8">
                  <XIcon className="h-4 w-4" /> Follow on X
                </DustButton>
              </a>
              <a href="https://discord.gg" target="_blank" rel="noreferrer">
                <DustButton variant="glass" className="px-8">
                  <DiscordIcon className="h-5 w-5" /> Join Discord
                </DustButton>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
