import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#eee9df] py-4 px-8 flex items-center justify-between">
      <div className="text-2xl font-serif tracking-wide">
        PUNCH
        <br />
        <span className="text-sm">Hong Kong</span>
      </div>

      <div className="flex items-center space-x-6 text-black text-lg">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          Personal Training
        </a>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="hover:underline"
          >
            Corporate Classes ▼
          </button>
          {isDropdownOpen && (
            <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-2">
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
        <a href="#" className="bg-black text-white px-4 py-2 rounded">
          Book Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
