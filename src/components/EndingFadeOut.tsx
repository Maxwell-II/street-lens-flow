"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function EndingFadeOut() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(
    scrollYProgress,
    [0.04, 0.2, 0.45, 0.6],
    [0, 1, 1, 0]
  );
  const titleScale = useTransform(
    scrollYProgress,
    [0.04, 0.2, 0.45, 0.6],
    [0.85, 1, 1, 0.96]
  );

  const subtitleOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.75, 0.9, 0.98],
    [0, 1, 1, 0]
  );

  const bottomOpacity = useTransform(scrollYProgress, [0.72, 0.85], [0, 1]);

  return (
    <div ref={ref} style={{ height: "400vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background: "#050505",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <motion.h1
          style={{
            opacity: titleOpacity,
            scale: titleScale,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(4rem, 12vw, 8rem)",
            fontWeight: 300,
            letterSpacing: "0.15em",
            color: "white",
            margin: 0,
            position: "absolute",
          }}
        >
          TORONTO
        </motion.h1>

        <motion.p
          style={{
            opacity: subtitleOpacity,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
            fontWeight: 300,
            letterSpacing: "0.1em",
            color: "rgba(200, 168, 75, 0.8)",
            textAlign: "center",
            margin: 0,
            position: "absolute",
          }}
        >
          Thank you for scrolling.
        </motion.p>

        <motion.p
          style={{
            opacity: bottomOpacity,
            fontFamily: "'Geist Mono', monospace",
            fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
            letterSpacing: "0.1em",
            color: "rgba(255, 255, 255, 0.35)",
            position: "absolute",
            bottom: "3rem",
            margin: 0,
          }}
        >
          Spring 2024 · 43°42′N 79°25′W · Street Lens Flow
        </motion.p>
      </div>
    </div>
  );
}
