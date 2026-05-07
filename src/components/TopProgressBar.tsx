"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function TopProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        background: "rgba(255,255,255,0.45)",
        zIndex: 100,
      }}
    />
  );
}
