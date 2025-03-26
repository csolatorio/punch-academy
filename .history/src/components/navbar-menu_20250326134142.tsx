import { useState } from "react";
import Logo from "../assets/logo.png"; // Replace with actual path

const Navbar: React.FC = () => {
  return (
    <header className="bg-[#EBE8DE] shadow-lg h-24 hidden md:flex">
      <a
        href=""
        className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
      >
        <img className="" src={Logo} alt="" />
      </a>
      <nav className="header-links contents font-semibold text-base lg:text-lg">
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto space-x-6">
          <a className="p-3 xl:p-6 active">
            <a href="">
              <span>Home</span>
            </a>
          </a>
          <a className="p-3 xl:p-6">
            <a href="">
              <span>Personal Training</span>
            </a>
          </a>
          <a className="p-3 xl:p-6">
            <a href="">
              <span>Corporate Classes</span>
            </a>
          </a>
          <a className="p-3 xl:p-6">
            <a href="">
              <span>About</span>
            </a>
          </a>
          <a className="p-3 xl:p-6">
            <a href="">
              <span>Contact Us</span>
            </a>
          </a>
          <div className="flex items-center px-4 lg:px-6 xl:px-8">
            <button className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
              Book Now
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
