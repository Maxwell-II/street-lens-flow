"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CityQuotes() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const q1Opacity = useTransform(
    scrollYProgress,
    [0.04, 0.18, 0.42, 0.56],
    [0, 1, 1, 0]
  );
  const q1Y = useTransform(scrollYProgress, [0.42, 0.56], [0, -30]);

  const q2Opacity = useTransform(
    scrollYProgress,
    [0.55, 0.7, 0.88, 0.97],
    [0, 1, 1, 0]
  );
  const q2Scale = useTransform(scrollYProgress, [0.7, 0.84], [0.95, 1.05]);

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
          padding: "2rem",
          overflow: "hidden",
        }}
      >
        <motion.p
          style={{
            opacity: q1Opacity,
            y: q1Y,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "rgba(255, 255, 255, 0.75)",
            textAlign: "center",
            maxWidth: "90vw",
            lineHeight: 1.5,
            margin: 0,
            position: "absolute",
          }}
        >
          The city doesn&apos;t sleep.
          <br />
          It just changes its tone.
        </motion.p>

        <motion.p
          style={{
            opacity: q2Opacity,
            scale: q2Scale,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "#C8A84B",
            textAlign: "center",
            maxWidth: "90vw",
            lineHeight: 1.5,
            margin: 0,
            position: "absolute",
          }}
        >
          And somewhere between midnight and 4am,
          <br />
          it becomes yours.
        </motion.p>
      </div>
    </div>
  );
}
