import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reveal, Eyebrow } from "./ui";
import { characters } from "./data";

function DustParticles({ color }: { color: string }) {
  const [bits, setBits] = useState<
    { id: number; x: number; delay: number; duration: number; size: number }[]
  >([]);

  useEffect(() => {
    setBits(
      Array.from({ length: 9 }).map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 130,
        delay: Math.random() * 0.6,
        duration: 1.4 + Math.random() * 1.2,
        size: 2 + Math.random() * 3,
      })),
    );
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      {bits.map((b) => (
        <motion.span
          key={b.id}
          className="absolute bottom-6 left-1/2 rounded-full"
          style={{ width: b.size, height: b.size, background: color, boxShadow: `0 0 6px ${color}` }}
          animate={{ y: [0, -70], x: [0, b.x], opacity: [0, 0.9, 0] }}
          transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}



export function Collection() {
  return (
    <section id="collection" className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
      <Reveal className="flex flex-col items-center text-center">
        <Eyebrow>The Cleanup Crew</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-bold text-foreground sm:text-5xl">
          The <span className="gold-text">Collection</span>
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Four breeds of forgotten creatures, each shaped by the digital ruins they were born into.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {characters.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="group relative h-full overflow-hidden rounded-3xl glass-card p-5"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(120% 80% at 50% 0%, ${c.accent}33, transparent 60%)` }}
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl">
                <motion.img
                  src={c.img}
                  alt={`${c.title} — SmogDust character`}
                  loading="lazy"
                  width={520}
                  height={520}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="mx-auto w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="pointer-events-none absolute inset-x-6 bottom-1 h-4 rounded-full blur-md"
                  style={{ background: "rgba(31,41,55,0.25)" }}
                  aria-hidden
                />
                <DustParticles color={c.accent} />
              </div>
              <div className="relative mt-4">
                <h3 className="font-display text-xl font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                <span
                  className="mt-4 inline-block h-1 w-12 rounded-full transition-all duration-500 group-hover:w-20"
                  style={{ background: c.accent }}
                />
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
