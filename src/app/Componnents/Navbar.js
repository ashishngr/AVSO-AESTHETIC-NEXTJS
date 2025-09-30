'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { HiOutlineMenu } from "react-icons/hi"; 
import { AiFillHome, AiOutlineInfoCircle, AiOutlineAppstore, AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const router = useRouter();

  const pages = [
    { name: "Home", icon: <AiFillHome size={20} />, path: "/" },
    { name: "About Us", icon: <AiOutlineInfoCircle size={20} />, path: "/About" },
    { name: "Services", icon: <AiOutlineAppstore size={20} />, path: "/Services"  },
    { name: "Contact Us", icon: <AiOutlineMail size={20} />, path: "/ContactUs" },
  ];
  const handleNavigation = (page) => {
    setActiveTab(page.name);
    router.push(page.path);
    setIsOpen(false);
  };

  return (
    <nav className="px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-xl font-bold">MyBrand</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {pages.map((page) => (
            <li
              key={page.name}
              onClick={() => handleNavigation(page)}
              className={`flex items-center gap-1 cursor-pointer text-md font-bold p-2 rounded-lg hover:bg-purple-700 hover:rounded-lg hover:text-white ${
                activeTab === page.name ? "bg-purple-700 rounded-lgs text-white" : ""
              }`}
            >
              {page.icon} {page.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <HiOutlineMenu
            size={28}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-2 rounded">
          {pages.map((page) => (
            <li
              key={page.name}
              onClick={() => handleNavigation(page)}
              className={`flex items-center gap-1 cursor-pointer text-md font-bold p-2 rounded-lg hover:bg-purple-700 hover:rounded-lg hover:text-white ${
                activeTab === page.name ? "bg-purple-700 text-white" : ""
              }`}
            >
              {page.icon} {page.name}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
