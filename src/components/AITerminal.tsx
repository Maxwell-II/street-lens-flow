"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function AITerminal() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // AI functionality stub - not implemented yet
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      style={{
        minHeight: "100vh",
        background: "#050505",
        padding: "4rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blue glow background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(30, 60, 120, 0.15) 0%, rgba(30, 60, 120, 0) 70%)",
          filter: "blur(150px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 300,
            letterSpacing: "0.1em",
            color: "rgba(200, 168, 75, 0.9)",
            textAlign: "center",
            margin: "0 0 3rem 0",
          }}
        >
          MIDNIGHT THOUGHTS
        </h2>

        <p
          style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
            color: "rgba(255, 255, 255, 0.5)",
            textAlign: "center",
            marginBottom: "3rem",
            maxWidth: "100%",
          }}
        >
          What does this city make you feel?
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type something..."
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "2px",
              padding: "1rem 1.2rem",
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.9rem",
              color: "white",
              letterSpacing: "0.05em",
              outline: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 0 0 0 rgba(200, 168, 75, 0)",
            }}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.boxShadow =
                "0 0 20px rgba(200, 168, 75, 0.3), inset 0 0 10px rgba(200, 168, 75, 0.1)";
              (e.target as HTMLInputElement).style.borderColor =
                "rgba(200, 168, 75, 0.5)";
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.boxShadow =
                "0 0 0 0 rgba(200, 168, 75, 0)";
              (e.target as HTMLInputElement).style.borderColor =
                "rgba(255, 255, 255, 0.1)";
            }}
          />

          <button
            type="submit"
            disabled={isLoading}
            style={{
              background: "transparent",
              border: "1px solid rgba(200, 168, 75, 0.5)",
              color: "#C8A84B",
              padding: "0.8rem 2rem",
              fontFamily: "'Geist Mono', monospace",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              cursor: isLoading ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              opacity: isLoading ? 0.6 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                (e.target as HTMLButtonElement).style.background =
                  "rgba(200, 168, 75, 0.1)";
                (e.target as HTMLButtonElement).style.boxShadow =
                  "0 0 15px rgba(200, 168, 75, 0.2)";
              }
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background =
                "transparent";
              (e.target as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            {isLoading ? "LISTENING..." : "SEND"}
          </button>
        </form>

        <div
          style={{
            marginTop: "3rem",
            fontFamily: "'Geist Mono', monospace",
            fontSize: "0.8rem",
            color: "rgba(255, 255, 255, 0.3)",
            textAlign: "center",
            minHeight: "60px",
          }}
        >
          <p style={{ margin: 0 }}>The city is listening...</p>
        </div>
      </div>
    </motion.section>
  );
}
