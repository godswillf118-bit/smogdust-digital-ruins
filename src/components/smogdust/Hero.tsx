import { motion } from "framer-motion";
import { Sparkles, Users } from "lucide-react";
import { Logo } from "./Logo";
import { DustButton } from "./ui";
import { characters } from "./data";

export function Hero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-28 pb-16 text-center">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-7 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground"
      >
        <Sparkles className="h-3.5 w-3.5 text-gold" /> Forgotten on the chain · Reborn from dust
      </motion.span>

      <Logo className="text-[18vw] sm:text-[14vw] md:text-[10rem] lg:text-[11rem]" />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-8 max-w-xl font-display text-xl font-semibold text-foreground sm:text-2xl"
      >
        Tiny Creatures. Big Collections.
        <span className="mt-1 block gold-text">We Clean What Others Forget.</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-4"
      >
        <DustButton variant="gold">
          <Sparkles className="h-4 w-4" /> Mint Coming Soon
        </DustButton>
        <DustButton variant="glass" onClick={() => document.querySelector("#community")?.scrollIntoView({ behavior: "smooth" })}>
          <Users className="h-4 w-4" /> Join Community
        </DustButton>
      </motion.div>

      {/* Floating characters */}
      <div className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-5 sm:gap-8 md:grid-cols-4">
        {characters.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + i * 0.12, type: "spring", stiffness: 120 }}
            className="group relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div
                className="absolute inset-x-4 bottom-2 h-5 rounded-full blur-md transition-all duration-300 group-hover:opacity-90"
                style={{ background: "rgba(31,41,55,0.28)" }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle, ${c.accent}aa, transparent 70%)` }}
                aria-hidden
              />
              <img
                src={c.img}
                alt={`${c.title} SmogDust character`}
                loading={i < 2 ? "eager" : "lazy"}
                width={420}
                height={420}
                className="mx-auto w-full max-w-[180px] drop-shadow-xl transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
            <p className="mt-2 font-display text-sm font-semibold text-foreground">{c.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
