'use client'
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu } from "react-icons/hi"; 
import { AiFillHome, AiOutlineInfoCircle, AiOutlineAppstore, AiOutlineMail } from "react-icons/ai";

const LogoIcon = (props) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="48" height="48" rx="16" className="fill-purple-700/10" />
    <path
      d="M15 32L24 14L33 32"
      stroke="url(#logo-gradient)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.5 24H28.5"
      stroke="url(#logo-gradient)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="logo-gradient" x1="15" y1="14" x2="33" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6D28D9" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
  </svg>
);

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
    <nav className="px-4 py-3">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <LogoIcon className="h-10 w-10" />
          <span className="sr-only">Home</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {pages.map((page) => (
            <li
              key={page.name}
              className="flex"
            >
              <Link
                href={page.path}
                className={`flex items-center gap-1 text-md font-bold p-2 rounded-lg transition-colors hover:bg-purple-700 hover:text-white ${
                  pathname === page.path ? "bg-purple-700 text-white" : ""
                }`}
              >
                {page.icon} {page.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <HiOutlineMenu
            size={28}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul id="mobile-nav" className="md:hidden mt-2 rounded">
          {pages.map((page) => (
            <li
              key={page.name}
              className="flex"
            >
              <Link
                href={page.path}
                onClick={() => setIsOpen(false)}
                className={`flex w-full items-center gap-1 text-md font-bold p-2 rounded-lg transition-colors hover:bg-purple-700 hover:text-white ${
                  pathname === page.path ? "bg-purple-700 text-white" : ""
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
