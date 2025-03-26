import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 w-full z-50 shadow-md  bg-[#F8F5F0] shadow-md">
          <div className="flex justify-between items-center px-6 py-4 md:px-10">
              {/* Logo */}
        <img
          src={logo}
          alt="Poseidon Logo"
          className="md:h-24 h-12 cursor-pointer"
          onClick={() => navigate('/')}
        
/>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg relative">
          <li>Home</li>
          <li>Personal Training</li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            Corporate Classes <ChevronDown size={16} className="inline" />
            {dropdownOpen && (
              <ul className="absolute left-0 top-full bg-white shadow-md rounded mt-2 w-48 text-sm">
                <li className="p-2 hover:bg-gray-200">Class 1</li>
                <li className="p-2 hover:bg-gray-200">Class 2</li>
                <li className="p-2 hover:bg-gray-200">Class 3</li>
              </ul>
            )}
          </li>
          <li>Our Team</li>
          <li>Contact Us</li>
          <button className="bg-black text-white px-4 py-2 rounded">
            Book Now
          </button>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4 text-lg bg-[#F8F5F0]">
          <li>Home</li>
          <li>Personal Training</li>
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1"
            >
              Corporate Classes <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <ul className="bg-white shadow-md rounded mt-2 text-sm w-40">
                <li className="p-2 hover:bg-gray-200">Class 1</li>
                <li className="p-2 hover:bg-gray-200">Class 2</li>
                <li className="p-2 hover:bg-gray-200">Class 3</li>
              </ul>
            )}
          </li>
          <li>Our Team</li>
          <li>Contact Us</li>
          <button className="bg-black text-white px-4 py-2 rounded">
            Book Now
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
