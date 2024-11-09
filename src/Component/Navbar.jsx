// ./src/Navbar.jsx
import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 px-10 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-gray-800 text-white shadow-lg" : "bg-transparent text-black"
      }`}
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo or Name */}
        <div className="text-2xl font-semibold">Danniel Adeleke</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-10">
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">Skills</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600">
            Download Resume
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 hover:text-blue-500"
            aria-label="Open Menu"
          >
            {/* Icon for mobile menu toggle */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
