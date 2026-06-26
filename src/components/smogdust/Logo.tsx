import { motion } from "framer-motion";

const letters: { ch: string; color: string }[] = [
  { ch: "S", color: "var(--smog-pink)" },
  { ch: "M", color: "var(--smog-cream)" },
  { ch: "O", color: "var(--smog-pink)" },
  { ch: "G", color: "var(--smog-sky)" },
  { ch: "D", color: "var(--smog-sky)" },
  { ch: "U", color: "var(--smog-cream)" },
  { ch: "S", color: "var(--smog-sky)" },
  { ch: "T", color: "var(--smog-pink)" },
];

/** Glossy inflated bubble-letter SMOGDUST wordmark */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <h1
      className={`select-none font-display font-bold leading-none ${className}`}
      style={{ fontFamily: "var(--font-display)" }}
      aria-label="SMOGDUST"
    >
      <span className="flex flex-wrap justify-center">
        {letters.map((l, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="relative inline-block"
            initial={{ y: 40, opacity: 0, scale: 0.6 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: 0.15 + i * 0.07,
              type: "spring",
              stiffness: 260,
              damping: 14,
            }}
            whileHover={{ y: -10, rotate: i % 2 ? 4 : -4 }}
            style={{
              color: l.color,
              WebkitTextStroke: "clamp(2px, 0.7vw, 5px) #1a1a1f",
              paintOrder: "stroke fill",
              textShadow:
                "0 6px 0 rgba(26,26,31,0.35), 0 12px 24px rgba(31,41,55,0.35)",
              margin: "0 -0.015em",
            }}
          >
            {l.ch}
            {/* glossy top highlight */}
            <span
              className="pointer-events-none absolute left-[18%] top-[10%] h-[28%] w-[40%] rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255,255,255,0.85), transparent 70%)",
                WebkitTextStroke: "0",
                mixBlendMode: "screen",
              }}
              aria-hidden
            />
          </motion.span>
        ))}
      </span>
    </h1>
  );
}
