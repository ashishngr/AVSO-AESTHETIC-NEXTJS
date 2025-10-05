import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const bullet = "bg-amber-400";

const InfoList = ({ title, items }) => {
  if (!items?.length) return null;

  return (
    <div className="rounded-2xl border border-purple-100 bg-white/85 p-5 shadow-sm shadow-purple-900/5">
      <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-700">
        {title}
      </h3>
      <ul className="mt-3 space-y-2.5 text-sm leading-6 text-slate-600">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className={`mt-2 h-2 w-2 rounded-full ${bullet}`} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const StatPill = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className="rounded-2xl border border-purple-100 bg-white px-4 py-3 text-sm shadow-sm shadow-purple-900/5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-purple-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-purple-900">{value}</p>
    </div>
  );
};

const ServiceCard = ({ service, index, slug }) => {
  if (!service) return null;

  const {
    name,
    image,
    introduction,
    idealFor,
    howItWorks,
    precare,
    postCare,
    benefits,
    sessionTime,
    downTime,
    result,
  } = service;

  return (
    <article
      id={slug}
      className="scroll-mt-28 rounded-3xl border border-purple-100 bg-white/95 shadow-[0_25px_55px_-32px_rgba(88,28,135,0.35)] transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(88,28,135,0.45)]"
    >
      <div className="flex flex-col gap-6 px-6 py-10 lg:flex-row lg:items-start lg:gap-10 lg:px-12">
        <div className="flex w-full flex-col gap-6 lg:max-w-md lg:flex-shrink-0">
          <div className="relative overflow-hidden rounded-2xl border border-purple-100 bg-white/90 p-3">
            {image ? (
              <img
                src={image}
                alt={name}
                className="h-64 w-full object-contain sm:object-cover"
              />
            ) : (
              <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-purple-800/30 to-purple-500/20 text-lg text-purple-900/80">
                Image coming soon
              </div>
            )}
            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-amber-400/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-purple-900">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <InfoList title="Benefits" items={benefits} />
            <InfoList title="Ideal for" items={idealFor} />
          </div>
        </div>

        <div className="flex w-full flex-col lg:flex-1 lg:pl-6">
          <section className="flex flex-col gap-4 rounded-3xl border border-purple-100 bg-white shadow-sm shadow-purple-900/5 lg:p-8">
            <header className="space-y-4">
              <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500" aria-hidden />
              <h2 className="text-3xl font-semibold text-slate-900">{name}</h2>
              {introduction && (
                <p className="text-base leading-7 text-slate-600">{introduction}</p>
              )}
            </header>

            {howItWorks && (
              <div className="rounded-2xl border border-purple-100 bg-purple-50/40 px-5 py-4 text-sm leading-6 text-purple-900/90">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
                  How it works
                </h3>
                <p className="mt-2">{howItWorks}</p>
              </div>
            )}

            <div className="grid gap-5 md:grid-cols-2">
              <InfoList title="Pre-care" items={precare} />
              <InfoList title="Post-care" items={postCare} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <StatPill label="Session time" value={sessionTime} />
              <StatPill label="Downtime" value={downTime} />
            </div>

            {result && (
              <div className="rounded-2xl border border-amber-200/60 bg-amber-50/70 px-5 py-4 text-sm leading-6 text-amber-900">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
                  Expected results
                </h3>
                <p className="mt-2">{result}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-2 sm:flex-row sm:justify-start">
              <Button
                asChild
                className="w-full min-[420px]:w-auto bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-md shadow-purple-500/40 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Link href="/ContactUs">Book An Appointment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full min-[420px]:w-auto border-purple-200 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-purple-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500 hover:bg-purple-50"
              >
                <a href="tel:+918800586733">Call +91 8800586733</a>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
