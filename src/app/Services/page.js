import React from "react";
import TopHeader from "../Componnents/TopHeader";
import Navbar from "../Componnents/Navbar";
import Footer from "../Componnents/Footer";
import ContactButton from "../Componnents/ContactButton";
import Whatsapp from "../Componnents/Watsapp";
import PageBanner from "../Componnents/PageBanner";
import ServiceCard from "../Componnents/ServiceCard";
import { serviceDetails } from "../data/ServiceData";

const Services = () => {
  const services = Object.entries(serviceDetails || {});
  const categoryDescriptions = {
    "Skin & Dermatology": "Restore clarity and resilience with dermatologist-designed care.",
    "Laser & Light Therapies": "Harness advanced energy devices for smooth, even-toned skin and hair-free confidence.",
    "Facial Glow Rituals": "Hydrating, resurfacing facials that deliver an instant, event-ready glow.",
    "Body Contouring": "Shape, tone, and sculpt with non-surgical technologies tailored to your goals.",
    "Advanced Aesthetics": "Targeted collagen and anti-ageing therapies for lifted, refined results.",
    "Grooming Lounge": "Finishing touches that keep you polished from head to toe, every day.",
  };

  const groupedServices = services.reduce((acc, [slug, details]) => {
    const category = details.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push([slug, details]);
    return acc;
  }, {});

  const categoryOrder = services
    .map(([, details]) => details.category || "Other")
    .filter((category, index, array) => array.indexOf(category) === index);

  const serviceIndexMap = new Map(services.map(([slug], index) => [slug, index]));

  return (
    <div>
      <TopHeader />
      <Navbar />
      <PageBanner CurrentPage={"Services"} />

      <main className="bg-gradient-to-b from-white via-purple-50/30 to-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <div className="space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-purple-600">
              Explore our expertise
            </p>
            <h2 className="text-3xl font-semibold text-purple-900">
              Tailored services for skin, hair, and wellness
            </h2>
            <p className="mx-auto max-w-3xl text-sm leading-7 text-gray-600">
              Every treatment plan is designed around your concerns. Discover how our
              signature therapies combine medical science, artistry, and comfort to
              help you feel your most confident self.
            </p>
          </div>

          <div className="space-y-20">
            {categoryOrder.map((category) => (
              <section key={category} className="space-y-10">
                <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
                  <span className="absolute inset-x-0 -top-6 hidden h-px bg-gradient-to-r from-transparent via-purple-200/80 to-transparent md:block" aria-hidden />
                  <span className="inline-flex items-center gap-2 rounded-full border border-purple-200/60 bg-white/80 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.45em] text-purple-600 shadow-sm">
                    {category}
                  </span>
                  {categoryDescriptions[category] && (
                    <p className="max-w-2xl text-base leading-7 text-gray-600">
                      {categoryDescriptions[category]}
                    </p>
                  )}
                </div>

                <div className="space-y-12">
                  {groupedServices[category]?.map(([slug, details]) => (
                    <ServiceCard
                      key={slug}
                      service={details}
                      index={serviceIndexMap.get(slug) ?? 0}
                      slug={slug}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
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

export default Services;
