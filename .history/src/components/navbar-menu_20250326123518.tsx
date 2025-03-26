import { useState } from "react";
import Logo from "../assets/logo.png"; // Replace with actual path

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#EEE9DF] py-4 px-8 flex justify-between w-full">
      <div className="flex-shrink-0">
        <img src={Logo} alt="PUNCH Logo" className="h-10" />
      </div>

      <div className="flex items-center space-x-6 text-black text-lg">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          Personal Training
        </a>

        <div className="relative">
          <a
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="hover:underline"
          >
            Corporate Classes ▼
          </a>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Class 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Class 2
              </a>
            </div>
          )}
        </div>

        <a href="#" className="hover:underline">
          Our Team
        </a>
        <a href="#" className="hover:underline">
          Contact Us
        </a>
        <button className="bg-black text-white px-4 py-2 rounded">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
