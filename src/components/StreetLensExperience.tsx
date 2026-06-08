"use client";

import Image from "next/image";
import { FormEvent, ReactNode, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type PhotoFrame = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

type Chapter = PhotoFrame & {
  place: string;
  lens: string;
};

const heroFrames: PhotoFrame[] = [
  {
    src: "https://images.unsplash.com/photo-1669369456446-c3f040a4a326?w=1200&q=82&auto=format&fit=crop",
    alt: "University Avenue in Toronto at night",
    title: "University Avenue",
    caption: "Hospital glass, red signals, and the clean line of a wet road.",
  },
  {
    src: "https://images.unsplash.com/photo-1751163858724-a5bea5c3a2bf?w=900&q=82&auto=format&fit=crop",
    alt: "Toronto skyline with the CN Tower at night",
    title: "Island view",
    caption: "The skyline cuts a hard edge across the lake.",
  },
  {
    src: "https://images.unsplash.com/photo-1701571933142-e0e4344a4b9a?w=900&q=82&auto=format&fit=crop",
    alt: "People crossing near CF Toronto Eaton Centre at night",
    title: "Crossing",
    caption: "A crowd turns into streaks of coat, signal, and headlight.",
  },
];

const fieldNotes = [
  { label: "Night walks", value: "5" },
  { label: "Selected frames", value: "38" },
  { label: "Route mood", value: "Lake cold" },
  { label: "Lens language", value: "Wide, close, patient" },
];

const chapters: Chapter[] = [
  {
    src: "https://images.unsplash.com/photo-1758369827455-9572a820354d?w=1400&q=82&auto=format&fit=crop",
    alt: "CN Tower and office towers on York Street in Toronto at night",
    title: "Glass canyon",
    caption:
      "The financial core turns into a canyon after dark. The frames are not about scale. They are about reflection, repetition, and how small a person becomes beside glass.",
    place: "York Street",
    lens: "18mm, f/2.8",
  },
  {
    src: "https://images.unsplash.com/photo-1701571933142-e0e4344a4b9a?w=1400&q=82&auto=format&fit=crop",
    alt: "Pedestrians crossing near CF Toronto Eaton Centre",
    title: "Corner signal",
    caption:
      "The best street photographs often happen between events. A signal changes, a person pauses, and the city gives you one clean second.",
    place: "Eaton Centre",
    lens: "35mm, f/1.8",
  },
  {
    src: "https://images.unsplash.com/photo-1669369456446-c3f040a4a326?w=1400&q=82&auto=format&fit=crop",
    alt: "University Avenue street at night in Toronto",
    title: "University line",
    caption:
      "Movement becomes texture at street level. The camera looks for signal lights, parked reflections, and the brief silence before traffic returns.",
    place: "University Avenue",
    lens: "28mm, f/2",
  },
  {
    src: "https://images.unsplash.com/photo-1645665030367-69a50da9d368?w=1400&q=82&auto=format&fit=crop",
    alt: "Paradise Theatre sign on Bloor Street West in Toronto at night",
    title: "Weather holds",
    caption:
      "Fog, rain, and reflected headlights do more for this city than clean skies. The route keeps the rough edges because that is where the pictures breathe.",
    place: "Bloor Street",
    lens: "50mm, f/2.5",
  },
];

const contactSheet: PhotoFrame[] = [
  {
    src: "https://images.unsplash.com/photo-1583333885833-4b3cba77bd30?w=900&q=82&auto=format&fit=crop",
    alt: "Toronto buildings with lights turned on at night",
    title: "Reflection study",
    caption: "Blue office light stacked above the street.",
  },
  {
    src: "https://images.unsplash.com/photo-1751163858724-a5bea5c3a2bf?w=900&q=82&auto=format&fit=crop",
    alt: "Toronto skyline from Centre Island at night",
    title: "Blue hour",
    caption: "The lake pulls the exposure down.",
  },
  {
    src: "https://images.unsplash.com/photo-1747916547209-05fb5d0cbe6e?w=900&q=82&auto=format&fit=crop",
    alt: "CN Tower illuminated at night from below",
    title: "Tower red",
    caption: "A landmark becomes a vertical light meter.",
  },
  {
    src: "https://images.unsplash.com/photo-1645665030367-69a50da9d368?w=900&q=82&auto=format&fit=crop",
    alt: "Paradise Theatre marquee on a wet Toronto street",
    title: "Bloor marquee",
    caption: "The sign does the work of a streetlamp.",
  },
  {
    src: "https://images.unsplash.com/photo-1701571933142-e0e4344a4b9a?w=900&q=82&auto=format&fit=crop",
    alt: "Night crowd crossing in downtown Toronto",
    title: "Crowd light",
    caption: "Faces briefly lit by the crossing.",
  },
  {
    src: "https://images.unsplash.com/photo-1575574829566-658edcaffb58?w=900&q=82&auto=format&fit=crop",
    alt: "Traffic and light trails on a Toronto street at night",
    title: "Traffic trace",
    caption: "Winter light dragged across the road.",
  },
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FramedImage({
  photo,
  priority = false,
  sizes,
  className = "",
}: {
  photo: PhotoFrame;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  return (
    <figure className={`group relative overflow-hidden border border-[var(--line)] bg-[var(--panel)] ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition duration-700 group-hover:scale-[1.035]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5">
        <p className="text-sm font-medium text-[var(--ink)]">{photo.title}</p>
        <p className="mt-1 max-w-[34ch] text-xs leading-5 text-[var(--muted)]">{photo.caption}</p>
      </figcaption>
    </figure>
  );
}

function HeroSection() {
  return (
    <section id="top" className="relative isolate min-h-[100dvh] overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <Image
        src={heroFrames[0].src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,7,5,0.98)_0%,rgba(8,7,5,0.78)_42%,rgba(8,7,5,0.48)_100%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[calc(100dvh-10rem)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <Reveal className="max-w-3xl">
          <p className="mb-5 text-sm text-[var(--accent)]">Toronto night photo essay</p>
          <h1 className="text-5xl font-semibold leading-[0.95] text-[var(--ink)] sm:text-7xl lg:text-8xl">
            Street Lens Flow
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">
            A darker, denser walk through glass towers, transit light, lake air, and the small pauses that make a city feel awake.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#route"
              className="inline-flex min-h-12 items-center justify-center border border-[var(--accent)] bg-[var(--accent)] px-6 text-sm font-semibold text-[#080705] transition hover:bg-[#e6c775] active:translate-y-px"
            >
              Read the route
            </a>
            <a
              href="#contact-sheet"
              className="inline-flex min-h-12 items-center justify-center border border-[var(--line-strong)] px-6 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] active:translate-y-px"
            >
              View contact sheet
            </a>
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-6 gap-3 self-center lg:gap-4" delay={0.12}>
          <FramedImage
            photo={heroFrames[0]}
            priority
            sizes="(min-width: 1024px) 42vw, 90vw"
            className="col-span-6 aspect-[4/5] sm:col-span-4"
          />
          <div className="col-span-6 grid gap-3 sm:col-span-2 lg:gap-4">
            <FramedImage
              photo={heroFrames[1]}
              sizes="(min-width: 1024px) 18vw, 45vw"
              className="aspect-[4/5]"
            />
            <FramedImage
              photo={heroFrames[2]}
              sizes="(min-width: 1024px) 18vw, 45vw"
              className="aspect-[4/5]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FieldNotes() {
  return (
    <section className="border-y border-[var(--line)] bg-[rgba(255,255,255,0.025)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {fieldNotes.map((note) => (
          <div key={note.label} className="border-l border-[var(--line-strong)] pl-5">
            <p className="text-sm text-[var(--muted)]">{note.label}</p>
            <p className="mt-2 text-2xl font-semibold text-[var(--ink)]">{note.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function RouteChapters() {
  return (
    <section id="route" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.35fr)]">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <Reveal>
            <p className="text-sm text-[var(--accent)]">Route sequence</p>
            <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
              Four stops, one city rhythm.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[var(--muted)]">
              Start at the core, follow the reflected light west, then let the route fall toward Bloor and the lake.
            </p>
          </Reveal>
        </div>

        <div className="space-y-8">
          {chapters.map((chapter, index) => (
            <Reveal key={chapter.title} delay={index * 0.04}>
              <article className="grid overflow-hidden border border-[var(--line)] bg-[var(--panel)] lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
                <div className="relative min-h-[360px] lg:min-h-[520px]">
                  <Image
                    src={chapter.src}
                    alt={chapter.alt}
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <p className="text-sm text-[var(--accent)]">{chapter.place}</p>
                    <h3 className="mt-4 text-3xl font-semibold leading-tight text-[var(--ink)] sm:text-4xl">
                      {chapter.title}
                    </h3>
                    <p className="mt-6 text-base leading-7 text-[var(--muted)]">{chapter.caption}</p>
                  </div>
                  <div className="mt-10 border-t border-[var(--line)] pt-5 text-sm text-[var(--muted)]">
                    <span className="text-[var(--ink)]">Camera note:</span> {chapter.lens}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSheet() {
  return (
    <section id="contact-sheet" className="bg-[var(--panel)] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm text-[var(--accent)]">Contact sheet</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
            More frames, less empty air.
          </h2>
          <p className="mt-6 text-base leading-7 text-[var(--muted)]">
            A compact set of frames from the same walk: skyline, theatre, crossings, glass, and traffic after rain.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactSheet.map((photo, index) => (
            <Reveal key={photo.title} delay={index * 0.035}>
              <FramedImage photo={photo} sizes="(min-width: 1024px) 30vw, 90vw" className="aspect-[5/4]" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryBand() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-y border-[var(--line)] py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <Reveal>
          <p className="text-sm text-[var(--accent)]">The 6ix after midnight</p>
          <blockquote className="mt-5 text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
            The city does not sleep. It changes exposure.
          </blockquote>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid gap-6 sm:grid-cols-3">
            <p className="text-base leading-7 text-[var(--muted)]">
              By midnight, Toronto becomes less about landmarks and more about surfaces. Windows, puddles, and car paint start carrying the same light.
            </p>
            <p className="text-base leading-7 text-[var(--muted)]">
              The skyline still matters, but the better frame is often lower: a curb, a crossing, a theatre sign, a face caught between signals.
            </p>
            <p className="text-base leading-7 text-[var(--muted)]">
              Every stop asks the same question: what changes when the city is no longer trying to be seen by everyone?
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ReflectionPrompt() {
  const [reflection, setReflection] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "saved" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!reflection.trim()) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    window.setTimeout(() => setStatus("saved"), 650);
  }

  return (
    <section id="reflection" className="px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border border-[var(--line)] bg-[rgba(255,255,255,0.025)] p-6 sm:p-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:p-10">
        <Reveal>
          <p className="text-sm text-[var(--accent)]">Midnight thoughts</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
            What did the route leave behind?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)]">
            Write one line from the walk and leave it at the end of the route.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <label htmlFor="reflection-input" className="block text-sm text-[var(--muted)]">
              Your line
            </label>
            <textarea
              id="reflection-input"
              value={reflection}
              onChange={(event) => {
                setReflection(event.target.value);
                if (status === "error") {
                  setStatus("idle");
                }
              }}
              rows={5}
              placeholder="The city felt..."
              className="w-full resize-none border border-[var(--line-strong)] bg-[#0d0b08] p-4 text-base leading-7 text-[var(--ink)] outline-none transition placeholder:text-[rgba(183,174,159,0.5)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(214,179,90,0.28)]"
            />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex min-h-12 items-center justify-center border border-[var(--accent)] bg-[var(--accent)] px-6 text-sm font-semibold text-[#080705] transition hover:bg-[#e6c775] disabled:cursor-not-allowed disabled:opacity-65 active:translate-y-px"
              >
                {status === "loading" ? "Saving" : "Save the line"}
              </button>
              <p aria-live="polite" className="min-h-6 text-sm text-[var(--muted)]">
                {status === "error" && "Write at least one word first."}
                {status === "saved" && "Saved for this session. The page heard you."}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(8,7,5,0.72)] px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6">
        <a href="#top" className="shrink-0 text-sm font-semibold text-[var(--ink)]">
          Street Lens Flow
        </a>
        <div className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
          <a className="transition hover:text-[var(--ink)]" href="#route">
            Route
          </a>
          <a className="transition hover:text-[var(--ink)]" href="#contact-sheet">
            Contact sheet
          </a>
          <a className="transition hover:text-[var(--ink)]" href="#reflection">
            Reflection
          </a>
        </div>
      </nav>
    </header>
  );
}

export default function StreetLensExperience() {
  return (
    <div className="min-h-[100dvh] bg-[var(--page-bg)] text-[var(--ink)]">
      <SiteNav />
      <HeroSection />
      <FieldNotes />
      <RouteChapters />
      <ContactSheet />
      <StoryBand />
      <ReflectionPrompt />
      <footer className="border-t border-[var(--line)] px-4 py-8 text-sm text-[var(--muted)] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Street Lens Flow</p>
          <p>Toronto, night route, Spring 2024</p>
        </div>
      </footer>
    </div>
  );
}
