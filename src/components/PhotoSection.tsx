"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

interface Props {
  image: string;
  alt: string;
  index: string;
  title: string;
  caption: string;
  cameraBody: string;
  cameraSettings: string;
  panelSide: "left" | "right";
  /** Start fully desaturated and reveal color as user scrolls in */
  startGray?: boolean;
}

export default function PhotoSection({
  image,
  alt,
  index,
  title,
  caption,
  cameraBody,
  cameraSettings,
  panelSide,
  startGray = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  // Grayscale: always computed, only applied when startGray=true
  // When startGray=false both ends are 0 → "grayscale(0%)" = no effect
  const grayscalePct = useTransform(
    scrollYProgress,
    [0, 0.45],
    startGray ? [100, 0] : [0, 0]
  );
  const imgFilter = useMotionTemplate`grayscale(${grayscalePct}%)`;

  // Panel slides in from its side
  const panelX = useTransform(
    scrollYProgress,
    [0.05, 0.35],
    [panelSide === "left" ? -80 : 80, 0]
  );
  const panelOpacity = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);

  // Camera params reveal later in the scroll
  const cameraOpacity = useTransform(scrollYProgress, [0.55, 0.72], [0, 1]);

  const borderStyle =
    panelSide === "left"
      ? { borderRight: "1px solid rgba(255,255,255,0.06)" }
      : { borderLeft: "1px solid rgba(255,255,255,0.06)" };

  const positionStyle =
    panelSide === "left" ? { left: 0 } : { right: 0 };

  return (
    <div ref={ref} style={{ height: "280vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Full-bleed image */}
        <motion.img
          src={image}
          alt={alt}
          style={{
            scale: imgScale,
            filter: imgFilter,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Frosted glass side panel */}
        <motion.div
          style={{
            x: panelX,
            opacity: panelOpacity,
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "min(380px, 38vw)",
            background: "rgba(6,6,6,0.78)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "3rem clamp(1.5rem, 3vw, 2.5rem)",
            color: "white",
            ...positionStyle,
            ...borderStyle,
          }}
        >
          {/* Section index */}
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "clamp(0.5rem, 0.9vw, 0.62rem)",
              letterSpacing: "0.5em",
              opacity: 0.3,
              marginBottom: "1.8rem",
            }}
          >
            — {index}
          </p>

          {/* Title */}
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.3rem, 2.6vw, 1.85rem)",
              fontWeight: 300,
              lineHeight: 1.25,
              marginBottom: "1.2rem",
            }}
          >
            {title}
          </h2>

          {/* Caption */}
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "clamp(0.78rem, 1.3vw, 0.88rem)",
              lineHeight: 1.85,
              opacity: 0.58,
              fontWeight: 300,
            }}
          >
            {caption}
          </p>

          {/* Camera metadata — delayed reveal */}
          <motion.div
            style={{
              opacity: cameraOpacity,
              marginTop: "auto",
              paddingTop: "1.8rem",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "clamp(0.5rem, 0.85vw, 0.6rem)",
                letterSpacing: "0.2em",
                opacity: 0.35,
                marginBottom: "5px",
              }}
            >
              {cameraBody}
            </p>
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "clamp(0.58rem, 1vw, 0.7rem)",
                letterSpacing: "0.18em",
              }}
            >
              {cameraSettings}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
