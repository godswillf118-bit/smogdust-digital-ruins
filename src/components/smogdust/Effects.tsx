import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #c98f3e, #f0cf94, #d6a55a)",
        boxShadow: "0 0 12px rgba(214,165,90,0.7)",
      }}
    />
  );
}

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setCoarse(true);
      return;
    }
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (coarse) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[55] h-72 w-72 rounded-full transition-transform duration-150 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(214,165,90,0.16), transparent 70%)",
      }}
    />
  );
}
