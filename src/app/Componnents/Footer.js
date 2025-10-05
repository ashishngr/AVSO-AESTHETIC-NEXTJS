import React from "react";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { serviceDetails } from "../data/ServiceData";

const timings = [
  { day: "Monday", time: "10:30 AM – 7:30 PM" },
  { day: "Tuesday", time: "10:30 AM – 7:30 PM" },
  { day: "Wednesday", time: "10:30 AM – 7:30 PM" },
  { day: "Thursday", time: "10:30 AM – 7:30 PM" },
  { day: "Friday", time: "10:30 AM – 7:30 PM" },
  { day: "Saturday", time: "10:30 AM – 7:30 PM" },
  { day: "Sunday", time: "10:30 AM – 7:30 PM" },
];

const contactInfo = [
  "G-19, Street 76, Sector 76 Near Silicon City, Sector 76, Noida, Uttar Pradesh 201303",
  "+91 8800586733",
  "avsoaesthetic@gmail.com",
];
const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Services", href: "/Services" },
  { label: "Contact", href: "/ContactUs" },
];

const categoryOrder = [
  "Skin & Dermatology",
  "Laser & Light Therapies",
  "Facial Glow Rituals",
  "Body Contouring",
  "Advanced Aesthetics",
  "Grooming Lounge",
];

const servicesByCategory = Object.entries(serviceDetails).reduce(
  (acc, [slug, details]) => {
    const category = details.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push({
      label: details.name,
      href: `/Services#${slug}`,
    });
    return acc;
  },
  {}
);

const orderedServiceSections = [
  ...categoryOrder
    .filter((category) => servicesByCategory[category]?.length)
    .map((category) => ({ heading: category, links: servicesByCategory[category] })),
  ...Object.keys(servicesByCategory)
    .filter((category) => !categoryOrder.includes(category))
    .map((category) => ({ heading: category, links: servicesByCategory[category] })),
];

const Footer = () => {
  return (
    <footer className="bg-[#1f2125] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-white/80">
              AVSO Aesthetic &amp; Wellness
            </h2>
            <p className="text-sm leading-6 text-white/60">
              AVSO blends medical expertise, artistry, and holistic wellness to
              deliver safe, evidence-based treatments tailored to the
              individual.
            </p>
            <div className="space-y-3 text-sm text-white/60">
              <p className="flex items-center gap-3">
                <span aria-hidden>📍</span>G-19, Street 76, Sector 76, Near Silicon City, Sector 76, Noida, Uttar Pradesh 201303
              </p>
              <p className="flex items-center gap-3">
                <span aria-hidden>📞</span>
                <span>
                  <a href="tel:+919741620538" className="hover:text-white">
                    +91 8800586733
                  </a>
                  
                </span>
              </p>
              <p className="flex items-center gap-3">
                <span aria-hidden>✉️</span>
                <a
                  href="mailto:avsoaesthetic@gmail.com"
                  className="hover:text-white"
                >
                  avsoaesthetic@gmail.com
                </a>
              </p>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.114482799768!2d77.37904187721082!3d28.56632477570091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefe414f07b81%3A0x30635a7a7d2b25f1!2sAVSO%20AESTHETIC%20AND%20WELLNESS!5e0!3m2!1sen!2sin!4v1759135325974!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AVSO Aesthetic and Wellness Map"
                className="h-full w-full"
              />
            </div>
            <nav className="flex flex-wrap gap-4 text-sm text-white/60">
              {pages.map(({ label, href }) => (
                <a key={label} href={href} className="hover:text-white">
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex gap-4 text-xl text-white/60">
              <a
                href="https://www.instagram.com/avsoaestheticwellness/?igsh=cGx0a3RweHlibTVz"
                aria-label="Instagram"
                className="hover:text-white"
              >
                <span aria-hidden>
                  <RiInstagramLine
                    size={30}
                    className="cursor-pointer transition-transform duration-200 hover:scale-125"
                  />
                </span>
              </a>
              <a
                href="https://www.facebook.com/share/1BSZ89btri/?mibextid=wwXIf"
                aria-label="Facebook"
                className="hover:text-white"
              >
                <span aria-hidden>
                  <RiFacebookFill
                    size={30}
                    className="cursor-pointer transition-transform duration-200 hover:scale-125"
                  />
                </span>
              </a>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Pages
              </h3>
              <ul className="space-y-2 text-sm text-white/60">
                {pages.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href} className="transition-colors hover:text-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {orderedServiceSections.map(({ heading, links }) => (
              <div key={heading} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                  {heading}
                </h3>
                <ul className="space-y-2 text-sm text-white/60">
                  {links.map(({ label, href }) => (
                    <li key={href}>
                      <a href={href} className="transition-colors hover:text-white">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Opening Hours
              </h3>
              <div className="space-y-2 rounded-xl border border-white/15 px-5 py-6 text-sm text-white/60">
                {timings.map(({ day, time }) => (
                  <div key={day} className="flex justify-between gap-4">
                    <span className="text-white">{day}</span>
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-6 text-left text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} AVSO Aesthetic &amp; Wellness. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
