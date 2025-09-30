import React from "react";

const bullet = "bg-amber-400";

const InfoList = ({ title, items }) => {
  if (!items?.length) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-700">
        {title}
      </h3>
      <ul className="space-y-2 text-sm leading-6 text-gray-600">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className={`mt-2 h-2.5 w-2.5 rounded-full ${bullet}`} aria-hidden />
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
    <div className="rounded-2xl border border-purple-100 bg-white/70 px-4 py-3 text-sm shadow-sm shadow-purple-900/5">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-purple-900">{value}</p>
    </div>
  );
};

const ServiceCard = ({ service, index }) => {
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
    <article className="relative overflow-hidden rounded-3xl border border-purple-100/50 bg-white shadow-[0_25px_60px_-40px_rgba(107,33,168,0.45)]">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-purple-50/30 to-transparent" aria-hidden />
      <div className="relative grid gap-10 px-6 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:px-10">
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-purple-900/10">
            {image ? (
              <img
                src={image}
                alt={name}
                className="h-64 w-full object-cover"
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

          <InfoList title="Benefits" items={benefits} />
          <InfoList title="Ideal for" items={idealFor} />
        </div>

        <div className="space-y-8">
          <header className="space-y-4">
            <h2 className="text-3xl font-semibold text-purple-900">{name}</h2>
            {introduction && (
              <p className="text-base leading-7 text-gray-600">{introduction}</p>
            )}
          </header>

          {howItWorks && (
            <div className="rounded-2xl bg-purple-900/5 px-5 py-4 text-sm leading-6 text-purple-900/90">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
                How it works
              </h3>
              <p className="mt-2">{howItWorks}</p>
            </div>
          )}

          <div className="grid gap-8 md:grid-cols-2">
            <InfoList title="Pre-care" items={precare} />
            <InfoList title="Post-care" items={postCare} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <StatPill label="Session time" value={sessionTime} />
            <StatPill label="Downtime" value={downTime} />
          </div>

          {result && (
            <div className="rounded-2xl border border-amber-200/60 bg-amber-50/60 px-5 py-4 text-sm leading-6 text-amber-900">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
                Expected results
              </h3>
              <p className="mt-2">{result}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
