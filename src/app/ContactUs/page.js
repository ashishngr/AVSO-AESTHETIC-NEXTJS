import React from "react";
import TopHeader from "../Componnents/TopHeader";
import Navbar from "../Componnents/Navbar";
import Footer from "../Componnents/Footer";
import PageBanner from "../Componnents/PageBanner";
import ContactUsForm from "../Componnents/ContactUsForm";
import ContactButton from "../Componnents/ContactButton";
import Whatsapp from "../Componnents/Watsapp";

const contactHighlights = [
  {
    title: "Clinical Address",
    description: "Street 76 Market ctor 76 Near Silicon City, Sector 76, Noida, Uttar Pradesh 20130",
  },
  {
    title: "Call us",
    description: "+91 8800586733",
    link: "tel:+918800586733",
  },
  {
    title: "Email",
    description: "avsoaesthetic@gmail.com",
    link: "mailto:avsoaesthetic@gmail.com",
  },
];

const ContactUs = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <PageBanner CurrentPage="Contact" />

      <main className="bg-gradient-to-b from-white via-purple-50/30 to-white py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-8 lg:px-12">
          <section className="grid gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
            <div className="space-y-10">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-purple-600">
                  Let’s begin your transformation
                </p>
                <h2 className="text-3xl font-semibold text-purple-900 sm:text-4xl">
                  Share your details and our concierge reaches back within 24 hours
                </h2>
                <p className="text-base leading-7 text-gray-600">
                  We devote curated time to understand your concerns, review your skin
                  and hair history, and assemble a treatment journey that balances
                  science with artistry. Use the channels below or send us a message.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                {contactHighlights.map(({ title, description, link }) => (
                  <div
                    key={title}
                    className="flex h-full flex-col rounded-3xl border border-purple-100/60 bg-white/90 px-6 py-6 shadow-sm shadow-purple-900/10"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
                      {title}
                    </p>
                    {link ? (
                      <a
                        href={link}
                        className="mt-2 inline-block break-words text-base font-semibold leading-6 text-purple-900 hover:text-purple-600"
                      >
                        {description}
                      </a>
                    ) : (
                      <p className="mt-2 break-words text-base font-semibold leading-6 text-purple-900">
                        {description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-3xl border border-purple-100/60 shadow-[0_30px_60px_-45px_rgba(107,33,168,0.45)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.114482799768!2d77.37904187721082!3d28.56632477570091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefe414f07b81%3A0x30635a7a7d2b25f1!2sAVSO%20AESTHETIC%20AND%20WELLNESS!5e0!3m2!1sen!2sin!4v1759135325974!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AVSO Aesthetic and Wellness Map"
                  className="h-80 w-full"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-purple-100/60 bg-white px-8 py-10 shadow-[0_25px_60px_-40px_rgba(107,33,168,0.45)] lg:px-10">
              <div className="space-y-3 text-center lg:text-left">
                <h3 className="text-lg font-semibold text-purple-900">
                  Tell us about your goals
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  Fill out the form and we’ll tailor a consultation slot that aligns with
                  your calendar and concerns.
                </p>
              </div>
              <div className="mt-8">
                <ContactUsForm />
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-3xl border border-purple-100/40 bg-purple-900 text-white">
            <div className="grid gap-12 px-8 py-12 md:grid-cols-3 lg:px-12 lg:py-14">
              <div className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
                  Clinic Timings
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  {[
                    "Mon – Fri: 9:30 AM – 9:00 PM",
                    "Saturday: 9:30 AM – 7:30 PM",
                    "Sunday: By appointment",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
                  Concierge desk
                </h4>
                <p className="text-sm leading-6 text-white/80">
                  Need help selecting a treatment? Call our wellness guide or chat on
                  WhatsApp for personalised recommendations.
                </p>
                <div className="flex flex-wrap gap-3 text-sm font-medium">
                  <a href="tel:+918800586733" className="rounded-full bg-white/10 px-4 py-2 text-2xl font-bold">
                    +91 8800586733
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
                  Visit us
                </h4>
                <p className="text-sm leading-6 text-white/80">
                  Street 76 Market ctor 76 Near Silicon City, Sector 76, Noida, Uttar Pradesh 201303
                </p>
              </div>
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

export default ContactUs;
