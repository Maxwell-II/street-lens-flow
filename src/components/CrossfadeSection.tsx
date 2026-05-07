"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CrossfadeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Image 1 fades out, Image 2 fades in — overlapping for smooth crossfade
  const img1Opacity = useTransform(scrollYProgress, [0, 0.38], [1, 0]);
  const img2Opacity = useTransform(scrollYProgress, [0.18, 0.5], [0, 1]);

  // Both images slowly scale throughout
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  // Dark overlay deepens to make text readable
  const overlayOpacity = useTransform(scrollYProgress, [0.1, 0.55], [0.3, 0.65]);

  // Text fades in once crossfade is underway
  const textOpacity = useTransform(scrollYProgress, [0.28, 0.52], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.28, 0.52], [22, 0]);

  return (
    <div ref={ref} style={{ height: "300vh" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        {/* Layer 1: dark moody street (fades out) */}
        <motion.div style={{ opacity: img1Opacity, position: "absolute", inset: 0 }}>
          <motion.img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
            alt=""
            style={{
              scale: imgScale,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </motion.div>

        {/* Layer 2: winter/snow street (fades in) */}
        <motion.div style={{ opacity: img2Opacity, position: "absolute", inset: 0 }}>
          <motion.img
            src="https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=1920&q=80"
            alt=""
            style={{
              scale: imgScale,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </motion.div>

        {/* Darkening overlay */}
        <motion.div
          style={{
            opacity: overlayOpacity,
            position: "absolute",
            inset: 0,
            background: "#000",
          }}
        />

        {/* Text */}
        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            padding: "0 2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "clamp(0.5rem, 1vw, 0.62rem)",
              letterSpacing: "0.5em",
              color: "rgba(255,255,255,0.28)",
              marginBottom: "1.4rem",
            }}
          >
            ACT II
          </p>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.1rem, 2.8vw, 1.8rem)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.8,
              letterSpacing: "0.04em",
              fontStyle: "italic",
            }}
          >
            Long, brutal winters —
            <br />
            and the most restless souls on the street.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
