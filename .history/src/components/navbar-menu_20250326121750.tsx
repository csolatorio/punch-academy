import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 w-full z-50 shadow-md bg-white">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-2">
        {/* Logo */}
        <img
          src={logo}
          alt="Poseidon Logo"
          className="md:h-24 h-12 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-10 text-sm xl:text-base font-medium text-black">
          {/* <button className="hover:text-title" onClick={() => navigate('/how-it-works')}>
            How it works
          </button>  */}
          <button
            className="hover:text-title"
            onClick={() => navigate("/about")}
          >
            About Us
          </button>
          <button
            className="hover:text-title"
            onClick={() => navigate("/culture")}
          >
            Culture
          </button>
          <button
            className="hover:text-title"
            onClick={() => navigate("/careers")}
          >
            Industries
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden absolute top-16 left-0 w-full bg-primary p-5 space-y-4">
          <button
            className="block hover:text-title"
            onClick={() => navigate("/how-it-works")}
          >
            How it works
          </button>
          <button
            className="block hover:text-title"
            onClick={() => navigate("/culture")}
          >
            Culture
          </button>
          <button
            className="block hover:text-title"
            onClick={() => navigate("/industries")}
          >
            Industries
          </button>
          <button
            className="block hover:text-title"
            onClick={() => navigate("/about")}
          >
            About Us
          </button>
          {/* <button
            className="text-xs bg-title text-white font-normal py-4 px-6 rounded-full drop-shadow-md"
            onClick={() => navigate('/careers')}
          >
            Hiring
          </button> */}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
