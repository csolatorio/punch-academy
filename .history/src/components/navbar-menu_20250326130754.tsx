import { useState } from "react";
import Logo from "../assets/logo.png"; // Replace with actual path

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#F4F1EA] flex justify-between items-center px-10 py-4">
      {/* Logo */}
      <div>
        <img src={Logo} alt="PUNCH Logo" className="h-10" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-lg">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Personal Training</li>
        <li className="relative group cursor-pointer">
          Corporate Classes ▼
          <div className="absolute left-0 mt-2 w-40 bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <ul className="text-sm text-gray-700 p-2">
              <li className="py-1 hover:bg-gray-200 cursor-pointer">Class 1</li>
              <li className="py-1 hover:bg-gray-200 cursor-pointer">Class 2</li>
            </ul>
          </div>
        </li>
        <li className="hover:underline cursor-pointer">Our Team</li>
        <li className="hover:underline cursor-pointer">Contact Us</li>
      </ul>

      {/* Book Now Button */}
      <button className="bg-black text-white px-4 py-2 text-lg">
        Book Now
      </button>
    </nav>
  );
};

export default Navbar;
