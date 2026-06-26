import { Sparkles } from "lucide-react";
import { Reveal, Eyebrow, DustButton } from "./ui";

export function Whitelist() {
  return (
    <section id="whitelist" className="relative mx-auto max-w-3xl px-4 py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] glass-card p-8 text-center md:p-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{ background: "radial-gradient(120% 80% at 50% 0%, rgba(244,169,192,0.18), transparent 55%)" }}
            aria-hidden
          />
          <div className="relative flex flex-col items-center">
            <Eyebrow>Early Access</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Whitelist <span className="gold-text">Application</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Become one of the first members of the Cleanup Crew. Whitelist applications are
              opening soon.
            </p>
            <div className="mt-8">
              <DustButton variant="gold" className="px-10 py-4 text-base">
                <Sparkles className="h-5 w-5" /> Coming Soon
              </DustButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
