import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const TopHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center py-4 gap-4 bg-purple-700">
      <div className="flex flex-row items-center gap-4 text-white">
        <a
          href="https://www.instagram.com/avsoaestheticwellness/?igsh=cGx0a3RweHlibTVz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramLine
            size={30}
            className="cursor-pointer transition-transform duration-200 hover:scale-125"
          />
        </a>
        <a
          href="https://www.facebook.com/share/1BSZ89btri/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookFill
            size={30}
            className="cursor-pointer transition-transform duration-200 hover:scale-125"
          />
        </a>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4 text-white">
        <a
          href="mailto:avsoaesthetic@gmail.com"
          className="flex items-center font-medium text-lg gap-2"
        >
          <MdOutlineEmail size={30} /> avsoaesthetic@gmail.com
        </a>
        <a
          href="tel:+918800586733"
          className="flex items-center font-medium text-lg gap-2"
        >
          <IoCallOutline size={30} /> +91-8800586733
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
