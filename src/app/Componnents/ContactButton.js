import React from "react";

export const PhoneIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="#25D366"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 2.5h2.25L8.75 6l-1.5 1.5a11 11 0 0 0 5.25 5.25L14 11.25 17 12.5v2.25c0 .69-.56 1.25-1.25 1.25A13.75 13.75 0 0 1 2.5 4.75C2.5 4.06 3.06 3.5 3.75 3.5H5Z" />
  </svg>
);

const ContactButton = () => {
  return (
    <a
      href="tel:+919741620538"
      aria-label="Call AVSO Aesthetic and Wellness"
      className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#6b21a8] text-white shadow-lg shadow-purple-900/40 transition-transform duration-200 hover:-translate-y-1"
    >
      <PhoneIcon className="h-6 w-6" />
    </a>
  );
};

export default ContactButton;
