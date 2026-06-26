import { type ReactNode, useRef, type ButtonHTMLAttributes } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

/** Scroll-triggered reveal wrapper */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

/** Eyebrow label above section headings */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-gold animate-breathe" />
      {children}
    </span>
  );
}

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "glass";
  children: ReactNode;
}

/** Glass / gold button with hover glow + dust shimmer */
export function DustButton({
  variant = "gold",
  className,
  children,
  ...props
}: RippleButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors",
        variant === "gold"
          ? "text-[#3a2a10]"
          : "text-foreground glass hover:bg-white/25",
        className,
      )}
      style={
        variant === "gold"
          ? {
              background: "linear-gradient(120deg, #e7c489, #d6a55a 55%, #c98f3e)",
              boxShadow: "var(--shadow-gold)",
              border: "1px solid rgba(255,255,255,0.4)",
            }
          : undefined
      }
      {...(props as object)}
    >
      {/* shimmer sweep */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        aria-hidden
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
