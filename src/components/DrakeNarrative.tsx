"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useMotionTemplate } from "framer-motion";

export default function DrakeNarrative() {
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { margin: "-20% 0px -20% 0px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (inView) {
      document.documentElement.style.setProperty("--body-bg", "#050505");
    } else {
      document.documentElement.style.setProperty("--body-bg", "#07080C");
    }
  }, [inView]);

  const lyric1Opacity = useTransform(
    scrollYProgress,
    [0.05, 0.18, 0.25, 0.38],
    [0, 1, 1, 0]
  );
  const lyric1Y = useTransform(scrollYProgress, [0.25, 0.38], [0, -40]);
  const lyric1Blur = useTransform(
    scrollYProgress,
    [0.25, 0.38],
    [0, 10]
  );

  const lyric2Opacity = useTransform(
    scrollYProgress,
    [0.35, 0.48, 0.55, 0.68],
    [0, 1, 1, 0]
  );
  const lyric2Y = useTransform(scrollYProgress, [0.55, 0.68], [0, -40]);
  const lyric2Blur = useTransform(
    scrollYProgress,
    [0.55, 0.68],
    [0, 10]
  );

  const lyric3Opacity = useTransform(
    scrollYProgress,
    [0.65, 0.78, 0.88, 0.97],
    [0, 1, 1, 0]
  );
  const lyric3Y = useTransform(scrollYProgress, [0.88, 0.97], [0, -40]);
  const lyric3Blur = useTransform(
    scrollYProgress,
    [0.88, 0.97],
    [0, 10]
  );

  return (
    <div ref={ref} style={{ height: "500vh" }}>
      <div
        ref={sectionRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background: "#050505",
          overflow: "hidden",
        }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1920&q=80"
          alt="Drake"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            filter: "blur(4px) brightness(0.2) saturate(0.3)",
            position: "absolute",
          }}
        />

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
          <motion.h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(12rem, 30vw, 24rem)",
              fontWeight: 300,
              letterSpacing: "0.1em",
              color: "#C8A84B",
              opacity: 0.08,
              margin: 0,
              position: "absolute",
              textAlign: "center",
            }}
          >
            DRAKE
          </motion.h2>
        </div>

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
              opacity: lyric1Opacity,
              y: lyric1Y,
              filter: useMotionTemplate`blur(${lyric1Blur}px)`,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              letterSpacing: "0.1em",
              color: "white",
              textAlign: "center",
              maxWidth: "85vw",
              margin: 0,
              position: "absolute",
            }}
          >
            STARTED FROM THE COLD
          </motion.p>

          <motion.p
            style={{
              opacity: lyric2Opacity,
              y: lyric2Y,
              filter: useMotionTemplate`blur(${lyric2Blur}px)`,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              letterSpacing: "0.1em",
              color: "#C8A84B",
              textAlign: "center",
              margin: 0,
              position: "absolute",
            }}
          >
            No new friends.
          </motion.p>

          <motion.p
            style={{
              opacity: lyric3Opacity,
              y: lyric3Y,
              filter: useMotionTemplate`blur(${lyric3Blur}px)`,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              letterSpacing: "0.1em",
              color: "white",
              textAlign: "center",
              maxWidth: "85vw",
              margin: 0,
              position: "absolute",
            }}
          >
            VIEWS FROM THE 6
          </motion.p>
        </div>
      </div>
    </div>
  );
}
