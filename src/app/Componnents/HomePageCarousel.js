"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LandScapeLogo from "../../source/LandScapeLogo.png";
import Image1 from "../../source/Image1.jpg";
import Image2 from "../../source/Image2.jpg";
import Image3 from "../../source/Image3.jpg";


const SlideBackgroundRadiance = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    className={`h-full w-full ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="grad-rose-one" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fff7ed" />
        <stop offset="100%" stopColor="#ffe4e6" />
      </linearGradient>
      <radialGradient id="radial-rose-one" cx="15%" cy="80%" r="60%">
        <stop offset="0" stopColor="#fb7185" stopOpacity="0.28" />
        <stop offset="1" stopColor="#fb7185" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="radial-rose-two" cx="70%" cy="25%" r="50%">
        <stop offset="0" stopColor="#38bdf8" stopOpacity="0.3" />
        <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="800" height="600" fill="url(#grad-rose-one)" />
    <circle cx="140" cy="480" r="260" fill="url(#radial-rose-one)" />
    <circle cx="600" cy="180" r="200" fill="url(#radial-rose-two)" />
    <path
      d="M0 420C120 340 220 360 320 320C420 280 500 180 600 160C700 140 780 200 840 260V600H0Z"
      fill="#fecdd3"
      fillOpacity="0.4"
    />
    <path
      d="M-60 200C20 140 100 120 200 150C300 180 380 260 480 280C580 300 680 260 760 180C800 140 840 80 840 80V0H-60Z"
      fill="#fdf2f8"
      fillOpacity="0.55"
    />
  </svg>
);

const HomePageCarousel = () => {
  // Slides live inside (no props)
  const slides = useMemo(
    () => [
      {
        badge: "Trusted Clinic",
        heading: "Confidence begins with personalised care",
        paragraph:
          "Discover a calm, boutique space where dermatologists, surgeons, and therapists craft layered plans for lasting beauty and wellness.",
        points: [
          "Board-certified expertise with medical-grade tech",
          "Concierge-style guidance before, during, and after every visit",
        ],
        image: LandScapeLogo,
        highlight: {
          title: "AVSO Experience",
          description: "Holistic consults, transparent pricing, and post-care you can trust.",
        },
      },
      {
        badge: "Skin Glow",
        heading: "Healthy skin, radiant stories",
        paragraph:
          "Hydration, collagen support, and pigment balance come together so your skin behaves beautifully under every spotlight.",
        points: [
          "Hydra facials, collagen induction, and glass-skin programs",
          "Gentle routines that work around weddings, shoots, and travel",
        ],
        image: Image1,
        highlight: {
          title: "Glow Promise",
          description: "Custom skin diaries mean you know exactly how to maintain the radiance at home.",
        },
      },
      {
        badge: "Hair Freedom",
        heading: "Smooth confidence, zero guesswork",
        paragraph:
          "Laser protocols mapped to your skin tone and growth cycles so you glide through every outfit change.",
        points: [
          "Diode + cooling combinations for comfort-first care",
          "Progress tracking each session so results stay predictable",
        ],
        image: Image2,
        highlight: {
          title: "No Downtime",
          description: "Walk out ready for brunch, events, and boardrooms—the glow stays, the stubble doesn’t.",
        },
      },
      {
        badge: "Body Sculpt",
        heading: "Celebrate strength, sculpted your way",
        paragraph:
          "From M-Sculpt muscle work to contouring, feel your posture, core, and confidence amplify session by session.",
        points: [
          "Supramaximal contractions build tone without sweat",
          "Pair with nutrition + skin tightening for a 360° plan",
        ],
        image: Image3,
        highlight: {
          title: "Visible In 2 Weeks",
          description: "Clients love the posture boost and wardrobe freedom that follow consistent sculpt sessions.",
        },
      },
      {
        badge: "Signature",
        heading: "Every plan, artfully balanced",
        paragraph:
          "We blend science, artistry, and wellness so the world sees you—refreshed, not altered.",
        points: [
          "Multi-disciplinary reviews for complex concerns",
          "Maintenance memberships that keep results effortless",
        ],
        Background: SlideBackgroundRadiance,
        highlight: {
          title: "Let’s Begin",
          description: "Book a 30-minute consultation and leave with a mapped-out glow blueprint.",
        },
      },
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  // Auto-play
  useEffect(() => {
    start();
    return stop;
  }, [current]);

  const start = () => {
    stop();
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000); // 6s like a typical hero
  };

  const stop = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white"
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      {/* Track */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, i) => {
          const { Background } = s;

          return (
            <article
              key={i}
              className="relative w-full flex-shrink-0"
              aria-hidden={current !== i}
            >
              {/* Slide body */}
              <div
                className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-10 overflow-hidden rounded-[40px] bg-slate-900 sm:px-6 sm:py-14 lg:flex-row lg:items-stretch lg:gap-0"
              >
                <div className="absolute inset-0">
                  {s.image ? (
                    <Image
                      src={s.image}
                      alt="AVSO aesthetic backdrop"
                      fill
                      priority={i === 0}
                      className="object-cover"
                      sizes="100vw"
                    />
                  ) : (
                    <s.Background aria-hidden="true" className="h-full w-full" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.45),transparent_55%)]" />
                </div>

                <div className="relative order-2 flex w-full flex-col gap-6 px-6 pb-12 pt-10 text-white sm:px-10 lg:order-1 lg:w-7/12 lg:pb-14 lg:pt-16">
                  <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-black/30 blur-xl" aria-hidden />
                  <div className="relative flex flex-col gap-6">
                  {/* Left: content */}
                  {s.badge && (
                    <span className="inline-flex items-center justify-center rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white">
                      {s.badge}
                    </span>
                  )}
                  <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[36px]">
                    {s.heading}
                  </h2>

                  <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                    {s.paragraph}
                  </p>

                  {s.points && (
                    <ul className="space-y-2 text-sm text-white/75 sm:text-base">
                      {s.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-white" aria-hidden />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="bg-white px-6 py-5 text-sm font-bold uppercase tracking-[0.2em] text-purple-700 shadow-lg shadow-purple-500/30 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <Link href="/Services">READ MORE</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/40 bg-white/10 px-6 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/20"
                    >
                      <Link href="/ContactUs">BOOK AN APPOINTMENT</Link>
                    </Button>
                  </div>

                  {/* Dots */}
                  <div className="flex items-center gap-2 pt-4">
                    {slides.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        aria-current={current === dotIdx}
                        onClick={() => setCurrent(dotIdx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          current === dotIdx
                            ? "w-8 bg-white"
                            : "w-3 bg-white/30 hover:w-4"
                        }`}
                      />
                    ))}
                  </div>
                  </div>
                </div>

                {/* Right accent */}
                <div className="relative order-1 flex w-full items-end justify-end px-6 pb-10 pt-16 sm:px-10 lg:order-2 lg:w-5/12">
                  {s.highlight && (
                    <div className="rounded-3xl bg-white/85 px-6 py-5 text-sm text-purple-900 shadow-2xl shadow-purple-500/30 backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">
                        {s.highlight.title}
                      </p>
                      <p className="mt-2 text-sm leading-6">
                        {s.highlight.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Prev/Next (optional, hidden on small) */}
      <div className="hidden lg:flex absolute inset-y-0 left-2 right-2 items-center justify-between pointer-events-none">
        <button
          onClick={() =>
            setCurrent((c) => (c - 1 + slides.length) % slides.length)
          }
          className="pointer-events-auto grid place-items-center size-10 rounded-full bg-white/80 shadow hover:bg-white"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrent((c) => (c + 1) % slides.length)}
          className="pointer-events-auto grid place-items-center size-10 rounded-full bg-white/80 shadow hover:bg-white"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default HomePageCarousel;
