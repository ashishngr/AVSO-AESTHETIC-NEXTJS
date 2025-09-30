import TopHeader from "../app/Componnents/TopHeader";
import Navbar from "../app/Componnents/Navbar";
import HomePageCarousel from "../app/Componnents/HomePageCarousel";
import Footer from "../app/Componnents/Footer";
import Whatsapp from "../app/Componnents/Watsapp";
import ContactButton from "../app/Componnents/ContactButton";
import ContactUsForm from "../app/Componnents/ContactUsForm";

export default function Home() {
  const services = [
    {
      title: "Body care",
      description:
        "Desire for a more defined, toned and well-sculpted body and get the shape in which you look confident",
    },
    {
      title: "Face Aesthetic",
      description:
        "Reveal the new face of you, restores facial symmetry and enhances facial features.",
    },
    {
      title: "Hair care",
      description:
        "Regain your natural crown back with a healthy and strong hair",
    },
    {
      title: "Skin care",
      description:
        "Rejuvenate, redefine and recontour your skin with our latest anti-aging treatments",
    },
  ];

  const features = [
    {
      title: "Team of experts",
      description:
        "Board-certified dermatologists, aesthetic physicians, and trained therapists collaborate to craft evidence-backed treatment plans tailored to your skin and body goals.",
      Icon: () => (
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-6 w-6 fill-current"
        >
          <path d="M9 36c0-5.523 4.477-10 10-10h10c5.523 0 10 4.477 10 10v2c0 2.209-1.791 4-4 4H13c-2.209 0-4-1.791-4-4v-2Z" />
          <circle cx="19" cy="16" r="6" />
          <circle cx="33" cy="18" r="5" />
        </svg>
      ),
    },
    {
      title: "Best treatment",
      description:
        "We blend global best practices with compassionate guidance so every visit feels supportive, structured, and focused on measurable improvements.",
      Icon: () => (
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-6 w-6 fill-current"
        >
          <path d="M24 6c-6.075 0-11 4.925-11 11 0 6.075 4.925 11 11 11s11-4.925 11-11c0-6.075-4.925-11-11-11Zm2 15h-4v-4h-4v-4h4V9h4v4h4v4h-4v4Zm-16 5h28v6c0 2.209-1.791 4-4 4H14c-2.209 0-4-1.791-4-4v-6Z" />
        </svg>
      ),
    },
    {
      title: "Extensive care",
      description:
        "From pre-procedure counseling to post-care follow ups, our wellness concierge makes sure you’re cared for at every stage of your transformation journey.",
      Icon: () => (
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-6 w-6 fill-current"
        >
          <path d="M24 6c-7.732 0-14 6.268-14 14 0 10.5 14 22 14 22s14-11.5 14-22c0-7.732-6.268-14-14-14Zm0 19a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" />
        </svg>
      ),
    },
    {
      title: "Best quality products",
      description:
        "Only clinically tested, dermatologist-approved formulations touch your skin—ensuring potency, safety, and luxurious sensorial experiences.",
      Icon: () => (
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-6 w-6 fill-current"
        >
          <path d="M16 4h16l4 6v28c0 3.314-2.686 6-6 6H18c-3.314 0-6-2.686-6-6V10l4-6Zm3 16v4h10v-4H19Zm0 8v4h10v-4H19Z" />
        </svg>
      ),
    },
    {
      title: "Latest technology",
      description:
        "Cutting-edge lasers, regenerative therapies, and smart diagnostics deliver faster results with minimal downtime and maximum comfort.",
      Icon: () => (
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-6 w-6 fill-current"
        >
          <path d="M20 4h8l2 6h6a4 4 0 0 1 4 4v6h-4v-6h-8l-2-6h-4l-2 6h-8v6H8v-6a4 4 0 0 1 4-4h6l2-6Zm4 18a12 12 0 1 1-12 12 12.014 12.014 0 0 1 12-12Zm-2 8h4v-4h-4v4Zm0 8h4v-4h-4v4Z" />
        </svg>
      ),
    },
  ];

  const ServicesIcon = () => (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 34h28" />
      <path d="M8 28h32" />
      <rect x="12" y="8" width="24" height="14" rx="4" />
      <path d="M18 8v-2h12v2" />
    </svg>
  );

  const ConsultationsIcon = () => (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 36v8l8-8h16a6 6 0 0 0 6-6V12a6 6 0 0 0-6-6H12a6 6 0 0 0-6 6v18a6 6 0 0 0 6 6h0Z" />
      <path d="M18 20h12" />
      <path d="M18 26h8" />
      <circle cx="18" cy="14" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );

  const ExperienceIcon = () => (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="16" r="8" />
      <path d="M10 42v-4a8 8 0 0 1 8-8h12a8 8 0 0 1 8 8v4" />
      <path d="M24 8V4" />
      <path d="M14 12 8 8" />
      <path d="M34 12 40 8" />
    </svg>
  );

  const TeamIcon = () => (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="18" r="6" />
      <circle cx="32" cy="18" r="6" />
      <path d="M6 40v-2a10 10 0 0 1 10-10h0" />
      <path d="M42 40v-2a10 10 0 0 0-10-10h0" />
      <circle cx="24" cy="32" r="6" />
      <path d="M14 44v-2a10 10 0 0 1 20 0v2" />
    </svg>
  );

  const SuccessIcon = () => (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="24" r="16" />
      <path d="m16 24 5 5 11-11" />
      <path d="M24 8V4" />
      <path d="M40 24h4" />
      <path d="M24 44v-4" />
      <path d="M4 24h4" />
    </svg>
  );

  const achievements = [
    { title: "30+", subtitle: "Different services", Icon: ServicesIcon },
    { title: "10k+", subtitle: "Consultations", Icon: ConsultationsIcon },
    { title: "20 years", subtitle: "of experience", Icon: ExperienceIcon },
    {
      title: "Team of experts",
      subtitle: "Specialists across aesthetics",
      Icon: TeamIcon,
    },
    { title: "99%", subtitle: "Success rate", Icon: SuccessIcon },
  ];

  const faqs = [
    {
      question: "How much do you charge?",
      answer:
        "Pricing depends on the treatment plan we craft for you. After an in-depth consultation we share transparent quotations that detail every session and product involved.",
    },
    {
      question: "How can I book my appointment?",
      answer:
        "You can call our concierge desk, submit the online form above, or WhatsApp us. We will confirm date, time, and the specialist best suited to your concerns.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "If you need to cancel, let us know 24 hours in advance and we will reschedule or refund in line with your treatment contract. Prepaid packages can be adjusted to future services.",
    },
    {
      question: "What types of treatments do you offer?",
      answer:
        "AVSO covers facial aesthetics, skin rejuvenation, hair restoration, body contouring, wellness therapies, and post-procedure maintenance programs.",
    },
    {
      question: "Where is AVSO located?",
      answer:
        "We are situated in Noida, Sector 104. Parking is available onsite and our team will share the exact pin once your appointment is confirmed.",
    },
    {
      question: "Is the goal of your treatments to give a natural look?",
      answer:
        "Absolutely. We prioritise subtle, balanced enhancements that respect your natural features and align with medically safe outcomes.",
    },
  ];

  const captcha = {
    question: "7 + 4",
    answerPattern: "11",
  };

  const WhyIllustration = () => {
    const petals = Array.from({ length: 12 });

    return (
      <div className="flex flex-col items-center text-center">
        <div className="relative aspect-square w-full max-w-sm">
          <svg
            viewBox="0 0 320 320"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            role="img"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="petal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fcd34d" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f6e05e" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#fef3c7" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="160" cy="160" r="150" fill="url(#glow)" />
            {petals.map((_, idx) => (
              <rect
                key={idx}
                x="145"
                y="20"
                width="30"
                height="140"
                rx="18"
                fill="url(#petal)"
                transform={`rotate(${idx * 30} 160 160)`}
                opacity="0.92"
              />
            ))}
            <circle cx="160" cy="160" r="48" fill="#fff7ed" />
            <path
              d="M160 118c-8.8 10.1-26 27.3-26 44.2 0 13.8 11.2 25 25 25 11.6 0 21.4-8 24.3-18.8 1.7-6.3-0.16-13-3.2-18.6-1.79-3.29-4.4-6.45-7.29-8.99 0.16 4.52-0.35 9.68-2.76 13.75-3.2 5.4-10.55 8.17-16.56 6.02-3.66-1.32-6.25-4.6-7.17-8.07-2.35-8.99 4.33-18.26 10.5-24.22 3.7-3.59 8.2-6.88 12-10.25Z"
              fill="#7c3aed"
            />
          </svg>
        </div>
        <div className="mt-6">
          <p className="text-sm uppercase tracking-[0.4em] text-purple-800">
            AVSO
          </p>
          <p className="mt-1 text-lg font-medium text-purple-700">
            Centre for Aesthetic &amp; Wellness
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <TopHeader />
      <Navbar />
      <div>
        {/* Carousel */}
        <HomePageCarousel />
      </div>
      {/* Services */}
      <div className="flex flex-col flex-wrap items-center justify-center mt-3 gap-4">
        <h2 className="text-2xl font-bold">Our Popular Services</h2>
        {/* Services */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 p-4">
          {services.map(({ title, description }) => (
            <div
              key={title}
              className="flex w-full max-w-4xl flex-wrap items-center gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-purple-100 md:flex-nowrap"
            >
              <div className="h-32 w-32 shrink-0 rounded-full bg-purple-700 ring-4 ring-purple-700 ring-offset-4 ring-offset-white" />
              <h2 className="min-w-[160px] text-left text-xl font-bold text-purple-900">
                {title}
              </h2>
              <p className="flex-1 min-w-[220px] text-left font-semibold text-gray-600">
                {description}
              </p>
              <button className="group inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 px-6 py-2.5 text-lg font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:from-purple-500 hover:via-purple-400 hover:to-purple-600 hover:shadow-purple-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400">
                Know More
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Why choose us */}
      <section className="relative mt-16 overflow-hidden bg-[#fdf5d7] py-16">
        <div
          className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-purple-300/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-20">
          <div className="mx-auto w-full max-w-md">
            <WhyIllustration />
          </div>

          <div className="relative w-full max-w-3xl">
            <p className="text-lg font-serif italic text-purple-500/80">
              Why choose us?
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-purple-900">
              Why choose us?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              AVSO Aesthetics Clinic is a high-end destination for those seeking
              sophisticated beauty and cosmetic procedures. Under one roof, we
              deliver world-class therapies with long-term aesthetic solutions
              that help every client live more confidently.
            </p>

            <div className="mt-8 space-y-6">
              {features.map(({ title, description, Icon }) => (
                <article key={title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-700 text-white shadow-lg shadow-purple-500/40">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-900">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-700">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 px-6 py-12">
        <div
          className="absolute -top-12 left-12 h-32 w-32 rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 right-16 h-36 w-36 rounded-full bg-purple-400/30 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 text-center text-white md:flex-row md:text-left">
          <div>
            <h3 className="text-3xl font-bold tracking-wide">
              Book your appointment today!
            </h3>
            <p className="mt-2 text-sm font-bold text-white">
              Just a click away to experience high quality aesthetic treatments.
            </p>
          </div>
          <a
            href="tel:+919741620538"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-2xl font-bold text-purple-700 shadow-lg shadow-purple-900/30 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-purple-900/40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2 h-5 w-5"
              aria-hidden="true"
            >
              <path d="M2.25 6A3.75 3.75 0 0 1 6 2.25h1.5a.75.75 0 0 1 .75.75V7.5a.75.75 0 0 1-.429.682l-1.482.741a9.784 9.784 0 0 0 4.768 4.768l.741-1.482A.75.75 0 0 1 12.75 11h4.5a.75.75 0 0 1 .75.75V15a3.75 3.75 0 0 1-3.75 3.75h-.75C7.373 18.75 2.25 13.627 2.25 7.5V6Z" />
            </svg>
            +91 8800586733
          </a>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative mt-16 px-6">
        <div
          className="absolute inset-x-6 -z-10 h-40 rounded-full bg-purple-200/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">
            What we have achieved
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-purple-900">
            Milestones that reflect our commitment
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {achievements.map(({ title, subtitle, Icon }) => (
              <div
                key={title}
                className="group flex min-h-[160px] min-w-[220px] flex-col gap-4 rounded-3xl bg-white/90 px-8 py-9 shadow-[0_25px_45px_-35px_rgba(79,70,229,0.6)] ring-1 ring-purple-100 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_25px_45px_-25px_rgba(79,70,229,0.6)]"
              >
                <div className="flex items-center gap-3 text-purple-700">
                  <Icon />
                  <span className="text-3xl font-bold leading-none group-hover:text-purple-800">
                    {title}
                  </span>
                </div>
                <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                  {subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact us */}
      <section className="mt-16 px-6">
        <div className="mx-auto w-full max-w-5xl rounded-3xl border border-purple-100 bg-white px-8 py-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">
              Contact us
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-purple-900">
              Book your appointment online
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Share your details and our concierge team will reach out with a
              personalised consultation slot.
            </p>
          </div>
          <ContactUsForm />
        </div>
      </section>
      {/* CTA banner */}
      <section className="relative mt-16 overflow-hidden bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 px-6 py-12">
        <div
          className="absolute -top-12 left-12 h-32 w-32 rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 right-16 h-36 w-36 rounded-full bg-purple-400/30 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 text-center text-white md:flex-row md:text-left">
          <div>
            <h3 className="text-3xl font-bold tracking-wide">
              Book your appointment today!
            </h3>
            <p className="mt-2 text-sm font-bold text-white">
              Just a click away to experience high quality aesthetic treatments.
            </p>
          </div>
          <a
            href="tel:+919741620538"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-2xl font-bold text-purple-700 shadow-lg shadow-purple-900/30 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-purple-900/40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2 h-5 w-5"
              aria-hidden="true"
            >
              <path d="M2.25 6A3.75 3.75 0 0 1 6 2.25h1.5a.75.75 0 0 1 .75.75V7.5a.75.75 0 0 1-.429.682l-1.482.741a9.784 9.784 0 0 0 4.768 4.768l.741-1.482A.75.75 0 0 1 12.75 11h4.5a.75.75 0 0 1 .75.75V15a3.75 3.75 0 0 1-3.75 3.75h-.75C7.373 18.75 2.25 13.627 2.25 7.5V6Z" />
            </svg>
            +91 97416 20538
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16 px-6">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-3xl font-semibold text-purple-900">FAQ’s</h2>
          <div className="mt-6 rounded-3xl bg-white">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group">
                <summary className="flex list-none cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left text-lg font-bold text-black border-b-2 border-purple-200">
                  <span className="pr-4">{question}</span>
                  <span className="text-2xl font-semibold text-black transition-transform duration-200 group-open:rotate-180">
                    ˅
                  </span>
                </summary>
                <div className="px-4 pb-5 text-sm leading-6 text-gray-700">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
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
}
