import React from "react";

const WhatsappIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path
      fill="#25D366"
      d="M127.9 20C70 20 22 68.1 22 126c0 18.7 4.8 36.8 14 52.9L20 236l58.6-15.3c15.5 8.4 33 12.8 49.3 12.8h.1c57.9 0 105.9-48.1 105.9-106 0-28.3-11.3-54.9-31.8-75.1C182.1 31.3 155.5 20 127.9 20z"
    />
    <path
      fill="#fff"
      d="M177 145.2c-2.7-1.4-16-7.9-18.4-8.8-2.5-.9-4.3-1.4-6.1 1.4-1.8 2.7-7 8.8-8.6 10.6-1.6 1.8-3.2 2-5.9.7-2.7-1.4-11.3-4.1-21.6-13.1-8-7.1-13.3-15.9-14.8-18.6-1.5-2.7-.2-4.2 1.1-5.6 1.2-1.2 2.7-3.2 4.1-4.8 1.4-1.6 1.9-2.7 2.9-4.5.9-1.8.5-3.4-.2-4.8-.7-1.4-6.1-14.8-8.4-20.2-2.2-5.3-4.4-4.6-6.1-4.7-1.6-.1-3.4-.1-5.2-.1s-4.8.7-7.3 3.4c-2.5 2.7-9.5 9.3-9.5 22.7s9.7 26.3 11 28.1c1.4 1.8 19 29.1 46.1 40.8 6.4 2.7 11.5 4.3 15.5 5.5 6.5 2.1 12.4 1.8 17.1 1.1 5.2-.8 16-6.5 18.2-12.7 2.3-6.3 2.3-11.6 1.6-12.7-.7-1.1-2.5-1.8-5.2-3.2z"
    />
  </svg>
);

const Whatsapp = () => {
  return (
    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#6b21a8] text-white shadow-lg shadow-purple-900/40 transition-transform duration-200 hover:-translate-y-1">
      <WhatsappIcon className="h-12 w-12" />
    </div>
  );
};

export default Whatsapp;
