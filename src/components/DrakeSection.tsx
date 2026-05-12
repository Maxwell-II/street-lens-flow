"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// ── Typewriter ──────────────────────────────────────────────────────────────
const sentence =
  "When you talk about The 6ix, there's one man who wrote this city into every verse.";

const charContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.048, delayChildren: 0.3 } },
};
const charItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
};

function Typewriter() {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={charContainer}
      style={{ display: "inline" }}
    >
      {sentence.split("").map((char, i) => (
        <motion.span key={i} variants={charItem}>
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ repeat: Infinity, duration: 0.9, times: [0, 0.48, 0.5, 1] }}
        style={{ color: "rgba(205,162,72,0.85)", marginLeft: "2px" }}
      >
        |
      </motion.span>
    </motion.span>
  );
}

// ── Album cards ─────────────────────────────────────────────────────────────
const albums = [
  {
    title: "Take Care",
    year: "2011",
    bg: "linear-gradient(160deg, #12101e 0%, #080610 100%)",
    accent: "#6e60b2",
    note: "The blueprint.",
  },
  {
    title: "Nothing Was the Same",
    year: "2013",
    bg: "linear-gradient(160deg, #0d1820 0%, #060d13 100%)",
    accent: "#4a8faa",
    note: "Defined a generation.",
  },
  {
    title: "Views",
    year: "2016",
    bg: "linear-gradient(160deg, #0e1928 0%, #070e18 100%)",
    accent: "#3a6fa0",
    note: "From the rooftop.",
  },
  {
    title: "Certified Lover Boy",
    year: "2021",
    bg: "linear-gradient(160deg, #181818 0%, #0a0a0a 100%)",
    accent: "#999",
    note: "Forever Toronto.",
  },
];

const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const cardItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// ── Drake profile images ─────────────────────────────────────────────────────
const profileImages = [
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    h: "240px",
    delay: 0,
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
    h: "155px",
    delay: 0.15,
  },
];

// ── Main section ────────────────────────────────────────────────────────────
export default function DrakeSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "8rem clamp(1.5rem, 6vw, 4rem)",
        overflow: "hidden",
      }}
    >
      {/* Blurred concert background */}
      <div style={{ position: "absolute", inset: "-4%", zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1920&q=80"
          alt=""
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            filter: "blur(6px) brightness(0.3) saturate(0.6)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(4,2,8,0.6) 0%, rgba(4,2,8,0.82) 60%, rgba(4,2,8,0.96) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "720px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Act label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            fontFamily: "monospace",
            fontSize: "clamp(0.48rem, 1vw, 0.6rem)",
            letterSpacing: "0.55em",
            color: "rgba(205,162,72,0.4)",
            marginBottom: "2.5rem",
          }}
        >
          ACT IV · DRAKE · THE 6IX
        </motion.p>

        {/* Typewriter */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.01 }}
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(1rem, 2.4vw, 1.45rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.85,
            letterSpacing: "0.03em",
            minHeight: "3.5em",
          }}
        >
          <Typewriter />
        </motion.p>

        {/* ── Drake profile: small images + bio ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          style={{
            display: "flex",
            gap: "clamp(1.2rem, 3vw, 2rem)",
            alignItems: "flex-start",
            textAlign: "left",
            marginTop: "3rem",
            padding: "1.8rem",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Stacked small images */}
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {profileImages.map((img, i) => (
              <motion.img
                key={i}
                src={img.src}
                alt=""
                initial={{ opacity: 0, scale: 1.06 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 2.3 + img.delay, ease: "easeOut" }}
                style={{
                  width: "clamp(110px, 16vw, 170px)",
                  height: img.h,
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.88) saturate(0.75)",
                }}
              />
            ))}
          </div>

          {/* Bio text */}
          <div style={{ flex: 1, paddingTop: "0.2rem" }}>
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "0.05em",
                marginBottom: "0.4rem",
              }}
            >
              Aubrey Drake Graham
            </p>
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "clamp(0.48rem, 0.85vw, 0.6rem)",
                letterSpacing: "0.3em",
                color: "rgba(205,162,72,0.55)",
                marginBottom: "1.2rem",
              }}
            >
              b. OCT 24, 1986 · TORONTO
            </p>
            <p
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "clamp(0.75rem, 1.3vw, 0.88rem)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.58)",
                lineHeight: 1.9,
                letterSpacing: "0.02em",
              }}
            >
              Born and raised in Toronto, he started as an actor before redefining
              the boundaries of Hip-Hop and R&B.
              <br />
              Founder of OVO Sound, global ambassador for the Toronto Raptors —
              he&apos;s the reason the world knows&nbsp;
              <span style={{ color: "rgba(205,162,72,0.85)" }}>The 6ix</span>.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{
            height: "1px",
            background: "rgba(205,162,72,0.18)",
            margin: "2.8rem auto",
            width: "80px",
            transformOrigin: "center",
          }}
        />

        {/* Discography label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: "monospace",
            fontSize: "clamp(0.48rem, 0.9vw, 0.58rem)",
            letterSpacing: "0.5em",
            color: "rgba(205,162,72,0.4)",
            marginBottom: "1.8rem",
          }}
        >
          DISCOGRAPHY
        </motion.p>

        {/* Album cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "clamp(0.6rem, 1.5vw, 1rem)",
          }}
        >
          {albums.map((album) => (
            <motion.div
              key={album.title}
              variants={cardItem}
              transition={{ duration: 0.7 }}
              style={{
                background: album.bg,
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "4px",
                padding: "clamp(0.9rem, 1.6vw, 1.2rem)",
                textAlign: "left",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "2px",
                  background: album.accent,
                  marginBottom: "0.9rem",
                  opacity: 0.7,
                }}
              />
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "clamp(0.62rem, 1.1vw, 0.75rem)",
                  color: "rgba(255,255,255,0.88)",
                  letterSpacing: "0.03em",
                  lineHeight: 1.4,
                  marginBottom: "0.5rem",
                }}
              >
                {album.title}
              </p>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "clamp(0.48rem, 0.85vw, 0.58rem)",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.2em",
                  marginBottom: "0.75rem",
                }}
              >
                {album.year}
              </p>
              <p
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "clamp(0.55rem, 0.9vw, 0.65rem)",
                  color: album.accent,
                  opacity: 0.8,
                  letterSpacing: "0.04em",
                }}
              >
                {album.note}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
