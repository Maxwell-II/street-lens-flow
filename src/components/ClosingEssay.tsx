"use client";

import { motion, Variants } from "framer-motion";

const paragraphs = [
  "Toronto doesn't announce itself. It accumulates — one subway ride, one late-night diner, one fog-wrapped morning at the waterfront — until suddenly you realize this city has become your rhythm.",
  "The CN Tower keeps watch over it all. From the financial district's glass canyons to Kensington Market's painted walls, the city refuses to resolve into a single identity. That tension is the point.",
  "These photographs are not a document. They are a record of attention — the seconds I stopped, raised the camera, and decided this particular light was worth keeping.",
];

const paraVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut", delay: i * 0.12 },
  }),
};

export default function ClosingEssay() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#040404",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8rem clamp(1.5rem, 6vw, 4rem)",
      }}
    >
      <div style={{ maxWidth: "640px", width: "100%" }}>
        {/* Location header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          style={{
            fontFamily: "monospace",
            fontSize: "clamp(0.5rem, 1.1vw, 0.62rem)",
            letterSpacing: "0.5em",
            color: "rgba(255,255,255,0.25)",
            marginBottom: "3.5rem",
          }}
        >
          TORONTO · 43°42′N 79°25′W · SPRING 2024
        </motion.p>

        {/* Essay paragraphs, each with its own whileInView */}
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={paraVariants}
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              lineHeight: 1.95,
              color: "rgba(255,255,255,0.68)",
              fontWeight: 300,
              marginBottom: "1.8rem",
            }}
          >
            {text}
          </motion.p>
        ))}

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            justifyContent: "space-between",
            color: "rgba(255,255,255,0.18)",
            fontFamily: "monospace",
            fontSize: "clamp(0.48rem, 0.9vw, 0.58rem)",
            letterSpacing: "0.35em",
          }}
        >
          <span>STREET LENS FLOW</span>
          <span>2024</span>
        </motion.div>
      </div>
    </section>
  );
}
