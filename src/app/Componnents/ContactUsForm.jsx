'use client';
import React, { useEffect, useRef, useState } from 'react';

const RECAPTCHA_SRC = 'https://www.google.com/recaptcha/api.js?render=explicit';
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ContactUsForm() {
  const recaptchaRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'ok' | 'fail' | null

  useEffect(() => {
    if (!SITE_KEY || !recaptchaRef.current) return;

    const renderRecaptcha = () => {
      const gc = window.grecaptcha?.render ? window.grecaptcha : window.grecaptcha?.enterprise;
      if (!gc || !recaptchaRef.current) return;
      if (recaptchaRef.current.childElementCount > 0) return;
      widgetIdRef.current = gc.render(recaptchaRef.current, { sitekey: SITE_KEY });
    };

    const ensureReady = () => {
      if (window.grecaptcha?.ready) window.grecaptcha.ready(renderRecaptcha);
      else renderRecaptcha();
    };

    if (window.grecaptcha) {
      ensureReady();
      return;
    }

    const script = document.createElement('script');
    script.src = RECAPTCHA_SRC;
    script.async = true;
    script.defer = true;
    script.onload = ensureReady;
    document.body.appendChild(script);
    return () => (script.onload = null);
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const gc = window.grecaptcha || window.grecaptcha?.enterprise;
    const token = widgetIdRef.current != null ? gc.getResponse(widgetIdRef.current) : '';

    if (!token) {
      setSubmitting(false);
      setStatus('fail');
      alert('Please complete the CAPTCHA.');
      return;
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, token }),
    });

    try { widgetIdRef.current != null && gc.reset(widgetIdRef.current); } catch {}

    if (res.ok) {
      setStatus('ok');
      form.reset();
    } else {
      setStatus('fail');
    }
    setSubmitting(false);
  }

  return (
    <form className="grid gap-6 md:grid-cols-2" onSubmit={onSubmit}>
      <label className="flex flex-col gap-2 text-sm font-medium text-purple-900">
        Full name
        <input name="name" required className="rounded-xl border border-purple-100 px-4 py-3" />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-purple-900">
        Email address
        <input type="email" name="email" required className="rounded-xl border border-purple-100 px-4 py-3" />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-purple-900">
        Phone number
        <input name="phone" required className="rounded-xl border border-purple-100 px-4 py-3" />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-purple-900">
        Preferred service
        <input name="service" className="rounded-xl border border-purple-100 px-4 py-3" />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-purple-900 md:col-span-2">
        Message (optional)
        <textarea name="message" rows={4} className="rounded-xl border border-purple-100 px-4 py-3" />
      </label>

      <div className="grid gap-4 md:col-span-2">
        <div className="flex flex-col gap-2 text-sm font-medium text-purple-900">
          Security check
          <div className="rounded-xl border border-purple-100 px-4 py-4">
            <div ref={recaptchaRef} className="flex justify-center" />
          </div>
        </div>

        <button
          disabled={submitting}
          type="submit"
          className="ml-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 px-8 py-3 text-base font-semibold text-white"
        >
          {submitting ? 'Submitting…' : 'Submit request'}
        </button>

        {status === 'ok' && <p className="text-green-600 text-sm">Thanks! We’ll get back to you soon.</p>}
        {status === 'fail' && <p className="text-red-600 text-sm">Submission failed. Please try again.</p>}
      </div>
    </form>
  );
}
