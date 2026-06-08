"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function TopProgressBar() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{
        scaleX: reduceMotion ? 1 : scaleX,
        transformOrigin: "left",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "var(--accent)",
        zIndex: 60,
      }}
    />
  );
}
