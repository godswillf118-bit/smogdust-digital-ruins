import { XIcon, DiscordIcon } from "./icons";

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl px-4 pb-12 pt-10">
      <div className="glass-card flex flex-col items-center gap-6 rounded-3xl px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <div className="font-display text-2xl font-bold">
            <span className="text-smog-pink" style={{ WebkitTextStroke: "1px #1a1a1f", paintOrder: "stroke fill" }}>
              SMOG
            </span>
            <span className="text-smog-sky" style={{ WebkitTextStroke: "1px #1a1a1f", paintOrder: "stroke fill" }}>
              DUST
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Built on Ethereum · 4444 NFTs
          </p>
          <p className="mt-1 font-display text-sm font-semibold gold-text">The Dust Never Settles.</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://x.com/SmogDust"
            target="_blank"
            rel="noreferrer"
            aria-label="SMOGDUST on X"
            className="flex h-11 w-11 items-center justify-center rounded-full glass text-foreground transition-transform hover:scale-110"
          >
            <XIcon className="h-5 w-5" />
          </a>
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noreferrer"
            aria-label="SMOGDUST Discord"
            className="flex h-11 w-11 items-center justify-center rounded-full glass text-foreground transition-transform hover:scale-110"
          >
            <DiscordIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground/70">
        © {new Date().getFullYear()} SMOGDUST. We clean what others forget.
      </p>
    </footer>
  );
}
