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
      {/* <nav className="header-links contents text-base lg:text-lg"> */}
      <ul className="flex items-center space-x-6">
        <a className="p-3 xl:p-6 active" href="">
          <span>Home</span>
        </a>
        <a className="p-3 xl:p-6" href="">
          <span>Personal Training</span>
        </a>
        <div className="relative group">
          <a className="p-3 xl:p-6 cursor-pointer">
            <span>Corporate Classes ▾</span>
          </a>
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="" className="block px-4 py-2 hover:bg-gray-100">
              Option 1
            </a>
            <a href="" className="block px-4 py-2 hover:bg-gray-100">
              Option 2
            </a>
            <a href="" className="block px-4 py-2 hover:bg-gray-100">
              Option 3
            </a>
          </div>
        </div>
        <a className="p-3 xl:p-6" href="">
          <span>About</span>
        </a>
        <a className="p-3 xl:p-6" href="">
          <span>Contact Us</span>
        </a>
        <div className="flex items-center px-4 lg:px-6 xl:px-8">
          <button className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
            Book Now
          </button>
        </div>
      </ul>
      {/* </nav> */}
    </header>
  );
};

export default Navbar;
