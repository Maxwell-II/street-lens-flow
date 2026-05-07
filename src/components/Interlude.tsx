"use client";

import { motion } from "framer-motion";

const lines = [
  "A city of glass towers and misty mornings.",
  "Where the lake meets the skyline,",
  "and strangers share the same cold light.",
];

export default function Interlude() {
  return (
    <section
      style={{
        minHeight: "70vh",
        background: "#040404",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 2rem",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.28 } },
        }}
        style={{ maxWidth: "560px", textAlign: "center" }}
      >
        {lines.map((line, i) => (
          <motion.p
            key={i}
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.85, ease: "easeOut" },
              },
            }}
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1rem, 2.4vw, 1.35rem)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.9,
              marginBottom: "0.25rem",
            }}
          >
            {line}
          </motion.p>
        ))}

        {/* Separator line grows out from center */}
        <motion.div
          variants={{
            hidden: { scaleX: 0, opacity: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: { duration: 0.7, delay: 0.1, ease: "easeOut" },
            },
          }}
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.15)",
            width: "60px",
            margin: "2.5rem auto 0",
            transformOrigin: "center",
          }}
        />
      </motion.div>
    </section>
  );
}
