"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LandScapeLogo from "../../source/LandScapeLogo.png";

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
        badge: "Trusted Clinic",
        heading: "AVSO AESTHETIC & WELLNESS",
        paragraph:
          "AVSO Aesthetic and Wellness is a trusted clinic in Noida offering advanced, science-backed aesthetic and wellness solutions. We specialize in safe, effective treatments designed to enhance natural beauty and overall well-being.",
        image: LandScapeLogo,
      },
      {
        badge: "Signature Treatments",
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
              <div className="mx-auto max-w-[1440px] grid grid-cols-1 items-center gap-6 px-4 py-12 transition-opacity duration-700 ease-out sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:py-16">
                {/* Left: content */}
                <div className="order-2 flex flex-col gap-6 rounded-3xl bg-white/80 p-6 shadow-[0_35px_60px_-25px_rgba(124,58,237,0.35)] backdrop-blur-sm transition-all duration-700 lg:order-1 lg:p-8">
                  {s.badge && (
                    <span className="inline-flex items-center justify-center rounded-full bg-purple-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-purple-700">
                      {s.badge}
                    </span>
                  )}
                  <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-[34px]">
                    {s.heading}
                  </h2>

                  <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                    {s.paragraph}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 px-6 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-purple-500/40 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <Link href="/Services">READ MORE</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-purple-200 bg-white/70 px-6 py-5 text-sm font-bold uppercase tracking-[0.2em] text-purple-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500 hover:bg-purple-50"
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
                            ? "w-8 bg-gradient-to-r from-purple-600 to-indigo-500"
                            : "w-3 bg-slate-300/70 hover:w-4 hover:bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right: illustration */}
                <div className="order-1 lg:order-2">
                  <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden rounded-[28px] border border-white/60 bg-white/55 p-4 shadow-[0_45px_100px_-40px_rgba(79,70,229,0.45)] sm:h-[300px] sm:p-6 md:h-[380px] lg:h-[520px] lg:p-8">
                    {s.image ? (
                      <>
                        <Image
                          src={s.image}
                          alt="AVSO aesthetic experience"
                          fill
                          priority={i === 0}
                          className="object-contain"
                          sizes="(min-width: 1024px) 520px, (min-width: 768px) 400px, 90vw"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/25 to-purple-100/30"
                        />
                      </>
                    ) : (
                      <>
                        <s.Background aria-hidden="true" className="absolute inset-0" />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/10 to-purple-100/20"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,181,253,0.45),transparent_55%)]" />
                      </>
                    )}
                    <div className="absolute inset-x-6 bottom-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/90 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-700 shadow-lg">
                      <span>Holistic Beauty Care</span>
                      <span className="text-purple-400">Experience Calm</span>
                    </div>
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
