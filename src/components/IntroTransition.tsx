"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function IntroTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const text1Opacity = useTransform(
    scrollYProgress,
    [0.04, 0.18, 0.38, 0.55],
    [0, 1, 1, 0]
  );
  const text1Y = useTransform(scrollYProgress, [0.38, 0.55], [0, -30]);

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.52, 0.68, 0.82, 0.94],
    [0, 1, 1, 0]
  );
  const text2Scale = useTransform(scrollYProgress, [0.68, 0.82], [1, 1.1]);

  return (
    <div ref={ref} style={{ height: "350vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background: "#070B14",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <motion.p
          style={{
            opacity: text1Opacity,
            y: text1Y,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(1.5rem, 4vw, 2.8rem)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "rgba(255, 255, 255, 0.8)",
            textAlign: "center",
            maxWidth: "85vw",
            lineHeight: 1.6,
            margin: 0,
            position: "absolute",
          }}
        >
          Not every city feels alive at night.
        </motion.p>

        <motion.p
          style={{
            opacity: text2Opacity,
            scale: text2Scale,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "#C8A84B",
            textAlign: "center",
            margin: 0,
            position: "absolute",
          }}
        >
          Toronto does.
        </motion.p>
      </div>
    </div>
  );
}
