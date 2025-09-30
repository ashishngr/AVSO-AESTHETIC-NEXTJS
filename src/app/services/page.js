import React from "react";
import TopHeader from "../Componnents/TopHeader";
import Navbar from "../Componnents/Navbar";
import Footer from "../Componnents/Footer";
import ContactButton from "../Componnents/ContactButton";
import Whatsapp from "../Componnents/Watsapp";
import PageBanner from "../Componnents/PageBanner";
import ServiceCard from "../Componnents/ServiceCard";
import { serviceDetails } from "../data/ServiceData";

const ServicesPage = () => {
  const services = Object.entries(serviceDetails || {});

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

          <div className="space-y-12">
            {services.map(([slug, details], index) => (
              <ServiceCard key={slug} service={details} index={index} />
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

export default ServicesPage;
