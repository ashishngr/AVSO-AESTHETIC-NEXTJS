"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const SlideBackgroundClinic = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    className={`h-full w-full ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="grad-purple-one" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#faf5ff" />
        <stop offset="100%" stopColor="#ede9fe" />
      </linearGradient>
      <radialGradient id="radial-purple-one" cx="20%" cy="30%" r="60%">
        <stop offset="0" stopColor="#c084fc" stopOpacity="0.35" />
        <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="radial-purple-two" cx="80%" cy="75%" r="55%">
        <stop offset="0" stopColor="#bef264" stopOpacity="0.25" />
        <stop offset="1" stopColor="#bef264" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="800" height="600" fill="url(#grad-purple-one)" />
    <circle cx="120" cy="140" r="220" fill="url(#radial-purple-one)" />
    <circle cx="620" cy="460" r="260" fill="url(#radial-purple-two)" />
    <path
      d="M120 520C200 420 360 400 440 320C510 250 530 140 610 90C690 40 760 60 820 110V600H120Z"
      fill="#f5d0fe"
      fillOpacity="0.35"
    />
    <path
      d="M-40 180C60 120 220 120 320 180C420 240 520 360 620 360C700 360 780 300 840 240V0H-40Z"
      fill="#ede9fe"
      fillOpacity="0.45"
    />
  </svg>
);

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
        heading: "AVSO AESTHESTIC & WELLNESS",
        paragraph:
          "AVSO Aesthetic and Wellness is a trusted clinic in Noida offering advanced, science-backed aesthetic and wellness solutions. We specialize in safe, effective treatments designed to enhance natural beauty and overall well-being.",
        Background: SlideBackgroundClinic,
      },
      {
        heading: "Get the Beauty Crown that you will never take off",
        paragraph:
          "AVSO AESTHESTIC & WELLNESS helps you get smooth of contour irregularities, particularly a bump in the dorsum of the nose. Get a detailed assessment & personalised Rhinoplasty plan at Livglam Aesthetic clinic.",
        Background: SlideBackgroundRadiance,
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
      className="w-full relative bg-white"
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
              className="relative w-full flex-shrink-0 shadow-sm"
              aria-hidden={current !== i}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-6 -bottom-6 h-16 rounded-full bg-purple-400/25 blur-3xl"
              />
              {/* Slide body */}
              <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
                {/* Left: content */}
                <div className="order-2 lg:order-1">
                  <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-semibold text-gray-800 leading-snug">
                    {s.heading}
                  </h2>

                  <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {s.paragraph}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button className="bg-[#6B21A8] hover:bg-[#581c87] text-white">
                      READ MORE
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#6B21A8] text-[#6B21A8] hover:bg-[#6B21A8] hover:text-white"
                    >
                      BOOK AN APPOINTMENT
                    </Button>
                  </div>

                  {/* Dots */}
                  <div className="mt-8 flex items-center gap-2">
                    {slides.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        onClick={() => setCurrent(dotIdx)}
                        className={`h-1.5 rounded-full transition-all ${
                          current === dotIdx ? "w-4 bg-gray-800" : "w-1.5 bg-gray-400/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right: illustration */}
                <div className="order-1 lg:order-2 relative">
                  <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[520px] overflow-hidden rounded-2xl">
                    <Background aria-hidden="true" className="absolute inset-0" />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/10 to-transparent mix-blend-screen"
                    />
                    <div className="relative h-full w-full" />
                  </div>
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
