import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eyebrow } from "./ui";

const lines = [
  "Every abandoned wallet leaves behind dust.",
  "Every forgotten NFT becomes treasure.",
  "Every failed project becomes home.",
  "The blockchain remembers everything.",
];

export function Lore() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="lore" className="relative mx-auto max-w-4xl px-4 py-28 md:py-40 text-center" ref={ref}>
      <div className="flex justify-center">
        <Eyebrow>The Legend</Eyebrow>
      </div>
      <div className="mt-10 space-y-6">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: i * 0.25, ease: "easeOut" }}
            className="font-display text-2xl font-semibold leading-snug text-foreground sm:text-4xl"
          >
            {line}
          </motion.p>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: lines.length * 0.25 + 0.2 }}
        className="mt-12 font-display text-3xl font-bold gold-text sm:text-5xl animate-breathe"
      >
        The Dust Never Sleeps.
      </motion.p>
    </section>
  );
}
