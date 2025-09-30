import React from "react";

const PageBanner = ({ CurrentPage }) => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-purple-950 via-purple-900 to-purple-700 py-14">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-10 left-1/4 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-fuchsia-300/20 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center text-white">
        <h1 className="text-4xl font-semibold tracking-wide sm:text-5xl">
          {CurrentPage}
        </h1>
        <p className="mt-3 text-base text-white/80">
          Elevating beauty and wellness with tailored, science-backed care.
        </p>
      </div>
    </header>
  );
};

export default PageBanner;
