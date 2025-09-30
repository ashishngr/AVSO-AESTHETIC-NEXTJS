import React from "react";
import TopHeader from "../Componnents/TopHeader";
import Navbar from "../Componnents/Navbar";
import PageBanner from "../Componnents/PageBanner";
import Footer from "../Componnents/Footer";
import ContactUsForm from "../Componnents/ContactUsForm";
import Whatsapp from "../Componnents/Watsapp";
import ContactButton from "../Componnents/ContactButton";

const ethosHighlights = [
  {
    title: "Science-led protocols",
    description:
      "Every treatment is anchored in medical research, dermatology expertise, and outcome-driven technology.",
  },
  {
    title: "Holistic artistry",
    description:
      "We balance aesthetics with wellness—preserving facial harmony, skin health, and your natural signature.",
  },
  {
    title: "Concierge experience",
    description:
      "Expect private lounges, collaborative planning, and post-care support designed around your lifestyle.",
  },
];

const milestones = [
  {
    number: "12+",
    label: "Years of bespoke aesthetic care",
  },
  {
    number: "10k+",
    label: "Consultations guided with empathy",
  },
  {
    number: "30+",
    label: "Advanced protocols across skin, hair, body",
  },
  {
    number: "95%",
    label: "Clients who continue their wellness journey with AVSO",
  },
];

const About = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <PageBanner CurrentPage="About" />

      <main className="bg-gradient-to-b from-white via-purple-50/20 to-white py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-8 lg:px-12">
          <section className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-purple-600">
                Our story
              </p>
              <h2 className="text-3xl font-semibold text-purple-900 sm:text-4xl">
                AVSO Aesthetic &amp; Wellness is where precision medicine meets emotive artistry
              </h2>
              <p className="text-base leading-7 text-gray-600">
                Founded with the belief that aesthetics should feel as personal as it is
                transformative, AVSO combines advanced dermatology, regenerative
                science, and integrative wellness. From the moment you step into our
                clinic, a multidisciplinary team charts a course that celebrates your
                individuality while protecting long-term skin and body health.
              </p>
              <p className="text-base leading-7 text-gray-600">
                Each consultation delves into lifestyle, hormonal, and genetic cues to
                design layered treatment plans—spanning medical-grade skincare,
                cutting-edge lasers, body contouring, and wellness therapies. The result: a
                confident, luminous you, nurtured with care at every step.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-purple-100/60 shadow-[0_35px_70px_-50px_rgba(107,33,168,0.45)]">
              <img
                src="/images/clinic/team-collaboration.jpg"
                alt="AVSO team consulting with a client"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/60 via-purple-700/20 to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/80 px-4 py-3 text-sm font-semibold text-purple-900 shadow-lg shadow-purple-900/20">
                Crafting bespoke transformations since 2012
              </div>
            </div>
          </section>

          <section className="grid gap-8 sm:grid-cols-3">
            {ethosHighlights.map(({ title, description }) => (
              <div
                key={title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-purple-100/70 bg-white px-6 py-6 shadow-sm shadow-purple-900/10"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
                  {title}
                </p>
                <p className="text-sm leading-6 text-gray-600">{description}</p>
              </div>
            ))}
          </section>

          <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-purple-600">
                Our signature approach
              </p>
              <h2 className="text-3xl font-semibold text-purple-900 sm:text-4xl">
                Milestones that define the AVSO experience
              </h2>
              <p className="text-base leading-7 text-gray-600">
                From medical-grade treatments to post-procedure rituals, every step is
                designed to harmonise technique with compassion and deliver measurable
                results.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {milestones.map(({ number, label }) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-purple-100/60 bg-white px-5 py-6 shadow-sm shadow-purple-900/10"
                  >
                    <p className="text-3xl font-semibold text-purple-900">{number}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 px-6 py-8 text-white shadow-[0_30px_60px_-50px_rgba(107,33,168,0.6)] lg:px-10">
              <h3 className="text-lg font-semibold">
                The AVSO Methodology
              </h3>
              <ul className="mt-4 space-y-4 text-sm leading-6 text-white/80">
                <li>
                  <span className="font-semibold text-amber-300">Listen &amp; Analyse:</span>
                  In-depth diagnostics and skin imaging provide a 360° understanding of your baseline.
                </li>
                <li>
                  <span className="font-semibold text-amber-300">Design &amp; Deliver:</span>
                  Treatment plans blend in-clinic procedures, at-home protocols, and wellness rituals.
                </li>
                <li>
                  <span className="font-semibold text-amber-300">Support &amp; Celebrate:</span>
                  Progress reviews, adjustive care, and maintenance ensure results you love, long term.
                </li>
              </ul>
            </div>
          </section>

          <section className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-purple-600">
                Your next step
              </p>
              <h2 className="text-3xl font-semibold text-purple-900 sm:text-4xl">
                Ready to co-create your signature aesthetic?
              </h2>
              <p className="text-base leading-7 text-gray-600">
                Leave your details and our concierge team will recommend the right
                consultation pathway—virtual planning or in-clinic analysis.
              </p>
            </div>
            <div className="rounded-3xl border border-purple-100/60 bg-white px-8 py-10 shadow-[0_25px_60px_-40px_rgba(107,33,168,0.45)] lg:px-10">
              <ContactUsForm />
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/918800586733"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with AVSO on WhatsApp"
          className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1"
        >
          <Whatsapp />
        </a>
        <ContactButton />
      </div>
    </div>
  );
};

export default About;
