import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Continuous dusty atmosphere rendered behind the whole site:
 * floating dust, drifting ash, soft smoke blobs, light rays, fog and film grain.
 * Random particles are generated client-side only to avoid SSR hydration mismatch.
 */
export function Atmosphere() {
  const [particles, setParticles] = useState<{
    dust: {
      id: number;
      left: number;
      top: number;
      size: number;
      delay: number;
      duration: number;
      drift: number;
      opacity: number;
    }[];
    embers: { id: number; left: number; delay: number; duration: number; size: number }[];
  }>({ dust: [], embers: [] });

  useEffect(() => {
    setParticles({
      dust: Array.from({ length: 38 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1.5 + Math.random() * 4,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 16,
        drift: (Math.random() - 0.5) * 80,
        opacity: 0.15 + Math.random() * 0.4,
      })),
      embers: Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 14 + Math.random() * 12,
        size: 2 + Math.random() * 3,
      })),
    });
  }, []);

  const dust = particles.dust;
  const embers = particles.embers;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Soft moving smoke blobs */}
      <motion.div
        className="absolute -left-40 top-10 h-[42rem] w-[42rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.55), transparent 65%)" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-12rem] top-1/3 h-[38rem] w-[38rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(214,165,90,0.18), transparent 65%)" }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/3 bottom-0 h-[40rem] w-[40rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.4), transparent 60%)" }}
        animate={{ x: [0, 40, 0], y: [0, -50, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Light rays */}
      <div
        className="absolute -top-1/4 left-1/4 h-[140%] w-1/2 opacity-30"
        style={{
          background:
            "linear-gradient(100deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)",
          filter: "blur(20px)",
          animation: "ray-sweep 14s ease-in-out infinite",
        }}
      />

      {/* Floating dust particles */}
      {dust.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            boxShadow: "0 0 6px rgba(255,255,255,0.8)",
          }}
          animate={{ y: [0, -60, 0], x: [0, d.drift, 0], opacity: [d.opacity, d.opacity * 0.3, d.opacity] }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Drifting golden embers */}
      {embers.map((e) => (
        <motion.span
          key={`e-${e.id}`}
          className="absolute rounded-full"
          style={{
            left: `${e.left}%`,
            bottom: "-2%",
            width: e.size,
            height: e.size,
            background: "rgba(214,165,90,0.85)",
            boxShadow: "0 0 8px rgba(214,165,90,0.9)",
          }}
          animate={{ y: ["0vh", "-110vh"], x: [0, 30, -20, 0], opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: e.duration, delay: e.delay, repeat: Infinity, ease: "easeIn" }}
        />
      ))}

      {/* Atmospheric haze + fog overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(215,230,238,0.0) 0%, rgba(199,216,226,0.35) 100%)",
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
