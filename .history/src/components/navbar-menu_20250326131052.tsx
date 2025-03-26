import { useState } from "react";
import Logo from "../assets/logo.png"; // Replace with actual path

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#F4F1EA] flex justify-between items-center px-10 py-4">
    {/* Logo */}
      <a href="#" className="mr-10">
        <img src={Logo} alt="PUNCH Logo" className="h-10" />
      </a>

      {/* Navigation Menu (Left-Aligned) */}
      <div className="flex space-x-6 text-lg">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Personal Training</a>
        <div className="relative group">
          <a href="#" className="hover:underline cursor-pointer">
            Corporate Classes ▼
          </a>
          <div className="absolute left-0 mt-2 w-40 bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Class 1</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Class 2</a>
          </div>
        </div>
        <a href="#" className="hover:underline">Our Team</a>
        <a href="#" className="hover:underline">Contact Us</a>
      </div>

      {/* Push "Book Now" button to the right */}
      <a href="#" className="ml-auto bg-black text-white px-4 py-2 text-lg">
        Book Now
      </a>
      </div>
    </nav>
  );
};

export default Navbar;
