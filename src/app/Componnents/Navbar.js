'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlinePhone } from "react-icons/hi"; 
import { AiFillHome, AiOutlineInfoCircle, AiOutlineAppstore, AiOutlineMail } from "react-icons/ai";
import Logo from "../../source/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const pages = [
    { name: "Home", icon: <AiFillHome size={20} />, path: "/" },
    { name: "About Us", icon: <AiOutlineInfoCircle size={20} />, path: "/About" },
    { name: "Services", icon: <AiOutlineAppstore size={20} />, path: "/Services"  },
    { name: "Contact Us", icon: <AiOutlineMail size={20} />, path: "/ContactUs" },
  ];

  return (
    <nav className="sticky top-0 z-50 px-4 py-4 backdrop-blur-xl bg-white/80 border-b border-purple-100/60 shadow-[0_10px_30px_-15px_rgba(124,58,237,0.45)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="relative flex h-[72px] w-[180px] items-center justify-center overflow-hidden px-5 py-3 transition-transform duration-300 group-hover:-translate-y-0.5">
            <Image
              src={Logo}
              alt="AVSO Aesthetic and Wellness logo"
              className="object-contain"
              fill
              priority
              sizes="200px"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-lg font-semibold tracking-wide text-transparent">
              AVSO Aesthetic
            </span>
            <span className="text-[10px] uppercase tracking-[0.5em] text-purple-500/70">
              Wellness
            </span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2 rounded-full border border-purple-200/60 bg-white/60 px-2 py-1 shadow-[0_8px_20px_-12px_rgba(124,58,237,0.45)]">
          {pages.map((page) => (
            <li
              key={page.name}
              className="flex"
            >
              <Link
                href={page.path}
                className={`flex items-center gap-2 text-sm font-medium uppercase tracking-wide px-4 py-2 rounded-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                  pathname === page.path
                    ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow"
                    : "text-purple-700 hover:bg-purple-50"
                }`}
              >
                {page.icon} {page.name}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="tel:+918800586733"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-white"
        >
          <HiOutlinePhone className="text-base" />
          <span>+91&nbsp;8800586733</span>
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <HiOutlineMenu
            size={28}
            className="cursor-pointer text-purple-700 transition-transform duration-200 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul
          id="mobile-nav"
          className="md:hidden mt-3 space-y-2 rounded-2xl border border-purple-200/60 bg-white/90 p-3 shadow-[0_25px_50px_-20px_rgba(124,58,237,0.45)]"
        >
          <li>
            <a
              href="tel:+918800586733"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow transition-transform duration-200 hover:-translate-y-0.5"
            >
              <HiOutlinePhone className="text-base" />
              <span>Call +91&nbsp;8800586733</span>
            </a>
          </li>
          {pages.map((page) => (
            <li
              key={page.name}
              className="flex"
            >
              <Link
                href={page.path}
                onClick={() => setIsOpen(false)}
                className={`flex w-full items-center gap-2 text-sm font-semibold tracking-wide px-4 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
                  pathname === page.path
                    ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow"
                    : "bg-purple-50/60 text-purple-700 hover:bg-purple-100"
                }`}
              >
                {page.icon} {page.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
