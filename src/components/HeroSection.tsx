"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.25]);
  const imgBrightness = useTransform(scrollYProgress, [0, 0.7], [1, 0.35]);

  const coordsOpacity = useTransform(scrollYProgress, [0.04, 0.2], [0, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.3], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0.05, 0.35], [0, -120]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.18, 0.38], [0, 1]);
  const subtitleY = useTransform(scrollYProgress, [0.18, 0.38], [16, 0]);
  const cameraOpacity = useTransform(scrollYProgress, [0.55, 0.72], [0, 1]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.07], [1, 0]);

  return (
    <div ref={ref} style={{ height: "300vh" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <motion.img
          src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=1920&q=80"
          alt="Toronto"
          style={{
            scale: imgScale,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            filter: useMotionTemplate`brightness(${imgBrightness})`,
          }}
        />
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, #000 0%, #050207 100%)",
            opacity: useTransform(imgBrightness, [1, 0.35], [0.2, 0.82]),
          }}
        />

        {/* Center text block */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <motion.p
            style={{
              opacity: coordsOpacity,
              fontFamily: "monospace",
              fontSize: "clamp(0.5rem, 1.1vw, 0.7rem)",
              letterSpacing: "0.55em",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "1.4rem",
            }}
          >
            43°42′N · 79°25′W
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              opacity: titleOpacity,
              y: titleY,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(3.5rem, 12vw, 10rem)",
              fontWeight: 300,
              letterSpacing: "0.3em",
              color: "white",
              margin: 0,
              lineHeight: 1,
            }}
          >
            TORONTO
          </motion.h1>

          <motion.p
            style={{
              opacity: subtitleOpacity,
              y: subtitleY,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(0.8rem, 1.8vw, 1.05rem)",
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.55)",
              marginTop: "1.6rem",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            Steel and glass, lake and sky.
          </motion.p>
        </div>

        {/* Camera params */}
        <motion.div
          style={{
            opacity: cameraOpacity,
            position: "absolute",
            bottom: "2.5rem",
            right: "2.5rem",
            color: "white",
            fontFamily: "monospace",
            textAlign: "right",
            lineHeight: 1.8,
            pointerEvents: "none",
          }}
        >
          <p
            style={{
              fontSize: "clamp(0.48rem, 0.9vw, 0.62rem)",
              letterSpacing: "0.2em",
              opacity: 0.35,
            }}
          >
            Sony A7C II · Zeiss Batis 18mm
          </p>
          <p
            style={{
              fontSize: "clamp(0.56rem, 1vw, 0.72rem)",
              letterSpacing: "0.2em",
            }}
          >
            18mm · f/2.8 · 1/30s · ISO 1600
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          style={{
            opacity: hintOpacity,
            position: "absolute",
            bottom: "2rem",
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "rgba(255,255,255,0.28)",
            pointerEvents: "none",
          }}
        >
          <p style={{ fontFamily: "monospace", fontSize: "0.5rem", letterSpacing: "0.45em" }}>
            SCROLL
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{ width: "1px", height: "26px", background: "rgba(255,255,255,0.25)" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
