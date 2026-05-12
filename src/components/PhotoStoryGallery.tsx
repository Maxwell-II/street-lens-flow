"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PhotoItemProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  showAIButton?: boolean;
}

function PhotoItem({ image, alt, title, description, showAIButton }: PhotoItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.75], [1, 1.12]);
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.72], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.5, 0.72], [60, 0]);

  return (
    <div ref={ref} style={{ height: "200vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <motion.img
          src={image}
          alt={alt}
          style={{
            scale: imgScale,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(7, 11, 20, 0.9) 0%, rgba(7, 11, 20, 0) 50%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
            position: "absolute",
            bottom: "3rem",
            left: "3rem",
            color: "white",
            maxWidth: "500px",
          }}
        >
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 300,
              letterSpacing: "0.1em",
              margin: 0,
              marginBottom: "1rem",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.7)",
              margin: 0,
              marginBottom: "1.5rem",
            }}
          >
            {description}
          </p>
          {showAIButton && (
            <button
              style={{
                border: "1px solid rgba(200, 168, 75, 0.5)",
                background: "transparent",
                color: "#C8A84B",
                padding: "0.6rem 1.2rem",
                fontFamily: "'Geist Mono', monospace",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.borderColor =
                  "#C8A84B";
                (e.target as HTMLButtonElement).style.background =
                  "rgba(200, 168, 75, 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.borderColor =
                  "rgba(200, 168, 75, 0.5)";
                (e.target as HTMLButtonElement).style.background =
                  "transparent";
              }}
            >
              ✦ Generate Vibe
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default function PhotoStoryGallery() {
  const photos: PhotoItemProps[] = [
    {
      image:
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1920&q=80",
      alt: "Night lights",
      title: "LUMINESCENCE",
      description:
        "The city glows when the sun disappears. Neon signs, streetlights, and windows create a symphony of brightness that transforms familiar streets into something electric and strange.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80",
      alt: "Skyline",
      title: "SILHOUETTE",
      description:
        "The skyline holds the city's promises. Each building is a story, each light a dream. From this angle, Toronto looks like it's reaching for something beyond the sky.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=1920&q=80",
      alt: "Street corner",
      title: "NO SIGNAL",
      description:
        "In the quiet moments between crowds, the city whispers. A stranger's face, a reflection in glass, a moment that lasts forever in a photograph.",
      showAIButton: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80",
      alt: "Underground",
      title: "BENEATH",
      description:
        "Below the streets, there's another city. The underground moves with intention. Every tunnel leads somewhere. Every face tells a story of where they're going.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
      alt: "Glass towers",
      title: "REFLECTION",
      description:
        "Glass and steel have their own poetry. They catch the light and throw it back at you. In Toronto's reflections, you see the sky and the city at the same time.",
    },
  ];

  return (
    <section>
      {photos.map((photo, idx) => (
        <PhotoItem key={idx} {...photo} />
      ))}
    </section>
  );
}
