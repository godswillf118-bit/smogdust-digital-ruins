import { Wallet, ShieldCheck } from "lucide-react";
import { Reveal, Eyebrow, DustButton } from "./ui";

export function WalletChecker() {
  return (
    <section id="wallet" className="relative mx-auto max-w-3xl px-4 py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] glass-card p-8 md:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(214,165,90,0.4), transparent 70%)" }}
            aria-hidden
          />
          <div className="relative flex flex-col items-center text-center">
            <Eyebrow>Eligibility</Eyebrow>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl glass text-gold">
                <Wallet className="h-6 w-6" />
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Wallet Checker</h2>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full dust-border bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-breathe" /> Coming Soon
            </span>
            <p className="mt-5 max-w-md text-muted-foreground">
              Verify whether your wallet qualifies before mint.
            </p>

            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                disabled
                placeholder="0x... wallet address"
                aria-label="Wallet address (disabled)"
                className="flex-1 cursor-not-allowed rounded-full border border-white/30 bg-white/20 px-5 py-3 text-sm text-muted-foreground placeholder:text-muted-foreground/70 focus:outline-none"
              />
              <DustButton variant="gold" disabled className="cursor-not-allowed opacity-60">
                <ShieldCheck className="h-4 w-4" /> Check
              </DustButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
