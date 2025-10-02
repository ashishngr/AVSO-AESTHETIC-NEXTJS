'use client'
import React, { useEffect, useRef } from "react";

const RECAPTCHA_SRC = "https://www.google.com/recaptcha/api.js?render=explicit";
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
console.log('captch key', SITE_KEY);

const ContactUsForm = () => {
  const recaptchaRef = useRef(null);

  useEffect(() => {
    if (!SITE_KEY || !recaptchaRef.current) return;

    const renderRecaptcha = () => {
      const client = window.grecaptcha?.render
        ? window.grecaptcha
        : window.grecaptcha?.enterprise;

      if (!client || !recaptchaRef.current) return;
      if (recaptchaRef.current.childElementCount > 0) return;

      client.render(recaptchaRef.current, {
        sitekey: SITE_KEY,
      });
    };

    const ensureReady = () => {
      if (window.grecaptcha?.ready) {
        window.grecaptcha.ready(renderRecaptcha);
      } else {
        renderRecaptcha();
      }
    };

    if (window.grecaptcha) {
      ensureReady();
      return;
    }

    let scriptEl;
    const existing = document.querySelector(`script[src="${RECAPTCHA_SRC}"]`);
    const handleLoad = () => ensureReady();

    if (existing) {
      existing.addEventListener("load", handleLoad);
    } else {
      const script = document.createElement("script");
      script.src = RECAPTCHA_SRC;
      script.async = true;
      script.defer = true;
      script.onload = handleLoad;
      document.body.appendChild(script);
      scriptEl = script;
    }

    return () => {
      if (existing) existing.removeEventListener("load", handleLoad);
      if (scriptEl) scriptEl.onload = null;
    };
  }, []);

  return (
    <form className="grid gap-6 md:grid-cols-2" action="#" method="post">
      <label className="flex flex-col gap-2 text-sm font-medium text-purple-900">
        Full name
        <input
          type="text"
          name="name"
          required
          className="rounded-xl border border-purple-100 px-4 py-3 text-base text-gray-800 outline-none transition-colors focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
          placeholder="Your name"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-purple-900">
        Email address
        <input
          type="email"
          name="email"
          required
          className="rounded-xl border border-purple-100 px-4 py-3 text-base text-gray-800 outline-none transition-colors focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
          placeholder="you@example.com"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-purple-900">
        Phone number
        <input
          type="tel"
          name="phone"
          required
          className="rounded-xl border border-purple-100 px-4 py-3 text-base text-gray-800 outline-none transition-colors focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
          placeholder="+91 98765 43210"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-purple-900">
        Preferred service
        <input
          type="text"
          name="service"
          className="rounded-xl border border-purple-100 px-4 py-3 text-base text-gray-800 outline-none transition-colors focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
          placeholder="Tell us what you're interested in"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-purple-900 md:col-span-2">
        Message (optional)
        <textarea
          name="message"
          rows={4}
          className="rounded-xl border border-purple-100 px-4 py-3 text-base text-gray-800 outline-none transition-colors focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
          placeholder="Share any notes or questions"
        />
      </label>
      <div className="grid gap-4 md:col-span-2">
        <div className="flex flex-col gap-2 text-sm font-medium text-purple-900">
          Security check
          <div className="rounded-xl border border-purple-100 px-4 py-4">
            {SITE_KEY ? (
              <div ref={recaptchaRef} className="flex justify-center" />
            ) : (
              <p className="text-sm leading-6 text-gray-500">
                Add your Google reCAPTCHA site key to
                <code className="ml-1 rounded bg-purple-50 px-1 py-[2px] text-xs text-purple-700">
                  NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                </code>
                to enable the verification widget.
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="ml-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
        >
          Submit request
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
