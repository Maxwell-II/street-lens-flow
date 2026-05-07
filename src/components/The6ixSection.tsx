"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function The6ixSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Giant "6": scale up from slightly small, fade in
  const sixScale = useTransform(scrollYProgress, [0.02, 0.35], [0.75, 1]);
  const sixOpacity = useTransform(scrollYProgress, [0.02, 0.28], [0, 1]);

  // Tagline appears after "6"
  const taglineOpacity = useTransform(scrollYProgress, [0.32, 0.52], [0, 1]);
  const taglineY = useTransform(scrollYProgress, [0.32, 0.52], [18, 0]);

  // Subtitle line
  const subOpacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);

  return (
    <div ref={ref} style={{ height: "260vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "radial-gradient(ellipse at 50% 60%, #1c1200 0%, #0d0900 40%, #040200 100%)",
        }}
      >
        {/* Subtle texture overlay for depth */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(200,160,60,0.07) 0%, transparent 65%)",
          }}
        />

        {/* Giant "6" */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <motion.span
            style={{
              opacity: sixOpacity,
              scale: sixScale,
              display: "block",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(16rem, 38vw, 30rem)",
              fontWeight: 700,
              lineHeight: 0.85,
              color: "rgba(205, 162, 72, 0.88)",
              textShadow:
                "0 0 80px rgba(205,162,72,0.35), 0 0 160px rgba(205,162,72,0.12)",
              userSelect: "none",
            }}
          >
            6
          </motion.span>
        </div>

        {/* Text block */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: "12vh",
            pointerEvents: "none",
          }}
        >
          <motion.p
            style={{
              opacity: taglineOpacity,
              y: taglineY,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(0.85rem, 1.9vw, 1.2rem)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.72)",
              letterSpacing: "0.06em",
              textAlign: "center",
              lineHeight: 1.8,
              padding: "0 2rem",
              fontStyle: "italic",
            }}
          >
            Around here, they don't call it Toronto.
            <br />
            They call it&nbsp;<span style={{ color: "rgba(205,162,72,0.95)", fontStyle: "normal" }}>The 6ix</span>.
          </motion.p>

          <motion.p
            style={{
              opacity: subOpacity,
              fontFamily: "monospace",
              fontSize: "clamp(0.48rem, 0.9vw, 0.6rem)",
              letterSpacing: "0.5em",
              color: "rgba(205,162,72,0.38)",
              marginTop: "1.5rem",
            }}
          >
            OVO · TORONTO · THE 6
          </motion.p>
        </div>
      </div>
    </div>
  );
}
