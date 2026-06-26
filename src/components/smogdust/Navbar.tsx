import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { DiscordIcon, XIcon } from "./icons";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collection", href: "#collection" },
  { label: "Lore", href: "#lore" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Wallet Checker", href: "#wallet" },
  { label: "Whitelist", href: "#whitelist" },
  { label: "Community", href: "#community" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-5 py-2.5 transition-all duration-500 ${
          scrolled ? "glass mx-3 md:mx-auto" : "bg-transparent"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold tracking-wide">
          <span className="text-smog-pink" style={{ WebkitTextStroke: "1px #1a1a1f", paintOrder: "stroke fill" }}>
            SMOG
          </span>
          <span className="text-smog-sky" style={{ WebkitTextStroke: "1px #1a1a1f", paintOrder: "stroke fill" }}>
            DUST
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/25 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://x.com/SmogDust"
            target="_blank"
            rel="noreferrer"
            aria-label="SMOGDUST on X"
            className="hidden h-9 w-9 items-center justify-center rounded-full glass text-foreground transition-transform hover:scale-110 sm:flex"
          >
            <XIcon className="h-4 w-4" />
          </a>
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noreferrer"
            aria-label="SMOGDUST Discord"
            className="hidden h-9 w-9 items-center justify-center rounded-full glass text-foreground transition-transform hover:scale-110 sm:flex"
          >
            <DiscordIcon className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full glass text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-3 mt-2 overflow-hidden rounded-3xl glass p-3 lg:hidden"
          >
            <ul className="grid grid-cols-2 gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/30"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
